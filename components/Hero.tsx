"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SocialLinks } from "@/components/SocialLinks";
import type { Language, SiteCopy } from "@/lib/translations";
import { withBasePath } from "@/lib/site";

const AnimatedBackground = dynamic(() => import("@/components/AnimatedBackground"), {
  ssr: false,
  loading: () => <div className="animated-background animated-background--fallback" aria-hidden="true" />,
});

type HeroProps = {
  copy: SiteCopy["hero"];
  social: SiteCopy["social"];
  language: Language;
};

export function Hero({ copy, social, language }: HeroProps) {
  const [typedRole, setTypedRole] = useState("");
  const prefersReducedMotion = useReducedMotion();

  // A small, dependency-free typewriter that changes with the selected language.
  useEffect(() => {
    const roles = copy.roles;
    let roleIndex = 0;
    let currentText = "";
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const target = roles[roleIndex % roles.length];

      if (!deleting) {
        currentText = target.slice(0, currentText.length + 1);
        setTypedRole(currentText);
        if (currentText === target) {
          deleting = true;
          timeoutId = setTimeout(tick, 1450);
          return;
        }
        timeoutId = setTimeout(tick, 78);
        return;
      }

      currentText = target.slice(0, currentText.length - 1);
      setTypedRole(currentText);
      if (!currentText) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeoutId = setTimeout(tick, 280);
        return;
      }
      timeoutId = setTimeout(tick, 34);
    };

    setTypedRole("");
    timeoutId = setTimeout(tick, 260);
    return () => clearTimeout(timeoutId);
  }, [copy.roles]);

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <AnimatedBackground />
      <div className="hero-shell mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <div className="hero-layout">
          <div className="hero-copy">
            <motion.div
              className="hero-meta"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <span className="availability-indicator"><i /></span>
              <span>{copy.availability}</span>
              <span className="meta-divider" aria-hidden="true">/</span>
              <span className="hero-location">{copy.location}</span>
            </motion.div>

            <motion.h1
              id="hero-title"
              className="hero-title"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>Facundo</span>
              <span className="hero-title-last">Scholze<span className="hero-period">.</span></span>
            </motion.h1>

            <motion.div
              className="hero-role-line"
              initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              aria-live="polite"
              aria-label={copy.roles.join(", ")}
            >
              <span className="role-prefix" aria-hidden="true">↳</span>
              <span className="role-text">{typedRole}</span>
              <span className="type-cursor" aria-hidden="true" />
            </motion.div>

            <motion.p
              className="hero-statement"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
            >
              {copy.statement}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
            >
              <a className="button button--primary" href="#projects">
                <span>{copy.viewProjects}</span>
                <span className="button-arrow" aria-hidden="true">↘</span>
              </a>
              <a
                className="button button--secondary"
                href={withBasePath(`/cv-facundo-scholze-${language}.txt`)}
                download={`Facundo-Scholze-CV-${language.toUpperCase()}.txt`}
              >
                <span className="download-icon" aria-hidden="true">↓</span>
                <span>{copy.downloadCv}</span>
              </a>
            </motion.div>

            <motion.div
              className="hero-social-row"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.7 }}
            >
              <span className="hero-social-label">{copy.focusLabel}</span>
              <SocialLinks labels={social} />
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="visual-orbit visual-orbit--outer" aria-hidden="true" />
            <div className="visual-orbit visual-orbit--inner" aria-hidden="true" />
            <div className="visual-node visual-node--top" aria-hidden="true">AI</div>
            <div className="visual-node visual-node--right" aria-hidden="true">API</div>
            <div className="visual-node visual-node--bottom" aria-hidden="true">{copy.visualOperation}</div>

            <div className="focus-card">
              <div className="focus-card-topline">
                <span className="focus-card-kicker">{copy.cardLabel}</span>
                <span className="focus-live"><i />{copy.status}</span>
              </div>
              <div className="focus-card-title-row">
                <div>
                  <h2>{copy.cardTitle}</h2>
                  <p>{copy.focusTitle}</p>
                </div>
                <div className="focus-monogram" aria-hidden="true">FS<span>+</span></div>
              </div>
              <div className="focus-divider" />
              <div className="focus-list">
                {copy.focusItems.map((item, index) => (
                  <div className="focus-list-row" key={item}>
                    <span className="focus-list-index">0{index + 1}</span>
                    <span className="focus-list-name">{item}</span>
                    <span className="focus-list-signal" aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
              <div className="focus-card-foot">
                <span className="focus-foot-dot" />
                <span>{copy.focusLabel}</span>
                <span className="focus-foot-code">CBA / AR</span>
              </div>
            </div>

            <div className="floating-code-card" aria-hidden="true">
              <span className="code-card-dot" />
              <span className="code-card-text">{copy.onlineStatus}</span>
              <span className="code-card-check">✓</span>
            </div>
            <div className="hero-visual-caption" aria-hidden="true">
              <span>{copy.visualCaption}</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottomline">
          <span className="hero-bottomline-left">{copy.bottomline}</span>
          <a className="scroll-cue" href="#about">
            <span>{copy.scroll}</span>
            <span className="scroll-cue-line" aria-hidden="true"><i /></span>
          </a>
          <span className="hero-bottomline-right">01 — 06</span>
        </div>
      </div>
    </section>
  );
}
