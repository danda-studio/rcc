import type { FC } from "react";
import {ComplexFooterWidget, ResidentialWidget} from "@/widgets/complex/ui";
import {ComplexAboutWidget} from "@/widgets/complex/ui/ComplexAbout";
import { ComplexBanner } from "@/widgets/complex";
import { ComplexMortgageWidget } from "@/widgets/complex/ui";

export const ComplexPage: FC = () => {
  return (
    <>
      <ComplexBanner />
        <ResidentialWidget />
        <ComplexAboutWidget />
        <ComplexFooterWidget />

      <ComplexMortgageWidget />
    </>
  );
};
