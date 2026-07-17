import {
  ArrowUpRight,
  Code2,
  Database,
  Route,
  ShieldCheck,
} from "lucide-react";
import routerBenchOverview from "../../assets/case-studies/routerbench-cost-aware-routing.png";
import type { Language, LocalizedText } from "../../i18n/LanguageContext";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ZoomableImage } from "../media/ZoomableImage";
import { ActionButton } from "../portfolio/ActionButton";
import "./RouterBenchDetail.css";

const repositoryUrl = "https://github.com/ken-ab/routerbench-mini";
const reportUrl = "https://github.com/ken-ab/routerbench-mini/tree/codex/v5-frozen-evaluation";

const overviewIntroLead: LocalizedText = {
  en: "Large language model systems frequently face a model-routing decision in real applications: should a task be handled by a lower-cost model, or escalated to a more accurate but more expensive and slower strong model? In multimodal and agentic settings, this decision is more complex because task difficulty can be influenced simultaneously by textual instructions, visual inputs, tool-use requirements, and the quality of the initial response. This paper introduces ",
  zh: "大语言模型系统在实际应用中经常面临一个模型路由问题：一个任务应由成本较低的模型处理，还是升级调用准确率更高、但成本与延迟也更高的强模型。在多模态和智能体场景中，这一问题更加复杂，因为任务难度可能同时受到文本指令、视觉输入、工具调用需求以及初始回答质量的影响。本文介绍 ",
};

const overviewIntroTail: LocalizedText = {
  en: ", an independent experimental study of cost-aware model routing across text, vision, and tool-calling tasks. It compares two routing paradigms: request-side routing, which selects a model before generation using observable task features; and response-side escalation, which first calls a low-cost model and then decides whether to invoke the strong model based on answer format, confidence, self-check signals, and structural features.",
  zh: "，一项面向文本、视觉与工具调用任务的成本感知模型路由独立实验研究。研究比较了两类路由范式：一类是在生成前依据任务的可观察特征选择模型的请求侧路由；另一类是先调用低成本模型，再结合回答格式、置信度、自检结果与结构特征判断是否升级调用强模型的响应侧升级策略。",
};

const overviewResultLead: LocalizedText = {
  en: "V5 expands the study to 3,200 development examples and an untouched 800-task final test, with data hashes, prompts, model settings, estimators, and thresholds frozen before test access. Always Strong reaches the highest accuracy at 72.75%, while Frozen Task-Aware reaches ",
  zh: "V5 将实验扩展到 3,200 道开发题和 800 道未触碰的最终测试题，并在读取测试集前冻结数据哈希、提示词、模型设置、估计器与阈值。Always Strong 以 72.75% 获得最高准确率，而 Frozen Task-Aware 达到 ",
};

const overviewCostBridge: LocalizedText = {
  en: ", only 0.63 percentage points lower, while reducing average call cost by ",
  zh: "，仅低 0.63 个百分点，同时将平均调用成本降低 ",
};

const overviewLatencyBridge: LocalizedText = {
  en: " and average latency by ",
  zh: "、平均延迟降低 ",
};

type DatasetCategory = {
  title: LocalizedText;
  total: number;
  benchmarks: readonly {
    name: string;
    nameZh?: string;
    count: number;
  }[];
  hard?: boolean;
};

type DatasetPartition = {
  code: string;
  title: LocalizedText;
  total: number;
  primaryLabel: LocalizedText;
  primaryTotal: number;
  hardLabel: LocalizedText;
  hardTotal: number;
  categories: readonly DatasetCategory[];
};

