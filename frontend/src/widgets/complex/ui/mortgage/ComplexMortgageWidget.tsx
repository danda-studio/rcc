import type { FC } from "react";
import { MousePointerClick, TicketPercent, Users, Wallet } from "lucide-react";
import Image from "next/image";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { UIInfo } from "@/shared/ui/info/UIInfo";

export const ComplexMortgageWidget: FC = () => {
  return (

    <section className={`
      relative h-307.25 overflow-hidden rounded-md bg-radial-(--radial-4)
      text-white
      md:h-295.75 md:bg-radial-(--radial-3)
    `}
    >

      <div className={`
        absolute inset-0 px-3 py-8
        max-md:pb-3
        md:px-10 md:py-15
      `}
      >
        <div className={`
          flex h-full w-full flex-col items-start
          md:w-291
        `}
        >
          <h1 className={`
            mb-5 bg-linear-(--linear-1) bg-clip-text text-3xl font-medium
            -tracking-md text-transparent
            md:mb-8 md:text-6-5xl
          `}
          >
            Ипотека
            <br />
            со ставкой 2%
          </h1>

          <p className={`
            w-69.25 text-base leading-[1.2]
            md:w-178.5 md:text-lg
          `}
          >
            Не упустите возможность!
            {" "}
            <span className="text-white/40">
              Закажите обратный звонок, чтобы узнать подробности!
            </span>
          </p>

        </div>
      </div>

      <Image
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/buildings/2.webp"
        className={`
          absolute right-0 bottom-0 h-269.75 w-216
          max-md:hidden
        `}
      />
      <Image
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/buildings/2-md.webp"
        className={`
          absolute right-0 bottom-2.5 z-10 h-94.5 w-79
          md:hidden
        `}
      />

      <div className={`
        absolute bottom-0 left-1/2 h-40 w-full overflow-hidden
        bg-linear-(--linear-4)
        max-md:z-10 max-md:-translate-x-1/2
        md:left-0 md:h-72 md:w-480
      `}
      />

      <div className={`
        absolute bottom-85.25 left-3 grid grid-cols-1 gap-x-4 gap-y-3.25 pr-1
        max-md:right-3
        md:bottom-15 md:left-10 md:w-246 md:grid-cols-2 md:gap-y-4 md:pr-0
      `}
      >
        <UIInfo
          icon={<Users />}
          description="Ипотека 2% для всех граждан РФ на 30 лет"
        />

        <UIInfo
          icon={<Wallet />}
          description={(
            <>
              Первоначальный взнос 10,1 %
              <br />
              Сумма до 6 000 000 рублей
            </>
          )}
        />

        <UIInfo
          icon={<TicketPercent />}
          description="Специальные предложения от застройщика участникам СВО, госслужащим и многодетным семьям"
        />
      </div>

      <ContactFormModalFeature>
        <Button
          className={`
            absolute bottom-3
            max-md:inset-x-3 max-md:z-10
            md:right-11 md:bottom-15
          `}
          variant="outline"
          size="lg"
        >
          <MousePointerClick />
          Заказать звонок
        </Button>
      </ContactFormModalFeature>

    </section>
  );
};
