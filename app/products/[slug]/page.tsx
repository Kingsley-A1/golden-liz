import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug, getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { Check, Heart, ShieldCheck, Truck } from "lucide-react";

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <section className="container py-8 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="overflow-hidden rounded-[2rem] border bg-white shadow-soft">
          <div className="relative aspect-[4/5] md:aspect-[5/4]">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" priority />
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>{product.category}</Badge>
            {product.isBestSeller ? <Badge variant="secondary">Bestseller</Badge> : null}
            {product.stock <= 6 ? <Badge variant="outline">Only {product.stock} left</Badge> : null}
          </div>

          <h1 className="font-display text-4xl leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{product.description}</p>

          <div className="mt-6 flex items-end justify-between rounded-3xl border bg-white p-5 shadow-soft">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-3xl font-semibold text-liz-espresso">{formatCurrency(product.price)}</p>
            </div>
            <Button asChild>
              <Link href={`/cart?item=${product.slug}`} prefetch={false}>Add to Bag</Link>
            </Button>
          </div>

          <div className="mt-6 grid gap-3 text-sm text-liz-charcoal">
            {product.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 rounded-2xl bg-liz-champagne/70 p-4">
                <Check className="h-4 w-4 text-liz-goldDeep" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <Card className="mt-6">
            <CardContent className="grid gap-4 p-5 text-sm md:grid-cols-3">
              <div className="flex gap-3"><ShieldCheck className="h-5 w-5 text-liz-goldDeep" /> Authentic products</div>
              <div className="flex gap-3"><Truck className="h-5 w-5 text-liz-goldDeep" /> Delivery ready</div>
              <div className="flex gap-3"><Heart className="h-5 w-5 text-liz-goldDeep" /> Gift-friendly</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
