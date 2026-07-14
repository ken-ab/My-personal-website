import { Braces, Code2 } from "lucide-react";
import type { AgentSystemProjectShowcase } from "../../data/portfolio";
import { FinanceAgentSystemMap } from "../finance/FinanceAgentSystemMap";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

type FinanceAgentProjectShowcaseProps = {
  showcase: AgentSystemProjectShowcase;
  title: string;
  projectId: string;
};

export function FinanceAgentProjectShowcase({ showcase, title }: FinanceAgentProjectShowcaseProps) {
  const { language } = useLanguage();
  const factLabels = ["并行专业智能体", "MCP 工具族", "有界反思轮次"];
  return (
    <section className="finance-project-showcase" aria-label={`${title} system preview`}>
      <div className="finance-showcase-heading">
        <div>
          <span className="finance-source-dot" aria-hidden="true" />
          <strong>{showcase.status}</strong>
        </div>
        <span><Code2 aria-hidden="true" size={14} /> ken-ab/Finance-Agent</span>
      </div>

      <FinanceAgentSystemMap
        agents={showcase.agents}
        compact
        query={showcase.query}
        toolFamilies={showcase.toolFamilies}
      />

      <div className="finance-showcase-footer">
        <dl className="finance-showcase-facts">
          {showcase.facts.map((fact, index) => (
            <div key={fact.label}>
              <dt>{fact.value}</dt>
              <dd>{language === "zh" ? factLabels[index] ?? fact.label : fact.label}</dd>
            </div>
          ))}
        </dl>
        <div className="finance-report-ribbon">
          <Braces aria-hidden="true" size={18} />
          <span>{bilingual(language, "Structured output", "结构化输出")}</span>
          <strong>{showcase.reportSections.join(" · ")}</strong>
        </div>
      </div>
    </section>
  );
}
