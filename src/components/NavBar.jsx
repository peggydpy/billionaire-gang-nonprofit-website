import Link from "next/link";

const links = [
  { href: "/who-we-are",   label: "WHO WE ARE" },
  { href: "/what-we-do",   label: "WHAT WE DO" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  // "PARTNER WITH US" will be a special button rendered separately
  { href: "/more",         label: "MORE..." },
  { href: "/login",        label: "LOG IN" },
];

export default function NavBar() {
  const row = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const tab = { fontSize: 14, color: "#fff", textDecoration: "none", fontWeight: 700, opacity: 0.9 };
  const bar = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    // transparent/overlay look like your screenshot
    background: "rgba(0,0,0,0.5)",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(6px)",
  };

  const pill = {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: 999,
    background: "#10A6C9", // teal
    color: "white",
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: 0.2,
    whiteSpace: "nowrap",
  };

  return (
    <header style={bar}>
      <div style={row}>
        {/* Left: Logo + brand */}
        <Link href="/" style={{ textDecoration: "none" }}>
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

    
<Link href="/" style={{ textDecoration: "none" }}>
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <img src="/logo.png" alt="page/Logo.png" width="40" height="40" style={{ display: "block" }} />
    <span style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>Billionaire Gang</span>
  </div>
</Link>

        {/* Right: Tabs */}
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={tab}>{l.label}</Link>
          ))}
          {/* Call-to-action button */}
          <Link href="/partner" style={pill}>PARTNER WITH US</Link>
        </nav>
      </div>
    </header>
  );
}

        
