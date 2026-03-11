import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — WealthifyX',
  description: 'Read the terms and conditions for using the WealthifyX website and financial tools.',
};

export default function TermsPage() {
  const lastUpdated = 'March 11, 2026';

  return (
    <main className="min-h-screen">
      <section className="bg-[var(--bg-subtle)] border-b-[1px] border-b-[var(--border)] p-[80px_48px_48px] max-[767px]:p-[60px_20px_32px]">
        <div className="max-w-[800px] m-[0_auto]">
          <span className="section-eyebrow mb-[16px]">{'// LEGAL'}</span>
          <h1 className="font-sans font-[400] tracking-[-1.5px] leading-[1.1] text-[var(--text-primary)] m-[0_0_12px_0] text-[48px] max-[767px]:text-[32px]">Terms of Service</h1>
          <p className="font-sans text-[14px] text-[var(--text-faint)]">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="p-[64px_48px] max-[767px]:p-[40px_20px] bg-[var(--bg-base)]">
        <div className="max-w-[800px] m-[0_auto] font-sans text-[16px] text-[var(--text-muted)] leading-[1.8] flex flex-col gap-[32px]">
          
          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">1. Acceptance of Terms</h2>
             <p>
                By accessing and using WealthifyX (&quot;the Website&quot;), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our tools.
             </p>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">2. Use of Tools</h2>
             <p>
                The financial calculators provided on this Website are for educational and informational purposes only. 
                They are not intended to provide professional financial, investment, or tax advice. 
                You should consult with a qualified professional before making any financial decisions.
             </p>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">3. Accuracy of Results</h2>
             <p>
                While we strive for 100% mathematical accuracy, WealthifyX does not guarantee the accuracy, 
                completeness, or reliability of any calculation results. Results are projections based on 
                user input and mathematical formulas, not guarantees of future performance.
             </p>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">4. Intellectual Property</h2>
             <p>
                The design, branding, and proprietary code of WealthifyX are protected by intellectual 
                property laws. You may not reproduce, distribute, or create derivative works from the 
                Website without our express written permission.
             </p>
          </div>

          <div className="flex flex-col gap-[16px]">
             <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">5. Limitation of Liability</h2>
             <p>
                In no event shall WealthifyX or its owners be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use the materials on the Website.
             </p>
          </div>

        </div>
      </section>
    </main>
  );
}
