import { Button } from "@/shared/lib/shadcn/ui/button";
import React from 'react';

export const ComplexCatalogWidget = () => {
  return (
    <div className="bg-liner-7 -mx-4">
      <div className="flex flex-col items-center">
        <h2 className='bg-liner-6 bg-clip-text text-transparent  font-medium text-2-3xl md:text-5xl'>
          Каталог квартир
        </h2>
        <span className='text-white md:text-lg text-md'>Всё, что нужно для жизни — рядом с вами</span>
      </div>
      <div className="flex justify-center gap-3">
        <Button>asd</Button>
        <Button >2 комнаты</Button>
      </div>
    </div>
  );
};