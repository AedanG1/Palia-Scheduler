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
  width: string;
  leftPosition: string;
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
      let leftPosition = 0;
      group.forEach((item: ScheduledActivity) => {
        // create an empty object to store width and left position
        const positions = { width: "", leftPosition: ""};

        if (group.length > 1) {
          // set width to 1/group.length
          positions.width = `1/${group.length}`;
          // set left position to left position count/group.length
          positions.leftPosition = `${leftPosition}/${group.length}`;
          // add to itemPositionsById
          itemPositionsById[item.id] = positions;
          // increment left position value
          leftPosition++;
        } else {
          positions.width = "full";
          positions.leftPosition = "0"
          itemPositionsById[item.id] = positions;
        }
      })
      // reset left position value
      leftPosition = 0;
    })
  }

  // create a schedule item for each of the activities on the schedule
  const scheduleItems = schedule?.map((activity: ScheduledActivity) => {
    const itemPosition = itemPositionsById[activity.id];

    return (
      <ScheduleItem 
        schedule={schedule}
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