'use client'

import { useState, useEffect } from "react";

export interface PaliaTime {
  paliaTime24Hour: string | undefined;
  paliaTime12Hour: string | undefined;
  paliaCurrentHour: number | undefined;
  paliaCurrentMinute: number | undefined;
}

export default function usePaliaTime(): PaliaTime {
  const [paliaTimeInSeconds, setPaliaTimeInSeconds] = useState<number | null>(null);

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
      const epoch_seconds = now.getTime() / 1000;
      const realTimePST = epoch_seconds - PST_UTC_SUNDAY_OFFSET;
      const newPaliaTime = (realTimePST * 24) % DAY;

      setPaliaTimeInSeconds(newPaliaTime);
    }, 250)

    return () => clearInterval(intervalId);
  }, [])

  let paliaCurrentMinute: number | undefined;
  let paliaCurrentHour: number | undefined;
  let paliaTime24Hour: string | undefined;
  let paliaTime12Hour: string | undefined;

  if (paliaTimeInSeconds !== null) {
    const paliaTimeMinutes = Math.floor(paliaTimeInSeconds / MINUTE);
    const m = paliaTimeMinutes % 60;
    const h = (paliaTimeMinutes - m) / 60;

    paliaCurrentMinute = m;
    paliaCurrentHour = h;
    paliaTime24Hour = `${formatSegment(h)}:${formatSegment(m)}`;
    paliaTime12Hour = `${format12Hour(h)}:${formatSegment(m)} ${getMeridiem(h)}`;
  }

  return {paliaTime24Hour, paliaTime12Hour, paliaCurrentHour, paliaCurrentMinute}
}