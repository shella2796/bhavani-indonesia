import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {fallbackPrograms, fallbackSettings} from "@/lib/fallback";
import type {Program, Settings} from "@/lib/types";
import {programsQuery, sanityFetch, settingsQuery} from "@/sanity/lib/queries";

export const metadata = {title: "Program"};
export default async function ProgramPage() {
  const [settings, programs] = await Promise.all([sanityFetch<Settings>(settingsQuery, fallbackSettings), sanityFetch<Program[]>(programsQuery, fallbackPrograms)]);
  return <><Header/><main><section className="page-hero"><div className="shell"><span className="eyebrow">Program</span><h1>Belajar, berdialog, lalu bergerak bersama.</h1><p>Program yang menghadirkan perspektif relevan, ruang partisipatif, dan peluang kolaborasi.</p></div></section><section className="section dark"><div className="shell program-grid">{programs.map((p,i)=><article key={p._id}><small>{String(i+1).padStart(2,"0")}</small><h3>{p.title}</h3><p>{p.shortDescription}</p></article>)}</div></section></main><Footer settings={settings}/></>;
}
