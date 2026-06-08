import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync(new URL("../outputs/index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../outputs/styles.css", import.meta.url), "utf8");
const js = fs.readFileSync(new URL("../outputs/app.js", import.meta.url), "utf8");

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) throw new Error(`Duplicate ids: ${duplicateIds.join(", ")}`);

const requiredText = [
  "CX-гильдия",
  "Основная информация",
  "Специализация",
  "Компетенции",
  "Направления",
  "Инструменты эксперта",
  "Проекты и вклад",
  "Влияние на показатели",
  "Скопируй для страницы в Confluence"
];
requiredText.forEach((text) => {
  if (!html.includes(text)) throw new Error(`Missing text: ${text}`);
});

const removedText = [
  "Чем могу помочь",
  "Основной инструмент",
  "Методики и инструменты",
  "Работа со стейкхолдерами",
  "Customer Journey Analytics",
  "Карта системы",
  "CX Review Scorecard",
  "Experience Value Model",
  "CX Navigator"
];
removedText.forEach((text) => {
  if (html.includes(text) || js.includes(text)) throw new Error(`Removed text is still present: ${text}`);
});
if (/\bplaceholder\s*=/.test(html) || /\bplaceholder\s*=/.test(js)) {
  throw new Error("Placeholder examples are still present");
}
["fillDemoButton", "demoData", "loadDemo", "Заполнить пример"].forEach((text) => {
  if (html.includes(text) || js.includes(text)) throw new Error(`Demo functionality is still present: ${text}`);
});

const previewSource = js.slice(js.indexOf("function renderPreview"), js.indexOf("function normalizeWikiValue"));
["Ключевые проекты", "Влияние на показатели", "Текущий фокус", "data.team"].forEach((text) => {
  if (previewSource.includes(text)) throw new Error(`Compact preview still contains: ${text}`);
});

const braceBalance = [...css].reduce((balance, char) => {
  if (char === "{") return balance + 1;
  if (char === "}") return balance - 1;
  return balance;
}, 0);
if (braceBalance !== 0) throw new Error(`CSS brace balance: ${braceBalance}`);
if (!/\.side-sticky\s*\{[^}]*position:\s*sticky;/s.test(css)) {
  throw new Error("Desktop sticky positioning is missing");
}
if (!/\.side-column\s*\{[^}]*align-self:\s*stretch;/s.test(css)) {
  throw new Error("Sticky parent does not stretch to the form height");
}
if (!/@media \(max-width: 1080px\)[\s\S]*?\.side-sticky\s*\{[^}]*position:\s*static;/s.test(css)) {
  throw new Error("Sticky positioning is not disabled below desktop width");
}
if (!/#strength\s*\{[^}]*resize:\s*none;/s.test(css)) {
  throw new Error("Strength textarea is still resizable");
}
if (!/\.repeat-card textarea\s*\{[^}]*resize:\s*none;/s.test(css)) {
  throw new Error("Project textareas are still resizable");
}

const prefix = js.slice(0, js.indexOf("const form ="));
const functions = js.slice(js.indexOf("function getLevel"), js.indexOf("function updateSlider"));
const context = { result: null };
vm.createContext(context);
vm.runInContext(`
  ${prefix}
  ${functions}
  result = {
    specializations: specializations.map(({ title, archetype }) => [title, archetype]),
    toolCategories: toolCategories.map(({ title, items }) => [title, items]),
    levels: [getLevel(0), getLevel(3), getLevel(6), getLevel(9), getLevel(13)],
    escaped: normalizeWikiValue("значение | тест\\nстрока"),
    wiki: generateWiki({
      fullName: "Иван | Иванов",
      role: "",
      team: "",
      specialization: "🛡 Проектировщик клиентских путей",
      archetype: "Паладин",
      level: getLevel(9),
      strength: "",
      competencies: [{ label: "Системное мышление", value: 4 }],
      directions: ["Виртуальная АТС", "Облачное видеонаблюдение"],
      tools: ["Service Blueprint", "SQL", "Python"],
      focus: "",
      projects: [{
        name: "Запуск",
        role: "Проектировщик",
        contribution: "Сценарий",
        result: "Эффект"
      }],
      metrics: [{ name: "Количество обращений", direction: "decrease", value: "−12%" }],
      achievements: []
    })
  };
`, context);

const expectedLevels = [
  "🌱 Наблюдатель",
  "⚒ Практик",
  "🛡 Эксперт",
  "🏆 Мастер",
  "👑 Наставник гильдии"
];
const expectedSpecializations = [
  ["Исследователь", "Чародей"],
  ["Проектировщик клиентских путей", "Паладин"],
  ["Аналитик", "Маг"],
  ["Редактор коммуникаций", "Бард"],
  ["Архитектор процессов", "Друид"],
  ["Универсальный эксперт", "Воин"]
];
if (JSON.stringify(context.result.specializations) !== JSON.stringify(expectedSpecializations)) {
  throw new Error("Specializations or archetypes do not match requirements");
}
if (context.result.toolCategories.length !== 4) {
  throw new Error("Tool categories do not match requirements");
}
if (context.result.toolCategories.flatMap(([, items]) => items).length !== 18) {
  throw new Error("Tool list does not contain exactly 18 items");
}
if (context.result.toolCategories.flatMap(([, items]) => items).some((item) => !item.icon || !item.label)) {
  throw new Error("A tool is missing its icon or label");
}
if (JSON.stringify(context.result.levels) !== JSON.stringify(expectedLevels)) {
  throw new Error("Level thresholds do not match requirements");
}
if (context.result.escaped !== "значение \\| тест; строка") {
  throw new Error(`Wiki escaping failed: ${context.result.escaped}`);
}
if (!context.result.wiki.startsWith("||Блок||Значение||")) {
  throw new Error("Wiki header is missing");
}
if (!context.result.wiki.includes("Иван \\| Иванов")) {
  throw new Error("Wiki pipe escaping is missing");
}
if (!context.result.wiki.includes("|Роль|—|")) {
  throw new Error("Empty wiki values are not normalized");
}
if (!context.result.wiki.includes("|Архетип|Паладин|")) {
  throw new Error("Archetype row is missing");
}
if (!context.result.wiki.includes("|Направления|Виртуальная АТС; Облачное видеонаблюдение|")) {
  throw new Error("Directions row is invalid");
}
if (!context.result.wiki.includes("|Инструменты эксперта|Service Blueprint; SQL; Python|")) {
  throw new Error("Tools row is invalid");
}
if (!context.result.wiki.includes("📉 −12% обращений")) {
  throw new Error("Metric formatting failed");
}
if (!context.result.wiki.includes("Запуск — роль: Проектировщик; вклад: Сценарий; эффект: Эффект")) {
  throw new Error("Project details were lost from wiki markup");
}
["Чем могу помочь", "Основной инструмент", "Методики и инструменты"].forEach((label) => {
  if (context.result.wiki.includes(label)) throw new Error(`Removed wiki row is still present: ${label}`);
});
["ClipboardItem", "text/html", "generateHtmlTable"].forEach((text) => {
  if (js.includes(text)) throw new Error(`HTML clipboard format is still present: ${text}`);
});
if (!js.includes("navigator.clipboard.writeText(currentWikiMarkup)")) {
  throw new Error("Plain-text wiki clipboard copy is missing");
}

console.log(`Verified compact preview, clean fields, sticky styles, wiki details and ${ids.length} unique ids.`);
