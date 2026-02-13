import { paliaActivities, TimeSlot, type PaliaActivity, type ScheduledActivity } from "../data";
import { CalendarOff, MapPin } from "lucide-react";
import { JSX } from "react";

type ActivityScheduleBlockProps = {
  activity: ScheduledActivity;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  scheduleStartingHour: number;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityScheduleBlock({ 
  activity,
  toggleScheduleSlot, 
  scheduleStartingHour, 
  toggleModal
} : ActivityScheduleBlockProps) {

  // get the grid position, 0-24, of the activity based on it's starting hour
  const getStartPosition = (startHour: number): number => {
    return ((startHour - scheduleStartingHour + 24) % 24) + 1;
  }

  const getSpan = (activity: ScheduledActivity): number => {
    if (activity.endHour >= activity.startHour) {
      return activity.endHour - activity.startHour;
    } else {
      return 24 - activity.startHour + activity.endHour;
    }
  }

  const getZIndex = (activity: ScheduledActivity): number => {
    const span = getSpan(activity);
    let zIndex = 1;
    if (span > 6) {
      zIndex = 1;  
    } else if (span <= 6 && span > 3) {
      zIndex = 2;
    } else if (span <= 3 && span > 1) {
      zIndex = 3;
    } else {
      zIndex = 4;
    }
    return zIndex;
  }

  return (
    <div className="absolute inset-0 grid grid-rows-24 grid-cols-1">
      <div 
        key={activity.id} 
        style={{ 
          gridRowStart: getStartPosition(activity.startHour),
          gridRowEnd: `span ${getSpan(activity)}`,
          background: `color-mix(in srgb, ${activity.rarityColor} 10%, white)`,
          color: `${activity.rarityColor}`,
          borderColor: `${activity.rarityColor}`,
          zIndex: `${getZIndex(activity)}`
        }}
        className="border-2 rounded-lg shadow-md px-2 py-0.5 col-start-1 row-start-1"
      >
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <button 
              className="hover: cursor-pointer"
              onClick={() => {toggleModal(activity.name, activity.locationImage, activity.location, true)}}
            >
              <MapPin size={20} />
            </button>
            <span>{activity.name}</span>
          </div>
          <button onClick={() => toggleScheduleSlot(activity)} className="hover: cursor-pointer">
            <CalendarOff size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}