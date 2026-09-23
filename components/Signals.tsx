import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { SiteCopy } from "@/lib/translations";

type SignalsProps = {
  copy: SiteCopy["signals"];
};

export function Signals({ copy }: SignalsProps) {
  const languages = copy.languages.split("|").map((item) => item.trim());
  const softSkills = copy.softSkills.split(",").map((item) => item.trim());

  return (
    <section className="content-section signals-section" id="signals" aria-labelledby="signals-title">
      <div className="section-container mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="signals-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="signals-grid">
          <Reveal className="signal-panel" delay={0.06}>
            <div className="signal-panel-heading">
              <span className="signal-panel-icon" aria-hidden="true">Aa</span>
              <h3>{copy.languagesTitle}</h3>
            </div>
            <div className="signal-chip-list">
              {languages.map((language) => (
                <span className="signal-chip" key={language}>
                  <i aria-hidden="true" />{language}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="signal-panel" delay={0.14}>
            <div className="signal-panel-heading">
              <span className="signal-panel-icon signal-panel-icon--spark" aria-hidden="true">✳</span>
              <h3>{copy.softSkillsTitle}</h3>
            </div>
            <div className="signal-chip-list">
              {softSkills.map((skill) => (
                <span className="signal-chip signal-chip--soft" key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
