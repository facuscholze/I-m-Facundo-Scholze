import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { SiteCopy } from "@/lib/translations";
import { withBasePath } from "@/lib/site";

type AboutProps = {
  copy: SiteCopy["about"];
};

export function About({ copy }: AboutProps) {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-container mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="about-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.lead} />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-portrait-column" delay={0.08}>
            <div className="portrait-frame">
              <div className="portrait-glow" aria-hidden="true" />
              <Image
                src={withBasePath("/images/avatar-placeholder.webp")}
                alt=""
                width={760}
                height={840}
                unoptimized
                loading="lazy"
                sizes="(max-width: 800px) 85vw, 38vw"
                className="portrait-image"
              />
            </div>
          </Reveal>

          <Reveal className="about-copy-column" delay={0.16}>
            <p className="about-copy-kicker"><span>01</span>{copy.lead}</p>
            <p className="about-profile">{copy.profile}</p>
            <div className="about-copy-footer">
              <span className="about-signature">Facundo Scholze</span>
              <span className="about-signature-mark" aria-hidden="true">↗</span>
            </div>
          </Reveal>
        </div>

        <div className="about-stats-grid">
          {copy.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <article className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-index">0{index + 1}</span>
                  <span className="stat-arrow" aria-hidden="true">↗</span>
                </div>
                <strong>{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-note">{stat.note}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
