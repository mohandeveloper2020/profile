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
        <div className="relative min-h-screen">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 blur-[10px]"
            style={{
              background:
                "radial-gradient(circle at 12% 8%, rgb(255 200 120 / 35%) 0%, transparent 34%), radial-gradient(circle at 88% 18%, rgb(86 170 255 / 24%) 0%, transparent 38%), radial-gradient(circle at 42% 85%, rgb(64 224 173 / 14%) 0%, transparent 42%), linear-gradient(180deg, rgb(255 255 255 / 30%), transparent 45%)",
            }}
          />
          <main className="mx-auto w-[min(1120px,calc(100%-2rem))] px-0 pb-20 pt-16 max-[720px]:w-[min(1120px,calc(100%-1rem))] max-[720px]:pb-12 max-[720px]:pt-6">
            {children}
          </main>
          <footer className="mx-auto w-[min(1120px,calc(100%-2rem))] px-0 pb-10 text-[0.9rem] text-[rgb(19_42_19_/_58%)] max-[720px]:w-[min(1120px,calc(100%-1rem))]">
            Building thoughtful interfaces for enterprise products and digital experiences.
          </footer>
        </div>
      </body>
    </html>
  );
}
