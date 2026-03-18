import type { Metadata } from "next";
import { GiftCard } from "@/components/gift-card";
import { SectionHeading } from "@/components/section-heading";
import { giftArticles } from "@/data/gifts";

export const metadata: Metadata = {
  title: "선물 추천 글 모음",
  description:
    "생일, 집들이, 결혼, 크리스마스 등 다양한 상황에 맞춘 선물 추천 글을 한눈에 살펴보세요.",
};

export default function GiftsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="전체 글"
        title="상황별 선물 추천 가이드"
        description="검색 유입과 광고 수익형 운영에 맞게 구성한 선물 추천 글을 상황별로 모아봤습니다."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {giftArticles.map((article) => (
          <section key={article.slug} id={article.categoryId}>
            <GiftCard article={article} />
          </section>
        ))}
      </div>
    </main>
  );
}
