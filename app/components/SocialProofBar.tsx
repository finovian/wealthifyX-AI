'use client';

import { motion } from 'framer-motion';

const countries = [
    { flag: '🇺🇸', name: 'United States' },
    { flag: '🇩🇪', name: 'Germany' },
    { flag: '🇬🇧', name: 'United Kingdom' },
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇫🇷', name: 'France' },
];

export default function SocialProofBar() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="social-proof-bar"
            style={{
                width: '100%',
                background: 'var(--bg-subtle)',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                marginTop: 0,
            }}
        >
            {/* Desktop layout */}
            <div
                className="social-proof-inner-desktop"
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                }}
            >
                <span
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        color: 'var(--text-faint)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                    }}
                >
                    Used by investors in
                </span>
                <span
                    style={{
                        fontFamily: "'DM Sans', 'sans-serif'",
                        fontSize: 13,
                        color: 'var(--text-muted)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    🇺🇸 United States · 🇩🇪 Germany · 🇬🇧 United Kingdom · 🇮🇳 India · 🇫🇷 France
                </span>
            </div>

            {/* Mobile layout — stacked, centered, flags in a wrap row */}
            <div
                className="social-proof-inner-mobile"
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    textAlign: 'center',
                }}
            >
                <span
                    style={{
                        fontFamily: "'DM Sans', 'sans-serif'",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        color: 'var(--text-faint)',
                    }}
                >
                    Used by investors in
                </span>
                {/* Country chips */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 6,
                    }}
                >
                    {countries.map((c) => (
                        <span
                            key={c.name}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 5,
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: 100,
                                padding: '3px 10px',
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 12,
                                color: 'var(--text-muted)',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {c.flag} {c.name}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                /* Desktop: show row, hide mobile */
                .social-proof-bar {
                    padding: 16px 48px;
                }
                .social-proof-inner-desktop {
                    display: flex;
                }
                .social-proof-inner-mobile {
                    display: none;
                }

                /* Mobile: hide row, show chips */
                @media (max-width: 767px) {
                    .social-proof-bar {
                        padding: 16px 20px !important;
                    }
                    .social-proof-inner-desktop {
                        display: none !important;
                    }
                    .social-proof-inner-mobile {
                        display: flex !important;
                    }
                }
            `}</style>
        </motion.section>
    );
}