import OptionsProfitCalculator from "@/components/tools/OptionsProfitCalculator";
import { faqs } from "@/constants/options-profit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Options Profit Calculator",
  description:
    "Calculate profit, loss, breakeven, and maximum risk at expiry for long calls, long puts, short calls, and short puts. See the full P&L chart across every stock price before you trade.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/options-profit-calculator",
  },
  openGraph: {
    title: "Options Profit Calculator",
    description:
      "See your exact options profit or loss at expiry — with P&L chart, breakeven price, max profit, and max loss.",
    url: "https://wealthifyx.com/tools/options-profit-calculator",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://wealthifyx.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tools",
                item: "https://wealthifyx.com/tools",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Options Profit Calculator",
                item: "https://wealthifyx.com/tools/options-profit-calculator",
              },
            ],
          }),
        }}
      />
      <OptionsProfitCalculator />
    </>
  );
}