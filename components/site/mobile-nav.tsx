"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Sparkles, Home, Package, Gem, ClipboardList } from "lucide-react";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Shop All", icon: Package },
  { href: "/products?category=cosmetics", label: "Cosmetics", icon: Sparkles },
  { href: "/products?category=jewellery", label: "Jewellery", icon: Gem },
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
        <Menu className="h-4.5 w-4.5" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-liz-espresso/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar drawer */}
      <aside
        aria-label="Navigation menu"
        className={`fixed inset-y-0 left-0 z-50 flex w-[300px] flex-col bg-white shadow-[6px_0_48px_rgba(42,27,22,0.22)] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-liz-gold/12 bg-liz-champagne/60 px-5 py-4">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-liz-espresso text-xs font-bold text-liz-gold ring-2 ring-liz-gold/20">GL</span>
            <span className="font-display text-lg font-semibold tracking-tight text-liz-espresso">Golden Liz</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-liz-gold/10 hover:text-foreground"
            aria-label="Close navigation menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tagline */}
        <p className="px-5 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-liz-goldDeep/60">
          Explore
        </p>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-3">
          <ul className="space-y-0.5">
            {nav.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  prefetch={false}
                  className="flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-liz-champagne hover:text-liz-goldDeep"
                >
                  <Icon className="h-4 w-4 shrink-0 text-liz-goldDeep/60" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA actions */}
        <div className="space-y-2.5 border-t border-liz-gold/10 bg-liz-champagne/40 px-5 pb-8 pt-5">
          <Link
            href="/#consultation"
            onClick={() => setOpen(false)}
            prefetch={false}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-liz-espresso px-4 py-3 text-sm font-semibold text-liz-gold shadow-md transition hover:bg-liz-espresso/90"
          >
            <Sparkles className="h-4 w-4" />
            Book a Consultation
          </Link>
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            prefetch={false}
            className="flex items-center justify-center gap-2.5 rounded-xl border border-liz-gold/30 bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-liz-gold/60 hover:bg-liz-champagne"
          >
            <ShoppingBag className="h-4 w-4" />
            Shopping Bag
          </Link>
        </div>
      </aside>
    </>
  );
}
