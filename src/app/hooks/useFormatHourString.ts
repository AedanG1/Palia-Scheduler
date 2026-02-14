export const format12Hour = (hour: number): string => {
  if (hour > 12) {
    hour = hour - 12;
  } else if (hour === 0) {
    hour = 12;
  }
    return hour.toFixed(0);
}

export const getMeridiem = (hour: number): string => {
  return hour >= 12 ? "PM" : "AM";
}

export default function useFormatHourString() {
  const formatHourString = (hour: number): string => {
    return `${format12Hour(hour)}${getMeridiem(hour)}`;
  }
  return formatHourString;
} 