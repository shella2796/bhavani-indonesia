import Link from "next/link";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {flagshipPrograms, programPillars} from "@/lib/content";
import {fallbackSettings, withFallbackSettings} from "@/lib/fallback";
import type {Settings} from "@/lib/types";
import {sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export const metadata = {
  title: "Program",
  description: "Program unggulan Bhavani Indonesia dalam pendidikan, kepemimpinan, ekonomi, advokasi, dan pengetahuan.",
};

export default async function ProgramPage() {
  const cmsSettings = await sanityFetch<Settings>(settingsQuery, fallbackSettings);
  const settings = withFallbackSettings(cmsSettings);

  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <div className="shell">
            <span className="eyebrow">Program Bhavani</span>
            <h1>Pemberdayaan yang bergerak dari kapasitas diri hingga perubahan sosial.</h1>
            <p>Program Bhavani dirancang untuk membangun kapasitas, komunitas, kemandirian ekonomi, advokasi, dan pengetahuan yang berpihak pada perempuan serta generasi muda.</p>
          </div>
        </section>

        <section className="section white">
          <div className="shell">
            <div className="section-head ink">
              <div><span className="eyebrow green-text">Empat Pilar</span><h2>Satu ekosistem, empat jalur perubahan.</h2></div>
            </div>
            <div className="pillar-grid light-pillar-grid">
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
          </div>
        </section>

        <section className="section soft-pink">
          <div className="shell">
            <div className="section-head ink">
              <div><span className="eyebrow green-text">Program Unggulan</span><h2>Empat pilar, satu arah gerak.</h2></div>
              <p>Setiap program mengambil peran berbeda dalam membangun kapasitas, komunitas, kemandirian ekonomi, dan perubahan sosial yang berpihak pada perempuan serta generasi muda.</p>
            </div>
            <div className="program-detail-list">
              {flagshipPrograms.map((program, index) => (
                <article id={program.slug} key={program.slug}>
                  <div className="program-detail-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <span className="meta">{program.pillar}</span>
                    <h2>{program.title}</h2>
                    <p>{program.summary}</p>
                    <div className="tag-row">{program.details.map((detail) => <small key={detail}>{detail}</small>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="shell program-callout">
            <div><span className="eyebrow">Kolaborasi Program</span><h2>Punya ruang, gagasan, atau isu yang ingin digerakkan bersama?</h2></div>
            <div><p>Bhavani terbuka untuk kerja sama dengan sekolah, pemerintah, akademisi, komunitas, media, sektor swasta, dan masyarakat sipil.</p><Link className="button light" href="/terlibat">Hubungi Bhavani</Link></div>
          </div>
        </section>
      </main>
      <Footer settings={settings}/>
    </>
  );
}
