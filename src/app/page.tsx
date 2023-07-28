import { Heading } from "./common/components";
import type { Article } from "./types";

async function getArticles() {
  const res = await fetch("http:", {
  cache: "no-store",
});

  // エラーハンドリング
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
    </div>
  );
}