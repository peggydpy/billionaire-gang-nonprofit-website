import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate" },
  { href: "/shop", label: "Shop" },
  { href: "/book", label: "Book" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backdropFilter: "blur(6px)", background: "rgba(255,255,255,0.85)",
      borderBottom: "1px solid #eee"
    }}>
      <div style={{
        maxWidth: 960, margin: "0 auto",
        padding: "12px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 18, textDecoration: "none", color: "#111" }}>
          Billionaire Gang
        </Link>
        <nav style={{display: "flex", gap: 16}}>
          {nav.map(item => (
            <Link key={item.href} href={item.href}
              style={{ fontSize: 14, color: "#333", textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
