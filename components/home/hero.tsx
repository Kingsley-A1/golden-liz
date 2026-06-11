import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";

export function Hero() {
  return (
    <section className="gold-gradient relative overflow-hidden">
      <div className="container relative grid gap-10 py-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-16 lg:py-20">
        <div className="max-w-xl">
          <Badge variant="outline" className="mb-5">Boutique beauty • Jewellery • Gifts</Badge>
          <h1 className="font-display text-5xl leading-[0.96] tracking-tight text-liz-espresso md:text-7xl">
            Beauty pieces that feel golden before you wear them.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
            Shop curated cosmetics, skincare, fragrance, and jewellery in a premium mobile-first boutique experience built to make buying effortless.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg"><Link href="/products" prefetch={false}>Shop Collection <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/#lookbook" prefetch={false}>View Lookbook</Link></Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-liz-charcoal sm:grid-cols-3">
            <TrustItem icon={<ShieldCheck className="h-4 w-4" />} label="Authentic picks" />
            <TrustItem icon={<Truck className="h-4 w-4" />} label="Delivery ready" />
            <TrustItem icon={<Sparkles className="h-4 w-4" />} label="Gift friendly" />
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-glow md:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
              alt="Elegant cosmetics arrangement with soft gold tones"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.8rem] border border-white/70 bg-white/85 p-4 shadow-soft backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-liz-goldDeep">Today’s curated set</p>
              <p className="mt-1 font-display text-2xl">Soft Glam Essentials</p>
              <p className="mt-1 text-sm text-muted-foreground">Lip care, glow serum, hoops, and scent picks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-3 shadow-sm">{icon}<span>{label}</span></div>;
}
