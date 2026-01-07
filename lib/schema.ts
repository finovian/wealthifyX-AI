// lib/schema.ts

const BASE_URL = "https://wealthifyx.com";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: BASE_URL,
    name: "Wealthifyx",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

export function generateFaqSchema(faqs: FaqItem[]) {
  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export type FinancialProduct = {
  name: string;
  description: string;
  url: string;
};

export function generateFinancialProductSchema(product: FinancialProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: product.name,
    description: product.description,
    url: `${BASE_URL}${product.url}`,
    brand: {
      "@type": "Brand",
      name: "Wealthifyx",
    },
  };
}
