import { Card, CardContent } from "@/components/ui/card";
import { getTestimonials } from "@/lib/data";

export function Testimonials() {
  const testimonials = getTestimonials();
  return (
    <section className="container py-10 md:py-16">
      <div className="mb-7 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-liz-goldDeep">Customer confidence</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Social proof, made elegant.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <CardContent className="p-6">
              <p className="leading-7 text-muted-foreground">“{item.note}”</p>
              <div className="mt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
