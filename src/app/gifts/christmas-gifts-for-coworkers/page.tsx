import type { Metadata } from "next";
import { GiftDetailPage } from "@/components/gift-detail-page";
import { getGiftMetadata } from "@/lib/gift-page";

export const metadata: Metadata = getGiftMetadata("christmas-gifts-for-coworkers");

export default function ChristmasGiftPage() {
  return <GiftDetailPage slug="christmas-gifts-for-coworkers" />;
}
