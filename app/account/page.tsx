import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrders } from "@/lib/data";

export default function AccountPage() {
  const orders = getOrders();

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Customer Account</p>
        <h1 className="font-display text-4xl md:text-6xl">A cleaner way to track boutique orders.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total orders</p><p className="mt-2 text-3xl font-semibold">{orders.length}</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Loyalty points</p><p className="mt-2 text-3xl font-semibold">420</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Saved preferences</p><p className="mt-2 text-3xl font-semibold">3</p></CardContent></Card>
      </div>

      <Card className="mt-8">
        <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
        <CardContent className="grid gap-4">
          {orders.map((order) => (
            <div key={order.id} className="grid gap-3 rounded-3xl border bg-white p-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-semibold">{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.customer} • {order.items.join(", ")}</p>
              </div>
              <Badge>{order.statusLabel}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
