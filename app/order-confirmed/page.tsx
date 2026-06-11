import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function OrderConfirmedPage() {
  return (
    <section className="container flex min-h-[72vh] items-center py-10">
      <Card className="mx-auto max-w-2xl text-center shadow-glow">
        <CardContent className="p-8 md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-liz-champagne text-liz-goldDeep">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Order Confirmed</p>
          <h1 className="font-display text-4xl md:text-6xl">Your Golden Liz order is reserved.</h1>
          <p className="mt-5 text-muted-foreground">
            Order GLZ-2407 has entered the confirmation lifecycle. The boutique team will confirm availability, package your items, and contact you for delivery.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button asChild><Link href="/account">Track Order</Link></Button>
            <Button asChild variant="outline"><Link href="/products">Shop More</Link></Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
