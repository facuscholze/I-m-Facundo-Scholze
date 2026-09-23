"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, CONTACT_PHONE, gmailComposeUrl, openExternalTabOrFollow } from "@/lib/site";
import type { SiteCopy } from "@/lib/translations";

type ContactProps = {
  copy: SiteCopy["contact"];
  social: SiteCopy["social"];
};

type SubmitState = "idle" | "sending" | "success" | "error";

const GMAIL_DIRECT_URL = gmailComposeUrl();

export function Contact({ copy, social }: ContactProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [composeUrl, setComposeUrl] = useState<string | null>(null);

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
      const reason = String(formData.get("reason") ?? "").trim();
      const message = String(formData.get("message") ?? "").trim();

      // Native `required` validation runs before this event fires; this guard
      // keeps the UI from ever reporting success for an incomplete payload.
      if (!name || !reason || !message) {
        setSubmitState("error");
        return;
      }

      const plainTextBody = `${copy.nameLabel}: ${name}\n\n${message}`;
      const gmailUrl = gmailComposeUrl({ to: CONTACT_EMAIL, subject: reason, body: plainTextBody });
      setComposeUrl(gmailUrl);

      // Open Gmail while the click's user-activation is still fresh:
      // - Regular tab → redirect this tab to Gmail (the requested behavior).
      // - Embedded preview iframe → open a new tab so the host UI is not
      //   navigated away; fall through to the redirect if popups are blocked.
      const isEmbedded = window.top !== window;
      let openedTab: Window | null = null;
      if (isEmbedded) {
        openedTab = window.open(gmailUrl, "_blank");
        if (openedTab) {
          try {
            openedTab.opener = null;
          } catch {
            // Cross-origin assignment can be refused; the tab is already open.
          }
        }
      }

      // Copy the full message as a best-effort fallback; never blocks the send.
      const clipboardPayload = `${copy.reasonFieldLabel}: ${reason}\n${copy.nameLabel}: ${name}\n\n${message}`;
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(clipboardPayload).catch(() => undefined);
      }

      // Yield long enough for the loading state to paint before we leave.
      await new Promise((resolve) => setTimeout(resolve, 350));

      form.reset();
      setSubmitState("success");

      if (!openedTab) {
        window.location.href = gmailUrl;
      }
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
              <a
                className="contact-detail"
                href={GMAIL_DIRECT_URL}
                onClick={(event) => openExternalTabOrFollow(event, GMAIL_DIRECT_URL)}
              >
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
                <span>{copy.reasonFieldLabel}</span>
                <input name="reason" type="text" autoComplete="off" required />
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
                      <a
                        className="form-note-link"
                        href={composeUrl ?? GMAIL_DIRECT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
