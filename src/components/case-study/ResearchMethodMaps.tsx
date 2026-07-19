import type { ReactNode } from "react";
import { useLanguage, type Language } from "../../i18n/LanguageContext";

type MethodMapKey = "bamboo" | "digital-trade" | "moe" | "robot-vision";

const researchMapZh: Record<string, string> = {
  "animated route": "动态路线",
  "Experimental connection data is ranked, compared across eight models, optimized with five search strategies, and returned to structural design as a feedback loop.": "连接试验数据经过综合排序、八模型比较和五种搜索策略优化，最终以反馈环回到结构设计。",
  "EXPERIMENT → MODEL SELECTION → DESIGN FEEDBACK": "试验 → 模型选择 → 设计反馈",
  "From 51 specimens to an optimized connection classifier": "从 51 个试件到优化后的连接分类器",
  "STRUCTURAL TESTS": "结构试验",
  "51 specimens": "51 个试件",
  "249 measurement records": "249 组测量记录",
  "Factor": "因子",
  "analysis": "分析",
  "REDUCE + RANK": "降维 + 排序",
  "comprehensive ranking": "综合排序",
  "COMPARE 8 MODELS": "比较 8 个模型",
  "selected": "入选",
  "BEST BASE MODEL": "最佳基础模型",
  "≈61% test accuracy": "测试准确率约 61%",
  "TUNE 5 WAYS": "5 种调参方法",
  "5-fold CV / 70:30": "5 折交叉验证 / 70:30",
  "BEST TUNER": "最佳调参器",
  "≈67% reported": "论文报告约 67%",
  "CONNECTION TYPE": "连接类型",
  "prediction → specimen choice → design feedback": "预测 → 试件选择 → 设计反馈",
  "The review organizes robot vision as a system map: deployment architectures enable perception capabilities, which are shaped by practical constraints and matched with solution directions before industrial deployment.": "综述将机器人视觉组织为系统地图：部署架构支撑感知能力，实际约束塑造技术选择，再匹配解决方向并进入工业应用。",
  "SYSTEM TAXONOMY → PERCEPTION → DEPLOYMENT": "系统分类 → 感知能力 → 工业部署",
  "A technology map for vision-based robotics": "面向视觉机器人的技术地图",
  "VISION SYSTEM": "视觉系统",
  "CORE CAPABILITY": "核心能力",
  "DEPLOYMENT CHALLENGE": "部署挑战",
  "SOLUTION DIRECTION": "解决方向",
  "Global vision": "全局视觉",
  "external workspace view": "外部工作空间视角",
  "Local embedded": "本地嵌入式视觉",
  "on-robot perception": "机器人端感知",
  "Cloud–edge hybrid": "云边协同",
  "distributed inference": "分布式推理",
  "Object Detection": "目标检测",
  "objects + localization": "目标 + 定位",
  "3D Reconstruction": "三维重建",
  "geometry + spatial state": "几何 + 空间状态",
  "Dynamic Scene": "动态场景",
  "Understanding": "理解",
  "motion + context": "运动 + 上下文",
  "Real-time": "实时性",
  "latency / compute budget": "延迟 / 算力预算",
  "Data Scarcity": "数据稀缺",
  "labels / domain shift": "标注 / 领域偏移",
  "Multimodal Fusion": "多模态融合",
  "vision + language + control": "视觉 + 语言 + 控制",
  "Lightweight Models": "轻量模型",
  "efficient edge inference": "高效边缘推理",
  "Federated Learning": "联邦学习",
  "privacy-aware learning": "隐私感知学习",
  "Neural–Symbolic": "神经符号",
  "Systems": "系统",
  "rules meet perception": "规则与感知融合",
  "OUTPUT": "输出",
  "Industrial robots": "工业机器人",
  "Aggregate": "综合",
  "Commonsense": "常识",
  "Code": "代码",
  "Math": "数学",
  "COMPARATIVE REVIEW": "比较性综述",
  "LITERATURE SCOPE → ARCHITECTURE TAXONOMY → EVIDENCE SYNTHESIS → FINDINGS & LIMITATIONS": "文献范围 → 架构分类 → 证据综合 → 结论与局限",
  "Review Scope and Comparative Framework": "综述范围与比较框架",
  "The review selects seven representative MoE systems, organizes architectural choices, separates qualitative and quantitative evidence, and synthesizes literature-reported findings with explicit limitations.": "本文选取七类代表性 MoE 系统，整理架构选择，区分定性与定量证据，并在明确研究局限的前提下综合文献报告结果。",
  "LITERATURE SCOPE": "文献范围",
  "7 representative MoE systems": "7 类代表性 MoE 系统",
  "ARCHITECTURE TAXONOMY": "架构分类",
  "Routing strategy": "路由策略",
  "Expert granularity": "专家粒度",
  "Active parameters": "激活参数量",
  "Residual / shared experts": "残差与共享专家",
  "Training and inference systems": "训练和推理系统",
  "EVIDENCE SEPARATION": "证据区分",
  "Architecture-focused review": "架构分析组",
  "Reviewed for architectural and system innovations, but excluded from the main quantitative table because comparable benchmark evidence was unavailable.": "重点分析架构和系统创新，但由于缺少可比的 Benchmark 结果，未进入主要定量比较表。",
  "Benchmark-supported synthesis": "可进行基准综合的模型组",
  "Dense and proprietary baselines": "密集模型与闭源模型基线",
  "Available literature-reported results are synthesized across multiple benchmark families.": "将已有文献中公开的结果按照多个基准维度进行综合整理。",
  "CROSS-PAPER BENCHMARK SYNTHESIS": "跨论文基准综合",
  "Literature-reported results": "文献报告结果",
  "World Knowledge": "世界知识",
  "FINDINGS AND LIMITATIONS": "结论与局限",
  "Sparse activation improves parameter efficiency": "稀疏激活提高参数效率",
  "Fine-grained and shared experts strengthen specialization": "细粒度与共享专家增强专业化",
  "Code and math show strong MoE performance patterns": "MoE 在代码和数学任务中表现突出",
  "Evaluation settings differ across source papers": "不同来源论文的测试设置并不完全一致",
  "BACKGROUND ONLY": "背景知识",
  "INPUT TOKENS → ROUTER / GATE → TOP-K EXPERTS → AGGREGATION": "输入 TOKEN → 路由器 / 门控 → TOP-K 专家 → 聚合",
  "Background: How Sparse MoE Routing Works": "背景知识：稀疏 MoE 如何工作",
  "This diagram illustrates a generic Top-k sparse routing mechanism. It is provided as background knowledge and does not represent a new architecture proposed in this paper.": "该图用于解释一般性的 Top-k 稀疏路由机制，仅作为背景知识，并非本文提出的新模型架构。",
  "INPUT": "输入",
  "Token representations": "Token 表征",
  "ROUTER / GATE": "路由器 / 门控",
  "Score experts and select Top-k": "专家评分并选择 Top-k",
  "EXPERT BANK · TOP-K ACTIVE": "专家库 · 激活 TOP-K",
  "Generic sparse selection": "通用稀疏选择",
  "AGGREGATION": "聚合",
  "Weighted expert outputs": "专家输出加权",
  "The paper combines frontier estimation, machine-learning forecasting, and two mediation paths to explain and project digital-service export potential across Belt and Road countries.": "研究结合前沿估计、机器学习预测和两条中介路径，解释并预测“一带一路”国家的数字服务出口潜力。",
  "PANEL DATA → FRONTIER ESTIMATION → MEDIATION + FORECAST": "面板数据 → 前沿估计 → 中介 + 预测",
  "Three analytical paths for estimating export potential": "三条分析路线，一个出口潜力决策系统",
  "PANEL INPUT": "面板输入",
  "countries": "个国家",
  "2013–2021 · bilateral data": "2013–2021 · 双边数据",
  "MAIN MODEL": "主模型",
  "one-step frontier estimation": "一步法前沿估计",
  "ESTIMATE": "估计",
  "Trade efficiency": "贸易效率",
  "+ export potential": "+ 出口潜力",
  "efficiency + untapped potential": "效率 + 未释放潜力",
  "FORECAST LANE · RFE → XGBOOST → GA → 2022–2028": "预测路线 · RFE → XGBOOST → GA → 2022–2028",
  "retain key variables": "保留关键变量",
  "non-linear forecast": "非线性预测",
  "Genetic Algorithm": "遗传算法",
  "hyperparameter search": "超参数搜索",
  "forecast": "预测",
  "DEI / openness trajectories": "DEI / 开放度轨迹",
  "MEDIATION PATHS": "中介路径",
  "Digital Economy": "数字经济",
  "Index": "指数",
  "exporter-side development": "出口国发展水平",
  "Service value-added": "服务业增加值",
  "share": "占比",
  "partial mediation": "部分中介",
  "Digital Technology": "数字技术",
  "full mediation": "完全中介",
  "DIGITAL": "数字",
  "SERVICE": "服务",
  "EXPORTS": "出口",
  "Infrastructure": "数字基础设施",
  "Facilitation": "贸易便利化",
  "Integration": "区域协同",
  "policy directions": "政策方向",
};

