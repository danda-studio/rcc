import type { FC } from "react";
import type { CityBadgeProps } from "./types";
import { MapPinCheckInside } from "lucide-react";
import { Badge } from "@/shared/lib/shadcn/ui/badge";

export const CityBadge: FC<CityBadgeProps> = ({ name, className }) => {
  return (
    <Badge className={className}>
      <MapPinCheckInside />
      <span className="leading-3.5 -tracking-sm">
        {name}
      </span>
    </Badge>
  );
};
