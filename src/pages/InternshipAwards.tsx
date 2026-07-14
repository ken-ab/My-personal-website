import { SectionHero } from "../components/portfolio/SectionHero";
import { Timeline } from "../components/portfolio/Timeline";
import { projects } from "../data/portfolio";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Projects() {
  const { language } = useLanguage();
  return (
    <main className="page-shell page-enter">
      <SectionHero
        description={bilingual(language, "Research, competition and engineering work that connects models with real-world execution.", "连接研究模型与真实执行的实习、竞赛和工程项目。")}
        eyebrow={bilingual(language, "Projects", "项目")}
        title={bilingual(language, "Projects", "项目经历")}
        tone="career"
      />
      <Timeline items={projects} presentation="projects" tone="career" />
    </main>
  );
}
