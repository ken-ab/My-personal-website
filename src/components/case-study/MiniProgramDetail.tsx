import { ArrowRight, CheckCircle2, QrCode, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import type { MiniProgramCaseStudy } from "../../data/caseStudies";

export function MiniProgramDetail({ study }: { study: MiniProgramCaseStudy }) {
  const maxBatch = Math.max(...(study.batchBreakdown?.map((item) => item.value) ?? [1]));

  return (
    <>
      <section className="mini-detail-hero">
        <p className="mini-detail-keywords">{study.keywords.join(" · ")}</p>
        <div className="mini-detail-hero-grid">
          <div>
            <span className="mini-live-badge"><i aria-hidden="true" /> deployed mini program</span>
            <h1>{study.title}</h1>
            <p>{study.subtitle}</p>
          </div>
          <aside className="mini-detail-meta">
            <span>{study.period}</span>
            <strong>{study.role}</strong>
            <p>{study.oneLineSummary}</p>
          </aside>
        </div>
      </section>

      <section className="mini-proof-section" aria-labelledby="mini-proof-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">Deployment Evidence</p>
            <h2 id="mini-proof-title">A working product, not a static prototype</h2>
          </div>
          <p>Scan the live entry point, inspect the current build, and read the dated operating evidence.</p>
        </header>

        <div className="mini-proof-layout">
          <aside className="mini-qr-card">
            <span className="mini-card-icon"><QrCode aria-hidden="true" size={20} /></span>
            <div>
              <span>WECHAT ENTRY</span>
              <strong>Scan to open</strong>
            </div>
            <img alt={`${study.title} WeChat mini-program QR code`} src={study.qrCode} />
            <p>Use WeChat to scan the original mini-program code.</p>
          </aside>

          <div className="mini-proof-body">
            {study.metricGroups.length ? (
              <div className="mini-metric-groups">
                {study.metricGroups.map((group) => (
                  <section className="mini-metric-group" key={`${group.label}-${group.asOf}`}>
                    <div className="mini-metric-heading">
                      <div>
                        <span>{group.label}</span>
                        <strong>{group.window ?? `As of ${group.asOf}`}</strong>
                        <small>{group.source} · captured {group.asOf}</small>
                      </div>
                      <ShieldCheck aria-hidden="true" size={25} />
                    </div>
                    <div className="mini-metric-grid">
                      {group.metrics.map((metric) => (
                        <article className="mini-metric-card" key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                          {metric.note ? <p>{metric.note}</p> : null}
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
                <span>DEMANDS BY BATCH</span>
                {study.batchBreakdown.map((batch) => (
                  <div className="mini-batch-row" key={batch.label}>
                    <span>{batch.label}</span>
                    <i><b style={{ width: `${(batch.value / maxBatch) * 100}%` }} /></i>
                    <strong>{batch.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}

            <ul className="mini-deployment-list">
              {study.deploymentProof.map((proof) => (
                <li key={proof}><CheckCircle2 aria-hidden="true" size={17} />{proof}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mini-screen-section" aria-labelledby="mini-screens-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">Running Product</p>
            <h2 id="mini-screens-title">Screens captured from the current codebase</h2>
          </div>
          <p>The images below come from the locally running H5 build connected to the production service configuration.</p>
        </header>
        <div className={`mini-phone-gallery${study.screenshots.length === 1 ? " is-single" : ""}`}>
          {study.screenshots.map((shot) => (
            <figure className="mini-phone-shot" key={shot.label}>
              <div className="mini-phone-chrome"><i /><i /><i /></div>
              <img alt={shot.alt} src={shot.src} />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mini-system-section" aria-labelledby="mini-system-title">
        <header className="mini-section-heading">
          <div>
            <p className="section-eyebrow">System Flow</p>
            <h2 id="mini-system-title">From user action to maintained data</h2>
          </div>
          <p>The diagram separates the user-facing entry, service layer, stored records, and operational follow-up.</p>
        </header>
        <div className="mini-system-flow">
          {study.systemFlow.map((step, index) => (
            <div className="mini-system-step-group" key={step}>
              <article className="mini-system-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {index === 0 ? <Smartphone aria-hidden="true" size={22} /> : <Workflow aria-hidden="true" size={22} />}
                <strong>{step}</strong>
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
            <p className="section-eyebrow">Product Decisions</p>
            <h2 id="mini-features-title">What the product had to make understandable</h2>
          </div>
        </header>
        <div className="mini-feature-grid">
          {study.featureBlocks.map((feature, index) => (
            <article className="mini-feature-card" key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-evidence-grid mini-evidence-grid">
        <Evidence title="What I Built" items={study.contribution} />
        <Evidence title="Delivery Evidence" items={study.takeaways} />
      </section>
    </>
  );
}

function Evidence({ items, title }: { items: string[]; title: string }) {
  return (
    <section className="case-evidence-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
