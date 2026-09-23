// Keep site-wide links here so a GitHub Pages project basePath is respected.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}

export const CONTACT_EMAIL = "scholzefacundotrabajo@gmail.com";
export const CONTACT_PHONE = "+543755629953";
export const GITHUB_URL = "https://github.com/facuscholze";
export const LINKEDIN_URL = "https://linkedin.com/in/facundo-luciano-scholze";

// Gmail web compose deep link. mailto: needs a mail client registered with
// the OS — on many desktops Chrome/Edge silently aborts it — so every email
// link on the site goes through Gmail compose instead.
export const GMAIL_COMPOSE_BASE = "https://mail.google.com/mail/";

export function gmailComposeUrl({
  to = CONTACT_EMAIL,
  subject = "",
  body = "",
}: { to?: string; subject?: string; body?: string } = {}): string {
  return (
    `${GMAIL_COMPOSE_BASE}?view=cm&fs=1` +
    `&to=${encodeURIComponent(to)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}

// Open an external link in a new tab when the browser allows it (window.open
// during the click's user-activation), otherwise let the anchor navigate in
// the current tab. Keeps links working inside sandboxed preview iframes that
// may block target=_blank.
export function openExternalTabOrFollow(event: { preventDefault(): void }, url: string): void {
  try {
    const opened = window.open(url, "_blank");
    if (opened) {
      try {
        opened.opener = null;
      } catch {
        // Cross-origin opener access can be refused; the tab is already open.
      }
      event.preventDefault();
    }
  } catch {
    // Fall through to the anchor's default navigation.
  }
}
