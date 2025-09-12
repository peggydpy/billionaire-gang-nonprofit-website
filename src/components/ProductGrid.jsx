// src/components/ProductGrid.jsx
import Link from "next/link";

const products = [
  {
    id: "h3o-mint",
    name: "H3O+ — Clove & Mint",
    price: "$3 / bottle",
    img: "/logo.png", // swap later to real product image in /public/products/*
    blurb: "Hydration with natural mint + clove.",
  },
  {
    id: "h3o-kiwi",
    name: "H3O+ — Kiwi",
    price: "$3 / bottle",
    img: "/logo.png",
    blurb: "Bright, refreshing kiwi infusion.",
  },
  {
    id: "h3o-blueberry",
    name: "H3O+ — Blueberry",
    price: "$3 / bottle",
    img: "/logo.png",
    blurb: "Lightly sweet blueberry hydration.",
  },
  {
    id: "h3o-cucumber",
    name: "H3O+ — Cucumber",
    price: "$3 / bottle",
    img: "/logo.png",
    blurb: "Clean, crisp cucumber water.",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-4xl font-bold">Donate to Participate</h2>
          <Link href="/#contact" className="text-sm underline">
            Wholesale & events →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border bg-white/70 backdrop-blur p-4 flex flex-col"
            >
              <div className="aspect-square w-full rounded-xl overflow-hidden border">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-contain"
                  width="512"
                  height="512"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.blurb}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">{p.price}</span>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 rounded-xl border hover:shadow-sm"
                    onClick={() => alert(`Added 1 ${p.name} (demo)`)}
                  >
                    Add
                  </button>
                  <button
                    className="px-3 py-1 rounded-xl border hover:shadow-sm"
                    onClick={() => alert(`${p.name} — details coming soon`)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
