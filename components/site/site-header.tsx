import Link from "next/link";
import { ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/products?category=cosmetics", label: "Cosmetics" },
  { href: "/products?category=jewellery", label: "Jewellery" },
  { href: "/account", label: "Orders" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-liz-gold/15 bg-background shadow-[0_1px_0_rgba(201,162,39,0.10)]">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link href="/" prefetch={false} className="flex items-center gap-2.5" aria-label="Golden Liz home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-liz-espresso text-xs font-bold text-liz-gold ring-2 ring-liz-gold/15 shadow-soft">GL</span>
            <span className="font-display text-xl font-semibold tracking-tight text-liz-espresso">Golden Liz</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="relative py-1 transition hover:text-liz-goldDeep after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-liz-gold after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden rounded-full text-muted-foreground hover:bg-liz-champagne hover:text-liz-goldDeep md:flex"
            aria-label="Open beauty consultation"
          >
            <Link href="/#consultation" prefetch={false}><Sparkles className="h-4.5 w-4.5" /></Link>
          </Button>
          <Button
            asChild
            size="icon"
            className="rounded-full bg-liz-espresso text-liz-gold shadow-soft hover:bg-liz-espresso/90"
            aria-label="Open shopping bag"
          >
            <Link href="/cart" prefetch={false}><ShoppingBag className="h-4.5 w-4.5" /></Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
