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

type SubmitState = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact({ copy, social }: ContactProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Capture the form synchronously: React clears event.currentTarget as
    // soon as an async handler yields at its first await.
    const form = event.currentTarget;
    event.preventDefault();

    if (submitState === "sending") return;
    setSubmitState("sending");

    try {
      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const message = String(formData.get("message") ?? "").trim();

      // Native `required` / `type="email"` validation runs before this event
      // fires; this guard keeps the UI from ever reporting success for an
      // incomplete or malformed payload.
      if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
        setSubmitState("error");
        return;
      }

      const plainTextBody = `${copy.nameLabel}: ${name}\n${copy.emailFieldLabel}: ${email}\n\n${message}`;
      const subject = encodeURIComponent(`${copy.emailSubject} ${name}`);
      const body = encodeURIComponent(plainTextBody);

      // The site is a static export: copy the message as a fallback, then open
      // the visitor's mail app with the same details pre-filled. Clipboard
      // access is best-effort and must never block the send itself.
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(plainTextBody).catch(() => undefined);
      }

      // The mailto hand-off below is synchronous and immediately hands control
      // to the OS mail handler (which can stall the main thread briefly), so
      // yield long enough for the loading state to actually paint first — on
      // desktop and mobile alike.
      await new Promise((resolve) => setTimeout(resolve, 350));

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      form.reset();
      setSubmitState("success");
    } catch {
      // Keep the visitor's input on failure so they can retry without retyping.
      setSubmitState("error");
    }
  };

  const isSending = submitState === "sending";

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
                <button
                  className="button button--primary contact-submit"
                  type="submit"
                  disabled={isSending}
                  aria-busy={isSending}
                >
                  <span>{isSending ? copy.sendingLabel : copy.submit}</span><span className="button-arrow" aria-hidden="true">↗</span>
                </button>
                {submitState === "success" ? (
                  <p className="form-note form-note--sent" role="status" aria-live="polite">
                    <span className="form-note-check" aria-hidden="true">✓</span>
                    <span>
                      {copy.submittedMessage}{" "}
                      <a className="form-note-link" href={`mailto:${CONTACT_EMAIL}`}>
                        {copy.fallbackMessage} {CONTACT_EMAIL}
                      </a>
                    </span>
                  </p>
                ) : submitState === "error" ? (
                  <p className="form-note form-note--error" role="alert">{copy.errorMessage}</p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
