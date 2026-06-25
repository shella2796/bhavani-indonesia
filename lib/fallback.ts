import type {Article, Program, Settings} from "./types";

export const fallbackSettings: Settings = {
  organizationName: "Bhavani Indonesia",
  tagline: "Membangun generasi perempuan yang berdaya, kritis, dan inklusif.",
  description: "Bhavani adalah organisasi pemberdayaan perempuan yang hadir sebagai ruang kolaboratif untuk membangun generasi perempuan yang berdaya, kritis, inklusif, dan memiliki kapasitas kepemimpinan yang kuat.",
  email: "bhavani.official5@gmail.com",
  instagram: "bhavani.id",
  vision: "Menjadi organisasi pemberdayaan perempuan yang tumbuh secara berkelanjutan, meningkatkan kualitas hidup perempuan melalui pendidikan, pelatihan, dan penguatan kapasitas, serta menciptakan lingkungan yang mendukung kesetaraan, pemberdayaan sosial, dan inklusivitas.",
  heroTitle: "Perempuan sebagai penggerak perubahan.",
  heroText: "Bhavani memperkuat kapasitas perempuan melalui pendidikan, advokasi, riset, ruang aman, dan kolaborasi lintas sektor.",
};

export function withFallbackSettings(settings: Settings): Settings {
  const populated = Object.fromEntries(
    Object.entries(settings).filter(([, value]) => value !== null && value !== undefined && value !== ""),
  );
  return {...fallbackSettings, ...populated};
}

export const fallbackPrograms: Program[] = [
  {_id: "school", slug: "vanbucha-goes-to-school", pillar: "Pemberdayaan Individu", title: "Vanbucha Goes to School", shortDescription: "Edukasi kepemimpinan, karakter, kesadaran sosial, dan literasi digital bagi generasi muda.", highlights: ["SMAN 1 Kota Serang", "SMAN 1 Baros", "Kepemimpinan remaja", "Kesadaran gender"], isFeatured: true},
  {_id: "session", slug: "bhavani-session", pillar: "Pemberdayaan Individu", title: "Bhavani Session", shortDescription: "Diskusi digital tentang perempuan, kesehatan mental, pendidikan, HAM, dan pengembangan kapasitas.", highlights: ["Kesehatan mental", "Literasi digital", "Kesetaraan gender", "Kepemimpinan muda"]},
  {_id: "bloom", slug: "bhavani-bloom-festival", pillar: "Kolaborasi & Jejaring", title: "Bhavani Bloom Festival", shortDescription: "Festival kolaboratif untuk memperkuat kepemimpinan perempuan muda dan jejaring komunitas.", highlights: ["Diskusi publik", "Sesi berbagi", "Networking", "Ruang aman"]},
  {_id: "connect", slug: "bhavani-connect", pillar: "Kolaborasi & Jejaring", title: "Bhavani Connect", shortDescription: "Dialog strategis bersama tokoh, akademisi, praktisi, dan pengambil kebijakan.", highlights: ["Kebijakan publik", "Kepemimpinan", "Lintas sektor", "Generasi muda"]},
  {_id: "research", slug: "riset-femisida", pillar: "Advokasi Berbasis Data", title: "Riset Femisida", shortDescription: "Kajian berbasis data untuk publikasi edukatif dan rekomendasi kebijakan.", highlights: ["Kajian strategis", "Publikasi edukatif", "Rekomendasi kebijakan", "Literasi publik"]},
  {_id: "femicide", slug: "kajian-bicara-femisida", pillar: "Advokasi Berbasis Data", title: "Kajian Bicara Femisida", shortDescription: "Forum publik tentang kekerasan berbasis gender, hukum, HAM, dan perlindungan perempuan.", highlights: ["Kekerasan berbasis gender", "Perlindungan perempuan", "HAM", "Advokasi"]},
];

export const fallbackArticles: Article[] = [
  {_id: "kartini", slug: "membaca-ulang-kartini", category: "Perspektif", publishedAt: "2026-04-21", title: "Membaca Ulang Kartini: Pendidikan, Kebebasan, dan Hari Ini", excerpt: "Membawa gagasan Kartini ke dalam percakapan tentang pilihan, akses, dan kebebasan berpikir perempuan hari ini."},
  {_id: "roles", slug: "peran-ganda-perempuan", category: "Ruang Perempuan", publishedAt: "2026-04-18", title: "Peran Ganda Bukan Sekadar Soal Membagi Waktu", excerpt: "Melihat beban mental, ekspektasi sosial, dan kebutuhan akan pembagian peran yang lebih adil."},
  {_id: "equality", slug: "relasi-yang-setara", category: "Inklusivitas", publishedAt: "2026-04-14", title: "Relasi Setara Dimulai dari Kesediaan untuk Mendengar", excerpt: "Kesetaraan tumbuh ketika pengalaman perempuan dipercaya dan tanggung jawab dibicarakan bersama."},
];
