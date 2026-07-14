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
  "Tokens are routed to a small set of experts, aggregated, then studied across seven representative MoE families and five benchmark dimensions to explain the capacity–compute trade-off.": "Token 被路由到少量专家并加权聚合，再通过七类代表性 MoE 架构和五个基准维度解释容量—计算权衡。",
  "SPARSE ROUTING → ARCHITECTURE EVOLUTION → BENCHMARK": "稀疏路由 → 架构演进 → 基准比较",
  "How MoE activates capacity without activating every parameter": "MoE 如何在不激活全部参数的情况下使用模型容量",
  "INPUT TOKENS": "输入 TOKEN",
  "SPARSE DECISION": "稀疏决策",
  "score experts / top-k": "专家评分 / Top-k",
  "EXPERT BANK · TOP-2 ACTIVE": "专家库 · 激活 TOP-2",
  "MERGE": "聚合",
  "Token-level": "Token 级",
  "aggregation": "加权聚合",
  "weighted expert outputs": "专家输出加权",
  "EFFICIENCY RESULT": "效率结果",
  "less inference compute": "推理计算量更低",
  "performance preserved": "保持模型性能",
  "7 REPRESENTATIVE ARCHITECTURE FAMILIES": "7 类代表性架构",
  "BENCHMARK · 5 DIMENSIONS": "基准 · 5 个维度",
  "Aggregate": "综合",
  "Commonsense": "常识",
  "Knowledge": "知识",
  "Code": "代码",
  "Math": "数学",
  "The paper combines frontier estimation, machine-learning forecasting, and two mediation paths to explain and project digital-service export potential across Belt and Road countries.": "研究结合前沿估计、机器学习预测和两条中介路径，解释并预测“一带一路”国家的数字服务出口潜力。",
  "PANEL DATA → FRONTIER ESTIMATION → MEDIATION + FORECAST": "面板数据 → 前沿估计 → 中介 + 预测",
  "Three analytical lanes, one export-potential decision system": "三条分析路线，一个出口潜力决策系统",
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
  description: string;
  eyebrow: string;
  figureClass: string;
  title: string;
};

