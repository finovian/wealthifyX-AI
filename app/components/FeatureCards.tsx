'use client';

import { motion } from 'framer-motion';
import { LineChart, ShieldCheck, Calculator } from 'lucide-react';

const features = [
    {
        icon: LineChart,
        title: 'Visual results, not just numbers',
        body: 'Every calculation renders a chart. See your growth trajectory over time, not just a final number.',
    },
    {
        icon: ShieldCheck,
        title: 'Zero data collection',
        body: 'All math happens in your browser. Nothing is sent to our servers. No accounts, no cookies, no tracking.',
    },
    {
        icon: Calculator,
        title: 'Precision-grade math',
        body: 'No rounding drift. No simplified shortcuts. The same mathematical standards used in professional financial software.',
    },
];

export default function FeatureCards() {
    return (
        <motion.section
            id="features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="section-wrapper features-section"
            style={{ background: 'var(--bg-subtle)' }}
        >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div className="section-header">
                    <span className="section-eyebrow">{'// WHY WEALTHIFYX'}</span>
                    <h2 className="section-heading">Built different.</h2>
                    <p className="section-subtext">
                        Most finance calculators were built for accountants. These were built for investors.
                    </p>
                </div>

                <div className="feature-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
                            className="card feature-card"
                        >
                            {/* Icon — always its own element */}
                            <div className="feature-icon-box">
                                <feature.icon size={22} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                            </div>

                            {/* Title + body wrapped in a column div — THIS is the fix */}
                            <div className="feature-text-col">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-body">{feature.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .feature-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    align-items: stretch;
                }

                .feature-card {
                    padding: 32px 28px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }

                .feature-card:hover {
                    border-color: var(--accent-border);
                    box-shadow: var(--shadow-md);
                    transform: translateY(-2px);
                }

                .feature-icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: var(--accent-bg);
                    border: 1.5px solid var(--accent-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 18px;
                    flex-shrink: 0;
                }

                /* TEXT COLUMN — title and body always stack vertically inside this */
                .feature-text-col {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    min-width: 0;
                }

                .feature-title {
                    font-family: 'DM Sans', sans-serif !important;
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--text-primary);
                    line-height: 1.35;
                    margin-bottom: 10px;
                    white-space: normal;
                }

                .feature-body {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    color: var(--text-muted);
                    line-height: 1.7;
                    margin: 0;
                }

                /* Tablet: 2 columns */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .feature-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                    .feature-card {
                        padding: 28px 24px !important;
                    }
                }

                /* Mobile: row layout — icon LEFT, text-col RIGHT */
                @media (max-width: 767px) {
                    .feature-grid {
                        grid-template-columns: 1fr !important;
                        gap: 10px !important;
                    }

                    .feature-card {
                        padding: 18px 16px !important;
                        border-radius: 12px !important;
                        flex-direction: row !important;
                        align-items: flex-start !important;
                        gap: 14px !important;
                    }

                    .feature-icon-box {
                        width: 38px !important;
                        height: 38px !important;
                        border-radius: 9px !important;
                        margin-bottom: 0 !important;
                        margin-top: 2px !important;
                        flex-shrink: 0 !important;
                    }

                    /* text-col fills the rest of the row */
                    .feature-text-col {
                        flex: 1 !important;
                        min-width: 0 !important;
                    }

                    .feature-title {
                        font-size: 14px !important;
                        margin-bottom: 5px !important;
                        line-height: 1.3 !important;
                    }

                    .feature-body {
                        font-size: 13px !important;
                        line-height: 1.6 !important;
                    }

                    .feature-card:hover {
                        transform: none !important;
                        box-shadow: var(--shadow-sm) !important;
                    }
                }

                @media (min-width: 1280px) {
                    .feature-grid { gap: 24px !important; }
                    .feature-card { padding: 36px 32px !important; }
                }
            `}</style>
        </motion.section>
    );
}