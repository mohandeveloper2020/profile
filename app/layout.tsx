import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohan M | Lead Consultant - UI/UX",
  description:
    "Portfolio site for Mohan M featuring frontend development, UI/UX expertise, career highlights, and selected project work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bebasNeue.variable}`}>
      <body>
        <div className={styles.shell}>
          <div className={styles.backgroundGlow} aria-hidden="true" />
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            Building thoughtful interfaces for enterprise products and digital experiences.
          </footer>
        </div>
      </body>
    </html>
  );
}
