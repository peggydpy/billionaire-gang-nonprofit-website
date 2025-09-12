export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 8 }}>
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

      </h1>
      {/* Add tagline here later if you want */}
    </main>
  );
}

