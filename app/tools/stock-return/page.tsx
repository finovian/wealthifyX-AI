import type { Metadata } from "next";
import StockReturnCalculatorPage from "@/screens/StockReturnCalculatorPage";

export const metadata: Metadata = {
  title: "CAGR Calculator for Stocks & Mutual Funds | Wealthifyx",
  description:
    "Calculate the annualized return (CAGR) of your stock market and mutual fund investments. Evaluate your portfolio's performance with our free CAGR calculator.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/stock-return",
  },
};

export default function StockReturnPage() {
  return (
    <div>
      <StockReturnCalculatorPage />
    </div>
  );
}
