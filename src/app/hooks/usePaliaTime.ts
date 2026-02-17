'use client'

import { useState, useEffect } from "react"; 
import { format12Hour, getMeridiem } from "./useFormatHourString";

export type PaliaTime = { 
  paliaTime24Hour: string; 
  paliaTime12Hour: string; 
  paliaCurrentHour: number;
  paliaCurrentMinute: number;
  paliaDayNumber: number;
}

export default function usePaliaTime(): PaliaTime {
  const [paliaTime, setPaliaTime] = useState<PaliaTime>({
    paliaCurrentMinute: 0,
    paliaCurrentHour: 0,
    paliaTime24Hour: "00:00",
    paliaTime12Hour: "00:00",
    paliaDayNumber: 0,
  });

  // The offset in seconds from the Unix epoch (UTC) to the Palia epoch (Sunday 12AM PST).
  // (8 hours for UTC->PST) + (3 full days for Thursday->Sunday).
  const PST_UTC_SUNDAY_OFFSET = 60 * 60 * (8 + 3 * 24);
  const MINUTE = 60;
  const HOUR = 60 * 60;
  const DAY = 60 * 60 * 24;

  const formatSegment = (minute: number): string => {
    return minute.toFixed(0).padStart(2, '0');
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Palia's in-game clock is anchored to Sunday, August 13, 2023, at 12:00 AM PST.
      // Using the PST_UTC_SUNDAY_OFFSET we calculate the real-world seconds since Palia's epoch.
      const now = new Date();
      const epochSeconds = now.getTime() / 1000;
      const realSecondsSincePaliaEpoch = epochSeconds - PST_UTC_SUNDAY_OFFSET;
      // Palia time is 24x faster than real time.
      // Convert real seconds since Palia's epoch to Palia seconds
      const totalPaliaSeconds = realSecondsSincePaliaEpoch * 24;
      // Calculate the total number of Palia days that have passed since Palia's epoch
      const totalPaliaDayCount = Math.floor(totalPaliaSeconds / DAY);

      // get amount of seconds passed in the current palia day using modulo
      const paliaSecondsInCurrentDay = totalPaliaSeconds % DAY;
      // get amount of minutes passed in the current palia day
      const paliaMinutesInCurrentDay = Math.floor(paliaSecondsInCurrentDay / MINUTE);
      // convert amount of minutes passed to minutes in current hour (0-59)
      const minute = paliaMinutesInCurrentDay % 60;
      // convert amount of minutes passed to hour in current day (0-23)
      const hour = (paliaMinutesInCurrentDay - minute) / 60;

      setPaliaTime({
        paliaCurrentHour: hour,
        paliaCurrentMinute: minute,
        paliaTime24Hour: `${formatSegment(hour)}:${formatSegment(minute)}`,
        paliaTime12Hour: `${format12Hour(hour)}:${formatSegment(minute)} ${getMeridiem(hour)}`,
        paliaDayNumber: totalPaliaDayCount,
      });
    }, 250)

    return () => clearInterval(intervalId);
  }, [])

  return paliaTime;
}