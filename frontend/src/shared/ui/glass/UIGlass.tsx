import type { FC } from "react";
import type { UIGlassProps } from "./types";
import { cx } from "class-variance-authority";

const borderVariants: Record<NonNullable<UIGlassProps["border"]>, string> = {
  corner: "before:absolute before:inset-0 -before:z-10 before:border-[calc(2.33/16*1rem)] before:rounded-[inherit] before:[clip-path:var(--clip-path-2)]",
  default: "before:absolute before:inset-0 -before:z-10 before:bg-radial-(--radial-2) before:[clip-path:var(--clip-path-1)]",
};

export const UIGlass: FC<UIGlassProps> = ({
  children,
  className,
  border = "default",
}) => {
  return (
    <div className={cx(
      "bg-white/9 shadow-1 backdrop-blur-md rounded-xs overflow-hidden",
      borderVariants[border],
      className,
    )}
    >
      {children}
    </div>
  );
};
