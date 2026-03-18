import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "상황별 선물 추천 사이트의 개인정보처리방침 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">개인정보</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">개인정보처리방침</h1>
        <div className="mt-6 space-y-4 text-base leading-8 text-stone-600">
          <p>
            본 사이트는 방문 통계 분석, 쿠키, 광고 도구를 활용해 이용 행태를 파악하고 사이트 운영에 필요한 광고 수익을 확보할 수 있습니다.
          </p>
          <p>
            일부 페이지에는 제휴 링크가 포함될 수 있으며, 사용자가 해당 링크를 통해 구매할 경우 추가 비용 없이 일정 수수료를 받을 수 있습니다.
          </p>
          <p>
            사이트 이용자는 이러한 일반적인 개인정보 및 광고 정책에 동의한 것으로 간주됩니다. 문의는 hello@example.com 으로 보내주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
