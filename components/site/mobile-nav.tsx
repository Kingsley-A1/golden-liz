"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu, X, ShoppingBag, Sparkles,
  Home, Package, Gem, ClipboardList, Droplets, Wind, ShoppingCart
} from "lucide-react";

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
        className="flex h-9 w-9 items-center justify-center rounded-full border border-liz-gold/20 bg-white text-foreground shadow-sm transition hover:bg-liz-champagne md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-liz-espresso/65 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/*
        Sidebar — the key pattern for scrollable content pinned inside a fixed panel:
          aside   : flex flex-col overflow-hidden  (clips children, enables flex layout)
          nav     : flex-1 min-h-0 overflow-y-auto  (min-h-0 lets flex-1 shrink below content height)
        Without overflow-hidden on the parent and min-h-0 on the scrollable child,
        the nav collapses to 0 height and the links disappear.
      */}
      <aside
        aria-label="Navigation menu"
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-1/2 min-w-[200px] max-w-[260px] flex-col overflow-hidden bg-white transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ boxShadow: "6px 0 40px rgba(35,23,17,0.28)" }}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-liz-gold/15 bg-liz-champagne px-4 py-3.5">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-liz-espresso text-[11px] font-bold text-liz-gold">
              GL
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-liz-espresso">
              Golden Liz
            </span>
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
        <p className="shrink-0 px-4 pb-1 pt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-liz-goldDeep/55">
          Navigate
        </p>

        {/* Nav links — min-h-0 is essential to allow flex-1 to shrink and overflow-y-auto to work */}
        <nav className="min-h-0 flex-1 overflow-y-auto bg-white px-2 pb-2">
          <ul className="space-y-0.5">
            {nav.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  prefetch={false}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-foreground transition hover:bg-liz-champagne hover:text-liz-goldDeep"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-liz-goldDeep/55" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTAs */}
        <div className="shrink-0 space-y-2 border-t border-liz-gold/10 bg-liz-champagne px-4 pb-8 pt-4">
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
            className="flex items-center justify-center gap-2 rounded-lg border border-liz-gold/25 bg-white px-3 py-2.5 text-[12px] font-semibold text-foreground shadow-sm transition hover:border-liz-gold/50 hover:bg-liz-champagne/60"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Shopping Bag
          </Link>
        </div>
      </aside>
    </>
  );
}
