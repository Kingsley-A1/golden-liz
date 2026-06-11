import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrders, getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default function AccountPage() {
  const orders = getOrders();
  const products = getProducts();
  const totalSpend = orders.reduce((sum, order) => sum + order.total, 0);
  const orderedProducts = products.filter((product) => orders.some((order) => order.items.includes(product.name)));
  const preferenceTags = Array.from(new Set(orderedProducts.flatMap((product) => [product.category, product.collection]))).slice(0, 4);

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Customer Account</p>
        <h1 className="font-display text-4xl md:text-6xl">A cleaner way to track boutique orders.</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          A customer account turns one-time DMs into repeat purchase history, preferences, and clear order status.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total orders</p><p className="mt-2 text-3xl font-semibold">{orders.length}</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Reserved spend</p><p className="mt-2 text-3xl font-semibold">{formatCurrency(totalSpend)}</p></CardContent></Card>
        <Card><CardContent className="p-5"><p className="text-sm text-muted-foreground">Saved preferences</p><p className="mt-2 text-3xl font-semibold">{preferenceTags.length}</p></CardContent></Card>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
          <CardContent className="grid gap-4">
            {orders.map((order) => (
              <div key={order.id} className="grid gap-4 rounded-3xl border bg-white p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{order.customer} - {order.items.join(", ")}</p>
                  <p className="mt-2 text-sm font-semibold text-liz-espresso">{formatCurrency(order.total)}</p>
                </div>
                <Badge>{order.statusLabel}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="h-fit bg-liz-champagne/80">
          <CardHeader><CardTitle>Style Preferences</CardTitle></CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              {preferenceTags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              In production, this becomes the foundation for gift reminders, replenishment prompts, and personalized WhatsApp recommendations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
