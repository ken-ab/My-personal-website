import bambooConnectionsCardFigure from "../assets/publication-cards/bamboo-connections-card.webp";
import briDigitalEconomyCardFigure from "../assets/publication-cards/bri-digital-economy-card.webp";
import moeTimelineCardFigure from "../assets/publication-cards/moe-timeline-card.webp";
import olympicHostEffectCardFigure from "../assets/publication-cards/olympic-host-effect-card.webp";
import olympicModelFrameworkCardFigure from "../assets/publication-cards/olympic-model-framework-card.webp";
import robotVisionCardFigure from "../assets/publication-cards/robot-vision-card.webp";
import qianfanChallengeScreenshot from "../assets/project-details/qianfan-challenge.png";
import qianfanHomeScreenshot from "../assets/project-details/qianfan-home.png";
import qianfanMiniProgramQr from "../assets/project-details/qianfan-mini-program-qr.png";
import qianfanProjectsScreenshot from "../assets/project-details/qianfan-projects.png";
import wangCheckinsCardScreenshot from "../assets/project-details/laowang-checkins-card.webp";
import wangCommunityCardScreenshot from "../assets/project-details/laowang-community-card.webp";
import wangHomeCardScreenshot from "../assets/project-details/laowang-home-card.webp";
import wangMiniProgramQr from "../assets/project-details/wang-mini-program-qr.png";
import mcmOverviewCard from "../assets/project-details/mcm-overview-card.webp";

export type Tone = "research" | "career" | "systems";

export type PortfolioLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  chineseTitle?: string;
  role?: string;
  type: string;
  description: string;
  tags: string[];
  highlights?: string[];
  actions?: PortfolioLink[];
  cardVisuals?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  timelineShowcase?: {
    kind: "competition-research";
    award: string;
    visual: { src: string; alt: string; width: number; height: number };
    facts: Array<{ value: string; label: string }>;
  };
  emphasis?: "featured" | "medium" | "compact";
  canonicalTitle?: string;
  titleZh?: string;
  abstractOriginal?: string;
  summaryZh?: string;
  displayTier?: "selected" | "additional";
  publicationType?: "research" | "review";
  authorRole?: string;
};

export type MiniProgramProjectShowcase = {
  kind: "mini-program";
  status: string;
  qrCode: string;
  screenshots: Array<{
    src: string;
    alt: string;
    label: string;
    width: number;
    height: number;
  }>;
  metrics: Array<{
    value: string;
    label: string;
    source?: string;
  }>;
  flow: string[];
};

export type AgentSystemProjectShowcase = {
  kind: "agent-system";
  status: string;
  query: string;
  agents: string[];
  toolFamilies: string[];
  facts: Array<{
    value: string;
    label: string;
  }>;
  reportSections: string[];
};

export type ProjectShowcase = MiniProgramProjectShowcase | AgentSystemProjectShowcase;

export type DevelopmentProject = TimelineEntry & {
  sections?: {
    problem: string;
    architecture: string;
    work: string;
    outcome: string;
  };
  showcase?: ProjectShowcase;
};

