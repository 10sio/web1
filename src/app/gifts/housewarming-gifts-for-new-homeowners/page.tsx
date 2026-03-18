import type { Metadata } from "next";
import { GiftDetailPage } from "@/components/gift-detail-page";
import { getGiftMetadata } from "@/lib/gift-page";

export const metadata: Metadata = getGiftMetadata("housewarming-gifts-for-new-homeowners");

export default function HousewarmingGiftPage() {
  return <GiftDetailPage slug="housewarming-gifts-for-new-homeowners" />;
}
