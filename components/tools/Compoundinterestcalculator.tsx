"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { TrendingUp, ArrowRight } from "lucide-react";
import { faqs, relatedTools } from "@/constants/compound-interest";
import FAQSection from "../FAQSection";

/* ─── Types ─────────────────────────────────────────── */
interface CalcResult {
  finalAmount: number;
  totalInterest: number;
  principal: number;
  chartData: {
    year: string;
    principal: number;
    interest: number;
    total: number;
  }[];
}

/* ─── Compound interest formula ─────────────────────── */
function calculate(
  principal: number,
  rate: number,
  frequency: number,
  years: number,
  monthlyContribution: number,
): CalcResult {
  const r = rate / 100;
  const chartData = [];

  for (let y = 0; y <= years; y++) {
    // A = P(1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
    const exp = Math.pow(1 + r / frequency, frequency * y);
    const base = principal * exp;
    const contrib =
      monthlyContribution > 0
        ? ((monthlyContribution * 12) / frequency) *
          ((exp - 1) / (r / frequency))
        : 0;
    const total =
      base + (r > 0 ? contrib : principal + monthlyContribution * 12 * y);
    const interest = total - principal - monthlyContribution * 12 * y;

    chartData.push({
      year: `Y${y}`,
      principal: Math.round(principal + monthlyContribution * 12 * y),
      interest: Math.round(Math.max(0, interest)),
      total: Math.round(total),
    });
  }

  const last = chartData[chartData.length - 1];
  return {
    finalAmount: last.total,
    totalInterest: last.interest,
    principal: last.principal,
    chartData,
  };
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

const FREQUENCIES = [
  { label: "Daily", value: 365 },
  { label: "Monthly", value: 12 },
  { label: "Quarterly", value: 4 },
  { label: "Annually", value: 1 },
];

/* ─── Custom Tooltip ─────────────────────────────────── */
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="bg-[var(--bg-card)] border-[1px] border-[var(--border)] rounded-[10px] p-[12px_16px] font-mono text-[12px] shadow-[var(--shadow-md)] min-w-[180px]"
    >
      <div
        className="text-[var(--text-faint)] mb-[8px] text-[11px]"
      >
        {label}
      </div>
      {payload.map((p: any) => (
        <div
          key={p.name}
          className="flex justify-between gap-[16px] mb-[4px]"
        >
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="text-[var(--text-primary)] font-[500]">
            {fmt(p.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

function CurvedUnderline() {
  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className="absolute bottom-[-6px] left-[0] w-[100%] h-[12px] overflow-visible"
      aria-hidden="true"
    >
      <path
        d="M 2 8 Q 50 2, 100 6 T 198 6"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="250"
        strokeDashoffset="250"
        style={{
          animation: "drawUnderline 0.8s ease-out 0.5s forwards",
        }}
      />
      <style>{`
                @keyframes drawUnderline {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────── */
export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");
  const [frequency, setFrequency] = useState(12);
  const [contribution, setContribution] = useState("");

  const result = useMemo<CalcResult | null>(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const y = parseInt(years);
    const c = parseFloat(contribution) || 0;
    if (isNaN(p) || isNaN(r) || isNaN(y) || p <= 0 || r < 0 || y <= 0)
      return null;
    return calculate(p, r, frequency, y, c);
  }, [principal, rate, years, frequency, contribution]);

  return (
    <div className="min-h-screen">
      {/* ── Page hero ── */}
      <div className="bg-[var(--bg-subtle)] border-b-[1px] border-b-[var(--border)] p-[90px_48px_48px] max-[767px]:p-[60px_20px_28px]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="flex items-center justify-center w-fit gap-[6px] bg-[var(--accent-bg)] border-[1px] border-[var(--accent-border)] rounded-[100px] p-[4px_12px] font-sans text-[11px] font-[500] text-[var(--accent)] tracking-[0.5px] m-[0_auto_16px]">
            <TrendingUp size={13} />
            <span>Compound Interest Calculator</span>
          </div>
          <h1 className="font-sans font-[400] tracking-[-2px] leading-[1.05] text-[var(--text-primary)] m-[0_auto_20px] max-w-[860px] text-center text-[clamp(56px,7vw,75px)] max-[767px]:text-[32px] max-[480px]:text-[32px] max-[767px]:tracking-[0px] min-[481px]:max-[767px]:text-[52px]">
            Calculate{" "}
            <span
              className="relative inline-block text-[var(--accent)]"
            >
              compound
              <CurvedUnderline />
            </span>{" "}
            interest and watch your money grow.
          </h1>
          <p className="font-sans text-[16px] max-[767px]:text-[14px] text-[var(--text-muted)] leading-[1.7] max-w-[780px] m-[auto] text-center">
            Calculate how your savings or investments grow over time with the
            power of compounding. Supports monthly contributions, multiple
            compounding frequencies, and any time horizon.
          </p>
        </div>
      </div>

      {/* ── Calculator + Result ── */}
      <div className="p-[48px_48px] max-[767px]:p-[24px_20px] min-[768px]:max-[1023px]:p-[40px_32px] bg-[var(--bg-base)]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="grid grid-cols-[400px_1fr] max-[1023px]:grid-cols-[1fr] xl:grid-cols-[420px_1fr] gap-[32px] max-[767px]:gap-[20px] min-[768px]:max-[1023px]:gap-[24px] xl:gap-[40px] items-start">
            {/* LEFT — inputs */}
            <div className="w-[100%]">
              <div className="card p-[28px] max-[767px]:p-[20px_18px] flex flex-col gap-[20px] max-[767px]:gap-[16px]">
                <h2 className="font-mono text-[10px] font-[500] tracking-[1.5px] uppercase text-[var(--accent)] m-[0]">Your numbers</h2>

                {/* Principal */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-ubuntu text-[13px] font-[500] text-[var(--text-secondary)] flex items-center gap-[8px]">Initial Investment</label>
                  <div className="relative">
                    <span className="absolute left-[14px] top-[50%] -translate-y-[50%] font-ubuntu text-[14px] text-[var(--text-faint)] pointer-events-none">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field min-h-[46px] pl-[40px]"
                      placeholder="10,000"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                    />
                  </div>
                </div>

                {/* Rate */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-ubuntu text-[13px] font-[500] text-[var(--text-muted)] flex items-center gap-[8px]">Annual Interest Rate</label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field min-h-[46px] pr-[36px]"
                      placeholder="7"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <span className="absolute right-[14px] top-[50%] -translate-y-[50%] font-ubuntu text-[14px] text-[var(--text-faint)] pointer-events-none">%</span>
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-faint)] mt-[2px]">
                    S&P 500 historical avg: ~10.7%
                  </div>
                </div>

                {/* Years */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-ubuntu text-[13px] font-[500] text-[var(--text-muted)] flex items-center gap-[8px]">Time Period (Years)</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="input-field min-h-[46px]"
                    placeholder="10"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>

                {/* Compounding frequency */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-ubuntu text-[13px] font-[500] text-[var(--text-muted)] flex items-center gap-[8px]">Compounding Frequency</label>
                  <div className="grid grid-cols-[repeat(4,1fr)] max-[767px]:grid-cols-[repeat(2,1fr)] gap-[6px]">
                    {FREQUENCIES.map((f) => (
                      <button
                        key={f.value}
                        onClick={() => setFrequency(f.value)}
                        className={`h-[36px] border-[1px] rounded-[8px] font-ubuntu text-[12px] font-[500] cursor-pointer transition-all duration-[0.15s] ease-[ease] ${
                          frequency === f.value 
                            ? "bg-[var(--accent)] border-[var(--accent)] text-[#fff] font-[700]" 
                            : "border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:bg-[var(--accent-bg)]"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly contribution */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-ubuntu text-[13px] font-[500] text-[var(--text-secondary)] flex items-center gap-[8px]">
                    Monthly Contribution
                    <span className="text-[10px] font-[400] text-[var(--text-faint)] bg-[var(--bg-muted)] rounded-[4px] p-[1px_6px]">optional</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-[14px] top-[50%] -translate-y-[50%] font-ubuntu text-[14px] text-[var(--text-faint)] pointer-events-none">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      className="input-field min-h-[46px] pl-[40px]"
                      placeholder="0"
                      value={contribution}
                      onChange={(e) => setContribution(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — result */}
            <div className="w-[100%]">
              {/* Result cards */}
              <div className="grid grid-cols-[1fr_1fr] min-[768px]:max-[1023px]:grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[1fr] gap-[12px] max-[767px]:gap-[8px] mb-[16px]">
                {[
                  {
                    label: "Final Balance",
                    value: result ? fmt(result.finalAmount) : "—",
                    color: "var(--positive)",
                    large: true,
                  },
                  {
                    label: "Total Interest Earned",
                    value: result ? fmt(result.totalInterest) : "—",
                    color: "var(--accent)",
                    large: false,
                  },
                  {
                    label: "Total Contributed",
                    value: result ? fmt(result.principal) : "—",
                    color: "var(--text-secondary)",
                    large: false,
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    className={`card flex flex-col gap-[6px] p-[20px_22px] max-[767px]:p-[20px_22px] ${card.large ? "col-[1/-1] max-[1023px]:col-auto p-[24px_28px] max-[767px]:p-[24px_28px]" : ""}`}
                    animate={{ opacity: result ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[10px] font-[500] tracking-[1.2px] uppercase text-[var(--text-faint)]">{card.label}</span>
                    <span
                      className={`font-mono font-[500] leading-[1.1] ${card.large ? "text-[40px] max-[767px]:text-[32px] min-[768px]:max-[1023px]:text-[28px]" : "text-[28px] max-[767px]:text-[22px]"}`}
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              {result && result.chartData.length > 1 && (
                <motion.div
                  className="card p-[20px_20px_16px]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-[16px]">
                    <span className="font-mono text-[10px] font-[500] tracking-[1.2px] uppercase text-[var(--text-faint)] flex-[1] min-w-[0] whitespace-nowrap overflow-hidden text-ellipsis">Growth over time</span>
                    <div className="flex items-center gap-[8px] font-sans text-[11px] text-[var(--text-muted)]">
                      <span
                        className="w-[8px] h-[8px] rounded-[50%] shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      <span>Interest</span>
                      <span
                        className="w-[8px] h-[8px] rounded-[50%] shrink-0"
                        style={{ background: "var(--border-strong)" }}
                      />
                      <span>Principal</span>
                    </div>
                  </div>
                  <div className="w-[100%] h-[220px] [&_svg]:outline-none [&_.recharts-wrapper]:outline-none [&_.recharts-surface]:outline-none">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={result.chartData}
                        margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="gInterest"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="var(--accent)"
                              stopOpacity={0.25}
                            />
                            <stop
                              offset="100%"
                              stopColor="var(--accent)"
                              stopOpacity={0.02}
                            />
                          </linearGradient>
                          <linearGradient
                            id="gPrincipal"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="var(--border-strong)"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="100%"
                              stopColor="var(--border-strong)"
                              stopOpacity={0.05}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="var(--border)"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="year"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 11,
                            fill: "var(--text-faint)",
                            fontFamily: "DM Mono",
                          }}
                          interval="preserveStartEnd"
                        />
                        <YAxis
                          hide={false}
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 10,
                            fill: "var(--text-faint)",
                            fontFamily: "DM Mono",
                          }}
                          tickFormatter={(v) =>
                            v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`
                          }
                          width={48}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="principal"
                          name="Principal"
                          stroke="var(--border-strong)"
                          strokeWidth={1.5}
                          fill="url(#gPrincipal)"
                          stackId="1"
                        />
                        <Area
                          type="monotone"
                          dataKey="interest"
                          name="Interest"
                          stroke="var(--accent)"
                          strokeWidth={2}
                          fill="url(#gInterest)"
                          stackId="1"
                          animationDuration={600}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="section-wrapper bg-[var(--bg-subtle)]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="section-header">
            <span className="section-eyebrow">{"// HOW IT WORKS"}</span>
            <h2 className="section-heading">The compound interest formula.</h2>
          </div>
          <div className="bg-[var(--bg-card)] border-[1px] border-[var(--border)] rounded-[14px] p-[28px_32px] mb-[24px]">
            <div className="font-mono text-[24px] max-[767px]:text-[18px] color-[var(--accent)] tracking-[1px] mb-[24px] pb-[20px] border-b-[1px] border-b-[var(--border)]" style={{ color: 'var(--accent)' }}>
              A = P(1 + r/n)<sup>nt</sup>
            </div>
            <div className="flex flex-col gap-[10px]">
              {[
                { sym: "A", def: "Final amount (what you end up with)" },
                { sym: "P", def: "Principal (your initial investment)" },
                {
                  sym: "r",
                  def: "Annual interest rate (as a decimal — 7% = 0.07)",
                },
                {
                  sym: "n",
                  def: "Number of times interest compounds per year",
                },
                { sym: "t", def: "Time in years" },
              ].map((v) => (
                <div key={v.sym} className="flex items-start gap-[16px]">
                  <span className="font-mono text-[14px] font-[500] text-[var(--accent)] w-[16px] shrink-0">{v.sym}</span>
                  <span className="font-sans text-[14px] text-[var(--text-muted)] leading-[1.5]">{v.def}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="font-sans text-[15px] text-[var(--text-muted)] leading-[1.75] max-w-[680px]">
            The key difference from simple interest is that each compounding
            period, interest is calculated on the <strong className="text-[var(--text-primary)] font-[600]">new total</strong> —
            not just the original principal. This creates exponential growth:
            small differences in rate or time produce dramatically different
            outcomes over long periods.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} id="faq" />

      {/* ── Related tools ── */}
      <div className="section-wrapper bg-[var(--bg-subtle)]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="section-header">
            <span className="section-eyebrow">{"// RELATED TOOLS"}</span>
            <h2 className="section-heading">Keep calculating.</h2>
          </div>
          <div className="grid grid-cols-[repeat(2,1fr)] max-[767px]:grid-cols-[1fr] gap-[12px]">
            {relatedTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.href}
                className="card card-hoverable p-[18px_20px] flex items-center justify-between gap-[16px] no-underline text-inherit cursor-pointer"
              >
                <div>
                  <div className="font-sans text-[14px] font-[600] text-[var(--text-primary)] mb-[3px]">{tool.name}</div>
                  <div className="font-sans text-[12px] text-[var(--text-muted)]">{tool.desc}</div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[var(--text-faint)] shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
