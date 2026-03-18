import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Gift Situations",
  description:
    "Learn about Gift Situations, a niche website focused on gift recommendations by occasion and recipient.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">A simple gift idea site built around real situations.</h1>
        <p className="mt-6 text-base leading-8 text-stone-600">
          Gift Situations publishes straightforward gift recommendation guides for common occasions like birthdays, weddings, housewarming parties, and holidays.
        </p>
        <p className="mt-4 text-base leading-8 text-stone-600">
          The goal is simple: help readers find practical, thoughtful gifts quickly with clean content that is easy to browse on mobile or desktop.
        </p>
      </section>
    </main>
  );
}
