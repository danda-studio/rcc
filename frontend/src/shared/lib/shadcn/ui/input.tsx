import * as React from "react";

import { cn } from "@/shared/lib/shadcn/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
          file:text-foreground
          placeholder:text-transparent
          selection:bg-primary
          selection:text-primary-foreground
          dark:bg-input/30
          border-gray-2
          h-13
          w-full
          min-w-0
          rounded-md
          border
          bg-gray-3
          px-3.5
          py-4
          text-sm
          text-blue-6
          shadow-xs
          transition-[color,box-shadow]
          outline-none
          file:inline-flex
          file:h-7
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium
          disabled:pointer-events-none
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:text-gray-5/80
          md:text-sm
        `,
        `
          hover:border-blue-6
          focus-visible:border-blue-6
        `,
        `
          aria-invalid:ring-destructive/20
          dark:aria-invalid:ring-destructive/40
          aria-invalid:border-destructive
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
