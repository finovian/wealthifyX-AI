'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'Are these calculators really free?',
        a: 'Yes. Always. WealthifyX is funded by contextual advertising and affiliate partnerships — never by charging users.',
    },
    {
        q: 'How accurate are the calculations?',
        a: 'All formulas follow standard financial mathematics. We avoid intermediate rounding that causes drift in simpler calculators.',
    },
    {
        q: 'Do you store my financial data?',
        a: 'No. Every calculation runs entirely in your browser using JavaScript. Nothing is sent to any server. We have no user database.',
    },
    {
        q: 'How often are new tools added?',
        a: 'We ship 1–2 new tools monthly. Subscribe to the email list to get notified immediately.',
    },
    {
        q: 'Does this work on mobile?',
        a: 'Yes. Every tool is fully responsive and tested on real mobile devices at multiple screen sizes.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="section-wrapper flex justify-center"
        >
            <div className="w-[100%] max-w-[1100px]">
                {/* Section header */}
                <div className="section-header mb-[32px] max-[767px]:mb-[24px]">
                    <span className="section-eyebrow">{'// FAQ'}</span>
                    <h2 className="section-heading mt-[8px] text-[clamp(28px,5vw,40px)]">Common questions.</h2>
                </div>

                {/* Accordion */}
                <div className="border-t-[1px] border-t-[var(--border)]">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b-[1px] border-b-[var(--border)] transition-[background] duration-[0.15s] ease-[ease]"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="group w-[100%] flex justify-between items-center gap-[16px] max-[767px]:gap-[12px] p-[18px_0] max-[767px]:p-[16px_0] xl:p-[20px_0] bg-transparent border-none cursor-pointer text-left min-h-[56px] max-[767px]:min-h-[52px]"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-sans font-[500] text-[var(--text-primary)] text-[15px] max-[767px]:text-[14px] xl:text-[16px] leading-[1.4] flex-[1] min-w-[0] group-hover:text-[var(--accent)] transition-colors duration-[0.15s]">
                                        {faq.q}
                                    </span>
                                    <span
                                        className={`shrink-0 flex items-center justify-center w-[32px] h-[32px] max-[767px]:w-[28px] max-[767px]:h-[28px] rounded-[6px] border-[1px] transition-[transform,color,background-color,border-color] duration-[0.2s] ease-[ease] ${
                                            isOpen
                                                ? 'text-[var(--accent)] bg-[var(--accent-bg)] border-[var(--accent-border)]'
                                                : 'text-[var(--text-muted)] bg-[var(--bg-subtle)] border-[var(--border)]'
                                        }`}
                                        style={{
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        }}
                                    >
                                        <ChevronDown size={18} />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p className="font-sans text-[var(--text-muted)] text-[14px] max-[767px]:text-[13px] xl:text-[15px] leading-[1.7] max-[767px]:leading-[1.65] p-[0_48px_18px_0] max-[767px]:pr-[40px] max-[767px]:pb-[14px] xl:pb-[20px] m-[0]">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
