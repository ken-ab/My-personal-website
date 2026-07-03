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
  currently: `Incoming MSc student at PolyU
Vibe coding mini programs and playful AI prototypes
Exploring Generative AI and Multimodal Learning`,
  researchInterests:
    "Efficient Generative AI · Multimodal Foundation Models · Vision-Language Learning · Diffusion Models · 3D/4D Vision",
  technicalFocus: "PyTorch · Transformers · Diffusion Models · VLMs · Model Compression · PEFT",
  lookingFor:
    "Research Assistantship · GenAI / Multimodal Learning · Efficient AI · Agentic AI Systems",
  focus: "Multimodal / Multi-Agent AI Research · AI Systems Engineering",
  availability: "Research Assistantship · Research Collaboration",
  intro: `I'm Zhenkai Zhang (Ken), an incoming Data Science student at PolyU with a background in mathematical modeling, machine learning, and AI system development.

My undergraduate work spans research-oriented machine learning and industry-oriented AI development. I have authored a first-author JCR Q2 SCI paper on Olympic medal prediction, contributed as the second student author to a JCR Q2 SCI paper on mechanical behavior prediction for thin-walled steel–ply–bamboo structures, and completed a first-author conference review on advanced MoE architectures from DeepSpeed-MoE to DeepSeek-V3. I also received the MCM/ICM Meritorious Winner award and maintained a GPA of 3.94/4.0.

On the engineering side, I participated in the development of the EnergyQuant investment platform, independently built a Finance Agent system for analyzing 4,000+ stocks, and launched two mini programs using Codex.

My current interests lie in efficient generative AI, multimodal foundation models, and agentic AI systems. I am seeking research assistantship opportunities where I can contribute to experiments, benchmarking, system prototyping, and paper writing.`,
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
    period: "2024.12 - 2025.06",
    title: "Applied Sciences / Olympic Medal Prediction Research",
    role: "First Author",
    type: "Research / Machine Learning / Sports Analytics",
    description:
      "A machine learning study for predicting medal performance at the 2028 Olympic Games, combining historical Olympic data, country clustering, feature reduction and multiple predictive models.",
    tags: ["K-means", "Factor Analysis", "ARIMA", "XGBoost", "FCNN", "Bayesian Regression", "Olympic Data"],
    highlights: [
      "Built separate modeling pipelines for medal-winning and non-medal countries.",
      "Quantified medal trends, host-country effects and coach effects.",
      "Used factor analysis to reduce ten influencing variables into principal components.",
      "Treated as the featured research card on this page.",
    ],
    actions: [{ label: "Paper", href: "#", external: false }],
    emphasis: "featured",
  },
  {
    id: "ainit-moe",
    period: "2025.04",
    title: "AINIT 2025 / MoE Conference Paper",
    role: "First Author",
    type: "Conference Paper / AI Architecture",
    description:
      "A research paper analyzing Mixture-of-Experts architectures, sparse activation, expert routing, inference cost and model performance.",
    tags: ["DeepSpeed-MoE", "Switch Transformer", "Mixtral", "DeepSeek-V3", "Sparse Activation", "Expert Routing"],
    highlights: [
      "Reviewed representative MoE systems and architectural trade-offs.",
      "Analyzed routing strategies, inference efficiency and expert utilization.",
    ],
    actions: [{ label: "View Detail", href: "#" }],
    emphasis: "compact",
  },
  {
    id: "robotic-vision",
    period: "2025.04 - 2025.07",
    title: "Robotic Vision Review",
    type: "Review Paper / Computer Vision",
    description:
      "A review-oriented research work on robotic vision systems, covering perception, visual understanding and intelligent robotic applications.",
    tags: ["Computer Vision", "Robotics", "Perception", "Review"],
    actions: [{ label: "View Detail", href: "#" }],
    emphasis: "compact",
  },
  {
    id: "sustainability",
    period: "2025.04 - 2025.07",
    title: "Sustainability Research",
    type: "Research Paper / Sustainability",
    description: "A sustainability-related research work, shown as a secondary research card.",
    tags: ["Sustainability", "Modeling", "Decision Analysis"],
    actions: [{ label: "View Detail", href: "#" }],
    emphasis: "medium",
  },
  {
    id: "deic-publications",
    period: "2025.04 - 2025.07",
    title: "DEIC / Additional Publications",
    type: "Additional Publications",
    description:
      "Additional academic works shown in a compact list format, not as visually prominent as the Applied Sciences paper.",
    tags: ["Academic Writing", "Data Analysis", "Research Methods"],
    actions: [{ label: "View Detail", href: "#" }],
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
    period: "2026.01.31",
    title: "MCM/ICM Meritorious Winner",
    chineseTitle: "美赛 M 奖",
    type: "Competition / Mathematical Modeling / Education Policy",
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
    actions: [{ label: "GitHub", href: "https://github.com/ken-ab", external: true }],
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
