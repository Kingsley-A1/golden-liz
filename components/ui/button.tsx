import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
};

const variantClasses = {
  default: "bg-primary text-primary-foreground shadow-glow hover:bg-liz-goldDeep",
  secondary: "bg-secondary text-secondary-foreground hover:bg-liz-blush",
  outline: "border border-border bg-white/70 hover:bg-liz-champagne text-foreground",
  ghost: "hover:bg-liz-champagne text-foreground"
};

const sizeClasses = {
  default: "h-11 px-5 py-2",
  sm: "h-9 rounded-full px-4 text-xs",
  lg: "h-12 rounded-full px-7 text-base",
  icon: "h-11 w-11"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
