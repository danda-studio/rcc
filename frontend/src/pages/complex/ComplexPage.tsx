import type { FC } from "react";
import { ComplexBanner } from "@/widgets/complex";
import { ComplexCatalogWidget, ComplexConstructionWidget, ComplexFooterWidget, ComplexMortgageWidget, ResidentialWidget } from "@/widgets/complex/ui";

import { ComplexAboutWidget } from "@/widgets/complex/ui/about";
import { ContactFormWidget } from "@/widgets/contact";

export const ComplexPage: FC = () => {
  return (
    <>
      <ComplexCatalogWidget />
      <ContactFormWidget />

      <ComplexBanner />
      <ComplexAboutWidget />

      <ResidentialWidget />
      <ComplexMortgageWidget />
      <ComplexConstructionWidget />
      <ComplexFooterWidget />
    </>
  );
};
