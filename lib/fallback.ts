import type {Article, Program, Settings} from "./types";

export const fallbackSettings: Settings = {
  organizationName: "Bhavani Indonesia",
  tagline: "Merangkul Diversitas. Membangun Inklusivitas. Menumbuhkan Perempuan.",
  description: "Bhavani Indonesia hadir sebagai ruang reflektif dan inklusif untuk mendengar pengalaman perempuan, memperluas perspektif, dan bertumbuh bersama.",
  email: "bhavani.official5@gmail.com",
  instagram: "bhavani.id",
  heroTitle: "Ketika perempuan bertumbuh, perubahan ikut hidup.",
  heroText: "Bhavani Indonesia membuka ruang untuk belajar, berbagi perspektif, dan membangun relasi yang lebih adil bagi setiap perempuan.",
};

export const fallbackPrograms: Program[] = [
  {_id: "live", title: "Bhavani Live Series", shortDescription: "Percakapan daring bersama akademisi, praktisi, aktivis, dan individu dengan pengalaman relevan.", isFeatured: true},
  {_id: "learn", title: "Ruang Belajar", shortDescription: "Diskusi dan materi edukatif tentang perempuan, relasi, masyarakat, dan pengembangan diri."},
  {_id: "connect", title: "Bhavani Connect", shortDescription: "Kolaborasi dengan komunitas, lembaga, dan mitra yang membawa visi sejalan."},
];

export const fallbackArticles: Article[] = [
  {_id: "kartini", slug: "membaca-ulang-kartini", category: "Perspektif", publishedAt: "2026-04-21", title: "Membaca Ulang Kartini: Pendidikan, Kebebasan, dan Hari Ini", excerpt: "Membawa gagasan Kartini ke dalam percakapan tentang pilihan, akses, dan kebebasan berpikir perempuan hari ini."},
  {_id: "roles", slug: "peran-ganda-perempuan", category: "Ruang Perempuan", publishedAt: "2026-04-18", title: "Peran Ganda Bukan Sekadar Soal Membagi Waktu", excerpt: "Melihat beban mental, ekspektasi sosial, dan kebutuhan akan pembagian peran yang lebih adil."},
  {_id: "equality", slug: "relasi-yang-setara", category: "Inklusivitas", publishedAt: "2026-04-14", title: "Relasi Setara Dimulai dari Kesediaan untuk Mendengar", excerpt: "Kesetaraan tumbuh ketika pengalaman perempuan dipercaya dan tanggung jawab dibicarakan bersama."},
];
