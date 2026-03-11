import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://wealthifyx.com"),
  title: {
    default: "WealthifyX — Free Finance Calculators",
    template: "%s | WealthifyX",
  },
  description:
    "Free, precise finance calculators for investors. CAGR, compound interest, retirement planning, and more. No accounts. No data stored. Always free.",
  openGraph: {
    siteName: "WealthifyX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* ── Site-level schemas — injected once globally ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "WealthifyX",
              url: "https://wealthifyx.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://wealthifyx.com/tools?q={query}",
                "query-input": "required name=query",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WealthifyX",
              url: "https://wealthifyx.com",
              description:
                "Free precision finance calculators built for investors.",
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}