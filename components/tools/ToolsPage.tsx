'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp, PiggyBank, Calculator, BarChart3, Landmark, Receipt } from 'lucide-react';

/* ─── Tool data ──────────────────────────────────────── */
const categories = [
  { id: 'all', label: 'All Tools' },
  { id: 'investing', label: 'Investing' },
  { id: 'retirement', label: 'Retirement' },
  { id: 'savings', label: 'Savings' },
  { id: 'tax', label: 'Tax' },
];

const tools = [
  // ── Live ──
  {
    name: 'Compound Interest Calculator',
    desc: 'Calculate how your money grows with the power of compounding over time.',
    href: '/tools/compound-interest-calculator',
    category: 'investing',
    live: true,
    icon: TrendingUp,
  },
  // ── Coming soon ──
  {
    name: 'Investment Calculator',
    desc: 'Project returns on any investment with custom rate and time horizon.',
    href: '/tools/investment-calculator',
    category: 'investing',
    live: false,
    icon: BarChart3,
  },
  {
    name: 'Roth IRA Calculator',
    desc: 'Estimate your Roth IRA growth and retirement balance over time.',
    href: '/tools/roth-ira-calculator',
    category: 'retirement',
    live: false,
    icon: Landmark,
  },
  {
    name: '401k Calculator',
    desc: 'See how your 401k contributions grow with employer match included.',
    href: '/tools/401k-calculator',
    category: 'retirement',
    live: false,
    icon: Landmark,
  },
  {
    name: 'Savings Goal Calculator',
    desc: 'Find out how long it takes to reach any savings target.',
    href: '/tools/savings-goal-calculator',
    category: 'savings',
    live: false,
    icon: PiggyBank,
  },
  {
    name: 'APY Interest Calculator',
    desc: 'Calculate annual percentage yield and compare savings account returns.',
    href: '/tools/apy-interest-calculator',
    category: 'savings',
    live: false,
    icon: Calculator,
  },
  {
    name: 'Dollar Cost Averaging Calculator',
    desc: 'Model DCA investment strategy returns across any time period.',
    href: '/tools/dollar-cost-averaging-calculator',
    category: 'investing',
    live: false,
    icon: TrendingUp,
  },
  {
    name: 'Stock Profit Calculator',
    desc: 'Calculate gain, loss, and return percentage on any stock trade.',
    href: '/tools/stock-profit-calculator',
    category: 'investing',
    live: false,
    icon: BarChart3,
  },
  {
    name: 'Dividend Calculator',
    desc: 'Estimate dividend income and DRIP growth from any portfolio.',
    href: '/tools/dividend-calculator',
    category: 'investing',
    live: false,
    icon: TrendingUp,
  },
  {
    name: 'Capital Gains Tax Calculator',
    desc: 'Estimate federal capital gains tax on your investment profits.',
    href: '/tools/capital-gains-calculator',
    category: 'tax',
    live: false,
    icon: Receipt,
  },
  {
    name: '401k Withdrawal Calculator',
    desc: 'Calculate taxes and penalties on early 401k withdrawals.',
    href: '/tools/401k-withdrawal-calculator',
    category: 'retirement',
    live: false,
    icon: Landmark,
  },
  {
    name: 'Investment Growth Calculator',
    desc: 'Project long-term investment growth with variable contribution amounts.',
    href: '/tools/investment-growth-calculator',
    category: 'investing',
    live: false,
    icon: BarChart3,
  },
  {
    name: 'S&P 500 Calculator',
    desc: 'See what a past S&P 500 investment would be worth today.',
    href: '/tools/sp500-calculator',
    category: 'investing',
    live: false,
    icon: TrendingUp,
  },
  {
    name: 'Options Profit Calculator',
    desc: 'Calculate potential profit and loss on options contracts.',
    href: '/tools/options-profit-calculator',
    category: 'investing',
    live: false,
    icon: BarChart3,
  },
];

