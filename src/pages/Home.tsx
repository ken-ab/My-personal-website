import { Link } from "react-router-dom";
import { ActionButton } from "../components/portfolio/ActionButton";
import { ProfileCard } from "../components/portfolio/ProfileCard";
import { homeLanes, profile } from "../data/portfolio";

export function Home() {
  return (
    <main className="page-shell home-page page-enter">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="hero-kicker">APPLIED AI · DATA MODELING · FULL-STACK SYSTEMS</p>
          <h1 className="hero-title">
            <span>I model,</span>
            <span className="hero-title-accent">I build,</span>
            <span>I ship.</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions" aria-label="Primary actions">
            <ActionButton href="/contact" variant="primary">
              Email me
            </ActionButton>
            <ActionButton href="/development-projects">See what I ship</ActionButton>
            <ActionButton external href={profile.github}>
              GitHub
            </ActionButton>
          </div>
        </div>

        <ProfileCard />
      </section>

      <section aria-label="Portfolio sections" className="home-lanes">
        {homeLanes.map((lane) => (
          <Link className="home-lane" key={lane.href} to={lane.href}>
            <span>{lane.label}</span>
            <h2>{lane.title}</h2>
            <p>{lane.body}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
