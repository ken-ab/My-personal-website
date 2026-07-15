import type { LocalizedText } from "../i18n/LanguageContext";

export type ResearchProjectCaseStudy = {
  kind: "research-project";
  id: string;
  title: LocalizedText;
  status: LocalizedText[];
  summary: LocalizedText;
  question: LocalizedText;
  methods: LocalizedText[];
  results: LocalizedText[];
  limitations: LocalizedText[];
};

export type PublicationSummary = {
  id: string;
  briefId: string;
  canonicalTitle: string;
  titleZh: string;
  publicationType: LocalizedText;
  authorRole: LocalizedText;
  venue: string;
  summary: LocalizedText;
  result: LocalizedText;
  paperUrl?: string;
};

export const routerBenchMini: ResearchProjectCaseStudy = {
  kind: "research-project",
  id: "routerbench-mini",
  title: { en: "RouterBench-Mini", zh: "RouterBench-Mini" },
  status: [{ en: "Recent Research", zh: "近期研究" }],
  summary: {
    en: "A cost-aware multimodal routing study that asks when a cheaper model is sufficient—and when a stronger model is worth the extra cost and latency.",
    zh: "一项成本感知的多模态模型路由研究：判断何时较低成本模型已经足够，何时应为更强模型支付额外的成本与延迟。",
  },
  question: {
    en: "Can a frozen task-aware policy preserve most of an always-strong model's accuracy while reducing calling cost and observed latency across text, vision, and tool-use tasks?",
    zh: "在文本、视觉与工具调用任务中，固定的任务感知策略能否在保留 Always Strong 大部分准确率的同时，降低调用成本与观测延迟？",
  },
  methods: [
    {
      en: "Sampled 600 tasks across text, vision, and tool-use settings, including development data and two non-overlapping 150-task held-out batches.",
      zh: "在文本、视觉和工具调用场景中采样 600 道任务，包含开发集以及两批互不重叠、各 150 题的 held-out 评测。",
    },
    {
      en: "Iterated from V1 to V4 while keeping the final comparison disciplined: V3's batch informed later feature selection, whereas V4's B batch remained untouched until final confirmation.",
      zh: "从 V1 迭代至 V4，并严格区分评测用途：V3 的 A 组参与了后续特征方案选择，V4 的 B 组在最终确认前保持未触碰。",
    },
    {
      en: "Used the pooled 300 held-out tasks only to compare frozen baselines that did not change between V3 and V4.",
      zh: "合并后的 300 道 held-out 任务仅用于比较 V3 与 V4 之间未发生改变的冻结基线。",
    },
  ],
  results: [
    {
      en: "Across the two non-overlapping held-out batches, the frozen Task-Aware baseline stayed within 0.67 percentage points of Always Strong.",
      zh: "在两批无重叠 held-out 评测中，固定的 Task-Aware 基线仅比 Always Strong 低 0.67 个百分点。",
    },
    {
      en: "The same frozen comparison reduced calling cost by 22.5% and observed latency by 26.6%.",
      zh: "同一冻结基线比较中，调用成本降低 22.5%，观测延迟降低 26.6%。",
    },
  ],
  limitations: [
    {
      en: "The study is a compact experimental benchmark, not a formal publication or a claim of a new routing theory.",
      zh: "该项目是一项小型实验基准研究，不是正式发表论文，也不宣称提出了新的路由理论。",
    },
    {
      en: "The two held-out batches are non-overlapping, but they are not two fully independent confirmatory replications because the A batch informed later feature selection.",
      zh: "两批 held-out 评测互不重叠，但由于 A 组影响了后续特征选择，不能将其表述为两次完全独立的确认性复现。",
    },
    {
      en: "Observed latency reflects the tested runtime and should not be generalized to every provider, device, or deployment environment.",
      zh: "观测延迟来自当前测试运行环境，不能直接外推到所有模型供应商、设备或部署条件。",
    },
  ],
};

export const selectedPublications: PublicationSummary[] = [
  {
    id: "olympic",
    briefId: "olympic-prediction",
    canonicalTitle:
      "Predicting Olympic Medal Performance for 2028: Machine Learning Models and the Impact of Host and Coaching Effects",
    titleZh: "2028 年奥运奖牌表现预测：机器学习模型及东道主与教练效应",
    publicationType: { en: "First-Author Machine Learning Research", zh: "第一作者 · 机器学习研究" },
    authorRole: { en: "First Author", zh: "第一作者" },
    venue: "Applied Sciences 15(14), 7793 (2025)",
    summary: {
      en: "A complete applied-ML workflow spanning historical data preparation, country grouping, forecasting, model comparison, and effect quantification.",
      zh: "一项完整的应用机器学习研究，覆盖历史数据处理、国家分组、预测、模型比较与效应量化。",
    },
    result: {
      en: "XGBoost selected for medal forecasting · FCNN test accuracy 85.5%",
      zh: "奖牌预测选择 XGBoost · FCNN 测试准确率 85.5%",
    },
    paperUrl: "https://doi.org/10.3390/app15147793",
  },
  {
    id: "moe",
    briefId: "moe",
    canonicalTitle: "Exploring and Enhancing Advanced MoE Models: From Deepspeed-MoE to DeepSeek-V3",
    titleZh: "先进 MoE 模型的探索与增强：从 Deepspeed-MoE 到 DeepSeek-V3",
    publicationType: { en: "First-Author Review · Efficient AI", zh: "第一作者综述 · 高效 AI" },
    authorRole: { en: "First Author · Review", zh: "第一作者 · 综述" },
    venue: "IEEE AINIT 2025",
    summary: {
      en: "A structured review of sparse expert routing, architecture evolution, and performance-efficiency mechanisms in modern MoE systems.",
      zh: "围绕现代 MoE 系统的稀疏专家路由、架构演进与性能—效率机制展开的体系化综述。",
    },
    result: {
      en: "Seven representative architectures · five benchmark families",
      zh: "7 类代表架构 · 5 类基准任务",
    },
    paperUrl: "https://doi.org/10.1109/AINIT65432.2025.11035928",
  },
];