function researchText(language: Language, text: string) {
  return language === "zh" ? researchMapZh[text] ?? text : text;
}

export function ResearchMethodMap({ kind }: { kind: MethodMapKey }) {
  if (kind === "bamboo") return <BambooMethodMap />;
  if (kind === "robot-vision") return <RobotVisionMethodMap />;
  if (kind === "moe") return <MoeMethodMap />;
  return <DigitalTradeMethodMap />;
}

type FrameProps = {
  children: ReactNode;
  description?: string;
  eyebrow: string;
  figureClass: string;
  status?: string;
  title: string;
};

function MethodMapFrame({ children, description, eyebrow, figureClass, status, title }: FrameProps) {
  const { language } = useLanguage();
  const accessibleDescription = description ?? title;
  return (
    <figure className={`research-method-map ${figureClass}`}>
      <header className="research-map-header">
        <div>
          <span>{researchText(language, eyebrow)}</span>
          <strong>{researchText(language, title)}</strong>
        </div>
        <span className={`research-map-live${status ? " is-review" : ""}`}><i aria-hidden="true" /> {researchText(language, status ?? "animated route")}</span>
      </header>
      <div className="research-map-viewport" role="img" aria-label={researchText(language, accessibleDescription)}>
        {children}
      </div>
      {description ? <figcaption>{researchText(language, description)}</figcaption> : null}
    </figure>
  );
}

