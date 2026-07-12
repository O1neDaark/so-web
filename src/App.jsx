import React, { useEffect, useMemo, useState } from "react";
import logoMark from "./assets/co-logo-mark.png";
import heroPortrait from "./assets/sergey-hero.webp";
import igmsCover from "./assets/igms-cover.png";
import igmsImage01 from "./assets/igms-01.png";
import igmsImage02 from "./assets/igms-02.png";
import igmsImage03 from "./assets/igms-03.png";
import igmsImage04 from "./assets/igms-04.png";
import igmsImage05 from "./assets/igms-05.png";
import enterpriseCover from "./assets/enterprise-cover.png";
import diagnosticsCover from "./assets/diagnostics-cover.png";
import diagnosticsProduct from "./assets/diagnostics-product.png";
import diagnosticsStage from "./assets/diagnostics-stage.png";
import diagnosticsAward from "./assets/diagnostics-award.png";
import diagnosticsBrochure from "./assets/diagnostics-brochure.png";
import ragCover from "./assets/rag-cover.png";
import socialFeedback from "./assets/social-feedback.png";
import engineeringClub01 from "./assets/engineering-club-01.jpg";
import engineeringClub02 from "./assets/engineering-club-02.jpg";
import engineeringClub03 from "./assets/engineering-club-03.jpg";

const telegramUrl = "https://t.me/Sergey_Designer";

const copy = {
  ru: {
    nav: ["Профиль", "Кейсы", "Экспертиза", "Процесс", "Контакты"],
    navIds: ["about", "cases", "services", "process", "contact"],
    write: "Написать",
    resumeButton: "Резюме",
    heroKicker: "Сергей Остаев / AI Product Designer",
    heroLines: ["Проектирую B2B и AI-интерфейсы", "которые ускоряют работу команд"],
    heroText:
      "Руководитель направления автоматизации с опытом более 7 лет. Соединяю UX/UI, системную аналитику и AI-first подход, чтобы сложные enterprise-сценарии становились понятными, быстрыми и готовыми к продакшну.",
    heroCta: "Обсудить проект",
    heroCases: "Смотреть кейсы",
    metrics: [
      ["9+", "запущенных продуктов автоматизации"],
      ["×2", "ускорение поиска в базе знаний"],
      ["↓1.5x", "снижение нагрузки на поддержку"],
      ["2025", "лучшее решение внутри компании"],
    ],
    aboutLabel: "Профиль",
    aboutTitle:
      "Помогаю командам превращать сложную логику в интерфейсы, которыми реально пользуются.",
    aboutText: [
      "Беру запутанные B2B, enterprise и AI-сценарии, раскладываю их в понятную архитектуру и довожу до прототипа, который можно показать бизнесу, разработке и пользователям.",
      "Мой сильный фокус — интерфейсы, где важны скорость решения, контроль ошибок, доверие к AI и аккуратный handoff без потери смысла между дизайном и разработкой.",
    ],
    aboutCards: [
      ["01", "Разбираю сложность", "Интервью, CJM, роли, ограничения, сценарии и точки риска до первого экрана."],
      ["02", "Собираю продуктовую логику", "Навигация, состояния, AI-flow, правила доверия, пустые и ошибочные сценарии."],
      ["03", "Делаю быстро проверяемо", "Кликабельные прототипы, демо-сценарии, презентация решения и аргументы для команды."],
    ],
    casesLabel: "Кейсы",
    casesTitle: "Портфолио собрано вокруг результата, а не набора экранов.",
    casesText:
      "Каждый кейс показывает контекст, роль, продуктовую задачу, дизайн-решение и измеримый эффект для бизнеса или команды.",
    casesHighlights: [
      ["Контекст", "что было сложно в продукте"],
      ["Решение", "как устроена логика интерфейса"],
      ["Эффект", "что изменилось для бизнеса"],
    ],
    servicesLabel: "Экспертиза",
    processLabel: "Процесс",
    processTitle: "От сложной предметной области к интерфейсу, который можно защищать перед бизнесом и командой.",
    manifesto:
      "Сильный интерфейс в enterprise не спорит с пользователем. Он убирает лишнее, подсвечивает главное и делает сложное действие очевидным.",
    contactLabel: "Контакты",
    contactTitle: "Расскажите, какую систему нужно спроектировать.",
    contactText:
      "Напишите 3-5 строк: продукт, аудитория, ограничения, сроки и что уже есть. Я быстро пойму, где могу усилить проект: UX, AI-сценарии, дизайн-система, прототип или презентация решения.",
    contactCta: "Написать в Telegram",
    footer: "AI Product Design / B2B / Enterprise",
  },
  en: {
    nav: ["Profile", "Cases", "Expertise", "Process", "Contact"],
    navIds: ["about", "cases", "services", "process", "contact"],
    write: "Write",
    resumeButton: "Resume",
    heroKicker: "Sergey Ostaev / AI Product Designer",
    heroLines: ["I design B2B and AI interfaces", "that make teams faster"],
    heroText:
      "Automation design lead with 7+ years of experience. I combine UX/UI, systems analysis, and AI-first thinking to turn complex enterprise workflows into clear, fast, production-ready products.",
    heroCta: "Discuss project",
    heroCases: "View cases",
    metrics: [
      ["9+", "automation products launched"],
      ["×2", "faster knowledge-base search"],
      ["↓1.5x", "lower support workload"],
      ["2025", "best internal solution award"],
    ],
    aboutLabel: "Profile",
    aboutTitle:
      "I help teams turn complex logic into interfaces people actually use.",
    aboutText: [
      "I take tangled B2B, enterprise, and AI workflows, structure them into clear product architecture, and turn them into prototypes that business, engineering, and users can evaluate.",
      "My strongest focus is on interfaces where speed, error control, AI trust, and clean handoff matter more than decorative screens.",
    ],
    aboutCards: [
      ["01", "Untangle complexity", "Interviews, CJM, roles, constraints, scenarios, and risks before the first screen."],
      ["02", "Shape product logic", "Navigation, states, AI flows, trust rules, empty states, and error scenarios."],
      ["03", "Make it testable fast", "Clickable prototypes, demo scenarios, solution decks, and arguments for the team."],
    ],
    casesLabel: "Cases",
    casesTitle: "The portfolio is built around outcomes, not a gallery of screens.",
    casesText:
      "Each case shows context, role, product challenge, design decision, and measurable impact for the business or team.",
    casesHighlights: [
      ["Context", "what made the product hard"],
      ["Solution", "how the interface logic works"],
      ["Impact", "what changed for the business"],
    ],
    servicesLabel: "Expertise",
    processLabel: "Process",
    processTitle: "From complex domain logic to an interface that can be defended to business and engineering.",
    manifesto:
      "A strong enterprise interface does not fight the user. It removes noise, highlights what matters, and makes the complex action obvious.",
    contactLabel: "Contact",
    contactTitle: "Tell me what system we need to design.",
    contactText:
      "Send 3-5 lines: product, audience, constraints, timeline, and what already exists. I will quickly see where I can help: UX, AI workflows, design system, prototype, or solution presentation.",
    contactCta: "Message on Telegram",
    footer: "AI Product Design / B2B / Enterprise",
  },
};

const cases = {
  ru: [
    {
      id: "igms",
      index: "CASE 01 / iGMS",
      title: "Система управления недвижимостью для iGMS",
      role: "Февраль - март 2026 / Product Design, AI UX, Figma, FigJam",
      description:
        "Спроектировал единый интерфейс для работы с сообщениями из Airbnb, Booking и Vrbo: 3-колоночный layout, контекст бронирования, AI-помощник и библиотека шаблонов.",
      stats: [
        ["Скорость ответа", "×6 быстрее"],
        ["Переписка", "-60% времени"],
        ["Рейтинг", "4.6 → 4.8"],
      ],
      inside: "omnichannel inbox · AI replies · booking context · templates",
      detail:
        "Разрозненные диалоги были собраны в единую рабочую среду. Оператор видит гостя, бронирование, историю и рекомендованный ответ без переключения между сервисами.",
      cta: "Смотреть полный кейс",
      href: "/case/igms",
      visual: "messages",
      cover: igmsCover,
    },
    {
      id: "monitoring",
      index: "CASE 02 / ENTERPRISE",
      title: "Мониторинг пользователя и управление рабочим временем",
      role: "2025 - 2026 / NDA, enterprise ecosystem",
      description:
        "Спроектировал интерфейс, который делает сложный учет времени интуитивным: один экран, цветовые индикаторы, умная валидация и быстрые сценарии оформления отсутствий.",
      stats: [
        ["Оформление", "×3-5 быстрее"],
        ["Ошибки", "-5x"],
        ["Статус", "считывается сразу"],
      ],
      inside: "one-screen flow · validation · color status · absence requests",
      detail:
        "Детали обезличены под NDA, но сохранена суть: интерфейс убирает ручную путаницу и помогает пользователю быстро понять, что требует действия.",
      cta: "Смотреть полный кейс",
      href: "/case/enterprise",
      visual: "monitoring",
      cover: enterpriseCover,
    },
    {
      id: "diagnostics",
      index: "CASE 03 / INDUSTRIAL AI",
      title: "Интеллектуальная система токовой диагностики электродвигателей",
      role: "IT Camp Sirius / Газпром нефть / 2025",
      description:
        "За 72 рабочих часа команда спроектировала рабочую среду для экспертов нефтегазовой отрасли: валидация гипотез, демонстрационный сценарий и презентация решения перед жюри.",
      stats: [
        ["Срок", "72 часа"],
        ["Формат", "hackathon MVP"],
        ["Аудитория", "эксперты и инвесторы"],
      ],
      inside: "diagnostics dashboard · expert review · demo flow · pitch deck",
      detail:
        "Кейс показывает способность быстро входить в сложную предметную область, собирать понятный прототип и объяснять ценность технического решения бизнес-аудитории.",
      cta: "Смотреть полный кейс",
      href: "/case/diagnostics",
      visual: "diagnostics",
      cover: diagnosticsCover,
    },
    {
      id: "rag",
      index: "CASE 04 / RAG PLATFORM",
      title: "RAG-платформа для интеллектуальной поддержки",
      role: "2024 - 2025 / AI product, on-premise, knowledge base",
      description:
        "Платформа объединяет фрагментированные базы знаний через семантический поиск, формирует релевантный контекст и генерирует ответы с учетом роли пользователя.",
      stats: [
        ["Поиск", "×2 быстрее"],
        ["Задачи", "до 30% автозакрытия"],
        ["Данные", "on-premise"],
      ],
      inside: "semantic search · role context · prompt templates · routing",
      detail:
        "Спроектировал интерфейс с окном уточнения, маршрутизацией по отделам и логикой безопасного разворачивания внутри инфраструктуры компании.",
      cta: "Смотреть полный кейс",
      href: "/case/rag",
      visual: "rag",
      cover: ragCover,
    },
    {
      id: "talk",
      index: "CASE 05 / PUBLIC LOG",
      title: "Социальная активность: встречи, доклады и AI-практика",
      role: "Пополняемый раздел / митапы, видео, доклады, отзывы",
      description:
        "Живой журнал публичной экспертизы: выступления, видео, отзывы и материалы о том, как объяснять AI-продукты понятным языком.",
      stats: [
        ["Формат", "журнал"],
        ["Темы", "AI / UX / продукт"],
        ["Фокус", "доверие и экспертность"],
      ],
      inside: "talk structure · AI scenarios · workshop thinking · demo",
      detail:
        "Социальная активность усиливает портфолио: показывает, что сложные AI-решения можно объяснять понятно, защищать перед аудиторией и превращать в продуктовые гипотезы.",
      cta: "Смотреть полный раздел",
      href: "/case/social",
      visual: "talk",
    },
  ],
  en: [
    {
      id: "igms",
      index: "CASE 01 / iGMS",
      title: "Property management system for iGMS",
      role: "February - March 2026 / Product Design, AI UX, Figma, FigJam",
      description:
        "Designed a unified interface for Airbnb, Booking, and Vrbo messages: a 3-column layout, booking context, AI assistant, and template library.",
      stats: [
        ["Response speed", "×6 faster"],
        ["Messaging", "-60% time"],
        ["Rating", "4.6 → 4.8"],
      ],
      inside: "omnichannel inbox · AI replies · booking context · templates",
      detail:
        "Scattered conversations became one workspace. The operator sees the guest, reservation, history, and suggested response without jumping between services.",
      cta: "Review similar product",
      visual: "messages",
    },
    {
      id: "monitoring",
      index: "CASE 02 / ENTERPRISE",
      title: "User monitoring and working-time management",
      role: "2025 - 2026 / NDA, enterprise ecosystem",
      description:
        "Designed an interface that makes complex time tracking intuitive: one screen, color indicators, smart validation, and fast absence-request flows.",
      stats: [
        ["Requests", "×3-5 faster"],
        ["Errors", "-5x"],
        ["Status", "instant read"],
      ],
      inside: "one-screen flow · validation · color status · absence requests",
      detail:
        "Details are anonymized under NDA, but the essence remains: the interface reduces manual confusion and helps users instantly understand what needs action.",
      cta: "View full case",
      href: "/case/enterprise",
      visual: "monitoring",
      cover: enterpriseCover,
    },
    {
      id: "diagnostics",
      index: "CASE 03 / INDUSTRIAL AI",
      title: "Intelligent current diagnostics for electric motors",
      role: "IT Camp Sirius / Gazprom Neft / 2025",
      description:
        "In 72 working hours, the team designed a workspace for oil and gas experts: hypothesis validation, demo scenario, and solution presentation for the jury.",
      stats: [
        ["Timeline", "72 hours"],
        ["Format", "hackathon MVP"],
        ["Audience", "experts and investors"],
      ],
      inside: "diagnostics dashboard · expert review · demo flow · pitch deck",
      detail:
        "The case shows fast immersion into a complex domain, a clear prototype, and a business-readable explanation of a technical solution.",
      cta: "View full case",
      href: "/case/diagnostics",
      visual: "diagnostics",
      cover: diagnosticsCover,
    },
    {
      id: "rag",
      index: "CASE 04 / RAG PLATFORM",
      title: "RAG platform for intelligent support",
      role: "2024 - 2025 / AI product, on-premise, knowledge base",
      description:
        "The platform connects fragmented knowledge bases through semantic search, builds relevant context, and generates role-aware answers.",
      stats: [
        ["Search", "×2 faster"],
        ["Tasks", "up to 30% auto-closed"],
        ["Data", "on-premise"],
      ],
      inside: "semantic search · role context · prompt templates · routing",
      detail:
        "Designed the clarification window, department routing, and a secure deployment logic inside company infrastructure.",
      cta: "View full case",
      href: "/case/rag",
      visual: "rag",
      cover: ragCover,
    },
    {
      id: "talk",
      index: "CASE 05 / PUBLIC LOG",
      title: "Social activity: meetups, talks, and AI practice",
      role: "Living section / meetups, videos, talks, feedback",
      description:
        "A living log of public expertise: talks, videos, feedback, and materials about explaining AI products in a clear human language.",
      stats: [
        ["Format", "log"],
        ["Topics", "AI / UX / product"],
        ["Focus", "trust and expertise"],
      ],
      inside: "talk structure · AI scenarios · workshop thinking · demo",
      detail:
        "Public work strengthens the portfolio: it shows the ability to explain complex AI solutions, defend ideas, and turn them into product hypotheses.",
      cta: "View full section",
      href: "/case/social",
      visual: "talk",
    },
  ],
};

