"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function generateGrowthData(initial: number, final: number, years: number) {
  if (years <= 0 || initial <= 0 || final <= 0) return [];
  const data = [];
  for (let i = 0; i <= years; i++) {
    const value = initial * Math.pow(final / initial, i / years);
    data.push({ year: `Y${i}`, value: Math.round(value) });
  }
  return data;
}

/** Clamp result font size based on digit count to prevent overflow */
function getResultFontSize(value: number, base: number): number {
  const str = Math.abs(value).toFixed(2);
  const len = str.length;
  if (len <= 7) return base;
  if (len <= 10) return Math.max(base - 8, 22);
  return Math.max(base - 14, 18);
}

export default function InlineCalculator() {
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const chartData = useMemo(() => {
    if (result === null) return [];
    return generateGrowthData(
      parseFloat(initial),
      parseFloat(final),
      parseInt(years),
    );
  }, [result, initial, final, years]);

  const handleCalculate = () => {
    const i = parseFloat(initial);
    const f = parseFloat(final);
    const y = parseInt(years);
    if (isNaN(i) || isNaN(f) || isNaN(y) || y <= 0 || i <= 0) return;
    const cagr = (Math.pow(f / i, 1 / y) - 1) * 100;
    setResult(cagr);
    setShowResult(true);
    if (window.innerWidth < 768) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 120);
    }
  };

  const isPositive = result !== null && result >= 0;
  const resultFontSize = result !== null ? getResultFontSize(result, 38) : 38;
  const resultFontSizeMobile =
    result !== null ? getResultFontSize(result, 28) : 28;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="section-wrapper calc-section"
    >
      <div className="calc-inner">
        <div className="calc-layout">
          {/* LEFT — text */}
          <div className="calc-text">
            <div className="section-header">
              <span className="section-eyebrow">{"// TRY IT NOW"}</span>
              <h2 className="section-heading">See the difference.</h2>
              <p className="section-subtext">
                Try our CAGR calculator directly. No page load, no redirect.
                Real-time results.
              </p>
            </div>

            <ul className="calc-bullets">
              {[
                "Animated growth chart on every result",
                "Handles edge cases other calculators miss",
                "Works perfectly on mobile",
              ].map((item) => (
                <li key={item} className="calc-bullet-item">
                  <span className="calc-bullet-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="/tools/stock-cagr" className="calc-link">
              Open full CAGR calculator →
            </a>
          </div>

          {/* RIGHT — calculator card */}
          <div className="calc-card-wrapper w-full!">
            <div className="card calc-card">
              <span
                className="section-eyebrow"
                style={{ marginBottom: 20, display: "block" }}
              >
                {"// CALCULATOR"}
              </span>

              <div className="calc-fields">
                <div className="calc-field">
                  <label className="form-label calc-label">
                    Initial Investment
                  </label>
                  <div style={{ position: "relative" }}>
                    <span className="input-prefix calc-prefix">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field calc-input"
                      placeholder="10,000"
                      value={initial}
                      onChange={(e) => setInitial(e.target.value)}
                      style={{ paddingLeft: 28 }}
                    />
                  </div>
                </div>

                <div className="calc-field">
                  <label className="form-label calc-label">Final Value</label>
                  <div style={{ position: "relative" }}>
                    <span className="input-prefix calc-prefix">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field calc-input"
                      placeholder="25,000"
                      value={final}
                      onChange={(e) => setFinal(e.target.value)}
                      style={{ paddingLeft: 28 }}
                    />
                  </div>
                </div>

                <div className="calc-field">
                  <label className="form-label calc-label">
                    Number of Years
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="input-field calc-input"
                    placeholder="5"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="btn-primary calc-button calc-cta"
                onClick={handleCalculate}
              >
                Calculate CAGR →
              </button>

              <AnimatePresence>
                {showResult && result !== null && (
                  <motion.div
                    ref={resultRef}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="calc-result-wrapper">
                      <div className="calc-result-row">
                        <span className="result-label calc-result-label">
                          CAGR
                        </span>
                        {/* Font size adapts to digit count — no overflow */}
                        <span
                          className="calc-result-value"
                          style={{
                            color: isPositive
                              ? "var(--positive)"
                              : "var(--negative)",
                            fontSize: resultFontSize,
                          }}
                        >
                          {result.toFixed(2)}%
                        </span>
                      </div>

                      {chartData.length > 0 && (
                        <div className="calc-chart" style={{ outline: "none" }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                              <defs>
                                <linearGradient
                                  id="areaGreen"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="0%"
                                    stopColor="var(--accent)"
                                    stopOpacity={0.2}
                                  />
                                  <stop
                                    offset="100%"
                                    stopColor="var(--accent)"
                                    stopOpacity={0.02}
                                  />
                                </linearGradient>
                              </defs>
                              <XAxis
                                dataKey="year"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                  fontSize: 11,
                                  fill: "var(--text-faint)",
                                }}
                              />
                              <YAxis hide />
                              <Tooltip
                                contentStyle={{
                                  background: "var(--bg-card)",
                                  border: "1px solid var(--border)",
                                  borderRadius: 8,
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: 12,
                                  boxShadow: "var(--shadow-md)",
                                }}
                                formatter={(value) => [
                                  `$${Number(value).toLocaleString()}`,
                                  "Value",
                                ]}
                              />
                              <Area
                                type="monotone"
                                dataKey="value"
                                stroke="var(--accent)"
                                strokeWidth={2}
                                fill="url(#areaGreen)"
                                animationDuration={600}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .calc-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .calc-layout {
          display: grid;
          grid-template-columns: 45fr 55fr;
          gap: 56px;
          align-items: center;
        }

        .calc-heading {
          margin-top: 8px !important;
          margin-bottom: 14px !important;
        }

        .calc-subtext {
          font-family: "DM Sans", sans-serif;
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
          max-width: 380px;
        }

        .calc-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 22px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .calc-bullet-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .calc-bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .calc-link {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          min-height: 44px;
          transition: opacity 0.15s ease;
        }

        .calc-link:hover {
          opacity: 0.75;
        }

        .calc-card {
          padding: 28px;
          border-radius: 16px;
          box-shadow: var(--shadow-md);
        }

        .calc-fields {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .calc-field {
          display: flex;
          flex-direction: column;
        }

        .calc-label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .calc-prefix {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: var(--text-faint);
          pointer-events: none;
        }

        .calc-input {
          min-height: 46px;
        }

        .calc-cta {
          width: 100%;
          justify-content: center;
          margin-top: 18px;
          padding: 13px 24px;
          font-size: 15px;
          min-height: 50px;
        }

        .calc-result-wrapper {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .calc-result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 12px; /* gap prevents overlap at large values */
          min-width: 0;
        }

        .calc-result-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .calc-result-value {
          font-family: "DM Mono", monospace;
          font-weight: 500;
          line-height: 1;
          /* overflow protection */
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100%;
          text-align: right;
          flex: 1;
          min-width: 0;
        }

        .calc-chart {
          width: 100%;
          height: 140px;
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .calc-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .calc-text {
            order: 2;
          }
          .calc-card-wrapper {
            order: 1;
          }
          .calc-subtext {
            max-width: 100% !important;
          }
          .calc-card {
            max-width: 520px;
            margin: 0 auto;
            width: 100%;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .calc-layout {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }

          /* Calculator first */
          .calc-card-wrapper {
            order: 1 !important;
          }
          .calc-text {
            order: 2 !important;
            width: 100%;
          }

          .calc-card {
            padding: 18px 16px !important;
            border-radius: 14px !important;
          }

          .calc-heading {
            font-size: 26px !important;
            letter-spacing: -0.5px !important;
          }

          .calc-subtext {
            font-size: 14px !important;
            max-width: 100% !important;
            margin-bottom: 14px !important;
          }

          .calc-bullets {
            margin-bottom: 16px !important;
            gap: 8px !important;
          }

          .calc-bullet-item {
            font-size: 13px !important;
          }

          .calc-cta {
            font-size: 16px !important;
            min-height: 52px !important;
          }

          /* Result value on mobile uses JS-computed size from resultFontSizeMobile */
          .calc-result-value {
            font-size: ${result !== null
              ? resultFontSizeMobile
              : 28}px !important;
          }

          .calc-chart {
            height: 120px !important;
          }

          /* Tighten text section on mobile — no dead space */
          .calc-text .calc-link {
            min-height: 40px !important;
          }
        }

        /* Large desktop */
        @media (min-width: 1280px) {
          .calc-layout {
            gap: 72px !important;
          }
          .calc-card {
            padding: 36px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
