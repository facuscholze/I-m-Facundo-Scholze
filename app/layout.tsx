import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://facuscholze.github.io/I-m-Facundo-Scholze/"),
  title: {
    default: "Facundo Scholze — Full Stack Developer & AI Automation Engineer",
    template: "%s | Facundo Scholze",
  },
  description:
    "Portfolio of Facundo Scholze, a backend-focused Full Stack Developer and AI Automation Engineer based in Córdoba, Argentina. Java, Spring Boot, APIs, AI agents, and workflow automation.",
  applicationName: "Facundo Scholze Portfolio",
  authors: [{ name: "Facundo Scholze", url: "https://github.com/facuscholze" }],
  creator: "Facundo Scholze",
  keywords: [
    "Facundo Scholze",
    "Full Stack Developer",
    "Backend Developer",
    "AI Automation Engineer",
    "Java",
    "Spring Boot",
    "CrewAI",
    "Córdoba Argentina",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://facuscholze.github.io/I-m-Facundo-Scholze/",
    title: "Facundo Scholze — Full Stack Developer & AI Automation Engineer",
    description:
      "Backend engineering, AI agents, and thoughtful automation. Portfolio of Facundo Scholze, based in Córdoba, Argentina.",
    siteName: "Facundo Scholze",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Scholze — Full Stack Developer & AI Automation Engineer",
    description: "Backend engineering, AI agents, and thoughtful automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Devicon supplies familiar technology marks in the skills grid. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/devicon@2.17.0/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
