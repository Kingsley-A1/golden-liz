import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default function CartPage() {
  const items = getFeaturedProducts().slice(0, 3);
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const delivery = 2500;

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Your Bag</p>
        <h1 className="font-display text-4xl md:text-6xl">Review your Golden Liz picks.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex gap-4 p-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-muted">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Qty 1</p>
                </div>
                <p className="font-semibold">{formatCurrency(item.price)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between text-sm"><span>Delivery estimate</span><span>{formatCurrency(delivery)}</span></div>
            <div className="h-px bg-border" />
            <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>{formatCurrency(subtotal + delivery)}</span></div>
            <Button asChild className="w-full"><Link href="/checkout">Proceed to Checkout</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/products">Continue Shopping</Link></Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
