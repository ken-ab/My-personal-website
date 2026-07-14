import { ArrowRight, QrCode, ScanLine } from "lucide-react";
import type { MiniProgramProjectShowcase as MiniProgramProjectShowcaseData } from "../../data/portfolio";
import { miniProgramZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

type MiniProgramProjectShowcaseProps = {
  showcase: MiniProgramProjectShowcaseData;
  title: string;
  projectId: string;
};

export function MiniProgramProjectShowcase({ projectId, showcase, title }: MiniProgramProjectShowcaseProps) {
  const { language } = useLanguage();
  const localized = language === "zh" ? miniProgramZh[projectId] : undefined;
  const metricLabels = localized?.metricGroup.labels;
  return (
    <section className="project-showcase" aria-label={`${title} deployed product preview`}>
      <div className="project-showcase-heading">
        <div>
          <span className="project-live-dot" aria-hidden="true" />
          <strong>{showcase.status}</strong>
        </div>
        <span>{bilingual(language, "Product evidence / 03 views", "产品证据 / 3 个页面")}</span>
      </div>

      <div className="project-showcase-grid">
        <div className="project-phone-stage">
          {showcase.screenshots.map((screenshot, index) => (
            <figure
              className={`project-phone-preview is-${index + 1}`}
              key={screenshot.label}
            >
              <div className="project-phone-top"><i /><i /><i /></div>
              <img
                alt={screenshot.alt}
                decoding="async"
                height={screenshot.height}
                loading="eager"
                src={screenshot.src}
                width={screenshot.width}
              />
              <figcaption>{screenshot.label}</figcaption>
            </figure>
          ))}
          <span className="project-stage-stamp" aria-hidden="true">{bilingual(language, "LIVE BUILD", "在线版本")}</span>
        </div>

        <aside className="project-proof-panel">
          <div className="project-qr-heading">
            <span><QrCode aria-hidden="true" size={18} /></span>
            <div>
              <small>{bilingual(language, "WECHAT ENTRY", "微信入口")}</small>
              <strong>{bilingual(language, "Scan the live build", "扫码查看线上版本")}</strong>
            </div>
          </div>
          <div className="project-qr-frame">
            <img alt={`${title} mini-program QR code`} decoding="async" loading="eager" src={showcase.qrCode} />
            <ScanLine aria-hidden="true" size={18} />
          </div>

          {showcase.metrics.length ? (
            <dl className="project-showcase-metrics">
              {showcase.metrics.map((metric, index) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metricLabels?.[index] ?? metric.label}</dd>
                  {metric.source ? <small>{metric.source}</small> : null}
                </div>
              ))}
            </dl>
          ) : null}
        </aside>
      </div>

      <div className="project-showcase-flow" aria-label="Product operating path">
        {showcase.flow.map((step, index) => (
          <div className="project-flow-group" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{localized?.systemFlow[index] ?? step}</strong>
            {index < showcase.flow.length - 1 ? <ArrowRight aria-hidden="true" size={17} /> : null}
          </div>
        ))}
        <i className="project-flow-light" aria-hidden="true" />
      </div>
    </section>
  );
}
