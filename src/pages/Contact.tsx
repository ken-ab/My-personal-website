import { GitBranch, Mail, MapPin } from "lucide-react";
import { ActionButton } from "../components/portfolio/ActionButton";
import { profile } from "../data/portfolio";

export function Contact() {
  return (
    <main className="page-shell contact-page page-enter">
      <section className="contact-layout" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-eyebrow">Contact</p>
          <h1 id="contact-title">Let's build something research-driven and usable.</h1>
          <p>
            If you are interested in AI systems, data modeling, full-stack products or research collaboration, feel free
            to reach out.
          </p>
        </div>

        <aside aria-label="Contact details" className="contact-card">
          <div className="contact-card-heading">
            <span className="profile-initials">K</span>
            <div>
              <h2>{profile.name}</h2>
              <p>{profile.headline}</p>
            </div>
          </div>

          <dl className="contact-list">
            <div>
              <dt>
                <Mail aria-hidden="true" size={16} strokeWidth={1.8} />
                Email
              </dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>
                <GitBranch aria-hidden="true" size={16} strokeWidth={1.8} />
                GitHub
              </dt>
              <dd>
                <a href={profile.github} rel="noreferrer" target="_blank">
                  {profile.github}
                </a>
              </dd>
            </div>
            <div>
              <dt>
                <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
                Location
              </dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{profile.focus}</dd>
            </div>
          </dl>

          <div className="contact-actions">
            <ActionButton href={`mailto:${profile.email}`} variant="primary">
              Email me
            </ActionButton>
            <ActionButton external href={profile.github}>
              GitHub
            </ActionButton>
            <ActionButton href="/" variant="quiet">
              Back to Home
            </ActionButton>
          </div>
        </aside>
      </section>
    </main>
  );
}
