"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const links = [
  ["/tentang", "Tentang"],
  ["/program", "Program"],
  ["/artikel", "Artikel"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/" aria-label="Bhavani Indonesia - Beranda">
          <Image src="/bhavani-logo.png" alt="" width={58} height={40} priority />
          <span>Bhavani Indonesia<small>Diversity · Inclusivity · Growth</small></span>
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span>{open ? "Tutup" : "Menu"}</span>
        </button>
        <nav id="main-navigation" className={open ? "nav-links open" : "nav-links"} aria-label="Navigasi utama">
          {links.map(([href, label]) => (
            <Link className={pathname === href ? "active" : ""} key={href} href={href}>{label}</Link>
          ))}
          <Link className="button button-small" href="/terlibat">Berkolaborasi</Link>
        </nav>
      </div>
    </header>
  );
}
