const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");

const icons = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  lightning: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-9 13h8l-1 7 9-13h-8l1-7Z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="M19 3v4"/><path d="M21 5h-4"/><path d="M5 17v3"/><path d="M6.5 18.5h-3"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3 21 2"/><path d="M15 8h4"/><path d="M17 6v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 9a15 15 0 0 1 20 0"/><path d="M12 20h.01"/></svg>',
  sim: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6V2Z"/><path d="M14 2v6h6"/><path d="M9 14h6"/><path d="M9 18h2"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  phoneCheck: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/><path d="m15 5 2 2 4-4"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/></svg>',
  wand: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9H6"/><path d="M20 9h-2"/><path d="m17.8 6.2 1.4-1.4"/><path d="m10.8 13.2-1.4 1.4"/><path d="m17.8 11.8 1.4 1.4"/><path d="m10.8 4.8-1.4-1.4"/><path d="M14 9h2"/><path d="m3 21 9-9"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  idCard: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h3.5"/><path d="M14 14h2.5"/><path d="M6.5 17c.8-1.4 4.2-1.4 5 0"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21a7 7 0 0 0-14 0"/><circle cx="12" cy="7" r="4"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 8h1"/><path d="M14 8h1"/><path d="M9 12h1"/><path d="M14 12h1"/><path d="M9 16h1"/><path d="M14 16h1"/></svg>'
};

document.querySelector(".icon-pin").innerHTML = icons.pin;

const tariffs = [
  {
    id: "start",
    name: "Business Start",
    for: "Для фаундера и solo-предпринимателя",
    minutes: 300,
    gb: 20,
    tokens: 400,
    price: 690,
    tooltip: "На что хватит:\n• ~80 постов для соцсетей\n• ~40 писем с нуля\n• ~20 резюме звонков"
  },
  {
    id: "grow",
    name: "Business Grow",
    badge: "Популярный",
    for: "Для растущей команды",
    minutes: 400,
    gb: 30,
    tokens: 600,
    price: 990,
    tooltip: "На что хватит:\n• ~120 постов для соцсетей\n• ~60 писем с нуля\n• ~30 резюме звонков"
  },
  {
    id: "pro",
    name: "Business Pro",
    for: "Для активных команд и медиа",
    minutes: 600,
    gb: 50,
    tokens: 1000,
    price: 1490,
    tooltip: "На что хватит:\n• ~200 постов для соцсетей\n• ~100 писем с нуля\n• ~50 резюме звонков"
  }
];

const useCases = [
  {
    title: "Digital-агентство, 12 человек",
    task: "Быстро подключить команду без похода в офис",
    solution: "Batch eSIM — 12 симок за 10 минут. Единый пакет на команду.",
    accent: "Подключили команду до первого созвона"
  },
  {
    title: "Фаундер, запускает стартап",
    task: "Связь для бизнеса с первого дня",
    solution: "Business Start, eSIM мгновенно, Yota ID сразу.",
    accent: "Запустился быстрее, чем успел заварить кофе"
  },
  {
    title: "Продакшн-студия, съемки по всему миру",
    task: "Связь без роуминговых сюрпризов",
    solution: "Business Pro. Единый data-пакет в 100+ странах.",
    accent: "Работает в Дубае так же, как в Москве"
  },
  {
    title: "IT-команда на удаленке",
    task: "Управлять связью сотрудников без звонков оператору",
    solution: "Programmable Connectivity. Лимиты, политики, мгновенное отключение.",
    accent: "Номер можно отключить удаленно за пару секунд"
  }
];

const benefits = [
  {
    id: "badge",
    icon: "phoneCheck",
    title: "Брендированный бейдж при звонке",
    text: "Синяя галочка \"Подтвержденный абонент Yota\" при исходящих звонках. Клиенты видят, что звонит реальная компания."
  },
  {
    icon: "globe",
    title: "Пакет цифрового кочевника",
    text: "Единый роуминг на 100+ стран. Один пакет данных — без сюрпризов в счете."
  },
  {
    icon: "wand",
    title: "AI-ассистент для звонков",
    text: "Анализирует звонки, строит summary, напоминает о договоренностях. Пропущенный звонок — не потерянный клиент."
  },
  {
    icon: "shield",
    title: "Киберзащитник",
    text: "Защита от спама и DDoS-атак. Работает автоматически, не требует настройки."
  },
  {
    icon: "target",
    title: "AI-Таргет",
    text: "Смарт-продвижение на основе данных о поведении аудитории. Настраивай рекламу прямо из кабинета."
  },
  {
    id: "yota-id",
    icon: "idCard",
    title: "Yota ID",
    text: "Подключается всем абонентам автоматически",
    badge: "Включено в тариф"
  }
];

const companies = [
  {
    id: "tech",
    title: "ООО «Технологии будущего»",
    inn: "7701234567",
    type: "ooo",
    ogrn: "1237700123456",
    address: "Москва, ул. Новаторов, 8",
    head: "Смирнов Даниил Олегович"
  },
  {
    id: "ip",
    title: "ИП Иванов Алексей Сергеевич",
    inn: "771234567890",
    type: "ip",
    ogrn: "323774600123456",
    address: "Москва, ул. Лесная, 14",
    head: "Иванов Алексей Сергеевич"
  },
  {
    id: "digital",
    title: "ООО «Цифровые решения»",
    inn: "7709876543",
    type: "ooo",
    ogrn: "1237700987654",
    address: "Москва, Пресненская наб., 12",
    head: "Кузнецова Мария Андреевна"
  }
];

const aiQuestions = [
  {
    title: "Сколько человек в команде?",
    key: "team",
    type: "single",
    options: ["Только я", "2-5 человек", "6-15 человек", "16-50 человек", "Больше 50"]
  },
  {
    title: "Чем занимается бизнес?",
    key: "business",
    type: "single",
    options: ["IT и разработка", "Медиа и контент", "Маркетинг и реклама", "Консалтинг и услуги", "Торговля и e-commerce", "Другое"]
  },
  {
    title: "Какие задачи решает команда?",
    key: "tasks",
    type: "multi",
    options: ["Звонки клиентам", "Удаленная работа", "Международные проекты", "Создание контента", "Аналитика и данные", "Командные коммуникации"]
  }
];

