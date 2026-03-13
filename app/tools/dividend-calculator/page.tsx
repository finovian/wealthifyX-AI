import DividendCalculator from "@/components/tools/DividendCalculator";
import { faqs } from "@/constants/dividend";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dividend Calculator — DRIP Growth & Income Estimator",
  description:
    "Calculate dividend income, DRIP compounding, and portfolio growth for any dividend stock or ETF. See annual income, total dividends, yield on cost, and final portfolio value over any time horizon. Free, no sign-up.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/dividend-calculator",
  },
  openGraph: {
    title: "Dividend Calculator — DRIP Growth & Income Estimator",
    description:
      "Project dividend income and DRIP compounding growth over time. See yield on cost, total dividends, and portfolio value at any horizon.",
    url: "https://wealthifyx.com/tools/dividend-calculator",
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
              { "@type": "ListItem", position: 1, name: "Home",  item: "https://wealthifyx.com" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://wealthifyx.com/tools" },
              {
                "@type": "ListItem", position: 3,
                name: "Dividend Calculator",
                item: "https://wealthifyx.com/tools/dividend-calculator",
              },
            ],
          }),
        }}
      />
      <DividendCalculator />
    </>
  );
}