import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
        <div className="min-h-screen">
          <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:px-8">
            {children}
          </main>
          <footer className="mx-auto w-full max-w-6xl px-4 pb-8 text-sm text-zinc-600 sm:px-6 lg:px-8">
            Building thoughtful interfaces for enterprise products and digital experiences.
          </footer>
        </div>
      </body>
    </html>
  );
}
