import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator – How Much You Need to Survive 3–12 Months",
  description:
    "Estimate how much emergency savings you need to cover 3, 6, or 12 months of essential expenses."
};

export default function EmergencyFundCalculatorPage() {
  return (
    <main className="page-shell">
      <section className="detail-section" aria-labelledby="emergency-fund-title">
        <div>
          <p className="eyebrow">Emergency planning</p>
          <h1 id="emergency-fund-title">
            Emergency Fund Calculator (How Much You Need to Stay Financially Safe)
          </h1>
          <p>
            Job loss risk, unexpected expenses, and financial instability can
            quickly turn a normal month into a cash-flow emergency.
          </p>
        </div>

        <div>
          <h2>Calculate Your Emergency Savings Target</h2>
          <p>
            Calculate how many months of emergency savings you need based on
            monthly expenses.
          </p>

          <h2>Emergency Fund Formula</h2>
          <p>
            Emergency Fund = Monthly Expenses × 3 / 6 / 12 months
          </p>

          <p>
            <a href="#calculator">Start planning your emergency fund → Use calculator</a>
          </p>
        </div>
      </section>
    </main>
  );
}
