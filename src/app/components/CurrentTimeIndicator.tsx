'use client'

import usePaliaTime from "../hooks/usePaliaTime";

export type CurrentTimeIndicatorProps = {
  scheduleStartingHour: number;
  scheduleRowHeight: number;
}

export default function CurrentTimeIndicator({scheduleStartingHour, scheduleRowHeight}: CurrentTimeIndicatorProps) {
  const { paliaCurrentHour, paliaCurrentMinute } = usePaliaTime();

  // Shift so that scheduleStartingHour acts as "0"
  const adjustedHour = (paliaCurrentHour - scheduleStartingHour + 24) % 24;
  // each row is one hour so multiply adjusted hour by the row height
  const hourPosition = adjustedHour * scheduleRowHeight;
  // each row is 60 minutes so divide the minute by 60 to get a fraction of an hour
  const minutePosition = (paliaCurrentMinute / 60) * scheduleRowHeight;
  const topPosition = hourPosition + minutePosition;

  return (
    <div
      style={{
        top: `${topPosition}rem`
      }}
      className="absolute w-full h-0.5 bg-red-500 z-50 rounded-lg"
    >
      {/* circle */}
      <div className="absolute w-3 h-3 bg-red-500 rounded-lg top-[-4.8] left-[-6.5]"></div>
    </div>
  )
}