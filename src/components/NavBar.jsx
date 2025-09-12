// src/components/NavBar.jsx
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
    { href: "/partner", label: "Partner" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <img
            src="/logo.png"
            alt="Billionaire Gang"
            width="48"
            height="48"
            style={{ objectFit: "contain", borderRadius: 8 }}
          />
          <span>Billionaire Gang</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden px-3 py-1 rounded-lg border"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA on the far right */}
        <Link
          href="/donate-to-participate"
          className="hidden md:inline-flex ml-4 px-4 py-2 rounded-xl border bg-teal-500 text-white font-medium hover:shadow-sm active:translate-y-px transition"
          aria-label="Donate to Participate"
        >
          Donate to Participate
        </Link>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t">
          <ul className="p-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate-to-participate"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center px-4 py-2 rounded-xl border bg-teal-500 text-white font-medium"
              >
                Donate to Participate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

