import type { Metadata } from "next";

// Builds per-page metadata with a canonical URL and matching Open Graph tags.
export function pageMeta({ title, description, path, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      // A page-level openGraph replaces the layout one, so always set an image (site default if none given)
      images: [{ url: image ?? "/images/og-default.jpg", width: 1200, height: 630 }],
    },
    twitter: { title, description },
  };
}
