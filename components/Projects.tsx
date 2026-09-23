import { ProjectArtwork } from "@/components/ProjectArtwork";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { SiteCopy } from "@/lib/translations";

type ProjectsProps = {
  copy: SiteCopy["projects"];
};

export function Projects({ copy }: ProjectsProps) {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-container mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="projects-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="projects-grid">
          {copy.items.map((project, index) => (
            <Reveal
              key={project.title}
              className={`project-card-wrap project-card-wrap--${index + 1}`}
              delay={index * 0.08}
            >
              <article className={`project-card project-card--${project.visual}`}>
                <ProjectArtwork project={project} number={`0${index + 1}`} />
                <div className="project-card-content">
                  <div className="project-card-heading-row">
                    <div>
                      <span className="project-overline">{copy.projectLabel} / 0{index + 1}</span>
                      <h3>{project.title}</h3>
                    </div>
                    {project.status ? <span className="project-status">{project.status}</span> : null}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="project-card-footer">
                    {project.github ? (
                      <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                        <span className="project-link-icon" aria-hidden="true">↗</span>
                        <span>{copy.githubLabel}</span>
                      </a>
                    ) : (
                      <span className="project-confidential">
                        <span className="confidential-lock" aria-hidden="true">⌑</span>
                        {copy.confidential}
                      </span>
                    )}
                    <span className="project-index">0{index + 1}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
