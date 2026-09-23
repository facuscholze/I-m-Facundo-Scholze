import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/lib/skills";
import type { SiteCopy } from "@/lib/translations";

type SkillsProps = {
  copy: SiteCopy["skills"];
};

export function Skills({ copy }: SkillsProps) {
  return (
    <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-container mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="skills-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.id} delay={Math.min(categoryIndex, 3) * 0.06}>
              <article className="skill-category-card">
                <div className="skill-category-heading">
                  <span className="skill-category-index">0{categoryIndex + 1}</span>
                  <h3>{copy.categories[category.id]}</h3>
                  <span className="skill-category-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="skill-chip-grid">
                  {category.skills.map((skill) => (
                    <span className="skill-chip" key={skill.name}>
                      <span className="skill-mark" aria-hidden="true">
                        {skill.icon ? (
                          <i className={`devicon ${skill.icon} colored`} />
                        ) : (
                          <span className="skill-monogram">{skill.badge}</span>
                        )}
                      </span>
                      <span>{copy.skillLabels[skill.name] ?? skill.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="skills-footnote"><span aria-hidden="true">✳</span>{copy.footnote}</p>
      </div>
    </section>
  );
}
