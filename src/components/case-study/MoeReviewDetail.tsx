import { BookOpenText, CircleAlert, FileCheck2, Layers3, Scale } from "lucide-react";
import type { PublicationCaseStudy } from "../../data/caseStudies";
import { publicationZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ActionButton } from "../portfolio/ActionButton";
import { MoeRoutingBackgroundMap } from "./ResearchMethodMaps";
import { MoeSystemTimeline } from "./MoeSystemTimeline";
import "./MoeReviewDetail.css";

function splitAbstractIntoParagraphs(text: string, breakAfter: string[] = []) {
  if (breakAfter.length === 0) return [text];

  const paragraphs: string[] = [];
  let remaining = text;
  breakAfter.forEach((marker) => {
    const markerIndex = remaining.indexOf(marker);
    if (markerIndex === -1) return;
    const paragraphEnd = markerIndex + marker.length;
    paragraphs.push(remaining.slice(0, paragraphEnd).trim());
    remaining = remaining.slice(paragraphEnd).trim();
  });
  if (remaining) paragraphs.push(remaining);
  return paragraphs;
}

export function MoeReviewDetail({ study }: { study: PublicationCaseStudy }) {
  const { language } = useLanguage();
  const localized = language === "zh" ? publicationZh[study.id] : undefined;
  const review = study.comparativeReview;
  const localizedReview = localized?.comparativeReview;

  if (!review) return null;

  const comparisonHeaders = language === "zh"
    ? ["系统", "路由与专家设计", "激活参数量", "主要综述结论", "定量综合状态"]
    : ["System", "Routing / Expert Design", "Active Parameters", "Main Review Takeaway", "Quantitative Synthesis Status"];
  const benchmarkDimensions = localizedReview?.benchmark.dimensions ?? review.benchmark.dimensions;
  const abstractParagraphs = splitAbstractIntoParagraphs(study.abstract, study.abstractParagraphBreaks);

  return (
    <>
      <section className="paper-brief-hero moe-review-hero" aria-labelledby="paper-brief-title">
        <p className="paper-keywords">{study.keywords.join(" · ")}</p>
        <p className="moe-review-type">{bilingual(language, "First-Author Comparative Review", "第一作者 · 比较性综述")}</p>
        <h1 id="paper-brief-title">{localized?.title ?? study.title}</h1>
        <p className="paper-authors" aria-label={bilingual(language, "Paper authors", "论文作者")}>
          {study.authors.map((author, index) => (
            <span className={author === "Zhenkai Zhang" ? "is-owner" : ""} key={author}>
              {index ? <span aria-hidden="true">, </span> : null}
              {author}
              {study.correspondingAuthors?.includes(author) ? (
                <sup className="corresponding-author-mark" aria-label={bilingual(language, "corresponding author", "通讯作者")}>*</sup>
              ) : null}
            </span>
          ))}
        </p>
        {study.paperUrl ? (
          <div className="paper-primary-action">
            <ActionButton external href={study.paperUrl} variant="primary">{bilingual(language, "Paper", "论文")}</ActionButton>
          </div>
        ) : null}
      </section>

      <section
        className="moe-evolution-section moe-evolution-section--hero"
        aria-label={bilingual(language, "Evolution context", "演进背景")}
      >
        <div className="paper-visual-gallery">
          {study.visuals.map((visual, visualIndex) => (
            <figure className="paper-visual-frame moe-evolution-figure" key={visual.src}>
              <img alt={localized?.visualAlts[visualIndex] ?? visual.alt} decoding="async" loading="eager" src={visual.src} />
              <figcaption>{localized?.visualCaptions?.[visualIndex] ?? visual.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="paper-abstract-section moe-review-abstract" aria-labelledby="paper-abstract-title">
        <h2 id="paper-abstract-title">{bilingual(language, "Abstract", "中文概述")}</h2>
        {language === "zh" ? (
          <>
            <p>{localized?.abstractSummary ?? localized?.summary}</p>
            <details className="original-abstract-disclosure">
              <summary>{bilingual(language, "Original Abstract", "Original Abstract · 英文原文")}</summary>
              <div>{abstractParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </details>
          </>
        ) : abstractParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="moe-review-section moe-background-section" aria-label={bilingual(language, "Sparse MoE routing background", "稀疏 MoE 路由背景知识")}>
        <MoeRoutingBackgroundMap />
        <aside className="moe-literature-finding">
          <BookOpenText aria-hidden="true" size={21} />
          <div>
            <span>{bilingual(language, "Reported in reviewed literature", "来源于被综述文献")}</span>
            <p>{localizedReview?.literatureComputeFinding ?? review.literatureComputeFinding}</p>
          </div>
        </aside>
      </section>

      <section className="moe-review-section" aria-labelledby="moe-comparison-title">
        <header className="moe-taxonomy-heading">
          <h2 id="moe-comparison-title">{bilingual(language, "Seven-System Taxonomy", "七类系统分类")}</h2>
        </header>
        <MoeSystemTimeline />
        <div className="moe-comparison-table-wrap">
          <table className="moe-comparison-table">
            <thead><tr>{comparisonHeaders.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
            <tbody>
              {review.comparisonRows.map((row, index) => {
                const localizedRow = localizedReview?.comparisonRows[index];
                return (
                  <tr key={row.system}>
                    <th data-label={comparisonHeaders[0]} scope="row">{row.system}</th>
                    <td data-label={comparisonHeaders[1]}>{localizedRow?.design ?? row.design}</td>
                    <td data-label={comparisonHeaders[2]}>{localizedRow?.activeParameters ?? row.activeParameters}</td>
                    <td data-label={comparisonHeaders[3]}>{localizedRow?.takeaway ?? row.takeaway}</td>
                    <td data-label={comparisonHeaders[4]}><span className={`moe-status is-${row.statusTone}`}>{localizedRow?.quantitativeStatus ?? row.quantitativeStatus}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="moe-review-section" aria-labelledby="moe-benchmark-title">
        <header className="moe-review-section-heading">
          <p className="section-eyebrow">{bilingual(language, "Cross-paper Evidence", "跨论文证据")}</p>
          <h2 id="moe-benchmark-title">{bilingual(language, "Literature-reported Benchmark Synthesis", "文献报告基准结果综合")}</h2>
        </header>
        <div className="moe-benchmark-evidence-note">
          <CircleAlert aria-hidden="true" size={23} />
          <p>{localizedReview?.benchmark.evidenceNote ?? review.benchmark.evidenceNote}</p>
        </div>
        <div className="moe-benchmark-board">
          <section className="moe-benchmark-dimensions">
            <span>{bilingual(language, "Five synthesis dimensions", "五个综合维度")}</span>
            <ol>{benchmarkDimensions.map((dimension, index) => <li key={dimension}><b>0{index + 1}</b>{dimension}</li>)}</ol>
          </section>
          <section className="moe-benchmark-coverage is-included">
            <FileCheck2 aria-hidden="true" size={20} />
            <h3>{bilingual(language, "Benchmark-supported synthesis", "可进行基准综合的模型组")}</h3>
            <p>{review.benchmark.includedSystems.join(" · ")}</p>
          </section>
          <section className="moe-benchmark-coverage is-qualitative">
            <Layers3 aria-hidden="true" size={20} />
            <h3>{bilingual(language, "Architecture / system review only", "仅进行架构 / 系统分析")}</h3>
            <p>{review.benchmark.architectureOnlySystems.join(" · ")}</p>
          </section>
          <section className="moe-benchmark-coverage is-baseline">
            <Scale aria-hidden="true" size={20} />
            <h3>{bilingual(language, "Dense baseline context", "密集模型基线背景")}</h3>
            <p>{localizedReview?.benchmark.denseBaselineNote ?? review.benchmark.denseBaselineNote}</p>
          </section>
        </div>
        <ul className="moe-benchmark-clarifications">
          {(localizedReview?.benchmark.clarifications ?? review.benchmark.clarifications).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="moe-review-section" aria-labelledby="moe-findings-title">
        <header className="moe-review-section-heading">
          <p className="section-eyebrow">{bilingual(language, "Synthesis", "综合结论")}</p>
          <h2 id="moe-findings-title">{bilingual(language, "Key Findings", "主要发现")}</h2>
        </header>
        <ol className="moe-key-findings">
          {(localizedReview?.findings ?? review.findings).map((finding, index) => (
            <li key={finding}><span>0{index + 1}</span><p>{finding}</p></li>
          ))}
        </ol>
      </section>

      <section className="case-evidence-grid moe-review-evidence">
        <ReviewEvidenceBlock
          items={localized?.problem ?? study.problemAddressed}
          title={bilingual(language, "Review Gap", "综述所填补的空白")}
        />
        <ReviewEvidenceBlock
          items={localized?.innovations ?? study.innovations}
          title={bilingual(language, "Review Contributions", "综述贡献")}
        />
      </section>

      <section className="moe-review-section moe-limitations" aria-labelledby="moe-limitations-title">
        <header className="moe-review-section-heading">
          <p className="section-eyebrow">{bilingual(language, "Research Boundaries", "研究边界")}</p>
          <h2 id="moe-limitations-title">{bilingual(language, "Limitations of the Review", "综述的局限性")}</h2>
        </header>
        <ul>{(localizedReview?.limitations ?? review.limitations).map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </>
  );
}

function ReviewEvidenceBlock({ items, title }: { items: string[]; title: string }) {
  return (
    <section className="case-evidence-card">
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
