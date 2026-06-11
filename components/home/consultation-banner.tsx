import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConsultationBanner() {
  return (
    <section id="consultation" className="container py-10 md:py-16">
      <div className="overflow-hidden rounded-[2.2rem] bg-liz-plum p-6 text-white shadow-glow md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-liz-gold">Need help choosing?</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Let Golden Liz help customers choose the right shade, scent, or gift.</h2>
            <p className="mt-4 max-w-2xl text-white/75">This section can later connect to WhatsApp, AI product recommendation, or a simple consultation form.</p>
          </div>
          <Button asChild className="bg-liz-gold text-white hover:bg-liz-goldDeep"><Link href="/products" prefetch={false}>Start shopping</Link></Button>
        </div>
      </div>
    </section>
  );
}
