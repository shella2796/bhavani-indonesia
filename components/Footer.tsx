import Image from "next/image";
import Link from "next/link";
import type {Settings} from "@/lib/types";

export function Footer({settings}: {settings: Settings}) {
  const instagram = settings.instagram || "bhavani.id";
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand"><Image src="/bhavani-logo.png" alt="" width={56} height={42}/><span>Bhavani Indonesia</span></div>
          <p>{settings.tagline}</p>
        </div>
        <div><strong>Jelajahi</strong><Link href="/#tentang">Tentang</Link><Link href="/program">Program</Link><Link href="/artikel">Artikel</Link></div>
        <div><strong>Terhubung</strong><a href={`https://instagram.com/${instagram}`}>@{instagram}</a><a href={`mailto:${settings.email}`}>{settings.email}</a></div>
      </div>
      <div className="shell copyright">© 2026 Bhavani Indonesia</div>
    </footer>
  );
}
