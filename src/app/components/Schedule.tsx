'use client'

import type { ScheduledActivity } from "../data"
import {JSX} from "react"
import CurrentTimeIndicator from "./CurrentTimeIndicator";
import { formatHourMeridiem } from "../utils";
import ScheduleItem from "./ScheduleItem";

type ScheduleProps = {
  schedule: Array<ScheduledActivity> | null;
  handleClearSchedule: () => void;
  toggleScheduleItem: (activityToSchedule: ScheduledActivity) => void;
  scheduleStartingHour: number;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export type ItemPosition = {
  widthPercent: number;
  leftPercent: number;
}

export default function Schedule({
  schedule, 
  handleClearSchedule,
  toggleScheduleItem, 
  scheduleStartingHour,
  toggleModal
}: ScheduleProps): JSX.Element {

  // create an array to store each hour to display on the schedule for grid lines
  const hoursToDisplay = Array.from({ length: 24 }, (_, i) => (i + scheduleStartingHour) % 24);
  // set the height of each row in rem
  const scheduleRowHeight = 2;
  // set the total schedule div height
  const scheduleHeight = 24 * scheduleRowHeight;

  // create an object to store item positions by ID
  const itemPositionsById: Record<string, ItemPosition> = {};
  // group each item by startHour
  const startHourGroups = new Map();

  if (schedule) {
    for (const item of schedule) {
      // set the startHour as key for the map
      const key = item.startHour;
      // if the key doesn't exist
      if (!startHourGroups.has(key)) {
        // create the key value pair
        startHourGroups.set(key, []);
      }
      // push the item to the key's array
      startHourGroups.get(key).push(item);
    }

    startHourGroups.forEach((group) => {
      group.forEach((item: ScheduledActivity, index: number) => {
        // calculate the percentage for width and left position
        const positions = {
          widthPercent: 100 / group.length,
          leftPercent: ( index / group.length ) * 100
        };

        // set calculated positions to current item ID
        itemPositionsById[item.id] = positions;
      })
    })
  }

  // create a schedule item for each of the activities on the schedule
  const scheduleItems = schedule?.map((activity: ScheduledActivity) => {
    const itemPosition = itemPositionsById[activity.id];

    return (
      <ScheduleItem 
        key={activity.id}
        activity={activity}
        toggleScheduleItem={toggleScheduleItem}
        scheduleRowHeight={scheduleRowHeight}
        scheduleStartingHour={scheduleStartingHour} 
        itemPosition={itemPosition}
        toggleModal={toggleModal}
      />
    )
  })

  return (
    <div className="md:w-1/2 flex flex-col gap-4">
      <div className="flex flex-row w-full justify-between border-b border-slate-600">
        <h2 className="text-2xl font-bold pb-2">Daily Schedule</h2>
        <button 
          className="hover: cursor-pointer"
          onClick={() => {handleClearSchedule()}}
        >
          Clear Schedule
        </button>
      </div>
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

        {/* Hour Labels Column */}
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
              className="border-t border-slate-200"></div>
          ))}

          {/* Current Time Indicator */}
          <CurrentTimeIndicator scheduleStartingHour={scheduleStartingHour} scheduleRowHeight={scheduleRowHeight} />

          {/* Create a block for each activity on the schedule */}
          <div 
            className="absolute inset-0"
            style={{
              height: `${scheduleHeight}rem`
            }} 
          >
            {scheduleItems}
          </div>
        </div>
      </div>
    </div>
  )
}