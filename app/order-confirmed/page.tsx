import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock3, PackageCheck, ShoppingBag, Truck } from "lucide-react";
import { getCartPreview } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

const timeline = [
  { label: "Order reserved", icon: CheckCircle2, active: true },
  { label: "Boutique confirmation", icon: Clock3, active: true },
  { label: "Packed with care", icon: PackageCheck, active: false },
  { label: "Out for delivery", icon: Truck, active: false }
];

export default function OrderConfirmedPage({ searchParams }: { searchParams?: { order?: string; item?: string } }) {
  const orderId = searchParams?.order ?? "GLZ-2410";
  const items = getCartPreview(searchParams?.item);
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + 2500;

  return (
    <section className="container py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Card className="text-center shadow-glow">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-liz-champagne text-liz-goldDeep">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Order Confirmed</p>
            <h1 className="font-display text-4xl md:text-6xl">Your Golden Liz order is reserved.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Order {orderId} has entered the confirmation lifecycle. The boutique team will confirm availability, package your items, and contact you for delivery.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-4">
              {timeline.map((step) => (
                <div key={step.label} className="rounded-2xl border bg-white p-4 text-left shadow-soft">
                  <step.icon className={step.active ? "h-5 w-5 text-liz-goldDeep" : "h-5 w-5 text-muted-foreground"} />
                  <p className="mt-3 text-sm font-semibold">{step.label}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-[1.5rem] bg-liz-champagne p-5 text-left">
              <div className="flex items-center gap-2 text-sm font-semibold text-liz-espresso">
                <ShoppingBag className="h-4 w-4 text-liz-goldDeep" />
                Reserved items
              </div>
              <div className="mt-4 grid gap-2 text-sm">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <span>{item.name}</span>
                    <span className="font-semibold">{formatCurrency(item.price)}</span>
                  </div>
                ))}
                <div className="h-px bg-liz-gold/20" />
                <div className="flex justify-between font-semibold">
                  <span>Total with delivery</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button asChild><Link href="/account" prefetch={false}>Track Order</Link></Button>
              <Button asChild variant="outline"><Link href="/products" prefetch={false}>Shop More</Link></Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
