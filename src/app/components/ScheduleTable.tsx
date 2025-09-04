'use client'

import type { PaliaActivity } from "../data"
import {JSX} from "react"
import CurrentTimeIndicator from "./CurrentTimeIndicator";

type ScheduleTableProps = {
  schedule: Array<PaliaActivity> | null;
  removeFromSchedule: (activity: PaliaActivity) => void;
}

export default function ScheduleTable({
   schedule, 
   removeFromSchedule, 
  }: ScheduleTableProps): JSX.Element {

  // create an array to store each hour to display on the schedule
  // shift start of schedule to 3am. 24, 25, 26 becomes 0, 1, 2
  const hoursToDisplay = Array.from({ length: 24 }, (_, i) => (i + 3) % 24);

  const formatHour = (hour: number): string => {
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const meridiem = hour >= 12 ? 'pm' : 'am';
    return `${displayHour} ${meridiem}`;
  }

  const getStartHour = (hour: number): number => {
    if (hour >= 3) {
      return hour - 2;
    } else {
      return hour + 22;
    }
  }

  const getSpan = (activity: PaliaActivity): number => {
    if (activity.endHour >= activity.startHour) {
      return activity.endHour - activity.startHour;
    } else {
      return 24 - activity.startHour + activity.endHour;
    }
  }

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h2 className="text-2xl font-bold border-b pb-2 border-slate-600">Daily Schedule</h2>
      <div className="flex bg-white rounded-lg shadow-lg p-4">
        {/* Time of day color indicator */}
        <div  
          style={{
            background: `
              linear-gradient(
                to bottom,
                #4338ca 0%,    /* 3am - indigo-700 */
                #f87171 10%,    /* 5am - red-400 */
                #fcd34d 15%,   /* 6am - amber-300 */
                #fcd34d 40%,   /* 6am - amber-300 */
                #f97316 60%,   /* 5pm - orange-500 */
                #f87171 65%,    /* 6pm - red-400 */
                #7c3aed 70%,   /* 7pm - violet-600 */
                #4338ca 90%   /* 9pm - indigo-700 */
              )
            `
          }}
          className="h-full w-1/128 rounded-lg">
        </div>

        {/* Time Labels Column */}
        <div className="w-16 text-right pr-2 border-r border-slate-200">
          {hoursToDisplay.map(hour => (
            <div key={hour} className="h-8 flex items-center justify-end">
              <span className="text-sm text-slate-500">{formatHour(hour)}</span>
            </div>
          ))}
        </div>

        {/* Schedule Column */}
        <div className="relative w-full grid grid-rows-24">

          {/* Background grid lines */}
          {hoursToDisplay.map((hour: number): JSX.Element => (
            <div key={`line-${hour}`} className="h-8 border-b border-slate-200"></div>
          ))}

          {/* Current Time Indicator */}
          <CurrentTimeIndicator />

          {/* Activity Blocks */}
          <div className="absolute inset-0 grid grid-rows-24">
            {schedule?.map((activity: PaliaActivity): JSX.Element => {
              return (
                <button 
                  key={activity.id} 
                  style={{ 
                    gridRowStart: getStartHour(activity.startHour),
                    gridRowEnd: `span ${getSpan(activity)}`,
                    background: `${activity.colorBg}`,
                    color: `${activity.colorText}`,
                    borderColor: `${activity.colorBorder}`
                  }}
                  className="hover:cursor-pointer border-2 rounded-lg shadow-md"
                  onClick={() => removeFromSchedule(activity)}
                >
                  {activity.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}