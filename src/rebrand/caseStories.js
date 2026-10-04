export const caseStories = {
  enterprise: {
    next: 'rag', name: 'Enterprise Automation',
    ru: {role:'Продуктовая логика и координация команды',scope:'Роли, смены, статусы и исключения',artifact:'Сценарии, интерфейс и передача в разработку',title:'Сложный процесс стал системой.',text:'Разобрал пользовательские сценарии и исключения, связал их с ролями и состояниями интерфейса. Координировал работу пяти специалистов, обсуждал решения с разработкой и сопровождал передачу в реализацию.',lesson:'Этот проект показывает, как я работаю с неопределённостью и довожу решение через команду. Публичные материалы обезличены.'},
    en: {role:'Product logic and team coordination',scope:'Roles, shifts, statuses and exceptions',artifact:'Scenarios, interface and engineering handoff',title:'A complex process became a system.',text:'Mapped user scenarios and exceptions to roles and interface states. Coordinated five specialists, discussed decisions with engineering and supported the handoff into implementation.',lesson:'This project shows how I turn ambiguity into a solution with a team. Public materials are anonymized.'}
  },
  rag: {
    next:'igms',name:'RAG Platform',
    ru:{role:'Продуктовая архитектура и AI UX',scope:'Поиск знаний с учётом ролей и доступа',artifact:'Сценарий от вопроса до проверяемого ответа',title:'Ответ, который можно проверить.',text:'Выстроил пользовательский путь вокруг вопроса, уточнения контекста, поиска источников и проверки ответа. Роли, доступ и передача сложного вопроса эксперту стали частью общего сценария.',lesson:'Главный принцип — дать человеку достаточно контекста, чтобы осознанно пользоваться результатом AI.'},
    en:{role:'Product architecture and AI UX',scope:'Knowledge search with roles and access rules',artifact:'A flow from a question to a verifiable answer',title:'An answer you can verify.',text:'Shaped the journey around a question, context clarification, source retrieval and answer verification. Roles, access and escalation to an expert became part of one consistent workflow.',lesson:'The guiding principle is to give people enough context to make an informed decision about an AI answer.'}
  },
  igms:{
    next:'diagnostics',name:'iGMS',
    ru:{role:'Продуктовая концепция, UX и прототип',scope:'Переписка и контекст бронирования',artifact:'Единое рабочее место оператора',title:'Всё нужное для ответа — рядом.',text:'Собрал концепцию рабочего места, в котором диалог, детали бронирования и AI-подсказки видны одновременно. Проработал путь гостя, структуру экранов и передачу сложного обращения оператору.',lesson:'Это концепция и прототип. Её бизнес-эффект предстоит проверять на реальных сценариях использования.'},
    en:{role:'Product concept, UX and prototype',scope:'Guest messages and booking context',artifact:'A unified operator workspace',title:'Everything needed to respond, together.',text:'Created a workspace concept with the conversation, booking details and AI suggestions visible together. Developed the guest journey, screen structure and escalation to a human operator.',lesson:'This is a concept and prototype. Its business impact still needs validation in real use.'}
  },
  diagnostics:{
    next:'lingoslide',name:'AI Diagnostics',
    ru:{role:'Продуктовая логика и интерфейс',scope:'Промышленная диагностика на IT Camp',artifact:'Прототип и демонстрация решения',title:'Из данных — в понятное действие.',text:'В короткий срок погрузился в предметную область и помог собрать логику продукта: загрузка диагностических данных, оценка критичности и переход к следующему действию. Подготовленные материалы использовались для демонстрации решения.',lesson:'Работа на IT Camp показывает, как я вхожу в новую предметную область и объясняю ценность технического решения.'},
    en:{role:'Product logic and interface design',scope:'Industrial diagnostics at IT Camp',artifact:'A prototype and solution demonstration',title:'From data to a clear next action.',text:'Quickly explored the domain and helped shape the product logic: uploading diagnostic data, understanding severity and choosing the next action. The resulting materials supported the solution demonstration.',lesson:'The IT Camp project shows how I learn a new domain and communicate the value of a technical solution.'}
  }
};
