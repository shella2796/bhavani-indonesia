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

export const dynamic = "force-dynamic";
export const revalidate = 0;

const portableTextComponents = {
  types: {
    image: ({value}: {value: any}) => {
      if (!value?.asset) return null;

      const imageUrl = urlFor(value)
        .width(1200)
        .fit("max")
        .auto("format")
        .url();

      return (
        <figure className="article-body-image">
          <img
            src={imageUrl}
            alt={value.alt || ""}
            loading="lazy"
          />
          {value.alt && <figcaption>{value.alt}</figcaption>}
        </figure>
      );
    },
  },
};

export default async function ArticlePage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const fallback = fallbackArticles.find((a) => a.slug === slug);

  const query = \`*[_type=="article" && slug.current==$slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    coverImage,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }\`;

  const article = await sanityFetch<Article | null>(
    query.replace("$slug", JSON.stringify(slug)),
    fallback || null
  );

  if (!article) notFound();

  const coverImageUrl = article.coverImage
    ? urlFor(article.coverImage as never).width(1400).height(780).fit("crop").auto("format").url()
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

        {coverImageUrl && (
          <section className="article-cover-section">
            <div className="shell reading">
              <div className="article-cover">
                <Image
                  src={coverImageUrl}
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
              <PortableText value={article.body as never} components={portableTextComponents}/>
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

const cssToAdd = `
.article-body-image {
  margin: 42px 0;
}

.article-body-image img {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid var(--line);
  background: var(--cream);
}

.article-body-image figcaption {
  margin-top: 10px;
  color: var(--muted);
  font-size: .82rem;
  text-align: center;
}

.prose .article-body-image + p {
  margin-top: 28px;
}
`;

if (!css.includes(".article-body-image")) {
  css += "\\n" + cssToAdd;
}

fs.writeFileSync(cssPath, css);

console.log("Article body image rendering fixed with forced dynamic fetching.");
