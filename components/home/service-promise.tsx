import { Card, CardContent } from "@/components/ui/card";
import { Gift, MessageCircle, PackageCheck, ShieldCheck } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "Authentic products", copy: "Every item is curated to protect customer trust before scale." },
  { icon: Gift, title: "Gift-ready presentation", copy: "Beautiful packaging options for birthdays, bridal gifts, and surprises." },
  { icon: MessageCircle, title: "WhatsApp assisted", copy: "Customers can still ask shade, size, or delivery questions easily." },
  { icon: PackageCheck, title: "Order tracking", copy: "A clean lifecycle from placed to confirmed, packed, out for delivery, and delivered." }
];

export function ServicePromise() {
  return (
    <section className="container py-10 md:py-16">
      <div className="mb-7 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Service promise</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">A website should increase trust, not just display items.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {promises.map((item) => (
          <Card key={item.title}>
            <CardContent className="p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-liz-champagne text-liz-goldDeep">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
