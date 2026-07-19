import bambooConnectionsFigure from "../assets/case-studies/bamboo-connections-framework.png";
import briDigitalEconomyFigure from "../assets/case-studies/bri-digital-economy.png";
import moeTimelineFigure from "../assets/case-studies/moe-timeline.png";
import olympicModelFrameworkFigure from "../assets/case-studies/olympic-model-framework.png";
import robotVisionFigure from "../assets/case-studies/robot-vision-detection.png";
import qianfanChallengeScreenshot from "../assets/project-details/qianfan-challenge.png";
import qianfanHomeScreenshot from "../assets/project-details/qianfan-home.png";
import qianfanMiniProgramQr from "../assets/project-details/qianfan-mini-program-qr.png";
import qianfanProjectsScreenshot from "../assets/project-details/qianfan-projects.png";
import qianfanUniversitiesScreenshot from "../assets/project-details/qianfan-universities.png";
import wangAiScreenshot from "../assets/project-details/laowang-ai-detail.webp";
import wangCheckinsScreenshot from "../assets/project-details/laowang-checkins-detail.webp";
import wangCommunityScreenshot from "../assets/project-details/laowang-community-detail.webp";
import wangHomeScreenshot from "../assets/project-details/laowang-home-detail.webp";
import wangPosterScreenshot from "../assets/project-details/laowang-poster-detail.webp";
import wangMiniProgramQr from "../assets/project-details/wang-mini-program-qr.png";
import mcmCareerTrajectories from "../assets/project-details/mcm-career-trajectories.webp";
import mcmReportUrl from "../assets/reports/2026-mcm-final.pdf";
import type { LocalizedText } from "../i18n/LanguageContext";
import type { PortfolioLink, Tone } from "./portfolio";

type MethodStep = {
  label: string;
  title: string;
  body: string;
};

export type ComparativeReviewContent = {
  positioningNote: string;
  flowSteps: string[];
  comparisonRows: Array<{
    system: string;
    design: string;
    activeParameters: string;
    takeaway: string;
    quantitativeStatus: string;
    statusTone: "architecture" | "partial" | "included";
  }>;
  benchmark: {
    evidenceNote: string;
    dimensions: string[];
    includedSystems: string[];
    architectureOnlySystems: string[];
    denseBaselineNote: string;
    clarifications: string[];
  };
  findings: string[];
  routingBackgroundNote: string;
  literatureComputeFinding: string;
  limitations: string[];
};

type CaseStudyBase = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tone: Tone;
  period: string;
  role: string;
  oneLineSummary: string;
  links: PortfolioLink[];
};

export type PublicationCaseStudy = CaseStudyBase & {
  kind: "publication";
  keywords: string[];
  authors: string[];
  correspondingAuthors?: string[];
  abstract: string;
  abstractParagraphBreaks?: string[];
  paperUrl?: string;
  methodVisualization: "bamboo" | "digital-trade" | "moe" | "olympic" | "robot-vision";
  visuals: Array<{ src: string; alt: string; caption: string }>;
  methodTitle: string;
  methodLead: string;
  methodSteps: MethodStep[];
  problemAddressed: string[];
  innovations: string[];
  comparativeReview?: ComparativeReviewContent;
};

export type CompetitionProjectCaseStudy = CaseStudyBase & {
  kind: "competition-project";
  keywords: string[];
  keywordsZh: string[];
  award: string;
  awardZh: string;
  problemLabel: string;
  titleZh: string;
  subtitleZh: string;
  reportUrl: string;
  contribution: {
    period: LocalizedText;
    role: LocalizedText;
    body: LocalizedText;
  };
  facts: Array<{ value: string; label: LocalizedText; note: LocalizedText }>;
  questionAnswer: {
    question: LocalizedText;
    keywords: LocalizedText[];
    answer: LocalizedText;
    steps: Array<{
      task: string;
      title: LocalizedText;
      body: LocalizedText;
      methods: string[];
    }>;
  };
  architectureSteps: Array<{
    step: string;
    title: LocalizedText;
    question: LocalizedText;
    methods: LocalizedText[];
    output: LocalizedText;
  }>;
  feedbackPath: LocalizedText[];
  trajectoryVisual: { src: string; alt: LocalizedText; caption: LocalizedText };
  careerResults: Array<{ title: LocalizedText; signal: LocalizedText; body: LocalizedText; tone: "blue" | "green" | "wine" }>;
  findingSummary: { title: LocalizedText; body: LocalizedText; implication: LocalizedText };
  coreInnovation: { title: LocalizedText; body: LocalizedText; loop: LocalizedText[] };
  supportingContributions: Array<{ title: LocalizedText; body: LocalizedText }>;
  ablations: Array<{ model: string; title: LocalizedText; body: LocalizedText }>;
  robustnessEvidence: LocalizedText[];
  ranking: Array<{ strategy: LocalizedText; archetype: LocalizedText; score: string; rank: number }>;
  strategies: Array<{
    institutionType: LocalizedText;
    policy: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
    actions: LocalizedText[];
  }>;
  moduleInsights: {
    task1: {
      route: LocalizedText[];
      interpretation: LocalizedText;
      conclusion: LocalizedText;
    };
    task2: {
      route: LocalizedText[];
      explanation: LocalizedText;
      pathways: Array<{ title: LocalizedText; body: LocalizedText }>;
      conclusion: LocalizedText;
      ablationConclusion: LocalizedText;
    };
    task3: {
      route: LocalizedText[];
      interpretation: LocalizedText;
      weights: Array<{ label: LocalizedText; value: string }>;
      conclusion: LocalizedText;
    };
    task4: { conclusion: LocalizedText };
    overall: {
      thesis: LocalizedText;
      chain: LocalizedText[];
      findings: LocalizedText[];
    };
  };
  limitations: LocalizedText[];
};

export type AgentProjectCaseStudy = CaseStudyBase & {
  kind: "agent-project";
  visualization?: "finance-agent";
  keywords?: string[];
  githubUrl?: string;
  facts?: Array<{ value: string; label: string; note: string }>;
  toolFamilies?: string[];
  reportSections?: string[];
  experimentalNote?: string;
  methodTitle: string;
  methodLead: string;
  methodSteps: MethodStep[];
  problemAddressed: string[];
  innovations: string[];
};

export type MiniProgramCaseStudy = CaseStudyBase & {
  kind: "mini-program";
  keywords: string[];
  qrCode: string;
  proofCopy: {
    eyebrow: string;
    title: string;
    supporting: string;
  };
  metricGroups: Array<{
    label: string;
    source: string;
    asOf: string;
    window?: string;
    metrics: Array<{ label: string; value: string; note?: string }>;
  }>;
  verificationNote?: string;
  batchBreakdown?: Array<{ label: string; value: number }>;
  screenshots: Array<{
    src: string;
    alt: string;
    label: string;
    width: number;
    height: number;
    featured?: boolean;
  }>;
  featureBlocks: Array<{ title: string; body: string; flow?: string[] }>;
  systemFlow: string[];
  deploymentProof: string[];
};

export type CaseStudy = PublicationCaseStudy | CompetitionProjectCaseStudy | AgentProjectCaseStudy | MiniProgramCaseStudy;

