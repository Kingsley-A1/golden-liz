import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Checkout</p>
        <h1 className="font-display text-4xl md:text-6xl">A calm checkout experience.</h1>
        <p className="mt-4 text-muted-foreground">This prototype uses mock payment and order data so the client can test the full ordering story.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Ada Golden" />
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" placeholder="0800 000 0000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="customer@example.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Delivery address</Label>
              <Input id="address" placeholder="House number, street, city" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="note">Order note</Label>
              <Input id="note" placeholder="Gift wrap, delivery time, shade preference..." />
            </div>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Mock Payment</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-sm leading-6 text-muted-foreground">
              The final production build can connect to Paystack, Flutterwave, bank transfer confirmation, or WhatsApp-assisted checkout.
            </p>
            <Button asChild className="w-full"><Link href="/order-confirmed">Confirm Mock Order</Link></Button>
            <p className="text-xs text-muted-foreground">No real payment is collected in this prototype.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
