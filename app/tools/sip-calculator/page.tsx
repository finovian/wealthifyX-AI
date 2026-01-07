import type { Metadata } from "next";
import SipCalculatorPage from "@/screens/SipCalculatorPage";

export const metadata: Metadata = {
  title: "SIP Calculator for Mutual Funds - India | Wealthifyx",
  description:
    "Estimate your SIP returns and the future value of your mutual fund investments in India. Our easy-to-use SIP calculator helps you plan your investment goals.",
  alternates: {
    canonical: "https://wealthifyx.com/tools/sip-calculator",
  },
};

const page = () => {
  return (
    <div>
      <SipCalculatorPage />
    </div>
  );
};

export default page;
