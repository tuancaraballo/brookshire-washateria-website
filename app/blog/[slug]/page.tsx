import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import SmartImage from "@/components/SmartImage";
import { ContentBody, CtaBand, PageHero, ServiceCard } from "@/components/blocks";
import { getPost, posts } from "@/data/posts";
import { services } from "@/data/services";
import { business, SITE_URL } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.cover?.og ? `/images/${post.cover.og}` : undefined,
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const related = services.filter((s) => post.relatedServices.includes(s.slug));

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: `${SITE_URL}${path}`,
            author: { "@type": "Organization", name: business.name },
            publisher: { "@id": `${SITE_URL}/#business` },
            ...(post.cover ? { image: `${SITE_URL}/images/${post.cover.file}` } : {}),
          },
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <PageHero title={post.title} lead={post.excerpt} crumbs={[{ name: "Blog", path: "/blog" }, { name: post.title }]}>
        {post.cover && (
          <SmartImage
            file={post.cover.file}
            alt={post.cover.alt}
            icon="basket"
            priority
            className="hidden aspect-[4/3] rounded-3xl ring-1 ring-white/20 lg:flex"
            sizes="40vw"
          />
        )}
      </PageHero>
      <article className="py-14 md:py-20">
        <div className="container-site max-w-3xl">
          <ContentBody sections={post.sections} />
        </div>
      </article>
      <section className="bg-cream py-14">
        <div className="container-site">
          <h2 className="text-2xl font-bold">Related services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((s) => (
              <ServiceCard key={s.slug} href={`/${s.slug}`} icon={s.icon} title={s.name} text={s.metaDescription.split(". ")[0] + "."} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
