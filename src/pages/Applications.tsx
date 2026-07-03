import { SectionHero } from "../components/portfolio/SectionHero";
import { Timeline } from "../components/portfolio/Timeline";
import { applications } from "../data/portfolio";

export function Applications() {
  return (
    <main className="page-shell page-enter">
      <SectionHero
        description="Research works across AI, data modeling, sustainability and decision systems."
        eyebrow="Publications / Research"
        title="Publications"
        tone="research"
      />
      <Timeline items={applications} tone="research" />
    </main>
  );
}
