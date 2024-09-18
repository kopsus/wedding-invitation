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

export function formatDateTimeline(dateString: string | number | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
}
