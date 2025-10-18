import type { FC } from "react";
import { ComplexBanner } from "@/widgets/complex";
import { ComplexMortgageWidget } from "@/widgets/complex/ui";

export const ComplexPage: FC = () => {
  return (
    <>
      <ComplexBanner />

      <ComplexMortgageWidget />
    </>
  );
};
