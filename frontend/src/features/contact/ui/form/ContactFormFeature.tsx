import type { FC } from "react";
import { SocialTabSelect } from "@/entities/social";
import { UIInputField } from "@/shared";
import { Button } from "@/shared/lib/shadcn/ui/button";
import {
  Field,
} from "@/shared/lib/shadcn/ui/field";

export const ContactFormFeature: FC = () => {
  return (
    <div className={`
      w-full
      max-w-md
      text-blue-6
    `}
    >
      <form className={`
        flex
        flex-col
        gap-3.5
      `}
      >
        <UIInputField
          id="name"
          label="Имя"
        />
        <Field orientation="horizontal">
          <SocialTabSelect />
        </Field>
        <UIInputField
          id="email"
          label="Email"
        />
        <Field orientation="horizontal">
          <Button
            type="submit"
            className="w-full"
          >
            <span className="font-medium">
              Подобрать квартиру
            </span>
          </Button>
        </Field>
      </form>
    </div>
  );
};