const datasetPartitions: readonly DatasetPartition[] = [
  {
    code: "DEV / TRAIN",
    title: { en: "Development / Training Set", zh: "开发 / 训练集" },
    total: 3200,
    primaryLabel: { en: "Core tasks", zh: "主体任务" },
    primaryTotal: 3000,
    hardLabel: { en: "Hard routing samples", zh: "困难路由样本" },
    hardTotal: 200,
    categories: [
      {
        title: { en: "Text tasks", zh: "文本任务" },
        total: 1000,
        benchmarks: [
          { name: "GSM8K", count: 400 },
          { name: "CommonsenseQA", count: 300 },
          { name: "BBH", count: 300 },
        ],
      },
      {
        title: { en: "Vision tasks", zh: "视觉任务" },
        total: 1000,
        benchmarks: [
          { name: "ScienceQA", count: 400 },
          { name: "MMMU", count: 200 },
          { name: "ChartQA", count: 200 },
          { name: "OCR-VQA", count: 200 },
        ],
      },
      {
        title: { en: "Tool-calling tasks", zh: "工具调用任务" },
        total: 1000,
        benchmarks: [
          { name: "BFCL Simple", count: 500 },
          { name: "BFCL Multiple", count: 500 },
        ],
      },
      {
        title: { en: "Hard routing samples", zh: "困难路由样本" },
        total: 200,
        hard: true,
        benchmarks: [
          { name: "Hard Text", nameZh: "困难文本", count: 70 },
          { name: "Hard Vision", nameZh: "困难视觉", count: 70 },
          { name: "Hard Tool", nameZh: "困难工具", count: 60 },
        ],
      },
    ],
  },
  {
    code: "FINAL TEST",
    title: { en: "Final Test Set", zh: "最终测试集" },
    total: 800,
    primaryLabel: { en: "Standard test set", zh: "标准测试集" },
    primaryTotal: 600,
    hardLabel: { en: "Hard confirmation set", zh: "困难确认集" },
    hardTotal: 200,
    categories: [
      {
        title: { en: "Text tasks", zh: "文本任务" },
        total: 200,
        benchmarks: [
          { name: "GSM8K", count: 80 },
          { name: "CommonsenseQA", count: 60 },
          { name: "BBH", count: 60 },
        ],
      },
      {
        title: { en: "Vision tasks", zh: "视觉任务" },
        total: 200,
        benchmarks: [
          { name: "ScienceQA", count: 80 },
          { name: "MMMU", count: 40 },
          { name: "ChartQA", count: 40 },
          { name: "OCR-VQA", count: 40 },
        ],
      },
      {
        title: { en: "Tool-calling tasks", zh: "工具调用任务" },
        total: 200,
        benchmarks: [
          { name: "BFCL Simple", count: 100 },
          { name: "BFCL Multiple", count: 100 },
        ],
      },
      {
        title: { en: "Hard confirmation set", zh: "困难确认集" },
        total: 200,
        hard: true,
        benchmarks: [
          { name: "Hard Text", nameZh: "困难文本", count: 70 },
          { name: "Hard Vision", nameZh: "困难视觉", count: 70 },
          { name: "Hard Tool", nameZh: "困难工具", count: 60 },
        ],
      },
    ],
  },
] as const;

const experimentConfiguration = [
  { label: { en: "Cheap model", zh: "Cheap 模型" }, value: "qwen3.5-35b-a3b" },
  { label: { en: "Strong model", zh: "Strong 模型" }, value: "qwen3.5-397b-a17b" },
  { label: { en: "Temperature", zh: "Temperature" }, value: "0.2" },
  { label: { en: "Top P", zh: "Top P" }, value: "0.8" },
  { label: { en: "Max output", zh: "最大输出" }, value: "256 tokens" },
  { label: { en: "Thinking", zh: "Thinking" }, value: { en: "Disabled", zh: "关闭" } },
] as const;

