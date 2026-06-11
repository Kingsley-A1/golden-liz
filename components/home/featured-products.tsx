import Link from "next/link";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data";

export function FeaturedProducts() {
  const products = getFeaturedProducts();
  return (
    <section className="container py-10 md:py-16">
      <div className="mb-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Featured picks</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">Best sellers for a polished week.</h2>
        </div>
        <Button asChild variant="outline"><Link href="/products">Shop all products</Link></Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
