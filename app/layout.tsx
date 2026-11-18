import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import AgeGate from "@/components/AgeGate";

export const metadata: Metadata = {
  title: { default: "Ather Ammunition", template: "%s | Ather Ammunition" },
  description: "Canadian-made 9mm and 5.56 ammunition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AgeGate />
        <div className="topbar">Proudly Canadian made</div>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              Ather <span>Ammunition</span>
            </Link>
            <nav className="nav">
              <Link href="/products">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <span className="logo">Ather Ammunition</span>
            <div>Canadian-made 9mm and 5.56 ammunition.</div>
            <p className="legal">
              Sales are restricted to customers of legal age with the required licences for their
              jurisdiction.
            </p>
            <p className="legal">© {new Date().getFullYear()} Ather Ammunition</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
