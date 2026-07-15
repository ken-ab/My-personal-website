import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ActionButton } from "../components/portfolio/ActionButton";
import { ProfileCard } from "../components/portfolio/ProfileCard";
import { profile } from "../data/portfolio";
import { publicCvUrl } from "../data/publicAssets";
import {
  experienceHighlights,
  homepageEngineering,
  routerBenchMini,
  selectedPublications,
} from "../data/siteStructure";
import { homeZh } from "../i18n/content";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Home() {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);
  const introduction = bilingual(language, profile.intro, homeZh.intro).split("\n\n");

  return (
    <main className="page-shell phase1-home page-enter">
      <section className="phase1-hero" aria-labelledby="home-title">
        <div className="phase1-hero-copy">
          <p className="hero-kicker">
            {bilingual(language, "GENERATIVE AI · DATA MODELING · MODEL ROUTING", "生成式 AI · 数据建模 · 模型路由")}
          </p>
          <h1 className="phase1-hero-motto" id="home-title">
            <span>{bilingual(language, "Good research takes time", "好的研究需要时间，")}</span>
            <span>{bilingual(language, "Good systems take care", "好的系统需要用心。")}</span>
          </h1>
          <div className="phase1-hero-summary">
            {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="hero-actions" aria-label={bilingual(language, "Primary actions", "主要操作")}>
            <ActionButton href="/research" variant="primary">
              {bilingual(language, "Current Research", "当前研究")}
            </ActionButton>
            <ActionButton download="Ken_Zhang_Public_CV.pdf" href={publicCvUrl}>CV</ActionButton>
            <ActionButton external href={profile.github}>GitHub</ActionButton>
          </div>
        </div>

        <ProfileCard />
      </section>

      <section className="home-section phase1-selected-research" aria-labelledby="selected-research-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow" id="selected-research-title">
              {bilingual(language, "Selected Research", "精选研究")}
            </p>
          </div>
          <Link to="/research">
            {bilingual(language, "All research", "查看全部研究")} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </header>

        <Link className="routerbench-home-card" to="/brief/routerbench-mini">
          <div className="routerbench-home-copy">
            <div className="status-pills">
              {routerBenchMini.status.map((status) => <span key={status.en}>{localize(status)}</span>)}
            </div>
            <h3>{routerBenchMini.title.en}</h3>
            <p>{localize(routerBenchMini.question)}</p>
          </div>
          <div className="routerbench-home-result" aria-label={bilingual(language, "RouterBench comparison with Always Strong", "RouterBench 与 Always Strong 的比较")}>
            <small>{bilingual(language, "Compared with Always Strong", "与 Always Strong 相比")}</small>
            <div>
              <strong>−0.67pp <span>{bilingual(language, "Accuracy", "准确率")}</span></strong>
              <strong>−22.5% <span>{bilingual(language, "Cost", "成本")}</span></strong>
              <strong>−26.6% <span>{bilingual(language, "Latency", "延迟")}</span></strong>
            </div>
            <p>{bilingual(language, "Across the two frozen baseline evaluations.", "基于两批冻结基线评测。")}</p>
          </div>
          <ArrowUpRight aria-hidden="true" className="card-corner-arrow" size={20} />
        </Link>

        <div className="home-publication-pair">
          {selectedPublications.map((publication) => (
            <Link className="home-publication-card" key={publication.id} to={`/brief/${publication.briefId}`}>
              <span>{localize(publication.publicationType)}</span>
              <h3>{publication.canonicalTitle}</h3>
              {language === "zh" ? <p className="translated-title">{publication.titleZh}</p> : null}
              <p>{localize(publication.summary)}</p>
              <footer>
                <strong>{localize(publication.result)}</strong>
                <ArrowUpRight aria-hidden="true" size={18} />
              </footer>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="engineering-systems-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow" id="engineering-systems-title">
              {bilingual(language, "Engineering & Systems", "工程与系统")}
            </p>
          </div>
          <Link to="/engineering">
            {bilingual(language, "Engineering work", "查看工程项目")} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </header>
        <div className="home-engineering-links">
          {homepageEngineering.map((project) => (
            <Link key={project.id} to={project.href}>
              <span>{project.title}</span>
              <p>{localize(project.summary)}</p>
              <strong>{localize(project.evidence)}</strong>
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-experience-strip" aria-labelledby="experience-recognition-title">
        <div>
          <p className="section-eyebrow">{bilingual(language, "Experience & Recognition", "经历与荣誉")}</p>
          <h2 id="experience-recognition-title">{bilingual(language, "Experience beyond projects.", "项目之外的经历。")}</h2>
        </div>
        {experienceHighlights.map((item) => (
          <article key={item.title.en}>
            <span>{localize(item.title)}</span>
            <strong>{localize(item.evidence)}</strong>
          </article>
        ))}
        <Link to="/experience" aria-label={bilingual(language, "View experience", "查看经历")}>
          <ArrowRight aria-hidden="true" size={19} />
        </Link>
      </section>
    </main>
  );
}