const steps = ["Тип подключения", "Данные покупателя", "Способ получения", "Счет и оплата"];
const addonPrices = {
  agent: 290,
  cyber: 190,
  target: 390
};

const state = {
  view: "landing",
  modal: null,
  selectedTariff: tariffs[1],
  yotaBannerOpen: false,
  checkoutStep: 0,
  simType: "plastic",
  porting: false,
  portNumbers: [""],
  sims: 1,
  addons: {
    agent: false,
    cyber: false,
    target: false
  },
  companySearch: "",
  companySuggestions: false,
  selectedCompany: null,
  identity: {
    loading: false,
    confirmed: false,
    error: false
  },
  delivery: {
    city: "",
    method: "courier",
    address: "",
    date: "",
    slot: ""
  },
  email: "",
  emailTouched: false,
  accepted: false,
  payment: "sbp",
  paymentPanel: null,
  custom: {
    minutes: 400,
    gb: 30,
    tokens: 600
  },
  ai: {
    step: 0,
    answers: {
      tasks: []
    },
    calculating: false,
    result: false,
    transitioning: false
  },
  otp: {
    step: "phone",
    phone: "",
    error: ""
  }
};

function icon(name, className = "") {
  return `<span class="icon ${className}" aria-hidden="true">${icons[name] || icons.info}</span>`;
}

function money(value) {
  return `${Math.round(value).toLocaleString("ru-RU")} руб.`;
}

function priceHtml(value) {
  return `${Math.round(value).toLocaleString("ru-RU")} <span class="price-currency">руб.</span>`;
}

function customPrice() {
  const raw = 250 + state.custom.minutes * 0.65 + state.custom.gb * 12 + state.custom.tokens * 0.23;
  return Math.round(raw / 10) * 10;
}

function getCustomTariff() {
  return {
    id: "custom",
    name: "Свой тариф",
    for: "Собран под задачи твоего бизнеса",
    minutes: state.custom.minutes,
    gb: state.custom.gb,
    tokens: state.custom.tokens,
    price: customPrice(),
    tooltip: "Токены можно потратить на тексты, звонки и контент прямо в приложении Yota"
  };
}

function cartTotal() {
  const base = state.selectedTariff.price * state.sims;
  const addons = Object.entries(state.addons).reduce((sum, [key, active]) => {
    return sum + (active ? addonPrices[key] * state.sims : 0);
  }, 0);
  return base + addons;
}

function render() {
  if (state.view === "landing") {
    app.innerHTML = renderLanding();
  }
  if (state.view === "checkout") {
    app.innerHTML = renderCheckout();
  }
  if (state.view === "success") {
    app.innerHTML = renderSuccess();
  }
  renderModal();
}

function renderLanding() {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <div class="eyebrow">✦ Mobile-платформа для бизнеса</div>
          <h1><span class="hero-title-line">Связь, которая работает</span><span class="hero-title-line">на твой бизнес</span></h1>
          <p>Подключение за 2 минуты. eSIM или физическая SIM. AI-токены в каждом тарифе. Yota ID — ключ к городу.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#tariffs">Выбрать тариф →</a>
            <a class="btn btn-secondary" href="#features">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="features">
      <div class="section-head">
        <div>
          <h2 class="section-title">Почему Yota для бизнеса</h2>
        </div>
      </div>
      <div class="grid grid-3">
        ${featureCard("lightning", "Подключение за 2 минуты", "Без визитов в офис и бумажных договоров. Данные подтянем автоматически через Госуслуги, Сбер ID или T-ID.")}
        ${featureCard("sparkles", "AI-токены в каждом тарифе", "Используй для генерации текстов, анализа звонков и автоматизации рутины. Связь и AI в одном пакете.")}
        ${featureCard("key", "Yota ID — ключ к городу", "Открывает доступ к партнерской экосистеме: кофейни, коворкинги, спортклубы, бизнес-залы.")}
      </div>
    </section>

    <section class="page-section" id="scenarios">
      <div class="section-head">
        <div>
          <h2 class="section-title">Как Yota для бизнеса работает в реальных задачах</h2>
          <p class="section-copy">Несколько примеров из жизни технологичных команд</p>
        </div>
      </div>
      <div class="grid scenario-grid">
        ${useCases.map(renderScenario).join("")}
      </div>
    </section>

    <section class="page-section" id="tariffs">
      <div class="section-head">
        <h2 class="section-title">Выбери тариф</h2>
        <div class="tariff-note has-tooltip">
          ✦ Токены — AI-кредиты в твоем тарифе
          <span class="info-dot" tabindex="0">i</span>
          <span class="tooltip">Используй токены для генерации текстов, анализа звонков и контента прямо в приложении Yota</span>
        </div>
      </div>
      <div class="grid grid-4">
        ${tariffs.map(renderTariffCard).join("")}
        ${renderCustomCard()}
      </div>
    </section>

    <section class="page-section" id="benefits">
      <div class="section-head">
        <h2 class="section-title">Усиль свой тариф</h2>
      </div>
      <div class="grid grid-3">
        ${benefits.map(renderBenefit).join("")}
      </div>
    </section>
  `;
}

function featureCard(iconName, title, text) {
  return `
    <article class="card feature-card">
      <div class="feature-icon">${icon(iconName)}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}

function renderScenario(item) {
  return `
    <article class="card scenario-card">
      <div class="scenario-meta">
        <span class="pill pill-blue">${item.title}</span>
      </div>
      <div><strong>Задача</strong><p>${item.task}</p></div>
      <div><strong>Решение</strong><p>${item.solution}</p></div>
      <blockquote class="scenario-quote">${item.accent}</blockquote>
    </article>
  `;
}

function renderTariffCard(tariff) {
  return `
    <article class="card tariff-card">
      <div class="tariff-top">
        ${tariff.badge ? `<span class="badge badge-blue">${tariff.badge}</span>` : ""}
      </div>
      <h3 class="tariff-title">${tariff.name}</h3>
      <p class="tariff-subtitle">${tariff.for}</p>
      <div class="spec-list">
        <div class="spec-row">${icon("phone")}<span>${tariff.minutes} минут</span></div>
        <div class="spec-row">${icon("wifi")}<span>${tariff.gb} ГБ</span></div>
      </div>
      <div class="token-block has-tooltip" tabindex="0">
        <span>✦ ${tariff.tokens} токенов</span>
        <span class="info-dot">i</span>
        <span class="tooltip">${tariff.tooltip}</span>
      </div>
      <div class="price">${priceHtml(tariff.price)} <small>/мес за номер</small></div>
      <div class="cta-zone">
        <button class="btn btn-primary btn-full" type="button" data-action="select-tariff" data-tariff="${tariff.id}">Выбрать</button>
      </div>
    </article>
  `;
}

