import {
  Activity,
  BarChart3,
  Cpu,
  Database,
  FileText,
  GitFork,
  GitBranch,
  MessageSquareText,
  Newspaper,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

type FinanceAgentSystemMapProps = {
  agents: string[];
  compact?: boolean;
  query?: string;
  toolFamilies: string[];
};

const agentIcons = [Database, Activity, BarChart3];

export function FinanceAgentSystemMap({
  agents,
  compact = false,
  query = "Analyze BYD (002594)",
  toolFamilies,
}: FinanceAgentSystemMapProps) {
  const { language } = useLanguage();
  const agentZh = ["基本面", "技术面", "估值", "新闻"];
  const displayQuery = language === "zh" && query === "Analyze BYD (002594)" ? "分析比亚迪（002594）" : query;
  const standardAgents = agents.slice(0, 3);
  const newsAgent = agents[3] ?? "News";
  return (
    <div
      aria-label={bilingual(
        language,
        "Finance-Agent workflow from a natural-language query through MCP tools and four parallel specialist agents. The news agent separates sentiment and risk scoring, with a LoRA-tuned Qwen3-2.5B model in the risk branch, before summary, evaluation, reflection, and Markdown output.",
        "Finance-Agent 从自然语言查询进入 MCP 工具与四个并行专业智能体；新闻智能体进一步拆分情感分析和风险评估，风险分支使用经 LoRA 微调的 Qwen3-2.5B 模型，最后进入汇总、评估、反思与 Markdown 输出。",
      )}
      className={`finance-system-map${compact ? " is-compact" : ""}`}
    >
      <svg aria-hidden="true" className="finance-system-wires" preserveAspectRatio="none" viewBox="0 0 1200 520">
        <defs>
          <marker id={compact ? "finance-arrow-compact" : "finance-arrow"} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
            <path d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        <g markerEnd={`url(#${compact ? "finance-arrow-compact" : "finance-arrow"})`}>
          <path className="finance-wire is-flowing" d="M170 260 H225" />
          <path className="finance-wire is-flowing" d="M335 260 C370 260 370 145 400 145" />
          <path className="finance-wire is-flowing delay-1" d="M335 260 H400" />
          <path className="finance-wire is-flowing delay-2" d="M335 260 C370 260 370 375 400 375" />
          <path className="finance-wire is-flowing delay-3" d="M335 260 C410 260 445 360 535 360" />
          <path className="finance-wire is-flowing" d="M500 145 C760 145 735 260 790 260" />
          <path className="finance-wire is-flowing delay-1" d="M500 260 H790" />
          <path className="finance-wire is-flowing delay-2" d="M500 375 C760 375 735 260 790 260" />
          <path className="finance-wire is-flowing delay-3" d="M745 360 C770 360 770 260 790 260" />
          <path className="finance-wire is-flowing" d="M895 260 H920" />
          <path className="finance-wire is-pass" d="M1030 240 C1050 220 1050 155 1070 155" />
          <path className="finance-wire is-review" d="M975 305 V375" />
          <path className="finance-wire is-review" d="M920 425 C785 490 655 475 570 410" />
        </g>
      </svg>

      <article className="finance-system-node finance-query-node">
        <span>01 / {bilingual(language, "INPUT", "输入")}</span>
        <Search aria-hidden="true" size={compact ? 17 : 22} />
        <strong>{displayQuery}</strong>
        <p>{bilingual(language, "Natural-language stock request", "自然语言股票研究请求")}</p>
      </article>

      <article className="finance-system-node finance-mcp-node">
        <span>02 / {bilingual(language, "DATA", "数据")}</span>
        <Workflow aria-hidden="true" size={compact ? 18 : 23} />
        <strong>{bilingual(language, "MCP tool fabric", "MCP 工具层")}</strong>
        <p>{toolFamilies.length} {bilingual(language, "registered tool families", "类已注册工具")}</p>
        <div className="finance-tool-ticks" aria-hidden="true">
          {toolFamilies.map((tool) => <i key={tool} />)}
        </div>
      </article>

      <section className="finance-agent-cluster" aria-label={bilingual(language, "Parallel specialist agents", "并行专业智能体")}>
        <header>
          <span>03 / {bilingual(language, "PARALLEL REASONING", "并行推理")}</span>
          <strong>{bilingual(language, "Specialist agents", "专业智能体")}</strong>
        </header>
        <div className="finance-agent-layout">
          <div className="finance-standard-agent-stack">
            {standardAgents.map((agent, index) => {
              const Icon = agentIcons[index] ?? Database;
              return (
                <article className="finance-agent-node" key={agent}>
                  <Icon aria-hidden="true" size={compact ? 16 : 20} />
                  <strong>{language === "zh" ? agentZh[index] ?? agent : agent}</strong>
                  <i aria-hidden="true" />
                </article>
              );
            })}
          </div>

          <div className="finance-news-pipeline">
            <article className="finance-news-training-node">
              <header>
                <span>{bilingual(language, "TRAINING", "训练")}</span>
                <Cpu aria-hidden="true" size={compact ? 14 : 17} />
              </header>
              <div className="finance-training-data">
                <Database aria-hidden="true" size={compact ? 13 : 16} />
                <div>
                  <strong>{bilingual(language, "Labeled news corpus", "标注新闻语料")}</strong>
                  <small>{bilingual(language, "Sentiment 1–5 · Risk 1–5", "情感 1–5 · 风险 1–5")}</small>
                </div>
              </div>
              <div className="finance-training-method">
                <span>Qwen3-2.5B + LoRA {bilingual(language, "fine-tuning", "微调")}</span>
              </div>
              <div className="finance-training-output">
                <strong>{bilingual(language, "Two scoring adapters", "两套评分适配器")}</strong>
                <small>{bilingual(language, "Sentiment · Risk", "情感 · 风险")}</small>
              </div>
            </article>

            <svg aria-hidden="true" className="finance-adapter-route" preserveAspectRatio="none" viewBox="0 0 200 30">
              <defs>
                <marker id={compact ? "finance-adapter-arrow-compact" : "finance-adapter-arrow"} markerHeight="6" markerWidth="7" orient="auto" refX="6" refY="3">
                  <path d="M0,0 L7,3 L0,6 Z" />
                </marker>
              </defs>
              <g markerEnd={`url(#${compact ? "finance-adapter-arrow-compact" : "finance-adapter-arrow"})`}>
                <path d="M100 0 V10 H50 V29" />
                <path d="M100 10 H150 V29" />
              </g>
            </svg>

            <article className="finance-news-agent-node">
              <header>
                <Newspaper aria-hidden="true" size={compact ? 16 : 20} />
                <div>
                  <span>{bilingual(language, "NEWS ANALYSIS", "新闻面")}</span>
                  <strong>{language === "zh" ? agentZh[3] : newsAgent}</strong>
                </div>
                <i aria-hidden="true" />
              </header>

              <div className="finance-news-source">
                <span>{bilingual(language, "Live company news", "实时公司新闻")}</span>
                <GitFork aria-hidden="true" size={compact ? 13 : 15} />
              </div>

              <div className="finance-news-branches">
                <div className="finance-news-branch is-sentiment">
                  <MessageSquareText aria-hidden="true" size={compact ? 14 : 17} />
                  <span>{bilingual(language, "SENTIMENT", "情感分析")}</span>
                  <strong>{bilingual(language, "1–5 polarity", "1–5 级倾向")}</strong>
                </div>
                <div className="finance-news-branch is-risk">
                  <ShieldAlert aria-hidden="true" size={compact ? 14 : 17} />
                  <span>{bilingual(language, "RISK", "风险评估")}</span>
                  <strong>{bilingual(language, "1–5 severity", "1–5 级风险")}</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <article className="finance-system-node finance-summary-node">
        <span>04 / {bilingual(language, "SYNTHESIZE", "汇总")}</span>
        <FileText aria-hidden="true" size={compact ? 18 : 22} />
        <strong>{bilingual(language, "Summary agent", "汇总智能体")}</strong>
        <p>{bilingual(language, "Merge four traceable perspectives", "合并四条可追踪分析")}</p>
      </article>

      <article className="finance-system-node finance-evaluator-node">
        <span>05 / {bilingual(language, "CHECK", "检查")}</span>
        <ShieldCheck aria-hidden="true" size={compact ? 18 : 22} />
        <strong>{bilingual(language, "Evaluator", "评估器")}</strong>
        <p>{bilingual(language, "Coverage, logic, and goal alignment", "覆盖度、逻辑与目标匹配")}</p>
      </article>

      <article className="finance-system-node finance-report-node">
        <span>{bilingual(language, "PASS", "通过")}</span>
        <FileText aria-hidden="true" size={compact ? 18 : 22} />
        <strong>{bilingual(language, "Markdown report", "Markdown 报告")}</strong>
        <p>{bilingual(language, "Structured, saved, inspectable", "结构化、可保存、可检查")}</p>
      </article>

      <article className="finance-system-node finance-reflection-node">
        <span>{bilingual(language, "NEEDS REVISION", "需要修订")}</span>
        <RefreshCw aria-hidden="true" size={compact ? 18 : 22} />
        <strong>{bilingual(language, "Reflection", "反思")}</strong>
        <p>{bilingual(language, "One bounded replan, then rerun", "一次有界重规划后重新执行")}</p>
      </article>

      <div className="finance-loop-label" aria-hidden="true">
        <GitBranch size={14} /> {bilingual(language, "evaluator-controlled branch", "由评估器控制的分支")}
      </div>
    </div>
  );
}
