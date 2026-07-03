import { SectionHero } from "../components/portfolio/SectionHero";
import { Timeline } from "../components/portfolio/Timeline";
import { internshipAwards } from "../data/portfolio";

export function InternshipAwards() {
  return (
    <main className="page-shell page-enter">
      <SectionHero
        description="Internship, competition and engineering experiences that connect research with real-world execution."
        eyebrow="Internship & Awards"
        title="Internship & Awards"
        tone="career"
      />
      <Timeline items={internshipAwards} tone="career" />
    </main>
  );
}
