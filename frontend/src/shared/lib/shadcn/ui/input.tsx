import * as React from "react";

import { cn } from "@/shared/lib/shadcn/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
          h-13 w-full min-w-0 rounded-md border border-gray-2 bg-gray-3 px-3.5
          py-4 text-sm text-blue-6 shadow-xs transition-[color,box-shadow]
          outline-none
          selection:bg-primary selection:text-primary-foreground
          file:inline-flex file:h-7 file:border-0 file:bg-transparent
          file:text-sm file:font-medium file:text-foreground
          placeholder:text-transparent
          disabled:pointer-events-none disabled:cursor-not-allowed
          disabled:text-gray-5/80 disabled:opacity-50
          md:text-sm
          dark:bg-input/30
        `,
        `
          hover:border-blue-6
          focus-visible:border-blue-6
        `,
        `
          aria-invalid:border-destructive aria-invalid:ring-destructive/20
          dark:aria-invalid:ring-destructive/40
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
