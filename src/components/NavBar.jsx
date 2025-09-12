// src/components/NavBar.jsx
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // mobile dropdown

  const otherLinks = [
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
            {/* About (dropdown) */}
            <li className="relative group">
              <Link href="/about#who-we-are" className="hover:underline">
                Who We Are
              </Link>
              {/* dropdown panel on hover */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                              absolute left-0 mt-2 w-56 rounded-xl border bg-white shadow p-2">
                <Link href="/about#who-we-are" className="block px-3 py-2 rounded-lg hover:bg-gray-50">
                  Who We Are
                </Link>
                <Link href="/about#what-we-do" className="block px-3 py-2 rounded-lg hover:bg-gray-50">
                  What We Do
                </Link>
                <Link href="/about#how-it-works" className="block px-3 py-2 rounded-lg hover:bg-gray-50">
                  How It Works
                </Link>
              </div>
            </li>

            {otherLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/donate-to-participate"
          className="hidden md:inline-flex ml-4 px-4 py-2 rounded-xl border bg-teal-500 text-white font-medium hover:shadow-sm active:translate-y-px transition"
        >
          Donate to Participate
        </Link>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t">
          <ul className="p-4 space-y-3">
            {/* About with nested items */}
            <li>
              <button
                className="w-full text-left px-3 py-2 rounded-lg border"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((v) => !v)}
              >
                Who We Are
              </button>
              {aboutOpen && (
                <ul className="mt-2 ml-3 space-y-2">
                  <li>
                    <Link href="/about#who-we-are" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#what-we-do" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">
                      What We Do
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#how-it-works" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">
                      How It Works
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {otherLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">
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