function MapDefs({ accent, id }: { accent: string; id: string }) {
  return (
    <defs>
      <pattern height="28" id={`${id}-grid`} patternUnits="userSpaceOnUse" width="28">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeOpacity="0.065" />
      </pattern>
      <marker id={`${id}-arrow`} markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
        <path d="M0,0 L8,4 L0,8 Z" fill={accent} />
      </marker>
      <filter height="130%" id={`${id}-glow`} width="130%" x="-15%" y="-15%">
        <feGaussianBlur result="blur" stdDeviation="4" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
  );
}

type NodeProps = {
  detail?: string;
  height?: number;
  label: string | string[];
  role?: string;
  tone?: "accent" | "gold" | "green" | "neutral" | "wine";
  width?: number;
  x: number;
  y: number;
};

function RouteNode({ detail, height = 106, label, role, tone = "accent", width = 168, x, y }: NodeProps) {
  const { language } = useLanguage();
  const lines = Array.isArray(label) ? label : [label];
  return (
    <g className={`research-route-node is-${tone}`} transform={`translate(${x} ${y})`}>
      <rect height={height} rx="20" width={width} />
      {role ? <text className="route-node-role" x="18" y="24">{researchText(language, role)}</text> : null}
      <text className="route-node-title" x="18" y={role ? 51 : 38}>
        {lines.map((line, index) => (
          <tspan key={line} x="18" y={(role ? 51 : 38) + index * 19}>{researchText(language, line)}</tspan>
        ))}
      </text>
      {detail ? <text className="route-node-detail" x="18" y={height - 17}>{researchText(language, detail)}</text> : null}
    </g>
  );
}

function FlowPath({ d, id, tone = "accent" }: { d: string; id: string; tone?: string }) {
  return (
    <>
      <path className={`research-flow-line is-${tone} is-shadow`} d={d} />
      <path className={`research-flow-line is-${tone}`} d={d} markerEnd={`url(#${id}-arrow)`} />
    </>
  );
}

function FlowDot({ begin, d, tone = "accent" }: { begin?: string; d: string; tone?: string }) {
  return (
    <circle className={`research-flow-dot is-${tone}`} r="5">
      <animateMotion begin={begin} dur="5.8s" path={d} repeatCount="indefinite" />
    </circle>
  );
}

