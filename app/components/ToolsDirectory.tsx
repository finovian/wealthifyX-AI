'use client';

import { motion } from 'framer-motion';
import {
    TrendingUp,
    BarChart2,
    PlusCircle,
    ArrowUpRight,
    Percent,
    PieChart,
    DollarSign,
    Rocket,
} from 'lucide-react';

const tools = [
    {
        name: 'Stock CAGR Calculator',
        description: 'Calculate compound annual growth rate for any stock.',
        icon: TrendingUp,
        href: '/tools/stock-cagr',
    },
    {
        name: 'Portfolio CAGR Calculator',
        description: 'Measure your entire portfolio performance over time.',
        icon: BarChart2,
        href: '/tools/portfolio-cagr',
    },
    {
        name: 'CAGR with Contributions',
        description: 'Account for regular deposits in your growth calculation.',
        icon: PlusCircle,
        href: '/tools/cagr-contributions',
    },
    {
        name: 'Step-up SIP Calculator',
        description: 'Model increasing monthly investments over time.',
        icon: ArrowUpRight,
        href: '/tools/step-up-sip',
    },
    {
        name: 'Inflation Adjusted Return',
        description: 'See your real returns after accounting for inflation.',
        icon: Percent,
        href: '/tools/inflation-adjusted',
    },
    {
        name: 'Portfolio Allocation',
        description: 'Optimize your asset allocation for balanced growth.',
        icon: PieChart,
        href: '/tools/portfolio-allocation',
    },
    {
        name: 'Real Return Calculator',
        description: 'Calculate purchasing-power-adjusted investment returns.',
        icon: DollarSign,
        href: '/tools/real-return',
    },
    {
        name: 'Investment Growth Simulator',
        description: 'Project future portfolio value with custom scenarios.',
        icon: Rocket,
        href: '/tools/growth-simulator',
    },
];

export default function ToolsDirectory() {
    return (
        <motion.section
            id="tools"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="section-wrapper tools-directory"
        >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                {/* Section header — left on mobile via globals.css */}
                <div className="section-header">
                    <span className="section-eyebrow">{'// CALCULATORS'}</span>
                    <h2 className="section-heading">Every tool you need.</h2>
                    <p className="section-subtext">Precision-built. Free forever.</p>
                </div>

                {/* Tools grid */}
                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <motion.a
                            key={tool.name}
                            href={tool.href}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
                            className="card card-hoverable tool-card"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                            }}
                            role="link"
                            tabIndex={0}
                        >
                            {/* Left: icon + text */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                                {/* Icon box */}
                                <div
                                    className="tool-icon-box"
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        background: 'var(--accent-bg)',
                                        border: '1.5px solid var(--accent-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <tool.icon
                                        size={18}
                                        style={{ color: 'var(--accent)' }}
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Text */}
                                <div style={{ minWidth: 0 }}>
                                    <div className="tool-name">
                                        {tool.name}
                                    </div>
                                    <div className="tool-desc">
                                        {tool.description}
                                    </div>
                                </div>
                            </div>

                            {/* Right: arrow */}
                            <span className="tool-arrow">
                                Open →
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Footer note */}
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                    }}
                >
                    <span
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            display: 'inline-block',
                            flexShrink: 0,
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13,
                            color: 'var(--text-faint)',
                        }}
                    >
                        New tools added monthly.
                    </span>
                </div>
            </div>

            <style jsx global>{`
                /* ── Tools grid layout ── */
                .tools-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    align-items: stretch;
                }

                /* ── Tool card base ── */
                .tool-card {
                    padding: 20px 22px;
                }

                /* ── Tool name ── */
                .tool-name {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--text-primary);
                    line-height: 1.3;
                    /* prevent text overflow in grid */
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ── Tool description ── */
                .tool-desc {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: var(--text-muted);
                    margin-top: 3px;
                    line-height: 1.45;
                    /* allow wrapping */
                    white-space: normal;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                /* ── Open arrow ── */
                .tool-arrow {
                    font-family: 'DM Mono', monospace;
                    font-size: 11px;
                    color: var(--text-faint);
                    transition: color 0.15s ease, transform 0.15s ease;
                    flex-shrink: 0;
                    margin-left: 12px;
                    white-space: nowrap;
                }

                .tool-card:hover .tool-arrow {
                    color: var(--accent);
                    transform: translateX(2px);
                }

                /* ── Mobile: single column ── */
                @media (max-width: 767px) {
                    .tools-grid {
                        grid-template-columns: 1fr !important;
                        gap: 8px !important;
                    }

                    .tool-card {
                        padding: 14px 16px !important;
                    }

                    /* Icon box slightly smaller on mobile */
                    .tool-icon-box {
                        width: 36px !important;
                        height: 36px !important;
                        border-radius: 9px !important;
                    }

                    /* Name: allow wrapping on mobile — no ellipsis */
                    .tool-name {
                        font-size: 14px !important;
                        white-space: normal !important;
                        overflow: visible !important;
                        text-overflow: unset !important;
                        line-height: 1.35 !important;
                    }

                    .tool-desc {
                        font-size: 12px !important;
                        margin-top: 2px !important;
                        -webkit-line-clamp: 1 !important;
                    }

                    /* Hide arrow on mobile — too cramped */
                    .tool-arrow {
                        display: none !important;
                    }
                }

                /* ── Tablet: keep 2 cols but adjust sizes ── */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .tool-card {
                        padding: 16px 18px !important;
                    }

                    .tool-name {
                        font-size: 14px !important;
                    }

                    .tool-desc {
                        font-size: 12px !important;
                    }
                }
            `}</style>
        </motion.section>
    );
}