import type {Metadata} from "next";
import {Fraunces, Outfit} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {env} from "@/lib/env";
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
    "Subscribe for Bulgaria Resorts launch updates, early access, and help choosing the right resort for your trip.",
  openGraph: {
    title: "Bulgaria Resorts | Early Access",
    description:
      "Subscribe for launch updates and priority access to smarter Bulgaria resort discovery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bulgaria Resorts",
    url: env.siteUrl,
    email: env.contactEmail,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bulgaria Resorts",
    url: env.siteUrl,
    publisher: {
      "@type": "Organization",
      name: "Bulgaria Resorts",
      url: env.siteUrl,
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full`}>
      <body className="page-bg min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
