import Link from "next/link";
import { ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/products?category=cosmetics", label: "Cosmetics" },
  { href: "/products?category=jewellery", label: "Jewellery" },
  { href: "/account", label: "Orders" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-liz-gold/10 bg-background/88 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" prefetch={false} className="flex items-center gap-2" aria-label="Golden Liz home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-liz-espresso text-sm font-bold text-liz-gold shadow-soft">GL</span>
          <span className="font-display text-xl font-semibold tracking-tight">Golden Liz</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false} className="transition hover:text-liz-goldDeep">{item.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="Open beauty consultation">
            <Link href="/#consultation" prefetch={false}><Sparkles className="h-5 w-5" /></Link>
          </Button>
          <Button asChild size="icon" aria-label="Open shopping bag">
            <Link href="/cart" prefetch={false}><ShoppingBag className="h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
