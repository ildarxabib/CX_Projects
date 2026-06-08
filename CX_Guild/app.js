const specializations = [
  {
    symbol: "🔮",
    title: "Исследователь",
    archetype: "Чародей",
    description: "Специализируется на поиске инсайтов, изучении поведения клиентов, интервью, опросах и выявлении скрытых проблем."
  },
  {
    symbol: "🛡",
    title: "Проектировщик клиентских путей",
    archetype: "Паладин",
    description: "Проектирует клиентские сценарии, карты пути, точки контакта и целевые состояния процессов."
  },
  {
    symbol: "📊",
    title: "Аналитик",
    archetype: "Маг",
    description: "Работает с данными, метриками, воронками, закономерностями и доказательной базой."
  },
  {
    symbol: "🎭",
    title: "Редактор коммуникаций",
    archetype: "Бард",
    description: "Создаёт тексты, клиентские коммуникации, сценарии взаимодействия и улучшает понятность опыта."
  },
  {
    symbol: "🌿",
    title: "Архитектор процессов",
    archetype: "Друид",
    description: "Работает с сервисными схемами, процессами, взаимодействием команд и системным устройством клиентского опыта."
  },
  {
    symbol: "⚔",
    title: "Универсальный эксперт",
    archetype: "Воин",
    description: "Сочетает несколько направлений экспертизы и способен работать на стыке исследований, проектирования и аналитики."
  }
];

const competencies = [
  { id: "scenarioDesign", label: "Проектирование сценариев" },
  { id: "productThinking", label: "Продуктовое мышление" },
  { id: "customerResearch", label: "Исследования клиентов" },
  { id: "analytics", label: "Аналитика и метрики" },
  { id: "processes", label: "Работа с процессами" },
  { id: "systemsThinking", label: "Системное мышление" }
];

const toolCategories = [
  {
    title: "Исследование",
    items: [
      { icon: "🔍", label: "Глубинные интервью" },
      { icon: "📋", label: "Опросы клиентов" },
      { icon: "🧪", label: "UX-тестирование" },
      { icon: "📞", label: "Анализ обращений" }
    ]
  },
  {
    title: "Проектирование",
    items: [
      { icon: "🗺", label: "Карта клиентского пути" },
      { icon: "🧩", label: "Service Blueprint" },
      { icon: "🎯", label: "JTBD" },
      { icon: "📌", label: "Impact Mapping" },
      { icon: "📖", label: "Jobs Story" },
      { icon: "💥", label: "Карта клиентских болей" },
      { icon: "🎨", label: "Создание прототипов" }
    ]
  },
  {
    title: "Аналитика",
    items: [
      { icon: "📊", label: "Анализ данных" },
      { icon: "🗄", label: "SQL" },
      { icon: "🐍", label: "Python" }
    ]
  },
  {
    title: "Фасилитация и развитие решений",
    items: [
      { icon: "🎤", label: "Воркшопы" },
      { icon: "🤝", label: "Фасилитация" },
      { icon: "🧠", label: "Гипотезы и эксперименты" },
      { icon: "🔎", label: "Экспертный аудит" }
    ]
  }
];

const achievementItems = [
  "🚀 Участник продуктового запуска",
  "📐 Автор методики",
  "🔍 Исследователь клиентских проблем",
  "🎯 Лидер CX-инициативы",
  "📊 Решение на основе данных",
  "🤝 Влияние на решение стейкхолдера",
  "✨ Улучшение клиентского опыта",
  "🧭 Владелец клиентского пути",
  "🧠 Автор клиентского инсайта",
  "🏛 Участник создания стандартов"
];

const directionSymbols = {
  growth: "📈",
  decrease: "📉",
  acceleration: "⚡",
  other: "📌"
};

