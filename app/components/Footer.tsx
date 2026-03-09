'use client';

const calculatorLinks = [
    { name: 'Stock CAGR', href: '/tools/stock-cagr' },
    { name: 'Portfolio CAGR', href: '/tools/portfolio-cagr' },
    { name: 'CAGR with Contributions', href: '/tools/cagr-contributions' },
    { name: 'Step-up SIP', href: '/tools/step-up-sip' },
    { name: 'Inflation Adjusted Return', href: '/tools/inflation-adjusted' },
    { name: 'Portfolio Allocation', href: '/tools/portfolio-allocation' },
    { name: 'Real Return', href: '/tools/real-return' },
    { name: 'Growth Simulator', href: '/tools/growth-simulator' },
];

const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Methodology', href: '/methodology' },
    { name: 'Contact', href: '/contact' },
];

const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
];

function FooterColumn({
    heading,
    links,
}: {
    heading: string;
    links: { name: string; href: string }[];
}) {
    return (
        <div className="footer-col">
            <h4 className="footer-col-heading">{heading}</h4>
            <div className="footer-col-links">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="footer-link"
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">

                {/* ── Top: brand + link columns ── */}
                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-text">WealthifyX</span>
                            <span className="footer-logo-dot" />
                        </div>
                        <p className="footer-tagline">
                            Free precision finance tools for modern investors.
                        </p>
                    </div>

                    {/* Link columns — wrapped in a div for mobile 2-col grid */}
                    <div className="footer-link-cols">
                        <FooterColumn heading="Calculators" links={calculatorLinks} />
                        <FooterColumn heading="Company" links={companyLinks} />
                        <FooterColumn heading="Legal" links={legalLinks} />
                    </div>
                </div>

                {/* ── Bottom: copyright + badges ── */}
                <div className="footer-bottom">
                    <span className="footer-copy">
                        © {new Date().getFullYear()} WEALTHIFYX. ALL RIGHTS RESERVED.
                    </span>
                    <div className="footer-badges">
                        <span className="footer-badge">🔒 Privacy by Design</span>
                        <span className="footer-badge-sep">·</span>
                        <span className="footer-badge">⚡ No Data Persistence</span>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* ── Footer base ── */
                .site-footer {
                    width: 100%;
                    background: var(--bg-subtle);
                    border-top: 1px solid var(--border);
                    padding: 56px 48px 28px;
                }

                .footer-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                /* ── Top row: brand left, columns right ── */
                .footer-top {
                    display: grid;
                    grid-template-columns: 1.4fr 2fr;
                    gap: 48px;
                    margin-bottom: 40px;
                }

                /* ── Brand ── */
                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .footer-logo {
                    display: inline-flex;
                    align-items: center;
                    margin-bottom: 12px;
                }

                .footer-logo-text {
                    font-family: "Ubuntu", sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    color: var(--text-primary);
                    letter-spacing: -0.3px;
                }

                .footer-logo-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--accent);
                    margin-left: 2px;
                    margin-bottom: -3px;
                    display: inline-block;
                    flex-shrink: 0;
                }

                .footer-tagline {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: var(--text-muted);
                    line-height: 1.6;
                    margin: 0;
                    max-width: 220px;
                }

                /* ── Link columns wrapper ── */
                .footer-link-cols {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    gap: 32px;
                }

                /* ── Individual column ── */
                .footer-col {
                    display: flex;
                    flex-direction: column;
                }

                .footer-col-heading {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: var(--text-faint);
                    margin: 0 0 14px 0;
                }

                .footer-col-links {
                    display: flex;
                    flex-direction: column;
                }

                .footer-link {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: var(--text-muted);
                    text-decoration: none;
                    line-height: 2.1;
                    padding: 2px 0;
                    transition: color 0.15s ease;
                    white-space: nowrap;
                }

                /* ── Bottom row ── */
                .footer-bottom {
                    padding-top: 24px;
                    border-top: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .footer-copy {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 11px;
                    color: var(--text-faint);
                    white-space: nowrap;
                }

                .footer-badges {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .footer-badge {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 11px;
                    color: var(--text-faint);
                    white-space: nowrap;
                }

                .footer-badge-sep {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 11px;
                    color: var(--text-faint);
                }

                /* ── Tablet (768–1023px): keep 2-col brand/links, compress columns ── */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .site-footer {
                        padding: 44px 32px 24px !important;
                    }

                    .footer-top {
                        grid-template-columns: 1fr 2fr !important;
                        gap: 32px !important;
                    }

                    .footer-link-cols {
                        grid-template-columns: 2fr 1fr 1fr !important;
                        gap: 20px !important;
                    }

                    .footer-tagline {
                        max-width: 180px !important;
                    }
                }

                /* ── Mobile (<768px): full single-column stack ── */
                @media (max-width: 767px) {
                    .site-footer {
                        padding: 36px 20px 24px !important;
                    }

                    /* Brand full width on top */
                    .footer-top {
                        grid-template-columns: 1fr !important;
                        gap: 28px !important;
                        margin-bottom: 28px !important;
                    }

                    .footer-tagline {
                        max-width: 100% !important;
                    }

                    /* 2-column link grid on mobile */
                    .footer-link-cols {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 24px 16px !important;
                    }

                    /* Calculators spans full width — 8 links need the space */
                    .footer-link-cols .footer-col:first-child {
                        grid-column: 1 / -1 !important;
                    }

                    /* Calculators links on mobile: 2-column inline grid */
                    .footer-link-cols .footer-col:first-child .footer-col-links {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        gap: 0 12px !important;
                    }

                    .footer-link {
                        font-size: 12px !important;
                        line-height: 2 !important;
                    }

                    .footer-col-heading {
                        font-size: 9px !important;
                        margin-bottom: 10px !important;
                    }

                    /* Bottom: stack copyright and badges */
                    .footer-bottom {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 8px !important;
                    }

                    .footer-badges {
                        gap: 8px !important;
                    }

                    .footer-copy,
                    .footer-badge {
                        font-size: 10px !important;
                    }
                }

                /* ── Large desktop ── */
                @media (min-width: 1280px) {
                    .site-footer {
                        padding: 64px 48px 32px !important;
                    }

                    .footer-top {
                        gap: 64px !important;
                    }

                    .footer-link-cols {
                        gap: 40px !important;
                    }
                }
            `}</style>
        </footer>
    );
}