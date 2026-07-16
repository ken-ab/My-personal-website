export const homeZh = {
  kicker: "应用人工智能 · 数据建模 · 全栈系统",
  title: ["我建模，", "我开发，", "我交付。"],
  intro:
    "我是张桢铠（Ken），毕业于南京工业大学，获学士学位，荣誉学位等级为优秀；即将就读香港理工大学数据科学硕士项目。\n\n大三期间，我将主要精力投入科研，发表了 2 篇 SCI 论文和 2 篇会议论文，研究内容涵盖机器学习、MoE 与计算机视觉。大四期间，我在 2026 年 MCM/ICM 中获得 Meritorious Winner（M 奖），延续了对建模与研究问题的探索；与此同时，为了更直接地理解大模型与智能体系统在真实场景中的运行方式，我将部分重心延伸至工程实践，先后参与多智能体系统和企业级 AI 工作流的开发，并借助 AI 辅助编程独立完成了两个小程序。工程经历让我学会了如何将想法转化为可运行的系统，也让我更加清楚地意识到，真正长期吸引我的，是系统背后的模型架构、路由机制与效率边界。\n\n这些经历并没有让我远离科研，反而帮助我进一步明确了自己的研究兴趣。目前，我关注 Efficient AI、生成式 AI、模型路由与多模态学习，希望以研究助理或合作研究的方式参与相关课题，在真实科研过程中持续深化研究能力，并为项目推进与论文产出作出贡献。",
  lanes: {
    "/publications": { label: "论文", title: "有模型纪律的研究", body: "按主线与辅助证据整理机器学习、决策系统和综述研究。" },
    "/projects": { label: "项目经历", title: "研究、竞赛与应用实践", body: "涵盖生物信息流水线、数学建模和投前工作流等课程之外的实践。" },
    "/development-projects": { label: "开发项目", title: "真正可以运行的系统", body: "从架构、数据流到产品界面，完整开发智能体、小程序和管理系统。" },
  },
};

export const profileZh = {
  location: "南京 / 香港",
  currently: "香港理工大学数据科学专业即将入学\n研究方向：高效生成式 AI、MoE 与模型适配\n正在开发智能体 AI 与机器学习系统原型",
  researchInterests: "高效生成式 AI · 混合专家模型 · 模型适配与复用 · 多模态与智能体学习",
  technicalFocus: "Python · PyTorch · TensorFlow · Transformers · BERT · ChatGLM · MoE · scikit-learn",
  lookingFor: "研究助理 · GenAI / 多模态学习 · 高效 AI · 智能体系统",
  focus: "多模态 / 多智能体 AI 研究 · AI 系统工程",
};

type TimelineTranslation = {
  type?: string;
  role?: string;
  description?: string;
  highlights?: string[];
  factLabels?: string[];
};

export const timelineZh: Record<string, TimelineTranslation> = {
  "applied-sciences-olympic": { type: "Applied Sciences 2025 / 机器学习 / 体育分析", role: "第一作者" },
  "ainit-moe": { type: "AINIT 2025 / 混合专家模型 / 大模型效率", role: "第一作者" },
  "robotic-vision": { type: "机器人视觉 / 计算机视觉 / 机器学习综述", role: "第二作者" },
  sustainability: { type: "Sustainability 2025 / 结构工程 / 机器学习", role: "第三作者" },
  "deic-publications": { type: "DEIC 2025 / 数字经济 / 贸易建模", role: "第三作者" },
  "nsc-wuxi": {
    type: "实习 / 算法工程 / 生物信息学",
    description: "面向 23 万规模 PDB/FASTA 蛋白结构记录开发高吞吐数据流水线，包含并行处理、结构一致性检查、HADDOCK3-score、相关性分析与因子评分。",
    highlights: ["处理 23 万规模蛋白结构记录。", "建立链重组、一致性检查与异常清洗流程。", "以 Spearman 相关和因子分析构建综合统计评分。", "识别能量特征失衡样本。"],
  },
  "mcm-icm": {
    type: "数学建模 / AI 时代教育政策 / Problem F",
    role: "MCM 2026 Meritorious Winner · M 奖",
    description: "四模块框架把任务层 AI 暴露、课程网络、就业演化和稳健院校政策选择连接起来。",
    factLabels: ["职业", "蒙特卡洛情景", "评价指标", "院校原型"],
  },
  energyfund: {
    type: "项目实践 / 投资工作流 / AI 文档处理",
    description: "面向投前流程的 AI 辅助系统，包含材料分类、Track B 审查、RBAC 权限和三条并行处理链路。",
    highlights: ["设计 AI 辅助材料分类。", "支持上传、解压、预览和人工确认。", "实现基于角色的权限与并行投资流程。"],
  },
};

