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
      className="section-wrapper"
    >
      <div className="max-w-[1100px] m-[0_auto]">
        <div className="grid grid-cols-[45fr_55fr] max-[767px]:flex max-[767px]:flex-col min-[768px]:max-[1023px]:grid-cols-[1fr] gap-[56px] max-[767px]:gap-[24px] min-[768px]:max-[1023px]:gap-[32px] xl:gap-[72px] items-center">
          {/* LEFT — text */}
          <div className="max-[1023px]:order-2 max-[767px]:w-[100%]">
            <div className="section-header">
              <span className="section-eyebrow">{"// TRY IT NOW"}</span>
              <h2 className="section-heading m-[8px_0_14px_0] max-[767px]:text-[26px] max-[767px]:tracking-[-0.5px]">See the difference.</h2>
              <p className="font-sans text-[15px] max-[767px]:text-[14px] text-[var(--text-muted)] leading-[1.7] mb-[20px] max-[767px]:mb-[14px] max-w-[380px] max-[1023px]:max-w-[100%]">
                Try our CAGR calculator directly. No page load, no redirect.
                Real-time results.
              </p>
            </div>

            <ul className="list-none p-[0] m-[0_0_22px_0] max-[767px]:m-[0_0_16px_0] flex flex-col gap-[10px] max-[767px]:gap-[8px]">
              {[
                "Animated growth chart on every result",
                "Handles edge cases other calculators miss",
                "Works perfectly on mobile",
              ].map((item) => (
                <li key={item} className="flex items-center gap-[10px] font-sans text-[14px] max-[767px]:text-[13px] text-[var(--text-muted)] leading-[1.5]">
                  <span className="w-[6px] h-[6px] rounded-[50%] bg-[var(--accent)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="/tools/stock-cagr" className="font-sans text-[14px] font-[500] text-[var(--accent)] no-underline inline-flex items-center gap-[4px] min-h-[44px] max-[767px]:min-h-[40px] transition-opacity duration-[0.15s] ease-[ease] hover:opacity-[0.75]">
              Open full CAGR calculator →
            </a>
          </div>

          {/* RIGHT — calculator card */}
          <div className="w-[100%] max-[1023px]:order-1">
            <div className="card p-[28px] max-[767px]:p-[18px_16px] rounded-[16px] max-[767px]:rounded-[14px] shadow-[var(--shadow-md)] min-[768px]:max-[1023px]:max-w-[520px] min-[768px]:max-[1023px]:m-[0_auto] min-[768px]:max-[1023px]:w-[100%] xl:p-[36px]">
              <span
                className="section-eyebrow"
                style={{ marginBottom: 20, display: "block" }}
              >
                {"// CALCULATOR"}
              </span>

              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-col">
                  <label className="font-ubuntu block text-[12px] font-[500] text-[var(--text-muted)] mb-[6px]">
                    Initial Investment
                  </label>
                  <div style={{ position: "relative" }}>
                    <span className="absolute left-[14px] top-[50%] -translate-y-[50%] text-[14px] text-[var(--text-faint)] pointer-events-none">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field min-h-[46px]"
                      placeholder="10,000"
                      value={initial}
                      onChange={(e) => setInitial(e.target.value)}
                      style={{ paddingLeft: 40 }}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-ubuntu block text-[12px] font-[500] text-[var(--text-muted)] mb-[6px]">Final Value</label>
                  <div style={{ position: "relative" }}>
                    <span className="absolute left-[14px] top-[50%] -translate-y-[50%] text-[14px] text-[var(--text-faint)] pointer-events-none">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field min-h-[46px]"
                      placeholder="25,000"
                      value={final}
                      onChange={(e) => setFinal(e.target.value)}
                      style={{ paddingLeft: 40 }}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-ubuntu block text-[12px] font-[500] text-[var(--text-muted)] mb-[6px]">
                    Number of Years
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="input-field min-h-[46px]"
                    placeholder="5"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="btn-primary w-[100%] justify-center mt-[18px] p-[13px_24px] text-[15px] max-[767px]:text-[16px] min-h-[50px] max-[767px]:min-h-[52px]"
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
                    <div className="mt-[20px] pt-[20px] border-t-[1px] border-t-[var(--border)]">
                      <div className="flex justify-between items-center mb-[16px] gap-[12px] min-w-[0]">
                        <span className="font-ubuntu text-[12px] font-[500] text-[var(--text-muted)] tracking-[0.5px] uppercase shrink-0">
                          CAGR
                        </span>
                        {/* Font size adapts to digit count — no overflow */}
                        <span
                          className="font-mono font-[500] leading-[1] overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%] text-right flex-[1] min-w-[0]"
                          style={{
                            color: isPositive
                              ? "var(--positive)"
                              : "var(--negative)",
                            fontSize: typeof window !== "undefined" && window.innerWidth < 768
                              ? resultFontSizeMobile
                              : resultFontSize,
                          }}
                        >
                          {result.toFixed(2)}%
                        </span>
                      </div>

                      {chartData.length > 0 && (
                        <div className="w-[100%] h-[140px] max-[767px]:h-[120px]" style={{ outline: "none" }}>
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
    </motion.section>
  );
}
