import { useCallback, type FC } from "react";
import type { ApartmentCountRoomSelectProps } from "./types/ApartmentCountRoomSelectProps";
import { Badge } from "@/shared/lib/shadcn/ui/badge";

const counts = [1, 2];

export const ApartmentCountRoomSelect: FC<ApartmentCountRoomSelectProps> = ({ value, onChange }) => {
  const title = useCallback((room: number) => {
    let title = ""
    switch(room) {
      case 1:
        title = "1 комната"
        break
      case 2:
        title = "2 комнаты"
        break
    }
    return title
  }, [])
  return (
    <div className={`
      flex
      gap-3
    `}
    >
      {counts.map(count => (
        <label key={count}>
          <Badge
            className={`
              relative
              cursor-pointer
              has-[input:checked]:bg-white
              has-[input:checked]:before:hidden
              has-[input:checked]:text-blue-6
            `}
            size="lg"
            variant="glass"
          >
            {title(count)}
            <input
              className={`
                absolute
                inset-0
                opacity-0
                cursor-pointer
              `}
              type="radio"
              name="ApartmentCountRoom"
              value={count}
              checked={count === value}
              onChange={() => onChange(count)}
              aria-label={`${count}`}
            />
          </Badge>
        </label>
      ))}
    </div>
  );
};