function SmallPill({ best, label, tone, x, y }: { best?: boolean; label: string; tone?: string; x: number; y: number }) {
  const { language } = useLanguage();
  return (
    <g className={`research-small-pill${best ? " is-best" : ""}${tone ? ` is-${tone}` : ""}`}>
      <rect height="31" rx="12" width="112" x={x} y={y} />
      <text x={x + 11} y={y + 20}>{researchText(language, label)}</text>
    </g>
  );
}

function BambooMethodMap() {
  const { language } = useLanguage();
  const t = (text: string) => researchText(language, text);
  const route = "M196 252 H244 H426 H444 H700 H718 H922 H940 H1095 H1112 H1260";
  return (
    <MethodMapFrame
      description="Experimental connection data is ranked, compared across eight models, optimized with five search strategies, and returned to structural design as a feedback loop."
      eyebrow="EXPERIMENT → MODEL SELECTION → DESIGN FEEDBACK"
      figureClass="is-bamboo"
      title="From 51 specimens to an optimized connection classifier"
    >
      <svg className="research-route-svg" viewBox="0 0 1320 620" xmlns="http://www.w3.org/2000/svg">
        <MapDefs accent="#1f6652" id="bamboo" />
        <rect className="research-map-grid" fill="url(#bamboo-grid)" height="620" rx="24" width="1320" />

        <FlowPath d="M196 252 H244" id="bamboo" />
        <FlowPath d="M426 252 H444" id="bamboo" />
        <FlowPath d="M700 252 H718" id="bamboo" />
        <FlowPath d="M922 252 H940" id="bamboo" />
        <FlowPath d="M1095 252 H1112" id="bamboo" />
        <FlowDot d={route} />

        <g className="research-input-badge" transform="translate(28 175)">
          <rect height="154" rx="24" width="168" />
          <text className="route-node-role" x="20" y="28">{t("STRUCTURAL TESTS")}</text>
          <path d="M44 67h82M54 49v75M116 49v75M44 104l82-36M44 68l82 36" />
          <text className="route-node-title" x="20" y="133">{t("51 specimens")}</text>
          <text className="route-node-detail" x="20" y="149">{t("249 measurement records")}</text>
        </g>

        <RouteNode detail="comprehensive ranking" label={["Factor", "analysis"]} role="REDUCE + RANK" width={182} x={244} y={199} />

        <g className="research-model-panel" transform="translate(444 150)">
          <rect height="204" rx="24" width="256" />
          <text className="route-node-role" x="20" y="28">{t("COMPARE 8 MODELS")}</text>
          <SmallPill label="XGBoost" x={18} y={47} />
          <SmallPill label="KNN" x={126} y={47} />
          <SmallPill best label="Random Forest" x={18} y={84} />
          <SmallPill label="Logistic Reg." x={126} y={84} />
          <SmallPill label="SVM" x={18} y={121} />
          <SmallPill label="Naive Bayes" x={126} y={121} />
          <SmallPill label="BPNN" x={18} y={158} />
          <SmallPill label="Extra Trees" x={126} y={158} />
        </g>

        <RouteNode detail="≈61% test accuracy" label={["Random Forest", "selected"]} role="BEST BASE MODEL" tone="gold" width={204} x={718} y={199} />

        <g className="research-model-panel is-optimizer" transform="translate(940 174)">
          <rect height="156" rx="24" width="155" />
          <text className="route-node-role" x="18" y="28">{t("TUNE 5 WAYS")}</text>
          <text className="optimizer-list" x="18" y="56">GS · GA · PSO</text>
          <text className="optimizer-list" x="18" y="83">SA · BO</text>
          <path d="M20 111 C51 95 82 135 133 107" />
          <circle cx="132" cy="107" r="5" />
          <text className="route-node-detail" x="18" y="139">{t("5-fold CV / 70:30")}</text>
        </g>

        <g className="research-best-seal" transform="translate(1112 195)">
          <circle cx="57" cy="57" r="56" />
          <circle cx="57" cy="57" r="45" />
          <text className="route-node-role" textAnchor="middle" x="57" y="40">{t("BEST TUNER")}</text>
          <text className="seal-main" textAnchor="middle" x="57" y="69">BO</text>
          <text className="route-node-detail" textAnchor="middle" x="57" y="91">{t("≈67% reported")}</text>
        </g>

        <g className="research-output-card" transform="translate(1238 183)">
          <rect height="138" rx="24" width="72" />
          <text className="route-node-role" transform="rotate(90 36 68)" x="-7" y="69">{t("CONNECTION TYPE")}</text>
        </g>

        <path className="research-feedback-line" d="M1272 332 C1272 518 215 548 90 370" markerEnd="url(#bamboo-arrow)" />
        <circle className="research-flow-dot is-green" r="5">
          <animateMotion begin="-2.4s" dur="7.6s" path="M1272 332 C1272 518 215 548 90 370" repeatCount="indefinite" />
        </circle>
        <g className="research-feedback-label" transform="translate(476 478)">
          <rect height="42" rx="21" width="374" />
          <text x="22" y="27">{t("prediction → specimen choice → design feedback")}</text>
        </g>
      </svg>
    </MethodMapFrame>
  );
}

