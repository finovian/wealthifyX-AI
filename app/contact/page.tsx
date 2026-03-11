import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact WealthifyX — Tool Requests, Bug Reports & Feedback',
  description:
    'Have a tool request, found a bug, or want to give feedback Contact the WealthifyX team. We respond to all inquiries within 24–48 hours.',
  alternates: {
    canonical: 'https://wealthifyx.com/contact',
  },
  openGraph: {
    title: 'Contact WealthifyX',
    description: 'Send us a tool request, bug report, or general feedback.',
    url: 'https://wealthifyx.com/contact',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wealthifyx.com' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://wealthifyx.com/contact' },
        ],
      })}} />
      <ContactPage />
    </>
  );
}