export const additionalPublications: PublicationSummary[] = [
  {
    id: "bamboo",
    briefId: "sustainability-bamboo",
    canonicalTitle:
      "Behavior Prediction of Connections in Eco-Designed Thin-Walled Steel–Ply–Bamboo Structures Based on Machine Learning for Mechanical Properties",
    titleZh: "基于机械性能机器学习的生态设计薄壁钢—竹连接行为预测",
    publicationType: { en: "Machine Learning for Structural Connections", zh: "结构连接机器学习研究" },
    authorRole: { en: "Third Author", zh: "第三作者" },
    venue: "Sustainability 17(15), 6753 (2025)",
    summary: {
      en: "Factor analysis, eight-model comparison, and Bayesian optimization turn 249 measurements from 51 specimens into a connection-selection workflow.",
      zh: "以因子分析、八模型比较和贝叶斯优化，将 51 个试件的 249 组测量转化为连接类型选择流程。",
    },
    result: { en: "RF ≈61% → BO-optimized RF ≈67%", zh: "RF 约 61% → BO 优化后约 67%" },
    paperUrl: "https://doi.org/10.3390/su17156753",
  },
  {
    id: "robot",
    briefId: "robot-vision",
    canonicalTitle:
      "Research Progress on the Integration of Robot Vision, Computer Vision and Machine Learning: Technological Evolution, Challenges and Industrial Applications",
    titleZh: "机器人视觉、计算机视觉与机器学习融合研究进展：技术演进、挑战与工业应用",
    publicationType: { en: "Robot Vision Review", zh: "机器人视觉综述" },
    authorRole: { en: "Second Author", zh: "第二作者" },
    venue: "International Journal of Current Research in Science, Engineering & Technology (2025)",
    summary: {
      en: "A review connecting vision architectures, perception tasks, deployment challenges, and industrial robotics applications.",
      zh: "连接视觉架构、感知任务、部署挑战与工业机器人应用的综述研究。",
    },
    result: { en: "Architecture–task–challenge–industry taxonomy", zh: "架构—任务—挑战—产业分类框架" },
    paperUrl: "https://doi.org/10.30967/IJCRSET/Yujie-Gao/174",
  },
  {
    id: "digital",
    briefId: "deic-digital-trade",
    canonicalTitle:
      "Enhancing Export Potential of Digital Service Trade in BRI Countries: A Stochastic Frontier Gravity Model Analysis of Digital Economy Development and Mediation Pathways",
    titleZh: "提升“一带一路”国家数字服务贸易出口潜力：数字经济发展与中介路径的随机前沿引力模型分析",
    publicationType: { en: "Digital Economy & Trade Modeling", zh: "数字经济与贸易建模" },
    authorRole: { en: "Third Author", zh: "第三作者" },
    venue: "DEIC 2025",
    summary: {
      en: "A 36-country stochastic-frontier gravity analysis with mediation pathways and a forward-looking XGBoost–GA extension.",
      zh: "面向 36 个国家的随机前沿引力分析，并结合中介路径与 XGBoost–GA 前瞻预测扩展。",
    },
    result: { en: "36 BRI countries · two mediation pathways", zh: "36 个 BRI 国家 · 两条中介路径" },
    paperUrl:
      "https://www.researchgate.net/publication/394217388_Enhancing_Export_Potential_of_Digital_Service_Trade_in_BRI_Countries_A_Stochastic_Frontier_Gravity_Model_Analysis_of_Digital_Economy_Development_and_Mediation_Pathways",
  },
];

export const homepageEngineering = [
  {
    id: "finance-agent",
    title: "Finance-Agent",
    summary: { en: "Multi-agent A-share investment research system", zh: "多智能体 A 股研究与分析系统" },
    evidence: { en: "4 specialist agents · 8 MCP tool families", zh: "4 个专业 Agent · 8 类 MCP 工具" },
    href: "/brief/finance-agent",
  },
  {
    id: "energyquant",
    title: "EnergyQuant",
    summary: { en: "Enterprise pre-investment workflow system", zh: "企业投前工作流系统" },
    evidence: { en: "AI classification · RBAC · private deployment", zh: "AI 分类 · RBAC · 私有化部署" },
    href: "/engineering#energyquant",
  },
  {
    id: "laowang",
    title: "Lao Wang",
    summary: { en: "Deployed exercise and health check-in mini program", zh: "已上线的运动与健康打卡小程序" },
    evidence: { en: "872 cumulative users", zh: "累计用户 872" },
    href: "/brief/laowang-checkin",
  },
];

export const experienceHighlights = [
  {
    title: { en: "National Supercomputing Center in Wuxi", zh: "国家超级计算无锡中心" },
    evidence: { en: "Algorithm Engineer Intern · 230K records", zh: "算法工程师实习生 · 23 万条记录" },
  },
  {
    title: { en: "MCM/ICM 2026", zh: "MCM/ICM 2026" },
    evidence: { en: "Meritorious Winner", zh: "Meritorious Winner · M 奖" },
  },
];
