import { Link } from "react-router-dom";
import { ActionButton } from "../components/portfolio/ActionButton";
import { ProfileCard } from "../components/portfolio/ProfileCard";
import { homeLanes, profile } from "../data/portfolio";
import { homeZh } from "../i18n/content";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Home() {
  const { language } = useLanguage();

  return (
    <main className="page-shell home-page page-enter">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="hero-kicker">{bilingual(language, "APPLIED AI · DATA MODELING · FULL-STACK SYSTEMS", homeZh.kicker)}</p>
          <h1 className="hero-title">
            <span>{bilingual(language, "I model,", homeZh.title[0])}</span>
            <span className="hero-title-accent">{bilingual(language, "I build,", homeZh.title[1])}</span>
            <span>{bilingual(language, "I ship.", homeZh.title[2])}</span>
          </h1>
          <p className="hero-intro">{bilingual(language, profile.intro, homeZh.intro)}</p>

          <div className="hero-actions" aria-label="Primary actions">
            <ActionButton href="/contact" variant="primary">
              {bilingual(language, "Email me", "发邮件联系")}
            </ActionButton>
            <ActionButton href="/development-projects">{bilingual(language, "See what I ship", "查看开发成果")}</ActionButton>
            <ActionButton external href={profile.github}>
              GitHub
            </ActionButton>
          </div>
        </div>

        <ProfileCard />
      </section>

      <section aria-label="Portfolio sections" className="home-lanes">
        {homeLanes.map((lane) => {
          const zh = homeZh.lanes[lane.href as keyof typeof homeZh.lanes];
          return (
            <Link className="home-lane" key={lane.href} to={lane.href}>
              <span>{bilingual(language, lane.label, zh.label)}</span>
              <h2>{bilingual(language, lane.title, zh.title)}</h2>
              <p>{bilingual(language, lane.body, zh.body)}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
