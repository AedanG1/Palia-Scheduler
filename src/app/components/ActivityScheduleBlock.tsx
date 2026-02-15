import { paliaActivities, TimeSlot, type PaliaActivity, type ScheduledActivity } from "../data";
import { CalendarOff, MapPin } from "lucide-react";
import { JSX } from "react";
import useFormatHourString from "../hooks/useFormatHourString";

type ActivityScheduleBlockProps = {
  activity: ScheduledActivity;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  scheduleRowHeight: number;
  scheduleStartingHour: number;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityScheduleBlock({ 
  activity,
  toggleScheduleSlot, 
  scheduleRowHeight,
  scheduleStartingHour, 
  toggleModal
} : ActivityScheduleBlockProps) {

  const format = useFormatHourString();

  // get the top position of the activity based on it's starting hour
  const getStartPosition = (startHour: number): number => {
    return (((startHour - scheduleStartingHour) + 24) % 24) * scheduleRowHeight;
  }

  // get the span of the activity in hours
  const getSpan = (activity: ScheduledActivity): number => {
    if (activity.endHour >= activity.startHour) {
      return (activity.endHour - activity.startHour);
    } else {
      return (24 - activity.startHour + activity.endHour);
    }
  }

  // get the z-index by subtracting the span from largest span size possible + 1
  const getZIndex = (activity: ScheduledActivity): number => {
    const span = getSpan(activity);
    const zIndex = 25 - span;
    return zIndex;
  }

  /*
  ** TODO: add collision detection to the div's width property so that if there are multiple items with the same
  ** start time, the row gets divided into however many columns needed to fit the items.
  ** To improve visibility of overlapping items, indent items which are positioned on top of items with greater spans.
  */
  return (
    <div 
      key={activity.id} 
      style={{ 
        top: `${getStartPosition(activity.startHour)}rem`,
        height: `${getSpan(activity) * scheduleRowHeight}rem`,
        background: `color-mix(in srgb, ${activity.rarityColor} 10%, white)`,
        color: `${activity.rarityColor}`,
        borderColor: `${activity.rarityColor}`,
        zIndex: `${getZIndex(activity)}`
      }}
      className="border-2 rounded-lg shadow-md px-2 py-0.5 absolute w-full"
    >
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <button 
            className="hover: cursor-pointer"
            onClick={() => {toggleModal(activity.name, activity.locationImage, activity.location, true)}}
          >
            <MapPin size={20} />
          </button>
          <span className="truncate">{activity.name}</span>
        </div>
        <button onClick={() => toggleScheduleSlot(activity)} className="hover: cursor-pointer">
          <CalendarOff size={20} />
        </button>
      </div>
    </div>
  )
}