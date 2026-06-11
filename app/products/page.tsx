import { Suspense } from "react";
import { ProductDiscovery } from "@/components/products/product-discovery";
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
      <Suspense fallback={<div className="rounded-[1.5rem] border bg-white p-6 shadow-soft">Loading Golden Liz pieces...</div>}>
        <ProductDiscovery products={products} categories={categories} />
      </Suspense>
    </section>
  );
}