function renderCustomCard() {
  return `
    <article class="card custom-card">
      <div class="custom-spark">✦</div>
      <h3>Нужно что-то свое?</h3>
      <p>Собери тариф под задачи своего бизнеса</p>
      <div class="cta-zone">
        <div class="button-row">
          <button class="btn btn-white btn-full" type="button" data-action="open-ai">Подобрать с AI</button>
          <button class="btn btn-secondary btn-full" type="button" data-action="open-custom">Настроить самому</button>
        </div>
      </div>
    </article>
  `;
}

function renderBenefit(item) {
  const hover = item.id === "badge" ? " benefit-hover" : "";
  const accent = item.id === "yota-id" ? " accent" : "";
  return `
    <article class="card benefit-card${hover}${accent}">
      <div class="benefit-head">
        <div class="benefit-icon">${icon(item.icon)}</div>
        ${item.badge ? `
          <div class="scenario-meta benefit-badge-row">
            <span class="badge badge-soft">${item.badge}</span>
          </div>
        ` : ""}
      </div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      ${item.id === "badge" ? renderCallPreview() : ""}
      ${item.id === "yota-id" ? `
        <div class="cta-zone">
          <button class="btn btn-ghost btn-full" type="button" data-action="open-yota-id">Подробнее</button>
        </div>
      ` : ""}
    </article>
  `;
}

function renderCallPreview() {
  return `
    <div class="benefit-pop">
      <div class="call-preview">
        <div class="call-screen">
          <div class="helper-text">Входящий звонок</div>
          <div class="call-name">Yota Business <span class="check-blue">✓</span></div>
          <div class="helper-text">Подтвержденный абонент Yota</div>
        </div>
      </div>
    </div>
  `;
}

function renderCheckout() {
  const progress = Math.round(((state.checkoutStep + 1) / steps.length) * 100);
  return `
    <div class="checkout-page">
      <section class="yota-id-strip">
        <div class="yota-id-inner">
          <div class="strip-main">
            <div class="strip-text">
              Мы создали для тебя
              <span class="yota-id-hover" tabindex="0">
                Yota ID
                <span class="strip-tooltip">
                  <strong>Yota ID — ключ к городу</strong>
                  <span>Кофейни, коворкинги, спортклубы и бизнес-залы рядом с тобой</span>
                  <span>Мили и бонусные баллы у партнеров</span>
                  <span>Единый цифровой профиль и быстрый вход в сервисы</span>
                </span>
              </span>
              — он уже ждет в личном кабинете.
            </div>
            <button class="link-button" type="button" data-action="toggle-yota-banner">Перейти в личный кабинет</button>
          </div>
          ${state.yotaBannerOpen ? `
            <div class="strip-details">
              <div>Не просто тариф — ключ к городу на высоких бизнес-скоростях</div>
              <div>Коллабы с ресторанами, кофейнями, спортклубами, коворкингами</div>
              <div>Мили и бонусные баллы у партнеров</div>
              <div>Ты внутри коммьюнити с возможностями для синергии</div>
            </div>
          ` : ""}
        </div>
      </section>
      <div class="checkout-grid">
        <aside class="side-card">
          <p class="progress-label">Прогресс выполнения: ${progress}%</p>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
          <div class="stepper">
            ${steps.map((label, index) => renderStepperItem(label, index)).join("")}
          </div>
        </aside>
        <section class="step-card">
          ${renderStep()}
        </section>
        ${renderCart()}
      </div>
    </div>
  `;
}

function renderStepperItem(label, index) {
  const status = index < state.checkoutStep ? "completed" : index === state.checkoutStep ? "active" : "upcoming";
  const mark = index < state.checkoutStep ? "✓" : index + 1;
  return `
    <div class="stepper-item ${status}">
      <span class="stepper-dot">${mark}</span>
      <span>${label}</span>
    </div>
  `;
}

function renderStep() {
  if (state.checkoutStep === 0) return renderConnectionStep();
  if (state.checkoutStep === 1) return renderBuyerStep();
  if (state.checkoutStep === 2) return renderDeliveryStep();
  return renderPaymentStep();
}

function renderConnectionStep() {
  return `
    <h1>Как хочешь подключить тарифы?</h1>
    <div class="form-section">
      <h2>Тип SIM</h2>
      <div class="choice-grid">
        ${choiceCard({
          selected: state.simType === "plastic",
          action: "set-sim",
          value: "plastic",
          iconName: "sim",
          title: "Пластиковые SIM-карты",
          copy: "Доставим курьером или заберешь в салоне"
        })}
        ${choiceCard({
          selected: state.simType === "esim",
          action: "set-sim",
          value: "esim",
          iconName: "smartphone",
          title: "eSIM",
          copy: "Установка прямо на устройство. Без QR-кодов."
        })}
      </div>
      ${state.simType === "esim" ? `
        <div class="info-block">
          ${icon("info")}
          <div>
            После оплаты пришлем ссылку. Нажмешь — eSIM установится прямо на устройство. Без QR-кодов и лишних шагов.
          </div>
        </div>
      ` : ""}
    </div>
    <div class="form-section">
      <h2>Портирование номеров</h2>
      <div class="switch-row">
        <div>
          <strong>Хочу перенести номера компании</strong>
          <div class="helper-text">Сохраним привычные номера для клиентов и команды</div>
        </div>
        <label class="switch">
          <input type="checkbox" data-change="toggle-porting" ${state.porting ? "checked" : ""}>
          <span></span>
        </label>
      </div>
      ${state.porting ? renderPortingBlock() : ""}
    </div>
    <div class="step-actions step-actions-end">
      <button class="btn btn-primary" type="button" data-action="next-step">Далее</button>
    </div>
  `;
}

