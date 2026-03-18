import Link from "next/link";

const navigation = [
  { href: "/", label: "홈" },
  { href: "/gifts", label: "선물 가이드" },
  { href: "/about", label: "소개" },
  { href: "/contact", label: "문의" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          상황별 선물 추천
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm text-stone-600">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
