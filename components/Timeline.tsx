import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { SiteCopy } from "@/lib/translations";

type TimelineProps = {
  copy: SiteCopy["timeline"];
};

export function Timeline({ copy }: TimelineProps) {
  return (
    <section className="content-section timeline-section" id="journey" aria-labelledby="journey-title">
      <div className="section-container mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="journey-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="timeline-list">
          {copy.entries.map((entry, index) => (
            <Reveal className="timeline-item" key={`${entry.title}-${entry.period}`} delay={index * 0.08}>
              <div className="timeline-marker-column" aria-hidden="true">
                <span className="timeline-marker"><i /></span>
              </div>
              <article className="timeline-card">
                <div className="timeline-card-top">
                  <span className="timeline-category">{entry.category}</span>
                  <span className="timeline-period">{entry.period}</span>
                </div>
                <div className="timeline-card-main">
                  <div>
                    <h3>{entry.title}</h3>
                    <p className="timeline-organization">{entry.organization}</p>
                  </div>
                  <span className="timeline-card-arrow" aria-hidden="true">↗</span>
                </div>
                <p className="timeline-description">{entry.description}</p>
                <div className="timeline-card-bottom">
                  <span className="timeline-card-rule" />
                  <span>FACUNDO SCHOLZE / 0{index + 1}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
