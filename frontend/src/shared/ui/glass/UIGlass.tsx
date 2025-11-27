import type { FC } from "react";
import type { UIGlassProps } from "./types";
import { cx } from "class-variance-authority";

const borderVariants: Record<NonNullable<UIGlassProps["border"]>, string> = {
  "corner": "before:absolute before:inset-0 -before:z-10 before:border-[calc(2.33/16*1rem)] before:rounded-[inherit] before:[clip-path:var(--clip-path-2)]",
  "corner-fixed": `
    before:absolute before:inset-0 -before:z-10 before:border-[calc(2.33/16*1rem)] before:rounded-[inherit] before:[clip-path:var(--clip-path-4)]
    after:absolute after:inset-0 -before:z-10 after:bg-radial-(--radial-2) after:[clip-path:var(--clip-path-3)] md:after:[clip-path:var(--clip-path-1)]
  `,
  "default": "before:absolute before:inset-0 -before:z-10 before:bg-radial-(--radial-2) before:[clip-path:var(--clip-path-3)] md:before:[clip-path:var(--clip-path-1)]",
};

const colorVariants: Record<NonNullable<UIGlassProps["color"]>, string> = {
  default: "bg-white/9",
  gold: "bg-gold-2/11 text-gold-4 before:border-gold-4/80!",
};

export const UIGlass: FC<UIGlassProps> = ({
  children,
  className,
  border = "default",
  color = "default",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        `
          shadow-1 overflow-hidden rounded-sm backdrop-blur-md
          md:rounded-md
        `,
        borderVariants[border],
        colorVariants[color],
        className,
      )}
    >
      {children}
    </div>
  );
};
