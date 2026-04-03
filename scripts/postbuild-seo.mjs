import fs from "node:fs/promises";
import path from "node:path";
import { getPageSeo, seoRoutes } from "../src/data/seo.js";
import { siteConfig } from "../src/data/site.js";

const distDir = path.resolve(process.cwd(), "dist");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stripManagedSeo(html) {
  const patterns = [
    /<title>[\s\S]*?<\/title>\s*/gi,
    /<link(?=[^>]*rel="canonical")[^>]*>\s*/gi,
    /<link(?=[^>]*rel="alternate")(?=[^>]*hreflang="en-IN")[^>]*>\s*/gi,
    /<meta(?=[^>]*name="description")[^>]*>\s*/gi,
    /<meta(?=[^>]*name="keywords")[^>]*>\s*/gi,
    /<meta(?=[^>]*name="robots")[^>]*>\s*/gi,
    /<meta(?=[^>]*name="author")[^>]*>\s*/gi,
    /<meta(?=[^>]*name="theme-color")[^>]*>\s*/gi,
    /<meta(?=[^>]*property="og:[^"]+")[^>]*>\s*/gi,
    /<meta(?=[^>]*name="twitter:[^"]+")[^>]*>\s*/gi,
    /<script type="application\/ld\+json" data-seo-schema="static">[\s\S]*?<\/script>\s*/gi,
  ];

  return patterns.reduce((current, pattern) => current.replace(pattern, ""), html);
}

function renderSeoBlock(seo) {
  const schemaJson = JSON.stringify(seo.schemas).replaceAll("<", "\\u003c");

  return [
    `    <title>${escapeHtml(seo.title)}</title>`,
    `    <link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `    <link rel="alternate" href="${escapeHtml(seo.canonical)}" hreflang="en-IN" />`,
    `    <meta name="description" content="${escapeHtml(seo.description)}" />`,
    `    <meta name="keywords" content="${escapeHtml(seo.keywords)}" />`,
    `    <meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    '    <meta name="author" content="SG Holidays" />',
    `    <meta name="theme-color" content="${escapeHtml(seo.themeColor)}" />`,
    `    <meta property="og:type" content="${escapeHtml(seo.type)}" />`,
    `    <meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(seo.url)}" />`,
    `    <meta property="og:site_name" content="${escapeHtml(seo.siteName)}" />`,
    `    <meta property="og:locale" content="${escapeHtml(seo.locale)}" />`,
    `    <meta property="og:image" content="${escapeHtml(seo.image)}" />`,
    `    <meta property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
    `    <meta property="og:image:width" content="${escapeHtml(seo.imageWidth)}" />`,
    `    <meta property="og:image:height" content="${escapeHtml(seo.imageHeight)}" />`,
    `    <meta name="twitter:card" content="${escapeHtml(seo.twitterCard)}" />`,
    `    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `    <meta name="twitter:image" content="${escapeHtml(seo.image)}" />`,
    `    <meta name="twitter:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
    `    <script type="application/ld+json" data-seo-schema="static">${schemaJson}</script>`,
  ].join("\n");
}

function applySeoToHtml(html, seo) {
  const stripped = stripManagedSeo(html);
  return stripped.replace("</head>", `${renderSeoBlock(seo)}\n  </head>`);
}

function getSitemapPriority(route) {
  if (route === "/") {
    return "1.0";
  }

  if (route === "/contact") {
    return "0.7";
  }

  return "0.8";
}

async function writeSitemap(origin) {
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes
  .map((route) => {
    const seo = getPageSeo(route, origin);
    return `  <url>
    <loc>${seo.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${getSitemapPriority(route)}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  await fs.writeFile(path.join(distDir, "sitemap.xml"), xml, "utf8");

  const robotsPath = path.join(distDir, "robots.txt");
  const robotsContent = await fs.readFile(robotsPath, "utf8");
  const sitemapLine = `Sitemap: ${origin}/sitemap.xml`;
  const normalizedRobots = robotsContent.includes("Sitemap:")
    ? robotsContent.replace(/^Sitemap:.*$/m, sitemapLine)
    : `${robotsContent.trim()}\n\n${sitemapLine}\n`;

  await fs.writeFile(robotsPath, normalizedRobots, "utf8");
}

async function main() {
  const baseHtmlPath = path.join(distDir, "index.html");
  const baseHtml = await fs.readFile(baseHtmlPath, "utf8");

  for (const route of seoRoutes) {
    const seo = getPageSeo(route, siteConfig.siteUrl);
    const html = applySeoToHtml(baseHtml, seo);

    if (route === "/") {
      await fs.writeFile(baseHtmlPath, html, "utf8");
      continue;
    }

    const routeDir = path.join(distDir, route.slice(1));
    await fs.mkdir(routeDir, { recursive: true });
    await fs.writeFile(path.join(routeDir, "index.html"), html, "utf8");
  }

  if (siteConfig.siteUrl) {
    await writeSitemap(siteConfig.siteUrl.replace(/\/+$/, ""));
  } else {
    console.warn("SEO postbuild: skipped sitemap.xml because siteConfig.siteUrl is not configured.");
  }
}

main().catch((error) => {
  console.error("SEO postbuild failed:", error);
  process.exitCode = 1;
});
