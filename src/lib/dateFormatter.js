import { parseISO, format } from "date-fns";
import { enUS } from "date-fns/locale";

export const fullDateTime = (date) => {
  return format(parseISO(date), "MM/d/yyyy : HH:mm aaa", { locale: enUS });
};
