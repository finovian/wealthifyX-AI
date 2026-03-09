'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EmailCapture() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.includes('@')) {
            setSubmitted(true);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="section-wrapper email-section"
        >
            <div className="email-card-wrapper">
                <div className="email-card">
                    {/* Header Structure */}
                    <div className="section-header email-header">
                        <span className="section-eyebrow">
                            {'// STAY UPDATED'}
                        </span>
                        <h2 className="section-heading">
                            Get notified when new tools drop.
                        </h2>
                        <p className="section-subtext">
                            Monthly tool updates, finance insights, no spam.
                        </p>
                    </div>

                    {/* Form or success state */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <div className="email-input-row">
                                {/* EXPLICIT input — not textarea, not input-field class */}
                                <input
                                    type="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="email-input"
                                />
                                <button
                                    type="submit"
                                    className="btn-primary email-submit"
                                >
                                    Subscribe →
                                </button>
                            </div>
                            <p className="email-disclaimer">
                                No spam. Unsubscribe anytime.
                            </p>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="email-success"
                        >
                            <span className="email-success-dot" />
                            <span className="email-success-text">
                                You&apos;re in! We&apos;ll keep you updated.
                            </span>
                        </motion.div>
                    )}
                </div>
            </div>

            <style jsx global>{`
                /* ── Section centering ── */
                .email-section {
                    display: flex !important;
                    justify-content: center !important;
                }

                .email-card-wrapper {
                    width: 100%;
                    max-width: 1100px;
                }

                /* ── Card ── */
                .email-card {
                    background: var(--accent-bg);
                    border: 1px solid var(--accent-border);
                    border-radius: 16px;
                    padding: 44px 40px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* ── Header Structure Override ── */
                .email-header {
                    text-align: center !important;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .email-header .section-eyebrow,
                .email-header .section-heading,
                .email-header .section-subtext {
                    text-align: center !important;
                }

                /* ── Input row ── */
                .email-input-row {
                    display: flex;
                    gap: 10px;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }

                /* ── Email input — explicit styles, no class conflict ── */
                .email-input {
                    flex: 1 1 0;
                    min-width: 0;
                    max-width : 360px;
                    height: 48px;
                    padding: 0 16px;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 16px; /* 16px — prevents iOS zoom */
                    color: var(--text-primary);
                    outline: none;
                    transition: border-color 0.15s ease, box-shadow 0.15s ease;
                    /* force single line — no resizing, no textarea behaviour */
                    display: block;
                    resize: none;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .email-input::placeholder {
                    color: var(--text-faint);
                    font-family: 'Ubuntu', sans-serif;
                }

                .email-input:focus {
                    border-color: var(--accent);
                    box-shadow: 0 0 0 3px var(--accent-bg);
                }

                /* ── Submit button ── */
                .email-submit {
                    flex-shrink: 0;
                    height: 48px;
                    padding: 0 22px;
                    font-size: 14px;
                    white-space: nowrap;
                }

                /* ── Disclaimer ── */
                .email-disclaimer {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 12px;
                    color: var(--text-faint);
                    margin: 12px 0 0 0;
                    text-align: center;
                }

                /* ── Success state ── */
                .email-success {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 0;
                }

                .email-success-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--accent);
                    flex-shrink: 0;
                }

                .email-success-text {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--accent);
                }

                /* ── Mobile ── */
                @media (max-width: 639px) {
                    .email-card {
                        padding: 28px 20px !important;
                        border-radius: 14px !important;
                    }

                    .email-header .section-heading {
                        font-size: 22px !important;
                        max-width: 100% !important;
                    }

                    .email-header .section-subtext {
                        font-size: 14px !important;
                    }

                    /* Stack input above button on mobile */
                    .email-input-row {
                        flex-direction: column !important;
                        gap: 8px !important;
                    }

                    .email-input {
                        width: 100% !important;
                        flex: none !important;
                    }

                    .email-submit {
                        width: 100% !important;
                        height: 50px !important;
                        font-size: 15px !important;
                    }
                }

                /* ── Large desktop ── */
                @media (min-width: 1280px) {
                    .email-card {
                        padding: 52px 48px !important;
                    }

                    .email-heading {
                        font-size: 32px !important;
                    }
                }
            `}</style>
        </motion.section>
    );
}