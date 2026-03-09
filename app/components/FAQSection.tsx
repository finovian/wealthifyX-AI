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
            className="section-wrapper faq-section"
        >
            <div className="faq-inner">
                {/* Section header */}
                <div className="section-header faq-header">
                    <span className="section-eyebrow">{'// FAQ'}</span>
                    <h2 className="section-heading faq-heading">Common questions.</h2>
                </div>

                {/* Accordion */}
                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="faq-trigger"
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq-question">{faq.q}</span>
                                    <span
                                        className="faq-chevron"
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
                                            <p className="faq-answer">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
                /* ── Section centering ── */
                .faq-section {
                    display: flex !important;
                    justify-content: center !important;
                }

                .faq-inner {
                    width: 100%;
                    max-width: 1100px;
                }

                /* ── Header ── */
                .faq-header {
                    margin-bottom: 32px;
                }

                .faq-heading {
                    font-size: clamp(28px, 5vw, 40px) !important;
                    margin-top: 8px !important;
                }

                /* ── FAQ list container ── */
                .faq-list {
                    border-top: 1px solid var(--border);
                }

                /* ── FAQ item ── */
                .faq-item {
                    border-bottom: 1px solid var(--border);
                    transition: background 0.15s ease;
                }

                /* ── Trigger button ── */
                .faq-trigger {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 16px;
                    padding: 18px 0;
                    background: none;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    min-height: 56px;
                }

                /* ── Question text ── */
                .faq-question {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--text-primary);
                    line-height: 1.4;
                    flex: 1;
                    min-width: 0;
                }

                /* Hover: question turns accent */
                .faq-trigger:hover .faq-question {
                    color: var(--accent);
                }

                /* ── Chevron ── */
                .faq-chevron {
                    color: var(--text-muted);
                    transition: transform 0.2s ease, color 0.15s ease;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 6px;
                    background: var(--bg-subtle);
                    border: 1px solid var(--border);
                }

                .faq-item-open .faq-chevron {
                    color: var(--accent);
                    background: var(--accent-bg);
                    border-color: var(--accent-border);
                }

                /* ── Answer text ── */
                .faq-answer {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    color: var(--text-muted);
                    line-height: 1.7;
                    padding: 0 48px 18px 0;
                    margin: 0;
                }

                /* ── Mobile ── */
                @media (max-width: 767px) {
                    .faq-header {
                        margin-bottom: 24px !important;
                    }

                    .faq-trigger {
                        padding: 16px 0 !important;
                        min-height: 52px !important;
                        gap: 12px !important;
                    }

                    .faq-question {
                        font-size: 14px !important;
                    }

                    .faq-chevron {
                        width: 28px !important;
                        height: 28px !important;
                    }

                    .faq-answer {
                        font-size: 13px !important;
                        line-height: 1.65 !important;
                        padding-right: 40px !important;
                        padding-bottom: 14px !important;
                    }
                }

                /* ── Large desktop ── */
                @media (min-width: 1280px) {
                    .faq-trigger {
                        padding: 20px 0 !important;
                    }

                    .faq-question {
                        font-size: 16px !important;
                    }

                    .faq-answer {
                        font-size: 15px !important;
                        padding-bottom: 20px !important;
                    }
                }
            `}</style>
        </motion.section>
    );
}