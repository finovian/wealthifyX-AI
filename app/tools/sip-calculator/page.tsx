import type { Metadata } from "next";
import SipCalculatorPage from "@/screens/SipCalculatorPage";
import { generateBreadcrumbSchema, generateFaqSchema, generateFinancialProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SIP Calculator for Mutual Funds - India | Wealthifyx",
  description:
    "Estimate your SIP returns and the future value of your mutual fund investments in India. Our easy-to-use SIP calculator helps you plan your investment goals.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/sip-calculator",
  },
};

const page = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "SIP Calculator", url: "/tools/sip-calculator" },
  ];

  const faqs = [
    {
      question: "What is a SIP?",
      answer:
        "A SIP (Systematic Investment Plan) is a method of investing in mutual funds where you invest a fixed amount of money at regular intervals (usually monthly). It helps in disciplined investing and benefits from the power of compounding and rupee cost averaging.",
    },
    {
      question: "How does this SIP return calculator work?",
      answer:
        "This calculator estimates the future value of your SIP investments using a compound interest formula. You need to provide the monthly investment amount, the expected annual rate of return, and the investment duration in years.",
    },
    {
      question: "Are the returns from a SIP guaranteed?",
      answer:
        "No, SIP returns are not guaranteed as they are linked to market performance. The returns can vary based on the performance of the mutual fund scheme you have invested in. This calculator provides an estimate based on the expected rate of return you provide.",
    },
    {
      question: "What is rupee cost averaging?",
      answer:
        "Rupee cost averaging is an investment strategy where you invest a fixed amount of money at regular intervals. When the market is down, you buy more units, and when the market is up, you buy fewer units. This averages out the cost of your investment over time and reduces the impact of market volatility.",
    },
    {
      question: "Can I use this calculator for lumpsum investments?",
      answer:
        "No, this calculator is specifically designed for Systematic Investment Plans (SIPs). For lumpsum investments, you would need a different calculator that calculates the future value of a single one-time investment.",
    },
  ];

  const financialProduct = {
    name: "SIP Calculator",
    description:
      "A free online tool to calculate the future value of your Systematic Investment Plan (SIP) investments. Estimate your returns based on your monthly investment, expected return rate, and investment tenure.",
    url: "/tools/sip-calculator",
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
      <SipCalculatorPage />
    </div>
  );
};

export default page;
