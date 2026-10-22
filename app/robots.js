export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/catalog"],
      disallow: ["/requisitions/", "/api/"],
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}