function RobotVisionMethodMap() {
  const { language } = useLanguage();
  const t = (text: string) => researchText(language, text);
  return (
    <MethodMapFrame
      description="The review organizes robot vision as a system map: deployment architectures enable perception capabilities, which are shaped by practical constraints and matched with solution directions before industrial deployment."
      eyebrow="SYSTEM TAXONOMY → PERCEPTION → DEPLOYMENT"
      figureClass="is-robot"
      title="A technology map for vision-based robotics"
    >
      <svg className="research-route-svg" viewBox="0 0 1320 660" xmlns="http://www.w3.org/2000/svg">
        <MapDefs accent="#245f84" id="robot" />
        <rect className="research-map-grid" fill="url(#robot-grid)" height="660" rx="24" width="1320" />
        <ColumnHeading label="VISION SYSTEM" number="01" x={38} />
        <ColumnHeading label="CORE CAPABILITY" number="02" x={320} />
        <ColumnHeading label="DEPLOYMENT CHALLENGE" number="03" x={608} />
        <ColumnHeading label="SOLUTION DIRECTION" number="04" x={888} />

        <RobotIconNode icon="camera" label="Global vision" note="external workspace view" x={38} y={126} />
        <RobotIconNode icon="chip" label="Local embedded" note="on-robot perception" x={38} y={272} />
        <RobotIconNode icon="cloud" label="Cloud–edge hybrid" note="distributed inference" x={38} y={418} />

        <RouteNode detail="objects + localization" label="Object Detection" width={210} x={320} y={134} />
        <RouteNode detail="geometry + spatial state" label="3D Reconstruction" width={210} x={320} y={280} />
        <RouteNode detail="motion + context" label={["Dynamic Scene", "Understanding"]} width={210} x={320} y={426} />

        <RouteNode detail="latency / compute budget" label="Real-time" tone="wine" width={206} x={608} y={134} />
        <RouteNode detail="labels / domain shift" label="Data Scarcity" tone="wine" width={206} x={608} y={280} />
        <RouteNode detail="vision + language + control" label="Multimodal Fusion" tone="wine" width={206} x={608} y={426} />

        <RouteNode detail="efficient edge inference" label="Lightweight Models" tone="green" width={214} x={888} y={134} />
        <RouteNode detail="privacy-aware learning" label="Federated Learning" tone="green" width={214} x={888} y={280} />
        <RouteNode detail="rules meet perception" label={["Neural–Symbolic", "Systems"]} tone="green" width={214} x={888} y={426} />

        {[179, 325, 471].map((y) => (
          <g key={y}>
            <FlowPath d={`M248 ${y} H320`} id="robot" />
            <FlowPath d={`M530 ${y} H608`} id="robot" />
            <FlowPath d={`M814 ${y} H888`} id="robot" />
          </g>
        ))}
        <FlowDot d="M248 179 H320 H530 H608 H814 H888 H1102" />
        <FlowDot begin="-2s" d="M248 325 H320 H530 H608 H814 H888 H1102" tone="green" />
        <FlowDot begin="-4s" d="M248 471 H320 H530 H608 H814 H888 H1102" tone="wine" />

        <g className="robot-application-node" transform="translate(1142 214)">
          <rect height="260" rx="34" width="150" />
          <circle cx="75" cy="55" r="28" />
          <path d="M75 83v55M45 108h60M55 138l-16 58M95 138l16 58M45 104l-22 44M105 104l22 44" />
          <circle cx="65" cy="51" r="3" /><circle cx="85" cy="51" r="3" />
          <text className="route-node-role" textAnchor="middle" x="75" y="222">{t("OUTPUT")}</text>
          <text className="robot-output-title" textAnchor="middle" x="75" y="245">{t("Industrial robots")}</text>
        </g>
        <FlowPath d="M1102 179 C1130 179 1117 265 1142 265" id="robot" />
        <FlowPath d="M1102 325 H1142" id="robot" />
        <FlowPath d="M1102 471 C1130 471 1117 410 1142 410" id="robot" />
      </svg>
    </MethodMapFrame>
  );
}