function MethodMapFrame({ children, description, eyebrow, figureClass, title }: FrameProps) {
  const { language } = useLanguage();
  return (
    <figure className={`research-method-map ${figureClass}`}>
      <header className="research-map-header">
        <div>
          <span>{researchText(language, eyebrow)}</span>
          <strong>{researchText(language, title)}</strong>
        </div>
        <span className="research-map-live"><i aria-hidden="true" /> {researchText(language, "animated route")}</span>
      </header>
      <div className="research-map-viewport" role="img" aria-label={researchText(language, description)}>
        {children}
      </div>
      <figcaption>{researchText(language, description)}</figcaption>
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
  return (
    <MethodMapFrame
      description="Tokens are routed to a small set of experts, aggregated, then studied across seven representative MoE families and five benchmark dimensions to explain the capacity–compute trade-off."
      eyebrow="SPARSE ROUTING → ARCHITECTURE EVOLUTION → BENCHMARK"
      figureClass="is-moe"
      title="How MoE activates capacity without activating every parameter"
    >
      <svg className="research-route-svg" viewBox="0 0 1320 680" xmlns="http://www.w3.org/2000/svg">
        <MapDefs accent="#6d3f50" id="moe" />
        <rect className="research-map-grid" fill="url(#moe-grid)" height="680" rx="24" width="1320" />

        <g className="moe-token-stack" transform="translate(36 198)">
          <text className="route-node-role" x="0" y="-24">{t("INPUT TOKENS")}</text>
          {[0, 1, 2, 3].map((index) => <rect height="52" key={index} rx="14" width="124" x={index * 8} y={index * 10} />)}
          <text className="moe-token-text" x="62" y="35">TOKEN</text>
        </g>
        <RouteNode detail="score experts / top-k" label={["Router", "+ Gate"]} role="SPARSE DECISION" tone="wine" width={174} x={214} y={186} />

        <g className="moe-expert-bank" transform="translate(446 116)">
          <rect height="250" rx="28" width="292" />
          <text className="route-node-role" x="22" y="31">{t("EXPERT BANK · TOP-2 ACTIVE")}</text>
          {[{x:65,y:92,l:"E1",a:true},{x:207,y:92,l:"E2",a:false},{x:65,y:190,l:"E3",a:false},{x:207,y:190,l:"E4",a:true}].map((expert) => (
            <g className={expert.a ? "moe-expert is-active" : "moe-expert"} key={expert.l}>
              <circle cx={expert.x} cy={expert.y} r="39" />
              <text textAnchor="middle" x={expert.x} y={expert.y + 6}>{expert.l}</text>
              {expert.a ? <circle className="expert-orbit" cx={expert.x} cy={expert.y} fill="none" r="48" /> : null}
            </g>
          ))}
          <path className="moe-gate-line is-active" d="M-58 123 C-14 123 10 92 26 92" />
          <path className="moe-gate-line" d="M-58 123 C-14 123 130 92 168 92" />
          <path className="moe-gate-line" d="M-58 123 C-14 123 10 190 26 190" />
          <path className="moe-gate-line is-active" d="M-58 123 C-14 123 130 190 168 190" />
        </g>

        <RouteNode detail="weighted expert outputs" label={["Token-level", "aggregation"]} role="MERGE" tone="gold" width={190} x={792} y={186} />
        <FlowPath d="M160 239 H214" id="moe" />
        <FlowPath d="M388 239 H446" id="moe" />
        <FlowPath d="M738 239 H792" id="moe" />
        <FlowDot d="M160 239 H214 H388 H446" />
        <FlowDot begin="-2.9s" d="M738 239 H792 H982" tone="gold" />

        <g className="moe-result-card" transform="translate(1034 126)">
          <rect height="214" rx="28" width="250" />
          <text className="route-node-role" x="24" y="31">{t("EFFICIENCY RESULT")}</text>
          <text className="moe-result-number" x="24" y="105">≥50%</text>
          <text className="moe-result-copy" x="24" y="135">{t("less inference compute")}</text>
          <path d="M26 166h198" />
          <text className="route-node-detail" x="24" y="191">{t("performance preserved")}</text>
        </g>
        <FlowPath d="M982 239 H1034" id="moe" />

        <g className="moe-evolution-track" transform="translate(38 430)">
          <text className="route-node-role" x="0" y="0">{t("7 REPRESENTATIVE ARCHITECTURE FAMILIES")}</text>
          <path d="M0 68 H862" />
          {[
            ["GLaM", 0], ["Switch", 128], ["DeepSpeed-MoE", 256], ["PR-MoE", 384],
            ["Mixtral", 512], ["DBRX", 640], ["DeepSeek-V3", 768],
          ].map(([label, x], index) => (
            <g className="moe-timeline-stop" key={label} transform={`translate(${x} 68)`}>
              <circle r={index === 6 ? 9 : 6} />
              <text textAnchor="middle" x="0" y={index % 2 ? 43 : -22}>{label}</text>
            </g>
          ))}
          <circle className="research-flow-dot is-wine" r="5">
            <animateMotion dur="7s" path="M0 68 H862" repeatCount="indefinite" />
          </circle>
        </g>

        <g className="moe-benchmark-panel" transform="translate(950 418)">
          <rect height="184" rx="24" width="334" />
          <text className="route-node-role" x="22" y="29">{t("BENCHMARK · 5 DIMENSIONS")}</text>
          {[["Aggregate",22,48],["Commonsense",170,48],["Knowledge",22,88],["Code",170,88],["Math",96,128]].map(([label,x,y]) => (
            <SmallPill best={label === "Code" || label === "Math"} key={label} label={String(label)} x={Number(x)} y={Number(y)} />
          ))}
        </g>
        <FlowPath d="M900 498 H950" id="moe" />
        <FlowPath d="M1117 418 C1117 376 1159 378 1159 340" id="moe" />
      </svg>
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
      title="Three analytical lanes, one export-potential decision system"
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
