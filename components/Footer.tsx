import Image from "next/image";
import Link from "next/link";
import type {Settings} from "@/lib/types";

export function Footer({settings}: {settings: Settings}) {
  const instagram = settings.instagram || "bhavani.id";
  const email = settings.email || "bhavani.official5@gmail.com";

  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-intro">
          <div className="brand footer-brand">
            <Image src="/bhavani-logo.png" alt="" width={72} height={48}/>
            <span>Bhavani Indonesia</span>
          </div>
          <p>{settings.tagline || "Membangun generasi perempuan yang berdaya, kritis, dan inklusif."}</p>
        </div>
        <div className="footer-links">
          <strong>Jelajahi</strong>
          <Link href="/tentang">Tentang</Link>
          <Link href="/program">Program</Link>
          <Link href="/artikel">Artikel</Link>
          <Link href="/terlibat">Kolaborasi</Link>
        </div>
        <div className="footer-links">
          <strong>Terhubung</strong>
          <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer">@{instagram}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="shell copyright">
        <span>© 2026 Bhavani Indonesia</span>
        <span>Pendidikan · Pemberdayaan · Inklusivitas</span>
      </div>
    </footer>
  );
}
