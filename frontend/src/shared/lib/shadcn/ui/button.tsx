import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/lib/shadcn/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold active:opacity-86 focus-visible:outline focus-visible:outline-offset-1 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 aria-invalid:ring-red-500/20 aria-invalid:border-red-500",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border border-white bg-transparent hover:bg-white hover:text-blue-6 active:bg-transparent active:text-white focus-visible:outline-white/40",
      },
      size: {
        "md": "h-24 px-9 py-8 rounded-2xl gap-4 text-lg -tracking-sm [&_svg:not([class*='size-'])]:size-8",
        "lg": "h-24 px-9 py-8 rounded-2xl gap-4 text-lg -tracking-sm [&_svg:not([class*='size-'])]:size-8",
        "icon": "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
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
