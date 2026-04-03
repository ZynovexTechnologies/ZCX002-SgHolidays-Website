import { useEffect } from "react";

function setMetaTag(attribute, key, content) {
  if (!content) {
    return;
  }

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setLinkTag(rel, href, extraAttributes = {}) {
  if (!href) {
    return;
  }

  const selector = extraAttributes.hreflang
    ? `link[rel="${rel}"][hreflang="${extraAttributes.hreflang}"]`
    : `link[rel="${rel}"]`;

  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);

  Object.entries(extraAttributes).forEach(([name, value]) => {
    if (value) {
      tag.setAttribute(name, value);
    }
  });
}

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  url,
  image,
  imageAlt,
  type,
  locale,
  robots,
  themeColor,
  siteName,
  twitterCard,
  imageWidth,
  imageHeight,
  schemas,
}) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "en-IN");
    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", robots);
    setMetaTag("name", "theme-color", themeColor);
    setMetaTag("name", "twitter:card", twitterCard);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
    setMetaTag("name", "twitter:image:alt", imageAlt);

    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:image:alt", imageAlt);
    setMetaTag("property", "og:image:width", imageWidth);
    setMetaTag("property", "og:image:height", imageHeight);
    setMetaTag("property", "og:site_name", siteName);
    setMetaTag("property", "og:locale", locale);

    setLinkTag("canonical", canonical);
    setLinkTag("alternate", canonical, { hreflang: "en-IN" });

    let schemaTag = document.head.querySelector(
      'script[data-seo-schema="page"], script[data-seo-schema="static"]',
    );

    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaTag);
    }

    schemaTag.setAttribute("data-seo-schema", "page");
    schemaTag.textContent = JSON.stringify(schemas);
  });

  return null;
}
