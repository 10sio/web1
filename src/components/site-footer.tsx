import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:px-8">
        <p>Gift Situations shares simple gift recommendation content for everyday occasions.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-stone-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-stone-900">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-stone-900">
            Privacy
          </Link>
          <Link href="/gifts" className="hover:text-stone-900">
            Gift Guides
          </Link>
        </nav>
      </div>
    </footer>
  );
}
