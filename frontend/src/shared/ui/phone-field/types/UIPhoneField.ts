export interface CountryCode {
  region: string;
  countryName: number;
  countryPhoneCode?: string;
  mask: string;
}

export interface UIPhoneFieldProps {
  id: string;
  label: string;
  value: {
    code: string;
    number: string;
  };
  onChange: (value: { code: string; number: string }) => void;
  error?: string;
}
