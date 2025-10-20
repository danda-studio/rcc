import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/lib/shadcn/utils";

const badgeVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    border
    font-medium
    w-fit
    whitespace-nowrap
    shrink-0
    gap-1
    [&>svg]:pointer-events-none
    focus-visible:border-ring
    focus-visible:ring-ring/50
    focus-visible:ring-[3px]
    aria-invalid:ring-destructive/20
    dark:aria-invalid:ring-destructive/40
    aria-invalid:border-destructive
    transition-[color,box-shadow]
    overflow-hidden
  `,
  {
    variants: {
      variant: {
        glass:
          `
            relative
            border-none
            shadow-1
            before:absolute
            before:inset-0
            -before:z-10
            before:bg-radial-(--radial-2)
            before:[clip-path:var(--clip-path-1)]
            bg-white/9
          `,
        default:
          `
            border-gray-1
            relative
            bg-gray-1
            text-blue-6/72
          `,
      },
      size: {
        xl: `
          h-8
          md:h-10
          max-md:pl-2
          max-md:pr-3
          md:px-4
          text-sm
          md:text-md
          [&>svg]:size-4
          md:[&>svg]:size-6
          rounded-sm
          md:rounded-md
          gap-2
        `,
        lg: `
          h-9
          md:h-9.5
          px-3
          md:px-4
          text-base
          md:text-md
          rounded-sm
          md:rounded-md
        `,
        md: `
          h-9
          px-4
          text-base
          rounded-md
        `,
        sm: `
          h-8
          md:h-7.5
          max-md:pl-2
          max-md:pr-3
          md:px-3
          text-sm
          md:text-xs
          [&>svg]:size-4
          md:[&>svg]:size-6
          rounded-sm
          md:rounded-sm
          gap-2
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
