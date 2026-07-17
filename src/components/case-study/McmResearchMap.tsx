import { ArrowRight, BriefcaseBusiness, Building2, Database, Network, RefreshCw, Scale } from "lucide-react";
import type { CompetitionProjectCaseStudy } from "../../data/caseStudies";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

type ArchitectureStep = CompetitionProjectCaseStudy["architectureSteps"][number];

const stepIcons = [Database, BriefcaseBusiness, Network, Scale, Building2] as const;

export function McmResearchMap({
  feedbackPath,
  steps,
}: {
  feedbackPath: CompetitionProjectCaseStudy["feedbackPath"];
  steps: ArchitectureStep[];
}) {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);

  return (
    <div className="mcm-research-map" aria-label={bilingual(language, "Problem-method-output architecture for the MCM project", "美赛项目的问题—方法—输出技术路线")}>
      <ol className="mcm-architecture-track">
        {steps.map((step, index) => {
          const Icon = stepIcons[index] ?? Database;
          return (
            <li key={step.step}>
              <article className={`mcm-architecture-step is-step-${index}`}>
                <header>
                  <span>{step.step}</span>
                  <Icon aria-hidden="true" size={20} />
                  <h3>{localize(step.title)}</h3>
                </header>
                <div className="mcm-step-question">
                  <small>{bilingual(language, "Question", "问题")}</small>
                  <p>{localize(step.question)}</p>
                </div>
                <div className="mcm-step-methods">
                  <small>{bilingual(language, index === 0 ? "Evidence" : "Methods", index === 0 ? "输入证据" : "方法")}</small>
                  <div>{step.methods.map((method) => <span key={method.en}>{localize(method)}</span>)}</div>
                </div>
                <div className="mcm-step-output">
                  <small>{bilingual(language, "Output", "输出")}</small>
                  <strong>{localize(step.output)}</strong>
                </div>
              </article>
              {index < steps.length - 1 ? <ArrowRight className="mcm-step-arrow" aria-hidden="true" size={20} /> : null}
            </li>
          );
        })}
      </ol>

      <div className="mcm-feedback-path">
        <div className="mcm-feedback-label"><RefreshCw aria-hidden="true" size={16} /><span>{bilingual(language, "Endogenous feedback", "内生反馈路径")}</span></div>
        <ol>
          {feedbackPath.map((item, index) => (
            <li key={item.en}><strong>{localize(item)}</strong>{index < feedbackPath.length - 1 ? <ArrowRight aria-hidden="true" size={15} /> : null}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
