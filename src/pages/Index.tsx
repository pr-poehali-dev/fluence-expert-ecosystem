import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { LANGUAGES, t, type Lang } from "@/i18n";

type Section = "home" | "projects" | "tasks" | "reports" | "payments" | "verification";

const NAV_ICONS: Record<Section, string> = {
  home: "Home", projects: "FolderKanban", tasks: "ListChecks",
  reports: "BarChart3", payments: "CreditCard", verification: "ShieldCheck",
};

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
      <div className="text-4xl font-montserrat font-bold gradient-text stat-counter mb-2">{count.toLocaleString("ru")}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find(l => l.code === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="glass-card flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium"
      >
        <span>{current.flag}</span>
        <span className="text-muted-foreground">{current.label}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={13} className="text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 glass-card border border-border rounded-2xl overflow-hidden min-w-[160px] shadow-2xl animate-fade-in-up" style={{ opacity: 0 }}>
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${lang === l.code ? "text-blue-400" : "text-foreground"}`}
            >
              <span>{l.flag}</span>
              <span>{l.name}</span>
              {lang === l.code && <Icon name="Check" size={12} className="text-blue-400 ml-auto" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function HomeSection({ lang }: { lang: Lang }) {
  const T = t[lang];
  return (
    <div className="relative min-h-screen mesh-gradient">
      <div className="relative pt-20 pb-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag tag-blue mb-6 animate-fade-in-up" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            {T.hero_badge}
          </div>
          <h1 className="font-montserrat text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            {T.hero_title1}<br />
            <span className="gradient-text">{T.hero_title2}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed" style={{ opacity: 0 }}>
            {T.hero_desc}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            <button className="btn-primary px-8 py-3.5 rounded-xl font-semibold font-golos text-base flex items-center gap-2">
              <Icon name="Rocket" size={18} />{T.hero_cta1}
            </button>
            <button className="btn-emerald px-8 py-3.5 rounded-xl font-semibold font-golos text-base flex items-center gap-2">
              <Icon name="Users" size={18} />{T.hero_cta2}
            </button>
            <button className="btn-ghost px-8 py-3.5 rounded-xl font-semibold font-golos text-base flex items-center gap-2">
              <Icon name="TrendingUp" size={18} />{T.hero_cta3}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <StatCard value={5000} label={T.stat_projects} suffix="+" delay={0} />
          <StatCard value={20000} label={T.stat_specialists} suffix="+" delay={100} />
          <StatCard value={100} label={T.stat_investors} suffix="+" delay={200} />
          <StatCard value={98} label={T.stat_deals} delay={300} />
        </div>

        <div className="mb-20">
          <div className="section-label text-center mb-4">{T.feat_section}</div>
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">{T.feat_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "ShieldCheck", title: T.feat1_title, desc: T.feat1_desc, color: "text-blue-400" },
              { icon: "BarChart3", title: T.feat2_title, desc: T.feat2_desc, color: "text-emerald-400" },
              { icon: "Star", title: T.feat3_title, desc: T.feat3_desc, color: "text-violet-400" },
              { icon: "Zap", title: T.feat4_title, desc: T.feat4_desc, color: "text-amber-400" },
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

        <div className="mb-20">
          <div className="section-label text-center mb-4">{T.steps_section}</div>
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">{T.steps_title}</h2>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            {[
              { step: "01", title: T.step1_title, desc: T.step1_desc, icon: "UserPlus" },
              { step: "02", title: T.step2_title, desc: T.step2_desc, icon: "PlusCircle" },
              { step: "03", title: T.step3_title, desc: T.step3_desc, icon: "Handshake" },
              { step: "04", title: T.step4_title, desc: T.step4_desc, icon: "CheckCircle" },
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

        <div className="mb-20">
          <div className="section-label text-center mb-4">{T.test_section}</div>
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12">{T.test_title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Алексей Морозов", role: "CEO, TechVenture", text: lang === "ru" ? "Нашёл команду для нашего стартапа за 18 часов. Все специалисты верифицированы, сделка защищена эскроу." : lang === "en" ? "Found a team for our startup in 18 hours. All specialists are verified, the deal is protected by escrow." : lang === "es" ? "Encontré un equipo para nuestra startup en 18 horas. Todos los especialistas están verificados." : lang === "fr" ? "J'ai trouvé une équipe pour notre startup en 18 heures. Tous les spécialistes sont vérifiés." : lang === "zh" ? "18小时内为我们的创业公司找到了团队。所有专家都经过验证，交易受托管保护。" : lang === "ja" ? "18時間以内にスタートアップのチームを見つけました。すべての専門家が認証済みです。" : "18 घंटे में हमारे स्टार्टअप के लिए टीम मिली। सभी विशेषज्ञ सत्यापित हैं।", rating: 5, avatar: "АМ" },
              { name: "Марина Соколова", role: lang === "en" ? "Investor" : lang === "es" ? "Inversora" : lang === "fr" ? "Investisseuse" : lang === "zh" ? "投资人" : lang === "ja" ? "投資家" : lang === "hi" ? "निवेशक" : "Инвестор", text: lang === "ru" ? "Прозрачная отчётность по всем проектам — это то, чего не хватало рынку." : lang === "en" ? "Transparent reporting across all projects — exactly what the market was missing." : lang === "es" ? "Informes transparentes en todos los proyectos — exactamente lo que faltaba." : lang === "fr" ? "Des rapports transparents sur tous les projets — exactement ce qui manquait." : lang === "zh" ? "所有项目的透明报告——正是市场所缺少的。" : lang === "ja" ? "すべてのプロジェクトの透明なレポート—市場に欠けていたものです。" : "सभी परियोजनाओं की पारदर्शी रिपोर्टिंग — यही बाजार में कमी थी।", rating: 5, avatar: "МС" },
              { name: "Дмитрий Ким", role: "Full-stack developer", text: lang === "ru" ? "Наконец платформа, где репутация строится на реальных результатах. Получил 3 контракта за первый месяц." : lang === "en" ? "Finally a platform where reputation is built on real results. Got 3 contracts in the first month." : lang === "es" ? "Por fin una plataforma donde la reputación se basa en resultados reales. 3 contratos en el primer mes." : lang === "fr" ? "Enfin une plateforme où la réputation est basée sur de vrais résultats. 3 contrats le premier mois." : lang === "zh" ? "终于有一个基于真实结果建立声誉的平台。第一个月获得了3份合同。" : lang === "ja" ? "ついに実際の結果に基づいて評判が築かれるプラットフォーム。最初の月に3件の契約を獲得。" : "अंततः एक प्लेटफॉर्म जहां प्रतिष्ठा वास्तविक परिणामों पर बनती है। पहले महीने में 3 अनुबंध मिले।", rating: 5, avatar: "ДК" },
            ].map((tt, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: tt.rating }).map((_, j) => <Icon key={j} name="Star" size={14} className="text-amber-400" />)}</div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">«{tt.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">{tt.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold">{tt.name}</div>
                    <div className="text-xs text-muted-foreground">{tt.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-label text-center mb-4">{T.partners_section}</div>
          <h2 className="font-montserrat text-2xl font-bold text-center mb-8">{T.partners_title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Сбер Инвест", "Т-Банк", "VK Capital", "Сколково", "Яндекс Фонд", "РВК"].map((p, i) => (
              <div key={i} className="glass-card px-6 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  { id: 1, name: "FinTrack Pro", category: "Fintech", budget: "2.5M ₽", progress: 68, statusKey: "active" as const, team: 5, deadline: "Июль 2025", tags: ["SaaS", "B2B"], verified: true },
  { id: 2, name: "EcoMarket", category: "E-commerce", budget: "800K ₽", progress: 42, statusKey: "investor" as const, team: 3, deadline: "Сент. 2025", tags: ["Маркетплейс"], verified: true },
  { id: 3, name: "MedSync", category: "HealthTech", budget: "5M ₽", progress: 85, statusKey: "final" as const, team: 8, deadline: "Май 2025", tags: ["AI", "Healthcare"], verified: true },
  { id: 4, name: "EdNext", category: "EdTech", budget: "1.2M ₽", progress: 30, statusKey: "team" as const, team: 2, deadline: "Окт. 2025", tags: ["B2C"], verified: false },
  { id: 5, name: "LogiRoute", category: "Logistics", budget: "3.8M ₽", progress: 55, statusKey: "active" as const, team: 6, deadline: "Авг. 2025", tags: ["B2B"], verified: true },
  { id: 6, name: "PropChain", category: "PropTech", budget: "7M ₽", progress: 20, statusKey: "investor" as const, team: 4, deadline: "Дек. 2025", tags: ["Блокчейн"], verified: false },
];

const CATEGORIES = ["Fintech", "E-commerce", "HealthTech", "EdTech", "Logistics", "PropTech"];

function ProjectsSection({ lang }: { lang: Lang }) {
  const T = t[lang];
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const statusMap = { active: T.proj_status_active, investor: T.proj_status_investor, team: T.proj_status_team, final: T.proj_status_final };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="section-label mb-2">{T.proj_section}</div>
          <h2 className="font-montserrat text-3xl font-bold">{T.proj_title}</h2>
        </div>
        <button className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2">
          <Icon name="Plus" size={16} />{T.proj_add}
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setFilter("all")} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${filter === "all" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "glass-card text-muted-foreground hover:text-foreground"}`}>{T.proj_cat_all}</button>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setFilter(c)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${filter === c ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "glass-card text-muted-foreground hover:text-foreground"}`}>{c}</button>
        ))}
        <div className="ml-auto glass-card flex items-center gap-2 px-4 py-2 rounded-lg">
          <Icon name="Search" size={14} className="text-muted-foreground" />
          <input className="bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground w-36" placeholder={T.proj_search} />
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
              <span className={`tag ${p.statusKey === "active" || p.statusKey === "final" ? "tag-emerald" : "tag-amber"}`}>{statusMap[p.statusKey]}</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">{T.proj_progress}</span><span className="font-medium">{p.progress}%</span></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: `${p.progress}%` }} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-xs text-muted-foreground mb-1">{T.proj_budget}</div>
                <div className="text-sm font-semibold gradient-text">{p.budget}</div>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-xs text-muted-foreground mb-1">{T.proj_deadline}</div>
                <div className="text-sm font-semibold">{p.deadline}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="Users" size={12} /><span>{p.team} {T.proj_members}</span>
              </div>
              <div className="flex gap-1 flex-wrap justify-end">{p.tags.map(tg => <span key={tg} className="tag tag-violet">{tg}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TASKS_DATA = [
  { id: 1, title: "Разработать API авторизации", project: "FinTrack Pro", assignee: "Кирилл В.", priorityKey: "high" as const, statusKey: "inprogress" as const, due: "15 мая", points: 8 },
  { id: 2, title: "Дизайн онбординга", project: "EcoMarket", assignee: "Анна Л.", priorityKey: "medium" as const, statusKey: "review" as const, due: "18 мая", points: 5 },
  { id: 3, title: "Настройка CI/CD pipeline", project: "MedSync", assignee: "Роман Д.", priorityKey: "high" as const, statusKey: "done" as const, due: "10 мая", points: 13 },
  { id: 4, title: "Тесты платёжного модуля", project: "FinTrack Pro", assignee: "", priorityKey: "critical" as const, statusKey: "open" as const, due: "20 мая", points: 8 },
  { id: 5, title: "SEO-оптимизация лендинга", project: "EdNext", assignee: "Светлана К.", priorityKey: "low" as const, statusKey: "inprogress" as const, due: "25 мая", points: 3 },
  { id: 6, title: "Интеграция аналитики", project: "LogiRoute", assignee: "Олег М.", priorityKey: "medium" as const, statusKey: "open" as const, due: "22 мая", points: 5 },
];

function TasksSection({ lang }: { lang: Lang }) {
  const T = t[lang];
  const [view, setView] = useState<"board" | "list">("board");
  const cols = [
    { key: "open", label: T.task_col1 }, { key: "inprogress", label: T.task_col2 },
    { key: "review", label: T.task_col3 }, { key: "done", label: T.task_col4 },
  ];
  const pColor: Record<string, string> = { critical: "tag-amber", high: "tag-blue", medium: "tag-violet", low: "tag-emerald" };
  const pLabel: Record<string, string> = { critical: T.priority_critical, high: T.priority_high, medium: T.priority_medium, low: T.priority_low };
  const sColor: Record<string, string> = { done: "tag-emerald", review: "tag-amber", inprogress: "tag-blue", open: "tag-violet" };
  const sLabel: Record<string, string> = { open: T.task_col1, inprogress: T.task_col2, review: T.task_col3, done: T.task_col4 };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="section-label mb-2">{T.task_section}</div>
          <h2 className="font-montserrat text-3xl font-bold">{T.task_title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex glass-card rounded-xl p-1">
            <button onClick={() => setView("board")} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${view === "board" ? "bg-blue-500/20 text-blue-400" : "text-muted-foreground"}`}><Icon name="LayoutGrid" size={14} /></button>
            <button onClick={() => setView("list")} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${view === "list" ? "bg-blue-500/20 text-blue-400" : "text-muted-foreground"}`}><Icon name="List" size={14} /></button>
          </div>
          <button className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"><Icon name="Plus" size={16} />{T.task_new}</button>
        </div>
      </div>
      {view === "board" ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cols.map(col => (
            <div key={col.key} className="glass-card rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">{col.label}</span>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-muted-foreground">{TASKS_DATA.filter(tt => tt.statusKey === col.key).length}</span>
              </div>
              <div className="space-y-3">
                {TASKS_DATA.filter(tt => tt.statusKey === col.key).map(task => (
                  <div key={task.id} className="glass-card glass-card-hover rounded-xl p-3 cursor-pointer">
                    <div className="text-sm font-medium leading-snug mb-2">{task.title}</div>
                    <div className="mb-2"><span className={`tag ${pColor[task.priorityKey]}`}>{pLabel[task.priorityKey]}</span></div>
                    <div className="text-xs text-muted-foreground mb-2">{task.project}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Icon name="Clock" size={10} />{task.due}</div>
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
                {[T.task_th_task, T.task_th_project, T.task_th_assignee, T.task_th_priority, T.task_th_status, T.task_th_due].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TASKS_DATA.map((task, i) => (
                <tr key={task.id} className={`border-b border-border/50 hover:bg-white/3 transition-colors cursor-pointer ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                  <td className="px-5 py-3.5 font-medium text-sm">{task.title}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{task.project}</td>
                  <td className="px-5 py-3.5 text-sm">{task.assignee || <span className="text-muted-foreground italic">{T.task_unassigned}</span>}</td>
                  <td className="px-5 py-3.5"><span className={`tag ${pColor[task.priorityKey]}`}>{pLabel[task.priorityKey]}</span></td>
                  <td className="px-5 py-3.5"><span className={`tag ${sColor[task.statusKey]}`}>{sLabel[task.statusKey]}</span></td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{task.due}</td>
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
  { month: "Янв", revenue: 1200000 }, { month: "Фев", revenue: 1850000 },
  { month: "Мар", revenue: 2100000 }, { month: "Апр", revenue: 1750000 },
  { month: "Май", revenue: 2900000 },
];
const MAX_REVENUE = Math.max(...REPORTS_DATA.map(d => d.revenue));