function renderPortingBlock() {
  return `
    <div class="info-block">
      ${icon("info")}
      <div>Портирование занимает до 8 рабочих дней. Связь не прерывается.</div>
    </div>
    <div class="port-list">
      ${state.portNumbers.map((number, index) => `
        <div>
          <div class="port-row">
            <input class="input" data-port-index="${index}" placeholder="+7 XXX XXX XX XX" value="${number}">
            <button class="icon-btn" type="button" data-action="remove-port-number" data-index="${index}" aria-label="Удалить номер">×</button>
          </div>
          <div class="port-status" data-port-status="${index}">${portStatus(number)}</div>
        </div>
      `).join("")}
    </div>
    <div class="button-row">
      <button class="btn btn-secondary" type="button" data-action="add-port-number">+ Добавить номер</button>
      <button class="btn btn-ghost" type="button">Загрузить список из файла</button>
    </div>
    <div class="helper-text">Поддерживаем .xlsx, .csv</div>
  `;
}

function choiceCard({ selected, action, value, iconName, title, copy }) {
  return `
    <button class="choice-card ${selected ? "selected" : ""}" type="button" data-action="${action}" data-value="${value}">
      <span class="radio-ui"></span>
      <span class="choice-body">
        <span class="choice-title">${title}</span>
        <span class="choice-copy">${copy}</span>
      </span>
    </button>
  `;
}

function portStatus(value) {
  if (!value.trim()) return "";
  const digits = value.replace(/\D/g, "");
  if (digits.includes("999")) return '<span class="status warning">Уже абонент Yota</span>';
  if (digits.length < 10) return '<span class="status error">Номер не найден</span>';
  return '<span class="status">Готов к портации</span>';
}

function renderBuyerStep() {
  const selected = state.selectedCompany;
  return `
    <h1>Осталось проверить данные</h1>
    <div class="form-section">
      <h2>Поиск компании</h2>
      <label class="field-group suggest-wrap">
        <span class="field-label">Найди компанию по ИНН или названию</span>
        <input class="input" data-company-search placeholder="Введи ИНН или название" value="${state.companySearch}">
        <div class="suggestions ${state.companySuggestions ? "" : "hide"}" data-suggestions>
          ${companies.map(company => `
            <button class="suggestion-item" type="button" data-action="select-company" data-company="${company.id}">
              <strong>${company.title}</strong>
              <div class="helper-text">ИНН ${company.inn}</div>
            </button>
          `).join("")}
        </div>
      </label>
      ${state.companySearch && !state.companySuggestions && !selected ? `<div class="error-text">Проверь номер ИНН или попробуй найти по названию</div>` : ""}
      ${selected ? renderCompanyData(selected) : ""}
    </div>
    ${selected && selected.type === "ip" ? renderIdentityBlock() : ""}
    <div class="step-actions">
      <button class="btn btn-ghost action-btn" type="button" data-action="prev-step">Назад</button>
      <button class="btn btn-primary action-btn" type="button" data-action="next-step" ${canGoFromBuyer() ? "" : "disabled"}>Далее</button>
    </div>
  `;
}

function renderCompanyData(company) {
  return `
    <div class="company-card">
      <span class="badge badge-soft">Данные подтверждены ✓</span>
      <div class="data-grid">
        ${dataItem("Полное наименование", company.title)}
        ${dataItem("ИНН", company.inn)}
        ${dataItem("ОГРН", company.ogrn)}
        ${dataItem("Юридический адрес", company.address)}
        ${dataItem(company.type === "ip" ? "Предприниматель" : "Руководитель", company.head)}
      </div>
    </div>
  `;
}

