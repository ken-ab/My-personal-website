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
  challenge: {
    question: LocalizedText;
    tasks: Array<{ label: string; title: LocalizedText; body: LocalizedText }>;
  };
  conciseAnswer: { title: LocalizedText; body: LocalizedText };
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
  strategies: Array<{ institutionType: LocalizedText; title: LocalizedText; body: LocalizedText }>;
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
    subtitle: "A first-author comparative review of seven representative Mixture-of-Experts systems and literature-reported performance-efficiency evidence.",
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
      "A first-author comparative review of seven representative Mixture-of-Experts systems, synthesizing architectural choices and literature-reported performance–efficiency evidence.",
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
      positioningNote: "A first-author comparative review of seven representative Mixture-of-Experts systems, synthesizing architectural choices and literature-reported performance–efficiency evidence.",
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
        evidenceNote: "Benchmark values were collected from original model papers, technical reports and public evaluation results. The models were not reproduced under one fully unified evaluation environment. The comparison is therefore intended to reveal broad performance–efficiency patterns rather than serve as a strict leaderboard.",
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
      "This multi-agent financial research system is built with LangGraph, MCP, and ReAct. An independent MCP Server exposes eight financial-data tool families to four specialist agents for parallel fundamental, technical, valuation, and news analysis. A Summary Agent produces a structured Markdown report, an Evaluator Agent checks completeness and task alignment, and a Reflection Agent may issue one bounded replanning instruction before the final report is produced.",
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
      "Experimental side track: Qwen LoRA scripts explore news sentiment and risk scoring, but they are not presented as a mandatory stage in the core LangGraph runtime.",
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
        caption: "Two prediction paths model medal-winning and first-medal countries, followed by host- and coach-effect analysis.",
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
    subtitle: "A review paper on technological evolution, challenges, and industrial applications.",
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
    titleZh: "竞争还是共生：面向 AI 时代教育政策的宏微观演化框架",
    subtitleZh: "一个连接任务级 AI 暴露、劳动力市场演化、课程网络重构与院校政策选择的宏微观建模框架。",
    tone: "career",
    period: "02/2026",
    role: "Technical Writing Lead & Framework Integrator",
    keywords: ["MCM 2026", "Problem F", "O*NET", "E-MMCAS", "DMPSO", "VIKOR"],
    award: "Meritorious Winner (M Award)",
    awardZh: "Meritorious Winner · M 奖",
    problemLabel: "Problem F / AI-era post-secondary education",
    reportUrl: mcmReportUrl,
    oneLineSummary:
      "The project diagnoses how generative AI reshapes three careers, couples curriculum reform with labor-market evolution, and turns robust policy rankings into institution-specific action.",
    contribution: {
      period: { en: "February 2026", zh: "2026 年 2 月" },
      role: { en: "Technical Writing Lead & Framework Integrator", zh: "论文主笔 / 框架整合" },
      body: {
        en: "Led the report structure and technical narrative, integrated the four competition tasks into a unified macro–micro framework, and completed the core writing, figure organization, result interpretation, and final polishing of the submission.",
        zh: "负责论文整体结构与技术叙事，将四项比赛任务、模型公式、仿真结果和院校政策建议整合为统一的宏微观框架，并完成核心正文写作、图表编排、结果解释与全文润色。",
      },
    },
    facts: [
      { value: "3", label: { en: "Career Trajectories", zh: "类职业轨迹" }, note: { en: "Data Scientist, Electrician, and Graphic Designer", zh: "数据科学家、电工和平面设计师" } },
      { value: "245", label: { en: "Monte Carlo Scenarios", zh: "个蒙特卡洛情景" }, note: { en: "AI capability and policy uncertainty", zh: "AI 能力与政策不确定性" } },
      { value: "6", label: { en: "Policy Criteria", zh: "项政策指标" }, note: { en: "Employability, adaptability, innovation, interdisciplinarity, environment, and ethics", zh: "就业、适应、创新、跨学科、环境与伦理" } },
      { value: "3", label: { en: "Institutional Archetypes", zh: "类院校原型" }, note: { en: "Research, technical-vocational, and arts education", zh: "研究型、职业技术型与艺术教育" } },
    ],
    challenge: {
      question: {
        en: "How should post-secondary institutions redesign curricula and enrollment policies when generative AI substitutes some occupational tasks, augments others, and leaves physically or socially embedded work relatively immune?",
        zh: "当生成式 AI 对不同职业产生替代、增强与免疫三种不同作用时，高等教育机构应如何调整课程与招生政策，才能提升毕业生的长期就业能力与职业韧性？",
      },
      tasks: [
        {
          label: "Task 1",
          title: { en: "Diagnose Career Exposure", zh: "识别职业 AI 暴露" },
          body: {
            en: "Select representative careers from STEM, trade, and arts, analyze their task structures and skill requirements, and forecast how generative AI changes labor demand.",
            zh: "选择数据科学家、电工和平面设计师三类代表性职业，分析其任务结构和技能需求，并预测生成式 AI 如何改变劳动力需求。",
          },
        },
        {
          label: "Task 2",
          title: { en: "Simulate Educational Adaptation", zh: "模拟教育系统调整" },
          body: {
            en: "Build a dynamic policy model to evaluate how curriculum reform and enrollment decisions affect long-term employment outcomes.",
            zh: "建立动态政策模型，评估课程改革和招生决策如何影响长期就业结果。",
          },
        },
        {
          label: "Task 3",
          title: { en: "Select Robust Policies", zh: "选择稳健政策" },
          body: {
            en: "Evaluate competing policies under uncertainty across employability, adaptability, innovation, interdisciplinarity, environmental impact, and ethical compliance.",
            zh: "在就业能力、适应性、创新、跨学科合作、环境影响和伦理合规六项指标下，对不确定环境中的政策进行评价。",
          },
        },
        {
          label: "Task 4",
          title: { en: "Translate Models into Action", zh: "将模型转化为行动" },
          body: {
            en: "Convert optimized outcomes into actionable strategies for research universities, technical-vocational institutions, and arts schools.",
            zh: "将优化结果转化为研究型大学、职业技术院校和艺术院校可以执行的教育策略。",
          },
        },
      ],
    },
    conciseAnswer: {
      title: { en: "Our Answer in One Sentence", zh: "我们的一句话回答" },
      body: {
        en: "We connect task-level AI exposure, labor-market evolution, curriculum rewiring, and robust policy selection in one macro–micro feedback framework.",
        zh: "我们将任务级 AI 暴露、劳动力市场演化、课程网络重构和稳健政策选择连接成一个宏微观反馈系统。",
      },
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
      title: { en: "What the Model Ultimately Shows", zh: "模型最终说明了什么？" },
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
        title: { en: "From Task Execution to System Orchestration", zh: "从任务执行转向系统编排" },
        body: { en: "Shift from low-level code implementation toward system architecture, causal reasoning, AI orchestration, and energy-aware development.", zh: "课程应从低层代码实现转向系统架构、因果推理、AI 编排和节能开发。" },
      },
      {
        institutionType: { en: "Technical-Vocational Institutions", zh: "职业技术院校" },
        title: { en: "Reinforce the Physical Stronghold", zh: "强化实体技能优势" },
        body: { en: "Preserve physical-skill immunity while integrating AI-assisted diagnostics, infrastructure maintenance, and advanced technical systems.", zh: "保留实体技能免疫优势，同时引入 AI 辅助诊断、基础设施维护和先进技术系统训练。" },
      },
      {
        institutionType: { en: "Arts Institutions", zh: "艺术院校" },
        title: { en: "From Artifact Production to Meaning and Authorship", zh: "从作品生产转向意义与作者权" },
        body: { en: "Shift value from routine artifact production toward aesthetic judgment, curation, ethics, intellectual property, and human authorship.", zh: "将价值从常规作品生产转向审美判断、策展、伦理、知识产权和人类作者权。" },
      },
    ],
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
      "Lao Wang Exercise Check-in is an age-friendly WeChat mini program for older adults, offering a simple and warm experience for daily exercise tracking and health companionship. It integrates exercise check-ins, metronome timing, streak statistics, AI health Q&A, community interaction, check-in poster generation, and WeChat reminders. Built with Vue 3 and uni-app with a Node.js backend, it covers the complete path from product design and full-stack development to production deployment.",
    tone: "systems",
    period: "2026.05 - 2026.06",
    role: "Independent Development",
    keywords: ["WeChat Mini Program", "uni-app", "Vue 3", "Pinia", "Express", "Healthy Ageing"],
    qrCode: wangMiniProgramQr,
    proofCopy: {
      eyebrow: "DEPLOYED PRODUCT",
      title: "872 cumulative users in the recorded operating snapshot",
      supporting: "The dated WeAnalysis snapshot reports reach and daily usage without inferring user sentiment.",
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
      "Independently delivered the complete product—from interaction design and frontend implementation to backend services, API integration, and production deployment.",
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
        body: "Large targets, restrained navigation, warm green contrast, and short task paths reduce friction for older users.",
      },
      {
        title: "Exercise + multi-mode check-ins",
        body: "One product links exercise timing with exercise, 16:8 diet, blood-pressure, and blood-glucose check-ins.",
      },
      {
        title: "Familiar community sharing",
        body: "After a check-in, users can generate a polished poster and Moments-ready or community-ready copy, then share through a familiar feed-style experience.",
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
      "A mini program, API, and management system that makes university projects, regional coverage, policies, and challenge batches searchable and governable.",
    tone: "systems",
    period: "2026.04—2026.06",
    role: "End-to-end System Development & Data Governance",
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
      "Based on real operational requirements, I independently developed the mini program, backend API, administration system, and database, including batch import, validation feedback, and production deployment.",
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
        body: "Public policy documents are exposed through a dedicated mini-program library and PDF reading flow.",
      },
      {
        title: "Governed data operations",
        body: "The administration system supports bulk imports, validation feedback, error receipts, and reversible import tasks.",
      },
    ],
    links: [{ label: "Back to Engineering", href: "/engineering" }],
  },
];

export function getCaseStudy(id: string | undefined) {
  return caseStudies.find((study) => study.id === id);
}
