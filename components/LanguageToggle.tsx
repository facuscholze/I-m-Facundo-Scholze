"use client";

import type { Language } from "@/lib/translations";

type LanguageToggleProps = {
  language: Language;
  label: string;
  englishLabel: string;
  spanishLabel: string;
  onChange: (language: Language) => void;
};

export function LanguageToggle({
  language,
  label,
  englishLabel,
  spanishLabel,
  onChange,
}: LanguageToggleProps) {
  return (
    <div className="language-toggle" role="group" aria-label={label}>
      <button
        className={language === "en" ? "language-option is-active" : "language-option"}
        type="button"
        aria-pressed={language === "en"}
        aria-label={englishLabel}
        onClick={() => onChange("en")}
      >
        EN
      </button>
      <span className="language-divider" aria-hidden="true">/</span>
      <button
        className={language === "es" ? "language-option is-active" : "language-option"}
        type="button"
        aria-pressed={language === "es"}
        aria-label={spanishLabel}
        onClick={() => onChange("es")}
      >
        ES
      </button>
    </div>
  );
}
