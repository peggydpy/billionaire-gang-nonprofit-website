// src/app/about/page.jsx
export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* WHO WE ARE */}
      <section id="who-we-are" className="py-12 scroll-mt-28">
        <h1 className="text-4xl font-bold mb-3">Who We Are</h1>
        <p>Mission, team, and story coming soon.</p>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-12 scroll-mt-28 border-t mt-8">
        <h1 className="text-4xl font-bold mb-3">What We Do</h1>
        <p>Programs and impact coming soon.</p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-12 scroll-mt-28 border-t mt-8">
        <h1 className="text-4xl font-bold mb-3">How It Works</h1>
        <p>Our model, partners, and process.</p>
      </section>
    </main>
  );
}
