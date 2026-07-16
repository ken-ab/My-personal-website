import {
  BadgeCheck,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  MessageSquareText,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Timer,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { AgentProjectCaseStudy } from "../../data/caseStudies";
import { ActionButton } from "../portfolio/ActionButton";
import { FinanceAgentSystemMap } from "../finance/FinanceAgentSystemMap";
import { financeZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

const financeMetrics = [
  {
    value: "4,000+",
    icon: Database,
    en: {
      label: "A-share Coverage",
      detail: "Supports multi-dimensional fundamental, technical, valuation, and news analysis.",
    },
    zh: {
      label: "A 股覆盖范围",
      detail: "支持基本面、技术面、估值与新闻等多维度分析。",
    },
  },
  {
    value: "91.2%",
    icon: MessageSquareText,
    en: {
      label: "Sentiment Model Accuracy",
      detail: "Final result on an independent test set after Qwen3-2.5B LoRA fine-tuning.",
    },
    zh: {
      label: "情感模型准确率",
      detail: "基于 Qwen3-2.5B LoRA 微调，在独立测试集上的最终结果。",
    },
  },
  {
    value: "88.4%",
    icon: ShieldAlert,
    en: {
      label: "Risk Model Accuracy",
      detail: "Final result on an independent test set after Qwen3-2.5B LoRA fine-tuning.",
    },
    zh: {
      label: "风险模型准确率",
      detail: "基于 Qwen3-2.5B LoRA 微调，在独立测试集上的最终结果。",
    },
  },
  {
    value: "98%",
    icon: Workflow,
    en: {
      label: "Tool-call Success Rate",
      detail: "Successful MCP data-tool calls across the end-to-end analysis workflow.",
    },
    zh: {
      label: "工具调用成功率",
      detail: "MCP 数据工具在端到端分析流程中的成功调用比例。",
    },
  },
  {
    value: "≈99%",
    icon: BadgeCheck,
    en: {
      label: "Data Consistency",
      detail: "Validation consistency across data tools, analytical results, and final reports.",
    },
    zh: {
      label: "数据一致率",
      detail: "不同数据工具、分析结果与最终报告之间的校验一致性。",
    },
  },
  {
    value: "≈90s",
    icon: Timer,
    en: {
      label: "End-to-end Analysis Latency",
      detail: "Reduced from over two minutes to about 90 seconds through parallel agents and result caching.",
    },
    zh: {
      label: "端到端分析时延",
      detail: "通过多 Agent 并行执行与结果缓存，由 2 分钟以上降至约 90 秒。",
    },
  },
  {
    value: "≈0.1%",
    icon: SlidersHorizontal,
    en: {
      label: "LoRA Trainable Parameter Ratio",
      detail: "Updates only a small parameter subset, substantially reducing memory and compute costs.",
    },
    zh: {
      label: "LoRA 可训练参数比例",
      detail: "仅更新少量模型参数，显著降低训练显存与计算成本。",
    },
  },
  {
    value: "78%",
    icon: TrendingUp,
    en: {
      label: "Investment Recommendation Accuracy",
      detail: "Backtested on two years of A-share data against expected performance over the following 3–6 months.",
    },
    zh: {
      label: "投资建议准确率",
      detail: "基于过去两年 A 股数据回测，评估投资建议在随后 3–6 个月内是否达到预期表现。",
    },
  },
];

export function FinanceAgentDetail({ study }: { study: AgentProjectCaseStudy }) {
  const { language } = useLanguage();
  const agents = ["Fundamental", "Technical", "Valuation", "News"];
  const toolFamilies = study.toolFamilies ?? [];
  const reportSections = study.reportSections ?? [];

  return (
    <>
      <section className="finance-detail-hero">
        <div className="finance-detail-copy">
          <p className="finance-detail-keywords">{study.keywords?.join(" · ")}</p>
          <span className="finance-detail-status"><i aria-hidden="true" /> {bilingual(language, "Technical Project Overview", financeZh.status)}</span>
          <h1>
            {language === "zh" ? (
              <>基于 MCP 协议的<br />A 股智能分析系统</>
            ) : "MCP-Based A-share Intelligent Analysis System"}
          </h1>
          <p>{bilingual(language, study.oneLineSummary, financeZh.summary)}</p>
          {study.githubUrl ? (
            <div className="finance-detail-actions">
              <ActionButton external href={study.githubUrl} variant="primary">
                <Code2 aria-hidden="true" size={17} /> GitHub
              </ActionButton>
            </div>
          ) : null}
        </div>

        <aside className="finance-detail-meta">
          <span>{study.period}</span>
          <strong>{bilingual(language, "Algorithm Engineer", "算法工程师")}</strong>
          <p>{bilingual(language, financeZh.responsibilityEn, financeZh.responsibility)}</p>
        </aside>
      </section>

      <section className="finance-fact-strip" aria-label={bilingual(language, "Verified Finance-Agent facts", "已核验的 Finance-Agent 事实")}>
        {study.facts?.map((fact, index) => (
          <article key={fact.label}>
            <strong>{fact.value}</strong>
            <div>
              <h2>{bilingual(language, fact.label, financeZh.facts[index]?.label ?? fact.label)}</h2>
              <p>{bilingual(language, fact.note, financeZh.facts[index]?.note ?? fact.note)}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="finance-architecture-section" aria-labelledby="finance-architecture-title">
        <header className="finance-section-heading is-label-only">
          <h2 className="finance-section-label" id="finance-architecture-title">
            {bilingual(language, "System Architecture", financeZh.architecture.eyebrow)}
          </h2>
        </header>

        <FinanceAgentSystemMap agents={agents} toolFamilies={toolFamilies} />
      </section>

      <section className="finance-tools-section" aria-labelledby="finance-tools-title">
        <header className="finance-section-heading is-label-only">
          <h2 className="finance-section-label" id="finance-tools-title">
            {bilingual(language, "Model & System Metrics", financeZh.tools.eyebrow)}
          </h2>
        </header>
        <div className="finance-metric-grid">
          {financeMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const copy = language === "zh" ? metric.zh : metric.en;
            return (
              <article className="finance-metric-card" key={copy.label}>
                <div className="finance-metric-card-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                </div>
                <strong className="finance-metric-value">{metric.value}</strong>
                <h3>{copy.label}</h3>
                <p>{copy.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="finance-output-section" aria-labelledby="finance-output-title">
        <div className="finance-markdown-sheet">
          <header>
            <div>
              <FileText aria-hidden="true" size={20} />
              <span>{bilingual(language, "ILLUSTRATIVE OUTPUT STRUCTURE", financeZh.reportLabel)}</span>
            </div>
            <small>{bilingual(language, "Markdown / no fabricated investment result", financeZh.reportNote)}</small>
          </header>
          <div className="finance-markdown-body">
            <span className="finance-md-h1"># {bilingual(language, "A-share Company Analysis", financeZh.reportTitle)}</span>
            {reportSections.map((section, index) => (
              <div className="finance-md-section" key={section}>
                <strong>## {language === "zh" ? financeZh.reportSections[index] ?? section : section}</strong>
                <i style={{ width: `${82 - (index % 3) * 11}%` }} />
                <i style={{ width: `${61 + (index % 2) * 17}%` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="finance-output-copy">
          <h2 className="finance-section-label" id="finance-output-title">{bilingual(language, "Evaluation & Reflection", financeZh.output.eyebrow)}</h2>
          <ol>
            <li><ShieldCheck aria-hidden="true" size={20} /><span><strong>{bilingual(language, "Evaluate", "评估")}</strong> {bilingual(language, "section coverage, logic, and task alignment.", financeZh.output.steps[0])}</span></li>
            <li><RefreshCw aria-hidden="true" size={20} /><span><strong>{bilingual(language, "Reflect", "反思")}</strong> {bilingual(language, "with a replan instruction only when the evaluator requests revision.", financeZh.output.steps[1])}</span></li>
            <li><CheckCircle2 aria-hidden="true" size={20} /><span><strong>{bilingual(language, "Terminate", "终止")}</strong> {bilingual(language, "after a passing report or the single bounded retry.", financeZh.output.steps[2])}</span></li>
          </ol>
          {study.experimentalNote ? (
            <aside className="finance-experimental-note">
              <Code2 aria-hidden="true" size={20} />
              <div>
                <span>{bilingual(language, "EXPERIMENTAL SIDE TRACK", financeZh.output.experimental)}</span>
                <p>{bilingual(language, study.experimentalNote, financeZh.experimentalNote)}</p>
              </div>
            </aside>
          ) : null}
        </div>
      </section>
    </>
  );
}
