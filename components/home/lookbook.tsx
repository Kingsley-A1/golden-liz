import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Lookbook() {
  return (
    <section id="lookbook" className="bg-liz-espresso py-12 text-liz-cream md:py-20">
      <div className="container grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-liz-gold">The Golden Liz Lookbook</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">From soft glam mornings to evening sparkle.</h2>
          <p className="mt-5 max-w-lg leading-7 text-liz-cream/75">
            The website should not only list products. It should guide customers into complete looks: lip, skin, scent, necklace, earrings, and gift sets.
          </p>
          <Button asChild className="mt-7 bg-liz-gold text-white hover:bg-liz-goldDeep">
            <Link href="/products?tag=gift" prefetch={false}>Explore the edit</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85" alt="Gold jewellery close-up" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85" alt="Cosmetic and skincare product arrangement" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
