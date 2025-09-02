'use client'

import { useState, useEffect, useMemo } from "react";

export interface PalianTime {
  paliaTime: number;
  clockText: string;
}

export default function usePalianTime(): PalianTime {
  const [paliaTime, setPalianTime] = useState<number>(0);

  const PST_UTC_SUNDAY_OFFSET = 60 * 60 * (8 + 3 * 24);
  const MINUTE = 60;
  const HOUR = 60 * 60;
  const DAY = 60 * 60 * 24;

  function formatHour(hour: number): string {
  if (hour > 12) {
    hour = hour - 12;
  }
    return hour.toFixed(0).padStart(2, '0');
  }

  function formatMinute(minute: number): string {
    return minute.toFixed(0).padStart(2, '0');
  }

  function getMeridiem(hour: number): string {
    return hour > 12 ? "PM" : "AM";
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const epoch_seconds = now.getTime() / 1000;
      const realTimePST = epoch_seconds - PST_UTC_SUNDAY_OFFSET;
      const newPaliaTime = (realTimePST * 24) % DAY;

      setPalianTime(newPaliaTime);
    }, 250)

    return () => clearInterval(intervalId);
  }, [])

  const clockText = useMemo((): string => {
    const palianTimeMinutes = Math.floor(paliaTime / MINUTE);
    const m = palianTimeMinutes % 60;
    const h = (palianTimeMinutes - m) / 60;
    return `${formatHour(h)}:${formatMinute(m)} ${getMeridiem(h)}`;
  }, [paliaTime])

  return {paliaTime, clockText}
}