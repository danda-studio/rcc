import { FC, useState, useMemo } from "react";
import { Field, FieldLabel } from "@/shared/lib/shadcn/ui/field";
import { Input } from "@/shared/lib/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/lib/shadcn/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getApiCountryCodes } from "@/shared/api/generated";
import "flag-icons/css/flag-icons.min.css";

interface CountryCode {
  region: string;
  countryCode: number;
  mask: string;
}

interface UIPhoneFieldProps {
  id: string;
  label: string;
  value: {
    code: string;
    number: string;
  };
  onChange: (value: { code: string; number: string }) => void;
  error?: string;
}

export const UIPhoneField: FC<UIPhoneFieldProps> = ({
                                                      id,
                                                      label,
                                                      value,
                                                      onChange,
                                                      error,
                                                    }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["country-codes"],
    queryFn: () =>
      getApiCountryCodes({ baseURL: "https://rcc-7z0s.onrender.com" }),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 7,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const countryCodes: CountryCode[] = data?.data ?? [];

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countryCodes;
    const query = searchQuery.toLowerCase();
    return countryCodes.filter(
      (c) =>
        c.region.toLowerCase().includes(query) ||
        c.countryCode.toString().includes(query)
    );
  }, [countryCodes, searchQuery]);

  const handleCodeChange = (newCode: string) => {
    onChange({ ...value, code: newCode });
    setSearchQuery("");
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, number: e.target.value });
  };

  const selectedCountry = countryCodes.find(
    (c) => `+${c.countryCode}` === value.code
  );

  return (
    <Field className="relative pb-10">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 flex items-center z-20">
          <Select
            value={value.code}
            onValueChange={handleCodeChange}
            onOpenChange={setIsOpen}
          >
            <SelectTrigger className="h-full border-none bg-transparent px-3 gap-1.5 focus:ring-0 focus:outline-none [&>svg]:hidden rounded-none border-r border-r-gray-6">
              <SelectValue>
                <div className="flex items-center gap-1.5">
                  {selectedCountry ? (
                    <span
                      className={`fi fi-${selectedCountry.region.toLowerCase()} w-5 h-4 rounded-sm flex-shrink-0`}
                      style={{ fontSize: '1.25rem' }}
                    />
                  ) : (
                    <div className="w-5 h-4 bg-gray-6 rounded-sm flex-shrink-0" />
                  )}
                  <span className="text-sm whitespace-nowrap">
                    {value.code || "+7"}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`text-gray-9 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
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
              className="bg-gray-2 border border-gray-6 "
              align="start"
              sideOffset={4}
            >
              <div className="p-3 border-b border-gray-6">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-9 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path
                      d="m21 21-4.35-4.35"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 bg-gray-3 border-none rounded-md pl-10 pr-3 text-sm focus:outline-none focus:ring-0"
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredCountries.map((c) => (
                  <SelectItem
                    key={`${c.region}-${c.countryCode}`}
                    value={`+${c.countryCode}`}
                    className="cursor-pointer rounded-md py-3 px-3 focus:bg-gray-3 data-[state=checked]:bg-gray-3 [&>span:first-child]:hidden"
                  >
                    <div className="flex items-center justify-between w-full gap-4">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <span
                          className={`fi fi-${c.region.toLowerCase()} w-6 h-4 rounded flex-shrink-0`}
                          style={{ fontSize: '1.5rem' }}
                        />
                        <span className="text-sm font-normal truncate">
                          {c.region}
                        </span>
                      </div>
                      <span className="text-sm text-gray-11 flex-shrink-0 ml-auto tabular-nums">
                        +{c.countryCode}
                      </span>
                    </div>
                  </SelectItem>
                ))}
                {filteredCountries.length === 0 && (
                  <div className="py-6 text-center text-sm text-gray-11">
                    Ничего не найдено
                  </div>
                )}
              </div>
            </SelectContent>
          </Select>
        </div>

        <FieldLabel
          className="absolute z-10 text-gray-5 px-3.5 has-[+input:focus,+input:not(:placeholder-shown)]:top-2.25 top-1/2 has-[+input:focus,+input:not(:placeholder-shown)]:translate-y-0 -translate-y-1/2 has-[+input:focus,+input:not(:placeholder-shown)]:text-xxs pointer-events-none transition-all"
          htmlFor={id}
          style={{ left: "90px" }}
        >
          {label}
        </FieldLabel>

        <Input
          id={id}
          placeholder=" "
          value={value.number}
          onChange={handleNumberChange}
          className="pb-2.25 pt-5.75 leading-5 pl-[100px]"
        />

        {error && (
          <p className="absolute -bottom-6 left-0 text-red-500 text-xs mt-1">
            {error}
          </p>
        )}
      </div>
    </Field>
  );
};