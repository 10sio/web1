import type { Metadata } from "next";
import { GiftDetailPage } from "@/components/gift-detail-page";
import { getGiftMetadata } from "@/lib/gift-page";

export const metadata: Metadata = getGiftMetadata("wedding-gifts-for-couples-who-have-everything");

export default function WeddingGiftPage() {
  return <GiftDetailPage slug="wedding-gifts-for-couples-who-have-everything" />;
}
