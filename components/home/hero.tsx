import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, ShoppingBag, Sparkles, Truck } from "lucide-react";

const mosaicImages = [
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=85",
    alt: "Cosmetics arrangement",
  },
  {
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=85",
    alt: "Skincare essentials",
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=85",
    alt: "Fine jewellery",
  },
  {
    src: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=85",
    alt: "Luxury fragrance",
  },
];

export function Hero() {
  return (
    <section className="gold-gradient relative overflow-hidden">
      <div className="container relative grid gap-10 py-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-16 lg:py-20">
        {/* Copy column */}
        <div className="max-w-xl">
          <Badge variant="outline" className="mb-5">Boutique beauty • Jewellery • Gifts</Badge>
          <h1 className="font-display text-5xl leading-[0.96] tracking-tight text-liz-espresso md:text-7xl">
            Beauty pieces that feel golden before you wear them.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
            Shop curated cosmetics, skincare, fragrance, and jewellery in a premium mobile-first boutique experience built to make buying effortless.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/products" prefetch={false}>
                Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#lookbook" prefetch={false}>View Lookbook</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-liz-charcoal sm:grid-cols-3">
            <TrustItem icon={<ShieldCheck className="h-4 w-4" />} label="Authentic picks" />
            <TrustItem icon={<Truck className="h-4 w-4" />} label="Delivery ready" />
            <TrustItem icon={<Sparkles className="h-4 w-4" />} label="Gift friendly" />
          </div>
        </div>

        {/* 4-image mosaic column */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-glow md:aspect-[5/6]">
            {/* 2 × 2 image grid fills the entire container */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
              {mosaicImages.map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Product card overlay */}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/60 bg-white px-4 py-3.5 shadow-soft">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-liz-goldDeep">
                Today&apos;s curated set
              </p>
              <p className="mt-0.5 font-display text-xl leading-tight text-liz-espresso">
                Soft Glam Essentials
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Lip care, glow serum, hoops &amp; scent picks.
              </p>
              <Link
                href="/products"
                prefetch={false}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-liz-espresso px-4 py-2 text-[12px] font-semibold text-liz-gold transition hover:bg-liz-espresso/90"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-3 shadow-sm">
      {icon}
      <span>{label}</span>
    </div>
  );
}
