"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Calculators", href: "#tools" },
  { label: "Learn", href: "#learn" },
  { label: "Compare Brokers", href: "#compare" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
                .nav-bar {
                    padding: 0 20px;
                }
                @media (min-width: 1024px) {
                    .nav-bar {
                        padding: 0 48px;
                    }
                }
                .nav-link {
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--text-muted);
                    text-decoration: none;
                    transition: color 0.15s ease;
                    padding: 4px 0;
                }
                .nav-link:hover {
                    color: var(--text-primary);
                }
            `}</style>

      <nav
        className="nav-bar animate-fade-up delay-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? `color-mix(in srgb, var(--bg-base) 92%, transparent)`
            : "var(--bg-base)",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.25s ease, border-color 0.25s ease",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 20,
              fontWeight: 400,
              color:'var(--text-primary)',
              letterSpacing: "-0.5px",
            }}
          >
            WealthifyX
        
          </span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: 'var(--accent)',
              marginLeft: 2,
              marginBottom: -4,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
        </a>

        {/* Center nav links — desktop only (≥1024px) */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: 32 }}
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Theme toggle — visible on all screens */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.15s ease",
              borderRadius: 8,
              minWidth: 44,
              minHeight: 44,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Separator — desktop only */}
          <div
            className="hidden lg:block"
            style={{
              width: 1,
              height: 16,
              background: "var(--border)",
              flexShrink: 0,
            }}
          />

          {/* Free. Always. — desktop only */}
          <span
            className="hidden lg:inline"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--text-faint)",
              whiteSpace: "nowrap",
            }}
          >
            Free. Always.
          </span>

          {/* Hamburger — mobile only (<1024px) */}
          <button
            className="flex lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 44,
              minHeight: 44,
            }}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 199,
                background: "rgba(0,0,0,0.4)",
              }}
            />

            {/* Drawer — slides in from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 100vw)",
                zIndex: 200,
                background: "var(--bg-base)",
                borderLeft: "1px solid var(--border)",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Drawer header — logo + close */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 60,
                  padding: "0 20px",
                  borderBottom: "1px solid var(--border)",
                  flexShrink: 0,
                }}
              >
                <a
                  href="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    WealthifyX
                  </span>
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      marginLeft: 2,
                      marginBottom: -3,
                      display: "inline-block",
                    }}
                  />
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-primary)",
                    minWidth: 44,
                    minHeight: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer nav links */}
              <div style={{ flex: 1, padding: "8px 20px" }}>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      height: 52,
                      borderBottom: "1px solid var(--border)",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--bg-subtle)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Drawer bottom — CTA + theme + label */}
              <div
                style={{
                  padding: "16px 20px 28px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flexShrink: 0,
                }}
              >
                {/* Primary CTA */}
                <a
                  href="#tools"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 50,
                    background: "var(--accent)",
                    color: "#ffffff",
                    borderRadius: 8,
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--accent-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--accent)")
                  }
                >
                  Explore All Tools →
                </a>

                {/* Theme toggle button */}
                <button
                  onClick={toggleTheme}
                  style={{
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "10px 16px",
                    color: "var(--text-primary)",
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    minHeight: 44,
                    width: "100%",
                    transition: "background 0.15s ease",
                  }}
                >
                  {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                  {theme === "light"
                    ? "Switch to Dark Mode"
                    : "Switch to Light Mode"}
                </button>

                {/* Free. Always. */}
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--text-faint)",
                    textAlign: "center",
                    marginTop: 4,
                  }}
                >
                  Free. Always.
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
