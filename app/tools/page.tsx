import Link from "next/link";
import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Tools", url: "/tools" },
];

export const metadata: Metadata = {
  title: "Financial Calculators and Tools | Wealthifyx",
  description:
    "A collection of free and easy-to-use financial calculators for investment planning, including SIP and stock return calculators.",
};

const tools = [
  {
    name: "SIP Calculator",
    description: "Estimate future value of monthly investments",
    href: "/tools/sip-calculator",
  },
  {
    name: "Stock Return Calculator",
    description: "Calculate CAGR and total returns",
    href: "/tools/stock-return",
  },
];

export default function ToolsPage() {
  return (
    <section className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Finance Tools
        </h1>
        <p className="mt-2 text-gray-600">
          Simple, fast, and free calculators to help you make better
          investment decisions.
        </p>
      </header>

      <div className="divide-y divide-gray-200">
        {tools.map(tool => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block py-6 transition hover:bg-gray-50"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {tool.name}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
