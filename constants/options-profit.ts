export const faqs = [
  {
    q: "What is an options profit calculator?",
    a: "An options profit calculator shows your profit or loss at expiry for any options position — long call, long put, short call, or short put — based on the strike price, premium paid or received, number of contracts, and where the stock price ends up. It draws a P&L chart across a range of expiry prices so you can see exactly where you profit, where you break even, and where you lose — before you place the trade.",
  },
  {
    q: "How is options profit calculated?",
    a: "At expiry, an option is worth only its intrinsic value — the difference between the stock price and the strike price, or zero if the option is out of the money. For a long call: profit equals (stock price minus strike price minus premium) multiplied by 100 times the number of contracts. For a long put: profit equals (strike price minus stock price minus premium) times 100 times contracts. Short positions flip the sign — you keep the premium if the option expires worthless, but face losses if the option is exercised against you.",
  },
  {
    q: "What is the breakeven price for a call option?",
    a: "For a long call, the breakeven price at expiry is the strike price plus the premium paid. For example, if you buy a call with a $150 strike and pay $5 in premium, you need the stock to be above $155 at expiry to profit. Below $155 you lose money, and below $150 the option expires worthless and you lose the full $500 premium per contract.",
  },
  {
    q: "What is the breakeven price for a put option?",
    a: "For a long put, the breakeven price is the strike price minus the premium paid. If you buy a put with a $150 strike for $8, the stock must fall below $142 at expiry for the trade to be profitable. Between $142 and $150 the put has some value but not enough to cover your premium. Above $150 the put expires worthless and you lose the full $800 per contract.",
  },
  {
    q: "What is the maximum loss on a long call or long put?",
    a: "The maximum loss on any long option (call or put) is exactly the premium paid — nothing more. If you pay $500 for one call contract and the stock moves against you, the worst outcome is losing that $500. This defined risk is one of the key advantages of buying options versus shorting stock, where losses are theoretically unlimited.",
  },
  {
    q: "What is the risk of selling (shorting) options?",
    a: "Short calls carry theoretically unlimited risk — if you sell a call and the stock surges, your losses grow without a ceiling. Short puts have a maximum loss equal to the strike price minus the premium received times 100 times contracts — this occurs if the stock drops to zero. Both short positions require margin in your brokerage account. This calculator shows the full downside on the P&L chart so you can see the risk clearly before selling.",
  },
  {
    q: "Does this calculator account for time value or the Greeks?",
    a: "No. This calculator shows P&L at expiry only, based on intrinsic value. It does not model time decay (theta), implied volatility changes (vega), delta, or gamma. These factors affect the option's price before expiry significantly. For expiry-based decisions — setting price targets, understanding max loss, or planning covered calls — this calculator is accurate. For actively trading options before expiry, you also need to consider the Greeks.",
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
    desc: "See how compounding grows money over time",
    href: "/tools/compound-interest-calculator",
  },
  {
    name: "Dividend Calculator",
    desc: "Estimate dividend income and DRIP growth from any portfolio",
    href: "/tools/dividend-calculator",
  },
];