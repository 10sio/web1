import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for Gift Situations.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Privacy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">Privacy policy</h1>
        <div className="mt-6 space-y-4 text-base leading-8 text-stone-600">
          <p>
            Gift Situations may use analytics, cookies, and advertising tools to understand site usage and support the website through display advertising.
          </p>
          <p>
            Some pages may include affiliate links. If readers click a link and make a purchase, the site may earn a commission at no extra cost to them.
          </p>
          <p>
            By using this website, visitors agree to this general privacy and advertising policy. For questions, contact hello@giftsituations.com.
          </p>
        </div>
      </section>
    </main>
  );
}
