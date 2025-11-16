import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/lib/shadcn/utils";

const badgeVariants = cva(
  `
    inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden
    border font-medium whitespace-nowrap transition-[color,box-shadow]
    focus-visible:border-ring focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    aria-invalid:border-destructive aria-invalid:ring-destructive/20
    dark:aria-invalid:ring-destructive/40
    [&>svg]:pointer-events-none
  `,
  {
    variants: {
      variant: {
        glass:
          `
            shadow-1
            -before:z-10
            relative border-none bg-white/9
            before:absolute before:inset-0 before:bg-radial-(--radial-2)
            before:[clip-path:var(--clip-path-1)]
          `,
        default:
          `relative border-gray-1 bg-gray-1 text-blue-6/72`,
      },
      size: {
        xl: `
          h-8 gap-2 rounded-sm text-sm
          max-md:pr-3 max-md:pl-2
          md:h-10 md:rounded-md md:px-4 md:text-md
          [&>svg]:size-4
          md:[&>svg]:size-6
        `,
        lg: `
          h-9 rounded-sm px-3 text-base
          md:h-9.5 md:rounded-md md:px-4 md:text-md
        `,
        md: `h-9 rounded-md px-4 text-base`,
        sm: `
          h-8 gap-2 rounded-sm text-sm
          max-md:pr-3 max-md:pl-2
          md:h-7.5 md:rounded-sm md:px-3 md:text-xs
          [&>svg]:size-4
          md:[&>svg]:size-6
        `,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span">
  & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
