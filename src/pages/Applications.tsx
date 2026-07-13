import { SectionHero } from "../components/portfolio/SectionHero";
import { Timeline } from "../components/portfolio/Timeline";
import { applications } from "../data/portfolio";

export function Applications() {
  return (
    <main className="page-shell page-enter">
      <SectionHero
        eyebrow="Publications / Research"
        title="Publications"
        tone="research"
      />
      <Timeline items={applications} presentation="publications" tone="research" />
    </main>
  );
}
