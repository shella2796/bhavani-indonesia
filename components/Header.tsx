"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/">
          <Image src="/bhavani-logo.png" alt="" width={48} height={36} priority />
          <span>Bhavani Indonesia<small>Diversity · Inclusivity · Growth</small></span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka menu">Menu</button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link href="/#tentang">Tentang</Link>
          <Link href="/program">Program</Link>
          <Link href="/artikel">Artikel</Link>
          <Link className="button" href="/terlibat">Terlibat Bersama</Link>
        </nav>
      </div>
    </header>
  );
}
