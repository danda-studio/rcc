import type { FC } from "react";
import type { ApartmentCountRoomSelectProps } from "./types/ApartmentCountRoomSelectProps";
import { Badge } from "@/shared/lib/shadcn/ui/badge";

const counts = ["1 комната", "2 комнаты"];

export const ApartmentCountRoomSelect: FC<ApartmentCountRoomSelectProps> = ({ value, onChange }) => {
  return (
    <div className={`
      flex
      gap-3
    `}
    >
      {counts.map(count => (
        <Badge
          className={`
            relative
            has-[input:checked]:bg-white
            has-[input:checked]:before:hidden
            has-[input:checked]:text-blue-6
          `}
          size="lg"
          key={count}
          variant="glass"
        >
          {count}
          <input
            className={`
              absolute
              inset-0
              opacity-0
            `}
            name="ApartmentCountRoom"
            value={count}
            defaultChecked={count === value}
            type="radio"
            onClick={() => onChange(count)}
          />
        </Badge>
      ))}
    </div>
  );
};