export const developmentZh: Record<string, { type: string; description: string }> = {
  "finance-agent": {
    type: "AI 智能体 / 金融 / 多智能体系统",
    description: "该系统基于 MCP 框架构建多 Agent 协作架构，能够为用户提供结构化的投资决策参考。",
  },
  "jingjiang-platform": {
    type: "微信小程序 / 管理系统 / 政产学研合作",
    description: "服务政企校合作的小程序与后台系统，包含全国项目地图、政策 PDF、项目匹配和批量数据导入治理。",
  },
  "laowang-checkin": {
    type: "微信小程序 / 健康打卡 / AI 助手",
    description: "已上线的运动、健康打卡、社区和 AI 辅助分享产品，覆盖完整小程序与后端工作流。",
  },
};

type PublicationTranslation = {
  summary: string;
  abstractSummary: string;
  visualAlts: string[];
  problem: string[];
  innovations: string[];
};

export const publicationZh: Record<string, PublicationTranslation> = {
  moe: {
    summary: "研究稀疏专家路由如何在受限计算量下维持大语言模型性能。",
    abstractSummary: "本文系统梳理现代混合专家模型的稀疏路由机制、代表性架构和性能—效率权衡，并在综合、常识、知识、代码与数学五类基准上比较 MoE 与密集模型。综述归纳了稀疏激活、金字塔残差、自适应专家规模和共享专家隔离等机制，并报告在保持性能的同时至少降低约 50% 推理计算量。",
    visualAlts: ["2017 至 2024 年主要混合专家模型的演进时间线。"],
    problem: ["密集 Transformer 每个 token 都激活全部参数，模型扩展会显著增加推理成本。", "现代 MoE 在路由、专家组织和基准表现上差异明显，但缺少统一比较框架。"],
    innovations: ["统一呈现 Token、Router、Top-k Experts 与加权聚合，并串联多代代表架构。", "综合五类基准，归纳稀疏激活、金字塔残差、自适应专家规模和共享专家隔离等效率机制。"],
  },
  "olympic-prediction": {
    summary: "预测 2028 奥运奖牌表现，并量化东道主与优秀教练效应。",
    abstractSummary: "研究以 1896—2024 年奥运历史数据为基础，将 234 个国家分为 α1—α4 四组。既往获奖国家通过因子分析、ARIMA 与四类机器学习模型构成 MPXG 路线；从未获奖国家通过参与人数预测和三层 FCNN 构成 FMPM 路线，同时单独量化东道主与优秀教练效应。",
    visualAlts: ["奥运奖牌预测研究的双路线模型框架图。"],
    problem: ["传统获奖国家与从未获奖国家的数据密度不同，不能使用同一预测路径。", "奖牌预测还需要把东道主优势和优秀教练效应从模型结果中单独解释出来。"],
    innovations: ["将 234 个国家分为 α1-α4，分别使用 MPXG 与 FMPM 双路径建模。", "把 XGBoost、FCNN 结果与 74% 东道主增益率及 0.2-0.5 枚教练效应连接起来。"],
  },
  "sustainability-bamboo": {
    summary: "以机器学习和超参数优化预测薄壁钢-竹结构连接的机械行为。",
    abstractSummary: "研究将 51 个薄壁钢—竹连接试件产生的 249 组机械性能记录转化为可复用的连接类型预测流程。方法先通过因子分析形成综合排序，再比较八类机器学习模型和五种调参方法，最终将预测结果反馈到试件选择与结构设计。",
    visualAlts: ["从连接试验、数据处理、机器学习比较到设计反馈的研究框架。"],
    problem: ["连接实验成本高且样本有限，需要从新的机械性能参数中快速筛选合适连接类型。", "异构试件数据需要转化为可复用的设计反馈，而不只是孤立实验结论。"],
    innovations: ["对 51 个试件、249 组数据进行因子排名与八模型比较。", "RF 测试准确率约 61%，Bayesian Optimization 在五种调参方法中将其提高到约 67%。"],
  },
  "robot-vision": {
    summary: "梳理机器人视觉、计算机视觉与机器学习的技术演进、应用和部署挑战。",
    abstractSummary: "本文是一篇体系化综述，连接全局视觉、本地嵌入式视觉和云边协同架构，与目标检测、三维重建及动态场景理解等任务。文章进一步将实时性、数据稀缺和多模态融合等部署瓶颈，对应到轻量模型、联邦学习和神经符号系统等发展方向。",
    visualAlts: ["城市道路场景中的目标检测示例，包含行人、车辆和文本区域。"],
    problem: ["机器人视觉架构、CV 任务和机器学习方法常被割裂讨论。", "实时性、数据稀缺与多模态融合仍限制工业部署。"],
    innovations: ["建立架构-任务-挑战-产业闭环技术地图。", "把轻量模型、联邦学习和神经符号系统对应到具体部署瓶颈，强调体系化综述而非原创算法。"],
  },
  "deic-digital-trade": {
    summary: "研究数字经济如何影响“一带一路”国家数字服务贸易出口潜力。",
    abstractSummary: "研究使用 36 个“一带一路”国家 2013—2021 年面板数据，以随机前沿引力模型估计贸易效率与未释放出口潜力，并检验服务业增加值占比和数字技术指数两条中介路径。预测扩展以 RFE、XGBoost 和遗传算法估计 2022—2028 年指标轨迹。",
    visualAlts: ["“一带一路”数字经济的新商业模式、关键趋势、技术和基础能力框架。"],
    problem: ["仅观察贸易量无法解释出口国数字经济对出口潜力的真实影响。", "政策分析还需要识别中介机制并估计历史面板之外的指标轨迹。"],
    innovations: ["将 36 国 SFGM 与服务业增加值占比和数字技术指数两条中介路径结合。", "加入 XGBoost 与遗传算法预测，把机制解释连接到 2022-2028 前瞻估计。"],
  },
};

