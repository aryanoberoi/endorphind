import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-xl hover:scale-105 hover:shadow-2xl hover:from-purple-400 hover:via-pink-400 hover:to-red-400",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-xl hover:scale-105 hover:shadow-2xl hover:from-red-500 hover:to-red-300",
        outline:
          "border border-white/30 bg-white/10 text-white shadow-md backdrop-blur-md hover:bg-white/20 hover:shadow-lg",
        secondary:
          "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl hover:from-indigo-400 hover:to-purple-400",
        ghost:
          "bg-transparent text-white hover:bg-white/10 hover:text-white shadow-sm",
        link:
          "text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:underline",
      },
      size: {
        default: "h-11 px-6 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-8 has-[>svg]:px-5 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
