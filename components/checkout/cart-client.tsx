"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gift, Minus, PackageCheck, Plus, ShoppingBag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/format";

type Props = {
  items: Product[];
  recommended: Product[];
  checkoutHref: string;
};

export function CartClient({ items, recommended, checkoutHref }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(items.map((item) => [item.id, 1]))
  );

  const adjust = (id: string, delta: number) =>
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min((prev[id] ?? 1) + delta, 10)),
    }));

  const delivery = 2500;
  const subtotal = items.reduce((sum, item) => sum + item.price * (quantities[item.id] ?? 1), 0);

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Your Bag</p>
        <h1 className="font-display text-4xl md:text-5xl">Your Golden Liz picks.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Left column */}
        <div className="grid gap-6">
          {/* Cart items */}
          <div className="grid gap-3">
            {items.map((item) => {
              const qty = quantities[item.id] ?? 1;
              return (
                <Card key={item.id} className="rounded-xl border-liz-gold/15">
                  <CardContent className="flex items-center gap-4 p-4">
                    {/* Clean square thumbnail */}
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-liz-champagne">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-liz-goldDeep">
                        {item.category}
                      </p>
                      <h2 className="mt-0.5 font-semibold leading-snug">{item.name}</h2>
                      <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Qty controls + price */}
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => adjust(item.id, -1)}
                            disabled={qty <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-liz-gold/25 bg-white transition hover:bg-liz-champagne disabled:opacity-35"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-5 text-center text-sm font-bold">{qty}</span>
                          <button
                            onClick={() => adjust(item.id, 1)}
                            disabled={qty >= 10}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-liz-gold/25 bg-white transition hover:bg-liz-champagne disabled:opacity-35"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-base font-bold">{formatCurrency(item.price * qty)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Complete the set */}
          <Card className="rounded-xl bg-liz-champagne/50">
            <CardHeader className="pb-3 pt-4">
              <CardTitle className="text-base">Complete the set</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {recommended.map((item) => (
                <Link
                  key={item.id}
                  href={`/cart?item=${item.slug}`}
                  prefetch={false}
                  className="group grid grid-cols-[64px_1fr] gap-3 rounded-xl border border-liz-gold/10 bg-white p-3 transition hover:border-liz-gold/40"
                >
                  <div className="relative h-16 overflow-hidden rounded-lg bg-liz-champagne">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="line-clamp-2 text-sm font-semibold leading-tight">{item.name}</p>
                    <p className="mt-1 text-sm font-medium text-liz-goldDeep">{formatCurrency(item.price)}</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Trust badges */}
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: <PackageCheck className="h-4 w-4" />, label: "Reserved before packing" },
              { icon: <Truck className="h-4 w-4" />, label: "Delivery estimate shown" },
              { icon: <Gift className="h-4 w-4" />, label: "Gift note supported" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border bg-white p-3.5 text-sm font-medium text-liz-charcoal shadow-soft"
              >
                <span className="text-liz-goldDeep">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <Card className="h-fit rounded-xl border-liz-gold/15">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between gap-3 text-sm">
                <span className="truncate text-muted-foreground">
                  {item.name} ×{quantities[item.id] ?? 1}
                </span>
                <span className="shrink-0 font-medium">
                  {formatCurrency(item.price * (quantities[item.id] ?? 1))}
                </span>
              </div>
            ))}
            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>{formatCurrency(delivery)}</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between text-base font-bold">
              <span>Total</span>
              <span>{formatCurrency(subtotal + delivery)}</span>
            </div>
            <Button
              asChild
              className="w-full rounded-xl bg-liz-espresso text-liz-gold hover:bg-liz-espresso/90"
            >
              <Link href={checkoutHref} prefetch={false}>Proceed to Checkout</Link>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-xl">
              <Link href="/products" prefetch={false}>Continue Shopping</Link>
            </Button>
            <div className="flex items-start gap-2 rounded-xl bg-liz-cream p-4 text-xs leading-relaxed text-muted-foreground">
              <ShoppingBag className="mt-0.5 h-3.5 w-3.5 shrink-0 text-liz-goldDeep" />
              <span>Confirm your items, then proceed to checkout to reserve your order.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
