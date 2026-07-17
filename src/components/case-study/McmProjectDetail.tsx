import { ArrowRight, BookOpen, CheckCircle2, GitBranch, Medal, RefreshCw, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { CompetitionProjectCaseStudy } from "../../data/caseStudies";
import type { LocalizedText } from "../../i18n/LanguageContext";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ActionButton } from "../portfolio/ActionButton";
import { McmResearchMap } from "./McmResearchMap";

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

      <McmSection
        body={bilingual(language, "Problem F connects occupational change to concrete decisions about curriculum, enrollment, and institutional strategy.", "Problem F 将职业变化与课程、招生和院校策略的具体决策连接起来。")}
        eyebrow={bilingual(language, "01 · The Challenge", "01 · 比赛问题")}
        id="mcm-challenge-title"
        title={bilingual(language, "The Challenge: What Problem F Asked", "比赛问题：Problem F 要求我们回答什么？")}
      >
        <blockquote className="mcm-challenge-question">{localize(study.challenge.question)}</blockquote>
        <div className="mcm-task-grid">
          {study.challenge.tasks.map((task) => (
            <article key={task.label}>
              <span>{task.label}</span>
              <h3>{localize(task.title)}</h3>
              <p>{localize(task.body)}</p>
            </article>
          ))}
        </div>
      </McmSection>

      <section className="mcm-answer-card" aria-labelledby="mcm-answer-title">
        <span aria-hidden="true">“</span>
        <div>
          <p>{localize(study.conciseAnswer.title)}</p>
          <h2 id="mcm-answer-title">{localize(study.conciseAnswer.body)}</h2>
        </div>
      </section>

      <McmSection
        body={bilingual(language, "Each stage makes the problem, method, and output explicit; the feedback path turns labor-market outcomes into the next curriculum update.", "每一阶段都明确说明问题、方法和输出；底部反馈路径将就业结果转化为下一轮课程更新。")}
        eyebrow={bilingual(language, "02 · Technical Architecture", "02 · 技术路线")}
        id="mcm-architecture-title"
        title={bilingual(language, "From Occupational Exposure to Educational Policy", "从职业 AI 暴露到教育政策优化")}
      >
        <McmResearchMap feedbackPath={study.feedbackPath} steps={study.architectureSteps} />
      </McmSection>

      <McmSection
        body={bilingual(language, "The three careers diverge because augmentation, physical immunity, and substitution dominate in different proportions.", "三类职业因增强、实体免疫和替代驱动力的主导比例不同而走向分化。")}
        eyebrow={bilingual(language, "03 · Key Findings", "03 · 核心结果")}
        id="mcm-findings-title"
        title={bilingual(language, "Three Careers, Three Futures", "三类职业，三种未来")}
      >
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
          <img alt={localize(study.trajectoryVisual.alt)} decoding="async" loading="lazy" src={study.trajectoryVisual.src} />
          <figcaption>{localize(study.trajectoryVisual.caption)}</figcaption>
        </figure>

        <aside className="mcm-finding-summary">
          <p>{localize(study.findingSummary.title)}</p>
          <h3>{localize(study.findingSummary.body)}</h3>
          <strong>{localize(study.findingSummary.implication)}</strong>
        </aside>
      </McmSection>

      <McmSection
        body={bilingual(language, "The contribution lies in how established tools are organized into one closed-loop model—not in claiming Sentence-BERT, Lotka–Volterra, DMPSO, Monte Carlo, entropy weighting, or VIKOR as new algorithms.", "创新在于将已有工具组织为统一闭环，而不是将 Sentence-BERT、Lotka–Volterra、DMPSO、Monte Carlo、熵权法或 VIKOR 描述为新算法。")}
        eyebrow={bilingual(language, "04 · Core Innovation", "04 · 核心创新")}
        id="mcm-innovation-title"
        title={bilingual(language, "One Framework Innovation, Three Supporting Contributions", "一项框架创新，三项支撑贡献")}
      >
        <div className="mcm-innovation-layout">
          <article className="mcm-core-innovation">
            <span>{bilingual(language, "CORE INNOVATION", "核心创新")}</span>
            <h3>{localize(study.coreInnovation.title)}</h3>
            <p>{localize(study.coreInnovation.body)}</p>
            <ol>
              {study.coreInnovation.loop.map((item, index) => (
                <li key={item.en}><strong>{localize(item)}</strong>{index < study.coreInnovation.loop.length - 1 ? <ArrowRight aria-hidden="true" size={15} /> : <RefreshCw aria-hidden="true" size={15} />}</li>
              ))}
            </ol>
          </article>
          <div className="mcm-supporting-contributions">
            {study.supportingContributions.map((item, index) => (
              <article key={item.title.en}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{localize(item.title)}</h3><p>{localize(item.body)}</p></div></article>
            ))}
          </div>
        </div>
      </McmSection>

      <McmSection
        body={bilingual(language, "The ablation study tests whether the macro–micro coupling is structurally necessary, rather than only whether the full model obtains better numerical scores.", "消融实验验证的不是完整模型是否单纯获得更高数值，而是宏微观耦合是否在结构上不可缺少。")}
        eyebrow={bilingual(language, "05 · Validation and Robustness", "05 · 验证与稳健性")}
        id="mcm-validation-title"
        title={bilingual(language, "Does the Coupling Actually Matter?", "宏微观耦合是否真的必要？")}
      >
        <div className="mcm-ablation-grid">
          {study.ablations.map((item, index) => (
            <article className={index === 2 ? "is-complete" : ""} key={item.model}>
              <span>{item.model}</span>
              <h3>{localize(item.title)}</h3>
              <p>{localize(item.body)}</p>
            </article>
          ))}
        </div>
        <div className="mcm-robustness-strip" aria-label={bilingual(language, "Robustness evidence", "稳健性证据")}>
          {study.robustnessEvidence.map((item) => <span key={item.en}><CheckCircle2 aria-hidden="true" size={15} />{localize(item)}</span>)}
        </div>
      </McmSection>

      <McmSection
        body={bilingual(language, "VIKOR compares modeled policy strategies across six criteria; the institutional names identify representative archetypes rather than educational quality.", "VIKOR 在六项指标下比较模型中的政策策略；院校名称用于标识代表性原型，而非教育质量。")}
        eyebrow={bilingual(language, "06 · Institutional Recommendations", "06 · 院校策略")}
        id="mcm-recommendations-title"
        title={bilingual(language, "Rank the Policies, Then Translate Them into Action", "先比较政策，再转化为院校行动")}
      >
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
          <aside><ShieldCheck aria-hidden="true" size={19} /><p>{bilingual(language, "Lower VIKOR scores indicate a better compromise across the six policy criteria. This is a ranking of modeled policy strategies, not a ranking of institutional quality.", "VIKOR 得分越低，表示该方案在六项政策指标之间的综合折衷越好。这里比较的是模型中的政策策略，而不是院校教育质量。")}</p></aside>
        </div>

        <div className="mcm-strategy-grid">
          {study.strategies.map((strategy) => (
            <article key={strategy.institutionType.en}>
              <span>{localize(strategy.institutionType)}</span>
              <h3>{localize(strategy.title)}</h3>
              <p>{localize(strategy.body)}</p>
            </article>
          ))}
        </div>
      </McmSection>

      <section className="mcm-limitations-section" aria-labelledby="mcm-limitations-title">
        <div>
          <p className="mcm-section-eyebrow">07 · {bilingual(language, "Limitations and Full Report", "局限与完整报告")}</p>
          <h2 id="mcm-limitations-title">{bilingual(language, "A Transparent Boundary Around the Result", "为研究结论划定清晰边界")}</h2>
          <ul>{study.limitations.map((item) => <li key={item.en}><GitBranch aria-hidden="true" size={15} />{localize(item)}</li>)}</ul>
        </div>
        <aside>
          <span>{bilingual(language, "26-page submission", "26 页完整报告")}</span>
          <strong>{bilingual(language, "Read the equations, assumptions, figures, references, and full sensitivity analysis.", "查看完整公式、假设、图表、参考文献与敏感性分析。")}</strong>
          <ActionButton external href={study.reportUrl} variant="primary">{bilingual(language, "Open Full Report", "打开完整报告")}</ActionButton>
        </aside>
      </section>
    </>
  );
}

function McmSection({
  body,
  children,
  eyebrow,
  id,
  title,
}: {
  body: string;
  children: ReactNode;
  eyebrow: string;
  id: string;
  title: string;
}) {
  return (
    <section className="mcm-detail-section" aria-labelledby={id}>
      <header><div><p>{eyebrow}</p><h2 id={id}>{title}</h2></div><span>{body}</span></header>
      {children}
    </section>
  );
}