const form = document.querySelector("#profileForm");
const directionsList = document.querySelector("#directionsList");
const projectsList = document.querySelector("#projectsList");
const metricsList = document.querySelector("#metricsList");
const addDirectionButton = document.querySelector("#addDirectionButton");
const addProjectButton = document.querySelector("#addProjectButton");
const addMetricButton = document.querySelector("#addMetricButton");
const preview = document.querySelector("#profilePreview");
const toast = document.querySelector("#toast");
let itemCounter = 0;
let toastTimer;
let currentWikiMarkup = "";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderSpecializations() {
  const container = document.querySelector("#specializationOptions");
  container.innerHTML = specializations.map((item) => {
    const value = `${item.symbol} ${item.title}`;
    return `
      <label class="choice-card">
        <input class="choice-card__control" type="radio" name="specialization" value="${escapeHtml(value)}">
        <span class="choice-card__top">
          <span class="choice-card__symbol" aria-hidden="true">${item.symbol}</span>
          <span class="choice-card__indicator" aria-hidden="true"></span>
        </span>
        <span class="choice-card__title">${escapeHtml(item.title)}</span>
        <span class="choice-card__archetype">Архетип: ${escapeHtml(item.archetype)}</span>
        <span class="choice-card__description">${escapeHtml(item.description)}</span>
      </label>
    `;
  }).join("");
}

function renderCompetencies() {
  document.querySelector("#competencySliders").innerHTML = competencies.map((competency) => `
    <label class="competency" for="${competency.id}">
      <span class="competency__label">${escapeHtml(competency.label)}</span>
      <input type="range" id="${competency.id}" min="1" max="5" value="3" data-competency="${escapeHtml(competency.label)}">
      <output class="competency__value" for="${competency.id}">3</output>
    </label>
  `).join("");
}

function renderCheckboxes(containerId, name, items) {
  document.querySelector(`#${containerId}`).innerHTML = items.map((item) => `
    <label class="check-option">
      <input type="checkbox" name="${name}" value="${escapeHtml(item)}">
      <span>${escapeHtml(item)}</span>
    </label>
  `).join("");
}