function dataItem(label, value) {
  return `<div class="data-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderIdentityBlock() {
  if (state.identity.loading) {
    return `
      <div class="form-section">
        <h2>Подтверди личные данные</h2>
        <div class="company-card">
          <div class="loader"></div>
          <p class="helper-text">Получаем данные...</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="form-section">
      <h2>Подтверди личные данные</h2>
      ${state.identity.error ? `<div class="info-block error">${icon("info")}<div>Не удалось получить данные. Попробуй другой способ или загрузи скан</div></div>` : ""}
      ${state.identity.confirmed ? `
        <div class="company-card">
          <span class="badge badge-soft">Данные подтверждены ✓</span>
          <div class="data-grid">
            ${dataItem("ФИО", "Иванов Алексей Сергеевич")}
            ${dataItem("Дата рождения", "12.04.1991")}
            ${dataItem("Паспорт", "**** 123456")}
          </div>
        </div>
      ` : `
        <div class="grid grid-2">
          <div class="company-card">
            <strong>Ввести вручную</strong>
            <label class="field-group"><span class="field-label">Серия и номер паспорта</span><input class="input" placeholder="0000 000000"></label>
            <label class="field-group"><span class="field-label">Дата выдачи</span><input class="input" placeholder="ДД.ММ.ГГГГ"></label>
            <label class="field-group"><span class="field-label">Кем выдан</span><input class="input" placeholder="Отделение"></label>
            <button class="btn btn-secondary btn-full" type="button" data-action="confirm-manual-id">Подтвердить</button>
          </div>
          <div class="company-card">
            <strong>Подтянуть через сервис</strong>
            <div class="service-grid">
              ${["Госуслуги", "Сбер ID", "Альфа ID", "T-ID"].map(name => `<button class="service-card" type="button" data-action="confirm-service-id">${name}</button>`).join("")}
            </div>
          </div>
        </div>
      `}
    </div>
  `;
}

function canGoFromBuyer() {
  if (!state.selectedCompany) return false;
  if (state.selectedCompany.type !== "ip") return true;
  return state.identity.confirmed;
}

function renderDeliveryStep() {
  return `
    <h1>Как получить SIM-карты?</h1>
    <div class="form-section">
      <label class="field-group">
        <span class="field-label">Город</span>
        <input class="input" data-delivery-field="city" placeholder="Начни вводить название города" value="${state.delivery.city}">
      </label>
    </div>
    <div class="form-section">
      <h2>Способ получения</h2>
      <div class="delivery-grid">
        ${deliveryChoice("courier", "Доставка курьером", "Выбери адрес, дату и временной слот")}
        ${deliveryChoice("express", "Экспресс-доставка", "Привезем в ближайшие 24 часа")}
        ${deliveryChoice("salon", "Самовывоз из салона Yota", "Покажем ближайшие салоны")}
        ${deliveryChoice("pickup", "Самовывоз из партнерского ПВЗ", "Ozon, Wildberries, Яндекс Маркет")}
      </div>
      ${renderDeliveryFields()}
      <div class="info-block">
        ${icon("info")}
        <div>Чтобы получить заказ, достаточно показать QR-код. Пришлем его после оплаты.</div>
      </div>
    </div>
    <div class="step-actions">
      <button class="btn btn-ghost action-btn" type="button" data-action="prev-step">Назад</button>
      <button class="btn btn-primary action-btn" type="button" data-action="next-step">Далее</button>
    </div>
  `;
}

function deliveryChoice(value, title, copy) {
  return `
    <button class="choice-card ${state.delivery.method === value ? "selected" : ""}" type="button" data-action="set-delivery" data-value="${value}">
      <span class="radio-ui"></span>
      <span>
        <span class="choice-title">${title}</span>
        <span class="choice-copy">${copy}</span>
      </span>
    </button>
  `;
}

function renderDeliveryFields() {
  if (state.delivery.method === "courier" || state.delivery.method === "express") {
    return `
      <div class="grid grid-3">
        <label class="field-group"><span class="field-label">Адрес</span><input class="input" data-delivery-field="address" placeholder="Улица, дом, офис" value="${state.delivery.address}"></label>
        <label class="field-group"><span class="field-label">Дата</span><input class="input" data-delivery-field="date" placeholder="Завтра" value="${state.delivery.date}"></label>
        <label class="field-group"><span class="field-label">Временной слот</span><input class="input" data-delivery-field="slot" placeholder="12:00-15:00" value="${state.delivery.slot}"></label>
      </div>
    `;
  }
  if (state.delivery.method === "salon") {
    return `
      <div class="salon-list">
        <div class="salon-item">ТЦ «Авиапарк», Ходынский бульвар, 4</div>
        <div class="salon-item">ул. Тверская, 18</div>
        <div class="salon-item">ТРЦ «Европейский», пл. Киевского вокзала, 2</div>
      </div>
    `;
  }
  return `
    <div class="salon-list has-tooltip">
      <div class="salon-item">ПВЗ Ozon, ул. Большая Дмитровка, 9</div>
      <div class="salon-item">ПВЗ Яндекс Маркет, ул. Арбат, 24</div>
      <span class="tooltip">Ozon, Wildberries, Яндекс Маркет</span>
    </div>
  `;
}

function renderPaymentStep() {
  const canOrder = isValidEmail(state.email) && state.accepted;
  return `
    <h1>Счет и оплата</h1>
    <div class="form-section">
      <label class="field-group">
        <span class="field-label">Укажи почту</span>
        <input class="input ${state.emailTouched && !isValidEmail(state.email) ? "error" : ""}" data-email placeholder="name@company.ru" value="${state.email}">
        <span class="helper-text">Продублируем счет, пришлем детали заказа и подтверждающие документы</span>
        ${state.emailTouched && !isValidEmail(state.email) ? `<span class="error-text">Нужна почта, чтобы отправить счет и детали заказа</span>` : ""}
      </label>
      <label class="checkbox-row">
        <input type="checkbox" data-change="accept-terms" ${state.accepted ? "checked" : ""}>
        <span>Подтверждаю получение доступа для управления корпоративными номерами в Личном кабинете на один из номеров заказа после оплаты счета</span>
      </label>
      <div class="info-block">
        ${icon("info")}
        <div>
          После оплаты один из номеров получит доступ к Личному кабинету. Логин и пароль придут на указанную почту. Убедись, что SIM будет у лица, ответственного за управление договором.
        </div>
      </div>
    </div>
    <div class="form-section">
      <h2>Как оплатить?</h2>
      <div class="payment-grid">
        ${paymentChoice("sbp", "Оплата по СБП B2B")}
        ${paymentChoice("invoice", "Оплата с расчетного счета организации")}
        ${paymentChoice("sber", "Оплата через СберБизнес")}
      </div>
      <div class="info-block">
        ${icon("info")}
        <div>Для заключения договора достаточно оплатить счет — никаких бумаг. Оплачивай только от имени организации, указанной в заказе.</div>
      </div>
      ${state.paymentPanel ? renderPaymentPanel() : ""}
    </div>
    <div class="step-actions payment-actions">
      <button class="btn btn-ghost action-btn" type="button" data-action="prev-step">Назад</button>
      <div class="order-action">
        <button class="btn btn-primary action-btn" type="button" data-action="submit-order" ${canOrder ? "" : "disabled"}>Оформить заказ</button>
        <div class="helper-text">Оформляя заказ, ты принимаешь условия оферты</div>
      </div>
    </div>
  `;
}

function paymentChoice(value, title) {
  return `
    <button class="choice-card ${state.payment === value ? "selected" : ""}" type="button" data-action="set-payment" data-value="${value}">
      <span class="radio-ui"></span>
      <span>
        <span class="choice-title">${title}</span>
      </span>
    </button>
  `;
}

function renderPaymentPanel() {
  if (state.payment === "sbp") {
    return `
      <div class="payment-panel">
        <button class="qr-box" type="button" data-action="pay-success" aria-label="Оплатить по QR"></button>
        <strong>Сканируй через бизнес-аккаунт твоего банка.</strong>
        <p class="helper-text">Счет продублировали на почту. Нажми на QR, чтобы пройти имитацию оплаты.</p>
      </div>
    `;
  }
  if (state.payment === "invoice") {
    return `
      <div class="payment-panel">
        <button class="btn btn-primary" type="button" data-action="download-bill">Скачать счет</button>
        <p>Не забудь оплатить счет — продублировали на почту. После оплаты пришлем чек и детали.</p>
      </div>
    `;
  }
  return `
    <div class="payment-panel">
      <button class="btn btn-primary" type="button" data-action="open-sber-sms">Перейти в СберБизнес</button>
      <p class="helper-text">Откроем подтверждение платежа через СберБизнес.</p>
    </div>
  `;
}

function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value.trim());
}

function renderCart() {
  const t = state.selectedTariff;
  return `
    <aside class="summary-card">
      <h2>Твой заказ</h2>
      <div class="summary-block">
        <div class="summary-line"><strong>${t.name}</strong><span>${money(t.price)}</span></div>
        <div class="helper-text">${t.minutes} минут / ${t.gb} ГБ / ${t.tokens} токенов</div>
        <div class="summary-line">
          <span>SIM-карты</span>
          <span class="counter">
            <button type="button" data-action="sim-minus">−</button>
            <strong>${state.sims}</strong>
            <button type="button" data-action="sim-plus">+</button>
          </span>
        </div>
        <div class="summary-line"><span>За номера</span><strong>${money(t.price * state.sims)}</strong></div>
      </div>
      <div class="summary-block">
        <strong>Усиливай свой тариф!</strong>
        ${addonCheckbox("agent", "Умный агент для обработки звонков", "Не теряй клиентов")}
        ${addonCheckbox("cyber", "Киберзащитник от DDoS-атак", "Будь спокоен")}
        ${addonCheckbox("target", "AI-таргет для бизнеса", "Продвигай!")}
      </div>
      <div class="summary-total">
        <span>Итого</span>
        <div class="summary-amount"><strong>${money(cartTotal())}</strong><span>/мес</span></div>
      </div>
    </aside>
  `;
}

function addonCheckbox(key, title, copy) {
  return `
    <label class="checkbox-row">
      <input type="checkbox" data-addon="${key}" ${state.addons[key] ? "checked" : ""}>
      <span>
        <strong>${title}</strong>
        <span>${copy} · +${money(addonPrices[key])}/мес</span>
      </span>
    </label>
  `;
}

function renderSuccess() {
  return `
    <section class="success-screen">
      <div class="success-card">
        <h1>Добро пожаловать в Yota для бизнеса</h1>
        <p class="section-copy">Все готово. Вот что происходит прямо сейчас:</p>
        <div class="status-list">
          <div class="status-item">✓ Yota ID создан — доступен прямо сейчас</div>
          <div class="status-item">⏳ SIM / eSIM — в обработке, ссылка придет на почту</div>
          <div class="status-item">⏳ Личный кабинет — данные придут на почту</div>
        </div>
        <h3>Пока все готовится — вот с чего начать:</h3>
        <div class="next-list">
          <div class="next-item">→ Как использовать токены</div>
          <div class="next-item">→ Настрой профиль Yota ID</div>
          <div class="next-item">→ Пригласи команду</div>
        </div>
        <div class="button-row">
          <button class="btn btn-primary" type="button">Перейти в Yota ID</button>
          <button class="btn btn-secondary" type="button" data-action="go-home">На главную</button>
        </div>
      </div>
    </section>
  `;
}

function renderModal() {
  document.body.classList.toggle("modal-open", Boolean(state.modal));
  if (!state.modal) {
    modalRoot.innerHTML = "";
    return;
  }

  const content = {
    otp: renderOtpModal,
    custom: renderCustomModal,
    ai: renderAiModal,
    yotaId: renderYotaIdModal,
    sberSms: renderSberSmsModal
  }[state.modal];

  modalRoot.innerHTML = `
    <div class="modal-layer" role="presentation">
      <section class="modal-card ${state.modal === "custom" ? "wide" : state.modal === "ai" ? "ai-modal" : state.modal === "yotaId" ? "yota-id-modal" : ""}" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-action="close-modal" aria-label="Закрыть">×</button>
        ${content ? content() : ""}
      </section>
    </div>
  `;
}

function renderYotaIdModal() {
  return `
    <div class="yota-modal-hero">
      <div class="yota-modal-icon">${icon("idCard")}</div>
      <span class="badge badge-soft">Включено в тариф</span>
      <h2>Yota ID — твой ключ к городу</h2>
      <p>Цифровой профиль уже подключен к тарифу. Он открывает партнерские сервисы, бонусы и быстрый вход в продукты Yota.</p>
    </div>
    <div class="yota-modal-list">
      <div class="yota-modal-item"><span>1</span><strong>Кофейни, коворкинги, спортклубы и бизнес-залы рядом с тобой</strong></div>
      <div class="yota-modal-item"><span>2</span><strong>Мили и бонусные баллы у партнеров без отдельной регистрации</strong></div>
      <div class="yota-modal-item"><span>3</span><strong>Единый цифровой профиль для быстрого входа в сервисы</strong></div>
    </div>
    <button class="btn btn-primary btn-full" type="button" data-action="close-modal">Понятно</button>
  `;
}

function renderOtpModal() {
  if (state.otp.step === "phone") {
    return `
      <h2>Почти подключили</h2>
      <p class="helper-text">Оставь номер — отправим SMS-код для оформления тарифа ${state.selectedTariff.name}.</p>
      <label class="field-group">
        <span class="field-label">Номер телефона</span>
        <input class="input" data-otp-phone placeholder="+7 999 000 00 00" value="${state.otp.phone}">
      </label>
      ${state.otp.error ? `<div class="error-text">${state.otp.error}</div>` : ""}
      <div class="modal-actions">
        <button class="btn btn-primary btn-full" type="button" data-action="send-otp">Получить код</button>
      </div>
    `;
  }

  return `
    <h2>Почти подключили</h2>
    <p class="helper-text">Код отправили на ${state.otp.phone}. Введи 4 цифры — и перейдем к оформлению.</p>
    <div class="field-group">
      <span class="field-label">Код из SMS</span>
      <div class="otp-code">
        ${[0, 1, 2, 3].map(i => `<input class="input otp-cell" data-otp-cell="${i}" maxlength="1" inputmode="numeric" aria-label="Цифра кода ${i + 1}">`).join("")}
      </div>
    </div>
    ${state.otp.error ? `<div class="error-text">${state.otp.error}</div>` : ""}
  `;
}

function renderCustomModal() {
  return `
    <h2>Собери свой тариф</h2>
    <p class="helper-text">Двигай слайдеры — стоимость обновится сразу.</p>
    <div class="slider-layout">
      <div class="slider-list">
        ${sliderControl("minutes", "Минуты", state.custom.minutes, 100, 1000, 50, "мин")}
        ${sliderControl("gb", "Интернет", state.custom.gb, 5, 100, 5, "ГБ")}
        ${sliderControl("tokens", "AI-токены", state.custom.tokens, 100, 2000, 100, "токенов", "purple")}
      </div>
      <div class="cost-card">
        <h3>Стоимость</h3>
        <div class="cost-value">${priceHtml(customPrice())}</div>
        <div class="helper-text">/мес за номер</div>
        <button class="btn btn-primary btn-full" type="button" data-action="choose-custom">Выбрать этот тариф</button>
      </div>
    </div>
  `;
}

function sliderControl(key, label, value, min, max, step, unit, tone = "") {
  const fill = ((value - min) / (max - min)) * 100;
  return `
    <label class="slider-item">
      <span class="slider-head">
        <span class="field-label">${label}</span>
        <strong class="slider-value">${value} ${unit}</strong>
      </span>
      <input class="range ${tone}" style="--range-fill:${fill}%" type="range" data-custom-slider="${key}" data-unit="${unit}" min="${min}" max="${max}" step="${step}" value="${value}">
    </label>
  `;
}

function renderAiModal() {
  if (state.ai.calculating) {
    return `
      <h2>Анализируем параметры</h2>
      <div class="loader"></div>
      <p class="section-copy" style="text-align:center;">Анализируем параметры для твоего бизнеса...</p>
    `;
  }

  if (state.ai.result) {
    const grow = tariffs[1];
    const tasks = state.ai.answers.tasks.join(", ");
    return `
      <h2>Вот что подойдет твоей команде</h2>
      <p class="section-copy">Для команды из ${state.ai.answers.team || "2-5 человек"} в сфере ${state.ai.answers.business || "IT и разработка"} с задачами ${tasks || "командной работы"} — рекомендуем Business Grow. Хватит минут, ГБ и 600 токенов для ежедневной работы с AI.</p>
      <div class="recommend-card">
        <span class="badge badge-soft">Рекомендация AI</span>
        <h3>${grow.name}</h3>
        <div class="spec-list">
          <div class="spec-row">${icon("phone")}<span>${grow.minutes} минут</span></div>
          <div class="spec-row">${icon("wifi")}<span>${grow.gb} ГБ</span></div>
          <div class="spec-row"><span>✦</span><span>${grow.tokens} токенов</span></div>
        </div>
        <div class="price">${priceHtml(grow.price)} <small>/мес за номер</small></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" type="button" data-action="choose-ai-result">Выбрать этот тариф</button>
        <button class="btn btn-secondary" type="button" data-action="ai-to-custom">Доработать самому</button>
      </div>
    `;
  }

  const q = aiQuestions[state.ai.step];
  return `
    <div class="ai-progress">
      ${[0, 1, 2].map(i => `<span class="ai-dot ${i < state.ai.step ? "done" : i === state.ai.step ? "active" : ""}"></span>`).join("")}
    </div>
    <h2>${q.title}</h2>
    <div class="chip-grid">
      ${q.options.map(option => aiChip(q, option)).join("")}
    </div>
    ${q.type === "multi" ? `
      <div class="modal-actions">
        <button class="btn btn-primary" type="button" data-action="calculate-ai" ${state.ai.answers.tasks.length ? "" : "disabled"}>Подобрать тариф</button>
      </div>
    ` : ""}
  `;
}

function aiChip(question, option) {
  const current = state.ai.answers[question.key];
  const selected = Array.isArray(current) ? current.includes(option) : current === option;
  return `<button class="chip ${selected ? "selected" : ""}" type="button" data-action="ai-answer" data-key="${question.key}" data-type="${question.type}" data-value="${option}">${option}</button>`;
}

function renderSberSmsModal() {
  return `
    <h2>Подтвердить оплату</h2>
    <p class="section-copy">Отправим SMS для подтверждения оплаты через СберБизнес.</p>
    <div class="modal-actions">
      <button class="btn btn-primary btn-full" type="button" data-action="pay-success">Отправить SMS</button>
    </div>
  `;
}

function openOtp(tariff) {
  state.selectedTariff = tariff;
  state.otp = { step: "phone", phone: "", error: "" };
  state.modal = "otp";
  render();
}

function nextStep() {
  if (state.checkoutStep === 1 && state.simType === "esim") {
    state.checkoutStep = 3;
  } else {
    state.checkoutStep = Math.min(3, state.checkoutStep + 1);
  }
  state.paymentPanel = null;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function prevStep() {
  if (state.checkoutStep === 3 && state.simType === "esim") {
    state.checkoutStep = 1;
  } else {
    state.checkoutStep = Math.max(0, state.checkoutStep - 1);
  }
  state.paymentPanel = null;
  render();
}

function resetAi() {
  state.ai = {
    step: 0,
    answers: {
      tasks: []
    },
    calculating: false,
    result: false,
    transitioning: false
  };
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const { action } = target.dataset;
  event.preventDefault();

  if (action === "go-home") {
    state.view = "landing";
    state.modal = null;
    state.checkoutStep = 0;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "select-tariff") {
    const tariff = tariffs.find(item => item.id === target.dataset.tariff);
    openOtp(tariff);
  }

  if (action === "open-custom") {
    state.modal = "custom";
    render();
  }

  if (action === "open-ai") {
    resetAi();
    state.modal = "ai";
    render();
  }

  if (action === "close-modal") {
    state.modal = null;
    renderModal();
  }

  if (action === "send-otp") {
    const phone = document.querySelector("[data-otp-phone]");
    state.otp.phone = phone ? phone.value : "";
    if (!state.otp.phone.trim()) {
      state.otp.error = "Добавь номер, чтобы отправить код";
    } else {
      state.otp.step = "code";
      state.otp.error = "";
    }
    renderModal();
  }

  if (action === "choose-custom") {
    openOtp(getCustomTariff());
  }

  if (action === "ai-answer") {
    if (state.ai.transitioning) return;
    const key = target.dataset.key;
    const value = target.dataset.value;
    const type = target.dataset.type;
    if (type === "multi") {
      const list = state.ai.answers[key] || [];
      state.ai.answers[key] = list.includes(value) ? list.filter(item => item !== value) : [...list, value];
      updateAiMultiChoice(target, key);
    } else {
      state.ai.answers[key] = value;
      state.ai.transitioning = true;
      target.closest(".modal-card")?.querySelectorAll('[data-action="ai-answer"]').forEach(chip => {
        chip.disabled = true;
        chip.classList.toggle("selected", chip === target);
      });
      window.setTimeout(() => {
        state.ai.step = Math.min(2, state.ai.step + 1);
        state.ai.transitioning = false;
        renderModal();
      }, 350);
    }
  }

  if (action === "calculate-ai") {
    state.ai.calculating = true;
    renderModal();
    window.setTimeout(() => {
      state.ai.calculating = false;
      state.ai.result = true;
      renderModal();
    }, 1200);
  }

  if (action === "choose-ai-result") {
    openOtp(tariffs[1]);
  }

  if (action === "ai-to-custom") {
    state.custom = { minutes: 450, gb: 35, tokens: 700 };
    state.modal = "custom";
    renderModal();
  }

  if (action === "open-yota-id") {
    state.modal = "yotaId";
    renderModal();
  }

  if (action === "toggle-yota-banner") {
    state.yotaBannerOpen = !state.yotaBannerOpen;
    render();
  }

  if (action === "set-sim") {
    state.simType = target.dataset.value;
    render();
  }

  if (action === "add-port-number") {
    state.portNumbers.push("");
    render();
  }

  if (action === "remove-port-number") {
    const index = Number(target.dataset.index);
    state.portNumbers.splice(index, 1);
    if (!state.portNumbers.length) state.portNumbers.push("");
    render();
  }

  if (action === "next-step") {
    if (state.checkoutStep === 1 && !canGoFromBuyer()) return;
    nextStep();
  }

  if (action === "prev-step") {
    prevStep();
  }

  if (action === "select-company") {
    const company = companies.find(item => item.id === target.dataset.company);
    state.selectedCompany = company;
    state.companySearch = `${company.title} — ИНН ${company.inn}`;
    state.companySuggestions = false;
    state.identity = { loading: false, confirmed: company.type !== "ip", error: false };
    render();
  }

  if (action === "confirm-service-id" || action === "confirm-manual-id") {
    state.identity.loading = true;
    state.identity.error = false;
    render();
    window.setTimeout(() => {
      state.identity.loading = false;
      state.identity.confirmed = true;
      render();
    }, 1000);
  }

  if (action === "set-delivery") {
    state.delivery.method = target.dataset.value;
    render();
  }

  if (action === "set-payment") {
    state.payment = target.dataset.value;
    state.paymentPanel = null;
    render();
  }

  if (action === "submit-order") {
    state.emailTouched = true;
    if (!isValidEmail(state.email) || !state.accepted) {
      render();
      return;
    }
    state.paymentPanel = state.payment;
    render();
  }

  if (action === "pay-success") {
    state.modal = null;
    state.view = "success";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "download-bill") {
    target.textContent = "Счет скачан";
    window.setTimeout(() => {
      state.view = "success";
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 650);
  }

  if (action === "open-sber-sms") {
    state.modal = "sberSms";
    renderModal();
  }

  if (action === "sim-minus") {
    state.sims = Math.max(1, state.sims - 1);
    render();
  }

  if (action === "sim-plus") {
    state.sims += 1;
    render();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;

  if (target.matches("[data-custom-slider]")) {
    state.custom[target.dataset.customSlider] = Number(target.value);
    updateCustomSlider(target);
  }

  if (target.matches("[data-otp-phone]")) {
    state.otp.phone = target.value;
    state.otp.error = "";
  }

  if (target.matches("[data-otp-cell]")) {
    target.value = target.value.replace(/\D/g, "").slice(0, 1);
    const next = document.querySelector(`[data-otp-cell="${Number(target.dataset.otpCell) + 1}"]`);
    if (target.value && next) next.focus();
    maybeCompleteOtp();
  }

  if (target.matches("[data-port-index]")) {
    const index = Number(target.dataset.portIndex);
    state.portNumbers[index] = target.value;
    const status = document.querySelector(`[data-port-status="${index}"]`);
    if (status) status.innerHTML = portStatus(target.value);
  }

  if (target.matches("[data-company-search]")) {
    state.companySearch = target.value;
    state.selectedCompany = null;
    state.companySuggestions = Boolean(target.value.trim());
    updateSuggestions(target);
  }

  if (target.matches("[data-delivery-field]")) {
    state.delivery[target.dataset.deliveryField] = target.value;
  }

  if (target.matches("[data-email]")) {
    state.email = target.value;
    state.emailTouched = true;
    updatePaymentButton();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.matches("[data-change='toggle-porting']")) {
    state.porting = target.checked;
    render();
  }

  if (target.matches("[data-change='accept-terms']")) {
    state.accepted = target.checked;
    render();
  }

  if (target.matches("[data-addon]")) {
    state.addons[target.dataset.addon] = target.checked;
    render();
  }
});

function goToCheckout() {
  state.modal = null;
  state.view = "checkout";
  state.checkoutStep = 0;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function maybeCompleteOtp() {
  const code = [...document.querySelectorAll("[data-otp-cell]")].map(input => input.value).join("");
  if (code.length === 4) goToCheckout();
}

function updateCustomSlider(input) {
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);
  const fill = ((value - min) / (max - min)) * 100;
  input.style.setProperty("--range-fill", `${fill}%`);
  const label = input.closest(".slider-item");
  const valueText = label?.querySelector(".slider-value");
  if (valueText) valueText.textContent = `${value} ${input.dataset.unit}`;
  const cost = document.querySelector(".cost-value");
  if (cost) cost.innerHTML = priceHtml(customPrice());
}

function updateAiMultiChoice(chip, key) {
  const selected = state.ai.answers[key] || [];
  const modal = chip.closest(".modal-card");
  modal?.querySelectorAll(`[data-key="${key}"]`).forEach(item => {
    item.classList.toggle("selected", selected.includes(item.dataset.value));
  });
  const button = modal?.querySelector('[data-action="calculate-ai"]');
  if (button) button.disabled = selected.length === 0;
}

function updateSuggestions(input) {
  const wrap = input.closest(".suggest-wrap");
  const suggestions = wrap?.querySelector("[data-suggestions]");
  if (!suggestions) return;
  suggestions.classList.toggle("hide", !input.value.trim());
}

function updatePaymentButton() {
  const button = document.querySelector('[data-action="submit-order"]');
  if (!button) return;
  button.disabled = !(isValidEmail(state.email) && state.accepted);
  const input = document.querySelector("[data-email]");
  if (input) input.classList.toggle("error", state.emailTouched && !isValidEmail(state.email));
}

render();
