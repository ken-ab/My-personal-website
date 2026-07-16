import type { LocalizedText } from "../../i18n/LanguageContext";
import { useLanguage } from "../../i18n/LanguageContext";

type MoeSystemMilestone = {
  date: LocalizedText;
  isoDate: string;
  system: string;
};

const milestones: MoeSystemMilestone[] = [
  {
    date: { en: "Jan 2021", zh: "2021 年 1 月" },
    isoDate: "2021-01",
    system: "Switch Transformer",
  },
  {
    date: { en: "Dec 2021", zh: "2021 年 12 月" },
    isoDate: "2021-12",
    system: "GLaM",
  },
  {
    date: { en: "Jan 2022", zh: "2022 年 1 月" },
    isoDate: "2022-01",
    system: "DeepSpeed-MoE",
  },
  {
    date: { en: "Jan 2022", zh: "2022 年 1 月" },
    isoDate: "2022-01",
    system: "PR-MoE",
  },
  {
    date: { en: "Dec 2023", zh: "2023 年 12 月" },
    isoDate: "2023-12",
    system: "Mixtral 8×7B",
  },
  {
    date: { en: "Mar 2024", zh: "2024 年 3 月" },
    isoDate: "2024-03",
    system: "DBRX",
  },
  {
    date: { en: "Dec 2024", zh: "2024 年 12 月" },
    isoDate: "2024-12",
    system: "DeepSeek-V3",
  },
];

export function MoeSystemTimeline() {
  const { language } = useLanguage();

  return (
    <div
      className="moe-system-timeline"
      role="group"
      aria-label={language === "zh" ? "七类 MoE 系统发布时间轴" : "Release timeline for seven MoE systems"}
    >
      <ol>
        {milestones.map((milestone) => (
          <li key={milestone.system}>
            <time dateTime={milestone.isoDate}>{milestone.date[language]}</time>
            <strong>{milestone.system}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
