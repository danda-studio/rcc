import Image from "next/image";

export const BuildingCommissioning = () => {
  return (
    <article
      className={`
        relative rounded-xl bg-white p-1
        md:p-2
      `}
    >
      <div
        className={`
          flex items-center gap-3
        `}
      >
        <div
          className={`
            relative aspect-[1.4/1] w-[38%] shrink-0 overflow-hidden rounded-lg
          `}
        >
          <Image
            src="/images/promotion/building-commissioning/promotionFrame.webp"
            alt="Дом сдан"
            fill
            className="object-cover"
          />
        </div>

        <div
          className={`
            flex flex-col gap-3
          `}
        >
          <h3
            className={`
              text-md-x leading-none font-medium text-blue-6
              md:text-lg
            `}
          >
            Дом сдан!
          </h3>

          <p
            className={`
              text-sm leading-[1.1] text-gray-4
              md:max-w-[13rem] md:text-base
            `}
          >
            Строительство завершено, и дом готов к заселению
          </p>
        </div>
      </div>

      <div
        className={`
          md:rounded-xlx md:-top-7 md:-right-4 md:px-4 md:py-3
          absolute -top-4 -right-3 z-1 flex rotate-[10deg] items-center gap-1
          rounded-lg bg-radial-(--radial-10) px-2 py-2 shadow-lg
        `}
      >
        <Image
          src="/images/promotion/building-commissioning/buildingShield.svg"
          alt="Shield image"
          width={24}
          height={24}
          className={`
            size-4
            md:size-6
          `}
        />

        <p
          className={`
            text-base
            text-blue-6
          `}
        >
          Сдан
        </p>
      </div>
    </article>
  );
};
