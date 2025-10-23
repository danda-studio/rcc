import {memo, useCallback} from "react";
import {CountryCode} from "./types";
import {CountryFlag} from "./CountryFlag";

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
        cursor-pointer
        border-none
        rounded-md
        py-3
        px-3
        hover:bg-gray-3
        w-full
        transition-colors
      `}
    >
      <div className={`
        w-full
        flex
        items-center
        justify-between
        gap-4
      `}
      >
        <div className={`
          w-full
          flex
          items-center
          gap-3
          min-w-0
          flex-1
        `}
        >
          <CountryFlag region={country.region} />
          <span className={`
            text-sm
            font-normal
            truncate
          `}
          >
            {country.countryName}
          </span>
        </div>
        <span className={`
          float-right
          text-sm
          text-gray-11
          flex-shrink-0
          ml-auto
          tabular-nums
        `}
        >
          {country.countryPhoneCode}
        </span>
      </div>
    </div>
  );
});