const services = {
  ru: [
    ["01", "Complex Interface Design", "Проектирование сложных B2B-интерфейсов, сценариев, состояний, ролей и навигации."],
    ["02", "AI UX и AI-first продукты", "Промпт-сценарии, RAG, уточняющие окна, AI-помощники, контроль доверия и ошибок."],
    ["03", "Design Systems и handoff", "Компоненты, паттерны, состояния, спецификации для разработки и дизайн-ревью."],
    ["04", "Product Discovery", "Гипотезы, CJM, user flow, прототипы, демо-сценарии и быстрая проверка ценности."],
  ],
  en: [
    ["01", "Complex Interface Design", "Complex B2B interfaces, scenarios, states, roles, and navigation architecture."],
    ["02", "AI UX and AI-first products", "Prompt scenarios, RAG, clarification windows, AI assistants, trust and error control."],
    ["03", "Design Systems and handoff", "Components, patterns, states, engineering specs, and design review."],
    ["04", "Product Discovery", "Hypotheses, CJM, user flows, prototypes, demo scenarios, and fast value validation."],
  ],
};

const processSteps = {
  ru: [
    ["01", "Понять систему", "Разбираю роли, ограничения, данные, риск ошибок и бизнес-метрики."],
    ["02", "Собрать сценарии", "Строю user flow, информационную архитектуру и критические состояния интерфейса."],
    ["03", "Сделать прототип", "Собираю кликабельное решение, AI-паттерны и визуальную систему в Figma."],
    ["04", "Довести до внедрения", "Готовлю handoff, объясняю логику команде и помогаю пройти ревью."],
  ],
  en: [
    ["01", "Understand the system", "Map roles, constraints, data, error risks, and business metrics."],
    ["02", "Build scenarios", "Create user flows, information architecture, and critical interface states."],
    ["03", "Prototype", "Build clickable solution, AI patterns, and visual system in Figma."],
    ["04", "Ship with the team", "Prepare handoff, explain logic, and support review."],
  ],
};

const igmsCase = {
  ru: {
    back: "Вернуться к кейсам",
    taskLabel: "Задача",
    constraintsLabel: "Ограничения",
    strategyLabel: "Product strategy",
    cjmLabel: "CJM / AI impact",
    galleryLabel: "Screens and process",
    eyebrow: "CASE 01 / iGMS / Property Management System",
    title: "Система управления недвижимостью для iGMS",
    subtitle:
      "Единый inbox для Airbnb, Booking и Vrbo: контекст бронирования, AI-рекомендации и быстрые ответы без переключения между платформами.",
    period: "Февраль - март 2026 / Product Design, AI UX, Figma, FigJam",
    heroStats: [
      ["×6", "быстрее первый ответ гостю"],
      ["-60%", "времени на переписку"],
      ["4.6 → 4.8", "восстановление рейтинга"],
      ["2 недели", "от задачи до прототипа"],
    ],
    intro:
      "У владельца 20-30 объектов на разных площадках есть постоянный поток сообщений: уточнения до брони, вопросы перед заездом, проблемы во время проживания и пост-коммуникация после выезда. Если ответы медленные или непоследовательные, гость уходит, конфликт эскалируется, рейтинг падает, а команда тонет в ручной переписке.",
    challenge: [
      "Разработать дизайн диалога между гостем и хозяином или агентом поддержки в системе управления объектами недвижимости.",
      "Собрать разрозненные чаты Airbnb, Booking, Vrbo и других площадок в один рабочий контур.",
      "Помочь оператору отвечать быстро, видеть контекст бронирования и снижать риск плохого отзыва.",
    ],
    constraints: [
      "У хозяина 20-30 объявлений на разных платформах и 2-3 помощника, которые тоже общаются с гостями.",
      "Команда уже использует шаблоны сообщений, но им не хватает контекста, гибкости и единого процесса.",
      "Нужно рассмотреть разные исходы диалогов: уточнение, подтверждение, вопросы перед заездом, инциденты и завершение проживания.",
    ],
    solutionTitle: "Решение: рабочее место, где вся переписка живет вокруг бронирования",
    solution:
      "Я спроектировал 3-колоночный интерфейс: список диалогов и фильтры, активный чат с подсказками, правая панель с деталями бронирования, AI-аналитикой и историей действий. Такой layout убирает хаос между платформами и делает решение по каждому диалогу быстрее: оператор видит проблему, контекст, риск, сумму, статус и рекомендованный ответ в одном экране.",
    pillars: [
      ["Omnichannel inbox", "Все обращения из Airbnb, Booking, Vrbo и прямых каналов собираются в единый список с приоритетами."],
      ["AI-совет", "AI определяет категорию проблемы, риск плохого отзыва, уровень критичности и предлагает тон ответа."],
      ["Контекст брони", "Справа всегда видны объект, даты, сумма, статус оплаты, код брони и история действий."],
      ["Шаблоны без робота", "Быстрые ответы ускоряют переписку, но сохраняют возможность адаптировать сообщение под ситуацию."],
    ],
    scenarioTitle: "Основные сценарии, которые закрывает интерфейс",
    scenarios: [
      ["Поступает запрос", "AI автоответ < 1 минуты, меньше клиентов уходит."],
      ["Уточнение и бронь", "Шаблоны и подсказки сокращают до 40% времени ответа."],
      ["Подтверждение", "Автосообщения уменьшают ошибки, разные языки и больше доверия."],
      ["Перед заездом", "FAQ от AI до заезда снижает входящие вопросы примерно на 30%."],
      ["Инцидент во время проживания", "Эскалация AI + агент, SLA меньше 5 минут."],
      ["После проживания", "AI повышает качество пост-коммуникации и шанс хорошего отзыва."],
    ],
    gallery: [
      [igmsImage01, "Задача и ограничения", "Сформулировал продуктовую задачу и реальные ограничения: много объектов, разные платформы, помощники и разные исходы диалогов."],
      [igmsImage02, "Архитектура блоков", "Разложил интерфейс на зоны: навигация, фильтры, активный диалог, подсказки, AI-сводка, рекомендации и история действий."],
      [igmsImage03, "CJM и сценарии", "Описал путь гостя от первого запроса до пост-коммуникации и показал, где AI усиливает бизнес."],
      [igmsImage04, "Wireframe рабочего места", "Собрал первый макет единого рабочего места для оператора с чатами, фильтрами и правой контекстной панелью."],
      [igmsImage05, "AI-сценарий эскалации", "Показал, как AI помогает снизить напряжение в конфликте и подготовить эмпатичный ответ."],
    ],
  },
  en: {
    back: "Back to cases",
    taskLabel: "Challenge",
    constraintsLabel: "Constraints",
    strategyLabel: "Product strategy",
    cjmLabel: "CJM / AI impact",
    galleryLabel: "Screens and process",
    eyebrow: "CASE 01 / iGMS / Property Management System",
    title: "Property management system for iGMS",
    subtitle:
      "A unified inbox for Airbnb, Booking, and Vrbo: booking context, AI recommendations, and fast replies without switching between platforms.",
    period: "February - March 2026 / Product Design, AI UX, Figma, FigJam",
    heroStats: [
      ["×6", "faster first guest response"],
      ["-60%", "less time spent on messaging"],
      ["4.6 → 4.8", "rating recovery"],
      ["2 weeks", "from brief to prototype"],
    ],
    intro:
      "A host managing 20-30 properties across several platforms receives a constant flow of messages: pre-booking questions, check-in details, issues during the stay, and post-stay follow-ups. Slow or inconsistent replies make guests leave, escalate conflicts, damage ratings, and bury the team in manual communication.",
    challenge: [
      "Design the conversation experience between a guest and a host or support agent inside a property management system.",
      "Bring fragmented Airbnb, Booking, Vrbo, and direct-channel conversations into one operational workspace.",
      "Help the operator reply quickly, see booking context, and reduce the risk of a negative review.",
    ],
    constraints: [
      "The host manages 20-30 listings across multiple platforms and works with 2-3 assistants who also communicate with guests.",
      "The team already uses message templates, but they lack context, flexibility, and a unified process.",
      "The design needed to cover multiple conversation outcomes: clarification, booking confirmation, pre-check-in questions, incidents, and post-stay communication.",
    ],
    solutionTitle: "Solution: a workspace where every conversation is built around the booking",
    solution:
      "I designed a three-column interface: conversation list and filters, active chat with smart suggestions, and a right-side panel with booking details, AI analytics, and action history. This layout removes platform chaos and speeds up every decision: the operator sees the issue, context, risk, amount, status, and recommended reply in one screen.",
    pillars: [
      ["Omnichannel inbox", "Messages from Airbnb, Booking, Vrbo, and direct channels are collected into one prioritized queue."],
      ["AI assistant", "AI detects the problem category, negative-review risk, urgency level, and suggested tone of voice."],
      ["Booking context", "Property, dates, payment status, booking code, amount, and action history stay visible on the right."],
      ["Human templates", "Quick replies speed up communication while keeping the answer flexible and situation-aware."],
    ],
    scenarioTitle: "Core scenarios covered by the interface",
    scenarios: [
      ["Incoming request", "AI auto-reply in under 1 minute, reducing guest drop-off."],
      ["Clarification and booking", "Templates and hints cut up to 40% of response time."],
      ["Confirmation", "Automated messages reduce errors, support languages, and build trust."],
      ["Before check-in", "AI FAQ before arrival reduces incoming questions by around 30%."],
      ["Incident during stay", "AI escalation plus agent support keeps SLA under 5 minutes."],
      ["After stay", "AI improves post-stay communication and the chance of a positive review."],
    ],
    gallery: [
      [igmsImage01, "Challenge and constraints", "Defined the product challenge and real-world constraints: many properties, multiple platforms, assistants, and different conversation outcomes."],
      [igmsImage02, "Information architecture", "Mapped the workspace zones: navigation, filters, active dialogue, hints, AI summary, recommendations, and action history."],
      [igmsImage03, "CJM and scenarios", "Outlined the guest journey from first request to post-stay communication and highlighted where AI creates business value."],
      [igmsImage04, "Operator workspace wireframe", "Created the first unified workspace mockup with chats, filters, and a right-side context panel."],
      [igmsImage05, "AI escalation scenario", "Showed how AI can reduce tension in a conflict and prepare an empathetic response."],
    ],
  },
};