const v5Results = [
  { method: "Always Cheap", accuracy: "68.25%", cost: "0.00029186", latency: "722.5 ms", strongUse: "0.00%", tone: "cheap" },
  { method: "Always Strong", accuracy: "72.75%", cost: "0.00079930", latency: "1,318.2 ms", strongUse: "100.00%", tone: "strong" },
  { method: "Frozen Task-Aware", accuracy: "72.12%", cost: "0.00068789", latency: "1,133.6 ms", strongUse: "69.88%", tone: "featured" },
  { method: "Learned Combined", accuracy: "72.00%", cost: "0.00078259", latency: "1,290.0 ms", strongUse: "95.88%", tone: "standard" },
  { method: "Reflection", accuracy: "72.00%", cost: "0.00067258", latency: "1,750.9 ms", strongUse: "67.38%", tone: "standard" },
] as const;

function RouterBenchV5ProcessMap({ language }: { language: Language }) {
  return (
    <figure className="routerbench-v5-process-figure">
      <div className="routerbench-v5-process-map">
        <svg className="routerbench-v5-process-wires" viewBox="0 0 1200 700" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <marker id="routerbench-v5-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
              <path d="M0,0 L8,4 L0,8 Z" />
            </marker>
            <marker id="routerbench-v5-guard-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
              <path d="M0,0 L8,4 L0,8 Z" />
            </marker>
          </defs>
          <path className="routerbench-v5-wire is-main" d="M276 255 L336 255" />
          <path className="routerbench-v5-wire is-main" d="M684 322 L744 322" />
          <path className="routerbench-v5-wire is-main" d="M924 310 L984 310" />
          <path className="routerbench-v5-wire is-guarded" d="M276 470 C430 650 760 650 830 535" />
          <circle className="routerbench-v5-wire-dot" cx="306" cy="255" r="4" />
          <circle className="routerbench-v5-wire-dot is-delay-1" cx="714" cy="322" r="4" />
          <circle className="routerbench-v5-wire-dot is-delay-2" cx="954" cy="310" r="4" />
          <text className="routerbench-v5-guard-label" x="505" y="642">
            {bilingual(language, "800 TEST TASKS · UNTOUCHED UNTIL FREEZE", "800 道测试题 · 冻结前保持未触碰")}
          </text>
        </svg>

        <article className="routerbench-v5-node is-data">
          <header><Database aria-hidden="true" size={19} /><span>01</span></header>
          <h3>{bilingual(language, "Pinned Data and Isolation", "固定数据与隔离")}</h3>
          <p>{bilingual(language, "Build both partitions from pinned source revisions, then verify exact, grouped and near-duplicate isolation.", "从固定来源版本构建两部分数据，并检查精确重复、分组重叠与近重复。")}</p>
          <dl className="routerbench-v5-volume-list">
            <div><dt>3,200</dt><dd>{bilingual(language, "Development", "开发集")}</dd></div>
            <div><dt>800</dt><dd>{bilingual(language, "Final test", "最终测试集")}</dd></div>
          </dl>
          <ul>
            <li>{bilingual(language, "Predefined five-fold IDs", "预先固定五折 ID")}</li>
            <li>{bilingual(language, "Zero forbidden overlap", "禁止重叠计数为 0")}</li>
            <li>{bilingual(language, "Manifest SHA-256 recorded", "记录 Manifest SHA-256")}</li>
          </ul>
        </article>

        <article className="routerbench-v5-node is-development">
          <header><Route aria-hidden="true" size={19} /><span>02 · PHASE 1</span></header>
          <h3>{bilingual(language, "Develop, Compare and Select", "开发、比较与选择")}</h3>
          <div className="routerbench-v5-model-lane">
            <span><small>CHEAP</small><strong>Qwen3.5-35B-A3B</strong></span>
            <b>+</b>
            <span><small>STRONG</small><strong>Qwen3.5-397B-A17B</strong></span>
          </div>
          <div className="routerbench-v5-label-block">
            <code>y = Strong correct − Cheap correct</code>
            <p><span>+1 · 288</span><span>−1 · 94</span><span>0 · 2,818</span></p>
          </div>
          <div className="routerbench-v5-method-branches">
            <section>
              <strong>Task-Aware</strong>
              <span>{bilingual(language, "Observable request structure", "可观察请求结构")}</span>
              <code>threshold = 2.0</code>
            </section>
            <section>
              <strong>Learned Combined</strong>
              <span>TF-IDF + 13 {bilingual(language, "features", "维特征")} · Ridge α=0.1</span>
              <code>threshold = −0.308617</code>
            </section>
            <section>
              <strong>Reflection</strong>
              <span>{bilingual(language, "Confidence + format + self-check", "置信度 + 格式 + 自检")}</span>
              <code>threshold = 0.75 · max 1 review</code>
            </section>
          </div>
          <footer>{bilingual(language, "Five-fold out-of-fold selection · no test participation", "五折 OOF 选择 · 测试集不参与")}</footer>
        </article>

        <article className="routerbench-v5-node is-freeze">
          <header><ShieldCheck aria-hidden="true" size={19} /><span>03</span></header>
          <h3>{bilingual(language, "Freeze Gate", "冻结闸门")}</h3>
          <p>{bilingual(language, "Seal every decision before the final test is read.", "在读取最终测试集前封存全部决策。")}</p>
          <ul>
            <li>{bilingual(language, "Data and source hashes", "数据与源码哈希")}</li>
            <li>{bilingual(language, "Prompts and model config", "提示词与模型配置")}</li>
            <li>{bilingual(language, "Features and scoring", "特征与评分规则")}</li>
            <li>{bilingual(language, "Estimators and thresholds", "估计器与阈值")}</li>
          </ul>
          <strong className="routerbench-v5-zero-call">0 {bilingual(language, "test API calls", "次测试 API 调用")}</strong>
        </article>

        <article className="routerbench-v5-node is-evaluation">
          <header><ShieldCheck aria-hidden="true" size={19} /><span>04 · PHASE 2</span></header>
          <h3>{bilingual(language, "Frozen Final Evaluation", "冻结最终评测")}</h3>
          <p>{bilingual(language, "Run the five frozen policies once on all 800 held-out tasks.", "在 800 道留出题上一次性运行五种冻结策略。")}</p>
          <ol>
            <li>Always Cheap / Strong</li>
            <li>Frozen Task-Aware</li>
            <li>Learned Combined</li>
            <li>Reflection</li>
          </ol>
          <div className="routerbench-v5-controls">
            <span>{bilingual(language, "Controls", "控制组")}</span>
            <p>Matched Random · Matched Oracle · Global Oracle</p>
          </div>
          <footer>{bilingual(language, "Accuracy · cost · latency · Strong rate · bootstrap", "准确率 · 成本 · 延迟 · Strong 使用率 · Bootstrap")}</footer>
        </article>
      </div>
      <figcaption>
        <ShieldCheck aria-hidden="true" size={15} />
        {bilingual(
          language,
          "V5 uses a two-phase frozen protocol: all training, cross-validation and threshold selection finish before the 800-task test set is accessed.",
          "V5 使用两阶段冻结协议：全部训练、交叉验证和阈值选择完成后，才允许访问 800 道最终测试题。",
        )}
      </figcaption>
    </figure>
  );
}

