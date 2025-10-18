import type { FC } from "react";
import type { UIInfoProps } from "./types";
import { UIGlass } from "../glass";

export const UIInfo: FC<UIInfoProps> = ({ icon, description }) => {
  return (
    <div className={`
      flex
      flex-col
    `}
    >
      <div className={`
        flex
        mb-7.5
        md:mb-12.5
      `}
      >
        <UIGlass
          className={`
            before:border-white/80
            before:border-[calc(1.62/16*1rem)]
            inline-block
            p-5
            [&_svg]:size-6
          `}
          border="corner"
        >
          {icon}
        </UIGlass>
      </div>
      <p className={`
        text-base
        md:text-md
        leading-[1.2]
        -tracking-sm
      `}
      >
        {description}
      </p>
    </div>
  );
};
