'use client'

import usePaliaTime from "../hooks/usePaliaTime";

export default function CurrentTimeIndicator() {
  const { paliaCurrentHour, paliaCurrentMinute } = usePaliaTime();

  const minutesFrom3am = paliaCurrentHour * 60 + paliaCurrentMinute - 180;
  const gridOffset = (paliaCurrentHour - 3) * 0.5;
  const topPosition = ((minutesFrom3am / 8) + gridOffset) * 0.25;

  return (
    <div
      style={{
        top: `${topPosition}rem`
      }}
      className="absolute w-full h-0.5 bg-red-500 z-50"
    >
      {/* circle */}
      <div className="absolute w-3 h-3 bg-red-500 rounded-lg top-[-4.5] left-[-6.5]"></div>
    </div>
  )
}