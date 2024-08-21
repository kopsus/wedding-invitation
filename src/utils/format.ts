import { DateTimeFormatOptions } from "intl";

export const formatDate = (dateString: string): string => {
  // Correct type for the options parameter
  const options: DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", options);
};
