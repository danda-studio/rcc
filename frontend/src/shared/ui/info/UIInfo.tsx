import type { FC } from "react";
import type { UIInfoProps } from "./types";
import { cn } from "@/shared/lib/shadcn/utils";
import { UIGlass } from "../glass";

const colorVariants: Record<NonNullable<UIInfoProps["color"]>, string> = {
  default: "bg-white",
  gray: "border border-gray-7 bg-gray-1 box-content",
};

export const UIInfo: FC<UIInfoProps> = ({ icon, description, className, color = "default" }) => {
  return (
    <div className={cn(`
      -m-px flex flex-col rounded-md p-6
      md:p-8
    `, colorVariants[color], className)}
    >
      <div className="mb-5 flex">
        <UIGlass
          className={`
            inline-block p-4.5
            before:border-[calc(1.62/16*1rem)] before:border-white/80
            md:p-5
            [&_svg]:size-6
          `}
          border="corner"
          color="gold"
        >
          {icon}
        </UIGlass>
      </div>
      <p className={`
        text-base leading-[1.2] font-medium -tracking-sm text-blue-6
        md:text-md-x
      `}
      >
        {description}
      </p>
    </div>
  );
};
