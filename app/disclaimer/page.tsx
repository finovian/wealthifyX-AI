import { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer — WealthifyX',
  description: 'Financial and investment disclaimer for WealthifyX calculators and tools.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-[var(--bg-subtle)] border-b-[1px] border-b-[var(--border)] p-[80px_48px_48px] max-[767px]:p-[60px_20px_32px]">
        <div className="max-w-[800px] m-[0_auto]">
          <span className="section-eyebrow mb-[16px]">{'// LEGAL'}</span>
          <h1 className="font-sans font-[400] tracking-[-1.5px] leading-[1.1] text-[var(--text-primary)] m-[0_0_12px_0] text-[48px] max-[767px]:text-[32px]">Legal Disclaimer</h1>
          <p className="font-sans text-[14px] text-[var(--text-faint)]">Please read this information carefully.</p>
        </div>
      </section>

      <section className="p-[64px_48px] max-[767px]:p-[40px_20px] bg-[var(--bg-base)]">
        <div className="max-w-[800px] m-[0_auto] flex flex-col gap-[40px]">
          
          <div className="flex gap-[16px] p-[24px] bg-[var(--accent-bg)] border-[1px] border-[var(--accent-border)] rounded-[16px]">
             <AlertTriangle size={24} className="text-[var(--accent)] shrink-0" />
             <div className="flex flex-col gap-[8px]">
                <h2 className="font-ubuntu text-[16px] font-[700] text-[var(--text-primary)] uppercase tracking-[1px]">Not Financial Advice</h2>
                <p className="font-sans text-[15px] text-[var(--text-primary)] m-[0] leading-[1.6]">
                   WealthifyX is an educational resource. We do not provide personalized financial, investment, legal, or tax advice. 
                   The tools on this site are designed to help you model scenarios, not to tell you what to do with your money.
                </p>
             </div>
          </div>

          <div className="font-sans text-[16px] text-[var(--text-muted)] leading-[1.8] flex flex-col gap-[32px]">
             <div className="flex flex-col gap-[12px]">
                <h3 className="text-[20px] font-[600] text-[var(--text-primary)]">Investment Risk</h3>
                <p>
                   Investing involves risk, including the possible loss of principal. Past performance is not indicative 
                   of future results. Any projections provided by our tools are hypothetical and do not reflect 
                   actual investment results.
                </p>
             </div>

             <div className="flex flex-col gap-[12px]">
                <h3 className="text-[20px] font-[600] text-[var(--text-primary)]">No Fiduciary Relationship</h3>
                <p>
                   Your use of the Website does not create a fiduciary or advisor-client relationship between you 
                   and WealthifyX. All information is provided on an &quot;as-is&quot; basis.
                </p>
             </div>

             <div className="flex flex-col gap-[12px]">
                <h3 className="text-[20px] font-[600] text-[var(--text-primary)]">Affiliate Disclosure</h3>
                <p>
                   Some of the links on this website are affiliate links. This means that if you click on the link 
                   and purchase an item or open an account, WealthifyX may receive an affiliate commission. 
                   This helps us keep our tools free for everyone. We only recommend services we believe 
                   provide value to our users.
                </p>
             </div>

             <div className="flex flex-col gap-[12px]">
                <h3 className="text-[20px] font-[600] text-[var(--text-primary)]">Seek Professional Advice</h3>
                <p>
                   We strongly recommend that you consult with a qualified financial advisor, tax professional, 
                   or legal counsel before making any significant financial decisions or implementing any 
                   investment strategy discussed or modeled on this Website.
                </p>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
}
