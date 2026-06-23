import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator \u2013 How Much You Need to Survive 3\u201312 Months",
  description:
    "Understand your financial safety level in under 30 seconds with an emergency fund calculator based on real monthly expenses."
};

export default function EmergencyFundCalculatorPage() {
  return (
    <main className="page-shell">
      <section className="detail-section" aria-labelledby="emergency-fund-title">
        <div>
          <p className="eyebrow">Emergency planning</p>
          <h1 id="emergency-fund-title">Emergency Fund Calculator</h1>
          <p>How much money do you need to survive 3&ndash;12 months?</p>
        </div>

        <div>
          <h2>Understand your financial safety level in under 30 seconds.</h2>
          <p>
            <span aria-hidden="true">{"\u2713"}</span> Based on real monthly
            expenses
          </p>
          <p>
            <span aria-hidden="true">{"\u2713"}</span> Used for emergency
            planning &amp; financial safety
          </p>

          <p>
            <a href="/emergency-fund-calculator#calculator">
              Emergency Fund Calculator
            </a>
          </p>
          <p>
            <a href="/compound-interest">Compound Interest Calculator</a>
          </p>

          <form className="input-grid" id="calculator">
            <label htmlFor="monthly-expenses">
              <span>Monthly expenses</span>
              <input
                defaultValue="3000"
                id="monthly-expenses"
                min="0"
                step="100"
                type="number"
              />
            </label>
            <label htmlFor="months-to-cover">
              <span>Months to cover</span>
              <input
                defaultValue="6"
                id="months-to-cover"
                max="12"
                min="3"
                step="1"
                type="number"
              />
            </label>
          </form>

          <p>
            Recommended emergency fund:{" "}
            <strong id="emergency-fund-result">$18,000</strong>
          </p>
        </div>
      </section>
      <Script id="emergency-fund-calculator-logic">
        {`
          (() => {
            const expensesInput = document.getElementById("monthly-expenses");
            const monthsInput = document.getElementById("months-to-cover");
            const result = document.getElementById("emergency-fund-result");

            if (!expensesInput || !monthsInput || !result) return;

            const formatCurrency = (value) =>
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0
              }).format(value);

            const updateResult = () => {
              const monthlyExpenses = Number(expensesInput.value) || 0;
              const months = Math.min(12, Math.max(3, Number(monthsInput.value) || 3));
              result.textContent = formatCurrency(monthlyExpenses * months);
            };

            expensesInput.addEventListener("input", updateResult);
            monthsInput.addEventListener("input", updateResult);
            updateResult();
          })();
        `}
      </Script>
    </main>
  );
}
