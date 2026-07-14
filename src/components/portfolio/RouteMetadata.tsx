import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCaseStudy } from "../../data/caseStudies";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

const detailTitles: Record<string, { en: string; zh: string }> = {
  "routerbench-mini": { en: "RouterBench-Mini", zh: "RouterBench-Mini 当前研究" },
  moe: { en: "MoE Models Review", zh: "MoE 模型综述" },
  "olympic-prediction": { en: "Olympic Medal Prediction", zh: "奥运奖牌预测" },
  "sustainability-bamboo": { en: "Bamboo Connection Prediction", zh: "竹—钢连接行为预测" },
  "robot-vision": { en: "Robot Vision Review", zh: "机器人视觉综述" },
  "deic-digital-trade": { en: "Digital Service Trade", zh: "数字服务贸易" },
  "finance-agent": { en: "Finance-Agent", zh: "Finance-Agent 多智能体系统" },
  "mcm-2026": { en: "MCM 2026 Research Project", zh: "MCM 2026 竞赛研究" },
  "laowang-checkin": { en: "Lao Wang Exercise Check-in", zh: "老王运动打卡" },
  "jingjiang-platform": { en: "Jingjiang University Cooperation Platform", zh: "靖江产学研用平台" },
};

export function RouteMetadata() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const pageTitles: Record<string, { en: string; zh: string }> = {
      "/": { en: "AI Research & Systems", zh: "AI 研究与系统" },
      "/research": { en: "Research", zh: "研究" },
      "/engineering": { en: "Engineering", zh: "工程项目" },
      "/experience": { en: "Experience", zh: "经历" },
      "/contact": { en: "Contact", zh: "联系" },
    };

    let pageTitle = pageTitles[pathname];
    if (pathname.startsWith("/brief/")) {
      const id = pathname.slice("/brief/".length);
      const study = getCaseStudy(id);
      pageTitle = detailTitles[id] ?? (study ? { en: study.title, zh: study.title } : undefined);
    }

    const localizedTitle = pageTitle
      ? bilingual(language, pageTitle.en, pageTitle.zh)
      : bilingual(language, "Portfolio", "个人主页");
    document.title = `${localizedTitle} | Ken Zhang`;
  }, [language, pathname]);

  return null;
}
