'use client'

import { useState, useEffect } from "react";

export interface PaliaTime {
  paliaTime24Hour: string;
  paliaTime12Hour: string;
  paliaCurrentHour: number;
  paliaCurrentMinute: number;
}

export default function usePaliaTime(): PaliaTime {
  const [paliaTime, setPaliaTime] = useState<PaliaTime>({
    paliaCurrentMinute: 0,
    paliaCurrentHour: 0,
    paliaTime24Hour: "00:00",
    paliaTime12Hour: "12:00 AM",
  });

  const PST_UTC_SUNDAY_OFFSET = 60 * 60 * (8 + 3 * 24);
  const MINUTE = 60;
  const HOUR = 60 * 60;
  const DAY = 60 * 60 * 24;

  const format12Hour = (hour: number): string => {
  if (hour > 12) {
    hour = hour - 12;
  } else if (hour === 0) {
    hour = 12;
  }
    return hour.toFixed(0);
  }

  const formatSegment = (minute: number): string => {
    return minute.toFixed(0).padStart(2, '0');
  }

  const getMeridiem = (hour: number): string => {
    return hour > 12 ? "PM" : "AM";
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const epochSeconds = now.getTime() / 1000;
      const realTimePST = epochSeconds - PST_UTC_SUNDAY_OFFSET;
      const paliaSeconds = (realTimePST * 24) % DAY;

      const totalMinutes = Math.floor(paliaSeconds / MINUTE);
      const minute = totalMinutes % 60;
      const hour = Math.floor(totalMinutes / 60);

      setPaliaTime({
        paliaCurrentHour: hour,
        paliaCurrentMinute: minute,
        paliaTime24Hour: `${formatSegment(hour)}:${formatSegment(minute)}`,
        paliaTime12Hour: `${format12Hour(hour)}:${formatSegment(minute)} ${getMeridiem(hour)}`,
      });
    }, 250)

    return () => clearInterval(intervalId);
  }, [])

  return paliaTime;
}