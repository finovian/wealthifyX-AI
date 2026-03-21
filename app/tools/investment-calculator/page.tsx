import type { Metadata } from "next";


import InvestmentCalculator from "@/components/tools/InvestmentCalculator";
import { faqs } from "@/constants/investment-calculator";

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

    const title = `${formatted} projected investment — Investment Calculator | WealthifyX`;
    const description = `See how ${formatted} in future wealth was projected using the WealthifyX Investment Calculator. Try it with your own numbers.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: "https://wealthifyx.com/tools/investment-calculator",
        type: "website",
      },
    };
  }

  return {
    title: "Investment Calculator 2024 — Project Portfolio Growth | WealthifyX",
    description:
      "Free investment calculator. Project future portfolio value with compound returns, monthly contributions, and custom time horizons. Supports daily, monthly, quarterly, and annual compounding. No sign-up, no data stored.",
    alternates: {
      canonical: "https://wealthifyx.com/tools/investment-calculator",
    },
    openGraph: {
      title: "Investment Calculator 2024 — Project Portfolio Growth | WealthifyX",
      description:
        "Calculate future value of any investment with compound growth, monthly contributions, and custom return rates. Free, no account.",
      url: "https://wealthifyx.com/tools/investment-calculator",
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
              { "@type": "ListItem", position: 3, name: "Investment Calculator", item: "https://wealthifyx.com/tools/investment-calculator" },
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
            "name": "Investment Calculator",
            "url": "https://wealthifyx.com/tools/investment-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free investment calculator. Projects future portfolio value using compound growth formula with monthly contributions, custom return rates, and multiple compounding frequencies."
          }),
        }}
      />
      <InvestmentCalculator initialValues={params} />
    </>
  );
}