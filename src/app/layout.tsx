import type {Metadata} from "next";
import {DM_Sans, Playfair_Display} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bulgaria Resorts | Early Access",
  description:
    "Join the Bulgaria Resorts waitlist to get launch updates, early access, and expert help choosing the right resort for your trip.",
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
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