export const profile = {
  name: "Ken",
  chineseName: "张桢铠",
  headline: "Efficient GenAI · Multimodal Learning · Agentic AI Systems",
  location: "Nanjing / Hong Kong",
  education: "Nanjing Tech University; The Hong Kong Polytechnic University",
  github: "https://github.com/ken-ab",
  githubLabel: "github.com/ken-ab",
  email: "zzk13373667812@gmail.com",
  wechat: "zzk13373667812",
  currently: `Incoming MSc student in Data Science & Analytics at PolyU
Research focus: efficient GenAI, MoE, and model adaptation
Developing prototypes for agentic AI and machine-learning systems`,
  researchInterests:
    "Efficient Generative AI · Mixture-of-Experts · Model Adaptation and Reuse · Multimodal and Agentic Learning",
  technicalFocus: "Python · PyTorch · TensorFlow · Transformers · BERT · ChatGLM · MoE · scikit-learn",
  lookingFor:
    "Research Assistantship · GenAI / Multimodal Learning · Efficient AI · Agentic AI Systems",
  focus: "Multimodal / Multi-Agent AI Research · AI Systems Engineering",
  availability: "Research Assistantship · Research Collaboration",
  intro:
    "I’m Zhenkai Zhang (Ken). I earned a BSc in Data Science and Big Data Technology from Nanjing Tech University, with a GPA of 3.9/4.0. In September 2026, I will begin an MSc in Data Science & Analytics at The Hong Kong Polytechnic University.\n\nAs a third-year undergraduate, I focused on research and co-authored two peer-reviewed journal articles and two conference papers in machine learning, Mixture-of-Experts, and computer vision. In my final year, I received a Meritorious Winner award at MCM/ICM 2026 and gained further experience in mathematical modeling and problem-driven research. I also applied my research interests in engineering projects: I contributed to a multi-agent system and an enterprise AI workflow, and independently developed and deployed two WeChat mini programs. These projects helped me identify the questions that most interest me: how model architectures, routing mechanisms, and adaptation strategies affect the efficiency and capability limits of AI systems.\n\nMy current interests include efficient AI, generative models, model routing and reuse, and multimodal learning. I am seeking a research assistantship or collaboration in which I can contribute to rigorous experiments, system development, and publication-quality research while deepening my research skills.",
};

export const homeLanes = [
  {
    label: "Research",
    title: "Current research questions and selected evidence",
    body: "Ongoing experiments, selected publications, and related research.",
    href: "/research",
  },
  {
    label: "Engineering",
    title: "Implemented systems and deployment evidence",
    body: "Agent systems, enterprise workflows, and deployed products, with implementation and deployment evidence.",
    href: "/engineering",
  },
  {
    label: "Experience",
    title: "Education, practice, and recognition",
    body: "Education, technical experience, and competition-based research.",
    href: "/experience",
  },
];