const enterpriseCase = {
  ru: {
    back: "Вернуться к кейсам",
    taskLabel: "Задача",
    constraintsLabel: "Ограничения",
    strategyLabel: "Leadership and delivery",
    cjmLabel: "Operating system",
    galleryLabel: "Как я вел проект",
    eyebrow: "CASE 02 / ENTERPRISE / NDA",
    title: "Мониторинг пользователя и управление рабочим временем",
    subtitle:
      "Enterprise-интерфейс, который превращает сложный учет статусов, смен и отсутствий в понятный рабочий процесс для сотрудников, руководителей и поддержки.",
    period: "2025 - 2026 / Руководитель направления автоматизации / Product Design",
    heroStats: [
      ["×3-5", "быстрее оформление отсутствий"],
      ["-5x", "меньше ошибок в сценариях"],
      ["5", "специалистов в команде"],
      ["NDA", "детали обезличены"],
    ],
    intro:
      "Этот кейс нельзя показывать как обычную галерею экранов: продукт находится внутри enterprise-инфраструктуры, а детали защищены NDA. Поэтому я показываю главное: как была разобрана сложная предметная область, выстроен процесс с командой, собрана обратная связь через интервью и задачи, а затем спроектирован интерфейс, который снижает операционную нагрузку.",
    challenge: [
      "Сделать сложный учет рабочего времени понятным без длинных инструкций и ручной поддержки.",
      "Свести разные статусы, смены, отсутствия, роли и исключения в один читаемый интерфейс.",
      "Помочь пользователям быстро понимать: что уже оформлено, что требует действия и где есть ошибка.",
    ],
    constraints: [
      "Enterprise-среда: ограничения безопасности, внутренние роли, согласования и зависимость от существующей инфраструктуры.",
      "Нельзя раскрывать реальные экраны, данные, названия и архитектурные детали.",
      "Проект требовал синхронизации дизайна, аналитики, разработки, поддержки и бизнес-заказчиков.",
    ],
    solutionTitle: "Моя роль: не просто нарисовать интерфейс, а довести продукт до рабочего процесса",
    solution:
      "Я вел направление как дизайн-лид и продуктовый связующий: собирал контекст через интервью, переводил обратную связь в задачи, координировал команду из 5 специалистов, проводил дизайн-ревью и контролировал передачу решений в разработку. На уровне UX фокус был на мгновенном считывании статуса: цветовые индикаторы, понятные состояния, умная валидация и сценарии без лишних переходов.",
    pillars: [
      ["Discovery через интервью", "Разговаривал с пользователями и участниками процесса, чтобы вытащить реальные боли, исключения и повторяющиеся ошибки."],
      ["Задачи вместо хаоса", "Переводил обратную связь в понятные задачи, приоритеты и сценарии для команды."],
      ["Дизайн-ревью и handoff", "Проверял логику состояний, спецификации, edge cases и готовность решений к разработке."],
      ["Управление командой", "Координировал синхронизации, распределение ответственности и движение проекта между ролями."],
    ],
    scenarioTitle: "Что было спроектировано внутри продукта",
    scenarios: [
      ["Календарь смен", "Сотрудник видит месячный контекст, смены, статусы и отклонения без ручной сверки."],
      ["Статусы и валидация", "Цветовые маркеры и правила подсвечивают, где все корректно, а где нужно действие."],
      ["Оформление отсутствий", "Короткий сценарий снижает количество вопросов к поддержке и руководителям."],
      ["Роли и доступы", "Интерфейс учитывает разные права: сотрудник, руководитель, поддержка, администратор."],
      ["AI-помощник", "Концепт AI-подсказок помогает объяснять состояние и предлагать следующий шаг."],
      ["История действий", "Система фиксирует изменения, чтобы разбирать спорные ситуации без ручного расследования."],
    ],
    accents: [
      ["01", "Сначала процесс, потом UI", "Я не начинал с экранов. Сначала разобрал, где ломается рабочий сценарий: какие статусы непонятны, какие ошибки повторяются, где пользователи ждут помощи."],
      ["02", "Интервью → инсайты → задачи", "Обратная связь не оставалась заметками. Я превращал ее в задачи, приоритеты, пользовательские сценарии и критерии готовности для команды."],
      ["03", "Визуальная система статусов", "Главная UX-ставка была на мгновенное считывание: пользователь должен понять состояние без расшифровки, обучения и обращения к инструкции."],
      ["04", "Enterprise без потери скорости", "Даже при NDA, согласованиях и инфраструктурных ограничениях проект двигался итеративно: прототипы, review, уточнения, handoff."],
    ],
  },
  en: {
    back: "Back to cases",
    taskLabel: "Challenge",
    constraintsLabel: "Constraints",
    strategyLabel: "Leadership and delivery",
    cjmLabel: "Operating system",
    galleryLabel: "How I led the project",
    eyebrow: "CASE 02 / ENTERPRISE / NDA",
    title: "User monitoring and working-time management",
    subtitle:
      "An enterprise interface that turns complex statuses, shifts, and absence workflows into a clear operating process for employees, managers, and support teams.",
    period: "2025 - 2026 / Automation Lead / Product Design",
    heroStats: [
      ["×3-5", "faster absence requests"],
      ["-5x", "fewer workflow errors"],
      ["5", "specialists coordinated"],
      ["NDA", "details anonymized"],
    ],
    intro:
      "This case cannot be shown as a normal screen gallery: the product lives inside enterprise infrastructure and the details are protected by NDA. So the important part is the process: how I unpacked a complex domain, built team delivery, collected feedback through interviews and tasks, and designed an interface that reduced operational load.",
    challenge: [
      "Make complex working-time tracking understandable without long instructions or constant support.",
      "Bring statuses, shifts, absences, roles, and exceptions into one readable interface.",
      "Help users instantly understand what is complete, what needs action, and where an error exists.",
    ],
    constraints: [
      "Enterprise environment: security constraints, internal roles, approvals, and dependency on existing infrastructure.",
      "Real screens, data, names, and architectural details cannot be disclosed.",
      "The project required synchronization between design, analytics, engineering, support, and business stakeholders.",
    ],
    solutionTitle: "My role: not just drawing screens, but bringing the product into a working process",
    solution:
      "I led the direction as a design lead and product connector: gathered context through interviews, translated feedback into tasks, coordinated a 5-person team, ran design reviews, and controlled handoff to engineering. On the UX side, the focus was instant status recognition: color indicators, clear states, smart validation, and flows without unnecessary navigation.",
    pillars: [
      ["Interview-led discovery", "Interviewed users and process participants to uncover real pain points, exceptions, and recurring mistakes."],
      ["Tasks over chaos", "Turned feedback into clear tasks, priorities, scenarios, and team-ready requirements."],
      ["Design review and handoff", "Checked state logic, specifications, edge cases, and engineering readiness."],
      ["Team coordination", "Managed syncs, ownership, and project movement across design, analytics, and engineering roles."],
    ],
    scenarioTitle: "What was designed inside the product",
    scenarios: [
      ["Shift calendar", "Employees see monthly context, shifts, statuses, and deviations without manual checking."],
      ["Statuses and validation", "Color markers and rules show what is correct and what needs action."],
      ["Absence requests", "A short flow reduces questions to support and managers."],
      ["Roles and access", "The interface supports different rights: employee, manager, support, administrator."],
      ["AI assistant", "AI hints explain the current state and suggest the next step."],
      ["Action history", "The system stores changes to resolve disputes without manual investigation."],
    ],
    accents: [
      ["01", "Process before UI", "I did not start with screens. I first mapped where the workflow broke: unclear statuses, repeated mistakes, and moments where users needed help."],
      ["02", "Interviews → insights → tasks", "Feedback did not stay as notes. I turned it into tasks, priorities, user scenarios, and acceptance criteria for the team."],
      ["03", "A visual status system", "The main UX bet was instant recognition: users should understand the state without decoding, training, or reading instructions."],
      ["04", "Enterprise without losing speed", "Even with NDA, approvals, and infrastructure constraints, the project moved iteratively: prototypes, reviews, refinements, handoff."],
    ],
  },
};