/* ─── Main component ─────────────────────────────────── */
export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? tools
    : tools.filter(t => t.category === activeCategory);

  const liveCount = tools.filter(t => t.live).length;
  const totalCount = tools.length;

  return (
    <div className="min-h-screen">

      {/* ── Page hero ── */}
      <div className="bg-[var(--bg-subtle)] border-b-[1px] border-b-[var(--border)] p-[80px_48px_48px] max-[767px]:p-[60px_20px_32px] min-[768px]:max-[1023px]:p-[64px_32px_40px]">
        <div className="max-w-[1100px] m-[0_auto]">
          <span className="section-eyebrow block mb-[16px]">{'// TOOLS DIRECTORY'}</span>
          <h1 className="font-sans font-[400] tracking-[-2px] leading-[1.05] text-[var(--text-primary)] m-[0_0_16px_0] text-[clamp(36px,5vw,56px)] max-[767px]:text-[32px] max-[767px]:tracking-[-1px]">Free Finance Calculators for Investors.</h1>
         
          <p className="font-sans text-[15px] text-[var(--text-muted)] leading-[1.6] m-[0]">
            {liveCount} live now · {totalCount - liveCount} more coming soon.
            All free, no sign-up, no data stored.
          </p>
        </div>
      </div>

      {/* ── Category filter ── */}
      <div className="bg-[var(--bg-base)] border-b-[1px] border-b-[var(--border)] px-[48px] max-[767px]:px-[20px] min-[768px]:max-[1023px]:px-[32px] sticky top-[60px] max-[767px]:top-[56px] z-[10]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="flex gap-[0] overflow-x-auto scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-[7px] p-[16px_18px] max-[767px]:p-[14px_12px] bg-transparent border-none border-b-[2px] font-sans text-[13px] max-[767px]:text-[12px] font-[500] cursor-pointer whitespace-nowrap transition-all duration-[0.15s] ease-[ease] mb-[-1px] hover:text-[var(--text-primary)] ${
                  activeCategory === cat.id ? 'text-[var(--accent)] border-b-[var(--accent)]' : 'text-[var(--text-muted)] border-b-transparent'
                }`}
              >
                {cat.label}
                <span className={`font-mono text-[10px] font-[500] border-[1px] rounded-[100px] p-[1px_6px] transition-colors duration-[0.15s] ease-[ease] ${
                  activeCategory === cat.id 
                    ? 'bg-[var(--accent-bg)] border-[var(--accent-border)] text-[var(--accent)]' 
                    : 'bg-[var(--bg-subtle)] border-[var(--border)] text-[var(--text-faint)]'
                }`}>
                  {cat.id === 'all' ? tools.length : tools.filter(t => t.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tools grid ── */}
      <div className="section-wrapper bg-[var(--bg-base)]">
        <div className="max-w-[1100px] m-[0_auto]">
          <div className="grid grid-cols-[repeat(2,1fr)] max-[767px]:grid-cols-[1fr] xl:grid-cols-[repeat(3,1fr)] gap-[12px] max-[767px]:gap-[8px] items-stretch">
            {filtered.map((tool) => {
              const Icon = tool.icon;
              return tool.live ? (
                <a
                  key={tool.name}
                  href={tool.href}
                  className="group card card-hoverable flex flex-col gap-[12px] no-underline text-inherit cursor-pointer p-[22px_24px] min-h-[160px] transition-all duration-[0.15s] ease-[ease]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-[32px] h-[32px] rounded-[8px] bg-[var(--accent-bg)] border-[1px] border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Icon size={16} />
                    </div>
                    <ArrowRight size={14} className="text-[var(--text-faint)] opacity-0 -translate-x-[4px] transition-all duration-[0.15s] ease-[ease] group-hover:opacity-[1] group-hover:translate-x-[0] group-hover:text-[var(--accent)]" />
                  </div>
                  <div className="flex-1 flex flex-col gap-[5px]">
                    <div className="font-sans font-[600] text-[var(--text-primary)] text-[14px] leading-[1.3] whitespace-nowrap max-[767px]:whitespace-normal overflow-hidden text-ellipsis">{tool.name}</div>
                    <div className="font-sans text-[12px] text-[var(--text-muted)] leading-[1.5] line-clamp-2 overflow-hidden">{tool.desc}</div>
                  </div>
                  <div className="flex items-center justify-between gap-[8px]">
                    <span className="font-mono text-[9px] font-[500] tracking-[1px] uppercase rounded-[100px] p-[3px_8px] bg-[var(--accent-bg)] border-[1px] border-[var(--accent-border)] text-[var(--accent)]">Live</span>
                    <span className="font-mono text-[11px] font-[500] text-[var(--accent)] opacity-0 transition-opacity duration-[0.15s] ease-[ease] group-hover:opacity-[1]">Open →</span>
                  </div>
                </a>
              ) : (
                <div key={tool.name} className="card flex flex-col gap-[12px] p-[22px_24px] min-h-[160px] cursor-default opacity-[0.6]">
                  <div className="flex items-center justify-between">
                    <div className="w-[32px] h-[32px] rounded-[8px] bg-[var(--bg-subtle)] border-[1px] border-[var(--border)] flex items-center justify-center text-[var(--text-faint)] shrink-0">
                      <Icon size={16} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-[5px]">
                    <div className="font-sans font-[600] text-[var(--text-muted)] text-[14px] leading-[1.3] whitespace-nowrap max-[767px]:whitespace-normal overflow-hidden text-ellipsis">{tool.name}</div>
                    <div className="font-sans text-[12px] text-[var(--text-muted)] leading-[1.5] line-clamp-2 overflow-hidden">{tool.desc}</div>
                  </div>
                  <div className="flex items-center justify-between gap-[8px]">
                    <span className="font-mono text-[9px] font-[500] tracking-[1px] uppercase rounded-[100px] p-[3px_8px] bg-[var(--bg-subtle)] border-[1px] border-[var(--border)] text-[var(--text-faint)]">Coming Soon</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
