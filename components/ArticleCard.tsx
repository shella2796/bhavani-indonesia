import Image from "next/image";
import Link from "next/link";
import type {Article} from "@/lib/types";
import {urlFor} from "@/sanity/lib/image";

export function ArticleCard({article, index}: {article: Article; index: number}) {
  const date = article.publishedAt
    ? new Intl.DateTimeFormat("id-ID", {dateStyle: "long"}).format(new Date(article.publishedAt))
    : "";
  const imageUrl = article.coverImage ? urlFor(article.coverImage as never).width(900).height(560).fit("crop").url() : null;

  return (
    <Link className={`article-card tone-${index % 3}`} href={`/artikel/${article.slug}`}>
      <div className="article-art">
        {imageUrl ? <Image src={imageUrl} alt="" fill sizes="(max-width: 900px) 100vw, 33vw"/> : <span>B</span>}
      </div>
      <div className="meta"><span>{article.category || "Catatan"}</span><span>{date}</span></div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <b>Baca selengkapnya →</b>
    </Link>
  );
}
