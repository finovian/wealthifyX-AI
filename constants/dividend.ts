export const faqs = [
  {
    q: "What is a dividend calculator?",
    a: "A dividend calculator projects how much income your dividend-paying stocks will generate over time — and how much your portfolio will grow. You enter your share count, dividend per share or yield, expected stock price growth, dividend growth rate, and holding period. The calculator shows your annual dividend income, total dividends received over the full period, final portfolio value, and yield on cost — the return on your original investment as dividends grow over time.",
  },
  {
    q: "What is DRIP and how does it affect returns?",
    a: "DRIP stands for Dividend Reinvestment Plan. Instead of taking dividends as cash, every dividend payment automatically buys additional fractional shares at the current price. This creates compounding — your new shares pay dividends, which buy more shares, which pay more dividends. Over long periods, DRIP significantly outperforms taking dividends as cash. This calculator models DRIP with quarterly compounding, which is how most dividend reinvestment plans work in practice.",
  },
  {
    q: "What is yield on cost?",
    a: "Yield on cost is your annual dividend income divided by your original cost basis — not the current market price. If you bought a stock at $50 with a $2 annual dividend (4% yield), and the dividend has since grown to $5 while you still own the original shares, your yield on cost is 10% even though the current yield on today's higher price might be lower. Long-term dividend investors track yield on cost because it shows the true income return on what they actually paid.",
  },
  {
    q: "What dividend growth rate should I use?",
    a: "Dividend Aristocrats — S&P 500 companies that have raised dividends for 25+ consecutive years — have historically grown dividends at 6–8% annually. The broader market's average dividend growth is closer to 5–6%. Conservative projections use 3–4%. High-yield sectors like utilities or REITs often grow dividends more slowly (2–3%) while paying higher initial yields. For a realistic long-term projection, 5% dividend growth is a reasonable default for a diversified dividend portfolio.",
  },
  {
    q: "What stock growth rate should I use?",
    a: "For a diversified dividend stock portfolio, 5–7% annual price appreciation is a reasonable estimate — dividend stocks typically appreciate somewhat slower than pure growth stocks because they return capital as cash rather than reinvesting all earnings. The S&P 500 has averaged ~10.7% nominal returns including dividends, so stripping out the dividend component leaves roughly 6–8% price appreciation. Use 0% if you want to model dividend income alone without any price growth.",
  },
  {
    q: "How are dividends taxed?",
    a: "Qualified dividends — paid by U.S. corporations or qualifying foreign corporations on stock held for at least 60 days — are taxed at long-term capital gains rates: 0%, 15%, or 20% depending on your income. Ordinary dividends, including those from REITs, money market funds, and short-held positions, are taxed at your ordinary income rate (10%–37%). Dividends inside a Roth IRA or 401(k) are either tax-free or tax-deferred. This calculator shows pre-tax returns — subtract your marginal dividend tax rate for an after-tax estimate.",
  },
];

export const relatedTools = [
  {
    name: "Investment Calculator",
    desc: "Project long-term portfolio growth with custom return rates",
    href: "/tools/investment-calculator",
  },
  {
    name: "Capital Gains Tax Calculator",
    desc: "Estimate federal capital gains tax on investment profits",
    href: "/tools/capital-gains-calculator",
  },
  {
    name: "Compound Interest Calculator",
    desc: "See how compounding grows money across different frequencies",
    href: "/tools/compound-interest-calculator",
  },
  {
    name: "Roth IRA Calculator",
    desc: "Project tax-free retirement growth with IRS contribution limits",
    href: "/tools/roth-ira-calculator",
  },
];