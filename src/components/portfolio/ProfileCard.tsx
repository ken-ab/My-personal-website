import profilePhoto from "../../assets/profile.jpg";
import { profile } from "../../data/portfolio";

const profileSections = [
  { label: "📍 BASED", value: profile.location },
  { label: "✨ CURRENTLY", value: profile.currently },
  { label: "🔬 RESEARCH INTERESTS", value: profile.researchInterests },
  { label: "🛠️ TECHNICAL FOCUS", value: profile.technicalFocus },
  { label: "🎯 LOOKING FOR", value: profile.lookingFor },
];

export function ProfileCard() {
  return (
    <aside aria-label="Ken profile card" className="profile-card">
      <div className="profile-image-frame">
        <img alt="Ken portrait" src={profilePhoto} />
      </div>

      <div className="profile-card-body">
        <div className="profile-name-row">
          <div>
            <p className="profile-kicker">profile</p>
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
            <h3>🔗 LINKS</h3>
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