function ColumnHeading({ label, number, x }: { label: string; number: string; x: number }) {
  const { language } = useLanguage();
  return (
    <g className="research-column-heading" transform={`translate(${x} 76)`}>
      <text className="column-number" x="0" y="0">{number}</text>
      <text x="37" y="0">{researchText(language, label)}</text>
      <path d="M0 18h218" />
    </g>
  );
}

function RobotIconNode({ icon, label, note, x, y }: { icon: "camera" | "chip" | "cloud"; label: string; note: string; x: number; y: number }) {
  const { language } = useLanguage();
  return (
    <g className="robot-icon-node" transform={`translate(${x} ${y})`}>
      <rect height="106" rx="20" width="210" />
      <g className="robot-glyph" transform="translate(18 22)">
        {icon === "camera" ? <><rect height="36" rx="7" width="50" y="8" /><circle cx="25" cy="26" r="10" /><path d="M14 8l5-8h16l5 8" /></> : null}
        {icon === "chip" ? <><rect height="44" rx="7" width="44" x="3" /><rect height="20" rx="3" width="20" x="15" y="12" /><path d="M0 10h-8M0 22h-8M0 34h-8M50 10h8M50 22h8M50 34h8" /></> : null}
        {icon === "cloud" ? <><path d="M8 42h37c15 0 17-22 3-26C44 3 27 0 19 11 6 7-2 21 8 29 1 33 2 42 8 42z" /><path d="M26 24v27M16 34l10-10 10 10" /></> : null}
      </g>
      <text className="route-node-title" x="82" y="43">{researchText(language, label)}</text>
      <text className="route-node-detail" x="82" y="70">{researchText(language, note)}</text>
    </g>
  );
}

