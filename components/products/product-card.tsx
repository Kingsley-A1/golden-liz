import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-liz-gold/15 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-liz-gold/35 hover:shadow-glow">
      <Link href={`/products/${product.slug}`} prefetch={false} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-liz-champagne">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          {/* Soft depth overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-liz-espresso/12 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Badges */}
          <div className="absolute left-3 top-3 flex gap-1.5">
            {product.isNew ? (
              <span className="rounded-full bg-liz-espresso px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-liz-gold shadow-sm">
                New
              </span>
            ) : null}
            {product.isBestSeller ? (
              <span className="rounded-full bg-liz-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-sm">
                Bestseller
              </span>
            ) : null}
          </div>

          {product.stock <= 6 ? (
            <div className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-liz-goldDeep shadow backdrop-blur-sm">
              Only {product.stock} left
            </div>
          ) : null}
        </div>
      </Link>

      <div className="px-4 pb-4 pt-3.5">
        {/* Category + Rating row */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-[9px] font-black uppercase tracking-[0.26em] text-liz-goldDeep/70">
            {product.category}
          </p>
          <span className="flex items-center gap-1 rounded-full bg-liz-champagne px-2 py-0.5 text-[10px] font-semibold text-liz-goldDeep">
            <Star className="h-2.5 w-2.5 fill-liz-gold text-liz-gold" />
            {product.rating}
          </span>
        </div>

        {/* Product name */}
        <Link
          href={`/products/${product.slug}`}
          prefetch={false}
          className="block font-display text-[15px] font-semibold leading-snug text-foreground transition hover:text-liz-goldDeep"
        >
          {product.name}
        </Link>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Thin gold divider */}
        <div className="luxury-line my-3.5 h-px" />

        {/* Price + CTA */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[17px] font-bold leading-none text-foreground">
              {formatCurrency(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="mt-1 text-[11px] text-muted-foreground/65 line-through">
                {formatCurrency(product.compareAtPrice)}
              </p>
            ) : null}
          </div>
          <Button
            asChild
            size="sm"
            className="shrink-0 rounded-xl bg-liz-espresso px-4 text-[12px] font-semibold text-liz-gold shadow-md hover:bg-liz-espresso/90 hover:text-liz-gold"
          >
            <Link href={`/cart?item=${product.slug}`} prefetch={false}>
              <ShoppingBag className="mr-1.5 h-3.5 w-3.5" />
              Add
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
