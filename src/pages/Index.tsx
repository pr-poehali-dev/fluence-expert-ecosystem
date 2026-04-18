import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "projects" | "tasks" | "reports" | "payments" | "verification";

const NAV_ITEMS: { id: Section; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "projects", label: "Проекты", icon: "FolderKanban" },
  { id: "tasks", label: "Задачи", icon: "ListChecks" },
  { id: "reports", label: "Отчёты", icon: "BarChart3" },
  { id: "payments", label: "Платежи", icon: "CreditCard" },
  { id: "verification", label: "Верификация", icon: "ShieldCheck" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label, suffix = "", delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: `${delay}ms`, opacity: 0 }}>
      <div className="text-4xl font-montserrat font-bold gradient-text stat-counter mb-2">
        {count.toLocaleString("ru")}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function HomeSection() {
  return (
    <div className="relative min-h-screen mesh-gradient">
      <div className="relative pt-20 pb-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag tag-blue mb-6 animate-fade-in-up" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Новый стандарт инвестиционной платформы
          </div>

          <h1 className="font-montserrat text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Найдите команду<br />
            <span className="gradient-text">или проект за 24 часа</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed" style={{ opacity: 0 }}>
            Безопасные сделки и прозрачные инвестиции. Экосистема экспертных ресурсов с полной отчётностью и демонстрацией достижений.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            <button className="btn-primary px-8 py-3.5 rounded-xl font-semibold font-golos text-base flex items-center gap-2">
              <Icon name="Rocket" size={18} />
              Создать проект
            </button>
            <button className="btn-emerald px-8 py-3.5 rounded-xl font-semibold font-golos text-base flex items-center gap-2">
              <Icon name="Users" size={18} />
              Найти команду
            </button>
            <button className="btn-ghost px-8 py-3.5 rounded-xl font-semibold font-golos text-base flex items-center gap-2">
              <Icon name="TrendingUp" size={18} />
              Стать инвестором
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <StatCard value={5000} label="Проектов" suffix="+" delay={0} />
          <StatCard value={20000} label="Специалистов" suffix="+" delay={100} />
          <StatCard value={100} label="Инвесторов" suffix="+" delay={200} />
          <StatCard value={98} label="Успешных сделок %" delay={300} />
        </div>

        {/* Features */}
        <div className="mb-20">
          <div className="section-label text-center mb-4">Платформа</div>
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">Всё что нужно для роста</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "ShieldCheck", title: "Безопасные сделки", desc: "Эскроу-счета и верификация участников обеспечивают защиту на каждом этапе", color: "text-blue-400" },
              { icon: "BarChart3", title: "Прозрачная отчётность", desc: "Реальные данные о прогрессе проектов, метрики и аналитика в реальном времени", color: "text-emerald-400" },
              { icon: "Star", title: "Рейтинг и достижения", desc: "Система репутации для исполнителей и инвесторов на основе реальных результатов", color: "text-violet-400" },
              { icon: "Zap", title: "Быстрый старт", desc: "От регистрации до первой сделки — менее 24 часов. Упрощённый онбординг", color: "text-amber-400" },
            ].map((f, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center mb-4">
                  <Icon name={f.icon} size={20} className={f.color} fallback="Star" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-20">
          <div className="section-label text-center mb-4">Процесс</div>
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            {[
              { step: "01", title: "Регистрация", desc: "Создайте профиль, пройдите верификацию и настройте параметры", icon: "UserPlus" },
              { step: "02", title: "Размещение", desc: "Опубликуйте проект или найдите подходящие задачи в каталоге", icon: "PlusCircle" },
              { step: "03", title: "Сотрудничество", desc: "Работайте с командой, отслеживайте прогресс и ставьте задачи", icon: "Handshake" },
              { step: "04", title: "Результат", desc: "Получайте оплату после подтверждения выполнения и оставляйте отзывы", icon: "CheckCircle" },
            ].map((s, i) => (
              <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 150}ms`, opacity: 0 }}>
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center animate-pulse-glow">
                    <Icon name={s.icon} size={24} className="text-blue-400" fallback="Circle" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-montserrat font-bold text-blue-400 bg-background border border-blue-400/30 rounded-lg px-1.5 py-0.5">{s.step}</span>
                </div>
                <h3 className="font-montserrat font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="section-label text-center mb-4">Отзывы</div>
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">Первые пользователи</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Алексей Морозов", role: "CEO, TechVenture", text: "Нашёл команду для нашего стартапа за 18 часов. Все специалисты верифицированы, сделка защищена эскроу.", rating: 5, avatar: "АМ" },
              { name: "Марина Соколова", role: "Инвестор", text: "Прозрачная отчётность по всем проектам — это то, чего не хватало рынку. Вижу реальный прогресс в реальном времени.", rating: 5, avatar: "МС" },
              { name: "Дмитрий Ким", role: "Full-stack разработчик", text: "Наконец платформа, где репутация строится на реальных результатах. Получил 3 контракта за первый месяц.", rating: 5, avatar: "ДК" },
            ].map((t, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Icon key={j} name="Star" size={14} className="text-amber-400" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">«{t.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="section-label text-center mb-4">Партнёры</div>
          <h2 className="font-montserrat text-2xl font-bold text-center mb-8">Нам доверяют</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Сбер Инвест", "Т-Банк", "VK Capital", "Сколково", "Яндекс Фонд", "РВК"].map((p, i) => (
              <div key={i} className="glass-card px-6 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  { id: 1, name: "FinTrack Pro", category: "Fintech", budget: "2.5M ₽", progress: 68, status: "Активный", team: 5, deadline: "Июль 2025", tags: ["SaaS", "B2B"], verified: true },
  { id: 2, name: "EcoMarket", category: "E-commerce", budget: "800K ₽", progress: 42, status: "Ищет инвестора", team: 3, deadline: "Сент. 2025", tags: ["Маркетплейс"], verified: true },
  { id: 3, name: "MedSync", category: "HealthTech", budget: "5M ₽", progress: 85, status: "Финальная фаза", team: 8, deadline: "Май 2025", tags: ["AI", "Healthcare"], verified: true },
  { id: 4, name: "EdNext", category: "EdTech", budget: "1.2M ₽", progress: 30, status: "Ищет команду", team: 2, deadline: "Окт. 2025", tags: ["Образование", "B2C"], verified: false },
  { id: 5, name: "LogiRoute", category: "Logistics", budget: "3.8M ₽", progress: 55, status: "Активный", team: 6, deadline: "Авг. 2025", tags: ["B2B", "Авто"], verified: true },
  { id: 6, name: "PropChain", category: "PropTech", budget: "7M ₽", progress: 20, status: "Ищет инвестора", team: 4, deadline: "Дек. 2025", tags: ["Блокчейн"], verified: false },
];

const CATEGORIES = ["Все", "Fintech", "E-commerce", "HealthTech", "EdTech", "Logistics", "PropTech"];

function ProjectsSection() {
  const [filter, setFilter] = useState("Все");
  const filtered = filter === "Все" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="section-label mb-2">Каталог</div>
          <h2 className="font-montserrat text-3xl font-bold">Проекты</h2>
        </div>
        <button className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2">
          <Icon name="Plus" size={16} />
          Добавить проект
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${filter === c ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "glass-card text-muted-foreground hover:text-foreground"}`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <div className="glass-card flex items-center gap-2 px-4 py-2 rounded-lg">
            <Icon name="Search" size={14} className="text-muted-foreground" />
            <input className="bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground w-36" placeholder="Поиск..." />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <div key={p.id} className="glass-card glass-card-hover rounded-2xl p-5 cursor-pointer animate-fade-in-up" style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-montserrat font-semibold">{p.name}</span>
                  {p.verified && <Icon name="BadgeCheck" size={14} className="text-blue-400" />}
                </div>
                <span className="tag tag-blue">{p.category}</span>
              </div>
              <span className={`tag ${p.status === "Активный" || p.status === "Финальная фаза" ? "tag-emerald" : "tag-amber"}`}>
                {p.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Прогресс</span>
                <span className="font-medium">{p.progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${p.progress}%` }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-xs text-muted-foreground mb-1">Бюджет</div>
                <div className="text-sm font-semibold gradient-text">{p.budget}</div>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-xs text-muted-foreground mb-1">Дедлайн</div>
                <div className="text-sm font-semibold">{p.deadline}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="Users" size={12} />
                <span>{p.team} участников</span>
              </div>
              <div className="flex gap-1 flex-wrap justify-end">
                {p.tags.map(t => <span key={t} className="tag tag-violet">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TASKS = [
  { id: 1, title: "Разработать API авторизации", project: "FinTrack Pro", assignee: "Кирилл В.", priority: "Высокий", status: "В работе", due: "15 мая", points: 8 },
  { id: 2, title: "Дизайн онбординга для инвесторов", project: "EcoMarket", assignee: "Анна Л.", priority: "Средний", status: "На проверке", due: "18 мая", points: 5 },
  { id: 3, title: "Настройка CI/CD pipeline", project: "MedSync", assignee: "Роман Д.", priority: "Высокий", status: "Готово", due: "10 мая", points: 13 },
  { id: 4, title: "Тесты платёжного модуля", project: "FinTrack Pro", assignee: "Не назначен", priority: "Критический", status: "Открыт", due: "20 мая", points: 8 },
  { id: 5, title: "SEO-оптимизация лендинга", project: "EdNext", assignee: "Светлана К.", priority: "Низкий", status: "В работе", due: "25 мая", points: 3 },
  { id: 6, title: "Интеграция аналитики Яндекс", project: "LogiRoute", assignee: "Олег М.", priority: "Средний", status: "Открыт", due: "22 мая", points: 5 },
];

const TASK_COLUMNS = ["Открыт", "В работе", "На проверке", "Готово"];

function TasksSection() {
  const [view, setView] = useState<"board" | "list">("board");
  const priorityColor: Record<string, string> = { "Критический": "tag-amber", "Высокий": "tag-blue", "Средний": "tag-violet", "Низкий": "tag-emerald" };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="section-label mb-2">Управление</div>
          <h2 className="font-montserrat text-3xl font-bold">Задачи</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex glass-card rounded-xl p-1">
            <button onClick={() => setView("board")} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${view === "board" ? "bg-blue-500/20 text-blue-400" : "text-muted-foreground"}`}>
              <Icon name="LayoutGrid" size={14} />
            </button>
            <button onClick={() => setView("list")} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${view === "list" ? "bg-blue-500/20 text-blue-400" : "text-muted-foreground"}`}>
              <Icon name="List" size={14} />
            </button>
          </div>
          <button className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2">
            <Icon name="Plus" size={16} />
            Новая задача
          </button>
        </div>
      </div>

      {view === "board" ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TASK_COLUMNS.map(col => (
            <div key={col} className="glass-card rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">{col}</span>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-muted-foreground">
                  {TASKS.filter(t => t.status === col).length}
                </span>
              </div>
              <div className="space-y-3">
                {TASKS.filter(t => t.status === col).map(task => (
                  <div key={task.id} className="glass-card glass-card-hover rounded-xl p-3 cursor-pointer">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-sm font-medium leading-snug">{task.title}</span>
                    </div>
                    <div className="mb-2">
                      <span className={`tag ${priorityColor[task.priority]}`}>{task.priority}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{task.project}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="Clock" size={10} />
                        {task.due}
                      </div>
                      <span className="tag tag-blue">{task.points} SP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Задача</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Проект</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Исполнитель</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Приоритет</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Статус</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Срок</th>
              </tr>
            </thead>
            <tbody>
              {TASKS.map((t, i) => (
                <tr key={t.id} className={`border-b border-border/50 hover:bg-white/3 transition-colors cursor-pointer ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                  <td className="px-5 py-3.5 font-medium text-sm">{t.title}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{t.project}</td>
                  <td className="px-5 py-3.5 text-sm">{t.assignee === "Не назначен" ? <span className="text-muted-foreground italic">—</span> : t.assignee}</td>
                  <td className="px-5 py-3.5"><span className={`tag ${priorityColor[t.priority]}`}>{t.priority}</span></td>
                  <td className="px-5 py-3.5"><span className={`tag ${t.status === "Готово" ? "tag-emerald" : t.status === "На проверке" ? "tag-amber" : t.status === "В работе" ? "tag-blue" : "tag-violet"}`}>{t.status}</span></td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{t.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const REPORTS_DATA = [
  { month: "Янв", revenue: 1200000 },
  { month: "Фев", revenue: 1850000 },
  { month: "Мар", revenue: 2100000 },
  { month: "Апр", revenue: 1750000 },
  { month: "Май", revenue: 2900000 },
];

const MAX_REVENUE = Math.max(...REPORTS_DATA.map(d => d.revenue));

function ReportsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="section-label mb-2">Аналитика</div>
          <h2 className="font-montserrat text-3xl font-bold">Отчёты</h2>
        </div>
        <div className="flex gap-3">
          <button className="btn-ghost px-4 py-2 rounded-xl text-sm flex items-center gap-2">
            <Icon name="Download" size={14} />
            Экспорт PDF
          </button>
          <button className="btn-primary px-4 py-2 rounded-xl text-sm flex items-center gap-2">
            <Icon name="RefreshCw" size={14} />
            Обновить
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Общий оборот", value: "9.8M ₽", delta: "+24%", up: true, icon: "DollarSign" },
          { label: "Активных проектов", value: "98", delta: "+12", up: true, icon: "FolderKanban" },
          { label: "Выполнено задач", value: "714", delta: "+8%", up: true, icon: "CheckSquare" },
          { label: "Средний рейтинг", value: "4.87", delta: "-0.02", up: false, icon: "Star" },
        ].map((k, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{k.label}</span>
              <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center">
                <Icon name={k.icon} size={14} className="text-blue-400" fallback="Circle" />
              </div>
            </div>
            <div className="font-montserrat text-2xl font-bold mb-1">{k.value}</div>
            <div className={`text-xs flex items-center gap-1 ${k.up ? "text-emerald-400" : "text-red-400"}`}>
              <Icon name={k.up ? "TrendingUp" : "TrendingDown"} size={10} fallback="Circle" />
              {k.delta} к прошлому месяцу
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-montserrat font-semibold">Оборот по месяцам</h3>
          <div className="flex gap-2">
            {["3 мес", "6 мес", "1 год"].map((p, i) => (
              <button key={p} className={`px-3 py-1 rounded-lg text-xs transition-all ${i === 2 ? "bg-blue-500/20 text-blue-400" : "text-muted-foreground hover:text-foreground"}`}>{p}</button>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-3 h-48">
          {REPORTS_DATA.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">{(d.revenue / 1000000).toFixed(1)}M</span>
              <div
                className="w-full rounded-t-lg relative overflow-hidden cursor-pointer group transition-all duration-300 hover:opacity-90"
                style={{ height: `${(d.revenue / MAX_REVENUE) * 160}px`, background: "linear-gradient(180deg, hsl(217,91%,60%) 0%, hsl(160,84%,39%) 100%)" }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
              </div>
              <span className="text-xs text-muted-foreground">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-montserrat font-semibold">Последние отчёты</h3>
          <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Все отчёты →</button>
        </div>
        {[
          { name: "Ежемесячный отчёт — Апрель 2025", project: "FinTrack Pro", date: "01.05.2025", status: "Подтверждён", size: "2.4 MB" },
          { name: "Отчёт о прогрессе — Q1 2025", project: "MedSync", date: "01.04.2025", status: "На проверке", size: "5.1 MB" },
          { name: "Финансовый отчёт — Март 2025", project: "EcoMarket", date: "15.03.2025", status: "Подтверждён", size: "1.8 MB" },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4 border-b border-border/50 hover:bg-white/3 transition-colors cursor-pointer">
            <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center shrink-0">
              <Icon name="FileText" size={16} className="text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.project} · {r.date}</div>
            </div>
            <span className={`tag ${r.status === "Подтверждён" ? "tag-emerald" : "tag-amber"}`}>{r.status}</span>
            <span className="text-xs text-muted-foreground">{r.size}</span>
            <button className="glass-card p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Icon name="Download" size={14} className="text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRANSACTIONS = [
  { id: "TXN-001", project: "FinTrack Pro", type: "Эскроу", amount: 450000, status: "Завершён", date: "10.05.2025", from: "АО Иванов", to: "Team Alpha" },
  { id: "TXN-002", project: "MedSync", type: "Инвестиция", amount: 2000000, status: "Обработка", date: "09.05.2025", from: "Соколова М.А.", to: "MedSync LLC" },
  { id: "TXN-003", project: "EcoMarket", type: "Выплата", amount: 180000, status: "Завершён", date: "08.05.2025", from: "EcoMarket", to: "Анна Лебедева" },
  { id: "TXN-004", project: "LogiRoute", type: "Эскроу", amount: 750000, status: "Заморожен", date: "07.05.2025", from: "ООО ТрансГруз", to: "DevTeam Pro" },
  { id: "TXN-005", project: "EdNext", type: "Выплата", amount: 95000, status: "Завершён", date: "06.05.2025", from: "EdNext", to: "Светлана Ким" },
];

function PaymentsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="section-label mb-2">Финансы</div>
          <h2 className="font-montserrat text-3xl font-bold">Платежи</h2>
        </div>
        <button className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2">
          <Icon name="Plus" size={16} />
          Новый платёж
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-2xl p-6 relative overflow-hidden animate-fade-in-up" style={{ background: "linear-gradient(135deg, hsl(217,91%,40%) 0%, hsl(217,91%,25%) 100%)", opacity: 0 }}>
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 80% 20%, white, transparent 60%)" }} />
          <div className="text-sm text-blue-200 mb-2">Основной счёт</div>
          <div className="font-montserrat text-3xl font-bold text-white mb-1">3 480 000 ₽</div>
          <div className="text-xs text-blue-200">Доступно к выводу</div>
        </div>
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
          <div className="text-sm text-muted-foreground mb-2">Эскроу-счёт</div>
          <div className="font-montserrat text-3xl font-bold mb-1">1 200 000 ₽</div>
          <div className="text-xs text-muted-foreground">Заморожено: 4 проекта</div>
        </div>
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-200" style={{ opacity: 0 }}>
          <div className="text-sm text-muted-foreground mb-2">Оборот за месяц</div>
          <div className="font-montserrat text-3xl font-bold gradient-text mb-1">2 900 000 ₽</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1">
            <Icon name="TrendingUp" size={10} />
            +24% к прошлому месяцу
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-montserrat font-semibold">История транзакций</h3>
          <div className="flex gap-2">
            <button className="glass-card px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <Icon name="Filter" size={12} />
              Фильтр
            </button>
            <button className="glass-card px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <Icon name="Download" size={12} />
              Экспорт
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">ID</th>
                <th className="text-left px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">Проект</th>
                <th className="text-left px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">Тип</th>
                <th className="text-left px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">От</th>
                <th className="text-left px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">Кому</th>
                <th className="text-right px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">Сумма</th>
                <th className="text-center px-5 py-3 text-xs text-muted-foreground font-semibold uppercase">Статус</th>
              </tr>
            </thead>
            <tbody>
              {TRANSACTIONS.map((t) => (
                <tr key={t.id} className="border-b border-border/30 hover:bg-white/3 transition-colors cursor-pointer">
                  <td className="px-5 py-4 text-xs font-mono text-muted-foreground">{t.id}</td>
                  <td className="px-5 py-4 text-sm font-medium">{t.project}</td>
                  <td className="px-5 py-4"><span className="tag tag-blue">{t.type}</span></td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{t.from}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{t.to}</td>
                  <td className="px-5 py-4 text-right font-montserrat font-semibold">{t.amount.toLocaleString("ru")} ₽</td>
                  <td className="px-5 py-4 text-center">
                    <span className={`tag ${t.status === "Завершён" ? "tag-emerald" : t.status === "Обработка" ? "tag-blue" : "tag-amber"}`}>{t.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const VERIF_STEPS = [
  { id: 1, title: "Email-подтверждение", desc: "Подтвердите адрес электронной почты", status: "done", icon: "Mail" },
  { id: 2, title: "Личные данные", desc: "ФИО, дата рождения, гражданство", status: "done", icon: "User" },
  { id: 3, title: "Удостоверение личности", desc: "Загрузите паспорт или иной документ", status: "done", icon: "CreditCard" },
  { id: 4, title: "Проверка лица (Liveness)", desc: "Сделайте селфи для биометрического сравнения", status: "pending", icon: "Camera" },
  { id: 5, title: "Налоговый статус", desc: "ИНН и статус налогоплательщика", status: "pending", icon: "Receipt" },
  { id: 6, title: "Банковские реквизиты", desc: "Привяжите расчётный счёт для транзакций", status: "locked", icon: "Building2" },
];

function VerificationSection() {
  const done = VERIF_STEPS.filter(s => s.status === "done").length;
  const pct = Math.round((done / VERIF_STEPS.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="section-label mb-2">KYC</div>
        <h2 className="font-montserrat text-3xl font-bold">Верификация</h2>
        <p className="text-muted-foreground mt-2">Пройдите верификацию для доступа ко всем функциям платформы</p>
      </div>

      <div className="glass-card rounded-2xl p-6 mb-6 animate-fade-in-up" style={{ opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">Прогресс верификации</span>
          <span className="font-montserrat font-bold gradient-text">{pct}%</span>
        </div>
        <div className="progress-bar h-2 mb-4">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-montserrat font-bold text-emerald-400 text-lg">{done}</div>
            <div className="text-xs text-muted-foreground">Выполнено</div>
          </div>
          <div>
            <div className="font-montserrat font-bold text-amber-400 text-lg">{VERIF_STEPS.filter(s => s.status === "pending").length}</div>
            <div className="text-xs text-muted-foreground">Ожидает</div>
          </div>
          <div>
            <div className="font-montserrat font-bold text-muted-foreground text-lg">{VERIF_STEPS.filter(s => s.status === "locked").length}</div>
            <div className="text-xs text-muted-foreground">Заблокировано</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {VERIF_STEPS.map((s, i) => (
          <div key={s.id} className={`glass-card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 animate-fade-in-up ${s.status === "locked" ? "opacity-50" : "glass-card-hover cursor-pointer"}`} style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.status === "done" ? "bg-emerald-500/20" : s.status === "pending" ? "bg-blue-500/20" : "bg-white/5"}`}>
              {s.status === "done" ? (
                <Icon name="CheckCircle" size={22} className="text-emerald-400" />
              ) : s.status === "pending" ? (
                <Icon name={s.icon} size={22} className="text-blue-400" fallback="Circle" />
              ) : (
                <Icon name="Lock" size={22} className="text-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm mb-0.5">{s.title}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
            <div>
              {s.status === "done" && <span className="tag tag-emerald">Готово</span>}
              {s.status === "pending" && (
                <button className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold">Пройти</button>
              )}
              {s.status === "locked" && <Icon name="Lock" size={16} className="text-muted-foreground" />}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 glass-card rounded-2xl p-5 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "500ms", opacity: 0 }}>
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
          <Icon name="Shield" size={22} className="text-blue-400" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm mb-0.5">Защита данных</div>
          <div className="text-xs text-muted-foreground">Все данные шифруются по стандарту AES-256. Полное соответствие 152-ФЗ и GDPR.</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="tag tag-emerald">152-ФЗ</span>
          <span className="tag tag-blue">GDPR</span>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <HomeSection />;
      case "projects": return <ProjectsSection />;
      case "tasks": return <TasksSection />;
      case "reports": return <ReportsSection />;
      case "payments": return <PaymentsSection />;
      case "verification": return <VerificationSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50" style={{ background: "rgba(10,11,18,0.85)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setActiveSection("home")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center animate-pulse-glow" style={{ background: "linear-gradient(135deg, hsl(217,91%,55%), hsl(160,84%,40%))" }}>
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-lg tracking-tight">
              <span className="gradient-text">Flu</span>ence
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.id ? "active bg-blue-500/10" : "hover:bg-white/5"}`}
              >
                <Icon name={item.icon} size={15} fallback="Circle" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative w-9 h-9 glass-card rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors">
              <Icon name="Bell" size={16} className="text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-400"></span>
            </button>
            <div className="flex items-center gap-2.5 glass-card px-3 py-2 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">АМ</div>
              <div className="text-sm">
                <div className="font-medium leading-none mb-0.5">Алексей М.</div>
                <div className="text-xs text-muted-foreground">Инвестор</div>
              </div>
              <Icon name="ChevronDown" size={14} className="text-muted-foreground" />
            </div>
          </div>

          <button className="md:hidden glass-card p-2 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 px-4 py-3 grid grid-cols-3 gap-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                className={`flex flex-col items-center gap-1 py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${activeSection === item.id ? "bg-blue-500/15 text-blue-400" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
              >
                <Icon name={item.icon} size={18} fallback="Circle" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="animate-fade-in" key={activeSection}>
        {renderSection()}
      </main>

      <footer className="border-t border-border/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(217,91%,55%), hsl(160,84%,40%))" }}>
              <Icon name="Zap" size={12} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-sm gradient-text">Fluence</span>
            <span className="text-xs text-muted-foreground ml-2">© 2025 Все права защищены</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
          </div>
          <div className="flex gap-2">
            <button className="glass-card w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors">
              <Icon name="MessageCircle" size={14} className="text-muted-foreground" />
            </button>
            <button className="glass-card w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors">
              <Icon name="Github" size={14} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
