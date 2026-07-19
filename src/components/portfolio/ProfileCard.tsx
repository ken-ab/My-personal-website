import profilePhoto from "../../assets/profile.jpg";
import { profile } from "../../data/portfolio";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

export function ProfileCard() {
  const { language } = useLanguage();
  const rows = [
    {
      label: bilingual(language, "Current status", "当前状态"),
      value: bilingual(
        language,
        "Incoming MSc student in Data Science & Analytics at PolyU (2026 entry)",
        "香港理工大学数据科学硕士生（2026年入学）",
      ),
    },
    {
      label: bilingual(language, "Research interests", "研究兴趣"),
      value: bilingual(
        language,
        "Efficient AI · Generative AI · Model Routing · Multimodal Learning",
        "高效 AI · 生成式 AI · 模型路由 · 多模态学习",
      ),
    },
    {
      label: bilingual(language, "Collaboration", "开放合作"),
      value: bilingual(
        language,
        "Research assistantships · Research collaboration · Academic exchange",
        "研究助理 · 科研合作 · 学术交流",
      ),
    },
  ];

  return (
    <aside
      aria-label={bilingual(language, "Zhenkai Zhang profile card", "张桢铠个人资料卡")}
      className="phase1-profile-card"
    >
      <div className="phase1-profile-photo">
        <img
          alt={bilingual(language, "Portrait of Zhenkai Zhang", "张桢铠个人照片")}
          height="1024"
          src={profilePhoto}
          width="953"
        />
      </div>

      <div className="phase1-profile-body">
        <div className="phase1-profile-heading">
          <div>
            <p className="profile-kicker">{bilingual(language, "Research Profile", "研究简介")}</p>
            <h2>
              {bilingual(language, "Zhenkai Zhang", profile.chineseName)}
              <span>{bilingual(language, " (Ken)", "（Ken）")}</span>
            </h2>
          </div>
          <span className="profile-initials">K</span>
        </div>

        <dl className="phase1-profile-list">
          {rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
