import type { ReactNode } from "react";

export interface UIInfoProps {
  icon: ReactNode;
  description: ReactNode;
  className?: string;
  color?: "gray" | "default";
}
