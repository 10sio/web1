import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGiftArticle } from "@/data/gifts";

type GiftPageProps = {
  searchParams: Promise<{
    slug?: string;
  }>;
};

export async function generateMetadata({ searchParams }: GiftPageProps): Promise<Metadata> {
  const { slug } = await searchParams;
  const article = slug ? getGiftArticle(slug) : undefined;

  if (!article) {
    return {
      title: "Gift Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function GiftPage({ searchParams }: GiftPageProps) {
  const { slug } = await searchParams;
  const article = slug ? getGiftArticle(slug) : undefined;

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <article>
        <header className="border-b border-stone-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            {article.occasion}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">{article.description}</p>
          <dl className="mt-6 flex flex-wrap gap-4 text-sm text-stone-500">
            <div>
              <dt className="font-medium text-stone-800">Recipient</dt>
              <dd>{article.recipient}</dd>
            </div>
            <div>
              <dt className="font-medium text-stone-800">Budget</dt>
              <dd>{article.budget}</dd>
            </div>
            <div>
              <dt className="font-medium text-stone-800">Published</dt>
              <dd>{article.publishedAt}</dd>
            </div>
          </dl>
        </header>

        <section className="py-8">
          <p className="text-lg leading-8 text-stone-700">{article.hero}</p>
          <p className="mt-4 text-base leading-7 text-stone-600">{article.intro}</p>
        </section>

        <section aria-labelledby="gift-ideas" className="border-t border-stone-200 py-8">
          <h2 id="gift-ideas" className="text-2xl font-semibold tracking-tight text-stone-900">
            Recommended gift ideas
          </h2>
          <div className="mt-6 space-y-4">
            {article.ideas.map((idea, index) => (
              <section key={idea.name} className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-stone-900">
                  {index + 1}. {idea.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{idea.reason}</p>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="gift-tips" className="border-t border-stone-200 py-8">
          <h2 id="gift-tips" className="text-2xl font-semibold tracking-tight text-stone-900">
            Quick tips before you buy
          </h2>
          <ul className="mt-5 space-y-3 text-base leading-7 text-stone-600">
            {article.tips.map((tip) => (
              <li
                key={tip}
                className="rounded-2xl bg-white pl-6 before:relative before:left-[-0.8rem] before:text-amber-700 before:content-['•']"
              >
                {tip}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
