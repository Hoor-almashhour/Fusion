import type { useTranslations } from "next-intl";

export type TFunc = ReturnType<typeof useTranslations>;
export interface TProps {
  t: TFunc;
}
