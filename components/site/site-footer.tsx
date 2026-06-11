import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-liz-gold/10 bg-liz-espresso text-liz-cream">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-liz-gold text-sm font-bold text-white">GL</span>
            <span className="font-display text-2xl">Golden Liz</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-liz-cream/75">
            Boutique cosmetics and jewellery curated for women who love soft luxury, polished details, and confident everyday beauty.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Shop</h3>
          <div className="grid gap-2 text-sm text-liz-cream/75">
            <Link href="/products">All products</Link>
            <Link href="/products">New arrivals</Link>
            <Link href="/products">Gift picks</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Contact</h3>
          <div className="grid gap-2 text-sm text-liz-cream/75">
            <span>WhatsApp: 0800 000 0000</span>
            <span>Instagram: @goldenliz_boutique</span>
            <span>Delivery: Calabar and nationwide</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-liz-cream/60">
        Prototype built for client demonstration by Bespoke Technologies.
      </div>
    </footer>
  );
}