const diagnosticsCase = {
  ru: {
    back: "Вернуться к кейсам",
    taskLabel: "Задача",
    constraintsLabel: "Ограничения",
    strategyLabel: "Как я упаковал решение",
    cjmLabel: "Процесс",
    galleryLabel: "Доказательства проекта",
    eyebrow: "CASE 03 / INDUSTRIAL AI / IT CAMP",
    title: "Интеллектуальная система токовой диагностики электродвигателей",
    subtitle:
      "MVP для нефтегазовой промышленности: от сложной инженерной задачи до понятного интерфейса, демо-сценария и защиты решения перед экспертами.",
    period: "IT Camp Sirius / Газпром нефть / 2025",
    videoUrl: "https://kinescope.io/a5xU7fcMvYPibAK4dQeA8N",
    videoCta: "Смотреть демо",
    videoTitle: "Видео-демо системы токовой диагностики",
    heroStats: [
      ["72", "часа на исследование, прототип и демо"],
      ["6", "этапов от discovery до валидации"],
      ["AI", "выявление дефектов по токовым данным"],
      ["Prize", "специальный приз на IT Camp"],
    ],
    intro:
      "Кейс показывает не только интерфейс, а способность быстро войти в промышленную предметную область, собрать рабочую логику продукта и объяснить техническую ценность бизнес-аудитории. В центре решения — система, которая помогает специалистам загружать данные токовой диагностики, видеть критичность дефектов и быстрее переходить от CSV-файла к понятному выводу.",
    challenge: [
      "Сделать сложную диагностику электродвигателей понятной для экспертов, которые работают с файлами, метриками и критичностью дефектов.",
      "Собрать интерфейс, где можно подключить API, выбрать период, загрузить данные, обновить результат и увидеть график тяжести во времени.",
      "Подготовить демо, которое можно защитить перед экспертами: не как красивый экран, а как работающее продуктово-техническое решение.",
    ],
    constraints: [
      "Сжатый формат IT Camp: нужно было быстро пройти исследование, архитектуру, прототип, визуальный дизайн и демонстрацию.",
      "Сложная промышленная тема: токовая диагностика, дефекты, уровни критичности и понятная интерпретация графиков.",
      "Аудитория разная: технические эксперты, жюри, бизнес и люди, которым нужно быстро увидеть ценность решения.",
    ],
    solutionTitle: "Сделал техническое решение читаемым: от данных и графиков к понятному продукту",
    solution:
      "Я сфокусировался на упаковке сложной логики в простой рабочий сценарий: загрузить данные, запустить обработку, увидеть дефект, оценить степень и перейти к графику. Визуально система получила темную industrial-подачу, четкие кнопки действий, таблицу результатов и график, который сразу показывает пики риска. Для защиты я помог собрать историю решения: проблема, процесс, интерфейс, демо и эффект для отрасли.",
    pillars: [
      ["Research", "Разобрали предметную область и язык экспертов, чтобы интерфейс говорил не абстрактно, а через файлы, дефекты, степень и действия."],
      ["Architecture", "Собрали сценарий вокруг главного пути: подключить источник, выбрать период, загрузить CSV, обновить данные и посмотреть график."],
      ["Prototype", "Сделали интерфейс, который можно показывать как продукт: с состояниями, действиями, таблицей и визуализацией риска."],
      ["Pitch", "Упаковали решение для защиты: техническая польза стала понятной через сценарий, метрики и демонстрацию."],
    ],
    scenarioTitle: "Что пользователь видит в продукте",
    scenarios: [
      ["Подключить API", "Сценарий начинается с источника данных, а не с пустого экрана."],
      ["Выбрать период", "Пользователь задает интервал анализа и понимает, за какой отрезок смотрит диагностику."],
      ["Загрузить файл", "CSV превращается в понятную строку результата с временем, дефектом, степенью и действиями."],
      ["Оценить критичность", "Метки High и график помогают быстро увидеть, где нужен приоритет."],
      ["Открыть график", "Диагностика становится визуальной: пики риска видны без ручного просмотра таблиц."],
      ["Скачать результат", "Эксперт может забрать данные дальше в рабочий процесс."],
    ],
    processSteps: [
      ["01", "Исследование", "Понять задачу, язык экспертов, данные и критерии ценности."],
      ["02", "Архитектура решения", "Собрать путь от источника данных до понятного результата."],
      ["03", "Прототипирование", "Быстро проверить сценарий на кликабельном рабочем макете."],
      ["04", "Визуальный дизайн", "Сделать industrial-интерфейс читаемым, уверенным и демо-готовым."],
      ["05", "Передача в разработку", "Подготовить логику состояний, экранов и ключевых действий."],
      ["06", "Валидация и демо", "Показать решение экспертам как работающий продуктовый сценарий."],
    ],
    gallery: [
      [diagnosticsProduct, "Интерфейс продукта", "Рабочая зона для диагностики: подключение API, выбор периода, загрузка файла, таблица результатов и график тяжести дефекта.", "screen"],
      [null, "Процесс решения", "Линейка работы была собрана как понятный путь: исследование, архитектура, прототип, визуальный дизайн, передача в разработку, валидация и демо.", "process"],
      [diagnosticsBrochure, "Материалы для защиты", "Решение было упаковано не только в экран, но и в понятные материалы, которые помогали объяснять ценность продукта экспертам.", "photo"],
      [diagnosticsStage, "Публичная защита", "Команда представила решение перед аудиторией и экспертами IT Camp, показывая не концепцию, а собранную продуктовую историю.", "photo"],
      [diagnosticsAward, "Результат", "Проект получил специальный приз: сильный сигнал, что решение было понятно, убедительно и ценно для контекста индустрии.", "photo"],
    ],
  },
  en: {
    back: "Back to cases",
    taskLabel: "Challenge",
    constraintsLabel: "Constraints",
    strategyLabel: "How I framed the solution",
    cjmLabel: "Process",
    galleryLabel: "Project proof",
    eyebrow: "CASE 03 / INDUSTRIAL AI / IT CAMP",
    title: "Intelligent current diagnostics for electric motors",
    subtitle:
      "An MVP for the oil and gas industry: from a complex engineering problem to a clear interface, demo flow, and expert-facing solution story.",
    period: "IT Camp Sirius / Gazprom Neft / 2025",
    videoUrl: "https://kinescope.io/a5xU7fcMvYPibAK4dQeA8N",
    videoCta: "Watch demo",
    videoTitle: "Current diagnostics system demo video",
    heroStats: [
      ["72", "hours for research, prototype, and demo"],
      ["6", "steps from discovery to validation"],
      ["AI", "defect detection from current data"],
      ["Prize", "special award at IT Camp"],
    ],
    intro:
      "This case is not just about an interface. It shows the ability to enter a complex industrial domain fast, build product logic, and explain technical value to a business and expert audience. The system helps specialists upload current diagnostics data, understand defect severity, and move from a CSV file to a readable conclusion faster.",
    challenge: [
      "Make electric-motor diagnostics understandable for experts working with files, metrics, defect types, and severity.",
      "Build an interface where users can connect an API, select a period, upload data, refresh results, and inspect a severity chart over time.",
      "Prepare a demo that could be defended in front of experts as a working product-technical solution, not just a polished screen.",
    ],
    constraints: [
      "Compressed IT Camp format: research, architecture, prototype, visual design, and demo had to happen quickly.",
      "Complex industrial domain: current diagnostics, defects, severity levels, and chart interpretation.",
      "Mixed audience: technical experts, jury, business stakeholders, and people who needed to understand the value quickly.",
    ],
    solutionTitle: "I made a technical system readable: from raw data and charts to a product workflow",
    solution:
      "I focused on packaging complex logic into a simple working scenario: upload data, run processing, see the defect, assess severity, and open the chart. Visually, the product received a dark industrial feel, clear action buttons, a results table, and a chart that immediately highlights risk peaks. For the pitch, I helped shape the story: problem, process, interface, demo, and industry impact.",
    pillars: [
      ["Research", "Unpacked the expert language so the interface could speak through files, defects, severity, and actions."],
      ["Architecture", "Built the flow around the main path: connect source, select period, upload CSV, refresh data, and inspect chart."],
      ["Prototype", "Created a product-like interface with states, actions, table output, and risk visualization."],
      ["Pitch", "Framed the solution for presentation so the technical value became clear through scenario, metrics, and demo."],
    ],
    scenarioTitle: "What the user sees in the product",
    scenarios: [
      ["Connect API", "The workflow starts from a data source instead of an empty screen."],
      ["Select period", "The user defines the analysis window and understands what time range is being inspected."],
      ["Upload file", "A CSV becomes a readable result row with time, defect, severity, and actions."],
      ["Assess criticality", "High labels and the chart help identify what needs priority."],
      ["Open chart", "Diagnostics become visual: risk peaks are visible without manually scanning tables."],
      ["Download result", "The expert can move the output into the next workflow."],
    ],
    processSteps: [
      ["01", "Research", "Understand the challenge, expert language, data, and value criteria."],
      ["02", "Solution architecture", "Build the path from data source to readable diagnostic result."],
      ["03", "Prototyping", "Validate the workflow quickly through a clickable working mockup."],
      ["04", "Visual design", "Make the industrial interface readable, confident, and demo-ready."],
      ["05", "Development handoff", "Prepare state logic, screens, and key actions for implementation."],
      ["06", "Validation and demo", "Present the solution to experts as a working product scenario."],
    ],
    gallery: [
      [diagnosticsProduct, "Product interface", "A working diagnostics area: API connection, period selection, file upload, results table, and defect severity chart.", "screen"],
      [null, "Solution process", "The work was framed as a clear path: research, architecture, prototyping, visual design, development handoff, validation, and demo.", "process"],
      [diagnosticsBrochure, "Pitch materials", "The solution was packaged beyond the screen: materials helped explain the product value to experts.", "photo"],
      [diagnosticsStage, "Public defense", "The team presented the solution to the IT Camp audience and experts, showing a complete product story.", "photo"],
      [diagnosticsAward, "Outcome", "The project received a special award, signaling that the solution was clear, convincing, and valuable in the industrial context.", "photo"],
    ],
  },
};

const ragCase = {
  ru: {
    back: "Вернуться к кейсам",
    taskLabel: "Задача",
    constraintsLabel: "Ограничения",
    strategyLabel: "Product architecture",
    cjmLabel: "Сценарии платформы",
    galleryLabel: "Как устроено решение",
    eyebrow: "CASE 04 / RAG PLATFORM / NDA",
    title: "RAG-платформа для интеллектуальной поддержки",
    subtitle:
      "AI-сервис, который превращает разрозненные базы знаний компании в управляемую систему поиска, уточнения контекста и генерации ответов с учетом роли пользователя.",
    period: "2024 - 2025 / AI Product / On-premise / Knowledge base",
    heroStats: [
      ["×2", "быстрее поиск по базе знаний"],
      ["30%", "потенциал автозакрытия типовых задач"],
      ["On-premise", "развертывание внутри контура"],
      ["NDA", "детали и данные обезличены"],
    ],
    intro:
      "В больших компаниях знания живут фрагментами: регламенты, инструкции, документы, FAQ, переписки и локальные базы отделов. Пользователь тратит время не на решение задачи, а на поиск правильного источника и проверку актуальности. RAG-платформа собирает этот хаос в понятный AI-интерфейс: задаешь вопрос, уточняешь контекст, получаешь ответ с учетом роли, источников и безопасных правил доступа.",
    challenge: [
      "Сделать поиск по корпоративным знаниям быстрее и понятнее без ручного обхода десятков источников.",
      "Спроектировать AI-flow, где система не просто отвечает, а уточняет контекст и показывает надежность ответа.",
      "Сохранить безопасность: on-premise контур, роли, права доступа, маршрутизация по отделам и контроль источников.",
    ],
    constraints: [
      "NDA: нельзя раскрывать реальные документы, интерфейсные детали, архитектуру и названия внутренних систем.",
      "Сложный trust layer: пользователю нужно понимать, откуда взят ответ и можно ли на него опираться.",
      "Разные роли и сценарии: сотрудник, поддержка, эксперт отдела, администратор знаний и владелец процесса.",
    ],
    solutionTitle: "Спроектировал не чат-бота, а рабочий слой между знаниями, ролями и задачами",
    solution:
      "Ключевая идея была в том, чтобы убрать ощущение магии и сделать AI управляемым инструментом. Я собрал интерфейс вокруг понятного цикла: вопрос → уточнение контекста → подбор источников → генерация ответа → проверка → действие. В продуктовой логике появились role-aware ответы, шаблоны промптов, маршрутизация по отделам, состояния доверия и безопасная работа внутри инфраструктуры компании.",
    pillars: [
      ["Semantic search", "Поиск работает по смыслу, а не только по ключевым словам: пользователь быстрее находит релевантный фрагмент знания."],
      ["Role context", "Ответ учитывает роль, отдел и доступы, чтобы не выдавать лишнее и не смешивать разные уровни информации."],
      ["Prompt templates", "Типовые запросы превращены в управляемые сценарии: меньше случайности, больше предсказуемости."],
      ["Secure routing", "Сложные вопросы можно направлять в нужный отдел или экспертную группу, не теряя контекст."],
    ],
    scenarioTitle: "Сценарии, которые делают AI полезным в работе",
    scenarios: [
      ["Задать вопрос", "Пользователь формулирует запрос естественным языком, без знания структуры базы."],
      ["Уточнить контекст", "Система просит выбрать область, роль или папку, чтобы сузить поиск и повысить точность."],
      ["Собрать источники", "RAG подтягивает релевантные фрагменты и показывает, на чем основан ответ."],
      ["Получить ответ", "AI формирует ответ с учетом роли пользователя и ограничений доступа."],
      ["Проверить доверие", "Интерфейс показывает сигналы надежности: источники, свежесть, совпадения, предупреждения."],
      ["Передать дальше", "Если вопрос сложный, система сохраняет контекст и маршрутизирует задачу экспертам."],
    ],
    flow: [
      ["01", "Question", "Запрос пользователя становится входной точкой сценария."],
      ["02", "Context", "Система уточняет роль, область знаний и ограничения."],
      ["03", "Retrieval", "Семантический поиск собирает релевантные фрагменты."],
      ["04", "Answer", "AI генерирует ответ с привязкой к источникам."],
      ["05", "Trust", "Пользователь видит, почему ответу можно доверять."],
      ["06", "Action", "Ответ превращается в действие, задачу или маршрутизацию."],
    ],
    accents: [
      ["01", "Не просто чат", "Главная ценность была не в поле ввода, а в управляемом контуре: источники, роли, доверие, маршрутизация и сценарии."],
      ["02", "Доверие как часть UX", "Для enterprise AI важно показать не только ответ, но и основание: откуда информация, насколько она актуальна и кому доступна."],
      ["03", "AI без риска для данных", "Логика проектировалась под безопасное развертывание: on-premise, права доступа и аккуратная работа с внутренними знаниями."],
      ["04", "Быстрее поддержка", "Типовые вопросы могут закрываться автоматически, а сложные уходят экспертам уже с контекстом и источниками."],
    ],
  },
  en: {
    back: "Back to cases",
    taskLabel: "Challenge",
    constraintsLabel: "Constraints",
    strategyLabel: "Product architecture",
    cjmLabel: "Platform scenarios",
    galleryLabel: "How the solution works",
    eyebrow: "CASE 04 / RAG PLATFORM / NDA",
    title: "RAG platform for intelligent support",
    subtitle:
      "An AI service that turns fragmented company knowledge bases into a managed system for semantic search, context clarification, and role-aware answers.",
    period: "2024 - 2025 / AI Product / On-premise / Knowledge base",
    heroStats: [
      ["×2", "faster knowledge-base search"],
      ["30%", "potential auto-resolution of common tasks"],
      ["On-premise", "deployment inside company perimeter"],
      ["NDA", "details and data anonymized"],
    ],
    intro:
      "In large companies, knowledge is scattered across regulations, instructions, documents, FAQs, conversations, and local department bases. Users spend time not on solving the task, but on finding the right source and checking relevance. The RAG platform turns this chaos into a clear AI interface: ask a question, clarify context, receive a role-aware answer with sources and safe access rules.",
    challenge: [
      "Make corporate knowledge search faster and clearer without forcing users to browse many sources manually.",
      "Design an AI flow where the system clarifies context and shows answer reliability instead of simply replying.",
      "Keep the solution secure: on-premise deployment, roles, access rights, department routing, and source control.",
    ],
    constraints: [
      "NDA: real documents, interface details, architecture, and internal system names cannot be disclosed.",
      "Complex trust layer: users need to understand where the answer came from and whether it can be relied on.",
      "Different roles and scenarios: employee, support, department expert, knowledge admin, and process owner.",
    ],
    solutionTitle: "I designed not a chatbot, but a working layer between knowledge, roles, and tasks",
    solution:
      "The key idea was to remove the feeling of magic and make AI a controlled tool. I shaped the interface around a clear loop: question, context clarification, source retrieval, answer generation, verification, and action. The product logic included role-aware answers, prompt templates, department routing, trust states, and safe work inside company infrastructure.",
    pillars: [
      ["Semantic search", "Search works by meaning, not only keywords, helping users find relevant knowledge faster."],
      ["Role context", "The answer reflects role, department, and access rights so information levels do not get mixed."],
      ["Prompt templates", "Common requests become managed scenarios: less randomness, more predictable output."],
      ["Secure routing", "Complex questions can be routed to the right expert group while keeping context intact."],
    ],
    scenarioTitle: "Scenarios that make AI useful in real work",
    scenarios: [
      ["Ask a question", "The user starts with natural language instead of knowing the knowledge-base structure."],
      ["Clarify context", "The system asks for domain, role, or folder to narrow search and improve accuracy."],
      ["Retrieve sources", "RAG pulls relevant fragments and shows what the answer is based on."],
      ["Generate answer", "AI creates a response considering user role and access constraints."],
      ["Check trust", "The interface shows reliability signals: sources, freshness, matches, and warnings."],
      ["Route forward", "If the question is complex, the system keeps context and routes the task to experts."],
    ],
    flow: [
      ["01", "Question", "The user request becomes the scenario entry point."],
      ["02", "Context", "The system clarifies role, knowledge area, and constraints."],
      ["03", "Retrieval", "Semantic search collects relevant fragments."],
      ["04", "Answer", "AI generates a source-grounded response."],
      ["05", "Trust", "The user sees why the answer can be trusted."],
      ["06", "Action", "The answer becomes an action, task, or route."],
    ],
    accents: [
      ["01", "Not just chat", "The value was not the input field, but the managed layer: sources, roles, trust, routing, and scenarios."],
      ["02", "Trust as UX", "Enterprise AI must show not only the answer, but the basis: where information came from, how fresh it is, and who can access it."],
      ["03", "AI without data risk", "The logic was designed for safe deployment: on-premise, access rights, and careful handling of internal knowledge."],
      ["04", "Faster support", "Common questions can be resolved automatically, while complex ones reach experts with context and sources attached."],
    ],
  },
};

