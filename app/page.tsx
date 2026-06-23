const secondaryTools = [
  {
    href: "/emergency-fund-calculator",
    label: "Emergency Fund Calculator"
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="detail-section" aria-labelledby="home-title">
        <div>
          <p className="eyebrow">Primary calculator</p>
          <h1 id="home-title">Compound Interest Calculator</h1>
          <p>Grow your money over time with compound interest</p>
        </div>

        <div>
          <p>
            <span aria-hidden="true">{"\u2713"}</span> Calculate future value
            instantly
          </p>
          <p>
            <span aria-hidden="true">{"\u2713"}</span> See investment growth
            clearly
          </p>

          <p>
            <a href="/compound-interest">Compound Interest Calculator</a>
          </p>

          <nav aria-label="Secondary calculators">
            {secondaryTools.map((tool) => (
              <p key={tool.href}>
                <a href={tool.href}>{tool.label}</a>
              </p>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
