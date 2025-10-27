import type { ChangeEvent } from "react";
import type { CountryCode, UIPhoneFieldProps } from "./types";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Search } from "lucide-react";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { getApiCountryCodes } from "@/shared/api/generated";
import { Field, FieldLabel } from "@/shared/lib/shadcn/ui/field";
import { Input } from "@/shared/lib/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/shared/lib/shadcn/ui/select";
import { cn } from "@/shared/lib/shadcn/utils";
import { CountryFlag } from "@/shared/ui/phone-field/CountryFlag";
import { CountrySelectItem } from "@/shared/ui/phone-field/CountrySelectItem";
import "flag-icons/css/flag-icons.min.css";

export const UIPhoneField = memo((props: UIPhoneFieldProps) => {
  const { id, label, value, onChange, error } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const { data } = useQuery({
    queryKey: ["country-codes"],
    queryFn: () =>
      getApiCountryCodes(),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const countryCodes: CountryCode[] = useMemo(() => data?.data as CountryCode[] ?? [], [data]);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) {
      return countryCodes;
    }
    const query = searchQuery.toLowerCase();
    return countryCodes.filter(
      c =>
        c.region.toLowerCase().includes(query)
        || c.countryPhoneCode?.includes(query),
    );
  }, [countryCodes, searchQuery]);

  const rowVirtualizer = useVirtualizer({
    count: filteredCountries.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 5,
  });

  const selectedCountry = useMemo(() => {
    const parts = value.code.match(/^\+(\d+)(?:-(.+))?$/);
    if (!parts) {
      return countryCodes.find(c => c.countryPhoneCode === value.code);
    }

    const code = parts[1];
    const region = parts[2];

    if (region) {
      return countryCodes.find(c =>
        c.countryPhoneCode === `+${code}` && `+${code}` && c.region.toLowerCase() === region.toLowerCase(),
      );
    }

    return countryCodes.find(c => c.countryPhoneCode === code);
  }, [countryCodes, value.code]);
  const handleCodeChange = useCallback((newCode: string) => {
    onChange({ code: newCode, number: value.number });
    setIsOpen(false);
  }, [onChange, value.number]);

  const handleNumberChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange({ code: value.code, number: e.target.value });
  }, [onChange, value.code]);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <Field className={`
      relative
      flex
      flex-row
      !gap-0
    `}
    >
      <label
        htmlFor={id}
        className={`
          pl-2
          pr-2.5
          items-center
          z-20
          shrink-0
          inline-flex
          !w-fit
          bg-gray-3
          rounded-tl-md
          rounded-bl-md
          border-s
          border-y
          border-gray-2
          has-[+div_input:hover]:border-blue-6
          has-[+div_input:focus]:border-blue-6
          has-[+div_input.border-red-1]:border-red-1
        `}
      >
        <Select
          value={value.code}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <SelectTrigger
            aria-label="Выбрать код страны"
            className={`
              border-none
              !bg-gray-8
              h-9
              gap-1.5
              !focus:outline-none
              focus-visible:border-none
              focus-visible:ring-offset-0
              !data-[state=open]:outline-none
              !data-[state=open]:ring-0
              !data-[state=open]:border-none
              focus-visible:ring-0
              focus-visible:ring-transparent
              focus-visible:outline-none
              [&>svg]:hidden
              rounded-xs
              border-r-gray-6
            `}
          >
            <SelectValue>
              <div className={`
                flex
                items-center
                gap-1.5
              `}
              >
                {selectedCountry
                  ? (
                      <CountryFlag region={selectedCountry.region} />
                    )
                  : (
                      <div className={`
                        size-4
                        bg-gray-6
                        rounded-full
                        shrink-0
                      `}
                      />
                    )}
                <span className={`
                  text-sm
                  text-blue-6
                  whitespace-nowrap
                `}
                >
                  {value.code ? value.code.split("-")[0] : "+7"}
                </span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`
                    text-gray-10
                    flex-shrink-0
                    transition-transform
                    duration-200
                    ${
    isOpen ? "rotate-180" : ""
    }
                  `}
                >
                  <path
                    d="M2.5 3.75L5 6.25L7.5 3.75"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent
            className={`
              bg-gray-2
              -left-2
              mt-1
              border-none
            `}
            align="start"
            sideOffset={4}
          >
            <div>
              <div className="relative">
                <Search className={`
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  size-4
                  text-gray-12
                  pointer-events-none
                `}
                />

                <input
                  type="text"
                  placeholder="Поиск"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={`
                    w-full
                    placeholder-gray-5
                    h-10
                    bg-gray-3
                    border-none
                    rounded-md
                    pl-10
                    pr-3
                    text-sm
                    focus:outline-none
                    focus:ring-0
                  `}
                  onKeyDown={e => e.stopPropagation()}
                />
              </div>
            </div>

            {filteredCountries.length === 0
              ? (
                  <div className={`
                    h-[10rem]
                    w-[19.50rem]
                    md:w-[27.55rem]
                    flex
                    flex-col
                    justify-center
                    p-2
                    mt-3
                    text-center
                    text-sm
                    text-gray-11
                  `}
                  >
                    Ничего не найдено
                  </div>
                )
              : (
                  <div
                    ref={parentRef}
                    className={`
                      max-h-[19.5rem]
                      md:w-[29.6rem]
                      w-[19.5rem]
                      overflow-y-auto
                      p-2
                      mt-3
                    `}
                  >
                    <div
                      style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const country = filteredCountries[virtualRow.index];
                        return (
                          <div
                            key={`${country.countryPhoneCode}-${country.region}`}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              transform: `translateY(${virtualRow.start}px)`,
                            }}
                          >
                            <CountrySelectItem
                              country={country}
                              onSelect={handleCodeChange}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
          </SelectContent>
        </Select>
      </label>

      <div className={`
        relative
        grow
      `}
      >
        <FieldLabel
          className={`
            absolute
            z-10
            left-0
            text-gray-5
            has-[+input:focus,+input:not(:placeholder-shown)]:top-2.25
            top-1/2
            has-[+input:focus,+input:not(:placeholder-shown)]:translate-y-0
            -translate-y-1/2
            has-[+input:focus,+input:not(:placeholder-shown)]:text-xxs
            pointer-events-none
            transition-all
          `}
          htmlFor={id}
        >
          {label}
        </FieldLabel>

        <Input
          id={id}
          placeholder=" "
          value={value.number}
          onChange={handleNumberChange}
          className={cn(`
            !border-l-0
            rounded-tl-none
            rounded-bl-none
            pb-2.25
            pt-5.75
            leading-5
            !pl-0
          `, error && "border-red-1")}
        />

      </div>
      {error && (
        <span className={`
          top-full
          absolute
          text-xxs
          leading-none
          text-red-1
        `}
        >
          {error}
        </span>
      )}
    </Field>
  );
});
