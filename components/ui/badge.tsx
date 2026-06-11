import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" }) {
  const variants = {
    default: "bg-liz-gold text-white",
    secondary: "bg-liz-blush text-liz-plum",
    outline: "border border-liz-gold/50 bg-white text-liz-goldDeep"
  };

  return <div className={cn("inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold", variants[variant], className)} {...props} />;
}
