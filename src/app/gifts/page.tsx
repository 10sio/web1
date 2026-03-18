import type { Metadata } from "next";
import { GiftCard } from "@/components/gift-card";
import { SectionHeading } from "@/components/section-heading";
import { giftArticles } from "@/data/gifts";

export const metadata: Metadata = {
  title: "Gift Recommendation Articles",
  description:
    "Browse gift recommendation articles for birthdays, weddings, housewarming parties, Christmas, and more.",
};

export default function GiftsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="All Articles"
        title="Gift recommendation guides by occasion"
        description="A clean library of evergreen gift recommendation articles built for affiliate content and display ads."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {giftArticles.map((article) => (
          <section key={article.slug} id={article.occasion.toLowerCase().replace(/\s+/g, "-")}>
            <GiftCard article={article} />
          </section>
        ))}
      </div>
    </main>
  );
}
