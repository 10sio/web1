import Link from "next/link";
import { GiftCard } from "@/components/gift-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredCategories, giftArticles } from "@/data/gifts";

const featuredArticles = giftArticles.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-stone-200 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_80%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
              Gift Recommendation Ideas
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Find the right gift for birthdays, housewarming parties, weddings, and more.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Gift Situations is a simple guide to thoughtful presents based on real-life occasions,
              recipients, and budgets.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/gifts"
                className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Browse gift guides
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:border-stone-900"
              >
                Learn about this site
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Categories"
          title="Popular gift situations"
          description="Start with a quick category, then explore detailed gift recommendations written for specific occasions."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="rounded-3xl border border-stone-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-sm"
            >
              <h2 className="text-lg font-semibold text-stone-900">{category.title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Guides"
            title="Sample gift recommendation articles"
            description="These evergreen guides are designed for SEO-friendly structure, clean reading, and easy expansion later."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.map((article) => (
              <GiftCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/gifts" className="text-sm font-medium text-stone-900 hover:text-amber-700">
              View all gift articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
