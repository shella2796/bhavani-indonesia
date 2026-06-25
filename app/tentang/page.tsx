import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {challenges, leadership, missions, strengths} from "@/lib/content";
import {fallbackSettings, withFallbackSettings} from "@/lib/fallback";
import type {Person, Settings} from "@/lib/types";
import {peopleQuery, sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export const metadata = {
  title: "Tentang",
  description: "Profil, visi, misi, nilai, dan kepemimpinan Bhavani Indonesia.",
};

export default async function AboutPage() {
  const fallbackPeople: Person[] = leadership.map(([role, name], index) => ({_id: `leader-${index}`, role, name}));
  const [cmsSettings, people] = await Promise.all([
    sanityFetch<Settings>(settingsQuery, fallbackSettings),
    sanityFetch<Person[]>(peopleQuery, fallbackPeople),
  ]);
  const settings = withFallbackSettings(cmsSettings);

  return (
    <>
      <Header/>
      <main>
        <section className="page-hero about-hero">
          <div className="shell">
            <span className="eyebrow">Tentang Bhavani</span>
            <h1>Pembawa kehidupan. Penggerak perubahan.</h1>
            <p>Bhavani adalah organisasi pemberdayaan perempuan yang membangun generasi perempuan berdaya, kritis, inklusif, dan siap memimpin perubahan.</p>
          </div>
        </section>

        <section className="section white">
          <div className="shell story-grid">
            <div><span className="eyebrow green-text">Filosofi Nama</span><h2>Bhavani berarti kehidupan yang terus bertumbuh.</h2></div>
            <div>
              <p>Nama “Bhavani” berasal dari bahasa Sanskerta yang berarti “pembawa kehidupan” atau “penggerak perubahan”. Filosofi ini menjadi landasan dalam menciptakan ekosistem yang mendukung perempuan untuk tumbuh, berkembang, dan berkontribusi aktif dalam pembangunan masyarakat.</p>
              <p>Sebagai organisasi yang dipimpin perempuan muda, Bhavani membangun gerakan yang melampaui kegiatan seremonial. Setiap inisiatif diarahkan pada kebutuhan masyarakat, pengetahuan, kolaborasi, dan dampak berkelanjutan.</p>
            </div>
          </div>
        </section>

        <section className="section soft-pink">
          <div className="shell">
            <div className="section-head ink"><div><span className="eyebrow green-text">Lanskap Tantangan</span><h2>Mengapa gerakan ini dibutuhkan.</h2></div></div>
            <div className="challenge-grid">
              {challenges.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section vision-section">
          <div className="shell vision-grid">
            <div><span className="eyebrow">Visi</span><h2>{settings.vision || fallbackSettings.vision}</h2></div>
            <div className="mission-list">
              <span className="eyebrow">Misi</span>
              {missions.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="shell">
            <div className="section-head ink"><div><span className="eyebrow green-text">Nilai Organisasi</span><h2>Lima kekuatan ekosistem Bhavani.</h2></div></div>
            <div className="strength-grid">
              {strengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section leadership-section">
          <div className="shell">
            <div className="section-head ink"><div><span className="eyebrow green-text">Kepemimpinan</span><h2>Perempuan muda di balik gerakan.</h2></div><p>Struktur lintas bidang yang menghubungkan program, pendidikan, riset, advokasi, ekonomi, dan komunikasi.</p></div>
            <div className="leadership-grid">
              {people.map((person) => <article key={person._id}><small>{person.role}</small><h3>{person.name}</h3>{person.bio ? <p>{person.bio}</p> : null}</article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer settings={settings}/>
    </>
  );
}
