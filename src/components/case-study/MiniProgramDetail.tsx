import { ArrowRight, CheckCircle2, QrCode, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import type { MiniProgramCaseStudy } from "../../data/caseStudies";
import { miniProgramZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

export function MiniProgramDetail({ study }: { study: MiniProgramCaseStudy }) {
  const { language } = useLanguage();
  const localized = language === "zh" ? miniProgramZh[study.id] : undefined;
  const maxBatch = Math.max(...(study.batchBreakdown?.map((item) => item.value) ?? [1]));

  return (
    <>
      <section className="mini-detail-hero">
        <p className="mini-detail-keywords">{study.keywords.join(" · ")}</p>
        <div className="mini-detail-hero-grid">
          <div>
            <span className="mini-live-badge"><i aria-hidden="true" /> {bilingual(language, "deployed mini program", "已上线小程序")}</span>
            <h1>{localized?.title ?? study.title}</h1>
            <p>{localized?.subtitle ?? study.subtitle}</p>
          </div>
          <aside className="mini-detail-meta">
            <span>{study.period}</span>
            <strong>{study.role}</strong>
            <p>{localized?.summary ?? study.oneLineSummary}</p>
          </aside>
        </div>
      </section>

      <section className="mini-proof-section" aria-labelledby="mini-proof-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">{localized?.proof.eyebrow ?? study.proofCopy.eyebrow}</p>
            <h2 id="mini-proof-title">{localized?.proof.title ?? study.proofCopy.title}</h2>
          </div>
          <p>{localized?.proof.supporting ?? study.proofCopy.supporting}</p>
        </header>

        <div className="mini-proof-layout">
          <aside className="mini-qr-card">
            <span className="mini-card-icon"><QrCode aria-hidden="true" size={20} /></span>
            <div>
              <span>{bilingual(language, "WECHAT ENTRY", "微信入口")}</span>
              <strong>{bilingual(language, "Scan to open", "扫码打开")}</strong>
            </div>
            <img alt={`${study.title} WeChat mini-program QR code`} src={study.qrCode} />
            <p>{bilingual(language, "Use WeChat to scan the original mini-program code.", "请使用微信扫描原始小程序码。")}</p>
          </aside>

          <div className="mini-proof-body">
            {study.metricGroups.length ? (
              <div className="mini-metric-groups">
                {study.metricGroups.map((group) => (
                  <section className="mini-metric-group" key={`${group.label}-${group.asOf}`}>
                    <div className="mini-metric-heading">
                      <div>
                        <span>{localized?.metricGroup.label ?? group.label}</span>
                        <strong>{group.window ?? `As of ${group.asOf}`}</strong>
                        <small>{localized?.metricGroup.source ?? group.source} · {bilingual(language, "captured", "采集于")} {group.asOf}</small>
                      </div>
                      <ShieldCheck aria-hidden="true" size={25} />
                    </div>
                    <div className="mini-metric-grid">
                      {group.metrics.map((metric, metricIndex) => (
                        <article className="mini-metric-card" key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{localized?.metricGroup.labels[metricIndex] ?? metric.label}</span>
                          {metric.note ? <p>{localized?.metricGroup.notes[metricIndex] ?? metric.note}</p> : null}
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : null}

            {study.verificationNote ? (
              <div className="mini-verification-note">
                <ShieldCheck aria-hidden="true" size={26} />
                <div>
                  <span>WEANALYSIS STATUS</span>
                  <strong>Traffic snapshot awaiting sign-in</strong>
                  <p>{study.verificationNote}</p>
                </div>
              </div>
            ) : null}

            {study.batchBreakdown?.length ? (
              <div className="mini-batch-breakdown" aria-label="Challenge demands by batch">
                <span>{bilingual(language, "DEMANDS BY BATCH", "分批次需求")}</span>
                {study.batchBreakdown.map((batch) => (
                  <div className="mini-batch-row" key={batch.label}>
                    <span>{language === "zh" ? `第 ${batch.label.replace("Batch 0", "")} 批` : batch.label}</span>
                    <i><b style={{ width: `${(batch.value / maxBatch) * 100}%` }} /></i>
                    <strong>{batch.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}

            <ul className="mini-deployment-list">
              {study.deploymentProof.map((proof, proofIndex) => (
                <li key={proof}><CheckCircle2 aria-hidden="true" size={17} />{localized?.deploymentProof[proofIndex] ?? proof}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mini-screen-section" aria-labelledby="mini-screens-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "Running Product", "运行中的产品")}</p>
            <h2 id="mini-screens-title">
              {study.id === "laowang-checkin"
                ? bilingual(language, "Screens from the deployed mini program", "已上线小程序的真实页面")
                : bilingual(language, "Screens from the delivered product", "已交付产品的真实页面")}
            </h2>
          </div>
          <p>
            {study.id === "laowang-checkin"
              ? bilingual(language, "These are real WeChat screens captured from the deployed mini program.", "以下截图来自已经上线的微信小程序。")
              : bilingual(language, "These screens come from the current delivered build and its production catalogue.", "以下截图来自当前已交付版本及其生产数据目录。")}
          </p>
        </header>
        <div className={`mini-phone-gallery${study.screenshots.length === 1 ? " is-single" : ""}${study.screenshots.length === 5 ? " is-editorial-five" : ""}`}>
          {study.screenshots.map((shot, shotIndex) => (
            <figure className={`mini-phone-shot${shot.featured ? " is-featured" : ""}`} key={shot.label}>
              <div className="mini-phone-chrome"><i /><i /><i /></div>
              <img
                alt={shot.alt}
                decoding="async"
                height={shot.height}
                loading={shot.featured ? "eager" : "lazy"}
                src={shot.src}
                width={shot.width}
              />
              <figcaption>{localized?.screenshotLabels[shotIndex] ?? shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mini-system-section" aria-labelledby="mini-system-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "System Flow", "系统流程")}</p>
            <h2 id="mini-system-title">{bilingual(language, "From user action to maintained data", "从用户操作到可持续维护的数据")}</h2>
          </div>
          <p>{bilingual(language, "The diagram separates the user-facing entry, service layer, stored records, and operational follow-up.", "该流程区分用户入口、服务层、数据记录与后续运营。")}</p>
        </header>
        <div className="mini-system-flow">
          {study.systemFlow.map((step, index) => (
            <div className="mini-system-step-group" key={step}>
              <article className="mini-system-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {index === 0 ? <Smartphone aria-hidden="true" size={22} /> : <Workflow aria-hidden="true" size={22} />}
                <strong>{localized?.systemFlow[index] ?? step}</strong>
              </article>
              {index < study.systemFlow.length - 1 ? <ArrowRight aria-hidden="true" className="mini-system-arrow" size={21} /> : null}
            </div>
          ))}
          <i className="mini-flow-pulse" aria-hidden="true" />
        </div>
      </section>

      <section className="mini-feature-section" aria-labelledby="mini-features-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "Product Decisions", "产品决策")}</p>
            <h2 id="mini-features-title">{bilingual(language, "What the product had to make understandable", "产品必须让用户一眼理解什么")}</h2>
          </div>
        </header>
        <div className="mini-feature-grid">
          {study.featureBlocks.map((feature, index) => (
            <article className="mini-feature-card" key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{localized?.features[index]?.title ?? feature.title}</h3>
              <p>{localized?.features[index]?.body ?? feature.body}</p>
              {feature.flow?.length ? (
                <div className="mini-feature-flow" aria-label={`${feature.title} flow`}>
                  {feature.flow.map((step, flowIndex) => (
                    <div className="mini-feature-flow-step" key={step}>
                      <i aria-hidden="true" />
                      <strong>{localized?.features[index]?.flow?.[flowIndex] ?? step}</strong>
                      {flowIndex < feature.flow!.length - 1 ? <ArrowRight aria-hidden="true" size={13} /> : null}
                    </div>
                  ))}
                  <b aria-hidden="true" />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
