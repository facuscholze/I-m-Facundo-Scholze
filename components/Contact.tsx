"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";
import type { SiteCopy } from "@/lib/translations";

type ContactProps = {
  copy: SiteCopy["contact"];
  social: SiteCopy["social"];
};

export function Contact({ copy, social }: ContactProps) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const plainTextBody = `${copy.nameLabel}: ${name}\n${copy.emailFieldLabel}: ${email}\n\n${message}`;
    const subject = encodeURIComponent(`${copy.emailSubject} ${name}`);
    const body = encodeURIComponent(plainTextBody);

    // The site is a static export: copy the message as a fallback, then open
    // the visitor's mail app with the same details pre-filled.
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(plainTextBody).catch(() => undefined);
    }
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setHasSubmitted(true);
  };

  return (
    <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-container mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-intro" delay={0.08}>
            <span className="contact-spark" aria-hidden="true">✳</span>
            <h3>{copy.lead}</h3>
            <div className="contact-details">
              <a className="contact-detail" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="contact-detail-icon" aria-hidden="true">↗</span>
                <span><small>{copy.emailLabel}</small><strong>{CONTACT_EMAIL}</strong></span>
              </a>
              <a className="contact-detail" href={`tel:${CONTACT_PHONE}`}>
                <span className="contact-detail-icon" aria-hidden="true">↗</span>
                <span><small>{copy.phoneLabel}</small><strong>(54) 375562-9953</strong></span>
              </a>
              <div className="contact-detail contact-detail--location">
                <span className="contact-detail-icon" aria-hidden="true">⌖</span>
                <span><small>{copy.locationLabel}</small><strong>Córdoba, Argentina</strong></span>
              </div>
            </div>

            <div className="contact-social-block">
              <span>{copy.socialTitle}</span>
              <SocialLinks labels={social} variant="text" />
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={0.16}>
            <div className="contact-form-heading">
              <h3>{copy.formTitle}</h3>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span>{copy.nameLabel}</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="form-field">
                <span>{copy.emailFieldLabel}</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="form-field form-field--message">
                <span>{copy.messageLabel}</span>
                <textarea name="message" rows={4} required />
              </label>
              <div className="contact-form-bottom">
                <button className="button button--primary contact-submit" type="submit">
                  <span>{copy.submit}</span><span className="button-arrow" aria-hidden="true">↗</span>
                </button>
                {hasSubmitted ? <p className="form-note" role="status" aria-live="polite">{copy.submittedMessage}</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
