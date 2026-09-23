"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Signals } from "@/components/Signals";
import { Skills } from "@/components/Skills";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Timeline } from "@/components/Timeline";
import { translations, type Language } from "@/lib/translations";

type StoredLanguage = Language | null;

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = translations[language];

  // English is the first-visit default. Remember a visitor's explicit choice.
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("facundo-portfolio-language") as StoredLanguage;
    if (savedLanguage === "en" || savedLanguage === "es") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("facundo-portfolio-language", language);
  }, [language]);

  return (
    <SmoothScroll>
      <a className="skip-link" href="#main-content">{copy.nav.skip}</a>
      <Navbar
        language={language}
        copy={copy.nav}
        languageCopy={copy.languageToggle}
        onLanguageChange={setLanguage}
      />
      <main id="main-content">
        <Hero copy={copy.hero} social={copy.social} language={language} />
        <About copy={copy.about} />
        <Skills copy={copy.skills} />
        <Projects copy={copy.projects} />
        <Timeline copy={copy.timeline} />
        <Signals copy={copy.signals} />
        <Contact copy={copy.contact} social={copy.social} />
      </main>
      <footer className="site-footer">
        <div className="footer-inner mx-auto flex w-full max-w-site items-center justify-between px-5 sm:px-8 lg:px-12">
          <a className="footer-brand" href="#home">facundo<span>.</span></a>
          <p>{copy.footer.note} <span>© {new Date().getFullYear()} Facundo Scholze.</span> {copy.footer.rights}</p>
        </div>
      </footer>
    </SmoothScroll>
  );
}
