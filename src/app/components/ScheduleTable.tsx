'use client'

import type { PaliaActivity } from "../data"
import {act, JSX} from "react"
import { paliaActivities } from "../data"

type ScheduleTableProps = {
  schedule: Array<PaliaActivity> | null;
  removeFromSchedule: (activity: PaliaActivity) => void;
  paliaCurrentMinute: number | undefined;
  paliaCurrentHour: number | undefined;
}

export default function ScheduleTable({
   schedule, 
   removeFromSchedule, 
   paliaCurrentHour, 
   paliaCurrentMinute 
  }: ScheduleTableProps): JSX.Element {

  // create an array to store each hour to display on the schedule
  // shift start of schedule to 3am. 24, 25, 26 become 0, 1, 2
  const hoursToDisplay = Array.from({ length: 24 }, (_, i) => (i + 3) % 24);

  const formatHour = (hour: number): string => {
    const h = hour % 24;
    const meridiem = h >= 12 ? 'pm' : 'am';
    const displayHour = h % 12 === 0 ? 12 : h % 12;
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
      // wraps past midnight
      return 24 - activity.startHour + activity.endHour;
    }
  }

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h2 className="text-2xl font-bold border-b pb-2 border-slate-600">Daily Schedule</h2>
      <div className="flex bg-white rounded-lg shadow-lg p-4">
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