'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Home, Calculator } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-[80px_24px] bg-[var(--bg-base)]">
      <div className="max-w-[600px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon/Visual */}
          <div className="flex justify-center mb-[32px]">
            <div className="w-[80px] h-[80px] rounded-[24px] bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] relative">
              <Search size={32} />
              <motion.span 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent)] rounded-full border-2 border-[var(--bg-base)]"
              />
            </div>
          </div>

          <span className="section-eyebrow mb-[16px] block">{'// 404 ERROR'}</span>
          <h1 className="section-heading mb-[20px] max-md:text-[32px]">
            Page not found.
          </h1>
          <p className="section-subtext mb-[40px] max-w-[440px] m-[0_auto]">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px]">
            <Link 
              href="/"
              className="btn-primary w-full sm:w-auto h-[48px] px-[28px] flex items-center justify-center gap-[8px] no-underline"
            >
              <Home size={16} /> Back to Home
            </Link>
            <Link 
              href="/tools"
              className="btn-ghost w-full sm:w-auto h-[48px] px-[28px] flex items-center justify-center gap-[8px] no-underline border border-[var(--border)]"
            >
              <Calculator size={16} /> Browse Tools <ArrowRight size={16} />
            </Link>
          </div>

          {/* Quick Links / Helper */}
          <div className="mt-[64px] pt-[32px] border-t border-[var(--border)] grid grid-cols-2 gap-[24px]">
            <div className="text-left">
              <h3 className="font-ubuntu text-[12px] font-[500] text-[var(--text-secondary)] uppercase tracking-[1px] mb-[8px]">Popular Tools</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-[6px]">
                <li><Link href="/tools/compound-interest-calculator" className="font-sans text-[14px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Compound Interest</Link></li>
                <li><Link href="/tools/investment-calculator" className="font-sans text-[14px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Investment Calc</Link></li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-ubuntu text-[12px] font-[500] text-[var(--text-secondary)] uppercase tracking-[1px] mb-[8px]">Support</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-[6px]">
                <li><Link href="/contact" className="font-sans text-[14px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Contact Us</Link></li>
                <li><Link href="/about" className="font-sans text-[14px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">Our Methodology</Link></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
