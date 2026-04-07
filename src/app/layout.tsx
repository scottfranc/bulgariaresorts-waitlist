import type {Metadata} from "next";
import {Fraunces, Outfit} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bulgaria Resorts | Early Access",
  description:
    "Join the Bulgaria Resorts waitlist for launch updates, early access, and help choosing the right resort for your trip.",
  openGraph: {
    title: "Bulgaria Resorts | Early Access",
    description:
      "Join the waitlist for launch updates and priority access to smarter Bulgaria resort discovery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full`}>
      <body className="page-bg min-h-full antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
