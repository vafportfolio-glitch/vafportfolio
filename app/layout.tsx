import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VA Force - AI Powered Business Automation & CRM Solutions",
  description: "VA Force helps businesses scale faster with powerful automation, AI systems, and custom software integrations. From GoHighLevel bots to advanced AI workflows.",
  icons: {
    icon: "https://assets.cdn.filesafe.space/XgKDe6KOSdIG9IWlQxy3/media/696903167a8acbba4ceb05b8.png",
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
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-black" style={{ backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120,119,198,0.15), transparent)' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
