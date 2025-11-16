import type { FC } from "react";
import type { UIInfoProps } from "./types";
import { UIGlass } from "../glass";

export const UIInfo: FC<UIInfoProps> = ({ icon, description }) => {
  return (
    <div className="flex flex-col">
      <div className={`
        mb-7.5 flex
        md:mb-12.5
      `}
      >
        <UIGlass
          className={`
            inline-block p-5
            before:border-[calc(1.62/16*1rem)] before:border-white/80
            [&_svg]:size-6
          `}
          border="corner"
        >
          {icon}
        </UIGlass>
      </div>
      <p className={`
        text-base leading-[1.2] -tracking-sm
        md:text-md
      `}
      >
        {description}
      </p>
    </div>
  );
};
