import Link from "next/link";
import type { GiftArticle } from "@/data/gifts";

type GiftCardProps = {
  article: GiftArticle;
};

export function GiftCard({ article }: GiftCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-5 shadow-sm shadow-stone-950/5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
        {article.occasion}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-900">
        <Link href={`/gifts/${article.slug}`} className="hover:text-amber-700">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-6 text-stone-600">{article.description}</p>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-stone-500">
        <div>
          <dt className="font-medium text-stone-700">Recipient</dt>
          <dd>{article.recipient}</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-700">Budget</dt>
          <dd>{article.budget}</dd>
        </div>
      </dl>
      <div className="mt-6 flex items-center justify-between text-sm text-stone-500">
        <span>{article.readingTime}</span>
        <Link href={`/gifts/${article.slug}`} className="font-medium text-stone-900 hover:text-amber-700">
          Read guide
        </Link>
      </div>
    </article>
  );
}
