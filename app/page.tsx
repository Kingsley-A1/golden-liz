import { Hero } from "@/components/home/hero";
import { CategoryRail } from "@/components/home/category-rail";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Lookbook } from "@/components/home/lookbook";
import { ServicePromise } from "@/components/home/service-promise";
import { Testimonials } from "@/components/home/testimonials";
import { ConsultationBanner } from "@/components/home/consultation-banner";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CategoryRail />
      <FeaturedProducts />
      <Lookbook />
      <ServicePromise />
      <Testimonials />
      <ConsultationBanner />
    </div>
  );
}