function renderToolGroups() {
  document.querySelector("#toolOptions").innerHTML = toolCategories.map((category) => `
    <section class="tool-group">
      <h4>${escapeHtml(category.title)}</h4>
      <div class="check-grid tool-grid">
        ${category.items.map((item) => `
          <label class="check-option tool-option">
            <input type="checkbox" name="tools" value="${escapeHtml(item.label)}">
            <span class="tool-option__icon" aria-hidden="true">${item.icon}</span>
            <span>${escapeHtml(item.label)}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function createDirection(value = "") {
  itemCounter += 1;
  const id = itemCounter;
  const row = document.createElement("div");
  row.className = "direction-row";
  row.innerHTML = `
    <label class="field" for="direction-${id}">
      <span>Направление ${directionsList.children.length + 1}</span>
      <input type="text" id="direction-${id}" data-direction value="${escapeHtml(value)}">
    </label>
    <button class="remove-button remove-button--boxed" type="button" aria-label="Удалить направление">Удалить</button>
  `;

  row.querySelector(".remove-button").addEventListener("click", () => {
    row.remove();
    renumberDirections();
    updateAll();
  });

  directionsList.appendChild(row);
}

function renumberDirections() {
  [...directionsList.children].forEach((row, index) => {
    row.querySelector(".field > span").textContent = `Направление ${index + 1}`;
  });
}

function createProject(data = {}) {
  if (projectsList.children.length >= 5) return;

  itemCounter += 1;
  const id = itemCounter;
  const card = document.createElement("article");
  card.className = "repeat-card";
  card.dataset.type = "project";
  card.innerHTML = `
    <div class="repeat-card__heading">
      <span class="repeat-card__title">Проект ${projectsList.children.length + 1}</span>
      <button class="remove-button" type="button">Удалить</button>
    </div>
    <div class="field-grid field-grid--two">
      <label class="field" for="project-${id}-name">
        <span>Название проекта</span>
        <input type="text" id="project-${id}-name" data-field="name">
      </label>
      <label class="field" for="project-${id}-role">
        <span>Роль в проекте</span>
        <input type="text" id="project-${id}-role" data-field="role">
      </label>
      <label class="field" for="project-${id}-contribution">
        <span>Что было сделано</span>
        <textarea id="project-${id}-contribution" data-field="contribution" rows="3"></textarea>
      </label>
      <label class="field" for="project-${id}-result">
        <span>Результат / эффект</span>
        <textarea id="project-${id}-result" data-field="result" rows="3"></textarea>
      </label>
    </div>
  `;

  Object.entries(data).forEach(([key, value]) => {
    const field = card.querySelector(`[data-field="${key}"]`);
    if (field) field.value = value;
  });

  card.querySelector(".remove-button").addEventListener("click", () => {
    card.remove();
    renumberRepeatCards(projectsList, "Проект");
    updateAll();
  });

  projectsList.appendChild(card);
  updateLimits();
}

function createMetric(data = {}) {
  if (metricsList.children.length >= 5) return;

  itemCounter += 1;
  const id = itemCounter;
  const card = document.createElement("article");
  card.className = "repeat-card";
  card.dataset.type = "metric";
  card.innerHTML = `
    <div class="repeat-card__heading">
      <span class="repeat-card__title">Показатель ${metricsList.children.length + 1}</span>
      <button class="remove-button" type="button">Удалить</button>
    </div>
    <div class="field-grid metric-field-grid">
      <label class="field" for="metric-${id}-name">
        <span>Показатель</span>
        <input type="text" id="metric-${id}-name" data-field="name">
      </label>
      <label class="field" for="metric-${id}-direction">
        <span>Направление изменения</span>
        <select id="metric-${id}-direction" data-field="direction">
          <option value="growth">Рост</option>
          <option value="decrease">Снижение</option>
          <option value="acceleration">Ускорение</option>
          <option value="other">Другое</option>
        </select>
      </label>
      <label class="field" for="metric-${id}-value">
        <span>Значение</span>
        <input type="text" id="metric-${id}-value" data-field="value">
      </label>
    </div>
  `;

  Object.entries(data).forEach(([key, value]) => {
    const field = card.querySelector(`[data-field="${key}"]`);
    if (field) field.value = value;
  });

  card.querySelector(".remove-button").addEventListener("click", () => {
    card.remove();
    renumberRepeatCards(metricsList, "Показатель");
    updateAll();
  });

  metricsList.appendChild(card);
  updateLimits();
}

function renumberRepeatCards(container, title) {
  [...container.children].forEach((card, index) => {
    card.querySelector(".repeat-card__title").textContent = `${title} ${index + 1}`;
  });
  updateLimits();
}

function updateLimits() {
  const projectLimitReached = projectsList.children.length >= 5;
  const metricLimitReached = metricsList.children.length >= 5;

  addProjectButton.disabled = projectLimitReached;
  addMetricButton.disabled = metricLimitReached;
  document.querySelector("#projectsLimit").hidden = !projectLimitReached;
  document.querySelector("#metricsLimit").hidden = !metricLimitReached;
}

function getCheckedValues(name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function getRepeatData(container) {
  return [...container.querySelectorAll(".repeat-card")]
    .map((card) => {
      const result = {};
      card.querySelectorAll("[data-field]").forEach((field) => {
        result[field.dataset.field] = field.value.trim();
      });
      return result;
    })
    .filter((item) => Object.entries(item).some(([key, value]) => key !== "direction" && value));
}

function getSelectedSpecialization() {
  const value = form.querySelector('input[name="specialization"]:checked')?.value || "";
  const item = specializations.find((specialization) => `${specialization.symbol} ${specialization.title}` === value);
  return {
    name: value,
    archetype: item?.archetype || ""
  };
}

function collectData() {
  const competencyValues = competencies.map((competency) => {
    const input = document.querySelector(`#${competency.id}`);
    return {
      label: competency.label,
      value: Number(input.value)
    };
  });

  const tools = getCheckedValues("tools");
  const customTool = document.querySelector("#customTool").value.trim();
  if (customTool && !tools.includes(customTool)) tools.push(customTool);

  const specialization = getSelectedSpecialization();
  const projects = getRepeatData(projectsList);
  const metrics = getRepeatData(metricsList);
  const achievements = getCheckedValues("achievements");
  const contributionCount = projects.length + metrics.length + tools.length + achievements.length;

  return {
    fullName: document.querySelector("#fullName").value.trim(),
    role: document.querySelector("#role").value.trim(),
    team: document.querySelector("#team").value.trim(),
    focus: document.querySelector("#focus").value.trim(),
    specialization: specialization.name,
    archetype: specialization.archetype,
    strength: document.querySelector("#strength").value.trim(),
    competencies: competencyValues,
    directions: [...directionsList.querySelectorAll("[data-direction]")]
      .map((input) => input.value.trim())
      .filter(Boolean),
    tools,
    projects,
    metrics,
    achievements,
    level: getLevel(contributionCount)
  };
}

function getLevel(count) {
  if (count <= 2) return "🌱 Наблюдатель";
  if (count <= 5) return "⚒ Практик";
  if (count <= 8) return "🛡 Эксперт";
  if (count <= 12) return "🏆 Мастер";
  return "👑 Наставник гильдии";
}

function dots(value) {
  return `${"●".repeat(value)}<span>${"○".repeat(5 - value)}</span>`;
}

function renderTags(items) {
  if (!items.length) return '<span class="empty-value">—</span>';
  return `<div class="tag-list">${items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function normalizeMetricName(name) {
  const withoutQuantity = String(name || "").replace(/^Количество\s+/i, "");
  return withoutQuantity ? withoutQuantity.charAt(0).toLowerCase() + withoutQuantity.slice(1) : "";
}

function formatMetric(metric) {
  const symbol = directionSymbols[metric.direction] || directionSymbols.other;
  const core = [metric.value, normalizeMetricName(metric.name)].filter(Boolean).join(" ");
  return `${symbol} ${core || "Показатель"}`;
}

function getToolIcon(label) {
  for (const category of toolCategories) {
    const tool = category.items.find((item) => item.label === label);
    if (tool) return tool.icon;
  }
  return "🔧";
}

function renderTools(items) {
  if (!items.length) return '<span class="empty-value">—</span>';
  return `
    <div class="tool-preview-list">
      ${items.map((item) => `
        <div class="tool-preview-item">
          <span aria-hidden="true">${getToolIcon(item)}</span>
          <span>${escapeHtml(item)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPreview(data) {
  preview.innerHTML = `
    <header class="profile-identity">
      <h3 class="profile-name">${escapeHtml(data.fullName || "Имя эксперта")}</h3>
      <div class="profile-meta-list">
        <p>${escapeHtml(data.role || "Роль")}</p>
      </div>
      <div class="profile-badges">
        <span class="profile-badge profile-badge--primary">${escapeHtml(data.specialization || "Специализация не выбрана")}</span>
        <span class="profile-badge profile-badge--neutral">Архетип: ${escapeHtml(data.archetype || "—")}</span>
        <span class="profile-badge profile-badge--neutral">${escapeHtml(data.level)}</span>
      </div>
    </header>

    <section class="preview-section">
      <h3>Сильные стороны</h3>
      <p class="${data.strength ? "preview-quote" : "empty-value"}">${escapeHtml(data.strength || "—")}</p>
    </section>

    <section class="preview-section">
      <h3>Компетенции</h3>
      <div class="skill-list">
        ${data.competencies.map((competency) => `
          <div class="skill-row">
            <span>${escapeHtml(competency.label)}</span>
            <span class="skill-dots" aria-label="${competency.value} из 5">${dots(competency.value)}</span>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="preview-section">
      <h3>Направления</h3>
      ${renderTags(data.directions)}
    </section>

    <section class="preview-section">
      <h3>Инструменты эксперта</h3>
      ${renderTools(data.tools)}
    </section>

    <section class="preview-section">
      <h3>Достижения</h3>
      ${renderTags(data.achievements)}
    </section>
  `;
}

function normalizeWikiValue(value) {
  const normalized = String(value ?? "")
    .replace(/\r?\n+/g, "; ")
    .replace(/\|/g, "\\|")
    .replace(/\s+/g, " ")
    .trim();
  return normalized || "—";
}

function getProfileRows(data) {
  const competencyText = data.competencies
    .map((competency) => `${competency.label}: ${"●".repeat(competency.value)}${"○".repeat(5 - competency.value)}`)
    .join("; ");

  const projectsText = data.projects.map((project) => (
    `${project.name || "Проект"} — роль: ${project.role || "—"}; ` +
    `вклад: ${project.contribution || "—"}; эффект: ${project.result || "—"}`
  )).join("; ");

  const metricText = data.metrics.map(formatMetric).join("; ");

  return [
    ["Имя", data.fullName],
    ["Роль", data.role],
    ["Команда", data.team],
    ["Специализация", data.specialization],
    ["Архетип", data.archetype],
    ["Уровень профиля", data.level],
    ["Сильные стороны", data.strength],
    ["Компетенции", competencyText],
    ["Направления", data.directions.join("; ")],
    ["Инструменты эксперта", data.tools.join("; ")],
    ["Текущий фокус", data.focus],
    ["Ключевые проекты", projectsText],
    ["Влияние на показатели", metricText],
    ["Достижения", data.achievements.join("; ")]
  ];
}

function generateWiki(data) {
  const rows = getProfileRows(data);

  return [
    "||Блок||Значение||",
    ...rows.map(([label, value]) => `|${normalizeWikiValue(label)}|${normalizeWikiValue(value)}|`)
  ].join("\n");
}

function updateSlider(input) {
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);
  const position = ((value - min) / (max - min)) * 100;
  input.style.setProperty("--range-position", `${position}%`);
  input.closest(".competency").querySelector("output").value = value;
}

function updateAll() {
  document.querySelectorAll('input[type="range"]').forEach(updateSlider);
  const data = collectData();
  renderPreview(data);
  currentWikiMarkup = generateWiki(data);
  document.querySelector("#formLevel").textContent = data.level;
  updateLimits();
}

function clearForm() {
  form.reset();
  form.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  form.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  form.querySelectorAll('input[type="range"]').forEach((input) => {
    input.value = 1;
  });

  directionsList.innerHTML = "";
  projectsList.innerHTML = "";
  metricsList.innerHTML = "";
  createDirection();
  createProject();
  createMetric();
  updateAll();
}

async function copyWiki() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentWikiMarkup);
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = currentWikiMarkup;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand("copy");
      temporary.remove();
      if (!copied) throw new Error("Copy command failed");
    }
    showToast();
  } catch (error) {
    showToast("Не удалось скопировать. Попробуйте ещё раз.");
  }
}

function showToast(message = "Wiki-разметка скопирована.") {
  clearTimeout(toastTimer);
  toast.querySelector("span:last-child").textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 4500);
}

function initialize() {
  renderSpecializations();
  renderCompetencies();
  renderToolGroups();
  renderCheckboxes("achievementOptions", "achievements", achievementItems);

  form.addEventListener("input", updateAll);
  form.addEventListener("change", updateAll);

  addDirectionButton.addEventListener("click", () => {
    createDirection();
    updateAll();
  });

  addProjectButton.addEventListener("click", () => {
    createProject();
    updateAll();
  });

  addMetricButton.addEventListener("click", () => {
    createMetric();
    updateAll();
  });

  document.querySelector("#clearButton").addEventListener("click", clearForm);
  document.querySelector("#copyButton").addEventListener("click", copyWiki);

  createDirection();
  createProject();
  createMetric();
  updateAll();
}

initialize();