function MoeMethodMap() {
  const { language } = useLanguage();
  const t = (text: string) => researchText(language, text);
  const systems = ["GLaM", "Switch Transformer", "DeepSpeed-MoE", "PR-MoE", "Mixtral 8×7B", "DBRX", "DeepSeek-V3"];
  const taxonomy = ["Routing strategy", "Expert granularity", "Active parameters", "Residual / shared experts", "Training and inference systems"];
  const architectureOnly = ["Switch Transformer", "DeepSpeed-MoE", "PR-MoE"];
  const benchmarkSupported = ["GLaM", "Mixtral", "DBRX", "DeepSeek-V3", "Dense and proprietary baselines"];
  const dimensions = ["Aggregate", "Commonsense", "World Knowledge", "Code", "Math"];
  const findings = [
    "Sparse activation improves parameter efficiency",
    "Fine-grained and shared experts strengthen specialization",
    "Code and math show strong MoE performance patterns",
    "Evaluation settings differ across source papers",
  ];
  return (
    <MethodMapFrame
      description="The review selects seven representative MoE systems, organizes architectural choices, separates qualitative and quantitative evidence, and synthesizes literature-reported findings with explicit limitations."
      eyebrow="LITERATURE SCOPE → ARCHITECTURE TAXONOMY → EVIDENCE SYNTHESIS → FINDINGS & LIMITATIONS"
      figureClass="is-moe"
      status="COMPARATIVE REVIEW"
      title="Review Scope and Comparative Framework"
    >
      <div className="moe-review-framework">
        <article className="moe-review-stage is-scope">
          <span>01 / {t("LITERATURE SCOPE")}</span>
          <h3>{t("7 representative MoE systems")}</h3>
          <ul>{systems.map((system) => <li key={system}>{system}</li>)}</ul>
        </article>

        <article className="moe-review-stage is-taxonomy">
          <span>02 / {t("ARCHITECTURE TAXONOMY")}</span>
          <ul>{taxonomy.map((dimension) => <li key={dimension}>{t(dimension)}</li>)}</ul>
        </article>

        <article className="moe-review-stage is-evidence">
          <span>03 / {t("EVIDENCE SEPARATION")}</span>
          <div className="moe-evidence-lanes">
            <section className="moe-evidence-lane is-architecture">
              <h3>{t("Architecture-focused review")}</h3>
              <p className="moe-model-list">{architectureOnly.join(" · ")}</p>
              <p>{t("Reviewed for architectural and system innovations, but excluded from the main quantitative table because comparable benchmark evidence was unavailable.")}</p>
            </section>
            <section className="moe-evidence-lane is-benchmark">
              <h3>{t("Benchmark-supported synthesis")}</h3>
              <p className="moe-model-list">{benchmarkSupported.map((item) => t(item)).join(" · ")}</p>
              <p>{t("Available literature-reported results are synthesized across multiple benchmark families.")}</p>
            </section>
          </div>
        </article>

        <article className="moe-review-stage is-benchmark-stage">
          <span>04 / {t("CROSS-PAPER BENCHMARK SYNTHESIS")}</span>
          <strong>{t("Literature-reported results")}</strong>
          <ul>{dimensions.map((dimension) => <li key={dimension}>{t(dimension)}</li>)}</ul>
        </article>

        <article className="moe-review-stage is-findings">
          <span>05 / {t("FINDINGS AND LIMITATIONS")}</span>
          <ul>{findings.map((finding) => <li key={finding}>{t(finding)}</li>)}</ul>
        </article>
      </div>
    </MethodMapFrame>
  );
}

export function MoeRoutingBackgroundMap() {
  const { language } = useLanguage();
  const t = (text: string) => researchText(language, text);
  return (
      <MethodMapFrame
        eyebrow="INPUT TOKENS → ROUTER / GATE → TOP-K EXPERTS → AGGREGATION"
      figureClass="is-moe moe-routing-background"
      status="BACKGROUND ONLY"
      title="Background: How Sparse MoE Routing Works"
    >
      <div className="moe-routing-explainer">
        <article className="moe-routing-step is-input">
          <span>01 / {t("INPUT")}</span>
          <strong>{t("Token representations")}</strong>
          <div className="moe-token-chips" aria-hidden="true"><i /><i /><i /><i /></div>
        </article>
        <article className="moe-routing-step is-router">
          <span>02 / {t("ROUTER / GATE")}</span>
          <strong>{t("Score experts and select Top-k")}</strong>
        </article>
        <article className="moe-routing-step is-experts">
          <span>03 / {t("EXPERT BANK · TOP-K ACTIVE")}</span>
          <strong>{t("Generic sparse selection")}</strong>
          <div className="moe-expert-dots" aria-hidden="true"><i className="is-active">E1</i><i>E2</i><i className="is-active">E3</i><i>E4</i></div>
        </article>
        <article className="moe-routing-step is-merge">
          <span>04 / {t("AGGREGATION")}</span>
          <strong>{t("Weighted expert outputs")}</strong>
        </article>
      </div>
    </MethodMapFrame>
  );
}

