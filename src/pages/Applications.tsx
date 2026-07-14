import { SectionHero } from "../components/portfolio/SectionHero";
import { Timeline } from "../components/portfolio/Timeline";
import { applications } from "../data/portfolio";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Applications() {
  const { language } = useLanguage();
  return (
    <main className="page-shell page-enter">
      <SectionHero
        eyebrow={bilingual(language, "Publications / Research", "论文 / 研究")}
        title={bilingual(language, "Publications", "论文成果")}
        tone="research"
      />
      <Timeline items={applications} presentation="publications" tone="research" />
    </main>
  );
}
