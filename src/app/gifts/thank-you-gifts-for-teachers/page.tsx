import type { Metadata } from "next";
import { GiftDetailPage } from "@/components/gift-detail-page";
import { getGiftMetadata } from "@/lib/gift-page";

export const metadata: Metadata = getGiftMetadata("thank-you-gifts-for-teachers");

export default function TeacherGiftPage() {
  return <GiftDetailPage slug="thank-you-gifts-for-teachers" />;
}