export const caseStudies: CaseStudy[] = [
  {
    kind: "publication",
    id: "moe",
    methodVisualization: "moe",
    eyebrow: "Research Brief / MoE Architecture",
    title: "Exploring and Enhancing Advanced MoE Models: From DeepSpeed-MoE to DeepSeek-V3",
    subtitle: "A first-author comparative review that compares seven representative Mixture-of-Experts systems and synthesizes published evidence on performance and efficiency.",
    tone: "research",
    period: "03/2025",
    role: "First Author",
    keywords: ["Mixture-of-Experts", "Sparse Routing", "LLM Efficiency", "Expert Activation", "DeepSeek-V3"],
    authors: ["Zhenkai Zhang", "Yujie Gao", "Dong Chen"],
    correspondingAuthors: ["Dong Chen"],
    abstract:
      "This study explores the application and optimization of Mixture of Experts (MoE) models in large-scale language models. We analyze the fundamental principles and limitations of the MoE architecture, followed by an in-depth examination of optimization strategies in advanced MoE architectures, including Switch Transformer, Deepspeed-MoE, PR-MoE, Mixtral 8x7B, Glam, DBRX and DeepSeek-V3. Through comprehensive benchmarks across five dimensions (popular aggregated results, commonsense reasoning, world knowledge, code and math), we compare these MoE models against the LLaMA family, Qwen 2.5 72B Base, GPT family and Claude family. Our findings indicate that MoE is a model architecture capable of maintaining high performance even under computational constraints. Techniques such as pyramid structures with residual connections, sparse activation, adaptive adjustment of expert numbers and sizes and shared expert isolation contribute to performance enhancement. Compared to standard Transformer models, MoE can achieve at least a 50% reduction in inference computation while preserving model performance. Furthermore, MoE achieves higher benchmark scores in mathematical and coding tasks. Open-source MoE models, exemplified by DeepSeek-V3, democratize AI research by lowering barriers to entry and fostering global collaboration. Community-driven initiatives, such as standardized simulation-to-real transfer protocols and resource-sharing platforms, address key challenges.",
    paperUrl: "https://doi.org/10.1109/AINIT65432.2025.11035928",
    oneLineSummary:
      "A first-author comparative review that compares seven representative Mixture-of-Experts systems and synthesizes architectural choices with published evidence on performance and efficiency.",
    visuals: [
      {
        src: moeTimelineFigure,
        alt: "Timeline of major Mixture-of-Experts models from 2017 to 2024.",
        caption: "A literature timeline showing the broader evolution of sparse MoE systems. The review selects seven representative systems from this wider landscape for focused comparison.",
      },
    ],
    methodTitle: "Review scope and comparative framework",
    methodLead:
      "The review separates architectural evidence from literature-reported benchmark evidence before synthesizing findings and limitations.",
    methodSteps: [
      {
        label: "01",
        title: "Literature scope",
        body: "Select seven representative MoE systems from the broader evolution of sparse expert architectures.",
      },
      {
        label: "02",
        title: "Architecture taxonomy",
        body: "Compare routing strategy, expert granularity, active parameters, shared or residual experts, and system optimization.",
      },
      {
        label: "03",
        title: "Evidence separation",
        body: "Distinguish architecture-only systems from models with sufficiently comparable literature-reported benchmark results.",
      },
      {
        label: "04",
        title: "Synthesis and boundaries",
        body: "Organize available results across five benchmark families, then state cross-paper findings and limitations.",
      },
    ],
    problemAddressed: [
      "Representative MoE systems differ substantially in routing, expert organization and system optimization, but these design choices are rarely presented in one comparative view.",
      "Performance results are distributed across heterogeneous papers and reports, making it difficult to interpret the capacity–compute trade-off across model families.",
    ],
    innovations: [
      "Organizes seven representative MoE systems into a unified architectural comparison covering routing, expert granularity, active computation and system-level optimization.",
      "Synthesizes available results across aggregate ability, commonsense reasoning, world knowledge, code and mathematics, while explicitly separating architecture-only evidence from benchmark-supported comparisons.",
      "Extracts recurring efficiency mechanisms, including sparse activation, pyramid-residual organization, fine-grained experts and shared expert isolation.",
    ],
    comparativeReview: {
      positioningNote: "A first-author comparative review that compares seven representative Mixture-of-Experts systems and synthesizes architectural choices with published evidence on performance and efficiency.",
      flowSteps: ["Literature scope", "Architecture taxonomy", "Evidence separation", "Findings and limitations"],
      comparisonRows: [
        {
          system: "GLaM",
          design: "Sparse expert activation",
          activeParameters: "9.66B activated in the largest 1.2T-parameter version",
          takeaway: "Demonstrates sparse scaling under a constrained computational budget.",
          quantitativeStatus: "Partial literature-reported results",
          statusTone: "partial",
        },
        {
          system: "Switch Transformer",
          design: "Top-1 routing with simplified expert selection",
          activeParameters: "Varies by model configuration",
          takeaway: "Simplifies routing and supports large-scale sparse training.",
          quantitativeStatus: "Architecture review only",
          statusTone: "architecture",
        },
        {
          system: "DeepSpeed-MoE",
          design: "MoE training and inference framework with parallelism optimization",
          activeParameters: "Not used as a single fixed comparison value",
          takeaway: "Focuses on scalable training, inference and expert/data parallelism.",
          quantitativeStatus: "System review only",
          statusTone: "architecture",
        },
        {
          system: "PR-MoE",
          design: "Pyramid expert allocation with residual dense connections",
          activeParameters: "Varies by configuration",
          takeaway: "Combines pyramid expert organization with residual dense paths.",
          quantitativeStatus: "Architecture review only",
          statusTone: "architecture",
        },
        {
          system: "Mixtral 8×7B",
          design: "Top-2 routing from 8 experts",
          activeParameters: "Approximately 13B",
          takeaway: "Achieves strong parameter efficiency with only a subset of experts activated.",
          quantitativeStatus: "Included in benchmark synthesis",
          statusTone: "included",
        },
        {
          system: "DBRX",
          design: "Top-4 routing from 16 fine-grained experts",
          activeParameters: "36B",
          takeaway: "Uses more fine-grained experts than Mixtral and performs strongly on selected coding tasks.",
          quantitativeStatus: "Included in benchmark synthesis",
          statusTone: "included",
        },
        {
          system: "DeepSeek-V3",
          design: "Fine-grained routed experts with shared expert isolation",
          activeParameters: "37B",
          takeaway: "Improves expert specialization while retaining access to shared knowledge.",
          quantitativeStatus: "Included in benchmark synthesis",
          statusTone: "included",
        },
      ],
      benchmark: {
        evidenceNote: "Benchmark values were collected from original model papers, technical reports, and public evaluation results. The models were not re-evaluated in a single, fully standardized environment. The comparison therefore identifies broad performance–efficiency patterns rather than providing a strict leaderboard.",
        dimensions: ["Aggregate", "Commonsense", "World Knowledge", "Code", "Math"],
        includedSystems: ["GLaM", "Mixtral 8×7B", "DBRX", "DeepSeek-V3"],
        architectureOnlySystems: ["Switch Transformer", "DeepSpeed-MoE", "PR-MoE"],
        denseBaselineNote: "Dense and proprietary baselines are retained only to help interpret parameter-efficiency and performance differences in the collected source evaluations.",
        clarifications: [
          "Benchmark coverage varies by model and source paper.",
          "— indicates that a comparable result was unavailable in the original sources.",
          "Switch Transformer, DeepSpeed-MoE and PR-MoE are excluded from the main quantitative table.",
          "Dense baselines provide context rather than a claim of identical evaluation conditions.",
        ],
      },
      findings: [
        "Sparse activation improves parameter efficiency.",
        "Fine-grained and shared experts strengthen specialization.",
        "Code and math show strong MoE performance patterns in the reviewed evidence.",
        "Evaluation settings differ across source papers.",
      ],
      routingBackgroundNote: "This diagram illustrates a generic Top-k sparse routing mechanism. It is provided as background knowledge and does not represent a new architecture proposed in this paper.",
      literatureComputeFinding: "The reviewed literature reports at least 50% lower inference computation in selected comparisons while preserving comparable performance.",
      limitations: [
        "The benchmark values originate from different source papers and are not fully controlled under identical evaluation settings.",
        "Some architectures lack sufficiently comparable public results and are therefore discussed qualitatively rather than quantitatively.",
        "Missing metrics and differences in model release time, prompting and evaluation frameworks limit strict ranking claims.",
      ],
    },
    links: [{ label: "Back to Research", href: "/research" }],
  },
  {
    kind: "agent-project",
    id: "finance-agent",
    visualization: "finance-agent",
    eyebrow: "Project Brief / Agentic AI System",
    title: "MCP-Based A-share Intelligent Analysis System",
    subtitle: "A multi-agent prototype that decomposes A-share research into specialist analysis branches and produces traceable Markdown reports.",
    tone: "systems",
    period: "2025.10 - 2026.01",
    role: "Algorithm Engineer",
    keywords: ["LangGraph", "MCP", "Multi-Agent", "ReAct", "Evaluation", "Reflection"],
    githubUrl: "https://github.com/ken-ab/Finance-Agent",
    oneLineSummary:
      "This multi-agent financial research system is built with LangGraph, MCP, and ReAct. An independent MCP server provides eight families of financial-data tools to four specialist agents, which run fundamental, technical, valuation, and news analyses in parallel. A summary agent produces a structured Markdown report, an evaluator checks completeness and task alignment, and a reflection agent may issue one bounded replanning instruction before the final report is produced.",
    facts: [
      { value: "4", label: "Specialist Agents", note: "Fundamental, technical, valuation, and news analysis" },
      { value: "8", label: "MCP Tool Families", note: "Market, reports, indices, macro, analysis, and news access" },
      { value: "1", label: "Maximum Reflection Round", note: "At most one replanning round when revision is required" },
    ],
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
    reportSections: [
      "Executive summary",
      "Fundamental analysis",
      "Technical analysis",
      "Valuation analysis",
      "News and risk",
      "Final assessment",
      "Source trace",
    ],
    experimentalNote:
      "Experimental component: Qwen3-2.5B LoRA scripts explore news sentiment and risk scoring, but they are not presented as a required stage in the core LangGraph runtime.",
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
        body: "Fundamental, technical, valuation, and news agents run in separate branches so that each analytical perspective remains traceable.",
      },
      {
        label: "Report",
        title: "Summary, evaluation, reflection",
        body: "A summary agent consolidates results; an evaluator checks section coverage and goal alignment; a reflection agent can replan once when needed.",
      },
    ],
    problemAddressed: [
      "One-shot financial prompts hide analytical roles, mix data sources, and make it difficult to inspect why a report is incomplete.",
      "A reusable A-share research workflow needs explicit data tools, specialist reasoning, and a bounded quality-control loop.",
    ],
    innovations: [
      "Uses LangGraph to keep fundamental, technical, valuation, and news analysis as parallel, traceable branches backed by eight MCP tool families.",
      "Adds summary, evaluation, and one bounded reflection round before producing a structured Markdown report.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ken-ab/Finance-Agent", external: true },
      { label: "Back to Engineering", href: "/engineering" },
    ],
  },
  {
    kind: "publication",
    id: "olympic-prediction",
    methodVisualization: "olympic",
    eyebrow: "Research Brief / Applied Sciences",
    title: "Predicting Olympic Medal Performance for 2028: Machine Learning Models and the Impact of Host and Coaching Effects",
    subtitle: "A first-author Applied Sciences paper on medal prediction, host effects, and exceptional coaching effects.",
    tone: "research",
    period: "07/2025",
    role: "First Author",
    keywords: ["Olympic Medals", "K-means", "Factor Analysis", "ARIMA", "XGBoost", "FCNN", "Host Effect"],
    authors: ["Zhenkai Zhang", "Tengfei Ma", "Yunpeng Yao", "Ningjia Xu", "Yujie Gao", "Wanwan Xia"],
    correspondingAuthors: ["Wanwan Xia"],
    abstract:
      "This study develops two machine learning models to predict the medal performance of countries at the 2028 Olympic Games while systematically analyzing and quantifying the impacts of the host effect and exceptional coaching on medal gains. The dataset encompasses records of total medals by country, event categories, and athletes’ participation from the Olympic Games held between 1896 and 2024. We use K-means clustering to analyze medal trends, categorizing 234 nations into four groups (α1, α2, α3, α4). Among these, α1, α2, α3 represent medal-winning countries, while α4 consists of non-medal-winning nations. For the α1, α2, and α3 groups, 2–3 representative countries from each are selected for trend analysis, with the United States serving as a case study. This study extracts ten factors that may influence medal wins from the dataset, including participant data, the number of events, and medal growth rates. Factor analysis is used to reduce them into three principal components: Factor analysis condenses ten influencing factors into three principal components: the event scale factor (F1), the medal trend factor (F2), and the gender and athletic ability factor (F3). An ARIMA model predicts the factor coefficients for 2028 as 0.9539, 0.7999, and 0.2937, respectively. Four models (random forest, BP Neural Network, XGBoost, and SVM) are employed to predict medal outcomes, using historical data split into training and testing sets to compare their predictive performance. The research results show that XGBoost is the optimal medal predicted model, with the United States projected to win 57 gold medals and a total of 135 medals in 2028. For non-medal-winning countries (α4), a three-layer fully connected neural network (FCNN) is constructed, achieving an accuracy of 85.5% during testing. Additionally, a formula to calculate the host effect and a Bayesian linear regression model to assess the impact of exceptional coaching on athletes’ medal performance are proposed. The overall trend of countries in the α1 group is stable, but they are significantly affected by the host effect; the trend in the α2 group shows an upward trend; the trend in the α3 group depend on the athletes’ conditions and whether the events they excel in are included in that year’s Olympics. In the α4 group, the probabilities of the United Arab Republic (UAR) and Mali (MLI) winning medals in the 2028 Olympic Games are 77.47% and 58.47%, respectively, and there are another four countries with probabilities exceeding 30%. For the eight most recent Olympic Games, the gain rate of the host effect is 74%. Great coaches can bring an average increase of 0.2 to 0.5 medals for each athlete. The proposed models, through an innovative integration of clustering, dimensionality reduction, and predictive algorithms, provide reliable forecasts and data-driven insights for optimizing national sports strategies. These contributions not only address the gap in predicting first-time medal wins for non-medal-winning nations but also offer guidance for policymakers and sports organizations, though they are constrained by assumptions of stable historical trends, minimal external disruptions, and the exclusion of unknown athletes.",
    abstractParagraphBreaks: [
      "while α4 consists of non-medal-winning nations.",
      "with the United States projected to win 57 gold medals and a total of 135 medals in 2028.",
      "on athletes’ medal performance are proposed.",
      "Great coaches can bring an average increase of 0.2 to 0.5 medals for each athlete.",
    ],
    paperUrl: "https://doi.org/10.3390/app15147793",
    oneLineSummary:
      "This paper builds machine-learning models to predict 2028 Olympic medal performance while quantifying host-country and exceptional-coaching effects.",
    visuals: [
      {
        src: olympicModelFrameworkFigure,
        alt: "Olympic medal prediction framework covering MPXG, FMPM, host effects, and great-coach effects.",
        caption: "Two prediction paths model established medal-winning countries and countries seeking a first medal, followed by host- and coach-effect analysis.",
      },
    ],
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
    problemAddressed: [
      "A 2028 forecast must cover both established medal-winning nations and countries with no prior medals, despite very different historical-data density.",
      "Medal forecasts are incomplete unless host-country advantage and exceptional-coach effects are quantified separately from the prediction itself.",
    ],
    innovations: [
      "Splits 234 nations into α1-α4: MPXG handles α1-α3 through factor analysis, ARIMA, and four-model comparison, while FMPM uses a three-layer FCNN for α4 first-medal probability.",
      "Connects the best XGBoost forecast and 85.5% FCNN test accuracy with interpretable effects: a 74% recent host gain rate and an estimated 0.2-0.5 additional medals per athlete under exceptional coaching.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/app15147793", external: true },
      { label: "Back to Research", href: "/research" },
    ],
  },
  {
    kind: "publication",
    id: "sustainability-bamboo",
    methodVisualization: "bamboo",
    eyebrow: "Research Brief / Sustainability",
    title: "Behavior Prediction of Connections in Eco-Designed Thin-Walled Steel–Ply–Bamboo Structures Based on Machine Learning for Mechanical Properties",
    subtitle: "A Sustainability paper using machine learning to predict mechanical behavior in eco-designed structural connections.",
    tone: "research",
    period: "07/2025",
    role: "Third Author",
    keywords: ["Thin-Walled Steel–Ply–Bamboo", "Factor Analysis", "Machine Learning", "Random Forest", "Bayesian Optimization"],
    authors: [
      "Wanwan Xia",
      "Yujie Gao",
      "Zhenkai Zhang",
      "Yuhan Jie",
      "Jingwen Zhang",
      "Yueying Cao",
      "Qiuyue Wu",
      "Tao Li",
      "Wentao Ji",
      "Yaoyuan Gao",
    ],
    correspondingAuthors: ["Qiuyue Wu", "Tao Li"],
    abstract:
      "This study employed multiple machine learning and hyperparameter optimization techniques to analyze and predict the mechanical properties of self-drilling screw connections in thin-walled steel–ply–bamboo shear walls, leveraging the renewable and eco-friendly nature of bamboo to enhance structural sustainability and reduce environmental impact. The dataset, which included 249 sets of measurement data, was derived from 51 disparate connection specimens fabricated with engineered bamboo—a renewable and low-carbon construction material. Utilizing factor analysis, a ranking table recording the comprehensive score of each connection specimen was established to select the optimal connection type. Eight machine learning models were employed to analyze and predict the mechanical performance of these connection specimens. Through comparison, the most efficient model was selected, and five hyperparameter optimization algorithms were implemented to further enhance its prediction accuracy. The analysis results revealed that the Random Forest (RF) model demonstrated superior classification performance, prediction accuracy, and generalization ability, achieving approximately 61% accuracy on the test set (the highest among all models). In hyperparameter optimization, the RF model processed through Bayesian Optimization (BO) further improved its predictive accuracy to about 67%, outperforming both its non-optimized version and models optimized using the other algorithms. Considering the mechanical performance of connections within TWS composite structures, applying the BO algorithm to the RF model significantly improved the predictive accuracy. This approach enables the identification of the most suitable specimen type based on newly provided mechanical performance parameter sets, providing a data-driven pathway for sustainable bamboo–steel composite structure design.",
    paperUrl: "https://doi.org/10.3390/su17156753",
    oneLineSummary:
      "This paper uses machine learning and hyperparameter optimization to predict the mechanical behavior of self-drilling screw connections in thin-walled steel-ply-bamboo shear walls.",
    visuals: [
      {
        src: bambooConnectionsFigure,
        alt: "Machine-learning framework for thin-walled steel-ply-bamboo connection experiments and prediction.",
        caption: "The route connects specimen experiments, data processing, model comparison, hyperparameter tuning, and design feedback.",
      },
    ],
    methodTitle: "From experimental data to an optimized ML model",
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
    problemAddressed: [
      "Connection experiments are costly and the available structural dataset is limited, making it difficult to select a suitable bamboo-steel connection from new mechanical-property measurements.",
      "A repeatable prediction workflow is needed to turn heterogeneous specimen tests into design guidance rather than isolated laboratory results.",
    ],
    innovations: [
      "Combines factor-analysis ranking of 249 measurement records from 51 specimens with an eight-model machine-learning comparison.",
      "Selects Random Forest at about 61% test accuracy, then compares five hyperparameter optimizers; Bayesian optimization raises the reported result to about 67% and feeds the prediction back into connection selection.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/su17156753", external: true },
      { label: "Back to Research", href: "/research" },
    ],
  },
  {
    kind: "publication",
    id: "robot-vision",
    methodVisualization: "robot-vision",
    eyebrow: "Research Brief / Review",
    title: "Research Progress on the Integration of Robot Vision, Computer Vision and Machine Learning: Technological Evolution, Challenges and Industrial Applications",
    subtitle: "A review of the evolution, deployment challenges, and industrial applications of robot vision.",
    tone: "research",
    period: "04/2025",
    role: "Second Author",
    keywords: ["Robot Vision", "Computer Vision", "Machine Learning", "Object Detection", "3D Reconstruction", "Industrial Applications"],
    authors: ["Yujie Gao", "Zhengkai Zhang", "Xiao Zhu", "Shuran Ding"],
    abstract:
      "This paper systematically reviews the technological progress of the integration of robot vision, computer vision (CV) and machine learning (ML), focusing on the design paradigms of global vision system, local embedded vision, hybrid cloud edge architecture, as well as target detection, 3D reconstruction, Algorithm innovation of CV technology such as dynamic scene understanding. Combining the seven major trends of IDC 2025 embodied intelligent robots with the China machine vision market research report, this paper analyzes solutions to challenges such as real-time, data scarcity and multi-modal fusion and proposes solutions based on lightweight models, federated learning and neural symbolic systems. Future direction. By citing top conference papers and industry white papers such as CVPR, ICRA and NeurIPS, this paper builds a technology-scenario-industry closed-loop academic framework to provide theoretical support for the intelligent upgrade of robot vision.",
    paperUrl: "https://doi.org/10.30967/IJCRSET/Yujie-Gao/174",
    oneLineSummary:
      "This review summarizes how robot vision evolved with computer vision and machine learning, focusing on technical progress, application scenarios, and deployment challenges.",
    visuals: [
      {
        src: robotVisionFigure,
        alt: "Urban scene demonstrating object detection for robot and computer vision.",
        caption: "Object-level perception turns a complex street scene into structured signals for detection, tracking, and robotic decision-making.",
      },
    ],
    methodTitle: "Technology map for vision-based robotics",
    methodLead:
      "The review uses a taxonomy to connect system architectures, perception tasks, deployment constraints, and industrial applications.",
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
    problemAddressed: [
      "Robot vision, computer vision, and machine learning are often reviewed separately even though industrial systems must combine perception architecture, algorithms, and deployment constraints.",
      "Real-time operation, scarce data, and multimodal fusion remain practical barriers to reliable robot deployment.",
    ],
    innovations: [
      "Creates a technology-scenario-industry map connecting global, embedded, and cloud-edge vision with detection, 3D reconstruction, and dynamic-scene understanding.",
      "Maps lightweight models, federated learning, and neural-symbolic systems to deployment bottlenecks as a structured review synthesis rather than presenting them as newly invented algorithms.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.30967/IJCRSET/Yujie-Gao/174", external: true },
      { label: "Back to Research", href: "/research" },
    ],
  },
  {
    kind: "publication",
    id: "deic-digital-trade",
    methodVisualization: "digital-trade",
    eyebrow: "Research Brief / Digital Economy",
    title: "Enhancing Export Potential of Digital Service Trade in BRI Countries: A Stochastic Frontier Gravity Model Analysis of Digital Economy Development and Mediation Pathways",
    subtitle: "A DEIC 2025 paper using stochastic frontier gravity modeling and mediation-pathway analysis.",
    tone: "research",
    period: "03/2025",
    role: "Third Author",
    keywords: ["Digital Service Trade", "BRI", "Digital Economy", "Stochastic Frontier Gravity Model", "Mediation Analysis"],
    authors: ["Haoyue Ji", "Yujie Gao", "Zhenkai Zhang"],
    abstract:
      "This study explores the impact of the development level of the digital economy in countries along the Belt and Road Initiative (BRI) on the export potential of digital service trade. A stochastic frontier gravity model (SFGM) is employed to analyze the bilateral trade efficiency of 36 countries. The results show that digital economy development in exporting countries significantly enhances their potential in digital service exports. Furthermore, the share of service value-added in GDP and the Digital Technology Index play mediating roles in this relationship, indicating the transmission mechanisms through which digitalization boosts trade performance. Geographical distance continues to exert a negative impact on digital service trade. Additionally, this study introduces a machine learning-based forecasting framework by integrating the XGBoost algorithm with Genetic Algorithm optimization. This approach accurately predicts the trajectories of key variables, such as the Digital Economy Index and Trade Openness, enhancing the robustness of export potential estimation and providing forward-looking policy insights. The findings offer both theoretical and practical implications for enhancing digital infrastructure, improving trade facilitation, and fostering regional digital economic integration under the BRI framework.",
    paperUrl:
      "https://www.researchgate.net/publication/394217388_Enhancing_Export_Potential_of_Digital_Service_Trade_in_BRI_Countries_A_Stochastic_Frontier_Gravity_Model_Analysis_of_Digital_Economy_Development_and_Mediation_Pathways",
    oneLineSummary:
      "This paper studies how digital-economy development affects digital service trade export potential in Belt and Road countries.",
    visuals: [
      {
        src: briDigitalEconomyFigure,
        alt: "Belt and Road digital economy ecosystem, trends, technologies, and enabling factors.",
        caption: "The digital-trade ecosystem links new business models with infrastructure, data, skills, regulation, and emerging technologies.",
      },
    ],
    methodTitle: "From digital-economy development to export potential",
    methodLead:
      "The paper combines a stochastic frontier gravity model with mediation analysis to explain trade potential.",
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
    problemAddressed: [
      "The relationship between exporter-side digital-economy development and digital-service export potential across BRI countries is not fully explained by observed trade volume alone.",
      "Policy analysis also needs to identify the mechanisms carrying that effect and estimate how key indicators may evolve beyond the historical panel.",
    ],
    innovations: [
      "Combines a stochastic frontier gravity model for 36 countries with two mediation paths: service value added as a share of GDP and the Digital Technology Index.",
      "Adds an XGBoost plus genetic-algorithm forecasting extension, connecting historical mechanism analysis with forward-looking 2022-2028 policy estimates.",
    ],
    links: [{ label: "Back to Research", href: "/research" }],
  },
  {
    kind: "competition-project",
    id: "mcm-2026",
    eyebrow: "Competition Research Brief / Mathematical Modeling",
    title: "Compete or Coevolve: An Evolutionary Macro-Micro Framework for AI-Era Educational Policy",
    subtitle:
      "A four-module modeling framework that connects task-level AI exposure, labor-market evolution, curriculum rewiring, and institution-specific policy selection.",
    titleZh: "竞争还是共生：面向 AI 时代教育政策的宏观演化框架",
    subtitleZh: "一个连接任务级 AI 暴露、劳动力市场演化、课程网络重构与院校政策选择的宏微观建模框架。",
    tone: "career",
    period: "02/2026",
    role: "Technical Writing Lead & Framework Integrator",
    keywords: ["MCM 2026", "Occupational AI Exposure", "E-MMCAS", "Multi-objective Policy Optimization", "Robust Policy Evaluation"],
    keywordsZh: ["数学建模竞赛研究", "职业 AI 暴露", "宏微观耦合系统", "多目标政策优化", "稳健政策评价"],
    award: "Meritorious Winner (M Award)",
    awardZh: "Meritorious Winner · M 奖",
    problemLabel: "Problem F / AI-era post-secondary education",
    reportUrl: mcmReportUrl,
    oneLineSummary:
      "The project models how generative AI changes three occupations, links curriculum reform to labor-market evolution, and converts policy rankings into recommendations for three institutional types.",
    contribution: {
      period: { en: "February 2026", zh: "2026 年 2 月" },
      role: { en: "Technical Writing Lead & Framework Integrator", zh: "论文主笔 / 框架整合" },
      body: {
        en: "I led the report structure and technical narrative, integrated the four competition tasks into a unified macro–micro framework, and wrote and edited the core text, figures, and result interpretation for the final submission.",
        zh: "负责论文整体结构与技术叙事，将四项比赛任务、模型公式、仿真结果和院校政策建议整合为统一的宏微观框架，并完成核心正文写作、图表编排、结果解释与全文润色。",
      },
    },
    facts: [
      { value: "3", label: { en: "Career Trajectories", zh: "类职业轨迹" }, note: { en: "Data Scientist, Electrician, and Graphic Designer", zh: "数据科学家、电工和平面设计师" } },
      { value: "245", label: { en: "Monte Carlo Scenarios", zh: "个蒙特卡洛情景" }, note: { en: "AI capability and policy uncertainty", zh: "AI 能力与政策不确定性" } },
      { value: "6", label: { en: "Policy Criteria", zh: "项政策指标" }, note: { en: "Employability, adaptability, innovation, interdisciplinarity, environment, and ethics", zh: "就业、适应、创新、跨学科、环境与伦理" } },
      { value: "3", label: { en: "Institutional Archetypes", zh: "类院校原型" }, note: { en: "Research, technical-vocational, and arts education", zh: "研究型、职业技术型与艺术教育" } },
    ],
    questionAnswer: {
      question: {
        en: "Generative AI is reshaping the job market and labor demand. How should post-secondary institutions adjust their curricula and enrollment strategies to help graduates adapt to the future workforce and maintain long-term competitiveness?",
        zh: "生成式 AI 正在重塑职业市场和劳动力需求。面对这一变化，高等教育应如何调整课程设置与招生策略，帮助毕业生适应未来就业市场，并保持长期竞争力？",
      },
      keywords: [
        { en: "Occupational Change", zh: "职业变化" },
        { en: "Curriculum Redesign", zh: "课程重构" },
        { en: "Enrollment Policy", zh: "招生政策" },
      ],
      answer: {
        en: "We first classify the impact of generative AI on occupations into three categories: augmentation, where AI improves productivity and increases labor demand; substitution, where AI reduces the need for certain tasks and positions; and resilience, where occupations remain less affected because they depend on physical work, complex interaction, or professional judgment. We then forecast changes in occupational supply and demand, develop tailored curriculum and enrollment strategies for research universities, technical-vocational institutions, and design and arts schools, and evaluate these policies across employability, adaptability, innovation, environmental impact, and ethical responsibility.",
        zh: "我们首先将生成式 AI 对职业的影响归纳为三类：增强型，即 AI 提升工作效率并带动岗位需求增长；替代型，即 AI 压缩部分工作内容，使相关岗位需求下降；韧性型，即职业依赖实体操作、复杂互动或专业判断，短期内受 AI 影响较小。随后，我们预测不同职业的供需变化，并分别为研究型大学、职业技术院校和设计艺术类院校制定课程与招生调整方案，最后从就业能力、适应性、创新、环境和伦理等方面筛选更稳健的政策。",
      },
      steps: [
        {
          task: "Task 1",
          title: { en: "Identify How AI Affects Different Occupations", zh: "识别 AI 如何影响不同职业" },
          body: {
            en: "Select Data Scientist, Electrician, and Graphic Designer as representative occupations, quantify substitution, augmentation, and immunity at the task and skill levels, and forecast changes in labor demand, workforce supply, and talent gaps.",
            zh: "选取数据科学家、电工和平面设计师三类代表性职业，从任务与技能层面量化 AI 的替代、增强和免疫效应，并预测不同职业的需求、供给与人才缺口变化。",
          },
          methods: ["O*NET", "Sentence-BERT", "Tug-of-War"],
        },
        {
          task: "Task 2",
          title: { en: "Simulate How Education Policies Change Employment Outcomes", zh: "模拟教育政策如何改变就业结果" },
          body: {
            en: "Connect macro-level labor-market evolution with micro-level course-skill networks to simulate how curriculum reform and enrollment adjustment reshape AI-labor interaction and long-term employment outcomes.",
            zh: "将宏观劳动力市场演化与微观课程—技能网络连接起来，模拟课程改革和招生调整如何改变 AI 与劳动之间的关系，并影响长期就业结果。",
          },
          methods: ["E-MMCAS", "Lotka–Volterra", "Course-Skill Network"],
        },
        {
          task: "Task 3",
          title: { en: "Search for and Evaluate Robust Policies", zh: "搜索并评价稳健的政策方案" },
          body: {
            en: "Search curriculum and enrollment policies under uncertainty in AI capability and policy outcomes, and evaluate them across employability, adaptability, innovation, interdisciplinarity, environmental impact, and ethical compliance.",
            zh: "在 AI 能力和政策效果存在不确定性的情况下，搜索课程与招生政策，并从就业能力、适应性、创新、跨学科合作、环境影响和伦理合规六个方面进行综合评价。",
          },
          methods: ["DMPSO", "Monte Carlo", "Entropy Weighting", "VIKOR"],
        },
        {
          task: "Task 4",
          title: { en: "Translate Model Results into Institutional Action", zh: "将模型结果转化为院校行动" },
          body: {
            en: "Translate optimized outcomes into actionable educational strategies, providing differentiated recommendations for curriculum reform, capability development, and long-term transformation across research, technical-vocational, and arts institutions.",
            zh: "将优化结果转化为可执行的教育策略，分别为研究型大学、职业技术院校和艺术类院校提出课程调整、能力培养与长期转型建议。",
          },
          methods: ["Institutional Archetypes", "Policy Transfer"],
        },
      ],
    },
    architectureSteps: [
      {
        step: "00",
        title: { en: "Data and Evidence", zh: "数据与证据" },
        question: { en: "What evidence grounds the analysis?", zh: "哪些证据支撑分析？" },
        methods: [
          { en: "O*NET task data", zh: "O*NET 职业任务" },
          { en: "MIT · Lincoln Tech · RISD curricula", zh: "MIT · Lincoln Tech · RISD 课程" },
          { en: "Labor-market data", zh: "劳动力市场数据" },
          { en: "AI capability indicators", zh: "AI 能力指标" },
        ],
        output: { en: "Structured task, skill, curriculum, and labor evidence.", zh: "形成结构化的任务、技能、课程与就业证据。" },
      },
      {
        step: "01",
        title: { en: "Career Exposure Diagnosis", zh: "职业 AI 暴露诊断" },
        question: { en: "Does AI substitute, augment, or fail to replace this occupation?", zh: "AI 对该职业主要产生替代、增强还是免疫效应？" },
        methods: [
          { en: "Sentence-BERT", zh: "Sentence-BERT" },
          { en: "Substitution · Augmentation · Immunity", zh: "替代 · 增强 · 免疫驱动力" },
          { en: "Tug-of-War mechanism", zh: "三驱动力拉锯机制" },
        ],
        output: { en: "Career exposure profiles and three occupational trajectories.", zh: "职业暴露画像与三条职业演化轨迹。" },
      },
      {
        step: "02",
        title: { en: "Educational Policy Optimization", zh: "教育政策优化" },
        question: { en: "How should curricula and enrollment adapt?", zh: "课程结构和招生政策应当如何调整？" },
        methods: [
          { en: "E-MMCAS", zh: "E-MMCAS" },
          { en: "Course-skill bipartite network", zh: "课程—技能二部网络" },
          { en: "Modified Lotka–Volterra", zh: "改进 Lotka–Volterra 动力学" },
          { en: "Pruning · grafting · bi-level DMPSO", zh: "剪枝 · 嫁接 · 双层 DMPSO" },
        ],
        output: { en: "Optimized curriculum and enrollment policy trajectories.", zh: "优化后的课程与招生政策轨迹。" },
      },
      {
        step: "03",
        title: { en: "Robust Policy Evaluation", zh: "稳健政策评估" },
        question: { en: "Which strategy remains balanced under uncertainty?", zh: "在不确定性和多目标冲突下，哪种策略最稳健？" },
        methods: [
          { en: "245 Monte Carlo scenarios", zh: "245 个 Monte Carlo 情景" },
          { en: "Six policy criteria", zh: "六项政策指标" },
          { en: "Entropy weighting · VIKOR", zh: "熵权法 · VIKOR" },
        ],
        output: { en: "Uncertainty-aware policy ranking.", zh: "面向不确定性的政策策略排名。" },
      },
      {
        step: "04",
        title: { en: "Institutional Strategies", zh: "院校行动策略" },
        question: { en: "What should different types of institutions actually do?", zh: "不同类型院校最终应当采取什么具体行动？" },
        methods: [
          { en: "Structural similarity", zh: "结构相似性" },
          { en: "Institutional archetypes", zh: "院校原型" },
          { en: "Local calibration", zh: "本地校准" },
        ],
        output: { en: "Research, vocational, and arts education strategies.", zh: "研究型、职业技术型与艺术教育策略。" },
      },
    ],
    feedbackPath: [
      { en: "Employment Gap", zh: "就业缺口" },
      { en: "Policy Adjustment", zh: "政策调整" },
      { en: "Curriculum Rewiring", zh: "课程重构" },
      { en: "Updated AI–Labor Interaction", zh: "更新 AI—劳动交互" },
    ],
    trajectoryVisual: {
      src: mcmCareerTrajectories,
      alt: {
        en: "Original MCM report Figures 3 and 4 comparing labor supply-demand dynamics and workforce-gap projections for data scientists, electricians, and graphic designers.",
        zh: "美赛报告原始 Figure 3/4：数据科学家、电工和平面设计师的供需动态与人才缺口预测。",
      },
      caption: {
        en: "Original Figures 3 and 4 from the report. The evidence is scaled for web reading but not redrawn or numerically altered.",
        zh: "报告原始 Figure 3/4。网页仅对证据图缩放展示，未重画或修改任何数值。",
      },
    },
    careerResults: [
      {
        title: { en: "Data Scientist", zh: "数据科学家" },
        signal: { en: "Augmentation-led Growth", zh: "增强驱动增长" },
        body: {
          en: "High augmentation potential outweighs substantial AI exposure, producing rapid demand growth and a widening talent gap.",
          zh: "较高的增强潜力抵消了显著的 AI 暴露，职业需求快速增长，并形成持续扩大的专业人才缺口。",
        },
        tone: "blue",
      },
      {
        title: { en: "Electrician", zh: "电工" },
        signal: { en: "Physical-Immunity Stability", zh: "实体免疫稳定" },
        body: {
          en: "Physical dexterity and on-site work form a structural barrier to end-to-end automation, keeping demand comparatively stable.",
          zh: "实体操作和现场工作形成端到端自动化的结构性屏障，使职业需求保持相对稳定。",
        },
        tone: "green",
      },
      {
        title: { en: "Graphic Designer", zh: "平面设计师" },
        signal: { en: "Structural Displacement", zh: "结构性位移" },
        body: {
          en: "High substitution pressure and low physical immunity reduce demand unless creative value shifts toward judgment, curation, and authorship.",
          zh: "高替代压力和较低实体免疫导致需求下降，除非创意价值转向审美判断、策展和人类作者权。",
        },
        tone: "wine",
      },
    ],
    findingSummary: {
      title: { en: "Career-Level Finding", zh: "模型最终说明了什么？" },
      body: {
        en: "Career resilience is not determined by AI exposure alone. It depends on whether human skills remain complementary, physically embedded, socially dependent, or transferable to higher-level judgment and orchestration.",
        zh: "职业韧性并不只由 AI 暴露程度决定，而取决于人类技能是否能与 AI 形成互补，是否依赖实体环境和社会互动，以及能否向更高层次的判断、协调与系统编排迁移。",
      },
      implication: {
        en: "The educational objective is therefore not simply to teach students how to use AI, but to redesign skill structures so that AI becomes a complement rather than a substitute.",
        zh: "因此，教育目标不应只是教学生使用 AI，而应重新设计技能结构，使 AI 从替代力量转化为互补力量。",
      },
    },
    coreInnovation: {
      title: { en: "An Endogenous Macro–Micro Feedback System", zh: "内生的宏微观反馈系统" },
      body: {
        en: "Curriculum structure is not treated as a passive background variable. Course-skill topology changes the AI–labor interaction coefficient, which changes employment trajectories; the resulting employment gap then drives the next round of policy and curriculum adjustment.",
        zh: "课程结构不再是被动背景变量。课程—技能拓扑改变 AI 与劳动之间的交互系数，交互系数进一步改变就业轨迹，而就业缺口又反向驱动下一轮政策和课程调整。",
      },
      loop: [
        { en: "Course-skill topology", zh: "课程—技能拓扑" },
        { en: "AI–labor coefficient", zh: "AI—劳动交互系数" },
        { en: "Employment trajectory", zh: "就业轨迹" },
        { en: "Employment gap", zh: "就业缺口" },
        { en: "Policy & curriculum adjustment", zh: "政策与课程调整" },
      ],
    },
    supportingContributions: [
      {
        title: { en: "Substitution–Augmentation–Immunity Diagnosis", zh: "替代—增强—免疫诊断" },
        body: {
          en: "A three-driver Tug-of-War mechanism explains why occupations with similar AI exposure can still follow very different employment trajectories.",
          zh: "三驱动力拉锯机制解释了为什么 AI 暴露程度相近的职业，仍可能形成完全不同的就业轨迹。",
        },
      },
      {
        title: { en: "Curriculum Reform as Network Rewiring", zh: "将课程改革表示为网络重连" },
        body: {
          en: "Educational reform is modeled as pruning vulnerable course-skill links and grafting high-potential bridge skills.",
          zh: "通过剪除高风险课程—技能连接，并嫁接具有增强潜力的桥接技能，对课程改革进行结构化建模。",
        },
      },
      {
        title: { en: "Uncertainty-Aware Policy Selection", zh: "面向不确定性的政策选择" },
        body: {
          en: "Monte Carlo simulation, entropy weighting, and VIKOR are combined to select balanced policies rather than maximizing a single objective.",
          zh: "通过 Monte Carlo 仿真、熵权法和 VIKOR，在多目标冲突下选择综合权衡方案，而不是只优化单一指标。",
        },
      },
    ],
    ablations: [
      {
        model: "M1",
        title: { en: "Naive Macro Model", zh: "朴素宏观模型" },
        body: { en: "Removing curriculum topology causes the model to incorrectly predict collapse in physically intensive occupations.", zh: "移除课程拓扑后，模型会错误预测实体劳动密集型职业崩溃。" },
      },
      {
        model: "M2",
        title: { en: "Passive Model", zh: "被动模型" },
        body: { en: "Disabling curriculum adaptation produces persistent structural unemployment and misses transition-enabling bridge skills.", zh: "关闭课程适应后，模型持续预测结构性失业，也找不到转型所需的桥接技能。" },
      },
      {
        model: "M3",
        title: { en: "Fully Coupled E-MMCAS", zh: "完整耦合 E-MMCAS" },
        body: { en: "Dynamic topology and DMPSO preserve immune occupations and enable adaptive transformation in vulnerable pathways.", zh: "动态拓扑与 DMPSO 保留免疫职业的稳定性，并帮助高风险路径完成适应性转型。" },
      },
    ],
    robustnessEvidence: [
      { en: "245 Monte Carlo scenarios", zh: "245 个 Monte Carlo 情景" },
      { en: "Sensitivity analysis", zh: "敏感性分析" },
      { en: "Confidence intervals", zh: "置信区间" },
      { en: "Parameter perturbation · stable policy orientation", zh: "参数扰动 · 政策方向保持稳定" },
    ],
    ranking: [
      { strategy: { en: "P1 — System-Orchestration Strategy", zh: "P1 — 系统编排策略" }, archetype: { en: "MIT Archetype", zh: "MIT 代表型" }, score: "0.212", rank: 1 },
      { strategy: { en: "P3 — Human-Judgment Transformation", zh: "P3 — 人类判断转型策略" }, archetype: { en: "RISD Archetype", zh: "RISD 代表型" }, score: "0.345", rank: 2 },
      { strategy: { en: "P2 — Physical-Skill Resilience", zh: "P2 — 实体技能韧性策略" }, archetype: { en: "Lincoln Tech Archetype", zh: "Lincoln Tech 代表型" }, score: "0.560", rank: 3 },
    ],
    strategies: [
      {
        institutionType: { en: "Research Universities", zh: "研究型大学" },
        policy: { en: "Moderate Expansion · Deep Restructuring", zh: "适度扩张 · 深度重构" },
        title: { en: "From Task Execution to System Orchestration", zh: "从任务执行转向系统编排" },
        body: { en: "Expand high-potential programs selectively, but only together with a substantial redesign of what students learn.", zh: "高潜力专业可以适度扩大培养规模，但扩张必须与课程的深层次重构同步进行。" },
        actions: [
          { en: "System architecture", zh: "系统架构" },
          { en: "Causal reasoning", zh: "因果推理" },
          { en: "Model diagnosis", zh: "模型诊断" },
          { en: "AI orchestration", zh: "AI 编排" },
          { en: "Interdisciplinary integration", zh: "跨学科整合" },
          { en: "Energy-efficient and responsible AI", zh: "节能与负责任的 AI 开发" },
        ],
      },
      {
        institutionType: { en: "Technical-Vocational Institutions", zh: "职业技术院校" },
        policy: { en: "Stable Scale · Targeted Reinforcement", zh: "规模稳定 · 定向强化" },
        title: { en: "Strengthen Physical and Technical Skills", zh: "强化实体技能优势" },
        body: { en: "Keep overall training capacity stable while adding AI to diagnosis, maintenance, and critical-infrastructure work.", zh: "保持总体培养规模稳定，在保留实体技能训练的同时，有针对性地强化诊断、维护与关键基础设施能力。" },
        actions: [
          { en: "Field operations", zh: "现场操作" },
          { en: "High-voltage systems", zh: "高压系统" },
          { en: "Liquid cooling and energy infrastructure", zh: "液冷与能源基础设施" },
          { en: "Smart-equipment maintenance", zh: "智能设备维护" },
          { en: "AI-assisted fault diagnosis", zh: "AI 辅助故障诊断" },
        ],
      },
      {
        institutionType: { en: "Arts Institutions", zh: "设计艺术类院校" },
        policy: { en: "Moderate Contraction · Structural Transformation", zh: "适度收缩 · 结构转型" },
        title: { en: "Shift from Production Skills to Judgment and Authorship", zh: "从作品生产转向意义、判断与作者责任" },
        body: { en: "Control conventional production-oriented enrollment while rebuilding the curriculum around judgment, direction, ethics, and authorship.", zh: "适度控制传统生产型专业的培养规模，并围绕判断、策划、伦理与作者责任推动课程体系结构性转型。" },
        actions: [
          { en: "Aesthetic judgment", zh: "审美判断" },
          { en: "Creative direction", zh: "创意策划" },
          { en: "Curation", zh: "策展" },
          { en: "Human–AI co-creation", zh: "人机协同创作" },
          { en: "Copyright and ethics", zh: "版权与伦理" },
          { en: "Human authorship", zh: "人类作者权" },
        ],
      },
    ],
    moduleInsights: {
      task1: {
        route: [
          { en: "O*NET task and skill data", zh: "O*NET 任务与技能数据" },
          { en: "Sentence-BERT semantic matching", zh: "Sentence-BERT 语义匹配" },
          { en: "Substitution · augmentation · immunity", zh: "替代 · 增强 · 韧性" },
          { en: "Supply, demand, and talent-gap forecast", zh: "供给、需求与人才缺口预测" },
        ],
        interpretation: {
          en: "The trajectories show three distinctly different futures. For data scientists, augmentation outweighs substitution: AI raises productivity and expands demand, creating a potential talent gap. Electricians remain comparatively stable because on-site physical work and practical experience resist end-to-end automation. Graphic designers face the strongest substitution pressure as routine image production and layout become easier to automate, so their value must move toward aesthetic judgment, creative direction, curation, ethics, and human authorship.",
          zh: "图中的三条职业轨迹并不指向同一个未来：数据科学家虽然有部分任务可被 AI 完成，但增强效应大于替代效应，需求继续增长并可能出现人才缺口；电工依赖现场操作、实体环境和实践经验，具有较强的实体技能韧性，市场需求总体保持稳定；平面设计师的常规修图、排版和图像生产更容易被替代，传统岗位需求下降，教育价值必须转向审美判断、创意策划、策展、伦理与人类作者权。",
        },
        conclusion: {
          en: "AI does not affect every occupation in the same way: data science is led by augmentation, electrical work remains stable through physical-skill resilience, and graphic design faces structural substitution pressure.",
          zh: "AI 并不会以相同方式影响所有职业：数据科学家主要受增强效应驱动，电工依靠实体技能韧性保持稳定，而平面设计师面临较强的结构性替代压力。",
        },
      },
      task2: {
        route: [
          { en: "Course–skill network", zh: "课程—技能网络" },
          { en: "AI–labor interaction coefficient", zh: "AI—劳动交互系数" },
          { en: "Labor-market evolution", zh: "劳动力市场演化" },
          { en: "Curriculum and enrollment feedback", zh: "课程与招生反馈" },
        ],
        explanation: {
          en: "E-MMCAS connects what institutions teach with whom the labor market needs. At the micro level, curriculum reform rewires the course–skill network; this changes the AI–labor interaction coefficient used by the macro Lotka–Volterra dynamics. The resulting demand, supply, and talent gaps then feed back into the next round of curriculum and enrollment decisions.",
          zh: "E-MMCAS 把“学校教什么”与“市场需要什么人”连接起来：微观层用课程—技能网络表示课程结构，课程重连会改变 AI—劳动交互系数；宏观层再用改进的 Lotka–Volterra 模型模拟职业需求、劳动力供给与人才缺口，市场结果随后反向驱动下一轮课程与招生调整。",
        },
        pathways: [
          {
            title: { en: "Research · Moderate Expansion + Deep Restructuring", zh: "研究型 · 适度扩张＋深度重构" },
            body: { en: "Increase capacity in augmentation-led fields while moving from basic code execution toward architecture, causal reasoning, model diagnosis, and AI orchestration.", zh: "对受 AI 增强的专业适度扩大培养规模，同时把课程从基础代码执行转向系统架构、因果推理、模型诊断与 AI 编排。" },
          },
          {
            title: { en: "Technical · Stable Scale + Targeted Reinforcement", zh: "职业技术型 · 规模稳定＋定向强化" },
            body: { en: "Preserve hands-on training and add AI-assisted diagnosis, smart equipment, and critical-infrastructure maintenance.", zh: "保持总体培养规模和实体操作训练，并定向增加 AI 辅助诊断、智能设备与关键基础设施维护。" },
          },
          {
            title: { en: "Arts · Moderate Contraction + Structural Transformation", zh: "设计艺术类 · 适度收缩＋结构转型" },
            body: { en: "Control production-oriented enrollment and shift the curriculum toward judgment, creative direction, curation, ethics, and authorship.", zh: "适度控制生产型专业规模，并把课程转向审美判断、创意策划、策展、伦理与作者责任。" },
          },
        ],
        conclusion: {
          en: "Static AI-exposure estimates do not determine long-term outcomes. Curriculum and skill structures matter because institutions can reshape whether AI substitutes for or complements graduates.",
          zh: "静态的 AI 暴露不是最终命运，课程与技能结构的适应能力才决定长期就业结果；高校可以通过课程与招生改革，主动改变学生与 AI 的关系。",
        },
        ablationConclusion: {
          en: "The two degraded variants and the complete reference isolate the mechanism: removing curriculum topology makes M1 misread physically resilient occupations, disabling adaptation leaves M2 in persistent structural unemployment, while the fully coupled M3 preserves resilient careers and enables vulnerable pathways to transform. Adaptability—not static exposure—determines long-run employability.",
          zh: "两个退化版本与完整对照共同说明了耦合机制的必要性：M1 去掉课程网络后会误判实体技能职业崩溃，M2 关闭课程适应后会持续产生结构性失业并遗漏桥接技能，完整的 M3 则能保持韧性职业稳定并推动高风险路径转型。决定长期就业能力的是适应性，而不是静态暴露。",
        },
      },
      task3: {
        route: [
          { en: "245 Monte Carlo scenarios", zh: "245 个 Monte Carlo 情景" },
          { en: "Six evaluation criteria", zh: "六项评价指标" },
          { en: "Entropy-based objective weights", zh: "熵权法客观赋权" },
          { en: "VIKOR compromise ranking", zh: "VIKOR 折衷排序" },
        ],
        interpretation: {
          en: "Under the current assumptions and six evaluation criteria, P1—the system-orchestration strategy represented by the MIT archetype—achieves the lowest VIKOR score and therefore the best overall compromise. The RISD-type transformation ranks second, showing that deeply restructured arts education still has room to develop; the Lincoln Tech-type strategy ranks third because it prioritizes stability and physical-skill resilience rather than rapid growth. Employability competitiveness (0.25) and ethical compliance (0.22) receive the highest entropy weights, showing that technical capability or innovation speed alone cannot define a robust policy. These are policy archetypes, not rankings of institutional quality.",
          zh: "在当前模型假设和六项评价指标下，以 MIT 原型表示的 P1 系统编排策略取得最低 VIKOR 得分，因此具有最佳综合折衷表现；RISD 类型的深度转型策略排名第二，说明设计教育完成结构转型后仍有发展空间；Lincoln Tech 类型策略排名第三，其重点是稳定性和实体技能韧性，而不是高速增长。就业竞争力（0.25）和伦理合规（0.22）获得最高熵权，说明技术能力或创新速度不能单独决定稳健政策。这里比较的是政策原型，不是院校质量排名。",
        },
        weights: [
          { label: { en: "Employability competitiveness", zh: "就业竞争力" }, value: "0.25" },
          { label: { en: "Ethical compliance", zh: "伦理合规" }, value: "0.22" },
        ],
        conclusion: {
          en: "System-orchestration education provides the best modeled compromise; employability and ethical compliance are the two most influential dimensions, so technical progress alone is not enough to define a robust policy.",
          zh: "在当前模型和六项指标下，系统编排型教育策略取得最佳综合折衷表现；就业竞争力与伦理合规是政策选择中最关键的两个维度，技术能力或创新速度不能单独决定最优政策。",
        },
      },
      task4: {
        conclusion: {
          en: "Research universities should educate system orchestrators, technical-vocational institutions should educate AI-augmented technical experts, and design and arts schools should educate creative practitioners with aesthetic judgment, ethical awareness, and authorship responsibility.",
          zh: "研究型大学应培养系统编排者，职业技术院校应培养 AI 增强型技术专家，设计艺术类院校应培养具备审美判断、伦理意识和作者责任的创意人才。",
        },
      },
      overall: {
        thesis: {
          en: "Generative AI changes how education should be organized. Higher education can reshape the relationship between students and AI through curriculum and enrollment reform instead of passively accepting occupational disruption.",
          zh: "生成式 AI 改变的不是教育是否重要，而是教育应当如何组织。高校可以通过课程与招生改革，主动改变学生与 AI 的关系，而不是被动接受职业市场受到的冲击。",
        },
        chain: [
          { en: "Different AI effects", zh: "AI 产生差异化影响" },
          { en: "Three career trajectories", zh: "形成三类职业轨迹" },
          { en: "Reject one-size-fits-all policy", zh: "拒绝统一教育政策" },
          { en: "Adjust curriculum and enrollment", zh: "调整课程与招生" },
          { en: "Generate three optimization paths", zh: "形成三种优化路径" },
          { en: "Select robust policies", zh: "筛选稳健政策" },
          { en: "Translate into institutional action", zh: "转化为院校行动" },
        ],
        findings: [
          { en: "Occupations experience substitution, augmentation, and physical-skill resilience in different proportions.", zh: "职业受到替代、增强和实体技能韧性三种不同力量的影响。" },
          { en: "Curriculum and enrollment reform can convert AI from a substitution pressure into a complementary capability.", zh: "课程与招生改革可以把 AI 从替代压力转化为互补能力。" },
        ],
      },
    },
    limitations: [
      { en: "The calibration is U.S.-centric and assumes relatively stable occupational task traits over the modeling horizon.", zh: "模型主要使用美国数据进行校准，并假设建模期内职业任务特征相对稳定。" },
      { en: "AI capability is simplified into a hardware-led trajectory and may miss algorithmic breakthroughs, adoption frictions, or societal resistance.", zh: "AI 能力被简化为硬件驱动的单变量趋势，可能遗漏算法突破、采用阻力与社会抵制。" },
    ],
    links: [{ label: "Back to Experience", href: "/experience" }],
  },
  {
    kind: "mini-program",
    id: "laowang-checkin",
    eyebrow: "Deployed Mini Program / Healthy Ageing",
    title: "Lao Wang Exercise Check-in Mini Program",
    subtitle:
      "Lao Wang Exercise Check-in is an age-friendly WeChat mini program for older adults. It combines exercise and health check-ins, metronome timing, streak tracking, AI health Q&A, community features, poster generation, and WeChat reminders. I built the product with Vue 3, uni-app, and a Node.js backend, and handled interaction design, full-stack development, and deployment. I continue to refine the interface with larger type, clear feedback, and shorter task flows.",
    tone: "systems",
    period: "2026.05 - 2026.06",
    role: "Independent Developer",
    keywords: ["WeChat Mini Program", "uni-app", "Vue 3", "Pinia", "Express", "Healthy Ageing"],
    qrCode: wangMiniProgramQr,
    proofCopy: {
      eyebrow: "DEPLOYED PRODUCT",
      title: "872 cumulative users in the recorded WeAnalysis snapshot",
      supporting: "The dated WeAnalysis snapshot reports cumulative and daily usage only.",
    },
    metricGroups: [
      {
        label: "WeAnalysis · Last 30 Days",
        source: "WeChat WeAnalysis",
        asOf: "2026-07-14",
        window: "2026-06-14 – 2026-07-13",
        metrics: [
          { label: "Cumulative users", value: "872", note: "cumulative WeChat visitor users" },
          { label: "Daily active users", value: "200+", note: "daily active users in the operating snapshot" },
          { label: "Average daily opens", value: "252", note: "average mini-program opens per day" },
          { label: "Average daily page views", value: "1,691", note: "average viewed pages per day" },
          { label: "Lao Wang AI conversations", value: "2,392", note: "recorded AI conversation count" },
        ],
      },
    ],
    oneLineSummary:
      "I designed, built, and deployed the product, including its interface, frontend, backend services, API integrations, and production environment.",
    screenshots: [
      { src: wangHomeScreenshot, alt: "Deployed Lao Wang mini-program home screen.", label: "Home", width: 1080, height: 2221, featured: true },
      { src: wangCommunityScreenshot, alt: "Feed-style Lao Wang exercise community in the deployed mini program.", label: "Community", width: 1080, height: 2238 },
      { src: wangPosterScreenshot, alt: "Check-in poster editor with image, caption, and sharing controls.", label: "Check-in poster", width: 1080, height: 2223 },
      { src: wangCheckinsScreenshot, alt: "Exercise, diet, blood-pressure, and blood-glucose check-in choices.", label: "Health check-ins", width: 1080, height: 2216 },
      { src: wangAiScreenshot, alt: "Lao Wang AI answering an exercise guidance question inside the deployed mini program.", label: "Lao Wang AI", width: 1080, height: 2220 },
    ],
    deploymentProof: ["Production API operating", "Core user journeys validated in production", "Age-friendly interaction refined through operation", "Admin and reminder services connected"],
    systemFlow: ["Older user", "Mini program", "Express API", "Check-in records", "Reminders + community"],
    featureBlocks: [
      {
        title: "Age-friendly interaction",
        body: "Large targets, simple navigation, warm green contrast, and short task paths reduce friction for older users.",
      },
      {
        title: "Exercise and health check-ins",
        body: "The mini program combines exercise timing with exercise, 16:8 diet, blood-pressure, and blood-glucose check-ins.",
      },
      {
        title: "Familiar community sharing",
        body: "After a check-in, users can generate a poster and copy for WeChat Moments or the in-app community, then share them through a familiar feed-style interface.",
      },
      {
        title: "Lao Wang AI workflow",
        body: "The assistant distinguishes app, general, and health-risk questions, retrieves confirmed product knowledge, applies safety boundaries, and streams a concise answer. It also supports poster and community-caption generation.",
        flow: ["Classify", "Retrieve", "Guardrails", "Generate", "Stream"],
      },
    ],
    links: [{ label: "Back to Engineering", href: "/engineering" }],
  },
  {
    kind: "mini-program",
    id: "jingjiang-platform",
    eyebrow: "Deployed Mini Program / Public-sector Data Platform",
    title: "Jingjiang Qianfan Jingfa University–Industry–Research–Application Platform / Mini Program",
    subtitle:
      "A mini program, API, and management system that makes university projects, regional coverage, policies, and challenge batches searchable and maintainable.",
    tone: "systems",
    period: "2026.04—2026.06",
    role: "End-to-end System Development and Data Governance",
    keywords: ["WeChat Mini Program", "Vue 3", "Express", "MySQL", "Project Map", "Data Governance"],
    qrCode: qianfanMiniProgramQr,
    proofCopy: {
      eyebrow: "DETAILED DATA",
      title: "",
      supporting: "",
    },
    metricGroups: [
      {
        label: "Public Catalogue Snapshot",
        source: "Public production API",
        asOf: "2026-07-13",
        metrics: [
          { label: "Provinces", value: "18", note: "enabled provinces with public projects" },
          { label: "Universities", value: "79", note: "enabled universities and institutes" },
          { label: "Public projects", value: "201", note: "currently visible project records" },
          { label: "Policies", value: "7", note: "public policy documents" },
          { label: "Challenge batches", value: "3", note: "published demand batches" },
          { label: "Listed demands", value: "39", note: "16 + 7 + 16 across three batches" },
        ],
      },
    ],
    batchBreakdown: [
      { label: "Batch 01", value: 16 },
      { label: "Batch 02", value: 7 },
      { label: "Batch 03", value: 16 },
    ],
    oneLineSummary:
      "I independently developed the mini program, backend API, administration system, and database for a live operational workflow. I also implemented batch imports, validation feedback, and production deployment.",
    screenshots: [
      {
        src: qianfanHomeScreenshot,
        alt: "Jingjiang platform home screen showing live province, university, project, and policy counts.",
        label: "Live mini-program home",
        width: 375,
        height: 811,
        featured: true,
      },
      {
        src: qianfanChallengeScreenshot,
        alt: "Challenge-batch screen showing the third batch, 16 demands, 13 companies, and published project values.",
        label: "Challenge batches",
        width: 430,
        height: 900,
      },
      {
        src: qianfanUniversitiesScreenshot,
        alt: "University and research-institute catalogue running in the current H5 build.",
        label: "University catalogue",
        width: 430,
        height: 900,
      },
      {
        src: qianfanProjectsScreenshot,
        alt: "Project catalogue showing university, province, and collaboration status fields.",
        label: "Project catalogue",
        width: 430,
        height: 900,
      },
    ],
    deploymentProof: ["Public production API", "Mini-program QR available", "Live data catalogue", "Import governance workflow"],
    systemFlow: ["Mini program", "Express API", "MySQL catalogue", "Admin dashboard", "Import + error rollback"],
    featureBlocks: [
      {
        title: "National project discovery",
        body: "Users browse collaboration coverage by province, university, and project instead of working through disconnected spreadsheets.",
      },
      {
        title: "Challenge matching",
        body: "Three published batches organize enterprise demands, participating organizations, and follow-up project information.",
      },
      {
        title: "Policy access",
        body: "Users can browse public policy documents through a dedicated mini-program library and PDF reader.",
      },
      {
        title: "Data import and validation",
        body: "The administration system supports bulk imports, validation feedback, error receipts, and reversible import tasks.",
      },
    ],
    links: [{ label: "Back to Engineering", href: "/engineering" }],
  },
];

export function getCaseStudy(id: string | undefined) {
  return caseStudies.find((study) => study.id === id);
}
