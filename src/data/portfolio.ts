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
  emphasis?: "featured" | "medium" | "compact";
};

export type DevelopmentProject = TimelineEntry & {
  sections: {
    problem: string;
    architecture: string;
    work: string;
    outcome: string;
  };
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
  currently: `Incoming Data Science student at PolyU
Research focus: efficient GenAI, MoE, and model adaptation
Building agentic AI and ML-system prototypes`,
  researchInterests:
    "Efficient Generative AI · Mixture-of-Experts · Model Adaptation and Reuse · Multimodal and Agentic Learning",
  technicalFocus: "Python · PyTorch · TensorFlow · Transformers · BERT · ChatGLM · MoE · scikit-learn",
  lookingFor:
    "Research Assistantship · GenAI / Multimodal Learning · Efficient AI · Agentic AI Systems",
  focus: "Multimodal / Multi-Agent AI Research · AI Systems Engineering",
  availability: "Research Assistantship · Research Collaboration",
  intro:
    "I’m Zhenkai Zhang (Ken), an incoming Data Science student at PolyU, interested in efficient generative AI, Mixture-of-Experts, model adaptation, and agentic AI systems. My work combines research experience in ML/AI papers with hands-on AI system building, including Finance-Agent, a multi-agent A-share research prototype. I’m looking for RA opportunities where I can contribute to experiments, benchmarking, system prototyping, and paper writing.",
};

export const homeLanes = [
  {
    label: "Publications",
    title: "Research with model discipline",
    body: "Machine learning, decision systems and review work arranged with a clear primary-to-supporting hierarchy.",
    href: "/publications",
  },
  {
    label: "Internship & Awards",
    title: "Evidence from real execution",
    body: "Bioinformatics pipelines, mathematical modeling and investment workflow practice beyond coursework.",
    href: "/internship-awards",
  },
  {
    label: "Development Projects",
    title: "Systems that can be operated",
    body: "Agent systems, mini programs and admin workflows built from architecture to product interface.",
    href: "/development-projects",
  },
];

export const applications: TimelineEntry[] = [
  {
    id: "applied-sciences-olympic",
    period: "07/2025",
    title: "Predicting Olympic Medal Performance for 2028: Machine Learning Models and the Impact of Host and Coaching Effect",
    role: "First Author",
    type: "Applied Sciences, 2025 / Machine Learning / Sports Analytics",
    description:
      "A machine learning study for predicting medal performance at the 2028 Olympic Games, combining factor analysis, time-series analysis, machine learning, and Bayesian regression.",
    tags: ["K-means", "Factor Analysis", "ARIMA", "XGBoost", "FCNN", "Bayesian Regression", "Olympic Data"],
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
    title: "Exploring and Enhancing Advanced MoE Models: From DeepSpeed-MoE to DeepSeek-V3",
    role: "First Author",
    type: "AINIT 2025 / Conference Paper / AI Architecture",
    description:
      "Accepted by the 2025 IEEE 6th International Seminar on Artificial Intelligence, Networking and Information Technology. The paper reviews advanced Mixture-of-Experts architectures and their performance-efficiency trade-offs.",
    tags: ["DeepSpeed-MoE", "Switch Transformer", "Mixtral", "DeepSeek-V3", "Sparse Activation", "Expert Routing"],
    highlights: [
      "Reviewed seven representative post-2022 MoE architectures.",
      "Compared MoE and dense Transformer architectures across five dimensions.",
    ],
    actions: [{ label: "View Brief", href: "/brief/moe" }],
    emphasis: "compact",
  },
  {
    id: "robotic-vision",
    period: "04/2025",
    title: "Research Progress on the Integration of Robot Vision, Computer Vision, and Machine Learning: Technological Evolution, Challenges, and Industrial Applications",
    role: "Second Author",
    type: "International Journal of Current Research in Science, Engineering & Technology, 2025",
    description:
      "A review-oriented research work on robotic vision, computer vision, machine learning, technological evolution, challenges, and industrial applications.",
    tags: ["Computer Vision", "Robotics", "Perception", "Review"],
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
    actions: [{ label: "View Brief", href: "/brief/deic-digital-trade" }],
    emphasis: "compact",
  },
];