export const applications: TimelineEntry[] = [
  {
    id: "applied-sciences-olympic",
    period: "07/2025",
    title: "Predicting Olympic Medal Performance for 2028: Machine Learning Models and the Impact of Host and Coaching Effects",
    role: "First Author",
    type: "Applied Sciences, 2025 / Machine Learning / Sports Analytics",
    description:
      "A machine learning study for predicting medal performance at the 2028 Olympic Games, combining factor analysis, time-series analysis, machine learning, and Bayesian regression.",
    tags: ["K-means", "Factor Analysis", "ARIMA", "XGBoost", "FCNN", "Bayesian Regression", "Olympic Data"],
    cardVisuals: [
      {
        src: olympicModelFrameworkCardFigure,
        alt: "Olympic medal prediction framework covering MPXG, FMPM, host effects, and coach effects.",
        width: 989,
        height: 760,
      },
      {
        src: olympicHostEffectCardFigure,
        alt: "Historical host-country Olympic medal scores and host-effect comparison.",
        width: 1280,
        height: 640,
      },
    ],
    highlights: [
      "Built separate modeling pipelines for medal-winning and non-medal countries.",
      "Quantified medal trends, host-country effects and coach effects.",
      "Used factor analysis to reduce ten influencing variables into principal components.",
      "Treated as the featured research card on this page.",
    ],
    actions: [
      { label: "View Brief", href: "/brief/olympic-prediction" },
      { label: "Paper", href: "https://doi.org/10.3390/app15147793", external: true },
    ],
    emphasis: "featured",
  },
  {
    id: "ainit-moe",
    period: "03/2025",
    title: "Exploring and Enhancing Advanced MoE Models: From Deepspeed-MoE to DeepSeek-V3",
    role: "First Author",
    type: "AINIT 2025 / Conference Paper / AI Architecture",
    description:
      "Accepted by the 2025 IEEE 6th International Seminar on Artificial Intelligence, Networking and Information Technology. The paper reviews advanced Mixture-of-Experts architectures and their performance-efficiency trade-offs.",
    tags: ["DeepSpeed-MoE", "Switch Transformer", "Mixtral", "DeepSeek-V3", "Sparse Activation", "Expert Routing"],
    cardVisuals: [
      {
        src: moeTimelineCardFigure,
        alt: "Timeline of major Mixture-of-Experts models from 2017 to 2024.",
        width: 1280,
        height: 730,
      },
    ],
    highlights: [
      "Reviewed seven representative post-2022 MoE architectures.",
      "Compared MoE and dense Transformer architectures across five dimensions.",
    ],
    actions: [
      { label: "View Brief", href: "/brief/moe" },
      { label: "Paper", href: "https://doi.org/10.1109/AINIT65432.2025.11035928", external: true },
    ],
    emphasis: "compact",
  },
  {
    id: "robotic-vision",
    period: "04/2025",
    title: "Research Progress on the Integration of Robot Vision, Computer Vision and Machine Learning: Technological Evolution, Challenges and Industrial Applications",
    role: "Second Author",
    type: "International Journal of Current Research in Science, Engineering & Technology, 2025",
    description:
      "A review of advances in robot vision, computer vision, and machine learning, including technical evolution, deployment challenges, and industrial applications.",
    tags: ["Computer Vision", "Robotics", "Perception", "Review"],
    cardVisuals: [
      {
        src: robotVisionCardFigure,
        alt: "Urban scene demonstrating object detection for robot and computer vision.",
        width: 981,
        height: 650,
      },
    ],
    actions: [
      { label: "View Brief", href: "/brief/robot-vision" },
      { label: "Paper", href: "https://doi.org/10.30967/IJCRSET/Yujie-Gao/174", external: true },
    ],
    emphasis: "compact",
  },
  {
    id: "sustainability",
    period: "07/2025",
    title:
      "Behavior Prediction of Connections in Eco-Designed Thin-Walled Steel-Ply-Bamboo Structures Based on Machine Learning for Mechanical Properties",
    role: "Third Author",
    type: "Sustainability, 2025 / Machine Learning for Mechanical Properties",
    description:
      "A machine-learning study for predicting connection behavior in eco-designed thin-walled steel-ply-bamboo structures.",
    tags: ["Sustainability", "Machine Learning", "Structural Mechanics", "Mechanical Properties"],
    cardVisuals: [
      {
        src: bambooConnectionsCardFigure,
        alt: "Machine-learning framework for thin-walled steel-ply-bamboo connection experiments and prediction.",
        width: 1280,
        height: 880,
      },
    ],
    actions: [
      { label: "View Brief", href: "/brief/sustainability-bamboo" },
      { label: "Paper", href: "https://doi.org/10.3390/su17156753", external: true },
    ],
    emphasis: "medium",
  },
  {
    id: "deic-publications",
    period: "03/2025",
    title:
      "Enhancing Export Potential of Digital Service Trade in BRI Countries: A Stochastic Frontier Gravity Model Analysis of Digital Economy Development and Mediation Pathways",
    role: "Third Author",
    type: "DEIC 2025 / Digital Economy / Trade Modeling",
    description:
      "Accepted by DEIC 2025. The paper studies digital service trade export potential in BRI countries using stochastic frontier gravity modeling and mediation-pathway analysis.",
    tags: ["Digital Economy", "Stochastic Frontier Gravity Model", "Mediation Analysis", "BRI"],
    cardVisuals: [
      {
        src: briDigitalEconomyCardFigure,
        alt: "Belt and Road digital economy ecosystem, trends, technologies, and enabling factors.",
        width: 704,
        height: 366,
      },
    ],
    actions: [{ label: "View Brief", href: "/brief/deic-digital-trade" }],
    emphasis: "compact",
  },
];

export const publicationCardImageSources = applications.flatMap((item) =>
  item.cardVisuals?.map((visual) => visual.src) ?? [],
);

