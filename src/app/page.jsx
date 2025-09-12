// src/app/page.jsx
export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* HERO */}
      <section className="py-12" id="home">
        <div className="flex items-center gap-6">
          <img
            src="/logo.png"
            alt="Billionaire Gang logo"
            width="256"
            height="256"
            style={{ objectFit: "contain", borderRadius: 16 }}
          />
          <h1 className="text-6xl font-extrabold">Billionaire Gang</h1>
        </div>
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
