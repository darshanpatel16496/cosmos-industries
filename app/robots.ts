import type { MetadataRoute } from "next";

// ADD THIS LINE
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.cosmosindustries.co.in/sitemap.xml",
  };
}