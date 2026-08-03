import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dennisbui.dev"),
  title: "Dennis (Duy Bui) — Software Engineer",
  description:
    "Personal portfolio of Dennis (Duy Bui) — Software Engineer building things for the web.",
  keywords: [
    "Software Engineer",
    "Vietnam",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    type: "website",
    url: "https://dennisbui.dev",
    title: "Dennis (Duy Bui) — Software Engineer",
    description:
      "Personal portfolio of Dennis (Duy Bui) — Software Engineer building things for the web.",
    siteName: "Dennis (Duy Bui)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis (Duy Bui) — Software Engineer",
    description:
      "Personal portfolio of Dennis (Duy Bui) — Software Engineer building things for the web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
