import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — WealthifyX',
  description: 'Our privacy-first approach means we don’t store your data. Read our full policy here.',
};

export default function PrivacyPage() {
  const lastUpdated = 'March 11, 2026';

  return (
    <main className="min-h-screen">
      <section className="bg-[var(--bg-subtle)] border-b-[1px] border-b-[var(--border)] p-[80px_48px_48px] max-[767px]:p-[60px_20px_32px]">
        <div className="max-w-[800px] m-[0_auto]">
          <span className="section-eyebrow mb-[16px]">{'// LEGAL'}</span>
          <h1 className="font-sans font-[400] tracking-[-1.5px] leading-[1.1] text-[var(--text-primary)] m-[0_0_12px_0] text-[48px] max-[767px]:text-[32px]">Privacy Policy</h1>
          <p className="font-sans text-[14px] text-[var(--text-faint)]">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="p-[64px_48px] max-[767px]:p-[40px_20px] bg-[var(--bg-base)]">
        <div className="max-w-[800px] m-[0_auto] font-sans text-[16px] text-[var(--text-muted)] leading-[1.8] flex flex-col gap-[32px]">
          
          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">1. Our Privacy-First Commitment</h2>
             <p>
                WealthifyX was built on the principle that your financial data is your business. Unlike most finance sites, 
                we do not require you to create an account, provide an email address, or link your bank accounts to use our tools.
             </p>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">2. Data Processing (Client-Side)</h2>
             <p>
                When you enter numbers into our calculators, the math is performed locally on your device via JavaScript. 
                <strong className="text-[var(--text-primary)]"> No financial data entered into our calculators is ever transmitted to or stored on our servers.</strong> 
                Once you close your browser tab, that data is cleared from your device&apos;s memory.
             </p>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">3. Information We Collect</h2>
             <p>While we don&apos;t collect your financial data, we do collect limited technical information:</p>
             <ul className="list-disc pl-[24px] flex flex-col gap-[8px]">
                <li><strong className="text-[var(--text-primary)]">Analytics:</strong> We use privacy-focused analytics to see which tools are popular. This data is anonymized and cannot be used to identify you.</li>
                <li><strong className="text-[var(--text-primary)]">Cookies:</strong> We use essential cookies to remember your theme preference (Light/Dark mode) and for security purposes.</li>
                <li><strong className="text-[var(--text-primary)]">Email:</strong> If you voluntarily subscribe to our newsletter, we store your email address solely for that purpose.</li>
             </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">4. Third-Party Links</h2>
             <p>
                Our website contains links to third-party websites (such as brokers). We are not responsible for the privacy practices of these sites. 
                We encourage you to read their privacy policies when you leave our site.
             </p>
          </div>

          <div className="p-[24px] bg-[var(--bg-subtle)] border-[1px] border-[var(--border)] rounded-[12px]">
             <p className="m-[0] text-[14px]">
                Questions about our privacy practices? Email us at <a href="mailto:privacy@wealthifyx.com" className="text-[var(--accent)] font-[500]">privacy@wealthifyx.com</a>.
             </p>
          </div>

        </div>
      </section>
    </main>
  );
}
