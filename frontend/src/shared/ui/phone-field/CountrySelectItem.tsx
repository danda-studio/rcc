import type { CountryCode } from "./types";
import { memo, useCallback } from "react";
import { CountryFlag } from "./CountryFlag";

export const CountrySelectItem = memo(({
  country,
  onSelect,
}: {
  country: CountryCode;
  onSelect: (value: string) => void;
}) => {
  const handleClick = useCallback(() => {
    onSelect(`${country.countryPhoneCode}-${country.region}`);
  }, [country, onSelect]);

  return (
    <div
      onClick={handleClick}
      className={`
        w-full cursor-pointer rounded-md border-none px-3 py-3 transition-colors
        hover:bg-gray-3
      `}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex w-full min-w-0 flex-1 items-center gap-3">
          <CountryFlag region={country.region} />
          <span className="truncate text-sm font-normal">
            {country.countryName}
          </span>
        </div>
        <span className={`
          float-right ml-auto flex-shrink-0 text-sm text-gray-11 tabular-nums
        `}
        >
          {country.countryPhoneCode}
        </span>
      </div>
    </div>
  );
});
