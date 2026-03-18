import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description: "상황별 선물 추천 사이트에 대한 문의, 제휴, 피드백 연락처 안내입니다.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">문의</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">문의 및 제휴 안내</h1>
        <p className="mt-6 text-base leading-8 text-stone-600">
          사이트 관련 문의나 콘텐츠 제안, 제휴 상담은 아래 이메일로 연락해 주세요.{" "}
          <a href="mailto:hello@example.com" className="font-medium text-stone-900 hover:text-amber-700">
            hello@example.com
          </a>
          .
        </p>
        <p className="mt-4 text-base leading-8 text-stone-600">
          빠른 답변이 필요한 경우 문의 제목에 목적을 함께 적어주시면 확인이 더 수월합니다.
        </p>
      </section>
    </main>
  );
}
