import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrders, getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default function AdminPage() {
  const products = getProducts();
  const orders = getOrders();
  const lowStock = products.filter((product) => product.stock <= 6);
  const reservedRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const bestSellers = products.filter((product) => product.isBestSeller);
  const categoryCounts = products.reduce<Record<string, number>>((acc, product) => {
    acc[product.category] = (acc[product.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Admin Preview</p>
        <h1 className="font-display text-4xl md:text-6xl">A boutique owner should see the business clearly.</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          This preview shows why the website matters operationally: orders, stock, product focus, and customer lifecycle become visible in one place.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <Metric label="Reserved revenue" value={formatCurrency(reservedRevenue)} />
        <Metric label="Products" value={products.length.toString()} />
        <Metric label="Low stock" value={lowStock.length.toString()} />
        <Metric label="Open orders" value={orders.length.toString()} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader><CardTitle>Reservation / Order Lifecycle</CardTitle></CardHeader>
          <CardContent className="grid gap-3">
            {orders.map((order) => (
              <div key={order.id} className="grid gap-3 rounded-2xl border bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer} - {order.items.join(", ")}</p>
                </div>
                <Badge>{order.statusLabel}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Low Stock Attention</CardTitle></CardHeader>
          <CardContent className="grid gap-3">
            {lowStock.map((product) => (
              <div key={product.id} className="grid gap-3 rounded-2xl border bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <Badge variant="outline">{product.stock} left</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Card className="bg-liz-espresso text-liz-cream">
          <CardHeader><CardTitle>Product Focus</CardTitle></CardHeader>
          <CardContent className="grid gap-3">
            {bestSellers.map((product) => (
              <div key={product.id} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="font-semibold text-white">{product.name}</p>
                  <p className="text-sm text-liz-cream/65">{product.collection}</p>
                </div>
                <span className="text-sm font-semibold text-liz-gold">{formatCurrency(product.price)}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Category Coverage</CardTitle></CardHeader>
          <CardContent className="grid gap-3">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="rounded-2xl bg-liz-champagne p-4">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>{category}</span>
                  <span>{count} pieces</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-liz-gold" style={{ width: `${Math.max(18, (count / products.length) * 100)}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}
