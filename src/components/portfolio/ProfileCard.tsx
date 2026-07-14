import { ExternalLink, FileText, Mail } from "lucide-react";
import { profile } from "../../data/portfolio";
import { publicCvUrl } from "../../data/publicAssets";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

export function ProfileCard() {
  const { language } = useLanguage();
  const rows = [
    {
      label: bilingual(language, "Current", "当前"),
      value: bilingual(
        language,
        "Incoming MSc Data Science & Analytics Student at PolyU",
        "香港理工大学数据科学与分析硕士即将入学",
      ),
    },
    {
      label: bilingual(language, "Focus", "研究方向"),
      value: bilingual(
        language,
        "Cost-aware Model Routing · Multimodal Reasoning · Agentic AI Evaluation",
        "成本感知模型路由 · 多模态推理 · 智能体评测",
      ),
    },
    {
      label: bilingual(language, "Open to", "开放机会"),
      value: bilingual(
        language,
        "Research Assistantships · Research Collaboration",
        "研究助理机会 · 科研合作",
      ),
    },
  ];

  return (
    <aside aria-label={bilingual(language, "Ken profile card", "Ken 的个人资料卡")} className="phase1-profile-card">
      <div className="phase1-profile-heading">
        <div>
          <p className="profile-kicker">{bilingual(language, "Research profile", "研究档案")}</p>
          <h2>Zhenkai Zhang <span>(Ken)</span></h2>
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

      <div className="phase1-profile-links">
        <a href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" size={15} />
          <span>Email</span>
        </a>
        <a href={profile.github} rel="noreferrer" target="_blank">
          <ExternalLink aria-hidden="true" size={15} />
          <span>GitHub</span>
        </a>
        <a download="Ken_Zhang_Public_CV.pdf" href={publicCvUrl}>
          <FileText aria-hidden="true" size={15} />
          <span>CV</span>
        </a>
      </div>
    </aside>
  );
}
