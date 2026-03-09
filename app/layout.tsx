import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Finance Calculators for Investors | WealthifyX",
  description:
    "Free, precise finance calculators for investors. CAGR, SIP, Portfolio returns, Inflation-adjusted calculations and more. No accounts. No data stored. Always free.",
  openGraph: {
    title: "WealthifyX — Free Finance Calculators",
    description:
      "Free, precise finance calculators for investors. CAGR, SIP, Portfolio returns, Inflation-adjusted calculations and more. No accounts. No data stored. Always free.",
    url: "https://wealthifyx.com/",
    siteName: "WealthifyX",
    type: "website",
  },
  alternates: {
    canonical: "https://wealthifyx.com/",
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
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
