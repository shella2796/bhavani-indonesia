import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {fallbackSettings, withFallbackSettings} from "@/lib/fallback";
import type {Settings} from "@/lib/types";
import {sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export const metadata = {title: "Terlibat Bersama"};
export default async function ContactPage() {
  const cmsSettings = await sanityFetch<Settings>(settingsQuery, fallbackSettings);
  const settings = withFallbackSettings(cmsSettings);
  return <><Header/><main><section className="page-hero"><div className="shell"><span className="eyebrow">Terlibat Bersama</span><h1>Perubahan sosial membutuhkan kerja bersama.</h1><p>Bhavani membuka ruang kolaborasi dengan sekolah, pemerintah, akademisi, komunitas, media, sektor swasta, relawan, dan masyarakat sipil.</p></div></section><section className="section"><div className="shell contact"><div><span className="eyebrow green-text">Mari Berkolaborasi</span><h2>Bawa gagasan, ruang, dan sumber daya untuk dampak yang lebih luas.</h2><p>Kami terbuka untuk program edukasi, forum publik, riset, kampanye, kemitraan komunitas, dukungan media, serta kolaborasi pemberdayaan perempuan.</p></div><div className="contact-links"><small>Email</small><a href={`mailto:${settings.email}`}>{settings.email}</a><small>Instagram</small><a href={`https://instagram.com/${settings.instagram}`} target="_blank" rel="noreferrer">@{settings.instagram}</a></div></div></section></main><Footer settings={settings}/></>;
}
