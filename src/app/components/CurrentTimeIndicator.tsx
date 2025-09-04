'use client'

import usePaliaTime from "../hooks/usePaliaTime";

export default function CurrentTimeIndicator({scheduleStartingHour}: {scheduleStartingHour: number}) {
  const { paliaCurrentHour, paliaCurrentMinute } = usePaliaTime();

  // schedule starts at 3:00, adjust current hour so that 3:00 acts as 0:00
  const adjustedHour = (paliaCurrentHour - scheduleStartingHour + 24) % 24;
  const minutesFrom3am = ((adjustedHour * 60) + paliaCurrentMinute);
  const gridOffset = (adjustedHour - 1) * 0.5; // amount of grid lines between 0 and current hour * 0.5 rem
  const topPosition = ((minutesFrom3am / 8) + gridOffset) * 0.25;

  return (
    <div
      style={{
        top: `${topPosition}rem`
      }}
      className="absolute w-full h-0.5 bg-red-500 z-50 top-167.5"
    >
      {/* circle */}
      <div className="absolute w-3 h-3 bg-red-500 rounded-lg top-[-4.5] left-[-6.5]"></div>
    </div>
  )
}