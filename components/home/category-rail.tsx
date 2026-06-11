import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/data";

export function CategoryRail() {
  const categories = getCategories();
  return (
    <section className="container py-10 md:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Categories</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">Shop by mood.</h2>
        </div>
        <Link href="/products" prefetch={false} className="hidden text-sm font-semibold text-liz-goldDeep md:block">View all</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.id}`} prefetch={false} className="group overflow-hidden rounded-[1.7rem] border bg-white shadow-soft">
            <div className="relative aspect-[4/5]">
              <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 25vw, 50vw" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{category.name}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
