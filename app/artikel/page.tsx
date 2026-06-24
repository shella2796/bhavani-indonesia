import {ArticleCard} from "@/components/ArticleCard";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {fallbackArticles, fallbackSettings} from "@/lib/fallback";
import type {Article, Settings} from "@/lib/types";
import {articlesQuery, sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export const metadata = {title: "Artikel"};
export default async function ArticlesPage() {
  const [settings, articles] = await Promise.all([sanityFetch<Settings>(settingsQuery, fallbackSettings), sanityFetch<Article[]>(articlesQuery, fallbackArticles)]);
  return <><Header/><main><section className="page-hero"><div className="shell"><span className="eyebrow">Artikel</span><h1>Catatan untuk memahami, bukan menghakimi.</h1><p>Perspektif tentang perempuan, kesetaraan, pendidikan, relasi, dan pertumbuhan.</p></div></section><section className="section white"><div className="shell article-grid">{articles.map((a,i)=><ArticleCard key={a._id} article={a} index={i}/>)}</div></section></main><Footer settings={settings}/></>;
}
