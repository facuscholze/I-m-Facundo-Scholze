# Facundo Scholze — Portfolio

Portfolio estático, responsive y bilingüe (inglés por defecto / español) construido con **Next.js 16.3**, **React 19**, **TypeScript**, **Tailwind CSS**, **Motion** y **Lenis**.

## Requisitos

- Node.js 22 o superior (Next.js requiere Node 20.9+).
- npm.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abrí `http://localhost:3000`. El sitio guarda la preferencia de idioma localmente; en una primera visita inicia en inglés.

## Build estático

```bash
npm run typecheck
npm run build
```

`next build` genera la carpeta `out/`, lista para GitHub Pages. El proyecto usa `output: "export"`, `trailingSlash: true` y `next/image` con `unoptimized: true`; no necesita un servidor Node en producción.

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` construye y publica el sitio al hacer push a `main` (o manualmente desde Actions). En el repositorio, elegí **Settings → Pages → Build and deployment → GitHub Actions**.

`next.config.js` detecta `GITHUB_REPOSITORY` durante GitHub Actions y configura `basePath` / `assetPrefix` para un sitio de proyecto. Para una publicación bajo otra ruta, definí `NEXT_PUBLIC_BASE_PATH` antes del build; usá una cadena vacía si el sitio vive en la raíz. El archivo `public/.nojekyll` evita que GitHub Pages oculte assets de Next.js.

## Personalización rápida

- **Foto:** reemplazá `public/images/avatar-placeholder.webp` por una foto propia optimizada en WebP o AVIF. Conservá el nombre (o actualizá la ruta en `components/About.tsx`). El avatar abstracto original está en `public/images/avatar-placeholder.svg`.
- **CV:** los botones descargan `public/cv-facundo-scholze-en.txt` o `public/cv-facundo-scholze-es.txt` según el idioma. Si preferís PDF, agregalo a `public/` y actualizá el enlace en `components/Hero.tsx`.
- **Textos e idiomas:** editá `lib/translations.ts`. Los bloques de perfil, proyectos, educación, idiomas y soft skills suministrados para este sitio se mantienen textualmente en el diccionario.
- **Skills:** agregá o quitá tecnologías en `lib/skills.ts`; los nombres traducibles se mapean dentro de `skills.skillLabels`.
- **Proyectos y experiencia:** modificá `projects.items` y `timeline.entries` en `lib/translations.ts`. Los links externos se abren en una pestaña nueva.
- **Diseño:** variables de color, tipografía y estilos responsive están en `app/globals.css`; los tokens de Tailwind viven en `tailwind.config.ts`.

La tarjeta de experiencia usa “Project-based / Por proyectos” porque no se indicó un número verificable de años de experiencia. Podés reemplazar ese valor en `lib/translations.ts` por el dato real.

## Estructura

```text
app/                 Layout, metadata, estilos globales y página estática
components/           Navbar, Hero, About, Skills, Projects, Timeline, Contact y UI reutilizable
lib/translations.ts   Diccionario completo EN/ES
lib/skills.ts         Categorías y marcas Devicon
public/               Avatar, CVs y .nojekyll
.github/workflows/    Build y deploy a GitHub Pages
```