function DatasetPartitionCard({
  partition,
  localize,
}: {
  partition: DatasetPartition;
  localize: (text: LocalizedText) => string;
}) {
  return (
    <article className="routerbench-dataset-card">
      <header className="routerbench-dataset-card-header">
        <div>
          <span>{partition.code}</span>
          <h3>{localize(partition.title)}</h3>
        </div>
        <p>
          <strong>{partition.total.toLocaleString("en-US")}</strong>
          {localize({ en: "tasks", zh: "题" })}
        </p>
      </header>

      <div className="routerbench-partition-summary" aria-label={localize({ en: "Partition summary", zh: "划分摘要" })}>
        <p><span>{localize(partition.primaryLabel)}</span><strong>{partition.primaryTotal.toLocaleString("en-US")}</strong></p>
        <p className="is-hard"><span>{localize(partition.hardLabel)}</span><strong>{partition.hardTotal.toLocaleString("en-US")}</strong></p>
      </div>

      <div className="routerbench-dataset-groups">
        {partition.categories.map((category) => (
          <section className={category.hard ? "routerbench-dataset-group is-hard" : "routerbench-dataset-group"} key={category.title.en}>
            <header>
              <h4>{localize(category.title)}</h4>
              <strong>{category.total.toLocaleString("en-US")}</strong>
            </header>
            <div className="routerbench-dataset-bar" aria-hidden="true">
              {category.benchmarks.map((benchmark) => (
                <span key={benchmark.name} style={{ width: `${(benchmark.count / category.total) * 100}%` }} />
              ))}
            </div>
            <ul>
              {category.benchmarks.map((benchmark) => (
                <li key={benchmark.name}>
                  <span>{benchmark.nameZh ? localize({ en: benchmark.name, zh: benchmark.nameZh }) : benchmark.name}</span>
                  <strong>{benchmark.count}</strong>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

export function RouterBenchDetail() {
  const { language } = useLanguage();
  const localize = (text: LocalizedText) => bilingual(language, text.en, text.zh);

  return (
    <main className="page-shell routerbench-detail-page page-enter">
      <section className="paper-brief-hero routerbench-paper-hero" aria-labelledby="routerbench-detail-title">
        <p className="paper-keywords">
          {bilingual(
            language,
            "Cost-Aware Routing · Multimodal Tasks · Agentic AI",
            "成本感知模型路由 · 多模态任务 · 智能体系统",
          )}
        </p>
        <h1 id="routerbench-detail-title">
          {bilingual(language, "RouterBench-Mini", "面向多模态任务的成本感知模型路由研究")}
        </h1>
        <p className="paper-authors"><span className="is-owner">Zhenkai Zhang</span></p>
        <p className="routerbench-paper-positioning">
          {bilingual(
            language,
            "An ongoing independent research project, currently presented as an experimental report and intended for continued expansion and refinement.",
            "一项正在持续推进的独立研究，目前以实验报告形式呈现，后续将继续扩展并完善。",
          )}
        </p>
        <div className="paper-primary-action">
          <ActionButton external href={repositoryUrl} variant="primary">
            <Code2 aria-hidden="true" size={16} /> GitHub
          </ActionButton>
        </div>
      </section>

      <section className="paper-visual-section routerbench-paper-visual" aria-label={bilingual(language, "RouterBench-Mini result overview", "RouterBench-Mini 结果概览")}>
        <div className="paper-visual-gallery">
          <figure className="paper-visual-frame routerbench-paper-figure">
            <ZoomableImage
              alt={bilingual(
                language,
                "Cost-aware model routing research for multimodal tasks.",
                "面向多模态任务的成本感知模型路由研究图。",
              )}
              decoding="async"
              loading="eager"
              src={routerBenchOverview}
            />
          </figure>
        </div>
      </section>

      <section className="paper-abstract-section routerbench-paper-abstract" aria-labelledby="routerbench-overview-title">
        <h2 id="routerbench-overview-title">{bilingual(language, "Overview", "中文概述")}</h2>
        <p>
          {localize(overviewIntroLead)}<strong>RouterBench-Mini</strong>{localize(overviewIntroTail)}
        </p>
        <p>
          {localize(overviewResultLead)}
          <strong>72.12%</strong>
          {localize(overviewCostBridge)}<strong>13.9%</strong>{localize(overviewLatencyBridge)}<strong>14.0%</strong>{bilingual(language, ".", "。")}
        </p>
      </section>

      <section className="routerbench-dataset" aria-labelledby="routerbench-dataset-title">
        <header className="routerbench-numbered-heading">
          <div>
            <h2 id="routerbench-dataset-title">{bilingual(language, "Dataset Description", "数据集描述")}</h2>
            <p>
              {bilingual(
                language,
                "The latest protocol contains 4,000 tasks: 3,200 examples for development and training, plus an 800-task final test. Both partitions cover text, vision and tool-calling tasks, with a dedicated hard subset for routing and confirmation.",
                "最新版实验共包含 4,000 道题：3,200 道用于开发与训练，800 道用于最终测试。两部分均覆盖文本、视觉与工具调用任务，并设置独立的困难样本用于路由学习与最终确认。",
              )}
            </p>
          </div>
        </header>

        <div className="routerbench-dataset-layout">
          {datasetPartitions.map((partition) => (
            <DatasetPartitionCard key={partition.code} localize={localize} partition={partition} />
          ))}
        </div>

        <div className="routerbench-experiment-config" aria-label={bilingual(language, "Current experiment configuration", "当前实验配置")}>
          <p>{bilingual(language, "Current experiment configuration", "当前实验配置")}</p>
          <dl>
            {experimentConfiguration.map((item) => (
              <div key={item.label.en}>
                <dt>{localize(item.label)}</dt>
                <dd>{typeof item.value === "string" ? item.value : localize(item.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="routerbench-methods" aria-labelledby="routerbench-methods-title">
        <header className="routerbench-numbered-heading routerbench-methods-heading">
          <h2 id="routerbench-methods-title">{bilingual(language, "Routing Methods", "路由方法")}</h2>
        </header>

        <RouterBenchV5ProcessMap language={language} />

        <div className="routerbench-v5-process-copy">
          <Route aria-hidden="true" size={20} />
          <p>
            {bilingual(
              language,
              "The experiment is divided into two strictly separated phases. Phase 1 caches Cheap solves, Strong solves and Strong reviews on 3,200 development tasks; constructs quality-gap and response-confidence labels; and uses predefined five-fold out-of-fold predictions to compare representations and select thresholds. The manifest hashes, source code, prompts, model configuration, feature and scoring rules, trained estimators and thresholds are then frozen while the test API-call count is still zero. Phase 2 loads those frozen artifacts and evaluates five policies once on the untouched 800-task test set, followed by matched Random, matched Oracle, Global Oracle and paired-bootstrap diagnostics. No test result is used to retune a method.",
              "整个实验被严格划分为两个阶段。Phase 1 在 3,200 道开发题上缓存 Cheap 独立回答、Strong 独立回答和 Strong review，构造质量差与回答置信度标签，并依据预先固定的五折 OOF 预测比较特征表示、选择路由阈值。随后，在测试 API 调用数仍为 0 时，统一冻结 Manifest 哈希、源码、提示词、模型配置、特征与评分规则、训练后的估计器和阈值。Phase 2 只加载这些冻结产物，在未触碰的 800 道测试题上一次性评估五种策略，再使用同升级率 Random、同预算 Oracle、Global Oracle 与配对 Bootstrap 进行诊断；测试结果不会回流用于重新调参。",
            )}
          </p>
        </div>

        <div className="routerbench-v5-results-heading">
          <p>V5 · 3,200 / 800 FROZEN EVALUATION</p>
          <h3>{bilingual(language, "Final Test Results", "最终测试结果")}</h3>
        </div>

        <div className="routerbench-table-wrap routerbench-v5-table-wrap">
          <table className="routerbench-data-table routerbench-v5-results-table">
            <thead>
              <tr>
                <th>{bilingual(language, "Method", "方法")}</th>
                <th>{bilingual(language, "Accuracy", "准确率")}</th>
                <th>{bilingual(language, "Avg. Cost (CNY)", "平均成本（元）")}</th>
                <th>{bilingual(language, "Avg. Latency", "平均延迟")}</th>
                <th>{bilingual(language, "Strong Rate", "Strong 使用率")}</th>
              </tr>
            </thead>
            <tbody>
              {v5Results.map((row) => (
                <tr className={`is-${row.tone}`} key={row.method}>
                  <th scope="row" data-label={bilingual(language, "Method", "方法")}>
                    {row.method}
                    {row.tone === "featured" ? <span>{bilingual(language, "Cost-aware choice", "成本感知选择")}</span> : null}
                  </th>
                  <td data-label={bilingual(language, "Accuracy", "准确率")}>{row.accuracy}</td>
                  <td data-label={bilingual(language, "Avg. Cost (CNY)", "平均成本（元）")}>{row.cost}</td>
                  <td data-label={bilingual(language, "Avg. Latency", "平均延迟")}>{row.latency}</td>
                  <td data-label={bilingual(language, "Strong Rate", "Strong 使用率")}>{row.strongUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="routerbench-v5-result-reading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "Result Reading", "结果描述")}</p>
            <h3>{bilingual(language, "More data did not make the complex router more stable.", "扩大数据规模后，复杂路由仍未表现得更稳定。")}</h3>
            <p>
              {bilingual(
                language,
                "Always Strong records the highest accuracy at 72.75%. Frozen Task-Aware answers 577 of 800 tasks correctly and reaches 72.12%—only 0.63 percentage points lower—while reducing average cost by 13.9%, average latency by 14.0%, and Strong usage to 69.88%.",
                "Always Strong 以 72.75% 获得最高准确率。Frozen Task-Aware 在 800 道题中答对 577 道，准确率为 72.12%，仅低 0.63 个百分点；同时平均成本降低 13.9%、平均延迟降低 14.0%，Strong 使用率降至 69.88%。",
              )}
            </p>
            <p>
              {bilingual(
                language,
                "Learned Combined and Reflection each answer 576 tasks correctly. Learned Combined sends 95.88% of requests to Strong but still trails Task-Aware by one answer; Reflection lowers model-call cost, yet its review cascade raises average latency to 1,750.9 ms. Under the current evidence, Frozen Task-Aware remains the most defensible cost-aware policy.",
                "Learned Combined 与 Reflection 均答对 576 道题。Learned Combined 将 95.88% 的请求交给 Strong，却仍比 Task-Aware 少答对 1 道；Reflection 降低了模型调用成本，但级联 review 将平均延迟推高到 1,750.9 ms。基于当前证据，Frozen Task-Aware 仍是更稳妥的成本感知策略。",
              )}
            </p>
            <p>
              {bilingual(
                language,
                "The Global Oracle diagnostic reaches 76.25% accuracy with only 8% Strong usage. This shows that the central challenge is not buying more Strong calls, but identifying the 64 test tasks where escalation is genuinely beneficial while avoiding cases where Strong regresses.",
                "Global Oracle 诊断只使用 8% 的 Strong 调用便达到 76.25% 准确率。这说明核心难点不是增加 Strong 调用数量，而是准确识别 64 道升级确实有收益的测试题，同时避开 Strong 发生回退的样本。",
              )}
            </p>
          </div>
          <dl>
            <div><dt>577 / 800</dt><dd>{bilingual(language, "Task-Aware correct", "Task-Aware 答对")}</dd></div>
            <div><dt>−0.63 pp</dt><dd>{bilingual(language, "vs. Always Strong", "对比 Always Strong")}</dd></div>
            <div><dt>−13.9%</dt><dd>{bilingual(language, "Average cost", "平均成本")}</dd></div>
            <div><dt>−14.0%</dt><dd>{bilingual(language, "Average latency", "平均延迟")}</dd></div>
          </dl>
        </div>

        <p className="routerbench-v5-source-note">
          {bilingual(language, "Source: V5 frozen-evaluation branch and its committed result artifacts.", "数据来源：V5 frozen-evaluation 分支及其中提交的结果产物。")}
          <a href={reportUrl} target="_blank" rel="noreferrer">{bilingual(language, "Read V5 report", "查看 V5 报告")}<ArrowUpRight aria-hidden="true" size={13} /></a>
        </p>
      </section>

    </main>
  );
}
