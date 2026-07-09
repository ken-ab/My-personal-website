import moePoster from "../assets/case-studies/moe-poster.png";
import olympicFigure from "../assets/case-studies/olympic-figure1-page.png";
import sustainabilityFigure from "../assets/case-studies/sustainability-figure1-page.png";
import type { PortfolioLink, Tone } from "./portfolio";

export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tone: Tone;
  period: string;
  role: string;
  oneLineSummary: string;
  visual?: {
    src: string;
    alt: string;
    caption: string;
  };
  methodTitle: string;
  methodLead: string;
  methodSteps: Array<{
    label: string;
    title: string;
    body: string;
  }>;
  contribution: string[];
  takeaways: string[];
  links: PortfolioLink[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "moe",
    eyebrow: "Research Brief / MoE Architecture",
    title: "Exploring and Enhancing Advanced MoE Models: From DeepSpeed-MoE to DeepSeek-V3",
    subtitle: "A first-author conference paper reviewing advanced Mixture-of-Experts architectures and their performance-efficiency trade-offs.",
    tone: "research",
    period: "03/2025",
    role: "First Author",
    oneLineSummary:
      "This paper studies how Mixture-of-Experts models use sparse expert routing to maintain strong large-language-model performance under computational constraints.",
    visual: {
      src: moePoster,
      alt: "Conference poster summarizing the MoE paper, including motivation, benchmarks, and an open MoE timeline.",
      caption: "Conference poster used as the visual abstract for the MoE paper.",
    },
    methodTitle: "From compute bottleneck to MoE benchmark synthesis",
    methodLead:
      "The paper moves from the computational bottleneck of dense Transformers to a structured comparison of modern MoE systems.",
    methodSteps: [
      {
        label: "01",
        title: "Motivation",
        body: "Frame dense Transformer scaling as a compute and memory bottleneck, especially when every token activates all parameters.",
      },
      {
        label: "02",
        title: "MoE mechanism",
        body: "Explain sparse expert routing, gating functions, top-k expert activation, and the trade-off between capacity and activated computation.",
      },
      {
        label: "03",
        title: "Architecture review",
        body: "Review representative systems including Switch Transformer, DeepSpeed-MoE, PR-MoE, Mixtral 8x7B, GLaM, DBRX, and DeepSeek-V3.",
      },
      {
        label: "04",
        title: "Benchmark synthesis",
        body: "Compare MoE and dense model families across popular aggregated results, commonsense reasoning, world knowledge, code, and math.",
      },
    ],
    contribution: [
      "Selected and organized representative post-2022 MoE architectures for comparative review.",
      "Synthesized architecture-level trade-offs around sparse activation, routing, scalability, and inference efficiency.",
      "Prepared the paper narrative and poster-style explanation for a non-specialist reader.",
    ],
    takeaways: [
      "MoE is best presented as an efficiency architecture, not merely a model-size trick.",
      "Sparse routing allows larger total capacity while activating only part of the model per token.",
      "For RA applications, this brief demonstrates literature synthesis, architecture reading, and benchmark-oriented reasoning.",
    ],
    links: [{ label: "Back to Publications", href: "/publications" }],
  },
  {
    id: "finance-agent",
    eyebrow: "Project Brief / Agentic AI System",
    title: "Finance-Agent / A-share Investment Advisor Agent System",
    subtitle: "A multi-agent prototype that decomposes A-share research into specialist analysis branches and produces traceable Markdown reports.",
    tone: "systems",
    period: "2025.10 - 2026.01",
    role: "Project Builder",
    oneLineSummary:
      "Finance-Agent addresses one-shot financial analysis limitations by splitting A-share research into parallel specialist agents, then using evaluation and reflection to improve report completeness.",
    methodTitle: "LangGraph + MCP + evaluator-reflection loop",
    methodLead:
      "The repository implements a graph-style workflow where data tools feed specialist agents before a summary, evaluation, and bounded reflection stage.",
    methodSteps: [
      {
        label: "Input",
        title: "User query and stock target",
        body: "A query enters the workflow with stock context, analysis intent, and configuration such as bounded reflection rounds.",
      },
      {
        label: "MCP",
        title: "Financial data tools",
        body: "MCP tools provide stock-market, financial-report, technical-indicator, macroeconomic, and news-crawling capabilities.",
      },
      {
        label: "Agents",
        title: "Parallel specialist analysis",
        body: "Fundamental, technical, valuation, and news agents run as separated branches so each analysis view remains traceable.",
      },
      {
        label: "Report",
        title: "Summary, evaluation, reflection",
        body: "A summary agent consolidates results; an evaluator checks section coverage and goal alignment; a reflection agent can replan once when needed.",
      },
    ],
    contribution: [
      "Designed the LangGraph workflow that connects specialist agents, summary generation, evaluation, and reflection.",
      "Implemented or organized core agents for fundamental, technical, valuation, news, summary, evaluator, and reflection stages.",
      "Integrated experimental Qwen LoRA scripts for sentiment and risk scoring as a possible news-factor extension.",
    ],
    takeaways: [
      "The project shows system-building ability beyond static ML modeling.",
      "The architecture makes analysis roles explicit instead of hiding everything in one prompt.",
      "Current evaluation hooks are visible in source; a frozen benchmark and variant comparison remain future work.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ken-ab/Finance-Agent", external: true },
      { label: "Back to Projects", href: "/development-projects" },
    ],
  },
  {
    id: "olympic-prediction",
    eyebrow: "Research Brief / Applied Sciences",
    title: "Predicting Olympic Medal Performance for 2028",
    subtitle: "A first-author Applied Sciences paper on medal prediction, host effects, and exceptional coaching effects.",
    tone: "research",
    period: "07/2025",
    role: "First Author",
    oneLineSummary:
      "This paper builds machine-learning models to predict 2028 Olympic medal performance while quantifying host-country and exceptional-coaching effects.",
    visual: {
      src: olympicFigure,
      alt: "PDF page containing Figure 1, the technical road map of the Olympic medal prediction paper.",
      caption: "Figure 1 page from the paper: technical road map for MPXG, FMPM, host effect, and coach effect analysis.",
    },
    methodTitle: "Medal prediction plus effect quantification",
    methodLead:
      "The pipeline combines historical Olympic data, grouping, factor reduction, time-series forecasting, and supervised prediction.",
    methodSteps: [
      {
        label: "Data",
        title: "Historical Olympic records",
        body: "Use medal records, event categories, and athlete participation data from Olympic Games between 1896 and 2024.",
      },
      {
        label: "Group",
        title: "Country clustering",
        body: "Apply K-means to classify 234 nations into medal-winning and non-medal-winning groups for different modeling paths.",
      },
      {
        label: "Predict",
        title: "MPXG and FMPM models",
        body: "Use factor analysis, ARIMA forecasting, XGBoost-style medal prediction, and a three-layer FCNN for first-medal probability.",
      },
      {
        label: "Explain",
        title: "Host and coach effects",
        body: "Quantify host-country advantages and exceptional coaching effects to make the prediction more interpretable.",
      },
    ],
    contribution: [
      "Led the paper as first author and organized the modeling pipeline.",
      "Built the modeling narrative connecting clustering, factor analysis, time-series forecasting, and neural prediction.",
      "Helped turn quantitative results into an interpretable discussion of host and coach effects.",
    ],
    takeaways: [
      "The work demonstrates applied ML pipeline design on a real-world historical dataset.",
      "The technical road map makes the project easy for non-domain readers to follow.",
      "The project is useful evidence for experiment design, model comparison, and academic writing.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/app15147793", external: true },
      { label: "Back to Publications", href: "/publications" },
    ],
  },
  {
    id: "sustainability-bamboo",
    eyebrow: "Research Brief / Sustainability",
    title: "Behavior Prediction of Thin-Walled Steel-Ply-Bamboo Connections",
    subtitle: "A Sustainability paper using machine learning to predict mechanical behavior in eco-designed structural connections.",
    tone: "research",
    period: "07/2025",
    role: "Third Author",
    oneLineSummary:
      "This paper uses machine learning and hyperparameter optimization to predict the mechanical behavior of self-drilling screw connections in thin-walled steel-ply-bamboo shear walls.",
    visual: {
      src: sustainabilityFigure,
      alt: "PDF page containing Figure 1, the research workflow of the Sustainability paper.",
      caption: "Figure 1 page from the paper: experimental data collection, factor analysis, model selection, and hyperparameter optimization.",
    },
    methodTitle: "Experimental data to optimized ML model",
    methodLead:
      "The study turns structural test data into a machine-learning workflow for connection-type evaluation and behavior prediction.",
    methodSteps: [
      {
        label: "Data",
        title: "Connection experiments",
        body: "Collect 249 measurement records from 51 engineered-bamboo connection specimens under monotonic and cyclic loading.",
      },
      {
        label: "Rank",
        title: "Factor-analysis scoring",
        body: "Use factor analysis to build a comprehensive score table and identify stronger connection types.",
      },
      {
        label: "Model",
        title: "Eight ML models",
        body: "Compare classification and prediction performance across eight machine-learning models for mechanical behavior prediction.",
      },
      {
        label: "Tune",
        title: "Optimization algorithms",
        body: "Apply five hyperparameter optimization methods; Bayesian optimization improves the Random Forest result in the reported study.",
      },
    ],
    contribution: [
      "Contributed to the machine-learning framing and model-comparison narrative as a co-author.",
      "Helped connect structural-mechanics data with data-driven prediction methods.",
      "Supported manuscript preparation around the modeling workflow and result interpretation.",
    ],
    takeaways: [
      "The work shows cross-domain ML application beyond pure AI benchmarks.",
      "The Random Forest model performed best among compared models, and Bayesian optimization further improved performance.",
      "For RA screening, this page signals comfort with data pipelines, model comparison, and interdisciplinary collaboration.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/su17156753", external: true },
      { label: "Back to Publications", href: "/publications" },
    ],
  },
  {
    id: "robot-vision",
    eyebrow: "Research Brief / Review",
    title: "Integration of Robot Vision, Computer Vision, and Machine Learning",
    subtitle: "A review paper on technological evolution, challenges, and industrial applications.",
    tone: "research",
    period: "04/2025",
    role: "Second Author",
    oneLineSummary:
      "This review summarizes how robot vision evolved with computer vision and machine learning, focusing on technical progress, application scenarios, and deployment challenges.",
    methodTitle: "Technology map for vision-based robotics",
    methodLead:
      "The page presents the review as a taxonomy rather than a long literature list, so readers can see how the fields connect.",
    methodSteps: [
      {
        label: "Map",
        title: "Computer vision foundation",
        body: "Organize basic visual perception tasks such as recognition, detection, segmentation, and visual understanding.",
      },
      {
        label: "Fuse",
        title: "Robot vision integration",
        body: "Connect visual perception with robotic sensing, control, navigation, and human-machine interaction.",
      },
      {
        label: "Learn",
        title: "Machine-learning acceleration",
        body: "Discuss how deep learning and data-driven methods improve perception robustness and task adaptability.",
      },
      {
        label: "Deploy",
        title: "Industrial applications",
        body: "Summarize application directions and challenges such as data quality, generalization, real-time constraints, and reliability.",
      },
    ],
    contribution: [
      "Contributed as second author to literature organization and review writing.",
      "Helped structure the relationship among robot vision, computer vision, and machine learning.",
      "Supported synthesis of technical evolution, challenges, and application scenarios.",
    ],
    takeaways: [
      "This page is useful as evidence of broad AI/vision literacy.",
      "The review format shows the ability to synthesize fragmented literature into a readable technical map.",
      "It is a supporting brief rather than the main RA application anchor.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.30967/IJCRSET/Yujie-Gao/174", external: true },
      { label: "Back to Publications", href: "/publications" },
    ],
  },
  {
    id: "deic-digital-trade",
    eyebrow: "Research Brief / Digital Economy",
    title: "Digital Service Trade Export Potential in BRI Countries",
    subtitle: "A DEIC 2025 paper using stochastic frontier gravity modeling and mediation-pathway analysis.",
    tone: "research",
    period: "03/2025",
    role: "Third Author",
    oneLineSummary:
      "This paper studies how digital-economy development affects digital service trade export potential in Belt and Road countries.",
    methodTitle: "Digital economy to export potential",
    methodLead:
      "The paper combines a stochastic frontier gravity model with mediation-pathway reasoning to explain trade potential.",
    methodSteps: [
      {
        label: "Scope",
        title: "BRI country sample",
        body: "Study bilateral digital service trade efficiency across 36 countries along the Belt and Road Initiative.",
      },
      {
        label: "Model",
        title: "Stochastic frontier gravity model",
        body: "Estimate export potential and trade efficiency while accounting for distance and country-level factors.",
      },
      {
        label: "Path",
        title: "Mediation mechanism",
        body: "Analyze how service value-added share in GDP and digital-technology indicators transmit the impact of digitalization.",
      },
      {
        label: "Predict",
        title: "Machine-learning extension",
        body: "Use a machine-learning prediction component to support export-potential analysis and comparative interpretation.",
      },
    ],
    contribution: [
      "Contributed as third author to data-analysis framing and manuscript preparation.",
      "Helped connect digital-economy indicators, mediation pathways, and trade-potential interpretation.",
      "Supported presentation of modeling results for an interdisciplinary audience.",
    ],
    takeaways: [
      "The project shows comfort with non-neural statistical modeling and economic data analysis.",
      "The result emphasizes that exporter-side digital-economy development improves digital service export potential.",
      "This is a supporting evidence page for quantitative modeling breadth.",
    ],
    links: [{ label: "Back to Publications", href: "/publications" }],
  },
];

export function getCaseStudy(id: string | undefined) {
  return caseStudies.find((study) => study.id === id);
}
