'use client'

import type { PaliaActivity, ScheduledActivity } from "../data"
import {JSX} from "react"
import CurrentTimeIndicator from "./CurrentTimeIndicator";
import { formatHourMeridiem } from "../utils";
import ActivityScheduleBlock from "./ActivityScheduleBlock";

type ScheduleTableProps = {
  schedule: Array<ScheduledActivity> | null;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  scheduleStartingHour: number;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ScheduleTable({
   schedule, 
   toggleScheduleSlot, 
   scheduleStartingHour,
   toggleModal
  }: ScheduleTableProps): JSX.Element {

  //test commit
  // create an array to store each hour to display on the schedule
  const hoursToDisplay = Array.from({ length: 24 }, (_, i) => (i + scheduleStartingHour) % 24);
  const scheduleRowHeight = 2; // this number is in rem
  const scheduleHeight = 24 * scheduleRowHeight;

  const activityScheduleBlocks = schedule?.map((activity: ScheduledActivity) => {
    return (
      <ActivityScheduleBlock 
        key={activity.id}
        activity={activity}
        toggleScheduleSlot={toggleScheduleSlot}
        scheduleStartingHour={scheduleStartingHour} 
        toggleModal={toggleModal}
      />
    )
  })

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
                #ffd230 0%,    /* 3am - amber-300 */
                #ffd230 12.5%,   /* 6am - amber-300 */
                #74d4ff 12.5%,   /* 6am - sky-300 */
                #74d4ff 62.5%,    /* 6pm - sky-300 */
                #ffa2a2 62.5%,    /* 6pm - red-300 */
                #ffa2a2 74.7%,   /* 9pm - red-300 */
                #312c85 74.7%   /* 9pm - indigo-900 */
              )
            `
          }}
          className="h-full w-1/128 rounded-lg">
        </div>

        {/* Time Labels Column */}
        <div className="w-16 text-right pr-2 border-r border-slate-200">
          {hoursToDisplay.map((hour: number): JSX.Element => (
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

          {/* Create a block for each activity on the schedule */}
          <div className="absolute inset-0 grid grid-rows-24 grid-cols-1">
            {activityScheduleBlocks}
          </div>
        </div>
      </div>
    </div>
  )
}