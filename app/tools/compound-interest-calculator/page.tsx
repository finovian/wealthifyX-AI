import CompoundInterestCalculator from "@/components/tools/Compoundinterestcalculator";
import { faqs } from "@/constants/compound-interest";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Compound Interest Calculator",
  description: "Calculate how your money grows with compound interest. Supports monthly contributions, daily/monthly/quarterly/annual compounding. Free, no sign-up.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/compound-interest-calculator",
  },
  openGraph: {
    title: "Compound Interest Calculator",
    description: "See exactly how compound interest grows your money over time.",
    url: "https://wealthifyx.com/tools/compound-interest-calculator",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://wealthifyx.com" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://wealthifyx.com/tools" },
              { "@type": "ListItem", position: 3, name: "Compound Interest Calculator", item: "https://wealthifyx.com/tools/compound-interest-calculator" },
            ],
          }),
        }}
      />
      <CompoundInterestCalculator />
    </>
  );
}