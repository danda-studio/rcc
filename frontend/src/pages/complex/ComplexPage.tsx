import type { FC } from "react";
import {ComplexFooterWidget, ResidentialWidget} from "@/widgets/complex/ui";
import { ComplexBanner } from "@/widgets/complex";
import { ComplexMortgageWidget } from "@/widgets/complex/ui";

export const ComplexPage: FC = () => {
  return (
    <>
      <ComplexBanner />
        <ResidentialWidget />
        <ComplexFooterWidget />

      <ComplexMortgageWidget />
    </>
  );
};