function ReportsSection({ lang }: { lang: Lang }) {
  const T = t[lang];
  const kpis = [
    { label: T.rep_kpi1, value: "9.8M ₽", delta: "+24%", up: true, icon: "DollarSign" },
    { label: T.rep_kpi2, value: "98", delta: "+12", up: true, icon: "FolderKanban" },
    { label: T.rep_kpi3, value: "714", delta: "+8%", up: true, icon: "CheckSquare" },
    { label: T.rep_kpi4, value: "4.87", delta: "-0.02", up: false, icon: "Star" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div><div className="section-label mb-2">{T.rep_section}</div><h2 className="font-montserrat text-3xl font-bold">{T.rep_title}</h2></div>
        <div className="flex gap-3">
          <button className="btn-ghost px-4 py-2 rounded-xl text-sm flex items-center gap-2"><Icon name="Download" size={14} />{T.rep_export}</button>
          <button className="btn-primary px-4 py-2 rounded-xl text-sm flex items-center gap-2"><Icon name="RefreshCw" size={14} />{T.rep_refresh}</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {kpis.map((k, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{k.label}</span>
              <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center"><Icon name={k.icon} size={14} className="text-blue-400" fallback="Circle" /></div>
            </div>
            <div className="font-montserrat text-2xl font-bold mb-1">{k.value}</div>
            <div className={`text-xs flex items-center gap-1 ${k.up ? "text-emerald-400" : "text-red-400"}`}>
              <Icon name={k.up ? "TrendingUp" : "TrendingDown"} size={10} fallback="Circle" />{k.delta} {T.rep_prev}
            </div>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-montserrat font-semibold">{T.rep_chart_title}</h3>
          <div className="flex gap-2">{["3", "6", "12"].map((p, i) => <button key={p} className={`px-3 py-1 rounded-lg text-xs transition-all ${i === 2 ? "bg-blue-500/20 text-blue-400" : "text-muted-foreground hover:text-foreground"}`}>{p} мес</button>)}</div>
        </div>
        <div className="flex items-end gap-3 h-48">
          {REPORTS_DATA.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">{(d.revenue / 1000000).toFixed(1)}M</span>
              <div className="w-full rounded-t-lg relative overflow-hidden cursor-pointer group transition-all duration-300" style={{ height: `${(d.revenue / MAX_REVENUE) * 160}px`, background: "linear-gradient(180deg, hsl(217,91%,60%) 0%, hsl(160,84%,39%) 100%)" }}>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
              </div>
              <span className="text-xs text-muted-foreground">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-montserrat font-semibold">{T.rep_list_title}</h3>
          <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">{T.rep_all}</button>
        </div>
        {[
          { name: "Ежемесячный отчёт — Апрель 2025", project: "FinTrack Pro", date: "01.05.2025", statusKey: "confirmed", size: "2.4 MB" },
          { name: "Отчёт о прогрессе — Q1 2025", project: "MedSync", date: "01.04.2025", statusKey: "review", size: "5.1 MB" },
          { name: "Финансовый отчёт — Март 2025", project: "EcoMarket", date: "15.03.2025", statusKey: "confirmed", size: "1.8 MB" },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4 border-b border-border/50 hover:bg-white/3 transition-colors cursor-pointer">
            <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center shrink-0"><Icon name="FileText" size={16} className="text-blue-400" /></div>
            <div className="flex-1"><div className="text-sm font-medium">{r.name}</div><div className="text-xs text-muted-foreground">{r.project} · {r.date}</div></div>
            <span className={`tag ${r.statusKey === "confirmed" ? "tag-emerald" : "tag-amber"}`}>{r.statusKey === "confirmed" ? T.rep_status_confirmed : T.rep_status_review}</span>
            <span className="text-xs text-muted-foreground">{r.size}</span>
            <button className="glass-card p-2 rounded-lg hover:bg-white/5 transition-colors"><Icon name="Download" size={14} className="text-muted-foreground" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRANSACTIONS = [
  { id: "TXN-001", project: "FinTrack Pro", typeKey: "escrow", amount: 450000, statusKey: "done", from: "АО Иванов", to: "Team Alpha" },
  { id: "TXN-002", project: "MedSync", typeKey: "investment", amount: 2000000, statusKey: "processing", from: "Соколова М.А.", to: "MedSync LLC" },
  { id: "TXN-003", project: "EcoMarket", typeKey: "payout", amount: 180000, statusKey: "done", from: "EcoMarket", to: "Анна Лебедева" },
  { id: "TXN-004", project: "LogiRoute", typeKey: "escrow", amount: 750000, statusKey: "frozen", from: "ООО ТрансГруз", to: "DevTeam Pro" },
  { id: "TXN-005", project: "EdNext", typeKey: "payout", amount: 95000, statusKey: "done", from: "EdNext", to: "Светлана Ким" },
];

function PaymentsSection({ lang }: { lang: Lang }) {
  const T = t[lang];
  const typeLabel: Record<string, string> = {
    escrow: lang === "ru" ? "Эскроу" : lang === "en" ? "Escrow" : lang === "es" ? "Escrow" : lang === "fr" ? "Séquestre" : lang === "zh" ? "托管" : lang === "ja" ? "エスクロー" : "एस्क्रो",
    investment: lang === "ru" ? "Инвестиция" : lang === "en" ? "Investment" : lang === "es" ? "Inversión" : lang === "fr" ? "Investissement" : lang === "zh" ? "投资" : lang === "ja" ? "投資" : "निवेश",
    payout: lang === "ru" ? "Выплата" : lang === "en" ? "Payout" : lang === "es" ? "Pago" : lang === "fr" ? "Paiement" : lang === "zh" ? "付款" : lang === "ja" ? "支払い" : "भुगतान",
  };
  const sColor: Record<string, string> = { done: "tag-emerald", processing: "tag-blue", frozen: "tag-amber" };
  const sLabel: Record<string, string> = { done: T.pay_status_done, processing: T.pay_status_processing, frozen: T.pay_status_frozen };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-8">
        <div><div className="section-label mb-2">{T.pay_section}</div><h2 className="font-montserrat text-3xl font-bold">{T.pay_title}</h2></div>
        <button className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"><Icon name="Plus" size={16} />{T.pay_new}</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-2xl p-6 relative overflow-hidden animate-fade-in-up" style={{ background: "linear-gradient(135deg, hsl(217,91%,40%) 0%, hsl(217,91%,25%) 100%)", opacity: 0 }}>
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 80% 20%, white, transparent 60%)" }} />
          <div className="text-sm text-blue-200 mb-2">{T.pay_acc_main}</div>
          <div className="font-montserrat text-3xl font-bold text-white mb-1">3 480 000 ₽</div>
          <div className="text-xs text-blue-200">{T.pay_acc_available}</div>
        </div>
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
          <div className="text-sm text-muted-foreground mb-2">{T.pay_acc_escrow}</div>
          <div className="font-montserrat text-3xl font-bold mb-1">1 200 000 ₽</div>
          <div className="text-xs text-muted-foreground">{T.pay_acc_frozen}</div>
        </div>
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-200" style={{ opacity: 0 }}>
          <div className="text-sm text-muted-foreground mb-2">{T.pay_acc_turnover}</div>
          <div className="font-montserrat text-3xl font-bold gradient-text mb-1">2 900 000 ₽</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1"><Icon name="TrendingUp" size={10} />{T.pay_prev_month}</div>
        </div>
      </div>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-montserrat font-semibold">{T.pay_history}</h3>
          <div className="flex gap-2">
            <button className="glass-card px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"><Icon name="Filter" size={12} />{T.pay_filter}</button>
            <button className="glass-card px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"><Icon name="Download" size={12} />{T.pay_export}</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border/50">
                {[T.pay_th_id, T.pay_th_project, T.pay_th_type, T.pay_th_from, T.pay_th_to, T.pay_th_amount, T.pay_th_status].map(h => (
                  <th key={h} className={`${h === T.pay_th_amount ? "text-right" : h === T.pay_th_status ? "text-center" : "text-left"} px-5 py-3 text-xs text-muted-foreground font-semibold uppercase`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRANSACTIONS.map(tx => (
                <tr key={tx.id} className="border-b border-border/30 hover:bg-white/3 transition-colors cursor-pointer">
                  <td className="px-5 py-4 text-xs font-mono text-muted-foreground">{tx.id}</td>
                  <td className="px-5 py-4 text-sm font-medium">{tx.project}</td>
                  <td className="px-5 py-4"><span className="tag tag-blue">{typeLabel[tx.typeKey]}</span></td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{tx.from}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{tx.to}</td>
                  <td className="px-5 py-4 text-right font-montserrat font-semibold">{tx.amount.toLocaleString("ru")} ₽</td>
                  <td className="px-5 py-4 text-center"><span className={`tag ${sColor[tx.statusKey]}`}>{sLabel[tx.statusKey]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const PORTFOLIO_ITEMS_DEFAULT = [
  { title: "CRM-система для ритейла", category: "Fintech", year: "2024", result: "Сократил время обработки заказов на 40%" },
  { title: "Мобильное приложение доставки", category: "Logistics", year: "2023", result: "100K+ активных пользователей" },
];

function CVPanel({ lang }: { lang: Lang }) {
  const T = t[lang];
  return (
    <div className="mt-4 border-t border-border/50 pt-4 space-y-4 animate-fade-in-up" style={{ opacity: 0 }}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">{T.cv_position}</label>
          <input className="w-full glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent" placeholder={T.cv_position_ph} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">{T.cv_experience}</label>
          <select className="w-full glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-background text-foreground">
            <option>{T.cv_exp1}</option><option>{T.cv_exp2}</option><option>{T.cv_exp3}</option><option>{T.cv_exp4}</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs text-muted-foreground mb-1.5 block">{T.cv_skills}</label>
        <input className="w-full glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent" placeholder={T.cv_skills_ph} />
      </div>
      <div>
        <label className="text-xs text-muted-foreground mb-1.5 block">{T.cv_about}</label>
        <textarea className="w-full glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent resize-none h-20" placeholder={T.cv_about_ph} />
      </div>
      <div className="glass-card rounded-xl px-4 py-3 border border-dashed border-border flex items-center gap-3 cursor-pointer hover:border-blue-500/40 transition-colors">
        <Icon name="Upload" size={16} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{T.cv_upload}</span>
        <span className="tag tag-blue ml-auto">{T.cv_upload_limit}</span>
      </div>
      <div className="flex justify-end">
        <button className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold">{T.cv_save}</button>
      </div>
    </div>
  );
}

function PortfolioPanel({ lang }: { lang: Lang }) {
  const T = t[lang];
  const [items, setItems] = useState(PORTFOLIO_ITEMS_DEFAULT);
  return (
    <div className="mt-4 border-t border-border/50 pt-4 space-y-4 animate-fade-in-up" style={{ opacity: 0 }}>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="glass-card rounded-xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0"><Icon name="FolderOpen" size={16} className="text-blue-400" /></div>
            <div className="flex-1">
              <div className="font-semibold text-sm mb-0.5">{item.title}</div>
              <div className="flex items-center gap-2 mb-1"><span className="tag tag-violet">{item.category}</span><span className="text-xs text-muted-foreground">{item.year}</span></div>
              <div className="text-xs text-emerald-400 flex items-center gap-1"><Icon name="TrendingUp" size={10} />{item.result}</div>
            </div>
            <button onClick={() => setItems(items.filter((_, j) => j !== i))} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"><Icon name="Trash2" size={13} className="text-muted-foreground" /></button>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-xl p-4 border border-dashed border-border space-y-3">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{T.pf_add_title}</div>
        <div className="grid md:grid-cols-2 gap-3">
          <input className="glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent" placeholder={T.pf_name_ph} />
          <input className="glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent" placeholder={T.pf_result_ph} />
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <input className="glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent" placeholder={T.pf_link_ph} />
          <input className="glass-card rounded-xl px-4 py-2.5 text-sm outline-none border border-border focus:border-blue-500/50 transition-colors bg-transparent" placeholder={T.pf_year_ph} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{items.length} / 10 {T.pf_count}</span>
          <button className="btn-primary px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"><Icon name="Plus" size={14} />{T.pf_add_btn}</button>
        </div>
      </div>
    </div>
  );
}

function buildVerifSteps(T: typeof t["ru"]) {
  return [
    { id: 1, title: T.verif_step1_title, desc: T.verif_step1_desc, status: "done", icon: "Mail" },
    { id: 2, title: T.verif_step2_title, desc: T.verif_step2_desc, status: "done", icon: "User" },
    { id: 3, title: T.verif_step3_title, desc: T.verif_step3_desc, status: "done", icon: "CreditCard" },
    { id: 4, title: T.verif_step4_title, desc: T.verif_step4_desc, status: "pending", icon: "Camera" },
    { id: 5, title: T.verif_step5_title, desc: T.verif_step5_desc, status: "pending", icon: "FileText" },
    { id: 6, title: T.verif_step6_title, desc: T.verif_step6_desc, status: "pending", icon: "Briefcase" },
    { id: 7, title: T.verif_step7_title, desc: T.verif_step7_desc, status: "locked", icon: "Receipt" },
    { id: 8, title: T.verif_step8_title, desc: T.verif_step8_desc, status: "locked", icon: "Building2" },
  ];
}

function VerificationSection({ lang }: { lang: Lang }) {
  const T = t[lang];
  const steps = buildVerifSteps(T);
  const done = steps.filter(s => s.status === "done").length;
  const pct = Math.round((done / steps.length) * 100);
  const [expanded, setExpanded] = useState<number | null>(null);
  const toggle = (id: number, status: string) => { if (status === "locked") return; setExpanded(prev => prev === id ? null : id); };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="section-label mb-2">{T.verif_section}</div>
        <h2 className="font-montserrat text-3xl font-bold">{T.verif_title}</h2>
        <p className="text-muted-foreground mt-2">{T.verif_desc}</p>
      </div>
      <div className="glass-card rounded-2xl p-6 mb-6 animate-fade-in-up" style={{ opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">{T.verif_progress}</span>
          <span className="font-montserrat font-bold gradient-text">{pct}%</span>
        </div>
        <div className="progress-bar h-2 mb-4"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div><div className="font-montserrat font-bold text-emerald-400 text-lg">{done}</div><div className="text-xs text-muted-foreground">{T.verif_done}</div></div>
          <div><div className="font-montserrat font-bold text-amber-400 text-lg">{steps.filter(s => s.status === "pending").length}</div><div className="text-xs text-muted-foreground">{T.verif_pending}</div></div>
          <div><div className="font-montserrat font-bold text-muted-foreground text-lg">{steps.filter(s => s.status === "locked").length}</div><div className="text-xs text-muted-foreground">{T.verif_locked}</div></div>
        </div>
      </div>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s.id} className={`glass-card rounded-2xl transition-all duration-300 animate-fade-in-up ${s.status === "locked" ? "opacity-40" : "cursor-pointer"} ${expanded === s.id ? "border border-blue-500/25" : ""}`} style={{ animationDelay: `${i * 70}ms`, opacity: 0 }} onClick={() => toggle(s.id, s.status)}>
            <div className="p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.status === "done" ? "bg-emerald-500/20" : s.status === "pending" ? "bg-blue-500/20" : "bg-white/5"}`}>
                {s.status === "done" ? <Icon name="CheckCircle" size={22} className="text-emerald-400" /> : s.status === "pending" ? <Icon name={s.icon} size={22} className="text-blue-400" fallback="Circle" /> : <Icon name="Lock" size={22} className="text-muted-foreground" />}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm mb-0.5">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.desc}</div>
              </div>
              <div className="flex items-center gap-2">
                {s.status === "done" && <span className="tag tag-emerald">{T.verif_done}</span>}
                {s.status === "pending" && <span className="tag tag-amber">{T.verif_btn_fill}</span>}
                {s.status === "locked" && <Icon name="Lock" size={16} className="text-muted-foreground" />}
                {s.status !== "locked" && <Icon name={expanded === s.id ? "ChevronUp" : "ChevronDown"} size={16} className="text-muted-foreground" />}
              </div>
            </div>
            {expanded === s.id && s.id === 5 && <div className="px-5 pb-5"><CVPanel lang={lang} /></div>}
            {expanded === s.id && s.id === 6 && <div className="px-5 pb-5"><PortfolioPanel lang={lang} /></div>}
            {expanded === s.id && s.id !== 5 && s.id !== 6 && (
              <div className="px-5 pb-5">
                <div className="border-t border-border/50 pt-4 animate-fade-in-up" style={{ opacity: 0 }}>
                  <p className="text-sm text-muted-foreground mb-3">{T.verif_default_step}</p>
                  <button className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold">{T.verif_default_btn}</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 glass-card rounded-2xl p-5 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "600ms", opacity: 0 }}>
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0"><Icon name="Shield" size={22} className="text-blue-400" /></div>
        <div className="flex-1">
          <div className="font-semibold text-sm mb-0.5">{T.verif_shield_title}</div>
          <div className="text-xs text-muted-foreground">{T.verif_shield_desc}</div>
        </div>
        <div className="flex gap-2 flex-wrap"><span className="tag tag-emerald">AES-256</span><span className="tag tag-blue">GDPR</span></div>
      </div>
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
  const T = t[lang];

  const NAV_SECTIONS: { id: Section; labelKey: keyof typeof T }[] = [
    { id: "home", labelKey: "nav_home" }, { id: "projects", labelKey: "nav_projects" },
    { id: "tasks", labelKey: "nav_tasks" }, { id: "reports", labelKey: "nav_reports" },
    { id: "payments", labelKey: "nav_payments" }, { id: "verification", labelKey: "nav_verification" },
  ];

  const renderSection = () => {
    const props = { lang };
    switch (activeSection) {
      case "home": return <HomeSection {...props} />;
      case "projects": return <ProjectsSection {...props} />;
      case "tasks": return <TasksSection {...props} />;
      case "reports": return <ReportsSection {...props} />;
      case "payments": return <PaymentsSection {...props} />;
      case "verification": return <VerificationSection {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50" style={{ background: "rgba(10,11,18,0.85)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setActiveSection("home")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center animate-pulse-glow" style={{ background: "linear-gradient(135deg, hsl(217,91%,55%), hsl(160,84%,40%))" }}>
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-lg tracking-tight"><span className="gradient-text">Flu</span>ence</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_SECTIONS.map(item => (
              <button key={item.id} onClick={() => setActiveSection(item.id)} className={`nav-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.id ? "active bg-blue-500/10" : "hover:bg-white/5"}`}>
                <Icon name={NAV_ICONS[item.id]} size={15} fallback="Circle" />
                {T[item.labelKey] as string}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button className="relative w-9 h-9 glass-card rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors">
              <Icon name="Bell" size={16} className="text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-400"></span>
            </button>
            <div className="flex items-center gap-2.5 glass-card px-3 py-2 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">АМ</div>
              <div className="text-sm">
                <div className="font-medium leading-none mb-0.5">Алексей М.</div>
                <div className="text-xs text-muted-foreground">{lang === "ru" ? "Инвестор" : lang === "en" ? "Investor" : lang === "es" ? "Inversor" : lang === "fr" ? "Investisseur" : lang === "zh" ? "投资人" : lang === "ja" ? "投資家" : "निवेशक"}</div>
              </div>
              <Icon name="ChevronDown" size={14} className="text-muted-foreground" />
            </div>
          </div>

          <button className="md:hidden glass-card p-2 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 px-4 py-3">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {NAV_SECTIONS.map(item => (
                <button key={item.id} onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }} className={`flex flex-col items-center gap-1 py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${activeSection === item.id ? "bg-blue-500/15 text-blue-400" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}>
                  <Icon name={NAV_ICONS[item.id]} size={18} fallback="Circle" />
                  {T[item.labelKey] as string}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <LangSwitcher lang={lang} setLang={setLang} />
            </div>
          </div>
        )}
      </header>

      <main className="animate-fade-in" key={`${activeSection}-${lang}`}>
        {renderSection()}
      </main>

      <footer className="border-t border-border/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(217,91%,55%), hsl(160,84%,40%))" }}><Icon name="Zap" size={12} className="text-white" /></div>
            <span className="font-montserrat font-bold text-sm gradient-text">Fluence</span>
            <span className="text-xs text-muted-foreground ml-2">{T.footer_rights}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{T.footer_terms}</a>
            <a href="#" className="hover:text-foreground transition-colors">{T.footer_privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors">{T.footer_support}</a>
          </div>
          <div className="flex gap-2">
            <button className="glass-card w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors"><Icon name="MessageCircle" size={14} className="text-muted-foreground" /></button>
            <button className="glass-card w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors"><Icon name="Github" size={14} className="text-muted-foreground" /></button>
          </div>
        </div>
      </footer>
    </div>
  );
}
