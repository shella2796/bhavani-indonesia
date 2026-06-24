import Image from "next/image";
import Link from "next/link";
import {ArticleCard} from "@/components/ArticleCard";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {fallbackArticles, fallbackPrograms, fallbackSettings} from "@/lib/fallback";
import type {Article, Program, Settings} from "@/lib/types";
import {articlesQuery, programsQuery, sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export default async function Home() {
  const [settings, programs, articles] = await Promise.all([
    sanityFetch<Settings>(settingsQuery, fallbackSettings),
    sanityFetch<Program[]>(programsQuery, fallbackPrograms),
    sanityFetch<Article[]>(articlesQuery, fallbackArticles),
  ]);
  return <>
    <Header/>
    <main>
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow">Ruang tumbuh yang inklusif</span><h1>{settings.heroTitle}</h1><p>{settings.heroText}</p><div className="actions"><Link className="button light" href="#tentang">Kenali Bhavani</Link><Link className="button outline-light" href="/program">Lihat Program</Link></div></div>
        <div className="hero-visual"><Image src="/bhavani-logo.png" alt="Bhavani Indonesia" width={520} height={345} priority/><div className="hero-note"><b>Diversity. Inclusivity. Growth.</b><span>Tiga nilai yang menggerakkan setiap ruang Bhavani.</span></div></div>
      </section>
      <section className="value-strip"><span>Merangkul Diversitas</span><span>Membangun Inklusivitas</span><span>Menumbuhkan Perempuan</span></section>
      <section className="section white" id="tentang"><div className="shell about"><div><span className="eyebrow green-text">Tentang Bhavani</span><h2>Ruang aman untuk suara yang sering tidak mendapat tempat.</h2></div><div><p>{settings.description}</p><div className="principle"><b>01</b><span><strong>Mendengar pengalaman</strong>Pengalaman personal layak didengar dan dipahami tanpa penghakiman.</span></div><div className="principle"><b>02</b><span><strong>Belajar lintas perspektif</strong>Beragam latar belakang membentuk pemahaman yang lebih utuh.</span></div><div className="principle"><b>03</b><span><strong>Bertumbuh bersama</strong>Ruang yang mendorong keberanian dan perubahan berkelanjutan.</span></div></div></div></section>
      <section className="section dark"><div className="shell"><div className="section-head"><div><span className="eyebrow">Yang kami lakukan</span><h2>Gagasan menjadi percakapan. Percakapan menjadi gerakan.</h2></div><p>Program Bhavani menghubungkan edukasi, refleksi, dan kolaborasi.</p></div><div className="program-grid">{programs.slice(0,3).map((p,i)=><article key={p._id}><small>0{i+1}</small><h3>{p.title}</h3><p>{p.shortDescription}</p></article>)}</div></div></section>
      <section className="section"><div className="shell feature"><div className="feature-mark"><Image src="/bhavani-logo.png" alt="" width={330} height={220}/></div><div><span className="meta">Program Sorotan · Kartini Day 2026</span><h2>Kartini Hari Ini: Antara Perjuangan, Peran Ganda, dan Relasi Setara</h2><p>Live series yang membaca kembali pemikiran Kartini, membicarakan beban mental dan peran ganda, serta mengajak semua pihak membangun relasi setara.</p><Link className="button outline" href="/program">Pelajari Program →</Link></div></div></section>
      <section className="section white"><div className="shell"><div className="section-head ink"><div><span className="eyebrow green-text">Catatan Bhavani</span><h2>Ide, pengalaman, dan perspektif yang layak dibicarakan.</h2></div><Link className="button outline" href="/artikel">Semua Artikel →</Link></div><div className="article-grid">{articles.slice(0,3).map((a,i)=><ArticleCard key={a._id} article={a} index={i}/>)}</div></div></section>
      <section className="section"><div className="shell cta"><div><h2>Mari membangun ruang tumbuh yang lebih luas.</h2><p>Berkolaborasi sebagai komunitas, narasumber, relawan, atau mitra.</p></div><Link className="button" href="/terlibat">Mulai Kolaborasi →</Link></div></section>
    </main><Footer settings={settings}/>
  </>;
}
