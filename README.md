# Malak Saiid — Developer Portfolio

A personal portfolio for Malak Saiid, Junior Software Engineer and Software Engineering Master’s student in Lebanon. The site presents her full-stack projects, professional experience, skills, education, certifications, and contact details in a consistent Purple Tech identity.

Built with **React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React**. Dark mode is the default; a matching light theme, responsive navigation, project details, CV downloads, and an email draft form support the recruiter experience.

## Get started

Use a current Node.js LTS version compatible with Vite (Node.js 22 or newer) and npm. Run these commands from the project folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The development server binds to `127.0.0.1`.

## Build and check

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

- `typecheck` checks TypeScript without generating files.
- `lint` runs ESLint and treats warnings as failures.
- `build` checks TypeScript, builds the browser application, produces a temporary server rendering bundle, and runs `scripts/prerender.mjs` to write the complete page into `dist/index.html`.
- `start` previews the production files locally. Build first, then open the URL printed by Vite.

The final `dist/` directory is fully static. Its prerendered HTML includes the portfolio content for search engines and is hydrated by React for interactions. No Node.js application server is needed after deployment. The `.prerender/` directory is a build intermediate, not the deployment output.

## Project structure

```text
app/                    App composition, entry points, and global theme styles
components/layout/      Navigation, footer, and page-level interactions
components/sections/    Hero, about, experience, projects, skills, and contact
components/ui/          Shared headings, reveals, and project previews
data/                   Editable portfolio information
types/                  Content interfaces and shared types
public/                 CV, favicon, share image, and optional visual assets
scripts/prerender.mjs    Static HTML and SEO output generation
index.html              Page title, metadata, and initial theme setup
vercel.json             Vercel build settings and response headers
```

## Edit portfolio information

| Change | File |
| --- | --- |
| Name, role, email, location, GitHub, LinkedIn, CV path, and navigation | `data/site.ts` |
| Project descriptions, dates, technologies, features, and links | `data/projects.ts` |
| Skill categories | `data/skills.ts` |
| NRC experience and responsibilities | `data/experience.ts` |
| Degrees, institutions, dates, and GPA | `data/education.ts` |
| Certifications and languages | `data/certificates.ts` |
| About section narrative and highlight cards | `components/sections/about.tsx` |
| Hero content and role text | `components/sections/hero.tsx` |
| Theme colors and shared visual styles | `app/globals.css` |
| Page title, description, OpenGraph, and Twitter metadata | `index.html` |

The supplied GitHub and LinkedIn profile URLs are already set in `data/site.ts`. Change `site.github` or `site.linkedin` there to update their visible links throughout the portfolio.

Keep future content grounded in the CV and actual work. The NRC entry describes information management; it does not assign an unsupported software development job title. The GPA is shown as `3.73` without an assumed scale.

### Project links

Edit `githubUrl` and `liveUrl` on the relevant entry in `data/projects.ts`. The supplied Sanad live URL is configured. Missing repository and demo links use `null`, and their UI states are labeled as unavailable. Replace a `null` only with the exact destination URL; a general GitHub profile is not a substitute for a project repository.

### Project screenshots

The current project previews are hand-coded interface concepts, visibly labeled **Interface concept**. They are illustrative mockups, not screenshots of the deployed applications.

To show a real screenshot, place an optimized image in `public/projects/` and update its project entry:

```ts
image: "/projects/sanad.webp",
imageAlt: "Sanad dashboard showing aid requests and case assignment",
```

Use an accurate description of the actual image. A roughly 3:2 image at 1200 × 800 pixels works well with the existing preview area. Setting `image` back to `null` restores the concept preview. See `public/projects/README.md` for asset guidance.

`public/profile/` and `public/certificates/` are reserved for optional future assets. Files placed there are not displayed automatically; their READMEs explain the current behavior.

### CV download

The provided CV is included as `public/Malak-Saiid-CV.pdf`. Replace that file to publish an updated CV while preserving all download links. If the filename changes, also update `site.cvPath` in `data/site.ts` and the CV response-header rule in `vercel.json`.

## Contact form

The form in `components/sections/contact.tsx` validates name, email, subject, and message, then opens a prefilled `mailto:` draft in the visitor’s email application. The visitor sends the message from that application. The portfolio does not submit, store, or deliver email through a backend.

The direct email link and Copy email button provide alternatives when no email application is configured. If clipboard access is unavailable, the interface offers the address for manual copying.

To add an email service later, replace the delivery portion of `handleSubmit` with your provider integration. Use a server or serverless endpoint for private credentials, validate again on that endpoint, and provide accurate pending, success, and error states. Never put private API keys in frontend source or `VITE_` environment variables; Vite exposes those variables to the browser. No email-service credentials are required for the current form.

## SEO and public URL

Copy `.env.example` to `.env.local` and set the final portfolio origin:

```dotenv
VITE_SITE_URL=https://your-portfolio-domain.com
```

Use a complete HTTP(S) URL. Rebuild after changing it. The prerender script uses this origin for the canonical link, OpenGraph URL, absolute social-image URLs, Person structured data, and `sitemap.xml`. It also creates `robots.txt`.

On Vercel, the script falls back to `VERCEL_PROJECT_PRODUCTION_URL` when `VITE_SITE_URL` is not set. Set `VITE_SITE_URL` explicitly when using a custom domain. Without either value, the local build omits the canonical URL, domain-specific structured data, and sitemap rather than inventing a production address.

The favicon is `public/favicon.svg`; the social sharing image is `public/social-card.png`. Keep metadata and the structured-data fields in `scripts/prerender.mjs` aligned when changing the portfolio owner or profile URLs.

## Deploy to Vercel

1. Push the project to a Git repository and import it into Vercel.
2. Select **Vite** as the framework, **`npm run build`** as the build command, and **`dist`** as the output directory. These settings are also supplied in `vercel.json`.
3. Set `VITE_SITE_URL` to the final public origin, or use Vercel’s automatic production URL fallback.
4. Deploy the project. If attaching a custom domain afterward, update the environment variable and redeploy.

Before sharing the public URL, confirm the CV download, provided external links, contact draft behavior, both themes, and the mobile navigation. Add actual project repository/demo URLs and screenshots as they become available. This repository is prepared for deployment; creating the files does not itself publish the website.

## Accessibility and motion

The interface uses semantic sections, named controls, keyboard focus styling, field-level validation feedback, and reduced-motion preferences. Theme colors are centralized in `app/globals.css`. When editing layouts or adding animation, preserve keyboard access, readable contrast, and `prefers-reduced-motion` behavior.
