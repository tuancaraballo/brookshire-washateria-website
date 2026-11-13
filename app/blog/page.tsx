import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/blocks";
import { posts } from "@/data/posts";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Laundry Tips & Local Guides | Brookshire Washateria Blog",
  description: "Laundry, comforter and dry cleaning tips from Brookshire Washateria & Cleaners, plus local guides for Brookshire, Fulshear and west Katy.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <>
      <PageHero title="Laundry Tips & Local Guides" lead="Practical advice from our attendants and local guides for Brookshire, Fulshear and west Katy." crumbs={[{ name: "Blog" }]} />
      <section className="py-14 md:py-20">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-line bg-white p-7 transition hover:border-aqua/50 hover:shadow-lg">
              <time dateTime={p.date} className="text-sm text-ink-soft">
                {new Date(p.date + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <h2 className="mt-2 text-2xl font-bold group-hover:text-aqua-dark">{p.title}</h2>
              <p className="mt-3 text-ink-soft">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-aqua-dark">
                Read more <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
