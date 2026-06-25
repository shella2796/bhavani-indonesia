import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {default: "Bhavani Indonesia", template: "%s | Bhavani Indonesia"},
  description: "Organisasi pemberdayaan perempuan melalui pendidikan, penguatan kapasitas, kolaborasi, riset, dan advokasi.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="id"><body>{children}</body></html>;
}
