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
