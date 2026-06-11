"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Sparkles, Home, Package, Gem, ClipboardList, Droplets, Wind, ShoppingCart } from "lucide-react";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Shop All", icon: Package },
  { href: "/products?category=cosmetics", label: "Cosmetics", icon: Sparkles },
  { href: "/products?category=skincare", label: "Skincare", icon: Droplets },
  { href: "/products?category=jewellery", label: "Jewellery", icon: Gem },
  { href: "/products?category=fragrance", label: "Fragrance", icon: Wind },
  { href: "/cart", label: "Cart", icon: ShoppingCart },
  { href: "/account", label: "My Orders", icon: ClipboardList },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-liz-gold/20 bg-white/70 text-foreground shadow-sm transition hover:bg-liz-champagne md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Full-page backdrop — covers the 50% of the page not occupied by the drawer */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-liz-espresso/60 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar drawer — exactly 50% viewport width so the overlay shows on the other 50% */}
      <aside
        aria-label="Navigation menu"
        className={`fixed inset-y-0 left-0 z-50 flex w-1/2 min-w-[200px] max-w-[260px] flex-col bg-white shadow-[6px_0_48px_rgba(35,23,17,0.28)] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-liz-gold/12 bg-liz-champagne/70 px-4 py-3.5">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-liz-espresso text-[11px] font-bold text-liz-gold ring-2 ring-liz-gold/20">GL</span>
            <span className="font-display text-base font-semibold tracking-tight text-liz-espresso">Golden Liz</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition hover:bg-liz-gold/10 hover:text-foreground"
            aria-label="Close navigation menu"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Section label */}
        <p className="px-4 pb-1.5 pt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-liz-goldDeep/55">
          Navigate
        </p>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-2">
          <ul className="space-y-0.5">
            {nav.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  prefetch={false}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-foreground/80 transition hover:bg-liz-champagne hover:text-liz-goldDeep"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-liz-goldDeep/55" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="space-y-2 border-t border-liz-gold/10 bg-liz-champagne/40 px-4 pb-7 pt-4">
          <Link
            href="/#consultation"
            onClick={() => setOpen(false)}
            prefetch={false}
            className="flex items-center justify-center gap-2 rounded-lg bg-liz-espresso px-3 py-2.5 text-[12px] font-semibold text-liz-gold shadow transition hover:bg-liz-espresso/90"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Consultation
          </Link>
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            prefetch={false}
            className="flex items-center justify-center gap-2 rounded-lg border border-liz-gold/30 bg-white px-3 py-2.5 text-[12px] font-semibold text-foreground shadow-sm transition hover:border-liz-gold/60 hover:bg-liz-champagne"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Shopping Bag
          </Link>
        </div>
      </aside>
    </>
  );
}
