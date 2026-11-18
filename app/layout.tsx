import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import AgeGate from "@/components/AgeGate";

export const metadata: Metadata = {
  title: { default: "Atherley Ammunition", template: "%s | Atherley Ammunition" },
  description: "Dependable ammunition for the range and the field.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AgeGate />
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              Atherley <span>Ammunition</span>
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
            <span className="logo">Atherley Ammunition</span>
            <div>Quality you can count on.</div>
            <p className="legal">
              Sales are restricted to customers of legal age with the required licences for their
              jurisdiction. Replace this notice with your own compliance and shipping terms.
            </p>
            <p className="legal">© {new Date().getFullYear()} Atherley Ammunition</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