function DigitalTradeMethodMap() {
  const { language } = useLanguage();
  const t = (text: string) => researchText(language, text);
  return (
    <MethodMapFrame
      description="The paper combines frontier estimation, machine-learning forecasting, and two mediation paths to explain and project digital-service export potential across Belt and Road countries."
      eyebrow="PANEL DATA → FRONTIER ESTIMATION → MEDIATION + FORECAST"
      figureClass="is-digital"
      title="Three analytical paths for estimating export potential"
    >
      <svg className="research-route-svg" viewBox="0 0 1320 690" xmlns="http://www.w3.org/2000/svg">
        <MapDefs accent="#315f89" id="digital" />
        <rect className="research-map-grid" fill="url(#digital-grid)" height="690" rx="24" width="1320" />

        <g className="digital-data-node" transform="translate(34 222)">
          <rect height="170" rx="26" width="190" />
          <text className="route-node-role" x="22" y="29">{t("PANEL INPUT")}</text>
          <text className="digital-data-number" x="22" y="89">36</text>
          <text className="route-node-title" x="92" y="69">BRI</text>
          <text className="route-node-title" x="92" y="91">{t("countries")}</text>
          <path d="M22 111h146" />
          <text className="route-node-detail" x="22" y="139">{t("2013–2021 · bilateral data")}</text>
        </g>

        <RouteNode detail="one-step frontier estimation" label="SFGM" role="MAIN MODEL" width={190} x={278} y={130} />
        <RouteNode detail="efficiency + untapped potential" label={["Trade efficiency", "+ export potential"]} role="ESTIMATE" tone="gold" width={224} x={520} y={130} />
        <FlowPath d="M224 278 C252 278 248 183 278 183" id="digital" />
        <FlowPath d="M468 183 H520" id="digital" />
        <FlowDot d="M224 278 C252 278 248 183 278 183 H744" />

        <g className="digital-lane-label" transform="translate(278 344)">
          <rect height="36" rx="18" width="470" />
          <text x="20" y="24">{t("FORECAST LANE · RFE → XGBOOST → GA → 2022–2028")}</text>
        </g>
        <RouteNode detail="retain key variables" label="RFE" width={132} x={278} y={405} />
        <RouteNode detail="non-linear forecast" label="XGBoost" width={150} x={458} y={405} />
        <RouteNode detail="hyperparameter search" label="Genetic Algorithm" tone="wine" width={188} x={656} y={405} />
        <RouteNode detail="DEI / openness trajectories" label={["2022–2028", "forecast"]} tone="gold" width={180} x={892} y={405} />
        <FlowPath d="M224 338 C252 338 248 458 278 458" id="digital" />
        <FlowPath d="M410 458 H458" id="digital" />
        <FlowPath d="M608 458 H656" id="digital" />
        <FlowPath d="M844 458 H892" id="digital" />
        <FlowDot begin="-2s" d="M224 338 C252 338 248 458 278 458 H1072" tone="wine" />

        <g className="digital-mediation-panel" transform="translate(790 80)">
          <rect height="268" rx="28" width="492" />
          <text className="route-node-role" x="23" y="31">{t("MEDIATION PATHS")}</text>
          <RouteNode detail="exporter-side development" label={["Digital Economy", "Index"]} width={155} x={22} y={64} />
          <RouteNode detail="partial mediation" label={["Service value-added", "share"]} tone="green" width={156} x={212} y={45} />
          <RouteNode detail="full mediation" label={["Digital Technology", "Index"]} tone="green" width={156} x={212} y={145} />
          <path className="research-flow-line is-accent" d="M177 117 H212" markerEnd="url(#digital-arrow)" />
          <path className="research-flow-line is-accent" d="M177 117 C195 117 194 198 212 198" markerEnd="url(#digital-arrow)" />
          <path className="research-flow-line is-green" d="M368 98 H436" markerEnd="url(#digital-arrow)" />
          <path className="research-flow-line is-green" d="M368 198 H436" markerEnd="url(#digital-arrow)" />
          <text className="digital-export-label" textAnchor="middle" x="447" y="132">{t("DIGITAL")}</text>
          <text className="digital-export-label" textAnchor="middle" x="447" y="152">{t("SERVICE")}</text>
          <text className="digital-export-label" textAnchor="middle" x="447" y="172">{t("EXPORTS")}</text>
        </g>

        <g className="digital-policy-output" transform="translate(1120 405)">
          <rect height="172" rx="28" width="162" />
          <text className="route-node-role" x="22" y="29">{t("OUTPUT")}</text>
          <text className="policy-line" x="22" y="66">{t("Infrastructure")}</text>
          <text className="policy-line" x="22" y="96">{t("Facilitation")}</text>
          <text className="policy-line" x="22" y="126">{t("Integration")}</text>
          <path d="M22 145h116" />
          <text className="route-node-detail" x="22" y="162">{t("policy directions")}</text>
        </g>
        <FlowPath d="M1072 458 H1120" id="digital" />
        <FlowPath d="M1036 348 C1036 374 1201 375 1201 405" id="digital" />
      </svg>
    </MethodMapFrame>
  );
}
