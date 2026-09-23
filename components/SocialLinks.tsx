import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

type SocialLinksProps = {
  labels: {
    github: string;
    linkedin: string;
    email: string;
    githubName: string;
    linkedinName: string;
    emailName: string;
  };
  variant?: "icons" | "text";
};

export function SocialLinks({ labels, variant = "icons" }: SocialLinksProps) {
  const links = [
    {
      name: labels.githubName,
      label: labels.github,
      href: GITHUB_URL,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.64c.56.1.76-.24.76-.54v-2.12c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.24-5.09 5.51.4.35.76 1.02.76 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      name: labels.linkedinName,
      label: labels.linkedin,
      href: LINKEDIN_URL,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.47H4.98V9h2.95v9.47ZM6.45 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.02 10.77h-2.94v-4.61c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44v4.69H9.28V9h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.55 1.96 3.55 4.51v5.18Z" />
        </svg>
      ),
    },
    {
      name: labels.emailName,
      label: labels.email,
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`social-links social-links--${variant}`}>
      {links.map((link) => (
        <a
          key={link.name}
          className="social-link"
          href={link.href}
          aria-label={link.label}
          title={link.label}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
        >
          <span className="social-icon">{link.icon}</span>
          {variant === "text" ? <span>{link.name}</span> : null}
        </a>
      ))}
    </div>
  );
}
