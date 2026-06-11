import { CheckoutForm } from "@/components/checkout/checkout-form";
import { getCartPreview } from "@/lib/data";

export default function CheckoutPage({ searchParams }: { searchParams?: { item?: string } }) {
  const itemSlug = searchParams?.item;
  const items = getCartPreview(itemSlug);
  const delivery = 2500;

  return (
    <section className="container py-8 md:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Checkout</p>
        <h1 className="font-display text-4xl md:text-6xl">A calm checkout experience.</h1>
        <p className="mt-4 text-muted-foreground">This prototype uses mock payment and order data so the client can test the full ordering story.</p>
      </div>

      <CheckoutForm items={items} itemSlug={itemSlug} delivery={delivery} />
    </section>
  );
}
