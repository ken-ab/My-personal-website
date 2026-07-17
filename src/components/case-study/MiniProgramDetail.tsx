import { ArrowRight, CheckCircle2, QrCode, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import type { MiniProgramCaseStudy } from "../../data/caseStudies";
import { miniProgramZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ZoomableImage } from "../media/ZoomableImage";

export function MiniProgramDetail({ study }: { study: MiniProgramCaseStudy }) {
  const { language } = useLanguage();
  const localized = language === "zh" ? miniProgramZh[study.id] : undefined;
  const isJingjiang = study.id === "jingjiang-platform";
  const isLaoWang = study.id === "laowang-checkin";
  const maxBatch = Math.max(...(study.batchBreakdown?.map((item) => item.value) ?? [1]));

  return (
    <>
      <section className="mini-detail-hero">
        <p className="mini-detail-keywords">{study.keywords.join(" · ")}</p>
        <div className="mini-detail-hero-grid">
          <div>
            <span className="mini-live-badge"><i aria-hidden="true" /> {isJingjiang
              ? bilingual(language, "delivered mini program / platform", "已交付的小程序/平台")
              : bilingual(language, "deployed mini program", "已上线小程序")}</span>
            <h1>{localized?.title ?? study.title}</h1>
            <p>{localized?.subtitle ?? study.subtitle}</p>
          </div>
          <aside className="mini-detail-meta">
            <span>{study.period}</span>
            <strong>{localized?.role ?? study.role}</strong>
            <p>{localized?.summary ?? study.oneLineSummary}</p>
          </aside>
        </div>
      </section>

      <section className={`mini-proof-section${isLaoWang ? " is-laowang" : ""}`} aria-labelledby="mini-proof-title">
        <header className={`mini-section-heading${isJingjiang || isLaoWang ? " is-compact-title" : ""}`}>
          <div>
            {isLaoWang ? (
              <h2 className="mini-editorial-section-title" id="mini-proof-title">{bilingual(language, "Operating Data", "运行数据")}</h2>
            ) : (
              <p className="section-eyebrow" id={isJingjiang ? "mini-proof-title" : undefined}>{isJingjiang
                ? bilingual(language, "Detailed Data", "详细数据")
                : localized?.proof.eyebrow ?? study.proofCopy.eyebrow}</p>
            )}
            {!isJingjiang && !isLaoWang ? <h2 id="mini-proof-title">{localized?.proof.title ?? study.proofCopy.title}</h2> : null}
          </div>
          {!isJingjiang && !isLaoWang ? <p>{localized?.proof.supporting ?? study.proofCopy.supporting}</p> : null}
        </header>

        <div className={`mini-proof-layout${isLaoWang ? " is-laowang" : ""}`}>
          <aside className="mini-qr-card">
            <span className="mini-card-icon"><QrCode aria-hidden="true" size={20} /></span>
            <div>
              <span>{bilingual(language, "WECHAT MINI PROGRAM", "微信小程序")}</span>
              {!isLaoWang ? <strong>{bilingual(language, "Scan to open", "扫码打开")}</strong> : null}
            </div>
            <img alt={bilingual(language, `${study.title} WeChat mini-program QR code`, `${localized?.title ?? study.title}微信小程序码`)} src={study.qrCode} />
          </aside>

          <div className="mini-proof-body">
            {study.metricGroups.length ? (
              <div className="mini-metric-groups">
                {study.metricGroups.map((group) => (
                  <section className="mini-metric-group" key={`${group.label}-${group.asOf}`}>
                    {!isLaoWang ? <div className="mini-metric-heading">
                      <div>
                        <span>{localized?.metricGroup.label ?? group.label}</span>
                        <strong>{group.window ?? bilingual(language, `As of ${group.asOf}`, `截至 ${group.asOf}`)}</strong>
                        <small>{localized?.metricGroup.source ?? group.source} · {bilingual(language, "captured", "采集于")} {group.asOf}</small>
                      </div>
                      <ShieldCheck aria-hidden="true" size={25} />
                    </div> : null}
                    <div className={`mini-metric-grid${isLaoWang ? " is-five" : ""}`}>
                      {group.metrics.map((metric, metricIndex) => (
                        <article className="mini-metric-card" key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{localized?.metricGroup.labels[metricIndex] ?? metric.label}</span>
                          {!isLaoWang && metric.note ? <p>{localized?.metricGroup.notes[metricIndex] ?? metric.note}</p> : null}
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
                  <span>{bilingual(language, "WEANALYSIS STATUS", "WEANALYSIS 状态")}</span>
                  <strong>{bilingual(language, "Traffic snapshot awaiting sign-in", "流量快照等待登录核验")}</strong>
                  <p>{study.verificationNote}</p>
                </div>
              </div>
            ) : null}

            {study.batchBreakdown?.length ? (
              <div className="mini-batch-breakdown" aria-label={bilingual(language, "Challenge demands by batch", "各批次揭榜需求")}>
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

            {!isJingjiang ? (
              <ul className="mini-deployment-list">
                {study.deploymentProof.map((proof, proofIndex) => (
                  <li key={proof}><CheckCircle2 aria-hidden="true" size={17} />{localized?.deploymentProof[proofIndex] ?? proof}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mini-screen-section" aria-labelledby="mini-screens-title">
        <header className={`mini-section-heading${isJingjiang || isLaoWang ? " is-compact-title" : ""}`}>
          <div>
            {isLaoWang ? (
              <h2 className="mini-editorial-section-title" id="mini-screens-title">{bilingual(language, "Running Screenshots", "运行截图")}</h2>
            ) : <p className="section-eyebrow" id={isJingjiang ? "mini-screens-title" : undefined}>{isJingjiang
              ? bilingual(language, "Running Screenshots", "运行截图")
              : bilingual(language, "Running Product", "运行中的产品")}</p>}
            {!isJingjiang && !isLaoWang ? (
              <h2 id="mini-screens-title">{bilingual(language, "Screens from the deployed mini program", "已上线小程序的真实页面")}</h2>
            ) : null}
          </div>
          {!isJingjiang && !isLaoWang ? <p>{bilingual(language, "These are real WeChat screens captured from the deployed mini program.", "以下截图来自已经上线的微信小程序。")}</p> : null}
        </header>
        <div className={`mini-phone-gallery${study.screenshots.length === 1 ? " is-single" : ""}${study.screenshots.length === 5 ? " is-editorial-five" : ""}`}>
          {study.screenshots.map((shot, shotIndex) => (
            <figure className={`mini-phone-shot${shot.featured ? " is-featured" : ""}`} key={shot.label}>
              <div className="mini-phone-chrome"><i /><i /><i /></div>
              {isLaoWang ? (
                <ZoomableImage
                  alt={localized?.screenshotAlts[shotIndex] ?? shot.alt}
                  caption={localized?.screenshotLabels[shotIndex] ?? shot.label}
                  decoding="async"
                  height={shot.height}
                  loading={shot.featured ? "eager" : "lazy"}
                  src={shot.src}
                  width={shot.width}
                />
              ) : (
                <img
                  alt={localized?.screenshotAlts[shotIndex] ?? shot.alt}
                  decoding="async"
                  height={shot.height}
                  loading={shot.featured ? "eager" : "lazy"}
                  src={shot.src}
                  width={shot.width}
                />
              )}
              <figcaption>{localized?.screenshotLabels[shotIndex] ?? shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mini-system-section" aria-labelledby="mini-system-title">
        <header className={`mini-section-heading${isJingjiang || isLaoWang ? " is-compact-title" : ""}`}>
          <div>
            {isLaoWang ? <h2 className="mini-editorial-section-title" id="mini-system-title">{bilingual(language, "System Flow", "系统流程")}</h2> : <p className="section-eyebrow" id={isJingjiang ? "mini-system-title" : undefined}>{bilingual(language, "System Flow", "系统流程")}</p>}
            {!isJingjiang && !isLaoWang ? <h2 id="mini-system-title">{bilingual(language, "From user action to maintained data", "从用户操作到可持续维护的数据")}</h2> : null}
          </div>
          {!isJingjiang && !isLaoWang ? <p>{bilingual(language, "The diagram separates the user-facing entry, service layer, stored records, and operational follow-up.", "该流程区分用户入口、服务层、数据记录与后续运营。")}</p> : null}
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
        <header className={`mini-section-heading${isJingjiang || isLaoWang ? " is-compact-title" : ""}`}>
          <div>
            {isLaoWang ? <h2 className="mini-editorial-section-title" id="mini-features-title">{bilingual(language, "Product Decisions", "产品决策")}</h2> : <p className="section-eyebrow" id={isJingjiang ? "mini-features-title" : undefined}>{bilingual(language, "Product Decisions", "产品决策")}</p>}
            {!isJingjiang && !isLaoWang ? <h2 id="mini-features-title">{bilingual(language, "What the product had to make understandable", "产品必须让用户一眼理解什么")}</h2> : null}
          </div>
        </header>
        <div className="mini-feature-grid">
          {study.featureBlocks.map((feature, index) => (
            <article className="mini-feature-card" key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{localized?.features[index]?.title ?? feature.title}</h3>
              <p>{localized?.features[index]?.body ?? feature.body}</p>
              {feature.flow?.length ? (
                <div className="mini-feature-flow" aria-label={bilingual(language, `${feature.title} flow`, `${localized?.features[index]?.title ?? feature.title}流程`)}>
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
