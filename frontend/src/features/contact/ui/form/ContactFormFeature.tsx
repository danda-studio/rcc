import type { FC } from "react";
import { UIField } from "@/shared";
import { Button } from "@/shared/lib/shadcn/ui/button";
import {
  Field,
  FieldGroup,
  FieldSeparator,
  FieldSet,
} from "@/shared/lib/shadcn/ui/field";

export const ContactFormFeature: FC = () => {
  return (
    <div className={`
      w-full
      max-w-md
      text-blue-6
    `}
    >
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <UIField
                id="name"
                label="Имя"
              />
              <UIField
                id="email"
                label="Email"
              />
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <Button
              type="submit"
            >
              Подобрать квартиру
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};
