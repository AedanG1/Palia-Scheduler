'use client'

import type { PaliaActivity } from "../data"
import {JSX} from "react"
import CurrentTimeIndicator from "./CurrentTimeIndicator";
import { formatHourMeridiem } from "../utils";
import ActivityScheduleBlock from "./ActivityScheduleBlock";

type ScheduleTableProps = {
  schedule: Array<PaliaActivity> | null;
  removeFromSchedule: (activity: PaliaActivity) => void;
  scheduleStartingHour: number;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ScheduleTable({
   schedule, 
   removeFromSchedule, 
   scheduleStartingHour,
   toggleModal
  }: ScheduleTableProps): JSX.Element {

  // create an array to store each hour to display on the schedule
  const hoursToDisplay = Array.from({ length: 24 }, (_, i) => (i + scheduleStartingHour) % 24);
  const scheduleRowHeight = 2; // this number is in rem

  return (
    <div className="md:w-1/2 flex flex-col gap-4">
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
                #fcd34d 60%,   /* 6am - amber-300 */
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
            <div 
              key={hour}
              style={{
                height: `${scheduleRowHeight}rem`
              }}
              className="flex items-center justify-end"
            >
              <span className="text-sm text-slate-500">{formatHourMeridiem(hour)}</span>
            </div>
          ))}
        </div>

        {/* Schedule Column */}
        <div className="relative w-full grid grid-rows-24">

          {/* Background grid lines */}
          {hoursToDisplay.map((hour: number): JSX.Element => (
            <div 
              key={`line-${hour}`} 
              style={{
                height: `${scheduleRowHeight}rem`
              }}
              className="border-b border-slate-200"></div>
          ))}

          {/* Current Time Indicator */}
          <CurrentTimeIndicator scheduleStartingHour={scheduleStartingHour} scheduleRowHeight={scheduleRowHeight} />

          {/* Activity Blocks */}
          <ActivityScheduleBlock 
            schedule={schedule} 
            removeFromSchedule={removeFromSchedule} 
            scheduleStartingHour={scheduleStartingHour} 
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  )
}