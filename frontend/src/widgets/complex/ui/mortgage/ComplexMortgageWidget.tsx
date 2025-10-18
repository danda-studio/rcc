import type { FC } from "react";
import { MousePointerClick, TicketPercent, Users, Wallet } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { UIInfo } from "@/shared/ui/info/UIInfo";

export const ComplexMortgageWidget: FC = () => {
  return (

    <section className={`
      bg-radial-(--radial-4)
      md:bg-radial-(--radial-3)
      h-284.75
      md:h-295.75
      text-white
      relative
      rounded-md
      overflow-hidden
    `}
    >
      <div className={`
        absolute
        inset-0
        px-3
        md:px-10
        py-8
        max-md:pb-3
        md:py-15
      `}
      >
        <div className={`
          w-full
          md:w-291
          h-full
          flex
          flex-col
          items-start
        `}
        >
          <h1 className={`
            text-3xl
            md:text-6-5xl
            mb-5
            md:mb-8
            font-medium
            bg-linear-1
            bg-clip-text
            text-transparent
            -tracking-md
          `}
          >
            Ипотека
            <br />
            со ставкой 2%
          </h1>

          <p className={`
            text-base
            md:text-lg
            leading-[1.2]
            w-69.25
            md:w-135.5
          `}
          >
            Не упустите возможность!
            <br />
            <span className="text-white/40">
              Закажите обратный звонок, чтобы узнать подробности!
            </span>
          </p>

          <div className={`
            grid
            grid-cols-1
            md:grid-cols-2
            gap-x-4
            gap-y-7
            md:gap-y-9
            w-full
            md:w-222
            pr-1
            md:pr-8
            mt-10
            md:mt-auto
          `}
          >
            <UIInfo
              icon={<Users />}
              description="Для данного объекта недвижимости доступна Госпрограмма для новых регионов со ставкой 2% и сроком до 30 лет"
            />

            <UIInfo
              icon={<Wallet />}
              description={(
                <>
                  Первоначальный взнос всего от 10%.
                  <br />
                  Возможность использовать материнский капитал в качестве первоначального взноса
                </>
              )}
            />

            <UIInfo
              icon={<TicketPercent />}
              description="Льготные категорим граждан: участникам СВО, сотрудникам госучреждений, многодетным семьям"
            />
          </div>
        </div>
      </div>

      <Image
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/buildings/2.png"
        className={`
          absolute
          left-8
          md:left-250.25
          -bottom-28.25
          md:-bottom-14.25
          min-w-108.5
          md:w-280.25
          md:h-280.25
        `}
      />

      <div className={`
        absolute
        left-1/2
        max-md:-translate-x-1/2
        md:left-241.25
        bottom-0
        w-full
        md:w-230.75
        h-34
        md:h-47.5
        overflow-hidden
        bg-blue-6/9
        blur-lg
      `}
      >
        <Image
          width={192}
          height={108}
          alt="Hero image"
          src="/images/buildings/2.png"
          className={`
            absolute
            -bottom-28.25
            md:-bottom-14.25
            left-8
            md:left-9
            min-w-108.5
            md:min-w-280.25
            md:min-h-280.25
          `}
        />
      </div>

      <Button
        className={`
          absolute
          max-md:inset-x-3
          md:right-11
          bottom-3
          md:bottom-15
        `}
        variant="outline"
        size="lg"
      >
        <MousePointerClick />
        Заказать звонок
      </Button>

    </section>
  );
};
