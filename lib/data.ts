import data from "@/data/golden-liz.json";
import type { Category, Order, Product, Testimonial } from "@/lib/types";

export function getBrand() {
  return data.brand;
}

export function getCategories(): Category[] {
  return data.categories;
}

export function getProducts(): Product[] {
  return data.products;
}

export function getFeaturedProducts(): Product[] {
  return data.products.filter((product) => product.isBestSeller || product.isNew).slice(0, 6);
}

export function getProductBySlug(slug: string): Product | undefined {
  return data.products.find((product) => product.slug === slug);
}

export function getCartPreview(selectedSlug?: string): Product[] {
  const selectedProduct = selectedSlug ? getProductBySlug(selectedSlug) : undefined;
  if (selectedProduct) return [selectedProduct];
  return getFeaturedProducts().slice(0, 2);
}

export function getRecommendedProducts(excludedIds: string[], limit = 2): Product[] {
  return data.products.filter((product) => !excludedIds.includes(product.id)).slice(0, limit);
}

export function getOrders(): Order[] {
  return data.orders;
}

export function getTestimonials(): Testimonial[] {
  return data.testimonials;
}
