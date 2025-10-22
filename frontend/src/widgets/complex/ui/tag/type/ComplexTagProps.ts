import type { ReactNode } from "react";

export interface ComplexTagProps {
  className?: string;
  title?: {
    start?: ReactNode;
    middle?: ReactNode;
    end?: ReactNode;
  };
  description: string | ReactNode;
}
