import { ArrowRight, BookOpen, CheckCircle2, GitBranch, Medal, ShieldCheck, XCircle } from "lucide-react";
import type { ReactNode } from "react";
import mcmArtsInstitutionStrategy from "../../assets/project-details/mcm-arts-institution-strategy.png";
import mcmEmmcasFramework from "../../assets/project-details/mcm-emmcas-framework.png";
import mcmResearchUniversityStrategy from "../../assets/project-details/mcm-research-university-strategy.png";
import mcmVocationalInstitutionStrategy from "../../assets/project-details/mcm-vocational-institution-strategy.png";
import type { CompetitionProjectCaseStudy } from "../../data/caseStudies";
import type { LocalizedText } from "../../i18n/LanguageContext";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ZoomableImage } from "../media/ZoomableImage";
import { ActionButton } from "../portfolio/ActionButton";

const strategyVisuals = [
  mcmResearchUniversityStrategy,
  mcmVocationalInstitutionStrategy,
  mcmArtsInstitutionStrategy,
];

export function McmProjectDetail({ study }: { study: CompetitionProjectCaseStudy }) {
  const { language } = useLanguage();
  const localize = (text: LocalizedText) => bilingual(language, text.en, text.zh);

  return (
    <>
      <section className="mcm-detail-hero" aria-labelledby="mcm-detail-title">
        <div>
          <p className="paper-keywords">{study.keywords.join(" · ")}</p>
          <div className="mcm-award-badge"><Medal aria-hidden="true" size={16} /> {bilingual(language, study.award, study.awardZh)}</div>
          <h1 id="mcm-detail-title">{study.title}</h1>
          {language === "zh" ? <p className="translated-title">{study.titleZh}</p> : null}
          <p className="mcm-detail-lead">{bilingual(language, study.subtitle, study.subtitleZh)}</p>
          <div className="mcm-hero-actions">
            <ActionButton external href={study.reportUrl} variant="primary">
              <BookOpen aria-hidden="true" size={15} /> {bilingual(language, "Full Report", "完整报告")}
            </ActionButton>
            <span>{study.period} · {study.problemLabel}</span>
          </div>
        </div>

        <aside className="mcm-contribution-card" aria-label={bilingual(language, "My contribution", "我的贡献")}>
          <p>{bilingual(language, "MY CONTRIBUTION", "我的贡献")}</p>
          <dl>
            <div><dt>{bilingual(language, "Period", "时间")}</dt><dd>{localize(study.contribution.period)}</dd></div>
            <div><dt>{bilingual(language, "Role", "角色")}</dt><dd>{localize(study.contribution.role)}</dd></div>
            <div className="is-body"><dt>{bilingual(language, "Contribution", "主要工作")}</dt><dd>{localize(study.contribution.body)}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="mcm-fact-strip" aria-label={bilingual(language, "Project scale", "项目规模")}>
        {study.facts.map((fact, index) => (
          <article key={fact.label.en}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{fact.value}</strong>
            <h2>{localize(fact.label)}</h2>
            <p>{localize(fact.note)}</p>
          </article>
        ))}
      </section>

      <McmQuestionAnswerSection content={study.questionAnswer} localize={localize} />

      <McmTaskSection
        id="mcm-task-one-title"
        marker="Task 1"
        title={bilingual(language, "Three Careers, Three Futures", "三种职业，三种未来")}
      >
        <MethodRoute items={study.moduleInsights.task1.route} localize={localize} />

        <div className="mcm-career-grid">
          {study.careerResults.map((result, index) => (
            <article className={`is-${result.tone}`} key={result.title.en}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{localize(result.title)}</h3>
              <strong>{localize(result.signal)}</strong>
              <p>{localize(result.body)}</p>
            </article>
          ))}
        </div>

        <figure className="mcm-result-figure">
          <div className="mcm-figure-label">{bilingual(language, "Original Evidence from the Report", "论文原始结果证据")}</div>
          <ZoomableImage alt={localize(study.trajectoryVisual.alt)} decoding="async" loading="lazy" src={study.trajectoryVisual.src} />
          <figcaption>{localize(study.trajectoryVisual.caption)}</figcaption>
        </figure>

        <EvidenceConclusion>{localize(study.moduleInsights.task1.interpretation)}</EvidenceConclusion>
      </McmTaskSection>

      <McmTaskSection
        id="mcm-task-two-title"
        marker="Task 2"
        title={bilingual(language, "E-MMCAS Macro–Micro Coupled Adaptive System", "E-MMCAS 宏微观耦合自适应系统")}
      >
        <MethodRoute items={study.moduleInsights.task2.route} localize={localize} />

        <div className="mcm-framework-layout">
          <figure className="mcm-framework-figure">
            <ZoomableImage
              alt={bilingual(language, "E-MMCAS macro–micro coupled adaptive system linking curriculum structure, AI–labor interaction, labor-market evolution, and education policy optimization.", "E-MMCAS 宏微观耦合自适应系统：连接课程结构、AI—劳动交互、劳动力市场演化与教育政策优化。")}
              decoding="async"
              loading="lazy"
              src={mcmEmmcasFramework}
            />
            <figcaption>{bilingual(language, "Figure 1 · E-MMCAS macro–micro coupled adaptive system", "图 1 · E-MMCAS 宏微观耦合自适应系统")}</figcaption>
          </figure>

          <aside className="mcm-framework-explanation">
            <p>{localize(study.moduleInsights.task2.explanation)}</p>
            <div>
              {study.moduleInsights.task2.pathways.map((path, index) => (
                <article key={path.title.en}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{localize(path.title)}</h3>
                  <p>{localize(path.body)}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
        <EvidenceConclusion>{localize(study.moduleInsights.task2.conclusion)}</EvidenceConclusion>

        <section className="mcm-ablation-block" aria-labelledby="mcm-ablation-title">
          <header>
            <h3 id="mcm-ablation-title">{bilingual(language, "Ablation Study", "消融实验")}</h3>
          </header>
          <div className="mcm-ablation-grid">
            {study.ablations.map((item, index) => {
              const hasTopology = index !== 0;
              const hasAdaptation = index !== 1;
              return (
                <article className={index === 2 ? "is-complete" : ""} key={item.model}>
                  <header><span>{item.model}</span><h3>{localize(item.title)}</h3></header>
                  <div className="mcm-ablation-features">
                    <AblationFeature enabled={hasTopology} label={bilingual(language, "Curriculum Topology", "课程拓扑")} />
                    <AblationFeature enabled={hasAdaptation} label={bilingual(language, "Curriculum Adaptation", "课程适应")} />
                  </div>
                  <p>{localize(item.body)}</p>
                </article>
              );
            })}
          </div>
          <div className="mcm-ablation-caption"><span>{bilingual(language, "Ablation Result", "消融结果")}</span><p>{localize(study.moduleInsights.task2.ablationConclusion)}</p></div>
        </section>
      </McmTaskSection>

      <McmTaskSection
        id="mcm-task-three-title"
        marker="Task 3"
        title={bilingual(language, "Policy Evaluation and Robust Policy Selection", "政策评价与稳健政策筛选")}
      >
        <MethodRoute items={study.moduleInsights.task3.route} localize={localize} />

        <div className="mcm-policy-ranking">
          <ol className="mcm-ranking-list">
            {study.ranking.map((item) => (
              <li key={item.rank}>
                <span>{bilingual(language, "Rank", "排名")} {item.rank}</span>
                <div><strong>{localize(item.strategy)}</strong><small>{localize(item.archetype)}</small></div>
                <b><small>VIKOR</small>{item.score}</b>
              </li>
            ))}
          </ol>
          <aside className="mcm-policy-evidence">
            <div className="mcm-policy-evidence-title"><ShieldCheck aria-hidden="true" size={19} /><span>{bilingual(language, "Highest Entropy Weights", "最高熵权结果")}</span></div>
            <dl>
              {study.moduleInsights.task3.weights.map((weight) => (
                <div key={weight.label.en}><dt>{localize(weight.label)}</dt><dd>{weight.value}</dd></div>
              ))}
            </dl>
            <p>{bilingual(language, "Lower VIKOR scores indicate a better compromise. The names above represent modeled policy archetypes, not institutional quality rankings.", "VIKOR 得分越低，综合折衷越好；上方名称表示模型中的政策原型，不是院校质量排名。")}</p>
          </aside>
        </div>

        <div className="mcm-robustness-strip" aria-label={bilingual(language, "Robustness evidence", "稳健性证据")}>
          {study.robustnessEvidence.map((item) => <span key={item.en}><CheckCircle2 aria-hidden="true" size={15} />{localize(item)}</span>)}
        </div>
        <EvidenceConclusion>{localize(study.moduleInsights.task3.interpretation)}</EvidenceConclusion>
      </McmTaskSection>

      <McmTaskSection
        id="mcm-task-four-title"
        marker="Task 4"
        title={bilingual(language, "Translate Model Results into Institutional Action", "将模型结果转化为院校行动")}
      >
        <div className="mcm-strategy-grid">
          {study.strategies.map((strategy, index) => (
            <article key={strategy.institutionType.en}>
              <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{localize(strategy.institutionType)}</h3></header>
              <figure className="mcm-strategy-visual">
                <ZoomableImage
                  alt={`${localize(strategy.institutionType)}：${localize(strategy.policy)}`}
                  decoding="async"
                  loading="lazy"
                  src={strategyVisuals[index]}
                />
              </figure>
              <p>{localize(strategy.body)}</p>
            </article>
          ))}
        </div>
        <EvidenceConclusion>{localize(study.moduleInsights.task4.conclusion)}</EvidenceConclusion>
      </McmTaskSection>

      <section className="mcm-overall-summary" aria-labelledby="mcm-final-conclusion-title">
        <div>
          <span>{bilingual(language, "Conclusion", "总体结论")}</span>
          <h2 id="mcm-final-conclusion-title">{bilingual(language, "Education Can Actively Reshape the AI–Labor Relationship", "教育可以主动重塑 AI 与劳动的关系")}</h2>
          <p>{localize(study.moduleInsights.overall.thesis)}</p>
          <ul className="mcm-overall-findings">
            {study.moduleInsights.overall.findings.map((finding) => <li key={finding.en}><CheckCircle2 aria-hidden="true" size={16} />{localize(finding)}</li>)}
          </ul>
          <div className="mcm-overall-boundary"><strong>{bilingual(language, "Research Boundary", "研究边界")}</strong><p>{study.limitations.map((item) => localize(item)).join(bilingual(language, " ", "；"))}</p></div>
        </div>
        <aside>
          <ActionButton external href={study.reportUrl} variant="primary">{bilingual(language, "Open Full Report", "打开完整报告")}</ActionButton>
        </aside>
      </section>
    </>
  );
}

function McmQuestionAnswerSection({
  content,
  localize,
}: {
  content: CompetitionProjectCaseStudy["questionAnswer"];
  localize: (text: LocalizedText) => string;
}) {
  return (
    <section className="mcm-question-answer" aria-labelledby="mcm-qa-question">
      <div className="mcm-qa-marker is-question" aria-hidden="true">Q</div>
      <div className="mcm-qa-question">
        <h2 id="mcm-qa-question">{localize(content.question)}</h2>
        <ul className="mcm-qa-keywords">
          {content.keywords.map((keyword) => <li key={keyword.en}>{localize(keyword)}</li>)}
        </ul>
      </div>

      <div className="mcm-qa-connector" aria-hidden="true"><span /></div>
      <div className="mcm-qa-divider" aria-hidden="true" />

      <div className="mcm-qa-marker is-answer" aria-hidden="true">A</div>
      <div className="mcm-qa-answer">
        <p className="mcm-qa-answer-summary">{localize(content.answer)}</p>
        <ol className="mcm-answer-steps">
          {content.steps.map((step, index) => (
            <li key={step.task}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{step.task}</small>
              </header>
              <h3>{localize(step.title)}</h3>
              <p>{localize(step.body)}</p>
              <div className="mcm-answer-methods">
                {step.methods.map((method) => <span key={method}>{method}</span>)}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function McmTaskSection({
  children,
  id,
  marker,
  title,
}: {
  children: ReactNode;
  id: string;
  marker: string;
  title: string;
}) {
  return (
    <section className="mcm-task-section" aria-labelledby={id}>
      <header className="mcm-task-header">
        <span className="mcm-task-index">{marker}</span>
        <h2 id={id}>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function MethodRoute({ items, localize }: { items: LocalizedText[]; localize: (text: LocalizedText) => string }) {
  return (
    <ol className="mcm-method-route" aria-label="Method route">
      {items.map((item, index) => (
        <li key={item.en}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{localize(item)}</strong>
          {index < items.length - 1 ? <ArrowRight aria-hidden="true" size={15} /> : null}
        </li>
      ))}
    </ol>
  );
}

function EvidenceConclusion({ children }: { children: ReactNode }) {
  return (
    <aside className="mcm-evidence-conclusion">
      <GitBranch aria-hidden="true" size={24} />
      <p>{children}</p>
    </aside>
  );
}

function AblationFeature({ enabled, label }: { enabled: boolean; label: string }) {
  return (
    <div className={enabled ? "is-enabled" : "is-disabled"}>
      <span>{label}</span>
      {enabled ? <CheckCircle2 aria-label="Included" size={21} /> : <XCircle aria-label="Removed" size={21} />}
    </div>
  );
}
