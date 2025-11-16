import type { FC } from "react";
import type { ComplexTagProps } from "./type";
import { cx } from "class-variance-authority";
import { UIGlass } from "@/shared/ui/glass";

export const ComplexTag: FC<ComplexTagProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <UIGlass
      className={cx(className, `
        p-4 pr-8
        md:p-6 md:pr-15
      `)}
    >
      {title && (title.start || title.middle || title.end) && (
        <p className={`
          mb-10 h-7.25 leading-7.25 -tracking-sm
          md:mb-15 md:h-11.5 md:leading-11.5
        `}
        >
          {title.start && (
            <span className={`
              text-xs leading-[inherit] font-medium
              md:text-md
            `}
            >
              {title.start}
            </span>
          )}
          {title.middle && (
            <span className={`
              ml-0.75 text-xl leading-[inherit] font-semibold
              md:text-4xl
            `}
            >
              {title.middle}
            </span>
          )}
          {title.end && (
            <span className={`
              ml-0.75 text-md leading-[inherit] font-semibold
              md:text-lg
            `}
            >
              {title.end}
            </span>
          )}
        </p>
      )}
      <p className={`
        text-xs -tracking-sm
        md:text-lg
      `}
      >
        {description}
      </p>
    </UIGlass>
  );
};
