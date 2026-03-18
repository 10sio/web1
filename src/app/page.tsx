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
              상황별 선물 아이디어
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              생일, 집들이, 결혼, 출산 등 상황에 맞는 선물을 빠르게 찾아보세요.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              상황별 선물 추천은 한국어 사용자에게 맞춰 상황, 관계, 예산 기준으로 선물 아이디어를 정리한 실용적인 가이드입니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/gifts"
                className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-700"
              >
                선물 가이드 보기
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:border-stone-900"
              >
                사이트 소개 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="대표 카테고리"
          title="많이 찾는 선물 상황"
          description="자주 검색되는 상황부터 살펴보고, 각 상황에 맞는 구체적인 선물 추천 글로 바로 이동해보세요."
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
            eyebrow="추천 글"
            title="상황별 선물 추천 아티클"
            description="광고 수익형 콘텐츠 구조를 고려해 읽기 쉽고 확장하기 쉬운 형태로 정리한 샘플 아티클입니다."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.map((article) => (
              <GiftCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/gifts" className="text-sm font-medium text-stone-900 hover:text-amber-700">
              전체 선물 글 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
