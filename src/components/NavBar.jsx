// src/components/NavBar.jsx
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Billionaire Gang</Link>

        <nav aria-label="Primary">
          <ul className="flex gap-6">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
