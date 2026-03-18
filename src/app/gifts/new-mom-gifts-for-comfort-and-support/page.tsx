import type { Metadata } from "next";
import { GiftDetailPage } from "@/components/gift-detail-page";
import { getGiftMetadata } from "@/lib/gift-page";

export const metadata: Metadata = getGiftMetadata("new-mom-gifts-for-comfort-and-support");

export default function NewMomGiftPage() {
  return <GiftDetailPage slug="new-mom-gifts-for-comfort-and-support" />;
}
