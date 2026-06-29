const fs = require("fs");

const articlePagePath = "app/artikel/[slug]/page.tsx";
const cssPath = "app/globals.css";

const articlePage = `import Image from "next/image";
import {PortableText} from "@portabletext/react";
import {notFound} from "next/navigation";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {fallbackArticles, fallbackSettings, withFallbackSettings} from "@/lib/fallback";
import type {Article, Settings} from "@/lib/types";
import {urlFor} from "@/sanity/lib/image";
import {sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export default async function ArticlePage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const fallback = fallbackArticles.find((a) => a.slug === slug);
  const query = \`*[_type=="article" && slug.current==$slug][0]{_id,title,"slug":slug.current,excerpt,category,publishedAt,coverImage,body}\`;
  const article = await sanityFetch<Article | null>(query.replace("$slug", JSON.stringify(slug)), fallback || null);

  if (!article) notFound();

  const imageUrl = article.coverImage
    ? urlFor(article.coverImage as never).width(1400).height(780).fit("crop").url()
    : null;

  const settings = withFallbackSettings(
    await sanityFetch<Settings>(settingsQuery, fallbackSettings),
  );

  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <div className="shell reading">
            <span className="eyebrow">{article.category || "Artikel"}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </div>
        </section>

        {imageUrl && (
          <section className="article-cover-section">
            <div className="shell reading">
              <div className="article-cover">
                <Image
                  src={imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        <article className="section white">
          <div className="shell reading prose">
            {article.body?.length ? (
              <PortableText value={article.body as never}/>
            ) : (
              <>
                <p>Perubahan sosial tumbuh dari percakapan sehari-hari: tentang siapa yang didengar, bagaimana tanggung jawab dibagi, dan apakah setiap orang memiliki ruang untuk menentukan pilihannya.</p>
                <h2>Melihat pengalaman secara utuh</h2>
                <p>Ruang dialog yang aman membantu pengalaman dibagikan tanpa diperkecil dan perspektif berbeda bertemu tanpa kehilangan rasa hormat.</p>
                <h2>Pertumbuhan adalah kerja bersama</h2>
                <p>Kesetaraan membutuhkan keterlibatan keluarga, komunitas, institusi, serta laki-laki sebagai bagian dari perubahan.</p>
              </>
            )}
          </div>
        </article>
      </main>
      <Footer settings={settings}/>
    </>
  );
}
`;

fs.writeFileSync(articlePagePath, articlePage);

let css = fs.readFileSync(cssPath, "utf8");

const articleCoverCss = `
.article-cover-section {
  padding: 56px 0 0;
  background: var(--white);
}

.article-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--cream);
}

.article-cover img {
  object-fit: cover;
}

@media (max-width: 560px) {
  .article-cover-section {
    padding-top: 32px;
  }

  .article-cover {
    aspect-ratio: 4 / 3;
  }
}
`;

if (!css.includes(".article-cover-section")) {
  css += "\\n" + articleCoverCss;
}

fs.writeFileSync(cssPath, css);

console.log("Article cover image support added.");
