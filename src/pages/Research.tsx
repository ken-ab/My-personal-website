import { ArrowRight, ArrowUpRight, BookOpen, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { ActionButton } from "../components/portfolio/ActionButton";
import { additionalPublications, routerBenchMini, selectedPublications } from "../data/siteStructure";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Research() {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);

  return (
    <main className="page-shell research-page-v2 page-enter">
      <section className="phase1-page-hero tone-research" aria-labelledby="research-title">
        <p className="section-eyebrow">{bilingual(language, "Research", "研究")}</p>
        <div>
          <h1 id="research-title">{bilingual(language, "Questions first. Evidence close behind.", "问题在前，证据紧随其后。")}</h1>
          <p>
            {bilingual(
              language,
              "My current work centers on cost-aware model routing, supported by selected machine-learning research and an efficient-AI review background.",
              "我当前围绕成本感知模型路由开展研究，并以机器学习研究和高效 AI 综述背景作为支撑。",
            )}
          </p>
        </div>
      </section>

      <section className="research-current-section" aria-labelledby="current-research-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "01 · Current Research", "01 · 当前研究")}</p>
            <h2 id="current-research-title">RouterBench-Mini</h2>
          </div>
          <span className="research-section-note">{bilingual(language, "Accuracy · Cost · Latency", "准确率 · 成本 · 延迟")}</span>
        </header>

        <article className="research-current-card">
          <div className="research-current-copy">
            <div className="status-pills">
              {routerBenchMini.status.map((status) => <span key={status.en}>{localize(status)}</span>)}
            </div>
            <h3>{localize(routerBenchMini.question)}</h3>
            <p>{localize(routerBenchMini.summary)}</p>
            <div className="research-current-actions">
              <ActionButton href="/brief/routerbench-mini" variant="primary">
                {bilingual(language, "Research Report", "研究报告")}
              </ActionButton>
            </div>
          </div>

          <div className="research-current-evidence">
            <div className="research-fact-grid">
              <article><strong>600</strong><span>{bilingual(language, "sampled tasks", "总体采样任务")}</span></article>
              <article><strong>3</strong><span>{bilingual(language, "task modalities", "任务模态")}</span></article>
              <article><strong>2 × 150</strong><span>{bilingual(language, "held-out batches", "held-out 批次")}</span></article>
              <article><strong>B</strong><span>{bilingual(language, "final untouched set", "最终未触碰确认集")}</span></article>
            </div>
            <div className="research-result-band">
              <span>{bilingual(language, "FROZEN TASK-AWARE VS ALWAYS STRONG", "固定 TASK-AWARE 对比 ALWAYS STRONG")}</span>
              <div>
                <strong>−0.67pp <small>{bilingual(language, "Accuracy", "准确率")}</small></strong>
                <strong>−22.5% <small>{bilingual(language, "Cost", "成本")}</small></strong>
                <strong>−26.6% <small>{bilingual(language, "Latency", "延迟")}</small></strong>
              </div>
            </div>
            <p className="research-caveat">
              {bilingual(
                language,
                "The batches are non-overlapping, but only B is the final untouched confirmation set; A informed later feature selection.",
                "两批数据互不重叠，但只有 B 组是最终未触碰确认集；A 组参与了后续特征方案选择。",
              )}
            </p>
          </div>
        </article>
      </section>

      <section className="selected-publications-section" aria-labelledby="selected-publications-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "02 · Selected Publications", "02 · 精选论文")}</p>
            <h2 id="selected-publications-title">{bilingual(language, "Two publications that best support the current direction.", "最能支撑当前研究方向的两项成果。")}</h2>
          </div>
        </header>

        <div className="selected-publication-grid">
          {selectedPublications.map((publication, index) => (
            <article className="selected-publication-card" key={publication.id}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {index === 0 ? <FlaskConical aria-hidden="true" size={22} /> : <BookOpen aria-hidden="true" size={22} />}
              </header>
              <p className="publication-type-label">{localize(publication.publicationType)}</p>
              <h3>{publication.canonicalTitle}</h3>
              {language === "zh" ? <p className="translated-title">{publication.titleZh}</p> : null}
              <dl>
                <div><dt>{bilingual(language, "Role", "作者身份")}</dt><dd>{localize(publication.authorRole)}</dd></div>
                <div><dt>{bilingual(language, "Venue", "发表信息")}</dt><dd>{publication.venue}</dd></div>
              </dl>
              <p className="selected-publication-summary">{localize(publication.summary)}</p>
              <strong className="selected-publication-result">{localize(publication.result)}</strong>
              <footer>
                <Link to={`/brief/${publication.briefId}`}>{bilingual(language, "View detail", "查看详情")} <ArrowRight aria-hidden="true" size={16} /></Link>
                {publication.paperUrl ? <a href={publication.paperUrl} rel="noreferrer" target="_blank">{bilingual(language, "Paper", "论文")} <ArrowUpRight aria-hidden="true" size={15} /></a> : null}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="additional-publications-section" aria-labelledby="additional-publications-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "03 · Additional Publications", "03 · 其他论文")}</p>
            <h2 id="additional-publications-title">{bilingual(language, "Additional evidence of modeling and review breadth.", "补充展示建模与综述能力的广度。")}</h2>
          </div>
        </header>
        <div className="additional-publication-list">
          {additionalPublications.map((publication, index) => (
            <article key={publication.id}>
              <span className="additional-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="additional-main">
                <p>{localize(publication.publicationType)} · {localize(publication.authorRole)}</p>
                <h3>{publication.canonicalTitle}</h3>
                {language === "zh" ? <span className="translated-title">{publication.titleZh}</span> : null}
                <small>{publication.venue}</small>
              </div>
              <p className="additional-summary">{localize(publication.summary)}</p>
              <div className="additional-actions">
                <Link to={`/brief/${publication.briefId}`} aria-label={`${publication.canonicalTitle} detail`}><ArrowRight aria-hidden="true" size={18} /></Link>
                {publication.paperUrl ? <a href={publication.paperUrl} rel="noreferrer" target="_blank" aria-label={`${publication.canonicalTitle} paper`}><ArrowUpRight aria-hidden="true" size={18} /></a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
