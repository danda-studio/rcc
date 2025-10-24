"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComplexBanner } from "@/widgets/complex";
import {
  ComplexCatalogWidget,
  ComplexConstructionWidget,
  ComplexFooterWidget,
  ComplexMortgageWidget,
  ResidentialWidget,
} from "@/widgets/complex/ui";
import { ComplexAboutWidget } from "@/widgets/complex/ui/about";
import { ContactFormWidget } from "@/widgets/contact";

const queryClient = new QueryClient();

export function ComplexPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`
        flex
        flex-col
        gap-15
        md:gap-30
      `}
      >
        <ComplexBanner />

        <section id="about" aria-label="О комплексе">
          <ComplexAboutWidget />
        </section>

        <section aria-label="Типы жилья">
          <ResidentialWidget />
        </section>

        <section id="mortgage" aria-label="Ипотека">
          <ComplexMortgageWidget />
        </section>

        <section id="construction" aria-label="Ход строительства">
          <ComplexConstructionWidget />
        </section>

        <section id="catalog" aria-label="Каталог квартир">
          <ComplexCatalogWidget />
        </section>

        <section aria-label="Форма обратной связи">
          <ContactFormWidget />
        </section>

        <ComplexFooterWidget />
      </main>
    </QueryClientProvider>
  );
}
