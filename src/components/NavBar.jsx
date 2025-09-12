// src/components/NavBar.jsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
  { href: "/donate-to-participate", label: "Donate to Participate" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
  { href: "/partner", label: "Partner" },
];


  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
  <Image
    src="/logo.png"     // ensure your file is public/logo.png
    alt="Billionaire Gang"
    width={128}
    height={128}
    priority
  />
  <span>Billionaire Gang</span>
</Link>
      
        <button
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t">
          <ul className="p-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                  <li>
                    <li>
  <Link
    href="/donate-to-participate"
    onClick={() => setOpen(false)}
    className="inline-flex w-full justify-center px-4 py-2 rounded-xl border bg-teal-500 text-white font-medium"
  >
    Donate to Participate
  </Link>
</li>

                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

