import ToolsPage from "@/components/tools/ToolsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Calculators — All Tools",
  description:
    "Free finance calculators for investors. Compound interest, investment returns, Roth IRA, 401k, savings goal, dividend, capital gains, and more. No sign-up required.",
  alternates: {
    canonical: "https://wealthifyx.com/tools",
  },
  openGraph: {
    title: "Finance Calculators — All Tools",
    description:
      "Free finance calculators for investors. No accounts, no data stored.",
    url: "https://wealthifyx.com/tools",
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
            ],
          }),
        }}
      />
      <ToolsPage />
    </>
  );
}
