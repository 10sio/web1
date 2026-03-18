import type { Metadata } from "next";
import { GiftDetailPage } from "@/components/gift-detail-page";
import { getGiftMetadata } from "@/lib/gift-page";

export const metadata: Metadata = getGiftMetadata("birthday-gifts-for-best-friend");

export default function BirthdayGiftPage() {
  return <GiftDetailPage slug="birthday-gifts-for-best-friend" />;
}
