import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Category } from "@/lib/types";

export function ProductFilters({ categories }: { categories: Category[] }) {
  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <Card>
        <CardHeader>
          <CardTitle>Filter preview</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <button className="rounded-2xl bg-liz-espresso px-4 py-3 text-left text-sm font-semibold text-white">All products</button>
          {categories.map((category) => (
            <button key={category.id} className="rounded-2xl border bg-white px-4 py-3 text-left text-sm font-medium transition hover:bg-liz-champagne">
              {category.name}
            </button>
          ))}
          <div className="mt-4 rounded-2xl bg-liz-champagne p-4 text-sm leading-6 text-liz-charcoal">
            Production agent: convert these buttons to URL-search filters using search params and mock JSON.
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
