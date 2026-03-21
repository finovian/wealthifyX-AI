import CompoundInterestCalculator from "@/components/tools/CompoundInterestCalculator";
import { faqs } from "@/constants/compound-interest";
import type { Metadata } from "next";


interface PageProps {
  searchParams: Promise<{
    principal?: string;
    rate?: string;
    years?: string;
    frequency?: string;
    contribution?: string;
    result?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const result = params.result;

  if (result) {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(result));

    const title = `${formatted} projected balance — Compound Interest Calculator | WealthifyX`;
    const description = `See how ${formatted} in future savings was projected using the WealthifyX Compound Interest Calculator. Try it with your own numbers.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: "https://wealthifyx.com/tools/compound-interest-calculator",
        type: "website",
      },
    };
  }

  return {
    title: "Compound Interest Calculator 2024 — See How Money Grows | WealthifyX",
    description:
      "Free compound interest calculator. See exactly how your money grows with daily, monthly, quarterly, or annual compounding. Supports monthly contributions, any time horizon, and precise floating-point math. No sign-up, no data stored.",
    alternates: {
      canonical: "https://wealthifyx.com/tools/compound-interest-calculator",
    },
    openGraph: {
      title: "Compound Interest Calculator 2024 — See How Money Grows | WealthifyX",
      description:
        "Calculate compound interest with monthly contributions. Supports daily, monthly, quarterly, and annual compounding with precise math.",
      url: "https://wealthifyx.com/tools/compound-interest-calculator",
      type: "website",
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

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
              {
                "@type": "ListItem",
                position: 3,
                name: "Compound Interest Calculator",
                item: "https://wealthifyx.com/tools/compound-interest-calculator",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Compound Interest Calculator",
            "url": "https://wealthifyx.com/tools/compound-interest-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free compound interest calculator with monthly contribution support. Calculates daily, monthly, quarterly, and annual compounding with full floating-point precision."
          }),
        }}
      />
      <CompoundInterestCalculator initialValues={params} />
    </>
  );
}