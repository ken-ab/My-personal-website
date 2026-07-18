import type { LocalizedText } from "../i18n/LanguageContext";
import olympicModelFrameworkCard from "../assets/publication-cards/olympic-model-framework-card.webp";
import moeTimelineCard from "../assets/publication-cards/moe-timeline-card.webp";
import bambooConnectionsFigure from "../assets/case-studies/bamboo-connections-framework.png";
import robotVisionFigure from "../assets/case-studies/robot-vision-detection.png";
import briDigitalEconomyFigure from "../assets/case-studies/bri-digital-economy.png";

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
  homepageCitation?:
    | { kind: "journal"; journal: string; year: string; volume: string; article: string }
    | { kind: "conference"; name: string };
  summary: LocalizedText;
  result: LocalizedText;
  homeVisual?: {
    src: string;
    alt: LocalizedText;
    width: number;
    height: number;
  };
  paperUrl?: string;
};

export const routerBenchMini: ResearchProjectCaseStudy = {
  kind: "research-project",
  id: "routerbench-mini",
  title: { en: "RouterBench-Mini", zh: "RouterBench-Mini" },
  status: [{ en: "Recent Research", zh: "近期研究" }],
  summary: {
    en: "A controlled study of when a lower-cost multimodal model is sufficient and when routing to a stronger model is worth the additional cost and latency.",
    zh: "一项受控实验，研究低成本多模态模型何时已经足够，以及何时值得为更强模型付出额外的调用成本与延迟。",
  },
  question: {
    en: "Can a multimodal agent determine when a lower-cost model is sufficient and when a stronger model provides enough additional value to justify its higher cost and latency?",
    zh: "在文本、视觉和工具调用任务中，多模态智能体能否判断低成本模型何时已经足够，以及强模型带来的额外质量提升是否值得更高的调用成本和延迟？",
  },
  methods: [
    {
      en: "Compared Always Cheap, Always Strong, Task-Aware, Learned Router, and Reflection under shared prompts, scoring, and API cost accounting.",
      zh: "在统一提示、评分与 API 成本核算下，比较 Always Cheap、Always Strong、Task-Aware、Learned Router 与 Reflection。",
    },
    {
      en: "Used 300 original development tasks and set A for method and feature comparison, then froze the selected recipe before opening set B.",
      zh: "使用原始 300 道开发题和 A 组进行方法与特征比较，并在查看 B 组前冻结最终方案。",
    },
    {
      en: "Reserved set B as the untouched 150-task confirmation set for the final frozen method recipe.",
      zh: "将 B 组保留为 150 道完全未参与选择的最终确认集，用于评估冻结后的方法方案。",
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

export const routerBenchV4Routes = [
  { method: "Always Cheap", accuracy: "78.67%", latency: "1,178 ms", averageCost: "0.00023762" },
  { method: "Always Strong", accuracy: "83.33%", latency: "2,619 ms", averageCost: "0.00064448" },
  { method: "Handcrafted Task-Aware", accuracy: "82.67%", latency: "1,767 ms", averageCost: "0.00050139", featured: true },
  { method: "Learned Cost-Aware", accuracy: "80.00%", latency: "2,391 ms", averageCost: "0.00043693" },
  { method: "Calibrated Reflection", accuracy: "80.00%", latency: "2,202 ms", averageCost: "0.00047537" },
] as const;

export const selectedPublications: PublicationSummary[] = [
  {
    id: "olympic",
    briefId: "olympic-prediction",
    canonicalTitle:
      "Predicting Olympic Medal Performance for 2028: Machine Learning Models and the Impact of Host and Coaching Effects",
    titleZh: "2028年奥运奖牌表现预测：机器学习模型及东道主与教练效应",
    publicationType: { en: "First-Author Machine Learning Research", zh: "第一作者 · 机器学习研究" },
    authorRole: { en: "First Author", zh: "第一作者" },
    venue: "Applied Sciences 15(14), 7793 (2025)",
    homepageCitation: { kind: "journal", journal: "Appl. Sci.", year: "2025", volume: "15", article: "7793" },
    summary: {
      en: "A complete applied-ML workflow spanning historical data preparation, country grouping, forecasting, model comparison, and effect quantification.",
      zh: "一项完整的应用机器学习研究，覆盖历史数据处理、国家分组、预测、模型比较与效应量化。",
    },
    result: {
      en: "XGBoost selected for medal forecasting · FCNN test accuracy 85.5%",
      zh: "40多万条奥赛记录 · 2个模型和2个有趣效应",
    },
    homeVisual: {
      src: olympicModelFrameworkCard,
      alt: {
        en: "Research framework for the Olympic medal prediction models and effect analysis.",
        zh: "奥运奖牌预测模型与效应分析研究框架。",
      },
      width: 989,
      height: 760,
    },
    paperUrl: "https://doi.org/10.3390/app15147793",
  },
  {
    id: "moe",
    briefId: "moe",
    canonicalTitle: "Exploring and Enhancing Advanced MoE Models: From Deepspeed-MoE to DeepSeek-V3",
    titleZh: "MoE模型的探索与增强：从 Deepspeed-MoE 到 DeepSeek-V3",
    publicationType: { en: "First-Author Review · Efficient AI", zh: "第一作者综述 · 高效 AI" },
    authorRole: { en: "First Author · Review", zh: "第一作者 · 综述" },
    venue: "IEEE AINIT 2025",
    homepageCitation: { kind: "conference", name: "AINIT 2025" },
    summary: {
      en: "A structured review of sparse expert routing, architecture evolution, and performance-efficiency mechanisms in modern MoE systems.",
      zh: "围绕现代 MoE 系统的稀疏专家路由、架构演进与性能—效率机制展开的体系化综述。",
    },
    result: {
      en: "Seven representative architectures · five benchmark families",
      zh: "7 类代表架构 · 5 类基准任务",
    },
    homeVisual: {
      src: moeTimelineCard,
      alt: {
        en: "Timeline of representative MoE architectures across language, vision, multimodal, and recommendation systems.",
        zh: "语言、视觉、多模态与推荐系统中代表性 MoE 架构的演进时间线。",
      },
      width: 1280,
      height: 730,
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
    titleZh: "基于机器学习的薄壁钢—竹连接件机械性能的预测",
    publicationType: { en: "Machine Learning for Structural Connections", zh: "结构连接机器学习研究" },
    authorRole: { en: "Third Author", zh: "第三作者" },
    venue: "Sustainability 17(15), 6753 (2025)",
    summary: {
      en: "Factor analysis, eight-model comparison, and Bayesian optimization turn 249 measurements from 51 specimens into a connection-selection workflow.",
      zh: "以因子分析、八模型比较和贝叶斯优化，将 51 个试件的 249 组测量转化为连接类型选择流程。",
    },
    result: { en: "RF ≈61% → BO-optimized RF ≈67%", zh: "RF 约 61% → BO 优化后约 67%" },
    homeVisual: {
      src: bambooConnectionsFigure,
      alt: { en: "Research workflow for thin-walled steel and bamboo connection prediction.", zh: "薄壁钢—竹连接行为预测研究流程图。" },
      width: 2180,
      height: 1501,
    },
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
    homeVisual: {
      src: robotVisionFigure,
      alt: { en: "Robot-vision object detection in an urban street scene.", zh: "城市道路场景中的机器人视觉目标检测。" },
      width: 980,
      height: 651,
    },
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
    homeVisual: {
      src: briDigitalEconomyFigure,
      alt: { en: "Belt and Road digital economy framework.", zh: "一带一路数字经济框架图。" },
      width: 680,
      height: 374,
    },
    paperUrl:
      "https://www.researchgate.net/publication/394217388_Enhancing_Export_Potential_of_Digital_Service_Trade_in_BRI_Countries_A_Stochastic_Frontier_Gravity_Model_Analysis_of_Digital_Economy_Development_and_Mediation_Pathways",
  },
];

export const homepageEngineering = [
  {
    id: "finance-agent",
    title: { en: "MCP-Based A-share Intelligent Analysis System", zh: "基于 MCP 协议的 A 股智能分析系统" },
    summary: { en: "Multi-agent A-share research and reporting system", zh: "多 Agent 协作的 A 股研究与报告系统" },
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
    title: { en: "Lao Wang", zh: "老王运动打卡" },
    summary: { en: "Deployed exercise and health check-in mini program", zh: "用 AI 辅助独立开发的小程序" },
    evidence: { en: "872 cumulative users · 200+ daily active users", zh: "累计用户 872 · 日活用户 200+" },
    href: "/brief/laowang-checkin",
  },
];

export const experienceHighlights = [
  {
    title: { en: "National Supercomputing Center in Wuxi", zh: "国家超级计算无锡中心" },
    evidence: { en: "Algorithm Engineer Intern · 230K records", zh: "算法工程师实习生" },
  },
  {
    title: { en: "MCM/ICM 2026", zh: "MCM/ICM 2026" },
    evidence: { en: "Meritorious Winner", zh: "M 奖" },
  },
];
