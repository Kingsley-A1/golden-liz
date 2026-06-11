import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrders, getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default function AdminPage() {
  const products = getProducts();
  const orders = getOrders();
  const lowStock = products.filter((product) => product.stock <= 6);
  const mockRevenue = 482500;

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Admin Preview</p>
        <h1 className="font-display text-4xl md:text-6xl">A boutique owner should see the business clearly.</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <Metric label="Mock revenue" value={formatCurrency(mockRevenue)} />
        <Metric label="Products" value={products.length.toString()} />
        <Metric label="Low stock" value={lowStock.length.toString()} />
        <Metric label="Open orders" value={orders.length.toString()} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Reservation / Order Lifecycle</CardTitle></CardHeader>
          <CardContent className="grid gap-3">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl border bg-white p-4">
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
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
              <div key={product.id} className="flex items-center justify-between rounded-2xl border bg-white p-4">
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
