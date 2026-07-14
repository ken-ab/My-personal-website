import { GitBranch, Mail, MapPin } from "lucide-react";
import { ActionButton } from "../components/portfolio/ActionButton";
import { profile } from "../data/portfolio";
import { profileZh } from "../i18n/content";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Contact() {
  const { language } = useLanguage();
  return (
    <main className="page-shell contact-page page-enter">
      <section className="contact-layout" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-eyebrow">{bilingual(language, "Contact", "联系我")}</p>
          <h1 id="contact-title">{bilingual(language, "Let's build something research-driven and usable.", "一起做有研究价值、也真正可用的东西。")}</h1>
          <p>
            {bilingual(language, "If you are interested in AI systems, data modeling, full-stack products or research collaboration, feel free to reach out.", "如果您关注 AI 系统、数据建模、全栈产品或研究合作，欢迎与我联系。")}
          </p>
        </div>

        <aside aria-label="Contact details" className="contact-card">
          <div className="contact-card-heading">
            <span className="profile-initials">K</span>
            <div>
              <h2>{profile.name}</h2>
              <p>{profile.headline}</p>
            </div>
          </div>

          <dl className="contact-list">
            <div>
              <dt>
                <Mail aria-hidden="true" size={16} strokeWidth={1.8} />
                {bilingual(language, "Email", "邮箱")}
              </dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>
                <GitBranch aria-hidden="true" size={16} strokeWidth={1.8} />
                GitHub
              </dt>
              <dd>
                <a href={profile.github} rel="noreferrer" target="_blank">
                  {profile.github}
                </a>
              </dd>
            </div>
            <div>
              <dt>
                <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
                {bilingual(language, "Location", "地点")}
              </dt>
              <dd>{bilingual(language, profile.location, profileZh.location)}</dd>
            </div>
            <div>
              <dt>{bilingual(language, "Focus", "方向")}</dt>
              <dd>{bilingual(language, profile.focus, profileZh.focus)}</dd>
            </div>
          </dl>

          <div className="contact-actions">
            <ActionButton href={`mailto:${profile.email}`} variant="primary">
              {bilingual(language, "Email me", "发邮件联系")}
            </ActionButton>
            <ActionButton external href={profile.github}>
              GitHub
            </ActionButton>
            <ActionButton href="/" variant="quiet">
              {bilingual(language, "Back to Home", "返回首页")}
            </ActionButton>
          </div>
        </aside>
      </section>
    </main>
  );
}
