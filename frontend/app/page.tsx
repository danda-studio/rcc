"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComplexPage } from "@/pages/complex";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ComplexPage />
      ;
    </QueryClientProvider>
  );
}
