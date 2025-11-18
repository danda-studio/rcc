import type { FC } from "react";
import type { UILayoutProps } from "./types";

export const UILayout: FC<UILayoutProps> = ({ children }) => {
  return (
    <main className={`
      p-1
      md:p-4
    `}
    >
      {children}
    </main>
  );
};
