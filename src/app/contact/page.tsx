import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Gift Situations",
  description: "Contact Gift Situations for questions, feedback, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">Get in touch</h1>
        <p className="mt-6 text-base leading-8 text-stone-600">
          For general questions, editorial feedback, or partnership inquiries, contact us at{" "}
          <a href="mailto:hello@giftsituations.com" className="font-medium text-stone-900 hover:text-amber-700">
            hello@giftsituations.com
          </a>
          .
        </p>
        <p className="mt-4 text-base leading-8 text-stone-600">
          We aim to keep the site simple, useful, and focused on practical gift recommendation content.
        </p>
      </section>
    </main>
  );
}