export const projects: TimelineEntry[] = [
  {
    id: "nsc-wuxi",
    period: "2025.07 - 2025.09",
    title: "National Supercomputing Center in Wuxi / Algorithm Engineer Intern",
    chineseTitle: "国家超级计算无锡中心 / 算法工程师实习生",
    type: "Internship / Algorithm Engineering / Bioinformatics",
    description:
      "Built high-throughput bioinformatics pipelines for approximately 230,000 PDB/FASTA protein-structure records, combining parallel processing, structural consistency checks, HADDOCK3-score execution, correlation analysis, and factor-based scoring.",
    tags: [
      "Python",
      "Multiprocessing",
      "Multithreading",
      "PDB",
      "FASTA",
      "HADDOCK3-score",
      "Spearman Correlation",
      "Factor Analysis",
    ],
    highlights: [
      "Processed approximately 230,000 protein-structure records.",
      "Built workflows for chain reorganization, consistency checks, and anomalous-data cleaning.",
      "Combined Spearman correlation and factor analysis in a composite statistical scoring model.",
      "Identified samples with imbalanced energy features.",
    ],
    emphasis: "featured",
  },
  {
    id: "mcm-icm",
    period: "02/2026",
    title: "Compete or Coevolve: An Evolutionary Macro-Micro Framework for AI-Era Educational Policy",
    chineseTitle: "2026 美国大学生数学建模竞赛 M 奖",
    role: "Meritorious Winner · MCM 2026",
    type: "Mathematical Modeling / AI-era Education Policy / Problem F",
    description:
      "A four-module framework that links task-level AI exposure, curriculum networks, labor-market evolution, and robust institutional policy selection.",
    tags: [
      "O*NET",
      "Sentence-BERT",
      "Lotka-Volterra",
      "Course-Skill Bipartite Network",
      "DMPSO",
      "Monte Carlo",
      "Entropy Weight Method",
      "VIKOR",
    ],
    actions: [{ label: "View Detail", href: "/brief/mcm-2026" }],
    timelineShowcase: {
      kind: "competition-research",
      award: "Meritorious Winner · MCM 2026",
      visual: {
        src: mcmOverviewCard,
        alt: "Four-module overview of the MCM project from occupational AI exposure to policy generalization.",
        width: 1280,
        height: 926,
      },
      facts: [
        { value: "3", label: "Careers" },
        { value: "245", label: "Monte Carlo scenarios" },
        { value: "6", label: "Evaluation criteria" },
        { value: "3", label: "Institutional archetypes" },
      ],
    },
    emphasis: "featured",
  },
  {
    id: "energyfund",
    period: "",
    title: "EnergyQuant Pre-investment Workflow System",
    chineseTitle: "EnergyQuant 投前工作流系统",
    type: "Project Experience / Investment Workflow / AI Document Processing",
    description:
      "A pre-investment workflow system that supports AI-assisted file classification, Track B material review, RBAC, and three parallel processing tracks.",
    tags: [
      "AI File Classification",
      "Track B Review",
      "RBAC",
      "Workflow System",
      "File Upload",
      "Document Preview",
      "Manual Confirmation",
    ],
    highlights: [
      "Designed AI-assisted material classification.",
      "Supported upload, unzip, preview and manual confirmation.",
      "Built role-based access control and parallel investment workflow logic.",
    ],
    emphasis: "medium",
  },
];