const socialCase = {
  ru: {
    back: "Вернуться к кейсам",
    taskLabel: "Зачем это в портфолио",
    constraintsLabel: "Что это доказывает",
    strategyLabel: "Public expertise",
    cjmLabel: "Форматы активности",
    galleryLabel: "Видео и выступления",
    eyebrow: "CASE 05 / PUBLIC LOG / SOCIAL ACTIVITY",
    title: "Публичный журнал: встречи, доклады и AI-практика",
    subtitle:
      "Пополняемый раздел с мероприятиями, видео, отзывами и материалами о том, как я объясняю AI-продукты, дизайн и продуктовые решения живой аудитории.",
    period: "Living archive / Talks / Meetups / AI / Product thinking",
    heroStats: [
      ["2", "видео-материала в разделе"],
      ["AI", "главная тема публичной экспертизы"],
      ["Product", "фокус на пользе, а не хайпе"],
      ["Trust", "доказательство коммуникации и лидерства"],
    ],
    intro:
      "Это не страница одного события, а живой архив социальной активности. Здесь будут собираться мои встречи, доклады, видео, отзывы и публичные материалы. Для клиента это важный слой доверия: видно, что я умею не только проектировать интерфейсы, но и объяснять сложные AI-идеи людям, командам и бизнесу.",
    challenge: [
      "Показать, что AI-продукты можно объяснять понятно без перегруза терминами и красивых, но пустых обещаний.",
      "Усилить доверие к портфолио через публичные выступления, видео и живую коммуникацию.",
      "Связать социальную активность с продуктовой ценностью: гипотезы, сценарии, внедрение, командное согласование.",
    ],
    constraints: [
      "Публичный формат требует говорить просто, но не упрощать смысл до банальности.",
      "Нужно удержать баланс между экспертностью, личным брендом и коммерческой ценностью для клиента.",
      "AI-тема быстро меняется, поэтому важно показывать мышление и подход, а не только набор инструментов.",
    ],
    solutionTitle: "Я использую публичность как часть продуктовой упаковки",
    solution:
      "Социальная активность здесь работает как proof of expertise. Видео и выступления показывают, что я могу не только спроектировать интерфейс, но и объяснить логику решения, собрать внимание аудитории, аргументировать ценность AI и перевести сложную технологию в язык задач, сценариев и результата.",
    pillars: [
      ["Объяснять сложное", "AI, RAG, автоматизация и продуктовая логика становятся понятными через примеры, сценарии и визуальные опоры."],
      ["Защищать решения", "Публичный формат тренирует аргументацию: почему решение нужно, как оно работает и что меняет для пользователей."],
      ["Вести аудиторию", "Умение говорить с людьми напрямую усиливает доверие клиента к процессу и результату."],
      ["Строить личный бренд", "Экспертность видна не только в кейсах, но и в том, как дизайнер мыслит, объясняет и делится опытом."],
    ],
    scenarios: [
      ["Доклад", "Структурированное объяснение темы, проблемы, примеров и выводов."],
      ["Видео", "Формат, который можно быстро посмотреть и понять подачу, тон и уровень экспертизы."],
      ["Демо-логика", "Сложная идея раскрывается через сценарий: что было, что изменилось, как это использовать."],
      ["Командная сессия", "Публичное мышление легко переносится в воркшопы, discovery и защиту решений."],
      ["Личный бренд", "Активность помогает клиенту увидеть человека за интерфейсами."],
      ["Доверие", "Если эксперт умеет объяснять публично, с ним легче начинать проект."],
    ],
    videos: [
      {
        title: "YouTube: как AI меняет поведение пользователя",
        text: "Горизонтальный формат для просмотра доклада и оценки подачи материала.",
        src: "https://www.youtube.com/embed/-VtU71KIZek?si=50HaijeXs_r6K8sR",
        type: "wide",
      },
      {
        title: "Фрагмент встречи",
        text: "Вертикальный формат для быстрых заметок, коротких выступлений и живых моментов с мероприятий.",
        src: "https://kinescope.io/embed/urmhUGX7M86dK1VWZ7Usp6",
        type: "vertical",
      },
    ],
    eventsLabel: "Новые встречи",
    events: [
      {
        title: "Первая официальная встреча Engineering Club",
        meta: "Engineering Club / IT-сообщество / офлайн и онлайн",
        text: [
          "Провели первую официальную встречу Engineering Club. Это только начало: мы хотим собрать сильное IT-сообщество, где можно делиться опытом, находить единомышленников и запускать новые проекты.",
          "Если у вас есть экспертиза в IT и вы готовы выступить с докладом или провести разбор интересной темы — можно написать в комментариях или в личные сообщения. Если вы ищете сотрудников, сооснователей или команду для стартапа — тоже подключайтесь, будем знакомить людей друг с другом.",
          "Если вы не из Самары, это не проблема: формат можно расширять до онлайн-встреч.",
        ],
        links: [
          ["Engineering Club", "https://t.me/eClub07"],
          ["Написать в ЛС", telegramUrl],
        ],
        video: "https://kinescope.io/embed/29VgmG3cNwFxaJTf2C9MKu",
        images: [engineeringClub01, engineeringClub02, engineeringClub03],
      },
    ],
    feedbackLabel: "Реакция аудитории",
    feedbackTitle: "Живой отзыв после встречи",
    feedbackText:
      "Такой короткий фидбек важен для портфолио: он показывает, что встреча не просто состоялась, а оставила у аудитории хорошее впечатление и ожидание следующих материалов.",
    accents: [
      ["01", "Не только дизайн", "Клиент покупает не макет, а способность провести идею от хаоса до понятного решения."],
      ["02", "Коммуникация как навык", "AI-продукты требуют объяснения, согласования и доверия. Публичная активность показывает этот навык напрямую."],
      ["03", "Экспертность в движении", "Видео добавляют живой слой к портфолио: видно мышление, голос, аргументы и способ объяснять."],
      ["04", "Фриланс-доверие", "Когда человек говорит ясно и уверенно, клиенту проще написать и начать проект."],
    ],
  },
  en: {
    back: "Back to cases",
    taskLabel: "Why this belongs in the portfolio",
    constraintsLabel: "What it proves",
    strategyLabel: "Public expertise",
    cjmLabel: "Activity formats",
    galleryLabel: "Videos and talks",
    eyebrow: "CASE 05 / PUBLIC LOG / SOCIAL ACTIVITY",
    title: "Public log: meetups, talks, and AI practice",
    subtitle:
      "A living section with events, videos, feedback, and materials showing how I explain AI products, design, and product decisions to a live audience.",
    period: "Living archive / Talks / Meetups / AI / Product thinking",
    heroStats: [
      ["2", "video materials in the section"],
      ["AI", "main topic of public expertise"],
      ["Product", "focus on value, not hype"],
      ["Trust", "proof of communication and leadership"],
    ],
    intro:
      "This is not a page for one event, but a living archive of social activity. It will collect meetups, talks, videos, feedback, and public materials. For clients, this is an important trust layer: it shows that I can not only design interfaces, but also explain complex AI ideas to people, teams, and business.",
    challenge: [
      "Show that AI products can be explained clearly without drowning people in terms or empty promises.",
      "Strengthen portfolio trust through public talks, video, and live communication.",
      "Connect social activity with product value: hypotheses, scenarios, adoption, and team alignment.",
    ],
    constraints: [
      "Public formats require simplicity without flattening the meaning.",
      "The balance matters: expertise, personal brand, and commercial value for the client.",
      "AI changes fast, so the key proof is thinking and approach, not just tools.",
    ],
    solutionTitle: "I use public activity as part of product packaging",
    solution:
      "Social activity works here as proof of expertise. Videos and talks show that I can not only design an interface, but also explain solution logic, hold audience attention, argue AI value, and translate complex technology into tasks, scenarios, and outcomes.",
    pillars: [
      ["Explain complexity", "AI, RAG, automation, and product logic become clear through examples, scenarios, and visual anchors."],
      ["Defend decisions", "Public speaking trains argumentation: why a solution matters, how it works, and what it changes."],
      ["Lead attention", "Speaking directly with people strengthens client trust in the process and result."],
      ["Build personal brand", "Expertise appears not only in cases, but also in how a designer thinks, explains, and shares experience."],
    ],
    scenarios: [
      ["Talk", "Structured explanation of a topic, problem, examples, and conclusions."],
      ["Video", "A fast way to understand tone, delivery, and expertise level."],
      ["Demo logic", "A complex idea becomes clear through a scenario: before, after, and how to use it."],
      ["Team session", "Public thinking transfers naturally into workshops, discovery, and solution defense."],
      ["Personal brand", "Activity helps clients see the person behind the interfaces."],
      ["Trust", "If an expert explains clearly in public, it is easier to start a project with them."],
    ],
    videos: [
      {
        title: "YouTube: how AI changes user behavior",
        text: "Horizontal format for watching the talk and evaluating the delivery.",
        src: "https://www.youtube.com/embed/-VtU71KIZek?si=50HaijeXs_r6K8sR",
        type: "wide",
      },
      {
        title: "Meetup fragment",
        text: "Vertical format for quick notes, short talks, and live moments from events.",
        src: "https://kinescope.io/embed/urmhUGX7M86dK1VWZ7Usp6",
        type: "vertical",
      },
    ],
    eventsLabel: "New meetups",
    events: [
      {
        title: "First official Engineering Club meetup",
        meta: "Engineering Club / IT community / offline and online",
        text: [
          "We held the first official Engineering Club meetup. This is only the beginning: the goal is to build a strong IT community where people can share experience, find like-minded collaborators, and launch new projects.",
          "If you have IT expertise and want to give a talk or lead a session on an interesting topic, you can reach out. If you are looking for employees, co-founders, or a team for a startup, this is also the place to connect.",
          "And if you are not in Samara, that is fine too: the format can expand into online meetups.",
        ],
        links: [
          ["Engineering Club", "https://t.me/eClub07"],
          ["Message me", telegramUrl],
        ],
        video: "https://kinescope.io/embed/29VgmG3cNwFxaJTf2C9MKu",
        images: [engineeringClub01, engineeringClub02, engineeringClub03],
      },
    ],
    feedbackLabel: "Audience reaction",
    feedbackTitle: "Live feedback after the meeting",
    feedbackText:
      "This kind of short feedback matters in the portfolio: it shows that the meeting did not just happen, but left the audience with a positive impression and interest in future materials.",
    accents: [
      ["01", "Not only design", "The client buys not a mockup, but the ability to move an idea from chaos to a clear solution."],
      ["02", "Communication as a skill", "AI products require explanation, alignment, and trust. Public activity shows this skill directly."],
      ["03", "Expertise in motion", "Video adds a living layer to the portfolio: thinking, voice, arguments, and explanation style."],
      ["04", "Freelance trust", "When a person speaks clearly and confidently, it is easier for a client to reach out."],
    ],
  },
};