export const financeZh = {
  status: "技术项目概览",
  title: "基于 MCP 协议的 A 股智能分析系统",
  role: "算法工程师",
  subtitle: "多智能体 A 股研究原型：把公司研究拆分为专业分析分支，并生成可追踪的 Markdown 报告。",
  summary: "这是一个基于 LangGraph、MCP 和 ReAct 构建的多智能体金融研究系统。系统通过独立 MCP Server 提供 8 类金融数据工具，由基本面、技术面、估值和新闻 4 个专业 Agent 并行分析，再由 Summary Agent 汇总为结构化 Markdown 报告。报告生成后，Evaluator Agent 检查完整性与任务匹配度；若需要修订，Reflection Agent 会生成重新规划指令，并最多触发一次有界反思后输出最终报告。",
  responsibility: "主要负责数据源工具化封装、股票分析工作流的设计，以及模型训练与微调工作。",
  responsibilityEn: "Focused on packaging data sources as tools, designing the stock-analysis workflow, and training and fine-tuning models.",
  facts: [
    { label: "专业分析智能体", note: "基本面、技术面、估值与新闻分析" },
    { label: "MCP工具类别", note: "覆盖市场、财报、指数、宏观、分析与新闻" },
    { label: "最大反思轮次", note: "报告不完整时最多触发一次重新规划" },
  ],
  architecture: {
    eyebrow: "系统架构",
  },
  tools: {
    eyebrow: "模型与系统效果",
  },
  output: {
    eyebrow: "评估与反思",
    steps: [
      "检查章节覆盖、逻辑和任务匹配度。",
      "仅在评估器要求修订时，生成一次重规划指令。",
      "报告通过检查或完成唯一一次重试后终止。",
    ],
    experimental: "实验支线",
  },
  reportLabel: "示意性输出结构",
  reportNote: "Markdown / 不包含虚构投资结果",
  reportTitle: "A 股公司分析",
  reportSections: ["执行摘要", "基本面分析", "技术面分析", "估值分析", "新闻与风险", "综合评估", "来源追踪"],
  experimentalNote: "实验支线：Qwen LoRA 脚本用于探索新闻情绪和风险评分，但不作为核心 LangGraph 运行时中的强制阶段。",
};

type MiniProgramTranslation = {
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  proof: { eyebrow: string; title: string; supporting: string };
  metricGroup: { label: string; source: string; labels: string[]; notes: string[] };
  screenshotLabels: string[];
  screenshotAlts: string[];
  systemFlow: string[];
  features: Array<{ title: string; body: string; flow?: string[] }>;
  deploymentProof: string[];
};