export const developmentProjects: DevelopmentProject[] = [
  {
    id: "finance-agent",
    period: "2025.10 - 2026.01",
    title: "MCP-Based A-share Intelligent Analysis System",
    chineseTitle: "基于 MCP 协议的 A 股智能分析系统",
    type: "AI Agent / Finance / Multi-agent System",
    description:
      "Built on MCP, the system coordinates multiple agents to produce structured research reports for investment analysis.",
    tags: ["MCP", "LangGraph", "ReAct", "Multi-Agent", "A-share", "Qwen3-2.5B", "LoRA", "News Factor Model", "Markdown Report"],
    highlights: [
      "Supports data access for more than 4,000 A-share stocks.",
      "Implemented specialist agents for fundamental, technical, valuation, and news analysis.",
      "Added a summary agent, an evaluator, and a reflection-based replanning loop.",
      "Integrated Qwen3-2.5B LoRA news factor model.",
    ],
    actions: [
      { label: "View Brief", href: "/brief/finance-agent" },
      { label: "GitHub", href: "https://github.com/ken-ab/Finance-Agent", external: true },
    ],
    emphasis: "featured",
    showcase: {
      kind: "agent-system",
      status: "Open-source system / source verified",
      query: "Analyze BYD (002594)",
      agents: ["Fundamental", "Technical", "Valuation", "News"],
      toolFamilies: [
        "Stock market",
        "Financial reports",
        "Indices",
        "Market overview",
        "Macroeconomic",
        "Date utilities",
        "Analysis",
        "News crawler",
      ],
      facts: [
        { value: "4", label: "Parallel specialist agents" },
        { value: "8", label: "MCP tool families" },
        { value: "1", label: "Bounded reflection round" },
      ],
      reportSections: ["Fundamental", "Technical", "Valuation", "News & risk"],
    },
  },
  {
    id: "jingjiang-platform",
    period: "2026.04—2026.06",
    title: "Jingjiang Qianfan Jingfa University–Industry–Research–Application Platform / Mini Program",
    chineseTitle: "靖江市千帆靖发产学研用平台/小程序",
    type: "Mini Program / Admin System / Government-University Collaboration",
    description:
      "A mini program and backend system for collaboration among government agencies, companies, and universities, including a national project map, policy PDFs, project matching, and governed batch imports.",
    tags: ["WeChat Mini Program", "Admin Dashboard", "Batch Import", "Error Receipt", "Project Map", "Policy PDF", "Data Governance"],
    highlights: [
      "Built mini program and management backend.",
      "Supported national project map and policy document display.",
      "Supported bulk data import with error feedback.",
      "Supports collaboration among government agencies, companies, and universities.",
    ],
    actions: [{ label: "View Detail", href: "/brief/jingjiang-platform" }],
    emphasis: "medium",
    showcase: {
      kind: "mini-program",
      status: "Deployed · verified 2026-07-13",
      qrCode: qianfanMiniProgramQr,
      screenshots: [
        { src: qianfanHomeScreenshot, alt: "Jingjiang mini-program home dashboard.", label: "Live home", width: 375, height: 811 },
        { src: qianfanChallengeScreenshot, alt: "Jingjiang challenge-batch catalogue.", label: "Challenge batches", width: 430, height: 900 },
        { src: qianfanProjectsScreenshot, alt: "Jingjiang public project catalogue.", label: "Project catalogue", width: 430, height: 900 },
      ],
      metrics: [
        { value: "18", label: "provinces" },
        { value: "79", label: "institutions" },
        { value: "201", label: "public projects" },
      ],
      flow: ["Mini program", "Express API", "Governed catalogue"],
    },
  },
  {
    id: "laowang-checkin",
    period: "2026.05 - 2026.06",
    title: "Lao Wang Exercise Check-in Mini Program",
    chineseTitle: "老王运动打卡小程序",
    type: "Mini Program / Health Check-in / AI Assistant",
    description:
      "A deployed WeChat mini program that combines exercise tracking, multiple health check-ins, community features, and AI-assisted sharing, with a complete backend workflow.",
    tags: [
      "WeChat Mini Program",
      "AI Assistant",
      "Exercise Check-in",
      "Community",
      "Emergency Contact",
      "Subscription Message",
      "Admin Backend",
      "Deployment",
    ],
    highlights: [
      "Built exercise check-in, metronome timing and health record features.",
      "Added family-contact and reminder features.",
      "Implemented community and administration features.",
      "Deployed the mini program and backend services to production.",
    ],
    actions: [{ label: "View Detail", href: "/brief/laowang-checkin" }],
    emphasis: "medium",
    showcase: {
      kind: "mini-program",
      status: "Deployed · live mini program",
      qrCode: wangMiniProgramQr,
      screenshots: [
        { src: wangHomeCardScreenshot, alt: "Lao Wang mini-program home screen.", label: "Home", width: 560, height: 1151 },
        { src: wangCommunityCardScreenshot, alt: "Lao Wang feed-style exercise community.", label: "Community", width: 560, height: 1160 },
        { src: wangCheckinsCardScreenshot, alt: "Lao Wang multi-mode health check-in choices.", label: "Health check-ins", width: 560, height: 1149 },
      ],
      metrics: [
        { value: "872", label: "cumulative users", source: "WeAnalysis" },
        { value: "200+", label: "daily active users", source: "30-day WeAnalysis" },
        { value: "252", label: "avg. daily opens", source: "30-day WeAnalysis" },
      ],
      flow: ["Exercise + check-in", "Community sharing", "AI guidance"],
    },
  },
];
