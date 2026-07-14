import {
  Activity,
  BarChart3,
  Database,
  FileText,
  GitBranch,
  Newspaper,
  RefreshCw,
  Search,
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

const agentIcons = [Database, Activity, BarChart3, Newspaper];

export function FinanceAgentSystemMap({
  agents,
  compact = false,
  query = "Analyze BYD (002594)",
  toolFamilies,
}: FinanceAgentSystemMapProps) {
  const { language } = useLanguage();
  const agentZh = ["基本面", "技术面", "估值", "新闻"];
  const displayQuery = language === "zh" && query === "Analyze BYD (002594)" ? "分析比亚迪（002594）" : query;
  return (
    <div
      aria-label={bilingual(language, "Finance-Agent workflow from natural-language query through MCP tools, parallel specialist agents, summary, evaluation, reflection, and Markdown output", "Finance-Agent 从自然语言查询，经 MCP 工具、并行专业智能体、汇总、评估和反思到 Markdown 输出的工作流")}
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
          <path className="finance-wire is-flowing" d="M335 260 C380 260 380 145 420 145" />
          <path className="finance-wire is-flowing delay-1" d="M335 260 C380 260 380 145 590 145" />
          <path className="finance-wire is-flowing delay-2" d="M335 260 C380 260 380 375 420 375" />
          <path className="finance-wire is-flowing delay-3" d="M335 260 C380 260 380 375 590 375" />
          <path className="finance-wire is-flowing" d="M545 145 C735 145 700 260 745 260" />
          <path className="finance-wire is-flowing delay-1" d="M715 145 C735 145 720 260 745 260" />
          <path className="finance-wire is-flowing delay-2" d="M545 375 C735 375 700 260 745 260" />
          <path className="finance-wire is-flowing delay-3" d="M715 375 C735 375 720 260 745 260" />
          <path className="finance-wire is-flowing" d="M850 260 H885" />
          <path className="finance-wire is-pass" d="M995 240 C1030 220 1030 155 1060 155" />
          <path className="finance-wire is-review" d="M940 305 V375" />
          <path className="finance-wire is-review" d="M885 425 C745 490 610 475 540 410" />
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
        <div>
          {agents.map((agent, index) => {
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
