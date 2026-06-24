import Link from "next/link";
import type {Article} from "@/lib/types";

export function ArticleCard({article, index}: {article: Article; index: number}) {
  const date = article.publishedAt ? new Intl.DateTimeFormat("id-ID", {dateStyle: "long"}).format(new Date(article.publishedAt)) : "";
  return (
    <Link className={`article-card tone-${index % 3}`} href={`/artikel/${article.slug}`}>
      <div className="article-art">B</div>
      <div className="meta"><span>{article.category || "Catatan"}</span><span>{date}</span></div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <b>Baca selengkapnya →</b>
    </Link>
  );
}
