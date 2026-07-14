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
import type { PortfolioLink, Tone } from "./portfolio";

type MethodStep = {
  label: string;
  title: string;
  body: string;
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
};

export type CompetitionProjectCaseStudy = CaseStudyBase & {
  kind: "competition-project";
  keywords: string[];
  award: string;
  problemLabel: string;
  reportUrl: string;
  facts: Array<{ value: string; label: string; note: string }>;
  problemAddressed: string[];
  innovations: string[];
  trajectoryVisual: { src: string; alt: string; caption: string };
  careerResults: Array<{ title: string; signal: string; body: string; tone: "blue" | "green" | "wine" }>;
  ablations: Array<{ model: string; title: string; body: string }>;
  ranking: Array<{ institution: string; score: string; rank: number }>;
  strategies: Array<{ institution: string; archetype: string; body: string }>;
  limitations: string[];
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
    title: "Exploring and Enhancing Advanced MoE Models: From Deepspeed-MoE to DeepSeek-V3",
    subtitle: "A first-author conference paper reviewing advanced Mixture-of-Experts architectures and their performance-efficiency trade-offs.",
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
      "This paper studies how Mixture-of-Experts models use sparse expert routing to maintain strong large-language-model performance under computational constraints.",
    visuals: [
      {
        src: moeTimelineFigure,
        alt: "Timeline of major Mixture-of-Experts models from 2017 to 2024.",
        caption: "The evolution of sparse MoE systems across language, vision, multimodal learning, and recommendation.",
      },
    ],
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
    problemAddressed: [
      "Dense Transformers activate the full parameter set for every token, making inference increasingly expensive as models scale.",
      "Modern MoE systems differ in routing, expert organization, and benchmark behavior, but those trade-offs are difficult to compare in one view.",
    ],
    innovations: [
      "Builds a unified Token to Router to Top-k Experts to Weighted Aggregation view across Switch Transformer, DeepSpeed-MoE, PR-MoE, Mixtral, GLaM, DBRX, and DeepSeek-V3.",
      "Synthesizes five benchmark families and identifies sparse activation, pyramid-residual layouts, adaptive expert sizing, and shared-expert isolation as efficiency mechanisms; the paper reports at least 50% lower inference computation while preserving performance.",
    ],
    links: [{ label: "Back to Research", href: "/research" }],
  },
  {
    kind: "agent-project",
    id: "finance-agent",
    visualization: "finance-agent",
    eyebrow: "Project Brief / Agentic AI System",
    title: "Finance-Agent: A Multi-Agent System for A-share Investment Research",
    subtitle: "A multi-agent prototype that decomposes A-share research into specialist analysis branches and produces traceable Markdown reports.",
    tone: "systems",
    period: "2025.10 - 2026.01",
    role: "Project Builder",
    keywords: ["LangGraph", "MCP", "Multi-Agent", "ReAct", "Evaluation", "Reflection"],
    githubUrl: "https://github.com/ken-ab/Finance-Agent",
    oneLineSummary:
      "Finance-Agent addresses one-shot financial analysis limitations by splitting A-share research into parallel specialist agents, then using evaluation and reflection to improve report completeness.",
    facts: [
      { value: "4", label: "Parallel specialists", note: "Fundamental, technical, valuation, and news analysis" },
      { value: "8", label: "MCP tool families", note: "Market, reports, indices, macro, analysis, and news access" },
      { value: "1", label: "Bounded replan", note: "One reflection round before the workflow terminates" },
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
    tone: "career",
    period: "02/2026",
    role: "Mathematical Modeling Project",
    keywords: ["MCM 2026", "Problem F", "O*NET", "E-MMCAS", "DMPSO", "VIKOR"],
    award: "Meritorious Winner (M Award)",
    problemLabel: "Problem F / AI-era post-secondary education",
    reportUrl: mcmReportUrl,
    oneLineSummary:
      "The project models whether AI substitutes for or complements a career, then rewires curricula and ranks robust education policies for research, vocational, and arts institutions.",
    facts: [
      { value: "3", label: "Career trajectories", note: "STEM, trade, and arts pathways" },
      { value: "245", label: "Monte Carlo scenarios", note: "AI and policy uncertainty" },
      { value: "6", label: "Evaluation criteria", note: "Employability through ethics" },
      { value: "3", label: "Institutional archetypes", note: "Pioneer, pragmatic, transformative" },
    ],
    problemAddressed: [
      "Task-level AI exposure, employment dynamics, curriculum design, and multi-objective policy evaluation are usually modeled in isolation.",
      "Post-secondary institutions need differentiated, uncertainty-aware strategies rather than one universal response to generative AI.",
    ],
    innovations: [
      "Defines a Tug-of-War mechanism with substitution, augmentation, and immunity drivers to explain heterogeneous career exposure.",
      "Couples modified Lotka-Volterra employment dynamics with a course-skill bipartite network in the E-MMCAS framework.",
      "Uses pruning, grafting, and bi-level DMPSO to search curriculum and enrollment policy trajectories.",
      "Combines 245 Monte Carlo scenarios, entropy weighting, and VIKOR, then generalizes policies through structural institutional similarity.",
    ],
    trajectoryVisual: {
      src: mcmCareerTrajectories,
      alt: "Original MCM report figures comparing labor supply-demand dynamics and workforce-gap projections for data scientists, electricians, and graphic designers.",
      caption: "Original Figures 3 and 4 from the report: three careers diverge as augmentation, physical immunity, and substitution become dominant.",
    },
    careerResults: [
      {
        title: "Data Scientist",
        signal: "Augmentation-led growth",
        body: "High augmentation (about 0.9) outweighs substantial semantic exposure, creating rapid demand growth and a widening talent gap.",
        tone: "blue",
      },
      {
        title: "Electrician",
        signal: "Robust steady state",
        body: "Physical immunity (about 0.95) acts as a structural firewall, keeping the occupation stable under AI volatility.",
        tone: "green",
      },
      {
        title: "Graphic Designer",
        signal: "Structural displacement",
        body: "High substitution (about 0.9) and low immunity (about 0.2) create declining demand and bifurcation risk.",
        tone: "wine",
      },
    ],
    ablations: [
      {
        model: "M1",
        title: "Naive macro model",
        body: "Removing curriculum topology causes the model to incorrectly predict collapse in physically intensive occupations.",
      },
      {
        model: "M2",
        title: "Passive model",
        body: "Disabling curriculum adaptation produces persistent structural unemployment and misses transition-enabling bridge skills.",
      },
      {
        model: "M3",
        title: "Fully coupled E-MMCAS",
        body: "Dynamic topology and DMPSO preserve immune occupations and enable adaptive transformation in vulnerable pathways.",
      },
    ],
    ranking: [
      { institution: "MIT", score: "0.212", rank: 1 },
      { institution: "RISD", score: "0.345", rank: 2 },
      { institution: "Lincoln Tech", score: "0.560", rank: 3 },
    ],
    strategies: [
      {
        institution: "MIT",
        archetype: "Pioneer",
        body: "Move from low-level coding toward system architecture, causal reasoning, energy-aware development, and AI orchestration.",
      },
      {
        institution: "Lincoln Tech",
        archetype: "Pragmatic",
        body: "Reinforce physical-skill immunity with AI-assisted diagnostics and critical-infrastructure maintenance.",
      },
      {
        institution: "RISD",
        archetype: "Transformative",
        body: "Shift from artifact production toward aesthetic judgment, curation, ethics, and human authorship.",
      },
    ],
    limitations: [
      "The calibration is U.S.-centric and assumes stable task traits over the modeling horizon.",
      "AI capability is simplified into a hardware-led trajectory and may miss algorithmic breakthroughs or societal resistance.",
    ],
    links: [{ label: "Back to Experience", href: "/experience" }],
  },
  {
    kind: "mini-program",
    id: "laowang-checkin",
    eyebrow: "Deployed Mini Program / Healthy Ageing",
    title: "Lao Wang Exercise Check-in Mini Program",
    subtitle:
      "An age-friendly WeChat mini program that turns exercise, diet, and vital-sign routines into low-friction daily check-ins, records, reminders, and community support.",
    tone: "systems",
    period: "2026.05 - 2026.06",
    role: "Product & Full-stack Development",
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
          { label: "Average daily visitors", value: "127", note: "average unique visitors per day" },
          { label: "Average daily opens", value: "252", note: "average mini-program opens per day" },
          { label: "Average daily page views", value: "1,691", note: "average viewed pages per day" },
        ],
      },
    ],
    oneLineSummary:
      "Built end to end with Codex-assisted web coding—from product structure and interaction design to API integration and deployment—turning an original idea into an independently shipped mini program.",
    screenshots: [
      { src: wangHomeScreenshot, alt: "Deployed Lao Wang mini-program home screen.", label: "Home", width: 1080, height: 2221, featured: true },
      { src: wangCommunityScreenshot, alt: "Feed-style Lao Wang exercise community in the deployed mini program.", label: "Community", width: 1080, height: 2238 },
      { src: wangPosterScreenshot, alt: "Check-in poster editor with image, caption, and sharing controls.", label: "Check-in poster", width: 1080, height: 2223 },
      { src: wangCheckinsScreenshot, alt: "Exercise, diet, blood-pressure, and blood-glucose check-in choices.", label: "Health check-ins", width: 1080, height: 2216 },
      { src: wangAiScreenshot, alt: "Lao Wang AI answering an exercise guidance question inside the deployed mini program.", label: "Lao Wang AI", width: 1080, height: 2220 },
    ],
    deploymentProof: ["Production API deployed", "Mini-program QR available", "Live WeChat screens captured", "Admin and reminder services"],
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
    title: "Jingjiang University–Industry Cooperation Platform",
    subtitle:
      "A mini program, API, and management system that makes university projects, regional coverage, policies, and challenge batches searchable and governable.",
    tone: "systems",
    period: "2026.04 - 2026.06",
    role: "Product, Data Pipeline & Full-stack Development",
    keywords: ["WeChat Mini Program", "Vue 3", "Express", "MySQL", "Project Map", "Data Governance"],
    qrCode: qianfanMiniProgramQr,
    proofCopy: {
      eyebrow: "DELIVERY COMPLETE",
      title: "Delivered and in operation",
      supporting: "The public catalogue and dated production metrics verify the completed delivery.",
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
      "A deployed data product that turns fragmented university–industry collaboration records into a searchable mini program and an auditable administration workflow.",
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
