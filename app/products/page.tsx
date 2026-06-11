import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { getCategories, getProducts } from "@/lib/data";

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Shop Golden Liz</p>
        <h1 className="font-display text-4xl leading-tight md:text-6xl">Beauty, jewellery, and soft luxury in one boutique.</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          Browse curated cosmetics, skincare, fragrance, and jewellery pieces selected to help every woman feel polished without stress.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <ProductFilters categories={categories} />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
