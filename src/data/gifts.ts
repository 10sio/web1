export type GiftArticle = {
  slug: string;
  title: string;
  description: string;
  occasion: string;
  recipient: string;
  budget: string;
  publishedAt: string;
  readingTime: string;
  hero: string;
  intro: string;
  ideas: {
    name: string;
    reason: string;
  }[];
  tips: string[];
};

export const giftArticles: GiftArticle[] = [
  {
    slug: "birthday-gifts-for-best-friend",
    title: "Birthday Gift Ideas for Your Best Friend",
    description:
      "Thoughtful birthday gift recommendations for your best friend, from personalized keepsakes to practical everyday favorites.",
    occasion: "Birthday Gift",
    recipient: "Best Friend",
    budget: "$25-$80",
    publishedAt: "2026-03-10",
    readingTime: "4 min read",
    hero: "Useful, personal gifts that feel close without being overdone.",
    intro:
      "When you know someone well, the best birthday gifts are often the ones that feel naturally matched to their routine, hobbies, and personality.",
    ideas: [
      {
        name: "Custom photo desk calendar",
        reason: "It turns shared memories into something they will actually use every month.",
      },
      {
        name: "Favorite snack and coffee box",
        reason: "A curated set of familiar treats feels personal and easy to enjoy right away.",
      },
      {
        name: "Everyday tote or pouch",
        reason: "A stylish daily-use item works well for friends who prefer practical gifts.",
      },
    ],
    tips: [
      "Pick one detail that connects to an inside joke or shared memory.",
      "Choose useful items over novelty unless they already love playful gifts.",
      "Add a short handwritten note to make a simple gift feel complete.",
    ],
  },
  {
    slug: "housewarming-gifts-for-new-homeowners",
    title: "Housewarming Gifts for New Homeowners",
    description:
      "Simple housewarming gift ideas for new homeowners who need practical, stylish, and easy-to-use essentials.",
    occasion: "Housewarming Gift",
    recipient: "New Homeowners",
    budget: "$30-$120",
    publishedAt: "2026-03-11",
    readingTime: "5 min read",
    hero: "Practical home gifts always win when someone is settling into a new place.",
    intro:
      "A strong housewarming gift helps people enjoy their new home sooner, whether that means hosting guests, getting organized, or making the space feel warm.",
    ideas: [
      {
        name: "Wood serving board",
        reason: "It works for both display and entertaining, making it a versatile first-home gift.",
      },
      {
        name: "Neutral throw blanket",
        reason: "Soft home textiles add comfort without requiring you to guess too much about decor style.",
      },
      {
        name: "Olive oil and salt set",
        reason: "A quality kitchen staple feels polished and useful from day one.",
      },
    ],
    tips: [
      "Stick with neutral colors and classic materials if you are unsure of their style.",
      "Avoid bulky decor unless you know their space well.",
      "Functional kitchen and hosting gifts are usually the safest choice.",
    ],
  },
  {
    slug: "wedding-gifts-for-couples-who-have-everything",
    title: "Wedding Gifts for Couples Who Have Everything",
    description:
      "Useful wedding gift recommendations for modern couples who already own the basics and want quality over clutter.",
    occasion: "Wedding Gift",
    recipient: "Couple",
    budget: "$50-$150",
    publishedAt: "2026-03-12",
    readingTime: "5 min read",
    hero: "Aim for quality upgrades instead of more stuff.",
    intro:
      "Couples who already live together often appreciate gifts that elevate everyday routines rather than duplicate what they already own.",
    ideas: [
      {
        name: "Premium bath towel set",
        reason: "Upgraded essentials feel luxurious and are easy for couples to use together.",
      },
      {
        name: "Date night gift card bundle",
        reason: "Shared experiences can feel more memorable than another household item.",
      },
      {
        name: "Elegant champagne flutes",
        reason: "A celebratory piece fits the occasion and still gets occasional long-term use.",
      },
    ],
    tips: [
      "Look for gifts that upgrade a routine the couple already has.",
      "Keep packaging clean and refined for a wedding-appropriate feel.",
      "If you choose an experience, include a small physical item with it.",
    ],
  },
  {
    slug: "thank-you-gifts-for-teachers",
    title: "Thank You Gift Ideas for Teachers",
    description:
      "Affordable thank you gifts for teachers that feel sincere, useful, and easy to appreciate at the end of a semester or school year.",
    occasion: "Thank You Gift",
    recipient: "Teacher",
    budget: "$15-$50",
    publishedAt: "2026-03-13",
    readingTime: "4 min read",
    hero: "A teacher gift should be thoughtful, simple, and easy to use.",
    intro:
      "The most appreciated gifts for teachers usually combine practicality with a small personal touch, without creating extra work or clutter.",
    ideas: [
      {
        name: "Nice pen and notebook set",
        reason: "Useful desk tools feel polished and professional without being too personal.",
      },
      {
        name: "Local cafe gift card",
        reason: "It is flexible, easy to use, and works for most teachers.",
      },
      {
        name: "Small hand cream set",
        reason: "A subtle self-care gift can feel thoughtful after a busy school term.",
      },
    ],
    tips: [
      "Pair a practical item with a short thank you note.",
      "Avoid oversized decor or anything difficult to carry home.",
      "Check school gifting rules if you are buying a higher-value item.",
    ],
  },
  {
    slug: "new-mom-gifts-for-comfort-and-support",
    title: "New Mom Gifts for Comfort and Support",
    description:
      "Comfort-focused gift ideas for new moms, including practical care items and simple ways to make daily life easier.",
    occasion: "New Baby Gift",
    recipient: "New Mom",
    budget: "$25-$100",
    publishedAt: "2026-03-14",
    readingTime: "5 min read",
    hero: "The best gifts for new moms make rest, recovery, and routines easier.",
    intro:
      "It is easy to focus only on the baby, but many of the most meaningful gifts are the ones that support the mother directly.",
    ideas: [
      {
        name: "Insulated tumbler with straw",
        reason: "It helps keep drinks nearby and easy to sip during long, busy days.",
      },
      {
        name: "Soft robe or lounge set",
        reason: "Comfortable clothing is useful during recovery and time at home.",
      },
      {
        name: "Meal delivery gift card",
        reason: "Reducing decision fatigue and meal prep can be more valuable than another baby item.",
      },
    ],
    tips: [
      "Choose gifts that reduce effort, not just add sentiment.",
      "Soft, washable, easy-care items are ideal.",
      "A note that centers the mom can make the gift feel especially supportive.",
    ],
  },
  {
    slug: "christmas-gifts-for-coworkers",
    title: "Christmas Gift Ideas for Coworkers",
    description:
      "Professional yet friendly Christmas gift ideas for coworkers, perfect for office exchanges and low-pressure holiday gifting.",
    occasion: "Christmas Gift",
    recipient: "Coworker",
    budget: "$10-$40",
    publishedAt: "2026-03-15",
    readingTime: "4 min read",
    hero: "Coworker gifts work best when they are useful, polished, and easy to enjoy.",
    intro:
      "For workplace holiday gifting, the safest options feel warm and thoughtful without becoming too personal or expensive.",
    ideas: [
      {
        name: "Desk-friendly snack set",
        reason: "A simple edible gift is easy, shareable, and widely appreciated.",
      },
      {
        name: "Ceramic mug",
        reason: "A clean, durable mug fits most office routines and feels seasonally appropriate.",
      },
      {
        name: "Mini notebook and pen",
        reason: "It is affordable, practical, and suitable for nearly any professional setting.",
      },
    ],
    tips: [
      "Keep the budget modest and workplace-appropriate.",
      "Avoid overly personal scents, apparel, or joke gifts unless the culture clearly fits.",
      "Simple packaging makes a small gift feel more intentional.",
    ],
  },
];

export const featuredCategories = [
  {
    title: "Birthday Gifts",
    description: "Easy wins for friends, siblings, and partners.",
    href: "/gifts#birthday-gift",
  },
  {
    title: "Housewarming Gifts",
    description: "Useful ideas for new spaces and fresh starts.",
    href: "/gifts#housewarming-gift",
  },
  {
    title: "Wedding Gifts",
    description: "Quality gift ideas for couples and celebrations.",
    href: "/gifts#wedding-gift",
  },
];

export function getGiftArticle(slug: string) {
  return giftArticles.find((article) => article.slug === slug);
}
