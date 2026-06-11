import { CartClient } from "@/components/checkout/cart-client";
import { getCartPreview, getRecommendedProducts } from "@/lib/data";

export default function CartPage({ searchParams }: { searchParams?: { item?: string } }) {
  const itemSlug = searchParams?.item;
  const items = getCartPreview(itemSlug);
  const recommended = getRecommendedProducts(items.map((item) => item.id));
  const checkoutHref = itemSlug ? `/checkout?item=${itemSlug}` : "/checkout";

  return <CartClient items={items} recommended={recommended} checkoutHref={checkoutHref} />;
}
