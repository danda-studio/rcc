import type { FC } from "react";
import { MousePointerClick, TicketPercent, Users, Wallet } from "lucide-react";
import Image from "next/image";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { UIInfo } from "@/shared/ui/info/UIInfo";

export const ComplexMortgageWidget: FC = () => {
  return (

    <section className={`
      relative h-284.75 overflow-hidden rounded-md bg-radial-(--radial-4)
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
            md:w-135.5 md:text-lg
          `}
          >
            Не упустите возможность!
            <br />
            <span className="text-white/40">
              Закажите обратный звонок, чтобы узнать подробности!
            </span>
          </p>

          <div className={`
            mt-10 grid w-full grid-cols-1 gap-x-4 gap-y-7 pr-1
            md:mt-auto md:w-222 md:grid-cols-2 md:gap-y-9 md:pr-8
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
                  Первоначальный взнос 10,1 %
                  <br />
                  Уникальные предложения от застройщика для участников СВО, многодетных семей и госслужащих
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
        src="/images/complex/house-banner.png"
        className={`
          absolute -bottom-28.25 left-8 min-w-108.5
          md:-bottom-14.25 md:left-250.25 md:h-280.25 md:w-280.25
        `}
      />
      <div className={`
        absolute bottom-0 left-1/2 h-40 w-full overflow-hidden
        bg-linear-(--linear-4)
        max-md:-translate-x-1/2
        md:left-98 md:h-72 md:w-480
      `}
      />

      {/* <div className={`
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
          src="/images/complex/house-banner.webp"
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
      </div> */}

      <ContactFormModalFeature>
        <Button
          className={`
            absolute bottom-3
            max-md:inset-x-3
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
