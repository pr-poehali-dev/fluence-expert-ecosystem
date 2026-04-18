export type Lang = "ru" | "en" | "es" | "fr" | "zh" | "ja" | "hi";

export const LANGUAGES: { code: Lang; label: string; flag: string; name: string }[] = [
  { code: "ru", label: "RU", flag: "🇷🇺", name: "Русский" },
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "es", label: "ES", flag: "🇪🇸", name: "Español" },
  { code: "fr", label: "FR", flag: "🇫🇷", name: "Français" },
  { code: "zh", label: "ZH", flag: "🇨🇳", name: "中文" },
  { code: "ja", label: "JA", flag: "🇯🇵", name: "日本語" },
  { code: "hi", label: "HI", flag: "🇮🇳", name: "हिन्दी" },
];

export const t: Record<Lang, {
  // Nav
  nav_home: string;
  nav_projects: string;
  nav_tasks: string;
  nav_reports: string;
  nav_payments: string;
  nav_verification: string;

  // Hero
  hero_badge: string;
  hero_title1: string;
  hero_title2: string;
  hero_desc: string;
  hero_cta1: string;
  hero_cta2: string;
  hero_cta3: string;

  // Stats
  stat_projects: string;
  stat_specialists: string;
  stat_investors: string;
  stat_deals: string;

  // Features
  feat_title: string;
  feat_section: string;
  feat1_title: string; feat1_desc: string;
  feat2_title: string; feat2_desc: string;
  feat3_title: string; feat3_desc: string;
  feat4_title: string; feat4_desc: string;

  // Steps
  steps_section: string;
  steps_title: string;
  step1_title: string; step1_desc: string;
  step2_title: string; step2_desc: string;
  step3_title: string; step3_desc: string;
  step4_title: string; step4_desc: string;

  // Testimonials
  test_section: string;
  test_title: string;

  // Partners
  partners_section: string;
  partners_title: string;

  // Projects
  proj_section: string;
  proj_title: string;
  proj_add: string;
  proj_search: string;
  proj_cat_all: string;
  proj_progress: string;
  proj_budget: string;
  proj_deadline: string;
  proj_members: string;
  proj_verified: string;
  proj_status_active: string;
  proj_status_investor: string;
  proj_status_team: string;
  proj_status_final: string;

  // Tasks
  task_section: string;
  task_title: string;
  task_new: string;
  task_col1: string; task_col2: string; task_col3: string; task_col4: string;
  task_th_task: string; task_th_project: string; task_th_assignee: string;
  task_th_priority: string; task_th_status: string; task_th_due: string;
  task_unassigned: string;
  priority_critical: string; priority_high: string; priority_medium: string; priority_low: string;

  // Reports
  rep_section: string;
  rep_title: string;
  rep_export: string;
  rep_refresh: string;
  rep_kpi1: string; rep_kpi2: string; rep_kpi3: string; rep_kpi4: string;
  rep_chart_title: string;
  rep_list_title: string;
  rep_all: string;
  rep_status_confirmed: string;
  rep_status_review: string;
  rep_prev: string;

  // Payments
  pay_section: string;
  pay_title: string;
  pay_new: string;
  pay_acc_main: string;
  pay_acc_available: string;
  pay_acc_escrow: string;
  pay_acc_frozen: string;
  pay_acc_turnover: string;
  pay_history: string;
  pay_filter: string;
  pay_export: string;
  pay_th_id: string; pay_th_project: string; pay_th_type: string;
  pay_th_from: string; pay_th_to: string; pay_th_amount: string; pay_th_status: string;
  pay_status_done: string; pay_status_processing: string; pay_status_frozen: string;
  pay_prev_month: string;

  // Verification
  verif_section: string;
  verif_title: string;
  verif_desc: string;
  verif_progress: string;
  verif_done: string;
  verif_pending: string;
  verif_locked: string;
  verif_btn_pass: string;
  verif_btn_fill: string;
  verif_step1_title: string; verif_step1_desc: string;
  verif_step2_title: string; verif_step2_desc: string;
  verif_step3_title: string; verif_step3_desc: string;
  verif_step4_title: string; verif_step4_desc: string;
  verif_step5_title: string; verif_step5_desc: string;
  verif_step6_title: string; verif_step6_desc: string;
  verif_step7_title: string; verif_step7_desc: string;
  verif_step8_title: string; verif_step8_desc: string;
  verif_shield_title: string;
  verif_shield_desc: string;
  verif_default_step: string;
  verif_default_btn: string;

  // CV Panel
  cv_position: string;
  cv_position_ph: string;
  cv_experience: string;
  cv_exp1: string; cv_exp2: string; cv_exp3: string; cv_exp4: string;
  cv_skills: string;
  cv_skills_ph: string;
  cv_about: string;
  cv_about_ph: string;
  cv_upload: string;
  cv_upload_limit: string;
  cv_save: string;

  // Portfolio Panel
  pf_add_title: string;
  pf_name_ph: string;
  pf_result_ph: string;
  pf_link_ph: string;
  pf_year_ph: string;
  pf_count: string;
  pf_add_btn: string;

  // Footer
  footer_terms: string;
  footer_privacy: string;
  footer_support: string;
  footer_rights: string;
}> = {
  ru: {
    nav_home: "Главная", nav_projects: "Проекты", nav_tasks: "Задачи",
    nav_reports: "Отчёты", nav_payments: "Платежи", nav_verification: "Верификация",
    hero_badge: "Новый стандарт инвестиционной платформы",
    hero_title1: "Найдите команду", hero_title2: "или проект за 24 часа",
    hero_desc: "Безопасные сделки и прозрачные инвестиции. Экосистема экспертных ресурсов с полной отчётностью и демонстрацией достижений.",
    hero_cta1: "Создать проект", hero_cta2: "Найти команду", hero_cta3: "Стать инвестором",
    stat_projects: "Проектов", stat_specialists: "Специалистов", stat_investors: "Инвесторов", stat_deals: "Успешных сделок %",
    feat_section: "Платформа", feat_title: "Всё что нужно для роста",
    feat1_title: "Безопасные сделки", feat1_desc: "Эскроу-счета и верификация участников обеспечивают защиту на каждом этапе",
    feat2_title: "Прозрачная отчётность", feat2_desc: "Реальные данные о прогрессе проектов, метрики и аналитика в реальном времени",
    feat3_title: "Рейтинг и достижения", feat3_desc: "Система репутации для исполнителей и инвесторов на основе реальных результатов",
    feat4_title: "Быстрый старт", feat4_desc: "От регистрации до первой сделки — менее 24 часов. Упрощённый онбординг",
    steps_section: "Процесс", steps_title: "Как это работает",
    step1_title: "Регистрация", step1_desc: "Создайте профиль, пройдите верификацию и настройте параметры",
    step2_title: "Размещение", step2_desc: "Опубликуйте проект или найдите подходящие задачи в каталоге",
    step3_title: "Сотрудничество", step3_desc: "Работайте с командой, отслеживайте прогресс и ставьте задачи",
    step4_title: "Результат", step4_desc: "Получайте оплату после подтверждения выполнения и оставляйте отзывы",
    test_section: "Отзывы", test_title: "Первые пользователи",
    partners_section: "Партнёры", partners_title: "Нам доверяют",
    proj_section: "Каталог", proj_title: "Проекты", proj_add: "Добавить проект",
    proj_search: "Поиск...", proj_cat_all: "Все", proj_progress: "Прогресс",
    proj_budget: "Бюджет", proj_deadline: "Дедлайн", proj_members: "участников",
    proj_verified: "Верифицирован",
    proj_status_active: "Активный", proj_status_investor: "Ищет инвестора",
    proj_status_team: "Ищет команду", proj_status_final: "Финальная фаза",
    task_section: "Управление", task_title: "Задачи", task_new: "Новая задача",
    task_col1: "Открыт", task_col2: "В работе", task_col3: "На проверке", task_col4: "Готово",
    task_th_task: "Задача", task_th_project: "Проект", task_th_assignee: "Исполнитель",
    task_th_priority: "Приоритет", task_th_status: "Статус", task_th_due: "Срок",
    task_unassigned: "—",
    priority_critical: "Критический", priority_high: "Высокий", priority_medium: "Средний", priority_low: "Низкий",
    rep_section: "Аналитика", rep_title: "Отчёты", rep_export: "Экспорт PDF", rep_refresh: "Обновить",
    rep_kpi1: "Общий оборот", rep_kpi2: "Активных проектов", rep_kpi3: "Выполнено задач", rep_kpi4: "Средний рейтинг",
    rep_chart_title: "Оборот по месяцам", rep_list_title: "Последние отчёты", rep_all: "Все отчёты →",
    rep_status_confirmed: "Подтверждён", rep_status_review: "На проверке", rep_prev: "к прошлому месяцу",
    pay_section: "Финансы", pay_title: "Платежи", pay_new: "Новый платёж",
    pay_acc_main: "Основной счёт", pay_acc_available: "Доступно к выводу",
    pay_acc_escrow: "Эскроу-счёт", pay_acc_frozen: "Заморожено: 4 проекта",
    pay_acc_turnover: "Оборот за месяц",
    pay_history: "История транзакций", pay_filter: "Фильтр", pay_export: "Экспорт",
    pay_th_id: "ID", pay_th_project: "Проект", pay_th_type: "Тип",
    pay_th_from: "От", pay_th_to: "Кому", pay_th_amount: "Сумма", pay_th_status: "Статус",
    pay_status_done: "Завершён", pay_status_processing: "Обработка", pay_status_frozen: "Заморожен",
    pay_prev_month: "+24% к прошлому месяцу",
    verif_section: "KYC", verif_title: "Верификация",
    verif_desc: "Пройдите верификацию для доступа ко всем функциям платформы",
    verif_progress: "Прогресс верификации",
    verif_done: "Выполнено", verif_pending: "Ожидает", verif_locked: "Заблокировано",
    verif_btn_pass: "Пройти", verif_btn_fill: "Заполнить",
    verif_step1_title: "Email-подтверждение", verif_step1_desc: "Подтвердите адрес электронной почты",
    verif_step2_title: "Личные данные", verif_step2_desc: "ФИО, дата рождения, гражданство",
    verif_step3_title: "Удостоверение личности", verif_step3_desc: "Загрузите паспорт или иной документ",
    verif_step4_title: "Проверка лица (Liveness)", verif_step4_desc: "Сделайте селфи для биометрического сравнения",
    verif_step5_title: "Резюме (CV)", verif_step5_desc: "Загрузите резюме в формате PDF или заполните профиль вручную",
    verif_step6_title: "Портфолио проектов", verif_step6_desc: "Добавьте до 10 завершённых проектов с описанием и результатами",
    verif_step7_title: "Налоговый статус", verif_step7_desc: "ИНН и статус налогоплательщика",
    verif_step8_title: "Банковские реквизиты", verif_step8_desc: "Привяжите расчётный счёт для транзакций",
    verif_shield_title: "Защита данных",
    verif_shield_desc: "Все данные шифруются по стандарту AES-256. Полное соответствие 152-ФЗ и GDPR.",
    verif_default_step: "Этот шаг будет доступен для заполнения после настройки.",
    verif_default_btn: "Пройти шаг",
    cv_position: "Должность / специализация", cv_position_ph: "Например: Full-stack разработчик",
    cv_experience: "Опыт работы", cv_exp1: "1–2 года", cv_exp2: "3–5 лет", cv_exp3: "5–10 лет", cv_exp4: "10+ лет",
    cv_skills: "Ключевые навыки", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "О себе", cv_about_ph: "Кратко опишите опыт и достижения...",
    cv_upload: "Загрузить PDF-резюме", cv_upload_limit: "до 5 МБ", cv_save: "Сохранить резюме",
    pf_add_title: "Добавить проект", pf_name_ph: "Название проекта",
    pf_result_ph: "Результат / достижение", pf_link_ph: "Ссылка на проект (опционально)",
    pf_year_ph: "Год завершения", pf_count: "проектов добавлено", pf_add_btn: "Добавить",
    footer_terms: "Условия использования", footer_privacy: "Конфиденциальность",
    footer_support: "Поддержка", footer_rights: "© 2025 Все права защищены",
  },

  en: {
    nav_home: "Home", nav_projects: "Projects", nav_tasks: "Tasks",
    nav_reports: "Reports", nav_payments: "Payments", nav_verification: "Verification",
    hero_badge: "New standard for investment platforms",
    hero_title1: "Find a team", hero_title2: "or project in 24 hours",
    hero_desc: "Secure deals and transparent investments. Expert resource ecosystem with full reporting and achievement showcase.",
    hero_cta1: "Create project", hero_cta2: "Find a team", hero_cta3: "Become an investor",
    stat_projects: "Projects", stat_specialists: "Specialists", stat_investors: "Investors", stat_deals: "Successful deals %",
    feat_section: "Platform", feat_title: "Everything you need to grow",
    feat1_title: "Secure deals", feat1_desc: "Escrow accounts and participant verification protect every stage of the deal",
    feat2_title: "Transparent reporting", feat2_desc: "Real project progress data, metrics and real-time analytics",
    feat3_title: "Ratings & achievements", feat3_desc: "Reputation system for contractors and investors based on real results",
    feat4_title: "Quick start", feat4_desc: "From registration to first deal in under 24 hours. Streamlined onboarding",
    steps_section: "Process", steps_title: "How it works",
    step1_title: "Registration", step1_desc: "Create your profile, get verified and configure your settings",
    step2_title: "Listing", step2_desc: "Publish a project or find suitable tasks in the catalog",
    step3_title: "Collaboration", step3_desc: "Work with a team, track progress and manage tasks",
    step4_title: "Result", step4_desc: "Get paid after work confirmation and leave reviews",
    test_section: "Reviews", test_title: "Early users",
    partners_section: "Partners", partners_title: "Trusted by",
    proj_section: "Catalog", proj_title: "Projects", proj_add: "Add project",
    proj_search: "Search...", proj_cat_all: "All", proj_progress: "Progress",
    proj_budget: "Budget", proj_deadline: "Deadline", proj_members: "members",
    proj_verified: "Verified",
    proj_status_active: "Active", proj_status_investor: "Seeking investor",
    proj_status_team: "Seeking team", proj_status_final: "Final stage",
    task_section: "Management", task_title: "Tasks", task_new: "New task",
    task_col1: "Open", task_col2: "In progress", task_col3: "Review", task_col4: "Done",
    task_th_task: "Task", task_th_project: "Project", task_th_assignee: "Assignee",
    task_th_priority: "Priority", task_th_status: "Status", task_th_due: "Due",
    task_unassigned: "—",
    priority_critical: "Critical", priority_high: "High", priority_medium: "Medium", priority_low: "Low",
    rep_section: "Analytics", rep_title: "Reports", rep_export: "Export PDF", rep_refresh: "Refresh",
    rep_kpi1: "Total turnover", rep_kpi2: "Active projects", rep_kpi3: "Completed tasks", rep_kpi4: "Avg. rating",
    rep_chart_title: "Monthly turnover", rep_list_title: "Recent reports", rep_all: "All reports →",
    rep_status_confirmed: "Confirmed", rep_status_review: "Under review", rep_prev: "vs last month",
    pay_section: "Finance", pay_title: "Payments", pay_new: "New payment",
    pay_acc_main: "Main account", pay_acc_available: "Available to withdraw",
    pay_acc_escrow: "Escrow account", pay_acc_frozen: "Frozen: 4 projects",
    pay_acc_turnover: "Monthly turnover",
    pay_history: "Transaction history", pay_filter: "Filter", pay_export: "Export",
    pay_th_id: "ID", pay_th_project: "Project", pay_th_type: "Type",
    pay_th_from: "From", pay_th_to: "To", pay_th_amount: "Amount", pay_th_status: "Status",
    pay_status_done: "Completed", pay_status_processing: "Processing", pay_status_frozen: "Frozen",
    pay_prev_month: "+24% vs last month",
    verif_section: "KYC", verif_title: "Verification",
    verif_desc: "Complete verification to access all platform features",
    verif_progress: "Verification progress",
    verif_done: "Completed", verif_pending: "Pending", verif_locked: "Locked",
    verif_btn_pass: "Start", verif_btn_fill: "Fill in",
    verif_step1_title: "Email confirmation", verif_step1_desc: "Confirm your email address",
    verif_step2_title: "Personal data", verif_step2_desc: "Full name, date of birth, citizenship",
    verif_step3_title: "Identity document", verif_step3_desc: "Upload your passport or other document",
    verif_step4_title: "Liveness check", verif_step4_desc: "Take a selfie for biometric comparison",
    verif_step5_title: "Resume (CV)", verif_step5_desc: "Upload PDF resume or fill in your profile manually",
    verif_step6_title: "Project portfolio", verif_step6_desc: "Add up to 10 completed projects with descriptions",
    verif_step7_title: "Tax status", verif_step7_desc: "Tax ID and taxpayer status",
    verif_step8_title: "Bank details", verif_step8_desc: "Link a bank account for transactions",
    verif_shield_title: "Data protection",
    verif_shield_desc: "All data encrypted with AES-256. Fully compliant with GDPR.",
    verif_default_step: "This step will be available after setup.",
    verif_default_btn: "Complete step",
    cv_position: "Position / specialization", cv_position_ph: "e.g. Full-stack developer",
    cv_experience: "Work experience", cv_exp1: "1–2 years", cv_exp2: "3–5 years", cv_exp3: "5–10 years", cv_exp4: "10+ years",
    cv_skills: "Key skills", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "About me", cv_about_ph: "Briefly describe your experience and achievements...",
    cv_upload: "Upload PDF resume", cv_upload_limit: "up to 5 MB", cv_save: "Save resume",
    pf_add_title: "Add project", pf_name_ph: "Project name",
    pf_result_ph: "Result / achievement", pf_link_ph: "Project link (optional)",
    pf_year_ph: "Completion year", pf_count: "projects added", pf_add_btn: "Add",
    footer_terms: "Terms of use", footer_privacy: "Privacy policy",
    footer_support: "Support", footer_rights: "© 2025 All rights reserved",
  },

  es: {
    nav_home: "Inicio", nav_projects: "Proyectos", nav_tasks: "Tareas",
    nav_reports: "Informes", nav_payments: "Pagos", nav_verification: "Verificación",
    hero_badge: "Nuevo estándar para plataformas de inversión",
    hero_title1: "Encuentra un equipo", hero_title2: "o proyecto en 24 horas",
    hero_desc: "Acuerdos seguros e inversiones transparentes. Ecosistema de recursos expertos con informes completos y demostración de logros.",
    hero_cta1: "Crear proyecto", hero_cta2: "Buscar equipo", hero_cta3: "Ser inversor",
    stat_projects: "Proyectos", stat_specialists: "Especialistas", stat_investors: "Inversores", stat_deals: "Acuerdos exitosos %",
    feat_section: "Plataforma", feat_title: "Todo lo que necesitas para crecer",
    feat1_title: "Acuerdos seguros", feat1_desc: "Cuentas de escrow y verificación de participantes protegen cada etapa",
    feat2_title: "Informes transparentes", feat2_desc: "Datos reales del progreso de proyectos, métricas y análisis en tiempo real",
    feat3_title: "Calificaciones y logros", feat3_desc: "Sistema de reputación basado en resultados reales",
    feat4_title: "Inicio rápido", feat4_desc: "Del registro al primer acuerdo en menos de 24 horas",
    steps_section: "Proceso", steps_title: "Cómo funciona",
    step1_title: "Registro", step1_desc: "Crea tu perfil, verifica tu identidad y configura tus preferencias",
    step2_title: "Publicación", step2_desc: "Publica un proyecto o encuentra tareas en el catálogo",
    step3_title: "Colaboración", step3_desc: "Trabaja con el equipo, rastrea el progreso y gestiona tareas",
    step4_title: "Resultado", step4_desc: "Cobra tras la confirmación del trabajo y deja reseñas",
    test_section: "Reseñas", test_title: "Primeros usuarios",
    partners_section: "Socios", partners_title: "Confían en nosotros",
    proj_section: "Catálogo", proj_title: "Proyectos", proj_add: "Agregar proyecto",
    proj_search: "Buscar...", proj_cat_all: "Todos", proj_progress: "Progreso",
    proj_budget: "Presupuesto", proj_deadline: "Plazo", proj_members: "miembros",
    proj_verified: "Verificado",
    proj_status_active: "Activo", proj_status_investor: "Busca inversor",
    proj_status_team: "Busca equipo", proj_status_final: "Fase final",
    task_section: "Gestión", task_title: "Tareas", task_new: "Nueva tarea",
    task_col1: "Abierto", task_col2: "En curso", task_col3: "Revisión", task_col4: "Hecho",
    task_th_task: "Tarea", task_th_project: "Proyecto", task_th_assignee: "Asignado",
    task_th_priority: "Prioridad", task_th_status: "Estado", task_th_due: "Fecha",
    task_unassigned: "—",
    priority_critical: "Crítico", priority_high: "Alto", priority_medium: "Medio", priority_low: "Bajo",
    rep_section: "Análisis", rep_title: "Informes", rep_export: "Exportar PDF", rep_refresh: "Actualizar",
    rep_kpi1: "Facturación total", rep_kpi2: "Proyectos activos", rep_kpi3: "Tareas completadas", rep_kpi4: "Calificación media",
    rep_chart_title: "Facturación mensual", rep_list_title: "Informes recientes", rep_all: "Todos los informes →",
    rep_status_confirmed: "Confirmado", rep_status_review: "En revisión", rep_prev: "vs mes anterior",
    pay_section: "Finanzas", pay_title: "Pagos", pay_new: "Nuevo pago",
    pay_acc_main: "Cuenta principal", pay_acc_available: "Disponible para retirar",
    pay_acc_escrow: "Cuenta escrow", pay_acc_frozen: "Congelado: 4 proyectos",
    pay_acc_turnover: "Facturación mensual",
    pay_history: "Historial de transacciones", pay_filter: "Filtro", pay_export: "Exportar",
    pay_th_id: "ID", pay_th_project: "Proyecto", pay_th_type: "Tipo",
    pay_th_from: "De", pay_th_to: "Para", pay_th_amount: "Monto", pay_th_status: "Estado",
    pay_status_done: "Completado", pay_status_processing: "Procesando", pay_status_frozen: "Congelado",
    pay_prev_month: "+24% vs mes anterior",
    verif_section: "KYC", verif_title: "Verificación",
    verif_desc: "Completa la verificación para acceder a todas las funciones de la plataforma",
    verif_progress: "Progreso de verificación",
    verif_done: "Completado", verif_pending: "Pendiente", verif_locked: "Bloqueado",
    verif_btn_pass: "Iniciar", verif_btn_fill: "Rellenar",
    verif_step1_title: "Confirmación de email", verif_step1_desc: "Confirma tu dirección de correo",
    verif_step2_title: "Datos personales", verif_step2_desc: "Nombre, fecha de nacimiento, ciudadanía",
    verif_step3_title: "Documento de identidad", verif_step3_desc: "Sube tu pasaporte u otro documento",
    verif_step4_title: "Verificación facial", verif_step4_desc: "Tómate una selfie para comparación biométrica",
    verif_step5_title: "Currículum (CV)", verif_step5_desc: "Sube tu CV en PDF o rellena el perfil manualmente",
    verif_step6_title: "Portafolio de proyectos", verif_step6_desc: "Agrega hasta 10 proyectos completados",
    verif_step7_title: "Estado fiscal", verif_step7_desc: "NIF y estado de contribuyente",
    verif_step8_title: "Datos bancarios", verif_step8_desc: "Vincula una cuenta bancaria para transacciones",
    verif_shield_title: "Protección de datos",
    verif_shield_desc: "Datos cifrados con AES-256. Totalmente conforme con GDPR.",
    verif_default_step: "Este paso estará disponible después de la configuración.",
    verif_default_btn: "Completar paso",
    cv_position: "Cargo / especialización", cv_position_ph: "Ej. Desarrollador Full-stack",
    cv_experience: "Experiencia laboral", cv_exp1: "1–2 años", cv_exp2: "3–5 años", cv_exp3: "5–10 años", cv_exp4: "10+ años",
    cv_skills: "Habilidades clave", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "Sobre mí", cv_about_ph: "Describe brevemente tu experiencia y logros...",
    cv_upload: "Subir CV en PDF", cv_upload_limit: "hasta 5 MB", cv_save: "Guardar CV",
    pf_add_title: "Agregar proyecto", pf_name_ph: "Nombre del proyecto",
    pf_result_ph: "Resultado / logro", pf_link_ph: "Enlace al proyecto (opcional)",
    pf_year_ph: "Año de finalización", pf_count: "proyectos agregados", pf_add_btn: "Agregar",
    footer_terms: "Términos de uso", footer_privacy: "Privacidad",
    footer_support: "Soporte", footer_rights: "© 2025 Todos los derechos reservados",
  },

  fr: {
    nav_home: "Accueil", nav_projects: "Projets", nav_tasks: "Tâches",
    nav_reports: "Rapports", nav_payments: "Paiements", nav_verification: "Vérification",
    hero_badge: "Nouveau standard des plateformes d'investissement",
    hero_title1: "Trouvez une équipe", hero_title2: "ou un projet en 24 heures",
    hero_desc: "Transactions sécurisées et investissements transparents. Écosystème de ressources expertes avec rapports complets et mise en valeur des réalisations.",
    hero_cta1: "Créer un projet", hero_cta2: "Trouver une équipe", hero_cta3: "Devenir investisseur",
    stat_projects: "Projets", stat_specialists: "Spécialistes", stat_investors: "Investisseurs", stat_deals: "Transactions réussies %",
    feat_section: "Plateforme", feat_title: "Tout ce qu'il faut pour croître",
    feat1_title: "Transactions sécurisées", feat1_desc: "Comptes séquestres et vérification des participants à chaque étape",
    feat2_title: "Rapports transparents", feat2_desc: "Données réelles sur l'avancement des projets et analyses en temps réel",
    feat3_title: "Classements et réalisations", feat3_desc: "Système de réputation basé sur des résultats réels",
    feat4_title: "Démarrage rapide", feat4_desc: "De l'inscription à la première transaction en moins de 24 heures",
    steps_section: "Processus", steps_title: "Comment ça marche",
    step1_title: "Inscription", step1_desc: "Créez votre profil, vérifiez votre identité et configurez vos préférences",
    step2_title: "Publication", step2_desc: "Publiez un projet ou trouvez des tâches dans le catalogue",
    step3_title: "Collaboration", step3_desc: "Travaillez avec l'équipe, suivez les progrès et gérez les tâches",
    step4_title: "Résultat", step4_desc: "Recevez votre paiement après confirmation et laissez des avis",
    test_section: "Avis", test_title: "Premiers utilisateurs",
    partners_section: "Partenaires", partners_title: "Ils nous font confiance",
    proj_section: "Catalogue", proj_title: "Projets", proj_add: "Ajouter un projet",
    proj_search: "Rechercher...", proj_cat_all: "Tous", proj_progress: "Progression",
    proj_budget: "Budget", proj_deadline: "Échéance", proj_members: "membres",
    proj_verified: "Vérifié",
    proj_status_active: "Actif", proj_status_investor: "Cherche investisseur",
    proj_status_team: "Cherche équipe", proj_status_final: "Phase finale",
    task_section: "Gestion", task_title: "Tâches", task_new: "Nouvelle tâche",
    task_col1: "Ouvert", task_col2: "En cours", task_col3: "Révision", task_col4: "Terminé",
    task_th_task: "Tâche", task_th_project: "Projet", task_th_assignee: "Assigné",
    task_th_priority: "Priorité", task_th_status: "Statut", task_th_due: "Échéance",
    task_unassigned: "—",
    priority_critical: "Critique", priority_high: "Élevé", priority_medium: "Moyen", priority_low: "Bas",
    rep_section: "Analytique", rep_title: "Rapports", rep_export: "Exporter PDF", rep_refresh: "Actualiser",
    rep_kpi1: "Chiffre d'affaires total", rep_kpi2: "Projets actifs", rep_kpi3: "Tâches accomplies", rep_kpi4: "Note moyenne",
    rep_chart_title: "Chiffre d'affaires mensuel", rep_list_title: "Derniers rapports", rep_all: "Tous les rapports →",
    rep_status_confirmed: "Confirmé", rep_status_review: "En révision", rep_prev: "vs mois précédent",
    pay_section: "Finance", pay_title: "Paiements", pay_new: "Nouveau paiement",
    pay_acc_main: "Compte principal", pay_acc_available: "Disponible au retrait",
    pay_acc_escrow: "Compte séquestre", pay_acc_frozen: "Bloqué : 4 projets",
    pay_acc_turnover: "Chiffre d'affaires mensuel",
    pay_history: "Historique des transactions", pay_filter: "Filtrer", pay_export: "Exporter",
    pay_th_id: "ID", pay_th_project: "Projet", pay_th_type: "Type",
    pay_th_from: "De", pay_th_to: "À", pay_th_amount: "Montant", pay_th_status: "Statut",
    pay_status_done: "Terminé", pay_status_processing: "En traitement", pay_status_frozen: "Bloqué",
    pay_prev_month: "+24% vs mois précédent",
    verif_section: "KYC", verif_title: "Vérification",
    verif_desc: "Complétez la vérification pour accéder à toutes les fonctionnalités",
    verif_progress: "Progression de la vérification",
    verif_done: "Terminé", verif_pending: "En attente", verif_locked: "Verrouillé",
    verif_btn_pass: "Commencer", verif_btn_fill: "Remplir",
    verif_step1_title: "Confirmation email", verif_step1_desc: "Confirmez votre adresse e-mail",
    verif_step2_title: "Données personnelles", verif_step2_desc: "Nom, date de naissance, nationalité",
    verif_step3_title: "Pièce d'identité", verif_step3_desc: "Téléchargez votre passeport ou autre document",
    verif_step4_title: "Vérification faciale", verif_step4_desc: "Prenez un selfie pour la comparaison biométrique",
    verif_step5_title: "CV", verif_step5_desc: "Téléchargez votre CV en PDF ou remplissez votre profil",
    verif_step6_title: "Portfolio de projets", verif_step6_desc: "Ajoutez jusqu'à 10 projets terminés",
    verif_step7_title: "Statut fiscal", verif_step7_desc: "Numéro fiscal et statut de contribuable",
    verif_step8_title: "Coordonnées bancaires", verif_step8_desc: "Liez un compte bancaire pour les transactions",
    verif_shield_title: "Protection des données",
    verif_shield_desc: "Données chiffrées avec AES-256. Entièrement conforme au RGPD.",
    verif_default_step: "Cette étape sera disponible après configuration.",
    verif_default_btn: "Compléter l'étape",
    cv_position: "Poste / spécialisation", cv_position_ph: "Ex. Développeur Full-stack",
    cv_experience: "Expérience", cv_exp1: "1–2 ans", cv_exp2: "3–5 ans", cv_exp3: "5–10 ans", cv_exp4: "10+ ans",
    cv_skills: "Compétences clés", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "À propos", cv_about_ph: "Décrivez brièvement votre expérience...",
    cv_upload: "Télécharger CV PDF", cv_upload_limit: "jusqu'à 5 Mo", cv_save: "Enregistrer le CV",
    pf_add_title: "Ajouter un projet", pf_name_ph: "Nom du projet",
    pf_result_ph: "Résultat / réalisation", pf_link_ph: "Lien du projet (optionnel)",
    pf_year_ph: "Année de fin", pf_count: "projets ajoutés", pf_add_btn: "Ajouter",
    footer_terms: "Conditions d'utilisation", footer_privacy: "Confidentialité",
    footer_support: "Support", footer_rights: "© 2025 Tous droits réservés",
  },

  zh: {
    nav_home: "首页", nav_projects: "项目", nav_tasks: "任务",
    nav_reports: "报告", nav_payments: "支付", nav_verification: "认证",
    hero_badge: "投资平台新标准",
    hero_title1: "24小时内找到团队", hero_title2: "或投资项目",
    hero_desc: "安全交易，透明投资。专家资源生态系统，提供完整报告和成就展示。",
    hero_cta1: "创建项目", hero_cta2: "寻找团队", hero_cta3: "成为投资人",
    stat_projects: "个项目", stat_specialists: "名专家", stat_investors: "名投资人", stat_deals: "成功交易率 %",
    feat_section: "平台", feat_title: "助力增长的一切",
    feat1_title: "安全交易", feat1_desc: "托管账户和参与者验证确保每个阶段的安全",
    feat2_title: "透明报告", feat2_desc: "实时项目进展数据、指标和分析",
    feat3_title: "评级与成就", feat3_desc: "基于真实结果的承包商和投资人信誉系统",
    feat4_title: "快速启动", feat4_desc: "从注册到首笔交易不到24小时",
    steps_section: "流程", steps_title: "运作方式",
    step1_title: "注册", step1_desc: "创建个人资料，完成验证并配置设置",
    step2_title: "发布", step2_desc: "发布项目或在目录中查找合适任务",
    step3_title: "协作", step3_desc: "与团队合作，跟踪进度并管理任务",
    step4_title: "结果", step4_desc: "工作确认后获得报酬并留下评价",
    test_section: "评价", test_title: "早期用户",
    partners_section: "合作伙伴", partners_title: "信任我们",
    proj_section: "目录", proj_title: "项目", proj_add: "添加项目",
    proj_search: "搜索...", proj_cat_all: "全部", proj_progress: "进度",
    proj_budget: "预算", proj_deadline: "截止日期", proj_members: "成员",
    proj_verified: "已认证",
    proj_status_active: "进行中", proj_status_investor: "寻找投资人",
    proj_status_team: "寻找团队", proj_status_final: "最终阶段",
    task_section: "管理", task_title: "任务", task_new: "新任务",
    task_col1: "待处理", task_col2: "进行中", task_col3: "审核中", task_col4: "已完成",
    task_th_task: "任务", task_th_project: "项目", task_th_assignee: "负责人",
    task_th_priority: "优先级", task_th_status: "状态", task_th_due: "截止日",
    task_unassigned: "—",
    priority_critical: "紧急", priority_high: "高", priority_medium: "中", priority_low: "低",
    rep_section: "分析", rep_title: "报告", rep_export: "导出PDF", rep_refresh: "刷新",
    rep_kpi1: "总营业额", rep_kpi2: "活跃项目", rep_kpi3: "已完成任务", rep_kpi4: "平均评分",
    rep_chart_title: "月度营业额", rep_list_title: "最新报告", rep_all: "所有报告 →",
    rep_status_confirmed: "已确认", rep_status_review: "审核中", rep_prev: "与上月相比",
    pay_section: "财务", pay_title: "支付", pay_new: "新支付",
    pay_acc_main: "主账户", pay_acc_available: "可提现",
    pay_acc_escrow: "托管账户", pay_acc_frozen: "冻结：4个项目",
    pay_acc_turnover: "月度营业额",
    pay_history: "交易记录", pay_filter: "筛选", pay_export: "导出",
    pay_th_id: "编号", pay_th_project: "项目", pay_th_type: "类型",
    pay_th_from: "付款方", pay_th_to: "收款方", pay_th_amount: "金额", pay_th_status: "状态",
    pay_status_done: "已完成", pay_status_processing: "处理中", pay_status_frozen: "已冻结",
    pay_prev_month: "+24% 较上月",
    verif_section: "KYC", verif_title: "身份认证",
    verif_desc: "完成认证以访问平台所有功能",
    verif_progress: "认证进度",
    verif_done: "已完成", verif_pending: "待完成", verif_locked: "已锁定",
    verif_btn_pass: "开始", verif_btn_fill: "填写",
    verif_step1_title: "邮箱确认", verif_step1_desc: "确认您的电子邮件地址",
    verif_step2_title: "个人信息", verif_step2_desc: "姓名、出生日期、国籍",
    verif_step3_title: "身份证件", verif_step3_desc: "上传护照或其他证件",
    verif_step4_title: "人脸验证", verif_step4_desc: "拍摄自拍照进行生物特征比对",
    verif_step5_title: "简历 (CV)", verif_step5_desc: "上传PDF简历或手动填写个人资料",
    verif_step6_title: "项目作品集", verif_step6_desc: "添加最多10个已完成的项目",
    verif_step7_title: "税务状态", verif_step7_desc: "税号和纳税人身份",
    verif_step8_title: "银行账户", verif_step8_desc: "绑定银行账户用于交易",
    verif_shield_title: "数据保护",
    verif_shield_desc: "所有数据使用AES-256加密，完全符合GDPR。",
    verif_default_step: "此步骤将在设置后可用。",
    verif_default_btn: "完成此步骤",
    cv_position: "职位 / 专业", cv_position_ph: "例：全栈开发工程师",
    cv_experience: "工作经验", cv_exp1: "1–2年", cv_exp2: "3–5年", cv_exp3: "5–10年", cv_exp4: "10年以上",
    cv_skills: "核心技能", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "关于我", cv_about_ph: "简要描述您的经验和成就...",
    cv_upload: "上传PDF简历", cv_upload_limit: "最大5MB", cv_save: "保存简历",
    pf_add_title: "添加项目", pf_name_ph: "项目名称",
    pf_result_ph: "成果 / 成就", pf_link_ph: "项目链接（可选）",
    pf_year_ph: "完成年份", pf_count: "个项目已添加", pf_add_btn: "添加",
    footer_terms: "使用条款", footer_privacy: "隐私政策",
    footer_support: "支持", footer_rights: "© 2025 版权所有",
  },

  ja: {
    nav_home: "ホーム", nav_projects: "プロジェクト", nav_tasks: "タスク",
    nav_reports: "レポート", nav_payments: "支払い", nav_verification: "認証",
    hero_badge: "投資プラットフォームの新基準",
    hero_title1: "24時間以内にチームを", hero_title2: "またはプロジェクトを見つける",
    hero_desc: "安全な取引と透明な投資。完全なレポートと実績紹介を備えた専門家リソースエコシステム。",
    hero_cta1: "プロジェクト作成", hero_cta2: "チームを探す", hero_cta3: "投資家になる",
    stat_projects: "プロジェクト", stat_specialists: "専門家", stat_investors: "投資家", stat_deals: "成功取引率 %",
    feat_section: "プラットフォーム", feat_title: "成長に必要なすべて",
    feat1_title: "安全な取引", feat1_desc: "エスクロー口座と参加者認証で各段階を保護",
    feat2_title: "透明なレポート", feat2_desc: "リアルタイムのプロジェクト進捗データとメトリクス",
    feat3_title: "評価と実績", feat3_desc: "実際の結果に基づく信頼システム",
    feat4_title: "クイックスタート", feat4_desc: "登録から初回取引まで24時間以内",
    steps_section: "プロセス", steps_title: "仕組み",
    step1_title: "登録", step1_desc: "プロフィールを作成し、本人確認を行い設定を行う",
    step2_title: "掲載", step2_desc: "プロジェクトを公開するか、カタログでタスクを探す",
    step3_title: "協力", step3_desc: "チームと連携し、進捗を追跡してタスクを管理",
    step4_title: "成果", step4_desc: "作業確認後に報酬を受け取り、レビューを残す",
    test_section: "レビュー", test_title: "初期ユーザー",
    partners_section: "パートナー", partners_title: "信頼企業",
    proj_section: "カタログ", proj_title: "プロジェクト", proj_add: "プロジェクト追加",
    proj_search: "検索...", proj_cat_all: "すべて", proj_progress: "進捗",
    proj_budget: "予算", proj_deadline: "期限", proj_members: "メンバー",
    proj_verified: "認証済み",
    proj_status_active: "進行中", proj_status_investor: "投資家募集",
    proj_status_team: "チーム募集", proj_status_final: "最終段階",
    task_section: "管理", task_title: "タスク", task_new: "新しいタスク",
    task_col1: "未着手", task_col2: "進行中", task_col3: "レビュー中", task_col4: "完了",
    task_th_task: "タスク", task_th_project: "プロジェクト", task_th_assignee: "担当者",
    task_th_priority: "優先度", task_th_status: "ステータス", task_th_due: "期限",
    task_unassigned: "—",
    priority_critical: "緊急", priority_high: "高", priority_medium: "中", priority_low: "低",
    rep_section: "分析", rep_title: "レポート", rep_export: "PDFエクスポート", rep_refresh: "更新",
    rep_kpi1: "総売上高", rep_kpi2: "アクティブプロジェクト", rep_kpi3: "完了タスク", rep_kpi4: "平均評価",
    rep_chart_title: "月別売上高", rep_list_title: "最近のレポート", rep_all: "すべてのレポート →",
    rep_status_confirmed: "確認済み", rep_status_review: "レビュー中", rep_prev: "前月比",
    pay_section: "財務", pay_title: "支払い", pay_new: "新規支払い",
    pay_acc_main: "メインアカウント", pay_acc_available: "出金可能",
    pay_acc_escrow: "エスクロー口座", pay_acc_frozen: "凍結中：4プロジェクト",
    pay_acc_turnover: "月間売上高",
    pay_history: "取引履歴", pay_filter: "フィルター", pay_export: "エクスポート",
    pay_th_id: "ID", pay_th_project: "プロジェクト", pay_th_type: "種類",
    pay_th_from: "送金元", pay_th_to: "受取人", pay_th_amount: "金額", pay_th_status: "ステータス",
    pay_status_done: "完了", pay_status_processing: "処理中", pay_status_frozen: "凍結",
    pay_prev_month: "+24% 前月比",
    verif_section: "KYC", verif_title: "本人確認",
    verif_desc: "すべてのプラットフォーム機能にアクセスするために認証を完了してください",
    verif_progress: "認証の進捗",
    verif_done: "完了", verif_pending: "保留中", verif_locked: "ロック済み",
    verif_btn_pass: "開始", verif_btn_fill: "入力",
    verif_step1_title: "メール確認", verif_step1_desc: "メールアドレスを確認する",
    verif_step2_title: "個人情報", verif_step2_desc: "氏名、生年月日、国籍",
    verif_step3_title: "身分証明書", verif_step3_desc: "パスポートまたは他の書類をアップロード",
    verif_step4_title: "顔認証 (Liveness)", verif_step4_desc: "生体認証のためにセルフィーを撮影",
    verif_step5_title: "履歴書 (CV)", verif_step5_desc: "PDF履歴書をアップロードまたは手動で入力",
    verif_step6_title: "プロジェクトポートフォリオ", verif_step6_desc: "完了したプロジェクトを最大10件追加",
    verif_step7_title: "税務状況", verif_step7_desc: "マイナンバーと納税者ステータス",
    verif_step8_title: "銀行口座情報", verif_step8_desc: "取引用の銀行口座を連携",
    verif_shield_title: "データ保護",
    verif_shield_desc: "すべてのデータはAES-256で暗号化。GDPRに完全準拠。",
    verif_default_step: "このステップは設定後に利用可能になります。",
    verif_default_btn: "ステップを完了",
    cv_position: "役職 / 専門", cv_position_ph: "例：フルスタック開発者",
    cv_experience: "職歴", cv_exp1: "1〜2年", cv_exp2: "3〜5年", cv_exp3: "5〜10年", cv_exp4: "10年以上",
    cv_skills: "主なスキル", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "自己紹介", cv_about_ph: "経験と実績を簡単に説明してください...",
    cv_upload: "PDF履歴書をアップロード", cv_upload_limit: "最大5MB", cv_save: "履歴書を保存",
    pf_add_title: "プロジェクトを追加", pf_name_ph: "プロジェクト名",
    pf_result_ph: "成果 / 実績", pf_link_ph: "プロジェクトリンク（任意）",
    pf_year_ph: "完了年", pf_count: "件のプロジェクトが追加済み", pf_add_btn: "追加",
    footer_terms: "利用規約", footer_privacy: "プライバシーポリシー",
    footer_support: "サポート", footer_rights: "© 2025 全著作権所有",
  },

  hi: {
    nav_home: "होम", nav_projects: "प्रोजेक्ट", nav_tasks: "कार्य",
    nav_reports: "रिपोर्ट", nav_payments: "भुगतान", nav_verification: "सत्यापन",
    hero_badge: "निवेश प्लेटफॉर्म का नया मानक",
    hero_title1: "24 घंटे में टीम खोजें", hero_title2: "या कोई प्रोजेक्ट",
    hero_desc: "सुरक्षित सौदे और पारदर्शी निवेश। पूर्ण रिपोर्टिंग और उपलब्धियों के प्रदर्शन के साथ विशेषज्ञ संसाधन पारिस्थितिकी तंत्र।",
    hero_cta1: "प्रोजेक्ट बनाएं", hero_cta2: "टीम खोजें", hero_cta3: "निवेशक बनें",
    stat_projects: "प्रोजेक्ट", stat_specialists: "विशेषज्ञ", stat_investors: "निवेशक", stat_deals: "सफल सौदे %",
    feat_section: "प्लेटफॉर्म", feat_title: "विकास के लिए सब कुछ",
    feat1_title: "सुरक्षित सौदे", feat1_desc: "एस्क्रो खाते और प्रतिभागी सत्यापन हर चरण में सुरक्षा प्रदान करते हैं",
    feat2_title: "पारदर्शी रिपोर्टिंग", feat2_desc: "वास्तविक समय में प्रोजेक्ट प्रगति डेटा और विश्लेषण",
    feat3_title: "रेटिंग और उपलब्धियां", feat3_desc: "वास्तविक परिणामों पर आधारित प्रतिष्ठा प्रणाली",
    feat4_title: "त्वरित शुरुआत", feat4_desc: "पंजीकरण से पहले सौदे तक 24 घंटे से कम",
    steps_section: "प्रक्रिया", steps_title: "यह कैसे काम करता है",
    step1_title: "पंजीकरण", step1_desc: "प्रोफ़ाइल बनाएं, सत्यापन करें और सेटिंग कॉन्फ़िगर करें",
    step2_title: "प्रकाशन", step2_desc: "प्रोजेक्ट प्रकाशित करें या कैटलॉग में कार्य खोजें",
    step3_title: "सहयोग", step3_desc: "टीम के साथ काम करें, प्रगति ट्रैक करें और कार्य प्रबंधित करें",
    step4_title: "परिणाम", step4_desc: "कार्य पुष्टि के बाद भुगतान प्राप्त करें और समीक्षा छोड़ें",
    test_section: "समीक्षाएं", test_title: "प्रारंभिक उपयोगकर्ता",
    partners_section: "भागीदार", partners_title: "हम पर भरोसा करते हैं",
    proj_section: "कैटलॉग", proj_title: "प्रोजेक्ट", proj_add: "प्रोजेक्ट जोड़ें",
    proj_search: "खोजें...", proj_cat_all: "सभी", proj_progress: "प्रगति",
    proj_budget: "बजट", proj_deadline: "समयसीमा", proj_members: "सदस्य",
    proj_verified: "सत्यापित",
    proj_status_active: "सक्रिय", proj_status_investor: "निवेशक की तलाश",
    proj_status_team: "टीम की तलाश", proj_status_final: "अंतिम चरण",
    task_section: "प्रबंधन", task_title: "कार्य", task_new: "नया कार्य",
    task_col1: "खुला", task_col2: "प्रगति में", task_col3: "समीक्षा", task_col4: "पूर्ण",
    task_th_task: "कार्य", task_th_project: "प्रोजेक्ट", task_th_assignee: "असाइनी",
    task_th_priority: "प्राथमिकता", task_th_status: "स्थिति", task_th_due: "नियत तारीख",
    task_unassigned: "—",
    priority_critical: "गंभीर", priority_high: "उच्च", priority_medium: "मध्यम", priority_low: "निम्न",
    rep_section: "विश्लेषण", rep_title: "रिपोर्ट", rep_export: "PDF निर्यात", rep_refresh: "रीफ्रेश",
    rep_kpi1: "कुल टर्नओवर", rep_kpi2: "सक्रिय प्रोजेक्ट", rep_kpi3: "पूर्ण कार्य", rep_kpi4: "औसत रेटिंग",
    rep_chart_title: "मासिक टर्नओवर", rep_list_title: "हाल की रिपोर्ट", rep_all: "सभी रिपोर्ट →",
    rep_status_confirmed: "पुष्टि हुई", rep_status_review: "समीक्षा में", rep_prev: "पिछले महीने की तुलना में",
    pay_section: "वित्त", pay_title: "भुगतान", pay_new: "नया भुगतान",
    pay_acc_main: "मुख्य खाता", pay_acc_available: "निकासी के लिए उपलब्ध",
    pay_acc_escrow: "एस्क्रो खाता", pay_acc_frozen: "फ्रीज: 4 प्रोजेक्ट",
    pay_acc_turnover: "मासिक टर्नओवर",
    pay_history: "लेनदेन इतिहास", pay_filter: "फ़िल्टर", pay_export: "निर्यात",
    pay_th_id: "आईडी", pay_th_project: "प्रोजेक्ट", pay_th_type: "प्रकार",
    pay_th_from: "से", pay_th_to: "को", pay_th_amount: "राशि", pay_th_status: "स्थिति",
    pay_status_done: "पूर्ण", pay_status_processing: "प्रक्रिया में", pay_status_frozen: "फ्रीज",
    pay_prev_month: "+24% पिछले महीने की तुलना में",
    verif_section: "KYC", verif_title: "सत्यापन",
    verif_desc: "प्लेटफॉर्म की सभी सुविधाओं तक पहुंच के लिए सत्यापन पूर्ण करें",
    verif_progress: "सत्यापन प्रगति",
    verif_done: "पूर्ण", verif_pending: "लंबित", verif_locked: "लॉक",
    verif_btn_pass: "शुरू करें", verif_btn_fill: "भरें",
    verif_step1_title: "ईमेल पुष्टि", verif_step1_desc: "अपना ईमेल पता पुष्टि करें",
    verif_step2_title: "व्यक्तिगत डेटा", verif_step2_desc: "पूरा नाम, जन्म तिथि, नागरिकता",
    verif_step3_title: "पहचान दस्तावेज़", verif_step3_desc: "पासपोर्ट या अन्य दस्तावेज़ अपलोड करें",
    verif_step4_title: "चेहरा सत्यापन", verif_step4_desc: "बायोमेट्रिक तुलना के लिए सेल्फी लें",
    verif_step5_title: "रेज़्युमे (CV)", verif_step5_desc: "PDF रेज़्युमे अपलोड करें या प्रोफ़ाइल भरें",
    verif_step6_title: "प्रोजेक्ट पोर्टफोलियो", verif_step6_desc: "10 तक पूर्ण प्रोजेक्ट जोड़ें",
    verif_step7_title: "कर स्थिति", verif_step7_desc: "टैक्स आईडी और करदाता स्थिति",
    verif_step8_title: "बैंक विवरण", verif_step8_desc: "लेनदेन के लिए बैंक खाता लिंक करें",
    verif_shield_title: "डेटा सुरक्षा",
    verif_shield_desc: "सभी डेटा AES-256 से एन्क्रिप्टेड। GDPR के अनुरूप।",
    verif_default_step: "यह चरण सेटअप के बाद उपलब्ध होगा।",
    verif_default_btn: "चरण पूर्ण करें",
    cv_position: "पद / विशेषज्ञता", cv_position_ph: "उदा. फुल-स्टैक डेवलपर",
    cv_experience: "कार्य अनुभव", cv_exp1: "1–2 साल", cv_exp2: "3–5 साल", cv_exp3: "5–10 साल", cv_exp4: "10+ साल",
    cv_skills: "मुख्य कौशल", cv_skills_ph: "React, Python, PostgreSQL...",
    cv_about: "मेरे बारे में", cv_about_ph: "अपने अनुभव और उपलब्धियों का संक्षिप्त विवरण दें...",
    cv_upload: "PDF रेज़्युमे अपलोड करें", cv_upload_limit: "5 MB तक", cv_save: "रेज़्युमे सेव करें",
    pf_add_title: "प्रोजेक्ट जोड़ें", pf_name_ph: "प्रोजेक्ट का नाम",
    pf_result_ph: "परिणाम / उपलब्धि", pf_link_ph: "प्रोजेक्ट लिंक (वैकल्पिक)",
    pf_year_ph: "समापन वर्ष", pf_count: "प्रोजेक्ट जोड़े गए", pf_add_btn: "जोड़ें",
    footer_terms: "उपयोग की शर्तें", footer_privacy: "गोपनीयता नीति",
    footer_support: "सहायता", footer_rights: "© 2025 सर्वाधिकार सुरक्षित",
  },
};
