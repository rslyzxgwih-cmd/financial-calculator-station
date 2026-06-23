"use client";

import { useMemo, useState } from "react";

type Projection = {
  futureValue: number;
  totalContributions: number;
  interestEarned: number;
  yearlyRows: Array<{
    year: number;
    balance: number;
    contributions: number;
    interest: number;
  }>;
};

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function percent(value: number) {
  return `${value.toFixed(2)}%`;
}

function calculateProjection(
  principal: number,
  monthlyContribution: number,
  annualRate: number,
  years: number
): Projection {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualRate / 100 / 12;
  let balance = principal;
  let totalContributions = principal;
  const yearlyRows: Projection["yearlyRows"] = [];

  for (let month = 1; month <= months; month += 1) {
    balance *= 1 + monthlyRate;
    balance += monthlyContribution;
    totalContributions += monthlyContribution;

    if (month % 12 === 0 || month === months) {
      const year = Math.ceil(month / 12);
      yearlyRows.push({
        year,
        balance,
        contributions: totalContributions,
        interest: Math.max(0, balance - totalContributions)
      });
    }
  }

  return {
    futureValue: balance,
    totalContributions,
    interestEarned: Math.max(0, balance - totalContributions),
    yearlyRows
  };
}

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);

  const projection = useMemo(
    () => calculateProjection(principal, monthlyContribution, annualRate, years),
    [principal, monthlyContribution, annualRate, years]
  );

  const interestShare =
    projection.futureValue > 0
      ? (projection.interestEarned / projection.futureValue) * 100
      : 0;

  return (
    <main className="page-shell">
      <section className="calculator-layout" aria-labelledby="page-title">
        <div className="intro-panel">
          <p className="eyebrow">Investment planning</p>
          <h1 id="page-title">Compound Interest Calculator</h1>
          <p className="lede">
            Estimate how an opening balance, recurring monthly savings, and an
            annual return can grow over time.
          </p>

          <form className="input-grid">
            <label>
              <span>Starting balance</span>
              <input
                type="number"
                min="0"
                step="100"
                value={principal}
                onChange={(event) => setPrincipal(Number(event.target.value))}
              />
            </label>
            <label>
              <span>Monthly contribution</span>
              <input
                type="number"
                min="0"
                step="25"
                value={monthlyContribution}
                onChange={(event) =>
                  setMonthlyContribution(Number(event.target.value))
                }
              />
            </label>
            <label>
              <span>Annual return</span>
              <input
                type="number"
                min="0"
                max="30"
                step="0.1"
                value={annualRate}
                onChange={(event) => setAnnualRate(Number(event.target.value))}
              />
            </label>
            <label>
              <span>Years to grow</span>
              <input
                type="number"
                min="1"
                max="60"
                step="1"
                value={years}
                onChange={(event) => setYears(Number(event.target.value))}
              />
            </label>
          </form>
        </div>

        <aside className="result-panel" aria-label="Projection results">
          <p className="panel-label">Projected balance</p>
          <strong className="balance">{currency(projection.futureValue)}</strong>
          <dl className="metrics">
            <div>
              <dt>Total contributions</dt>
              <dd>{currency(projection.totalContributions)}</dd>
            </div>
            <div>
              <dt>Interest earned</dt>
              <dd>{currency(projection.interestEarned)}</dd>
            </div>
            <div>
              <dt>Interest share</dt>
              <dd>{percent(interestShare)}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="detail-section" aria-labelledby="breakdown-title">
        <div>
          <p className="eyebrow">Decision support</p>
          <h2 id="breakdown-title">What this result means</h2>
          <p>
            The projection separates the money you put in from the return earned
            on that money. A longer timeline gives compounding more room to
            contribute to the ending balance.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Balance</th>
                <th>Contributions</th>
                <th>Interest</th>
              </tr>
            </thead>
            <tbody>
              {projection.yearlyRows.slice(0, 12).map((row) => (
                <tr key={row.year}>
                  <td>{row.year}</td>
                  <td>{currency(row.balance)}</td>
                  <td>{currency(row.contributions)}</td>
                  <td>{currency(row.interest)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
