import type { FC } from "react";
import { ComplexBanner } from "@/widgets/complex";
import { ComplexCatalogWidget, ComplexConstructionWidget, ComplexFooterWidget, ComplexMortgageWidget, ResidentialWidget } from "@/widgets/complex/ui";

import { ComplexAboutWidget } from "@/widgets/complex/ui/about";

export const ComplexPage: FC = () => {
  return (
    <>
      <ComplexCatalogWidget />
      <ComplexBanner />
      <ComplexAboutWidget />

      <ResidentialWidget />
      <ComplexMortgageWidget />
      <ComplexConstructionWidget />
      <ComplexFooterWidget />
    </>
  );
};
