import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {default: "Bhavani Indonesia", template: "%s | Bhavani Indonesia"},
  description: "Merangkul diversitas, membangun inklusivitas, dan menumbuhkan perempuan.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="id"><body>{children}</body></html>;
}
