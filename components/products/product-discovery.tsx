"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProductGrid } from "@/components/products/product-grid";
import type { Category, Product } from "@/lib/types";
import { cn } from "@/lib/utils";

type SortMode = "featured" | "price-asc" | "price-desc" | "rating";

const quickEdits = [
  { id: "bestseller", label: "Bestsellers" },
  { id: "new", label: "New arrivals" },
  { id: "gift", label: "Gift picks" }
];

export function ProductDiscovery({ products, categories }: { products: Product[]; categories: Category[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "all";
  const selectedTag = searchParams.get("tag") ?? "";
  const queryParam = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(queryParam);
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  };

  const categoryNameById = useMemo(
    () => new Map(categories.map((category) => [category.id, category.name.toLowerCase()])),
    [categories]
  );

  const filteredProducts = useMemo(() => {
    const categoryName = categoryNameById.get(selectedCategory);
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory = !categoryName || product.category.toLowerCase() === categoryName;
      const matchesTag =
        !selectedTag ||
        product.tags.some((tag) => tag.toLowerCase() === selectedTag) ||
        (selectedTag === "new" && product.isNew) ||
        (selectedTag === "bestseller" && product.isBestSeller);
      const searchable = [
        product.name,
        product.category,
        product.collection,
        product.description,
        ...product.tags
      ].join(" ").toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      const matchesStock = !inStockOnly || product.stock > 0;

      return matchesCategory && matchesTag && matchesQuery && matchesStock;
    });

    return [...filtered].sort((a, b) => {
      if (sortMode === "price-asc") return a.price - b.price;
      if (sortMode === "price-desc") return b.price - a.price;
      if (sortMode === "rating") return b.rating - a.rating;
      return Number(b.isBestSeller) - Number(a.isBestSeller) || Number(b.isNew) - Number(a.isNew);
    });
  }, [categoryNameById, inStockOnly, products, query, selectedCategory, selectedTag, sortMode]);

  const clearFilters = () => {
    setQuery("");
    setSortMode("featured");
    setInStockOnly(false);
    router.replace(pathname, { scroll: false });
  };

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateParam("q", query.trim());
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <Card>
          <CardContent className="grid gap-5 p-4 md:p-5">
            <div className="flex items-center gap-2 text-liz-espresso">
              <SlidersHorizontal className="h-4 w-4 text-liz-goldDeep" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Find your edit</h2>
            </div>

            <form onSubmit={submitSearch} className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search lip, gold, gift..."
                className="pl-11 pr-4"
                aria-label="Search products"
              />
            </form>

            <div className="grid gap-2">
              <FilterButton active={selectedCategory === "all"} onClick={() => updateParam("category", "all")}>
                All products
              </FilterButton>
              {categories.map((category) => (
                <FilterButton
                  key={category.id}
                  active={selectedCategory === category.id}
                  onClick={() => updateParam("category", category.id)}
                >
                  {category.name}
                </FilterButton>
              ))}
            </div>

            <div className="grid gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick edits</p>
              <div className="flex flex-wrap gap-2">
                {quickEdits.map((edit) => (
                  <button
                    key={edit.id}
                    type="button"
                    onClick={() => updateParam("tag", selectedTag === edit.id ? "" : edit.id)}
                    className={cn(
                      "focus-ring rounded-full border px-3 py-2 text-xs font-semibold transition",
                      selectedTag === edit.id
                        ? "border-liz-gold bg-liz-gold text-white"
                        : "border-border bg-white text-liz-charcoal hover:bg-liz-champagne"
                    )}
                  >
                    {edit.label}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-3 rounded-2xl bg-liz-champagne/70 p-3 text-sm font-medium text-liz-charcoal">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(event) => setInStockOnly(event.target.checked)}
                className="h-4 w-4 accent-liz-gold"
              />
              In-stock pieces only
            </label>
          </CardContent>
        </Card>
      </aside>

      <div className="min-w-0">
        <div className="mb-5 grid gap-3 rounded-[1.5rem] border bg-white/75 p-4 shadow-soft sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-semibold text-liz-espresso">{filteredProducts.length} curated pieces</p>
            <p className="text-sm text-muted-foreground">Use search, category, and edit filters to test product discovery.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="focus-ring h-11 rounded-full border border-border bg-white px-4 text-sm font-semibold"
              aria-label="Sort products"
            >
              <option value="featured">Featured first</option>
              <option value="rating">Highest rated</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
            {(selectedCategory !== "all" || selectedTag || queryParam || inStockOnly || sortMode !== "featured") ? (
              <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
                <X className="mr-2 h-4 w-4" />
                Clear
              </Button>
            ) : null}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-[1.5rem] border bg-white p-8 text-center shadow-soft">
            <h3 className="font-display text-3xl">No pieces match this edit.</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Clear the filters or search a broader term so customers can keep browsing without losing momentum.
            </p>
            <Button type="button" className="mt-5" onClick={clearFilters}>
              Reset discovery
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  children,
  onClick
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
        active ? "bg-liz-espresso text-white shadow-soft" : "border bg-white text-liz-charcoal hover:bg-liz-champagne"
      )}
    >
      {children}
    </button>
  );
}
