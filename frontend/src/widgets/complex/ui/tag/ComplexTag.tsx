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
        p-4
        md:p-6
        pr-8
        md:pr-15
      `)}
    >
      {title && (title.start || title.middle || title.end) && (
        <p className={`
          mb-10
          md:mb-15
          leading-7.25
          h-7.25
          md:h-11.5
          md:leading-11.5
        `}
        >
          {title.start && (
            <span className={`
              text-xs
              md:text-md
              font-medium
              leading-[inherit]
            `}
            >
              {title.start}
            </span>
          )}
          {title.middle && (
            <span className={`
              text-xl
              md:text-4xl
              font-semibold
              ml-0.75
              leading-[inherit]
            `}
            >
              {title.middle}
            </span>
          )}
          {title.end && (
            <span className={`
              text-md
              md:text-lg
              font-semibold
              ml-0.75
              leading-[inherit]
            `}
            >
              {title.end}
            </span>
          )}
        </p>
      )}
      <p className={`
        text-xs
        md:text-md
      `}
      >
        {description}
      </p>
    </UIGlass>
  );
};
