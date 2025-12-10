import type { ChangeEvent } from "react";
import type { CountryCode, UIPhoneFieldProps } from "./types";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Search } from "lucide-react";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { withMask } from "use-mask-input";
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

  const countryCodes: CountryCode[] = useMemo(() => data?.data as unknown as CountryCode[] ?? [], [data]);

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

  const mask = useMemo(() => {
    if (!selectedCountry) {
      return;
    }
    return selectedCountry.mask;
  }, [selectedCountry]);
  const inputMask = useMemo(() => {
    return mask?.split(" ").slice(1).join(" ").replaceAll("X", "9");
  }, [mask]);

  const handleCodeChange = useCallback((newCode: string) => {
    onChange({ code: newCode, number: "" });
    setIsOpen(false);
  }, [onChange, value.number]);

  const handleNumberChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange({ code: value.code, number: e.target.value });
  }, [onChange, value.code]);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <Field className="relative flex flex-row !gap-0">
      <label
        htmlFor={id}
        className={`
          z-20 inline-flex !w-fit shrink-0 items-center rounded-tl-md
          rounded-bl-md border-y border-s border-gray-2 bg-gray-3 pr-2.5 pl-2
          has-[+div_input.border-red-1]:border-red-1
          has-[+div_input:focus]:border-blue-6
          has-[+div_input:hover]:border-blue-6
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
              h-9 gap-1.5 rounded-xs border-none border-r-gray-6 bg-gray-8!
              focus:outline-none!
              focus-visible:border-none focus-visible:ring-0
              focus-visible:ring-transparent focus-visible:ring-offset-0
              focus-visible:outline-none
              data-[state=open]:border-none! data-[state=open]:ring-0!
              data-[state=open]:outline-none!
              [&>svg]:hidden
            `}
          >
            <SelectValue>
              <div className="flex items-center gap-1.5">
                {selectedCountry
                  ? (
                      <CountryFlag region={selectedCountry.region} />
                    )
                  : (
                      <div className="size-4 shrink-0 rounded-full bg-gray-6" />
                    )}
                <span className="text-sm whitespace-nowrap text-blue-6">
                  {value.code ? value.code.split("-")[0] : "+7"}
                </span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`
                    flex-shrink-0 text-gray-10 transition-transform duration-200
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
            className="-left-2 mt-1 border-none bg-gray-2"
            align="start"
            sideOffset={4}
          >
            <div>
              <div className="relative">
                <Search className={`
                  pointer-events-none absolute top-1/2 left-3 size-4
                  -translate-y-1/2 text-gray-12
                `}
                />

                <input
                  type="text"
                  placeholder="Поиск"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={`
                    h-10 w-full rounded-md border-none bg-gray-3 pr-3 pl-10
                    text-sm placeholder-gray-5
                    focus:ring-0 focus:outline-none
                  `}
                  onKeyDown={e => e.stopPropagation()}
                />
              </div>
            </div>

            {filteredCountries.length === 0
              ? (
                  <div className={`
                    mt-3 flex h-[10rem] w-[19.50rem] flex-col justify-center p-2
                    text-center text-sm text-gray-11
                    md:w-[27.55rem]
                  `}
                  >
                    Ничего не найдено
                  </div>
                )
              : (
                  <div
                    ref={parentRef}
                    className={`
                      mt-3 max-h-[19.5rem] w-[19.5rem] overflow-y-auto p-2
                      md:w-[29.6rem]
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

      <div className="relative grow">
        <FieldLabel
          className={`
            pointer-events-none absolute top-1/2 left-0 z-10 -translate-y-1/2
            text-gray-5 transition-all
            has-[+input:focus,+input:not(:placeholder-shown)]:top-2.25
            has-[+input:focus,+input:not(:placeholder-shown)]:translate-y-0
            has-[+input:focus,+input:not(:placeholder-shown)]:text-xxs
          `}
          htmlFor={id}
        >
          {label}
        </FieldLabel>

        {inputMask && (
          <Input
            id={id}
            placeholder=" "
            value={value.number}
            onChange={handleNumberChange}
            className={cn(`
              rounded-tl-none rounded-bl-none !border-l-0 pt-5.75 pb-2.25 !pl-0
              leading-5
            `, error && "border-red-1")}
            ref={withMask(inputMask, {
              placeholder: "_",
              showMaskOnHover: false,
            })}
          />
        )}

      </div>
      {error && (
        <span className="absolute top-full text-xxs leading-none text-red-1">
          {error}
        </span>
      )}
    </Field>
  );
});