const resumeContent = {
  ru: {
    back: "Вернуться к портфолио",
    eyebrow: "Резюме / AI Product Designer",
    title: "Сергей Остаев",
    subtitle: "Руководитель направления автоматизации / AI Product Designer",
    summary:
      "7+ лет в продуктовой логике, B2B-интерфейсах и автоматизации. Проектирую AI-driven и enterprise-продукты полного цикла: от исследования сценариев и CJM до high-fidelity прототипов, handoff и внедрения в реальные процессы.",
    location: "Готов работать из любой точки мира / удаленно / гибрид / релокация",
    contacts: [
      ["Telegram", "@Sergey_Designer", "https://t.me/Sergey_Designer"],
      ["Email", "sergiys1997@gmail.com", "mailto:sergiys1997@gmail.com"],
      ["Portfolio", "socreative.tilda.ws", "https://socreative.tilda.ws/"],
    ],
    metrics: [
      ["7+ лет", "опыта в продуктовой логике и автоматизации"],
      ["9", "запущенных продуктов и сервисов автоматизации"],
      ["1.5x", "снижение нагрузки на поддержку и аналитиков"],
      ["2x", "ускорение поиска в корпоративной базе знаний"],
    ],
    sections: {
      experience: "Опыт",
      achievements: "Ключевые достижения",
      skills: "Навыки",
      education: "Образование и развитие",
    },
    experience: [
      {
        period: "Май 2023 - сейчас",
        company: "Ростелеком Информационные Технологии",
        role: "Руководитель направления автоматизации / AI Product Designer",
        points: [
          "Проектирую архитектуру и интерфейсы AI-продуктов и систем автоматизации: CJM, User Flow, прототипы в Figma.",
          "Создаю сложные B2B-интерфейсы: аналитические дашборды, админ-панели, управление пользователями и статистикой.",
          "Координирую команду из 5 специалистов: синхронизации, дизайн-ревью, контроль передачи решений в разработку.",
          "Работаю с backend, frontend, аналитиками и ML-инженерами, чтобы продуктовая логика не терялась на реализации.",
        ],
      },
      {
        period: "Январь 2022 - июнь 2023",
        company: "X5 Tech",
        role: "Менеджер по запуску проекта",
        points: [
          "Работал с внутренними IT-системами, бизнес-пользователями и запросами смежных подразделений.",
          "Выявлял проблемы в интерфейсах и процессах сервисов, подсвечивал узкие места для технических команд.",
          "Участвовал в обучении junior-специалистов и описании пользовательских сценариев внутренних сервисов.",
        ],
      },
      {
        period: "Апрель 2019 - январь 2022",
        company: "Честный знак",
        role: "Специалист по продуктовой логике",
        points: [
          "Анализировал инциденты продукта: баги, ошибки API, сценарии второй и третьей линии поддержки.",
          "Участвовал в актуализации технической документации и базы знаний продукта маркировки товаров.",
          "Выявлял системные ошибки и улучшал внутренние CRM-процессы на основе обращений пользователей.",
        ],
      },
    ],
    achievements: [
      "Спроектировал и внедрил 9 продуктов и сервисов автоматизации.",
      "Один из продуктов получил статус лучшего продуктового решения внутри компании в 2025 году.",
      "Отобран Ростелекомом для участия в IT Camp 2025 Университета Сириус, где проектировал решение для Газпром нефти.",
      "Одним из первых освоил и внедрил рабочую среду Jaga в рамках импортозамещения.",
    ],
    skills: [
      "Product Design",
      "UI/UX Design",
      "UX Research",
      "Design System",
      "Information Architecture",
      "User Flow",
      "CJM",
      "Jobs To Be Done",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Product Discovery",
      "Hypothesis Testing",
      "Stakeholder Management",
      "Design Review",
      "B2B Product Design",
      "AI Products",
      "Complex Interface Design",
      "AI UX Patterns",
      "Project Management",
    ],
    education: [
      "2021 / Поволжский государственный университет телекоммуникаций и информатики - высшее образование, информационно-вычислительная техника.",
      "2017 / Самарский авиационный техникум при Самарском национальном исследовательском университете им. С.П. Королева - техник по компьютерным сетям, компьютерные системы управления качеством для автоматизированных производств.",
      "2025 / Научно-технический университет Сириус - передовые IT-технологии: ключевые направления, методы и практические умения для решения бизнес-задач.",
    ],
  },
  en: {
    back: "Back to portfolio",
    eyebrow: "Resume / AI Product Designer",
    title: "Sergey Ostaev",
    subtitle: "Automation Lead / AI Product Designer",
    summary:
      "7+ years across product logic, B2B interfaces, and automation. I design full-cycle AI-driven and enterprise products: from scenario research and CJM to high-fidelity prototypes, handoff, and adoption inside real workflows.",
    location: "Ready to work from anywhere / remote / hybrid / relocation",
    contacts: [
      ["Telegram", "@Sergey_Designer", "https://t.me/Sergey_Designer"],
      ["Email", "sergiys1997@gmail.com", "mailto:sergiys1997@gmail.com"],
      ["Portfolio", "socreative.tilda.ws", "https://socreative.tilda.ws/"],
    ],
    metrics: [
      ["7+ years", "in product logic and automation"],
      ["9", "automation products and services launched"],
      ["1.5x", "lower workload for support and analysts"],
      ["2x", "faster search in the corporate knowledge base"],
    ],
    sections: {
      experience: "Experience",
      achievements: "Key achievements",
      skills: "Skills",
      education: "Education and growth",
    },
    experience: [
      {
        period: "May 2023 - present",
        company: "Rostelecom Information Technologies",
        role: "Automation Lead / AI Product Designer",
        points: [
          "Design architecture and interfaces for AI products and automation systems: CJM, user flows, and Figma prototypes.",
          "Create complex B2B interfaces: analytics dashboards, admin panels, user management, and statistics workflows.",
          "Coordinate a 5-person team through syncs, design reviews, delivery control, and handoff to engineering.",
          "Work with backend, frontend, analysts, and ML engineers to keep product logic intact during implementation.",
        ],
      },
      {
        period: "January 2022 - June 2023",
        company: "X5 Tech",
        role: "Project Launch Manager",
        points: [
          "Worked with internal IT systems, business users, and requests from adjacent departments.",
          "Identified interface and service-process issues, highlighting bottlenecks for technical teams.",
          "Supported junior onboarding and documented user scenarios for internal services.",
        ],
      },
      {
        period: "April 2019 - January 2022",
        company: "Chestny Znak",
        role: "Product Logic Specialist",
        points: [
          "Analyzed product incidents, bugs, API errors, and second- and third-line support scenarios.",
          "Contributed to technical documentation and knowledge-base updates for the product marking system.",
          "Detected systemic product issues and improved internal CRM processes based on user requests.",
        ],
      },
    ],
    achievements: [
      "Designed and launched 9 automation products and services.",
      "One product was recognized as the company's best product solution in 2025.",
      "Selected by Rostelecom for IT Camp 2025 at Sirius University, designing a solution for Gazprom Neft.",
      "Among the first to adopt and implement Jaga as part of the company's import-substitution transition.",
    ],
    skills: [
      "Product Design",
      "UI/UX Design",
      "UX Research",
      "Design System",
      "Information Architecture",
      "User Flow",
      "CJM",
      "Jobs To Be Done",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Product Discovery",
      "Hypothesis Testing",
      "Stakeholder Management",
      "Design Review",
      "B2B Product Design",
      "AI Products",
      "Complex Interface Design",
      "AI UX Patterns",
      "Project Management",
    ],
    education: [
      "2021 / Povolzhskiy State University of Telecommunications and Informatics - higher education, computer engineering.",
      "2017 / Samara Aviation Technical College at Samara National Research University - computer network technician, quality-management computer systems for automated production.",
      "2025 / Sirius Science and Technology University - advanced IT technologies, methods, and practical skills for solving business tasks.",
    ],
  },
};

function App() {
  const [lang, setLang] = useState("ru");
  const [path, setPath] = useState(() => window.location.pathname);
  const t = copy[lang];
  const currentCases = useMemo(() => cases[lang], [lang]);
  const isResumePage = path.replace(/\/$/, "") === "/resume";
  const isIgmsCasePage = path.replace(/\/$/, "") === "/case/igms";
  const isEnterpriseCasePage = path.replace(/\/$/, "") === "/case/enterprise";
  const isDiagnosticsCasePage = path.replace(/\/$/, "") === "/case/diagnostics";
  const isRagCasePage = path.replace(/\/$/, "") === "/case/rag";
  const isSocialCasePage = path.replace(/\/$/, "") === "/case/social";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const timers = Array.from(document.querySelectorAll("[data-reveal]")).map((node, index) =>
      window.setTimeout(() => node.setAttribute("data-visible", "true"), Math.min(index * 70, 360)),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [lang, path]);

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} isResumePage={isResumePage} />
      {isResumePage ? (
        <ResumePage data={resumeContent[lang]} />
      ) : isIgmsCasePage ? (
        <IgmsCasePage data={igmsCase[lang]} />
      ) : isEnterpriseCasePage ? (
        <EnterpriseCasePage data={enterpriseCase[lang]} />
      ) : isDiagnosticsCasePage ? (
        <DiagnosticsCasePage data={diagnosticsCase[lang]} />
      ) : isRagCasePage ? (
        <RagCasePage data={ragCase[lang]} />
      ) : isSocialCasePage ? (
        <SocialCasePage data={socialCase[lang]} />
      ) : (
        <main id="top">
          <Hero t={t} />
          <Marquee />
          <About t={t} />
          <Cases t={t} items={currentCases} />
          <Services t={t} items={services[lang]} />
          <Process t={t} items={processSteps[lang]} />
          <Manifesto t={t} />
          <Contact t={t} />
        </main>
      )}
      <footer className="footer">
        <span>© 2026 Sergey Ostaev</span>
        <span>{t.footer}</span>
      </footer>
    </>
  );
}

