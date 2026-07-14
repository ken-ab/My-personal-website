import profilePhoto from "../../assets/profile.jpg";
import { profile } from "../../data/portfolio";
import { profileZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

export function ProfileCard() {
  const { language } = useLanguage();
  const profileSections = [
    { label: bilingual(language, "📍 BASED", "📍 所在地"), value: bilingual(language, profile.location, profileZh.location) },
    { label: bilingual(language, "✨ CURRENTLY", "✨ 当前状态"), value: bilingual(language, profile.currently, profileZh.currently) },
    { label: bilingual(language, "🔬 RESEARCH INTERESTS", "🔬 研究兴趣"), value: bilingual(language, profile.researchInterests, profileZh.researchInterests) },
    { label: bilingual(language, "🛠️ TECHNICAL FOCUS", "🛠️ 技术方向"), value: bilingual(language, profile.technicalFocus, profileZh.technicalFocus) },
    { label: bilingual(language, "🎯 LOOKING FOR", "🎯 寻找机会"), value: bilingual(language, profile.lookingFor, profileZh.lookingFor) },
  ];

  return (
    <aside aria-label="Ken profile card" className="profile-card">
      <div className="profile-image-frame">
        <img alt="Ken portrait" src={profilePhoto} />
      </div>

      <div className="profile-card-body">
        <div className="profile-name-row">
          <div>
            <p className="profile-kicker">{bilingual(language, "profile", "个人信息")}</p>
            <h2>{profile.name}</h2>
          </div>
          <span className="profile-initials">K</span>
        </div>

        <div className="profile-sections">
          {profileSections.map((section) => (
            <section className="profile-section" key={section.label}>
              <h3>{section.label}</h3>
              <p>{section.value}</p>
            </section>
          ))}

          <section className="profile-section profile-links">
            <h3>{bilingual(language, "🔗 LINKS", "🔗 联系方式")}</h3>
            <p>
              Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p>WeChat: {profile.wechat}</p>
          </section>
        </div>
      </div>
    </aside>
  );
}
