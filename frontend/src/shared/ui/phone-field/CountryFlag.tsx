import { memo } from "react";

export const CountryFlag = memo(({ region }: { region: string }) => (
  <span className={`
    fi
    fi-${region.toLowerCase()}
    fis
    !size-4
    rounded-full
    shrink-0
  `}
  />
));
