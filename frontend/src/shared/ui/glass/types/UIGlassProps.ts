import type { ReactNode } from "react";

export interface UIGlassProps {
  children: ReactNode;
  className?: string;
  border?: "corner" | "corner-fixed" | "default";
  onClick?: () => void;
}
