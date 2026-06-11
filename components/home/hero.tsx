import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";

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
      <div className="container py-10 md:py-16 lg:py-20">

        {/* 1 — Badge + heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Boutique beauty • Jewellery • Gifts</Badge>
          <h1 className="font-display text-5xl leading-[0.96] tracking-tight text-liz-espresso md:text-7xl">
            Beauty pieces that feel golden before you wear them.
          </h1>
        </div>

        {/* 2 — 2×2 image mosaic */}
        <div className="relative mx-auto mt-8 w-full max-w-[680px] overflow-hidden rounded-2xl border border-white/60 shadow-glow">
          <div className="grid grid-cols-2 gap-1 bg-liz-champagne/60 p-1">
            {mosaicImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i < 2}
                  sizes="(min-width: 768px) 34vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3 — CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/products" prefetch={false}>
              Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#lookbook" prefetch={false}>View Lookbook</Link>
          </Button>
        </div>

        {/* 4 — Trust items: same row, rectangular boxes */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <TrustItem icon={<ShieldCheck className="h-4 w-4" />} label="Authentic picks" />
          <TrustItem icon={<Truck className="h-4 w-4" />} label="Delivery ready" />
          <TrustItem icon={<Sparkles className="h-4 w-4" />} label="Gift friendly" />
        </div>

      </div>
    </section>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2.5 text-sm font-medium text-liz-charcoal shadow-sm">
      <span className="text-liz-goldDeep">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
