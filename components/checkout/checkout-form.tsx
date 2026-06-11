"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, PackageCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/format";

export function CheckoutForm({
  items,
  itemSlug,
  delivery
}: {
  items: Product[];
  itemSlug?: string;
  delivery: number;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);
  const total = subtotal + delivery;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const params = new URLSearchParams({ order: "GLZ-2410" });
    if (itemSlug) params.set("item", itemSlug);
    window.setTimeout(() => {
      router.push(`/order-confirmed?${params.toString()}`);
    }, 450);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <Card>
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="checkout-form" onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" placeholder="Ada Golden" autoComplete="name" required />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" name="phone" placeholder="0800 000 0000" autoComplete="tel" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="customer@example.com" autoComplete="email" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Delivery address</Label>
              <Textarea id="address" name="address" placeholder="House number, street, city" autoComplete="street-address" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="note">Order note</Label>
              <Textarea id="note" name="note" placeholder="Gift wrap, delivery time, shade preference..." />
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid h-fit gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Mock Payment</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-2xl bg-liz-champagne p-4 text-sm leading-6 text-liz-charcoal">
              <CreditCard className="mb-2 h-5 w-5 text-liz-goldDeep" />
              No real payment is collected. Production can later connect Paystack, Flutterwave, bank transfer confirmation, or WhatsApp-assisted checkout.
            </div>
            <div className="grid gap-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between"><span>Delivery estimate</span><span>{formatCurrency(delivery)}</span></div>
              <div className="h-px bg-border" />
              <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>{formatCurrency(total)}</span></div>
            </div>
            <Button type="submit" form="checkout-form" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Reserving order..." : "Confirm Mock Order"}
            </Button>
            <p className="text-xs leading-5 text-muted-foreground">
              Required fields are validated in-browser so the client can test a realistic low-friction checkout.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-liz-plum text-white">
          <CardContent className="grid gap-3 p-5 text-sm">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-liz-gold" />
              <span>Availability confirmed before fulfillment.</span>
            </div>
            <div className="flex gap-3">
              <PackageCheck className="h-5 w-5 shrink-0 text-liz-gold" />
              <span>Order moves into packing and delivery tracking after confirmation.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
