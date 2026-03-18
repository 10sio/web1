import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사이트 소개",
  description:
    "상황별 선물 추천 사이트의 운영 목적과 콘텐츠 방향을 소개합니다.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">소개</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">실제 상황에 맞는 선물 추천 정보를 정리하는 사이트입니다.</h1>
        <p className="mt-6 text-base leading-8 text-stone-600">
          상황별 선물 추천은 생일, 집들이, 결혼, 출산, 명절 같은 다양한 이벤트에 맞는 선물 아이디어를 보기 쉽게 정리합니다.
        </p>
        <p className="mt-4 text-base leading-8 text-stone-600">
          목표는 단순합니다. 모바일에서도 빠르게 읽히는 구조로, 실용적이고 센스 있는 선물을 쉽게 찾을 수 있게 돕는 것입니다.
        </p>
      </section>
    </main>
  );
}
