import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:px-8">
        <p>상황별 선물 추천은 일상적인 이벤트와 관계에 맞춘 선물 아이디어를 한국어로 정리한 정보형 사이트입니다.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-stone-900">
            소개
          </Link>
          <Link href="/contact" className="hover:text-stone-900">
            문의
          </Link>
          <Link href="/privacy" className="hover:text-stone-900">
            개인정보처리방침
          </Link>
          <Link href="/gifts" className="hover:text-stone-900">
            선물 가이드
          </Link>
        </nav>
      </div>
    </footer>
  );
}
