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
      return hour + 23;
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
    <div className={`w-full grid grid-cols-1`}>
      <h2>Daily Schedule</h2>
      <div className="flex">
        {/* Time Labels Column */}
        <div className="w-20 text-right pr-2 border-r border-slate-200">
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
            <div key={`line-${hour}`} className="h-8 border-b border-slate-700"></div>
          ))}

          {/* Activity Blocks */}
          <div className="absolute inset-0 grid grid-rows-24">
            {schedule?.map((activity: PaliaActivity): JSX.Element => {
              return (
                <div 
                  key={activity.id} 
                  style={{ 
                    gridRowStart: getStartHour(activity.startHour),
                    gridRowEnd: `span ${getSpan(activity)}`
                  }}
                  className="border bg-slate-600"
                  onClick={() => removeFromSchedule(activity)}
                >
                  {activity.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}