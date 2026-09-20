import { readFile, writeFile } from "node:fs/promises";
import { loadEnv } from "vite";
import { render } from "../.prerender/entry-server.js";

const environment = loadEnv("production", process.cwd(), "VITE_");
const configuredUrl = environment.VITE_SITE_URL || process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");
const siteUrl = configuredUrl ? new URL(configuredUrl).origin : "";
if (siteUrl && !/^https?:\/\//.test(siteUrl)) throw new Error("VITE_SITE_URL must be an HTTP(S) URL.");

let html = await readFile("dist/index.html", "utf8");
html = html.replace("<!--app-html-->", render());
if (siteUrl) {
  html = html.replace("</head>", `<link rel="canonical" href="${siteUrl}/" /><meta property="og:url" content="${siteUrl}/" /></head>`);
  html = html.replaceAll('content="/social-card.png"', `content="${siteUrl}/social-card.png"`);
  const person = { "@context": "https://schema.org", "@type": "Person", name: "Malak Saiid", url: `${siteUrl}/`, jobTitle: "Junior Software Engineer", sameAs: ["https://github.com/Malak-Saiid", "https://www.linkedin.com/in/malak-saiid-95653041b"] };
  html = html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(person).replaceAll("<", "\\u003c")}</script></head>`);
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc></url></urlset>`);
}
await writeFile("dist/index.html", html);
await writeFile("dist/robots.txt", `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`);
console.log("Prerendered the complete portfolio into crawlable, static HTML.");
