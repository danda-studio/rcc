import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/lib/shadcn/utils";

const buttonVariants = cva(
  `
    inline-flex shrink-0 items-center justify-center font-semibold
    whitespace-nowrap transition-all
    focus-visible:outline focus-visible:outline-offset-1
    active:opacity-86
    disabled:pointer-events-none disabled:opacity-50
    aria-invalid:border-red-500 aria-invalid:ring-red-500/20
    [&_svg]:pointer-events-none [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        default: `
          cursor-pointer border-transparent bg-blue-6 text-md text-white
          hover:bg-blue-5
          focus-visible:outline-black/40
          active:bg-blue-5 active:opacity-86
          md:text-md-x
        `,
        outline:
          `
            cursor-pointer border border-white bg-transparent
            hover:bg-white hover:text-blue-6
            focus-visible:outline-white/40
            active:bg-transparent active:text-white
          `,
        cart: `
          cursor-pointer justify-between rounded-xs border border-gray-2
          bg-gray-1 text-blue-6/80
        `,
        fill: `
          cursor-pointer border border-white bg-white text-blue-6
          hover:bg-transparent hover:text-white
          focus-visible:outline-white/40
          active:bg-white active:text-blue-6
        `,
      },
      size: {
        sm: `
          h-12 gap-3.5 px-4 py-3 text-base
          md:h-17 md:text-md-x
          [&_svg:not([class*='size-'])]:size-4
          md:[&_svg:not([class*='size-'])]:size-6
        `,
        md: `
          h-15 rounded-md px-4 py-3 text-md
          md:h-17.5 md:rounded-2xl md:text-md-x
        `,
        lg: `
          h-15.5 gap-4 rounded-2xl px-9 py-5 text-md -tracking-sm
          md:h-24 md:py-8 md:text-lg
          [&_svg:not([class*='size-'])]:size-5
          md:[&_svg:not([class*='size-'])]:size-8
        `,
        icon: `
          size-11 rounded-sm
          md:size-16
          [&_svg:not([class*='size-'])]:size-5
          md:[&_svg:not([class*='size-'])]:size-7
        `,
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

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
