import {
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Layers3,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import type { AgentProjectCaseStudy } from "../../data/caseStudies";
import { ActionButton } from "../portfolio/ActionButton";
import { FinanceAgentSystemMap } from "../finance/FinanceAgentSystemMap";
import { financeZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

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
          <span className="finance-detail-status"><i aria-hidden="true" /> {bilingual(language, "source-backed system brief", financeZh.status)}</span>
          <h1>{study.title}</h1>
          <p>{bilingual(language, study.subtitle, financeZh.subtitle)}</p>
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
          <strong>{study.role}</strong>
          <p>{bilingual(language, study.oneLineSummary, financeZh.summary)}</p>
        </aside>
      </section>

      <section className="finance-fact-strip" aria-label="Verified Finance-Agent facts">
        {study.facts?.map((fact, index) => (
          <article key={fact.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{fact.value}</strong>
            <div>
              <h2>{bilingual(language, fact.label, financeZh.facts[index]?.label ?? fact.label)}</h2>
              <p>{bilingual(language, fact.note, financeZh.facts[index]?.note ?? fact.note)}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="finance-architecture-section" aria-labelledby="finance-architecture-title">
        <header className="finance-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "System Architecture", financeZh.architecture.eyebrow)}</p>
            <h2 id="finance-architecture-title">{bilingual(language, "One query, four perspectives, one inspected report", financeZh.architecture.title)}</h2>
          </div>
          <p>{bilingual(language, "The graph keeps each analytical role visible, then routes incomplete reports through one bounded reflection round.", financeZh.architecture.lead)}</p>
        </header>

        <FinanceAgentSystemMap agents={agents} toolFamilies={toolFamilies} />
      </section>

      <section className="finance-tools-section" aria-labelledby="finance-tools-title">
        <header className="finance-section-heading is-compact">
          <div>
            <p className="section-eyebrow">{bilingual(language, "MCP Capability Surface", financeZh.tools.eyebrow)}</p>
            <h2 id="finance-tools-title">{bilingual(language, "Eight registered tool families", financeZh.tools.title)}</h2>
          </div>
          <p>{bilingual(language, "Each family is present in the repository tool registration layer; this is a capability map, not a performance claim.", financeZh.tools.lead)}</p>
        </header>
        <div className="finance-tool-grid">
          {toolFamilies.map((tool, index) => (
            <article key={tool}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {index % 3 === 0 ? <Database aria-hidden="true" size={20} /> : index % 3 === 1 ? <Layers3 aria-hidden="true" size={20} /> : <Code2 aria-hidden="true" size={20} />}
              <strong>{tool}</strong>
            </article>
          ))}
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
            <span className="finance-md-h1"># A-share Company Analysis</span>
            {reportSections.map((section, index) => (
              <div className="finance-md-section" key={section}>
                <strong>## {section}</strong>
                <i style={{ width: `${82 - (index % 3) * 11}%` }} />
                <i style={{ width: `${61 + (index % 2) * 17}%` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="finance-output-copy">
          <p className="section-eyebrow">{bilingual(language, "Evaluation & Reflection", financeZh.output.eyebrow)}</p>
          <h2 id="finance-output-title">{bilingual(language, "The report is checked before the graph stops", financeZh.output.title)}</h2>
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
                <p>{study.experimentalNote}</p>
              </div>
            </aside>
          ) : null}
        </div>
      </section>
    </>
  );
}