export const miniProgramZh: Record<string, MiniProgramTranslation> = {
  "laowang-checkin": {
    title: "老王运动打卡小程序",
    subtitle: "老王运动打卡是一款适老化微信小程序，面向中老年用户提供简单、温暖的日常运动记录与健康陪伴体验。产品集成运动打卡、节拍器计时、连续打卡统计、AI 健康问答、社区互动、打卡海报生成与微信提醒等功能，并围绕大字体、清晰反馈和简化操作持续优化交互体验；项目基于 Vue 3 与 uni-app 构建，配套 Node.js 后端服务，覆盖了从产品设计、前后端开发到部署上线的完整落地流程。",
    summary: "从产品设计、交互实现到前后端开发与部署上线，独立完成完整产品落地。",
    role: "独立开发",
    proof: { eyebrow: "运行数据", title: "", supporting: "" },
    metricGroup: {
      label: "微信小程序数据分析 · 最近 30 天",
      source: "微信 WeAnalysis",
      labels: ["累计用户数", "日活用户", "日均打开次数", "日均访问页面数", "老王 AI 对话总数"],
      notes: ["", "", "", "", ""],
    },
    screenshotLabels: ["首页", "社区", "打卡海报", "健康打卡", "老王 AI"],
    screenshotAlts: ["已上线老王运动打卡小程序首页。", "已上线小程序中的运动社区动态页。", "带换图、换文字和分享控制的打卡海报编辑页。", "运动、16:8 饮食、血压和血糖打卡入口。", "老王 AI 在小程序内回答运动指导问题。"],
    systemFlow: ["用户", "微信小程序", "Express API", "打卡记录", "提醒与社区"],
    features: [
      { title: "适老化交互", body: "大点击目标、克制的导航、温和绿色对比和短操作路径，降低老年用户的使用门槛。" },
      { title: "运动与多项健康打卡", body: "把运动计时与运动、16:8 饮食、血压、血糖等健康打卡整合在同一个产品中。" },
      { title: "熟悉的社区分享", body: "打卡后可生成精美海报和朋友圈或社区文案，再通过熟悉的动态信息流分享。" },
      { title: "老王 AI 工作流", body: "助手区分小程序操作、一般问题与健康风险问题，检索已确认的产品知识，执行安全边界并流式生成简洁回答，也支持海报和社区文案生成。", flow: ["问题分类", "知识检索", "安全边界", "模型生成", "流式回复"] },
    ],
    deploymentProof: ["生产 API 持续运行", "核心用户流程已完成生产验证", "适老化交互在运营中持续优化", "后台与提醒服务已接入"],
  },
  "jingjiang-platform": {
    title: "靖江市千帆靖发产学研用平台/小程序",
    subtitle: "让高校项目、区域覆盖、政策和揭榜批次可检索、可维护的小程序、API 与管理系统。",
    summary: "根据实际业务需求，独立负责小程序、后端 API、管理系统和数据库开发，并完成批量数据导入、校验反馈与生产部署。",
    role: "端到端系统开发与数据治理",
    proof: { eyebrow: "详细数据", title: "", supporting: "" },
    metricGroup: {
      label: "公开项目库快照",
      source: "生产环境公开 API",
      labels: ["省份", "高校院所", "公开项目", "政策", "揭榜批次", "需求总数"],
      notes: ["已有公开项目的省份", "已启用的高校和科研院所", "当前公开可见项目记录", "公开政策文件", "已发布需求批次", "三个批次共 16 + 7 + 16 项"],
    },
    screenshotLabels: ["小程序首页", "揭榜批次", "高校院所目录", "项目目录"],
    screenshotAlts: ["展示省份、高校、项目和政策实时数量的平台首页。", "展示第三批需求、企业和项目金额的揭榜批次页面。", "当前系统中的高校与科研院所目录。", "展示高校、省份和合作状态字段的项目目录。"],
    systemFlow: ["微信小程序", "Express API", "MySQL 项目库", "管理后台", "批量导入与错误回滚"],
    features: [
      { title: "全国项目发现", body: "用户按省份、高校和项目浏览合作资源，不再依赖互相割裂的表格。" },
      { title: "揭榜需求匹配", body: "三个已发布批次组织企业需求、参与单位和后续项目信息。" },
      { title: "政策获取", body: "通过独立的小程序政策库和 PDF 阅读流程公开政策文件。" },
      { title: "可治理的数据运营", body: "管理系统支持批量导入、校验反馈、错误回执和可回滚的导入任务。" },
    ],
    deploymentProof: ["生产环境公开 API", "小程序码可用", "在线数据目录", "导入数据治理流程"],
  },
};
