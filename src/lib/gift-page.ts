import type { Metadata } from "next";
import { getGiftArticle } from "@/data/gifts";

export function getGiftMetadata(slug: string): Metadata {
  const article = getGiftArticle(slug);

  if (!article) {
    return {
      title: "선물 글을 찾을 수 없습니다",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}
