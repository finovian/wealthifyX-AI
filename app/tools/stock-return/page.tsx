import type { Metadata } from "next";
import StockReturnCalculatorPage from "@/screens/StockReturnCalculatorPage";
import {
  generateBreadcrumbSchema,
  generateFaqSchema,
  generateFinancialProductSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "CAGR Calculator for Stocks & Mutual Funds | Wealthifyx",
  description:
    "Calculate the annualized return (CAGR) of your stock market and mutual fund investments. Evaluate your portfolio's performance with our free CAGR calculator.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/stock-return",
  },
};

export default function StockReturnPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Stock Return Calculator", url: "/tools/stock-return" },
  ];

  const faqs = [
    {
      question: "What is CAGR?",
      answer:
        "CAGR stands for Compound Annual Growth Rate. It is the measure of an investment's annual growth rate over a specified period of time. CAGR is one of the most accurate ways to calculate and determine an investor's return.",
    },
    {
      question: "How to calculate stock returns?",
      answer:
        "To calculate stock returns, you need the initial investment value, the final investment value, and the investment duration. Our stock return calculator uses these inputs to compute the CAGR and the absolute and total returns on your investment.",
    },
    {
      question: "Is CAGR the same as annual return?",
      answer:
        "No, CAGR is not the same as a simple annual return. Annual return can fluctuate year by year, while CAGR provides a smoothed-out average annual return over a given period. It provides a more accurate picture of an investment's performance.",
    },
    {
      question: "Why is CAGR important for investors?",
      answer:
        "CAGR is important because it allows investors to compare the performance of different investments over the same time horizon. It provides a single, easy-to-understand figure that represents the annual growth of an investment.",
    },
  ];

  const financialProduct = {
    name: "Stock Return / CAGR Calculator",
    description:
      "A free online tool to calculate the Compound Annual Growth Rate (CAGR) and total returns of your stock investments. Evaluate your portfolio's performance with ease.",
    url: "/tools/stock-return",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFinancialProductSchema(financialProduct)
          ),
        }}
      />
      <StockReturnCalculatorPage />
    </div>
  );
}
