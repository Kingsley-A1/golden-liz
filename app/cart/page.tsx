import Image from "next/image";
import Link from "next/link";
import { Gift, PackageCheck, ShoppingBag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCartPreview, getRecommendedProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default function CartPage({ searchParams }: { searchParams?: { item?: string } }) {
  const itemSlug = searchParams?.item;
  const items = getCartPreview(itemSlug);
  const recommended = getRecommendedProducts(items.map((item) => item.id));
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const delivery = 2500;
  const checkoutHref = itemSlug ? `/checkout?item=${itemSlug}` : "/checkout";

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Your Bag</p>
        <h1 className="font-display text-4xl md:text-6xl">Review your Golden Liz picks.</h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          This demo keeps the bag lightweight and transparent, so the client can see how product selection turns into a clear checkout flow.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-6">
          <div className="grid gap-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="grid gap-4 p-4 sm:grid-cols-[112px_1fr_auto] sm:items-center">
                  <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-muted sm:w-28">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="112px" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-liz-goldDeep">{item.category}</p>
                    <h2 className="mt-1 font-semibold">{item.name}</h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-liz-champagne px-3 py-1">Qty 1</span>
                      <span className="rounded-full bg-liz-champagne px-3 py-1">{item.stock} in stock</span>
                    </div>
                  </div>
                  <p className="font-semibold sm:text-right">{formatCurrency(item.price)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-liz-champagne/70">
            <CardHeader>
              <CardTitle>Complete the set</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {recommended.map((item) => (
                <Link
                  key={item.id}
                  href={`/cart?item=${item.slug}`}
                  prefetch={false}
                  className="group grid grid-cols-[72px_1fr] gap-3 rounded-2xl border bg-white p-3 transition hover:border-liz-gold/60"
                >
                  <div className="relative h-20 overflow-hidden rounded-xl bg-muted">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition group-hover:scale-105" sizes="72px" />
                  </div>
                  <div>
                    <p className="line-clamp-1 text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-liz-goldDeep">{formatCurrency(item.price)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Add as demo item</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-3">
            <TrustPoint icon={<PackageCheck className="h-4 w-4" />} label="Reserved before packing" />
            <TrustPoint icon={<Truck className="h-4 w-4" />} label="Delivery estimate shown" />
            <TrustPoint icon={<Gift className="h-4 w-4" />} label="Gift note supported" />
          </div>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between text-sm"><span>Delivery estimate</span><span>{formatCurrency(delivery)}</span></div>
            <div className="flex justify-between text-sm text-muted-foreground"><span>Mock payment</span><span>Not collected</span></div>
            <div className="h-px bg-border" />
            <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>{formatCurrency(subtotal + delivery)}</span></div>
            <Button asChild className="w-full"><Link href={checkoutHref} prefetch={false}>Proceed to Checkout</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/products" prefetch={false}>Continue Shopping</Link></Button>
            <div className="rounded-2xl bg-liz-cream p-4 text-sm leading-6 text-muted-foreground">
              <ShoppingBag className="mb-2 h-4 w-4 text-liz-goldDeep" />
              Customers can review the exact item, delivery estimate, and next step before confirming a mock order.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function TrustPoint({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-white p-4 text-sm font-medium text-liz-charcoal shadow-soft">
      <span className="text-liz-goldDeep">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
