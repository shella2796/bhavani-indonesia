import fs from "fs";

const contentTs = `export const challenges = [
  {title: "Sosial & Budaya", text: "Kekerasan berbasis gender, diskriminasi sosial, dan ancaman terhadap ruang aman perempuan."},
  {title: "Ekonomi", text: "Ketimpangan ekonomi dan keterbatasan akses untuk mencapai kemandirian finansial."},
  {title: "Struktural", text: "Minimnya representasi perempuan dan akses kepemimpinan dalam pengambilan keputusan."},
  {title: "Digital & Mental", text: "Risiko era teknologi, kekerasan digital, dan tantangan kesehatan mental yang membutuhkan ruang aman."},
];

export const strengths = [
  ["Berbasis Pendidikan", "Pelatihan, diskusi, kajian, dan pengembangan kepemimpinan menjadi fondasi gerakan."],
  ["Berbasis Riset", "Program dikembangkan dari kebutuhan nyata dan kajian yang berorientasi pada solusi."],
  ["Pemimpin Muda", "Bhavani membuka ruang bagi pemimpin perempuan muda yang adaptif dan inklusif."],
  ["Kolaborasi Lintas Sektor", "Pemerintah, akademisi, komunitas, swasta, media, dan masyarakat sipil bergerak bersama."],
  ["Dampak Berkelanjutan", "Kegiatan dirancang untuk membangun ekosistem pemberdayaan jangka panjang."],
];

export const programPillars = [
  {
    number: "01",
    title: "Pendidikan & Pengembangan Kapasitas",
    subtitle: "Pendidikan & Pengembangan Kapasitas",
    description: "Memperkuat pengetahuan, keterampilan, karakter, kepemimpinan, dan kesiapan perempuan serta generasi muda untuk menghadapi tantangan masa depan.",
    programs: ["Sekolah Berdaya Perempuan", "Bhavani Session", "Bhavani Academy", "Vanbucha Goes to School"],
  },
  {
    number: "02",
    title: "Kepemimpinan & Jejaring",
    subtitle: "Kepemimpinan & Jejaring",
    description: "Membangun ruang kolaboratif, jejaring strategis, dan kepemimpinan perempuan untuk memperluas dampak sosial dan mendorong perubahan.",
    programs: ["Bhavani Bloom Festival", "Bhavani Connect", "Women Lead Forward"],
  },
  {
    number: "03",
    title: "Ekonomi & Kewirausahaan Perempuan",
    subtitle: "Ekonomi & Kewirausahaan Perempuan",
    description: "Mendorong kemandirian ekonomi perempuan melalui pengembangan usaha, inovasi produk, peningkatan kapasitas bisnis, dan kewirausahaan sosial yang berkelanjutan.",
    programs: ["Womenpreneur Hub", "Inkubasi Usaha Perempuan", "Bhavani Social Enterprise", "Vanbucha", "Bhava Milk", "Bhavani Merchandise"],
  },
  {
    number: "04",
    title: "Advokasi & Pengetahuan",
    subtitle: "Advokasi & Pengetahuan",
    description: "Menghasilkan riset, literasi publik, dan rekomendasi kebijakan berbasis data untuk mendorong perubahan yang lebih adil, inklusif, dan responsif terhadap isu perempuan.",
    programs: ["Riset Femisida", "Kajian Bicara Femisida", "Gender Insight Lab", "Policy Brief Series"],
  },
];

export const flagshipPrograms = [
  {
    slug: "sekolah-berdaya-perempuan",
    pillar: "Pendidikan & Pengembangan Kapasitas",
    title: "Sekolah Berdaya Perempuan",
    summary: "Program pembelajaran berkelanjutan dengan kurikulum terstruktur yang mendampingi perempuan muda bertumbuh melalui pengembangan diri, gender, kewirausahaan, dan karier.",
    details: ["Konsep diri", "Psikologi perempuan", "Gender", "Kewirausahaan", "Pengembangan karier"],
  },
  {
    slug: "bhavani-session",
    pillar: "Pendidikan & Pengembangan Kapasitas",
    title: "Bhavani Session",
    summary: "Ruang diskusi daring yang membahas isu perempuan, kesehatan mental, pendidikan, kepemimpinan, dan literasi publik.",
    details: ["Kesehatan mental", "Literasi digital", "Kesetaraan gender", "Kepemimpinan muda"],
  },
  {
    slug: "bhavani-academy",
    pillar: "Pendidikan & Pengembangan Kapasitas",
    title: "Bhavani Academy",
    summary: "Kelas keterampilan praktis dan profesional yang dirancang untuk membekali peserta dengan kompetensi yang relevan di dunia kerja, bisnis, dan teknologi.",
    details: ["Digital Skills", "Career Development", "Entrepreneurship", "Creative Skills", "STEM"],
  },
  {
    slug: "vanbucha-goes-to-school",
    pillar: "Pendidikan & Pengembangan Kapasitas",
    title: "Vanbucha Goes to School",
    summary: "Program edukasi dan pelatihan pembuatan kombucha yang memperkenalkan inovasi pangan sehat, sains fermentasi, dan kewirausahaan kepada generasi muda.",
    details: ["Bioteknologi", "Fermentasi", "Kewirausahaan", "Inovasi pangan", "Literasi sains"],
  },
  {
    slug: "bhavani-bloom-festival",
    pillar: "Kepemimpinan & Jejaring",
    title: "Bhavani Bloom Festival",
    summary: "Festival kolaboratif yang mempertemukan perempuan muda, komunitas, organisasi, dan mitra untuk berbagi inspirasi, pengalaman, serta peluang kolaborasi.",
    details: ["Networking", "Kolaborasi", "Talkshow", "Exhibition"],
  },
  {
    slug: "bhavani-connect",
    pillar: "Kepemimpinan & Jejaring",
    title: "Bhavani Connect",
    summary: "Forum dialog strategis yang mempertemukan akademisi, praktisi, komunitas, sektor swasta, dan pembuat kebijakan.",
    details: ["Kebijakan publik", "Kepemimpinan", "Lintas sektor", "Kolaborasi"],
  },
  {
    slug: "women-lead-forward",
    pillar: "Kepemimpinan & Jejaring",
    title: "Women Lead Forward",
    summary: "Seminar, simposium, dan forum kepemimpinan perempuan yang membahas politik, kebijakan publik, organisasi, dan pengambilan keputusan.",
    details: ["Politik perempuan", "Kepemimpinan", "Kebijakan publik", "Advokasi"],
  },
  {
    slug: "womenpreneur-hub",
    pillar: "Ekonomi & Kewirausahaan Perempuan",
    title: "Womenpreneur Hub",
    summary: "Ruang belajar, mentoring, dan jejaring bagi perempuan pelaku usaha untuk mengembangkan bisnis yang berdaya saing dan berkelanjutan.",
    details: ["UMKM perempuan", "Mentoring bisnis", "Branding", "Networking"],
  },
  {
    slug: "inkubasi-usaha-perempuan",
    pillar: "Ekonomi & Kewirausahaan Perempuan",
    title: "Inkubasi Usaha Perempuan",
    summary: "Program pendampingan usaha yang membantu perempuan mengembangkan produk, strategi pemasaran, model bisnis, dan akses pasar.",
    details: ["Business Development", "Market Access", "Branding", "Pendampingan Usaha"],
  },
  {
    slug: "bhavani-social-enterprise",
    pillar: "Ekonomi & Kewirausahaan Perempuan",
    title: "Bhavani Social Enterprise",
    summary: "Unit kewirausahaan sosial yang mengembangkan produk inovatif untuk mendukung pemberdayaan perempuan dan keberlanjutan program sosial Bhavani.",
    details: ["Kewirausahaan sosial", "Produk lokal", "Inovasi", "Dampak berkelanjutan", "Vanbucha", "Bhava Milk", "Bhavani Merchandise"],
  },
  {
    slug: "vanbucha",
    pillar: "Ekonomi & Kewirausahaan Perempuan",
    title: "Vanbucha",
    summary: "Minuman kombucha hasil fermentasi yang menggabungkan inovasi pangan sehat, edukasi sains, dan kewirausahaan perempuan.",
    details: ["Kombucha", "Fermentasi", "Healthy Beverage", "Food Innovation"],
  },
  {
    slug: "bhava-milk",
    pillar: "Ekonomi & Kewirausahaan Perempuan",
    title: "Bhava Milk",
    summary: "Produk minuman bernutrisi yang dikembangkan sebagai bagian dari inovasi pangan dan penguatan ekonomi perempuan.",
    details: ["Healthy Drink", "Nutrisi", "Produk lokal", "Womenpreneurship"],
  },
  {
    slug: "bhavani-merchandise",
    pillar: "Ekonomi & Kewirausahaan Perempuan",
    title: "Bhavani Merchandise",
    summary: "Produk kreatif yang mendukung gerakan pemberdayaan perempuan sekaligus memperkuat identitas komunitas Bhavani.",
    details: ["Totebag", "Merchandise", "Creative Product", "Community Support"],
  },
  {
    slug: "riset-femisida",
    pillar: "Advokasi & Pengetahuan",
    title: "Riset Femisida",
    summary: "Kajian berbasis data mengenai femisida dan berbagai bentuk kekerasan terhadap perempuan sebagai dasar edukasi publik dan rekomendasi kebijakan.",
    details: ["Kajian strategis", "Data gender", "Publikasi edukatif", "Rekomendasi kebijakan"],
  },
  {
    slug: "kajian-bicara-femisida",
    pillar: "Advokasi & Pengetahuan",
    title: "Kajian Bicara Femisida",
    summary: "Forum publik yang membahas kekerasan berbasis gender, hukum, HAM, perlindungan perempuan, dan isu keadilan sosial.",
    details: ["HAM", "Hukum", "Kekerasan berbasis gender", "Literasi publik"],
  },
  {
    slug: "gender-insight-lab",
    pillar: "Advokasi & Pengetahuan",
    title: "Gender Insight Lab",
    summary: "Pusat kajian dan publikasi yang mengangkat isu kesetaraan gender, STEM, ekonomi perempuan, kepemimpinan, dan partisipasi perempuan dalam pembangunan.",
    details: ["Gender", "STEM", "Kepemimpinan perempuan", "Riset sosial"],
  },
  {
    slug: "policy-brief-series",
    pillar: "Advokasi & Pengetahuan",
    title: "Policy Brief Series",
    summary: "Publikasi rekomendasi kebijakan berbasis riset yang ditujukan bagi pemerintah, akademisi, media, dan masyarakat sipil.",
    details: ["Policy Brief", "Evidence-Based Policy", "Advokasi", "Tata Kelola"],
  },
];

export const missions = [
  ["Akses Pendidikan", "Menyediakan pelatihan keterampilan hidup, kewirausahaan, dan teknologi untuk meningkatkan kapasitas perempuan."],
  ["Kemandirian Ekonomi", "Mendukung kewirausahaan dan literasi keuangan agar perempuan semakin berdaya secara finansial."],
  ["Kesejahteraan Sosial & Mental", "Menghadirkan dukungan psikologis dan ruang aman untuk berbagi pengalaman serta saling menguatkan."],
  ["Kesetaraan Kesempatan", "Mengedukasi masyarakat tentang kesetaraan dan pemberdayaan perempuan di seluruh sektor."],
];

export const leadership = [
  ["Chairwoman", "Iik Nurul Fatimah"],
  ["Secretary General", "Dewi Valentin"],
  ["Finance Lead", "Vransiska Fami Arizona"],
  ["Head of Program & Education", "Iva Nurvadilah"],
  ["Head of Curriculum & Training", "Annisa Razak Khairina"],
  ["Head of Public Engagement", "Anisa Yusuf"],
  ["Head of Research & Strategic Studies", "Meta Firdayanti"],
  ["Head of STEM Education", "Husnul Amalia"],
  ["Head of Advocacy & Strategic Partnership", "Rasmianti Halim"],
  ["Head of Economic Empowerment", "Lulu Fitriani"],
  ["Head of UMKM & Community Enterprise", "Cahya Rudiana"],
  ["Head of Information, Technology & Communication", "Shella Sukma Dewi Waramena"],
  ["Head of Media & Creative", "Devina Ayatul Husna"],
];
`;

const programPage = `import Link from "next/link";
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
`;

fs.writeFileSync("lib/content.ts", contentTs);
fs.writeFileSync("app/program/page.tsx", programPage);

console.log("Program content updated.");