export const internshipAwards: TimelineEntry[] = [
  {
    id: "nsc-wuxi",
    period: "2025.07 - 2025.09",
    title: "National Supercomputing Center in Wuxi / Algorithm Engineer Intern",
    chineseTitle: "国家超级计算无锡中心 / 算法工程师实习生",
    type: "Internship / Algorithm Engineering / Bioinformatics",
    description:
      "Built high-throughput bioinformatics data pipelines for 230K-scale PDB/FASTA protein structure records, combining parallel processing, structural consistency checks, HADDOCK3-score execution, statistical correlation analysis and factor-based scoring.",
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
      "Processed 230K-scale protein structure records.",
      "Built chain reorganization, consistency check and abnormal data cleaning workflows.",
      "Used Spearman correlation and factor analysis to build a comprehensive statistical scoring model.",
      "Identified samples with imbalanced energy features.",
    ],
    actions: [{ label: "View Detail", href: "#" }],
    emphasis: "featured",
  },
  {
    id: "mcm-icm",
    period: "02/2026",
    title: "Meritorious Winner (M Award), Mathematical Contest in Modeling (MCM)",
    chineseTitle: "美赛 M 奖",
    type: "Competition / Mathematical Modeling",
    description:
      "Built a modeling framework for education policy in the AI era, combining skill demand analysis, course-skill networks and optimization methods.",
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
    highlights: [
      "Modeled educational policy adaptation in the AI era.",
      "Combined semantic skill mapping and multi-objective optimization.",
      "Built a course-skill network and decision evaluation pipeline.",
    ],
    actions: [{ label: "View Detail", href: "#" }],
    emphasis: "medium",
  },
  {
    id: "energyfund",
    period: "2026.03 - 2026.07",
    title: "EnergyFund / EnergyQuant Pre-investment System",
    chineseTitle: "EnergyFund / EnergyQuant 投前系统",
    type: "Project Experience / Investment Workflow / AI Document Processing",
    description:
      "A pre-investment workflow system for AI-assisted file classification, Track B material review, RBAC permission control and three-track parallel processing.",
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
      "This date must be 2026.03 - 2026.07, not 2026.06.",
    ],
    actions: [{ label: "View Detail", href: "#" }],
    emphasis: "medium",
  },
];

export const developmentProjects: DevelopmentProject[] = [
  {
    id: "finance-agent",
    period: "2025.10 - 2026.01",
    title: "Finance-Agent / A-share Investment Advisor Agent System",
    type: "AI Agent / Finance / Multi-agent System",
    description:
      "Built a multi-agent A-share investment research system using MCP tools, LangGraph and ReAct. The system decomposes stock analysis into fundamental, technical, valuation and news agents, then consolidates findings into traceable Markdown reports with evaluator-reflection loops.",
    tags: ["MCP", "LangGraph", "ReAct", "Multi-Agent", "A-share", "Qwen3-8B", "LoRA", "News Factor Model", "Markdown Report"],
    highlights: [
      "Covered 4000+ A-share stocks.",
      "Built multiple specialized agents: fundamental, technical, valuation and news analysis.",
      "Added summary agent, evaluator agent and reflection-based replanning loop.",
      "Integrated Qwen3-8B LoRA news factor model.",
    ],
    actions: [
      { label: "View Brief", href: "/brief/finance-agent" },
      { label: "GitHub", href: "https://github.com/ken-ab/Finance-Agent", external: true },
    ],
    emphasis: "featured",
    sections: {
      problem:
        "A-share research requires consistent data, separated analytical viewpoints and reports that remain traceable instead of one-shot model prose.",
      architecture:
        "MCP tools feed LangGraph/ReAct agents for fundamentals, technicals, valuation and news before a summary agent consolidates the report.",
      work: "Designed the multi-agent decomposition, evaluator loop, report structure and Qwen3-8B LoRA news factor integration.",
      outcome:
        "Covered 4000+ A-share stocks with specialized agents, traceable Markdown output and reflection-based replanning.",
    },
  },
  {
    id: "jingjiang-platform",
    period: "2026.04 - 2026.06",
    title: "Jingjiang University Cooperation Project Platform",
    chineseTitle: "靖江高校合作项目展示平台",
    type: "Mini Program / Admin System / Government-University Collaboration",
    description:
      "A mini program and backend system for government-enterprise-university cooperation, including national project map, policy PDF display, project matching and batch data import governance.",
    tags: ["WeChat Mini Program", "Admin Dashboard", "Batch Import", "Error Receipt", "Project Map", "Policy PDF", "Data Governance"],
    highlights: [
      "Built mini program and management backend.",
      "Supported national project map and policy document display.",
      "Supported bulk data import with error feedback.",
      "Served cooperation scenarios between government, enterprises and universities.",
    ],
    actions: [{ label: "Demo", href: "#" }],
    emphasis: "medium",
    sections: {
      problem:
        "University cooperation data is scattered across projects, policies and regional context, making it hard to browse and maintain.",
      architecture:
        "Mini program front end, admin dashboard, batch import pipeline, project map and policy document modules.",
      work: "Built the product interface, management flows, bulk import behavior and error receipt feedback.",
      outcome:
        "Created a governable display and maintenance platform for government, enterprise and university cooperation scenarios.",
    },
  },
  {
    id: "laowang-checkin",
    period: "2026.05 - 2026.06",
    title: "Lao Wang Exercise Check-in Mini Program",
    chineseTitle: "老王运动打卡小程序",
    type: "Mini Program / Health Check-in / AI Assistant",
    description:
      "A health-oriented exercise check-in mini program with AI assistant, community features, family emergency contacts, WeChat subscription reminders and admin backend.",
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
      "Added family contact and reminder mechanism.",
      "Built community and admin management features.",
      "Deployed online with backend services.",
    ],
    actions: [{ label: "Demo", href: "#" }],
    emphasis: "medium",
    sections: {
      problem:
        "Health check-in tools need low-friction daily usage, reminders, family support and an operations backend.",
      architecture:
        "Mini program, AI assistant, check-in records, community layer, emergency contacts and subscription reminders.",
      work: "Built check-in flows, timing tools, health records, reminder mechanisms, admin features and deployment.",
      outcome:
        "Delivered an online product path covering user check-in, family support, community and operations management.",
    },
  },
];
