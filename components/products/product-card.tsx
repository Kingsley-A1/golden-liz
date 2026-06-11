import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
          <div className="absolute left-3 top-3 flex gap-2">
            {product.isNew ? <Badge variant="secondary">New</Badge> : null}
            {product.isBestSeller ? <Badge>Bestseller</Badge> : null}
          </div>
          <Button size="icon" variant="outline" className="absolute right-3 top-3 bg-white/85"><Heart className="h-4 w-4" /></Button>
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-liz-goldDeep">{product.category}</p>
          <span className="flex items-center gap-1 text-sm text-muted-foreground"><Star className="h-4 w-4 fill-liz-gold text-liz-gold" /> {product.rating}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="font-semibold hover:text-liz-goldDeep">{product.name}</Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-semibold">{formatCurrency(product.price)}</p>
          <Button size="sm"><ShoppingBag className="mr-2 h-4 w-4" /> Add</Button>
        </div>
      </div>
    </article>
  );
}
