export const formatHourMeridiem = (hour: number): string => {
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const meridiem = hour >= 12 ? 'pm' : 'am';
  return `${displayHour} ${meridiem}`;
}