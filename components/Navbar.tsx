"use client";

import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Language, SiteCopy } from "@/lib/translations";

type NavbarProps = {
  language: Language;
  copy: SiteCopy["nav"];
  languageCopy: SiteCopy["languageToggle"];
  onLanguageChange: (language: Language) => void;
};

export function Navbar({ language, copy, languageCopy, onLanguageChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "home", label: copy.home },
    { id: "about", label: copy.about },
    { id: "skills", label: copy.skills },
    { id: "projects", label: copy.projects },
    { id: "journey", label: copy.journey },
    { id: "contact", label: copy.contact },
  ];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-36% 0px -54% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${menuOpen ? " site-header--menu-open" : ""}`}>
      <div className="nav-inner mx-auto flex w-full max-w-site items-center justify-between px-5 sm:px-8 lg:px-12">
        <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="Facundo Scholze — home">
          <span className="brand-mark" aria-hidden="true">
            <span>F</span><span>S</span><i />
          </span>
          <span className="brand-name">facundo<span>.</span></span>
        </a>

        <nav className="desktop-nav" aria-label={copy.label}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "nav-link is-active" : "nav-link"}
              aria-current={activeSection === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageToggle
            language={language}
            label={languageCopy.label}
            englishLabel={languageCopy.english}
            spanishLabel={languageCopy.spanish}
            onChange={onLanguageChange}
          />
          <a className="nav-contact-link" href="#contact" onClick={closeMenu}>
            {copy.talk}<span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        aria-label={copy.label}
        aria-hidden={!menuOpen}
      >
        {links.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "mobile-nav-link is-active" : "mobile-nav-link"}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="mobile-nav-index">0{index + 1}</span>
            <span>{link.label}</span>
            <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
