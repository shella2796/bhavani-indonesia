import Image from "next/image";
import Link from "next/link";
import {ArticleCard} from "@/components/ArticleCard";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {challenges, flagshipPrograms, programPillars, strengths} from "@/lib/content";
import {fallbackArticles, fallbackSettings, withFallbackSettings} from "@/lib/fallback";
import type {Article, Settings} from "@/lib/types";
import {articlesQuery, sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export default async function Home() {
  const [cmsSettings, articles] = await Promise.all([
    sanityFetch<Settings>(settingsQuery, fallbackSettings),
    sanityFetch<Article[]>(articlesQuery, fallbackArticles),
  ]);
  const settings = withFallbackSettings(cmsSettings);

  return (
    <>
      <Header/>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Organisasi Pemberdayaan Perempuan</span>
            <h1>{settings.heroTitle}</h1>
            <p>{settings.heroText}</p>
            <div className="actions">
              <Link className="button light" href="/tentang">Kenali Bhavani</Link>
              <Link className="button outline-light" href="/program">Jelajahi Program</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-logo-frame">
              <Image src="/bhavani-logo.png" alt="Logo Bhavani Indonesia" width={620} height={390} priority/>
            </div>
            <div className="hero-note">
              <b>Bhavani</b>
              <span>Dalam bahasa Sanskerta berarti “pembawa kehidupan” atau “penggerak perubahan”.</span>
            </div>
          </div>
        </section>

        <section className="value-strip" aria-label="Nilai utama Bhavani">
          <span>Pendidikan</span><span>Pemberdayaan</span><span>Inklusivitas</span>
        </section>

        <section className="section white">
          <div className="shell intro-grid">
            <div>
              <span className="eyebrow green-text">Mengapa Bhavani hadir</span>
              <h2>Perempuan bukan hanya penerima manfaat, tetapi agen perubahan.</h2>
            </div>
            <div className="intro-copy">
              <p>{settings.description}</p>
              <p>Bhavani menjembatani kebutuhan perempuan dengan pengetahuan, jejaring, sumber daya, dan peluang pengembangan diri melalui pendidikan, advokasi, riset, kampanye publik, serta pengabdian masyarakat.</p>
              <Link className="text-link" href="/tentang">Baca profil organisasi →</Link>
            </div>
          </div>
          <div className="shell challenge-grid">
            {challenges.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark">
          <div className="shell">
            <div className="section-head">
              <div><span className="eyebrow">Arsitektur Program</span><h2>Empat pilar untuk perubahan yang utuh.</h2></div>
              <p>Bhavani bergerak dari penguatan individu, pembangunan komunitas, hingga advokasi berbasis data.</p>
            </div>
            <div className="pillar-grid">
              {programPillars.map((pillar) => (
                <article key={pillar.number}>
                  <span className="pillar-number">{pillar.number}</span>
                  <p className="pillar-kicker">{pillar.subtitle}</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul>{pillar.programs.map((program) => <li key={program}>{program}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="section-action"><Link className="button light" href="/program">Lihat Semua Program</Link></div>
          </div>
        </section>

        <section className="section soft-pink">
          <div className="shell">
            <div className="section-head ink">
              <div><span className="eyebrow green-text">Program Unggulan</span><h2>Dari ruang belajar hingga perubahan sistemik.</h2></div>
              <p>Program - program yang menghubungkan edukasi, ruang aman, jejaring, riset, dan advokasi.</p>
            </div>
            <div className="flagship-grid">
              {flagshipPrograms.map((program, index) => (
                <article key={program.slug}>
                  <div className="program-index">{String(index + 1).padStart(2, "0")}</div>
                  <span>{program.pillar}</span>
                  <h3>{program.title}</h3>
                  <p>{program.summary}</p>
                  <div className="tag-row">{program.details.slice(0, 3).map((detail) => <small key={detail}>{detail}</small>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="shell impact-grid">
            <div>
              <span className="eyebrow green-text">Model Dampak</span>
              <h2>Perubahan dimulai dari individu dan tumbuh menjadi kebijakan.</h2>
              <p>Penguatan kapasitas perempuan membentuk keluarga yang lebih tangguh, komunitas yang semakin inklusif, dan advokasi publik yang lebih responsif.</p>
            </div>
            <div className="impact-levels">
              <div><span>01</span><strong>Individu</strong><p>Pendidikan, kapasitas, dan kemandirian diri.</p></div>
              <div><span>02</span><strong>Keluarga</strong><p>Relasi dan lingkungan keluarga yang semakin kuat.</p></div>
              <div><span>03</span><strong>Komunitas</strong><p>Ruang sosial yang aman, setara, dan inklusif.</p></div>
              <div><span>04</span><strong>Kebijakan Publik</strong><p>Keadilan dan keberlanjutan sosial berbasis data.</p></div>
            </div>
          </div>
        </section>

        <section className="section strength-section">
          <div className="shell">
            <div className="section-head ink">
              <div><span className="eyebrow green-text">Keunggulan Organisasi</span><h2>Gerakan yang dibangun untuk bertahan dan berdampak.</h2></div>
            </div>
            <div className="strength-grid">
              {strengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="shell">
            <div className="section-head ink">
              <div><span className="eyebrow green-text">Catatan Bhavani</span><h2>Pengetahuan untuk memperluas cara pandang.</h2></div>
              <Link className="button outline" href="/artikel">Semua Artikel</Link>
            </div>
            <div className="article-grid">{articles.slice(0, 3).map((article, index) => <ArticleCard key={article._id} article={article} index={index}/>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="shell cta">
            <div><span className="eyebrow green-text">Mari bertumbuh bersama</span><h2>Perluas pengetahuan. Bangun ruang aman. Lahirkan pemimpin perubahan.</h2></div>
            <Link className="button" href="/terlibat">Mulai Kolaborasi</Link>
          </div>
        </section>
      </main>
      <Footer settings={settings}/>
    </>
  );
}
