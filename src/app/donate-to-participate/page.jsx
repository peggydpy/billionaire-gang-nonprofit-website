export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* HERO (keep your existing hero here) */}
      <section className="py-12" id="home">
        {/* your hero content */}
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 scroll-mt-28" id="who-we-are">
        <h1 className="text-4xl font-bold mb-3">Who We Are</h1>
        <p>Mission, team, and story coming soon.</p>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 scroll-mt-28" id="what-we-do">
        <h1 className="text-4xl font-bold mb-3">What We Do</h1>
        <p>Programs and impact coming soon.</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 scroll-mt-28" id="how-it-works">
        <h1 className="text-4xl font-bold mb-3">How It Works</h1>
        <p>Our model, partners, and process.</p>
      </section>
    </main>
  );
}

