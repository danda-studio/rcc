import type { FC } from "react";
import {ComplexAboutWidget} from "@/widgets/complex/ui/about";
import { ComplexBanner } from "@/widgets/complex";
import {ComplexCatalogWidget, ComplexConstructionWidget, ComplexMortgageWidget} from "@/widgets/complex/ui";
import {ComplexFooterWidget, ResidentialWidget} from "@/widgets/complex/ui";

export const ComplexPage: FC = () => {
  return (
    <>
      <ComplexBanner />
        <ComplexAboutWidget />

        <ResidentialWidget />
        <ComplexMortgageWidget />
        <ComplexConstructionWidget />
        <ComplexCatalogWidget />
        <ComplexFooterWidget />
    </>
  );
};