function Header({ lang, setLang, t, isResumePage }) {
  const homePrefix = isResumePage ? "/" : "";

  return (
    <header className="header">
      <a className="logo" href={isResumePage ? "/#top" : "#top"} aria-label="Sergey Ostaev">
        <img className="logo-mark" src={logoMark} alt="" aria-hidden="true" />
      </a>
      <nav className="nav" aria-label="Navigation">
        {t.nav.map((label, index) => (
          <a href={`${homePrefix}#${t.navIds[index]}`} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="lang-switch"
          type="button"
          aria-label="Switch language"
          onClick={() => setLang(lang === "ru" ? "en" : "ru")}
        >
          <span className={lang === "ru" ? "lang-current" : ""}>RU</span>
          <span className={lang === "en" ? "lang-current" : ""}>ENG</span>
        </button>
        <a className={`pill-link resume-link${isResumePage ? " pill-link-active" : ""}`} href="/resume">
          {t.resumeButton}
        </a>
        <a className="pill-link" href={telegramUrl} target="_blank" rel="noreferrer">
          {t.write}
        </a>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" data-reveal>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-main">
            <p className="kicker">{t.heroKicker}</p>
            <h1 className="hero-title">
              {t.heroLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <div className="hero-bottom">
              <div className="hero-copy">
                <p>{t.heroText}</p>
              </div>
            </div>
            <div className="metric-strip metric-strip-wide" aria-label="Portfolio metrics">
              {t.metrics.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-side">
            <div className="hero-portrait" aria-label="Portrait of Sergey Ostaev">
              <img src={heroPortrait} alt="" aria-hidden="true" />
              <div className="hero-portrait-card">
                <span>AI Product Designer</span>
                <strong>B2B / Enterprise / RAG</strong>
              </div>
            </div>
            <div className="hero-cta">
              <a className="button button-light" href={telegramUrl} target="_blank" rel="noreferrer">
                {t.heroCta}
              </a>
              <a className="button button-dark" href="#cases">
                {t.heroCases}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const tags = ["AI UX", "B2B PRODUCTS", "ENTERPRISE", "DESIGN SYSTEMS", "RAG", "PRODUCT DISCOVERY"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...tags, ...tags].map((tag, index) => (
          <span key={`${tag}-${index}`}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function About({ t }) {
  return (
    <section className="section about" id="about" data-reveal>
      <p className="section-label">{t.aboutLabel}</p>
      <div className="about-grid">
        <div className="about-lead">
          <h2>{t.aboutTitle}</h2>
          <div className="about-copy">
            {t.aboutText.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
        <div className="about-stack" aria-label={t.aboutLabel}>
          {t.aboutCards.map(([number, title, text]) => (
            <article className="about-card" key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases({ t, items }) {
  return (
    <section className="section cases" id="cases">
      <div className="section-intro" data-reveal>
        <p className="section-label">{t.casesLabel}</p>
        <h2>{t.casesTitle}</h2>
        <p>{t.casesText}</p>
        <div className="case-intro-icons" aria-label={t.casesLabel}>
          {t.casesHighlights.map(([title, text], index) => (
            <article className="case-intro-item" key={title}>
              <span className={`case-intro-icon case-intro-icon-${index + 1}`} aria-hidden="true">
                <i />
              </span>
              <strong>{title}</strong>
              <small>{text}</small>
            </article>
          ))}
        </div>
      </div>
      {items.map((item, index) => (
        <CaseStudy item={item} reverse={index % 2 === 1} key={item.id} />
      ))}
    </section>
  );
}

function ResumePage({ data }) {
  return (
    <main className="resume-page" id="top">
      <section className="resume-hero" data-reveal>
        <a className="resume-back" href="/#top">
          {data.back}
        </a>
        <div className="resume-hero-grid">
          <div>
            <p className="section-label">{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <p className="resume-summary">{data.summary}</p>
            <p className="resume-location">{data.location}</p>
          </div>
          <aside className="resume-contact-card" aria-label="Resume contacts">
            {data.contacts.map(([label, value, href]) => (
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </a>
            ))}
          </aside>
        </div>
        <div className="resume-metrics" aria-label="Resume metrics">
          {data.metrics.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section resume-experience" data-reveal>
        <p className="section-label">{data.sections.experience}</p>
        <div className="resume-timeline">
          {data.experience.map((item) => (
            <article className="resume-job" key={`${item.company}-${item.period}`}>
              <div>
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-split" data-reveal>
        <div>
          <p className="section-label">{data.sections.achievements}</p>
          <div className="resume-achievements">
            {data.achievements.map((achievement, index) => (
              <article key={achievement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{achievement}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="section-label">{data.sections.education}</p>
          <div className="resume-education">
            {data.education.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-section" data-reveal>
        <p className="section-label">{data.sections.skills}</p>
        <div className="resume-skills">
          {data.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

function IgmsCasePage({ data }) {
  return (
    <main className="case-page igms-page" id="top">
      <section className="case-page-hero" data-reveal>
        <a className="resume-back" href="/#cases">
          {data.back}
        </a>
        <div className="case-page-kicker">
          <p className="section-label">{data.eyebrow}</p>
          <span>{data.period}</span>
        </div>
        <h1>{data.title}</h1>
        <p className="case-page-subtitle">{data.subtitle}</p>
        <div className="case-page-cover">
          <img src={igmsCover} alt="iGMS interface on laptop" />
        </div>
        <div className="resume-metrics case-page-metrics">
          {data.heroStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-intro" data-reveal>
        <p>{data.intro}</p>
      </section>

      <section className="case-page-section case-page-two" data-reveal>
        <CaseTextBlock title={data.taskLabel} items={data.challenge} />
        <CaseTextBlock title={data.constraintsLabel} items={data.constraints} />
      </section>

      <section className="case-page-section case-page-solution" data-reveal>
        <div>
          <p className="section-label">{data.strategyLabel}</p>
          <h2>{data.solutionTitle}</h2>
        </div>
        <p>{data.solution}</p>
      </section>

      <section className="case-page-section" data-reveal>
        <div className="case-pillars">
          {data.pillars.map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-scenarios" data-reveal>
        <div>
          <p className="section-label">{data.cjmLabel}</p>
          <h2>{data.scenarioTitle}</h2>
        </div>
        <div className="scenario-grid">
          {data.scenarios.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-gallery" data-reveal>
        <p className="section-label">{data.galleryLabel}</p>
        {data.gallery.map(([image, title, text], index) => (
          <article className="case-gallery-item" key={title}>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <img src={image} alt={title} />
          </article>
        ))}
      </section>
    </main>
  );
}

function EnterpriseCasePage({ data }) {
  return (
    <main className="case-page enterprise-page" id="top">
      <section className="case-page-hero enterprise-hero" data-reveal>
        <a className="resume-back" href="/#cases">
          {data.back}
        </a>
        <div className="case-page-kicker">
          <p className="section-label">{data.eyebrow}</p>
          <span>{data.period}</span>
        </div>
        <h1>{data.title}</h1>
        <p className="case-page-subtitle">{data.subtitle}</p>
        <div className="case-page-cover enterprise-cover">
          <img src={enterpriseCover} alt="Anonymized enterprise monitoring interface" />
        </div>
        <div className="resume-metrics case-page-metrics">
          {data.heroStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-intro enterprise-intro" data-reveal>
        <p>{data.intro}</p>
      </section>

      <section className="case-page-section case-page-two" data-reveal>
        <CaseTextBlock title={data.taskLabel} items={data.challenge} />
        <CaseTextBlock title={data.constraintsLabel} items={data.constraints} />
      </section>

      <section className="case-page-section case-page-solution enterprise-leadership" data-reveal>
        <div>
          <p className="section-label">{data.strategyLabel}</p>
          <h2>{data.solutionTitle}</h2>
        </div>
        <p>{data.solution}</p>
      </section>

      <section className="case-page-section" data-reveal>
        <div className="case-pillars enterprise-pillars">
          {data.pillars.map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-scenarios" data-reveal>
        <div>
          <p className="section-label">{data.cjmLabel}</p>
          <h2>{data.scenarioTitle}</h2>
        </div>
        <div className="scenario-grid enterprise-scenarios">
          {data.scenarios.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section enterprise-accents" data-reveal>
        <p className="section-label">{data.galleryLabel}</p>
        <div className="enterprise-accent-grid">
          {data.accents.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function DiagnosticsCasePage({ data }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoEmbedUrl = `${data.videoUrl.replace("https://kinescope.io/", "https://kinescope.io/embed/")}?autoplay=1`;

  useEffect(() => {
    if (!isVideoOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsVideoOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <main className="case-page diagnostics-page" id="top">
      <section className="case-page-hero diagnostics-hero" data-reveal>
        <a className="resume-back" href="/#cases">
          {data.back}
        </a>
        <div className="case-page-kicker">
          <p className="section-label">{data.eyebrow}</p>
          <span>{data.period}</span>
        </div>
        <h1>{data.title}</h1>
        <p className="case-page-subtitle">{data.subtitle}</p>
        <div className="case-page-cover diagnostics-cover">
          <img src={diagnosticsCover} alt="IT Camp project materials and presentation" />
          <button className="diagnostics-video-link" type="button" onClick={() => setIsVideoOpen(true)}>
            {data.videoCta}
          </button>
        </div>
        <div className="resume-metrics case-page-metrics">
          {data.heroStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-intro diagnostics-intro" data-reveal>
        <p>{data.intro}</p>
      </section>

      <section className="case-page-section case-page-two" data-reveal>
        <CaseTextBlock title={data.taskLabel} items={data.challenge} />
        <CaseTextBlock title={data.constraintsLabel} items={data.constraints} />
      </section>

      <section className="case-page-section case-page-solution diagnostics-solution" data-reveal>
        <div>
          <p className="section-label">{data.strategyLabel}</p>
          <h2>{data.solutionTitle}</h2>
        </div>
        <p>{data.solution}</p>
      </section>

      <section className="case-page-section" data-reveal>
        <div className="case-pillars diagnostics-pillars">
          {data.pillars.map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-scenarios" data-reveal>
        <div>
          <p className="section-label">{data.cjmLabel}</p>
          <h2>{data.scenarioTitle}</h2>
        </div>
        <div className="scenario-grid diagnostics-scenarios">
          {data.scenarios.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-gallery diagnostics-gallery" data-reveal>
        <p className="section-label">{data.galleryLabel}</p>
        {data.gallery.map(([image, title, text, type = "default"], index) => (
          <article className="case-gallery-item" key={title}>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            {type === "process" ? (
              <DiagnosticsProcess steps={data.processSteps} />
            ) : (
              <figure className={`case-media-frame case-media-${type}`}>
                <img src={image} alt={title} />
              </figure>
            )}
          </article>
        ))}
      </section>

      {isVideoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={data.videoTitle}>
          <button className="video-modal-backdrop" type="button" aria-label="Close video" onClick={() => setIsVideoOpen(false)} />
          <div className="video-modal-panel">
            <button className="video-modal-close" type="button" onClick={() => setIsVideoOpen(false)}>
              Close
            </button>
            <iframe
              src={videoEmbedUrl}
              title={data.videoTitle}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}

function DiagnosticsProcess({ steps }) {
  return (
    <div className="diagnostics-process" aria-label="Diagnostics solution process">
      <div className="diagnostics-process-line" aria-hidden="true" />
      {steps.map(([number, title, text]) => (
        <article className="diagnostics-process-step" key={title}>
          <span>{number}</span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function RagCasePage({ data }) {
  return (
    <main className="case-page rag-page" id="top">
      <section className="case-page-hero rag-hero" data-reveal>
        <a className="resume-back" href="/#cases">
          {data.back}
        </a>
        <div className="case-page-kicker">
          <p className="section-label">{data.eyebrow}</p>
          <span>{data.period}</span>
        </div>
        <h1>{data.title}</h1>
        <p className="case-page-subtitle">{data.subtitle}</p>
        <div className="case-page-cover rag-cover">
          <img src={ragCover} alt="Anonymized RAG platform interface" />
        </div>
        <div className="resume-metrics case-page-metrics">
          {data.heroStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-intro rag-intro" data-reveal>
        <p>{data.intro}</p>
      </section>

      <section className="case-page-section case-page-two" data-reveal>
        <CaseTextBlock title={data.taskLabel} items={data.challenge} />
        <CaseTextBlock title={data.constraintsLabel} items={data.constraints} />
      </section>

      <section className="case-page-section case-page-solution rag-solution" data-reveal>
        <div>
          <p className="section-label">{data.strategyLabel}</p>
          <h2>{data.solutionTitle}</h2>
        </div>
        <p>{data.solution}</p>
      </section>

      <section className="case-page-section" data-reveal>
        <div className="case-pillars rag-pillars">
          {data.pillars.map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-scenarios" data-reveal>
        <div>
          <p className="section-label">{data.cjmLabel}</p>
          <h2>{data.scenarioTitle}</h2>
        </div>
        <div className="scenario-grid rag-scenarios">
          {data.scenarios.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section rag-flow-section" data-reveal>
        <p className="section-label">{data.galleryLabel}</p>
        <RagFlow steps={data.flow} />
      </section>

      <section className="case-page-section rag-accents" data-reveal>
        <div className="enterprise-accent-grid rag-accent-grid">
          {data.accents.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function RagFlow({ steps }) {
  return (
    <div className="rag-flow" aria-label="RAG product flow">
      {steps.map(([number, title, text], index) => (
        <article className="rag-flow-step" key={title}>
          <span>{number}</span>
          <strong>{title}</strong>
          <p>{text}</p>
          {index < steps.length - 1 && <i aria-hidden="true" />}
        </article>
      ))}
    </div>
  );
}

function SocialCasePage({ data }) {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  const getPopupSrc = (src) => {
    const separator = src.includes("?") ? "&" : "?";
    return `${src}${separator}autoplay=1`;
  };

  return (
    <main className="case-page social-page" id="top">
      <section className="case-page-hero social-hero" data-reveal>
        <a className="resume-back" href="/#cases">
          {data.back}
        </a>
        <div className="case-page-kicker">
          <p className="section-label">{data.eyebrow}</p>
          <span>{data.period}</span>
        </div>
        <h1>{data.title}</h1>
        <p className="case-page-subtitle">{data.subtitle}</p>
        <div className="social-hero-card">
          <span>PUBLIC LOG</span>
          <strong>Meetups / talks / videos / feedback</strong>
          <p>{data.solutionTitle}</p>
        </div>
        <div className="resume-metrics case-page-metrics">
          {data.heroStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-intro social-intro" data-reveal>
        <p>{data.intro}</p>
      </section>

      <section className="case-page-section case-page-two" data-reveal>
        <CaseTextBlock title={data.taskLabel} items={data.challenge} />
        <CaseTextBlock title={data.constraintsLabel} items={data.constraints} />
      </section>

      <section className="case-page-section case-page-solution social-solution" data-reveal>
        <div>
          <p className="section-label">{data.strategyLabel}</p>
          <h2>{data.solutionTitle}</h2>
        </div>
        <p>{data.solution}</p>
      </section>

      <section className="case-page-section" data-reveal>
        <div className="case-pillars social-pillars">
          {data.pillars.map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section case-page-scenarios" data-reveal>
        <div>
          <p className="section-label">{data.cjmLabel}</p>
          <h2>{data.cjmLabel}</h2>
        </div>
        <div className="scenario-grid social-scenarios">
          {data.scenarios.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section social-videos" data-reveal>
        <p className="section-label">{data.galleryLabel}</p>
        <div className="social-video-grid">
          {data.videos.map((video) => (
            <article className={`social-video-card social-video-${video.type}`} key={video.src}>
              <div>
                <h2>{video.title}</h2>
                <p>{video.text}</p>
              </div>
              <div className="social-video-frame">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; screen-wake-lock"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <button
                  className="social-video-expand"
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  aria-label={`Open video: ${video.title}`}
                >
                  Раскрыть
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-page-section social-events" data-reveal>
        <p className="section-label">{data.eventsLabel}</p>
        {data.events.map((event) => (
          <article className="social-event-card" key={event.title}>
            <div className="social-event-copy">
              <span>{event.meta}</span>
              <h2>{event.title}</h2>
              {event.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="social-event-links">
                {event.links.map(([label, href]) => (
                  <a href={href} target="_blank" rel="noreferrer" key={href}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="social-event-media">
              <div className="social-event-video">
                <iframe
                  src={event.video}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; screen-wake-lock"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <button
                  className="social-video-expand"
                  type="button"
                  onClick={() => setActiveVideo({ src: event.video, title: event.title, type: "vertical" })}
                  aria-label={`Open video: ${event.title}`}
                >
                  Раскрыть
                </button>
              </div>
              <div className="social-event-gallery">
                {event.images.map((image, index) => (
                  <img src={image} alt={`${event.title} ${index + 1}`} key={image} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {activeVideo && (
        <div className="video-modal social-video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title}>
          <button className="video-modal-backdrop" type="button" aria-label="Close video" onClick={() => setActiveVideo(null)} />
          <div className={`video-modal-panel social-video-modal-panel social-video-modal-${activeVideo.type}`}>
            <button className="video-modal-close" type="button" onClick={() => setActiveVideo(null)}>
              Close
            </button>
            <iframe
              src={getPopupSrc(activeVideo.src)}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; screen-wake-lock"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <section className="case-page-section social-feedback" data-reveal>
        <div>
          <p className="section-label">{data.feedbackLabel}</p>
          <h2>{data.feedbackTitle}</h2>
          <p>{data.feedbackText}</p>
        </div>
        <figure className="social-feedback-card">
          <img src={socialFeedback} alt={data.feedbackTitle} />
        </figure>
      </section>

      <section className="case-page-section social-accents" data-reveal>
        <div className="enterprise-accent-grid social-accent-grid">
          {data.accents.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function CaseTextBlock({ title, items }) {
  return (
    <article className="case-text-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function CaseStudy({ item, reverse }) {
  return (
    <article className="case-block" data-reveal>
      <div className="case-heading">
        <p className="case-index">{item.index}</p>
        <h3>{item.title}</h3>
      </div>
      <div className={`case-card ${reverse ? "reverse" : ""} ${item.id ? `case-card-${item.id}` : ""}`}>
        {!reverse && <CaseVisual type={item.visual} cover={item.cover} />}
        <div className="case-info">
          <p className="case-role">{item.role}</p>
          <p className="case-desc">{item.description}</p>
          <div className="stats">
            {item.stats.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <a className="case-cta" href={item.href || telegramUrl} target={item.href ? undefined : "_blank"} rel="noreferrer">
            {item.cta}
          </a>
        </div>
        {reverse && <CaseVisual type={item.visual} cover={item.cover} />}
      </div>
      <div className="case-detail">
        <div className="detail-stat">
          <span>Inside</span>
          <strong>{item.inside}</strong>
        </div>
        <p>{item.detail}</p>
      </div>
    </article>
  );
}

function CaseVisual({ type, cover }) {
  if (cover) return <img className="case-cover-image" src={cover} alt="" aria-hidden="true" />;
  if (type === "messages") return <MessagesVisual />;
  if (type === "monitoring") return <MonitoringVisual />;
  if (type === "diagnostics") return <DiagnosticsVisual />;
  if (type === "rag") return <RagVisual />;
  return <TalkVisual />;
}

function MessagesVisual() {
  return (
    <div className="client-visual product-visual" aria-label="AI inbox mockup">
      <div className="product-shell three-column">
        <div className="side-list">
          <span className="active">Airbnb · Anna</span>
          <span>Booking · Leo</span>
          <span>Vrbo · Maria</span>
          <span>Direct · Team</span>
        </div>
        <div className="chat-panel">
          <span className="mini-label">Guest thread</span>
          <strong>Check-in question</strong>
          <p>AI suggests a response using booking context and house rules.</p>
        </div>
        <div className="ai-panel">
          <span>AI reply</span>
          <strong>15 min</strong>
          <p>Template matched · tone adjusted</p>
        </div>
      </div>
    </div>
  );
}

function MonitoringVisual() {
  return (
    <div className="client-visual product-visual warm" aria-label="Enterprise monitoring mockup">
      <div className="product-shell dashboard">
        <div className="status-row ok"><span /> Workday complete</div>
        <div className="status-row warn"><span /> Missing confirmation</div>
        <div className="status-row danger"><span /> Requires action</div>
        <div className="timeline">
          <i style={{ height: "44%" }} />
          <i style={{ height: "70%" }} />
          <i style={{ height: "52%" }} />
          <i style={{ height: "84%" }} />
          <i style={{ height: "62%" }} />
        </div>
      </div>
    </div>
  );
}

function DiagnosticsVisual() {
  return (
    <div className="client-visual product-visual blue" aria-label="Diagnostics dashboard mockup">
      <div className="product-shell diagnostics">
        <div className="signal-ring">72h</div>
        <div className="signal-copy">
          <span>Motor current diagnostics</span>
          <strong>Expert review</strong>
          <p>Hypothesis · pattern · risk level · pitch demo</p>
        </div>
      </div>
    </div>
  );
}

function RagVisual() {
  return (
    <div className="client-visual product-visual green" aria-label="RAG platform mockup">
      <div className="product-shell rag">
        <div className="search-line">Ask knowledge base...</div>
        <div className="rag-answer">
          <strong>Role-aware answer</strong>
          <p>Context from semantic search + prompt template + secure routing.</p>
        </div>
        <div className="source-grid">
          <span>HR</span>
          <span>IT</span>
          <span>Legal</span>
        </div>
      </div>
    </div>
  );
}

function TalkVisual() {
  return (
    <div className="client-visual product-visual violet" aria-label="AI talk mockup">
      <div className="product-shell talk">
        <span className="stage-pill">Meetup · Samara</span>
        <strong>How AI changes user behavior</strong>
        <p>Hypotheses, examples, demo logic, and practical adoption.</p>
      </div>
    </div>
  );
}

function Services({ t, items }) {
  return (
    <section className="section services" id="services" data-reveal>
      <p className="section-label">{t.servicesLabel}</p>
      <div className="service-list">
        {items.map(([number, title, text]) => (
          <div className="service-row" key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process({ t, items }) {
  return (
    <section className="section process" id="process" data-reveal>
      <p className="section-label">{t.processLabel}</p>
      <h2>{t.processTitle}</h2>
      <div className="process-grid">
        {items.map(([number, title, text]) => (
          <div key={title}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Manifesto({ t }) {
  return (
    <section className="section manifesto" data-reveal>
      <p>{t.manifesto}</p>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="section contact" id="contact" data-reveal>
      <div>
        <p className="section-label">{t.contactLabel}</p>
        <h2>{t.contactTitle}</h2>
      </div>
      <div className="contact-card">
        <p>{t.contactText}</p>
        <a className="button button-light" href={telegramUrl} target="_blank" rel="noreferrer">
          {t.contactCta}
        </a>
        <div className="contact-links">
          <a href="mailto:sergiys1997@gmail.com">sergiys1997@gmail.com</a>
          <a href="https://socreative.tilda.ws/" target="_blank" rel="noreferrer">
            socreative.tilda.ws
          </a>
          <a href="https://ru.pinterest.com/sergey_des1gner/" target="_blank" rel="noreferrer">
            Pinterest
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
