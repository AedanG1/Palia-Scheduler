import type { PaliaActivity } from "../data";
import { CalendarOff, MapPin } from "lucide-react";
import { JSX } from "react";

type ActivityScheduleBlockProps = {
  schedule: Array<PaliaActivity> | null;
  removeFromSchedule: (activity: PaliaActivity) => void;
  scheduleStartingHour: number;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityScheduleBlock({ 
  schedule, 
  removeFromSchedule, 
  scheduleStartingHour, 
  toggleModal
} : ActivityScheduleBlockProps) {

  // get the grid position, 0-24, of the activity based on it's starting hour
  const getStartPosition = (startHour: number): number => {
    return ((startHour - scheduleStartingHour + 24) % 24) + 1;
  }

  const getSpan = (activity: PaliaActivity): number => {
    if (activity.endHour >= activity.startHour) {
      return activity.endHour - activity.startHour;
    } else {
      return 24 - activity.startHour + activity.endHour;
    }
  }

  const getZIndex = (activity: PaliaActivity): number => {
    const span = getSpan(activity);
    let zIndex = 0;
    if (span > 6) {
      zIndex = 0;  
    } else if (span <= 6 && span > 3) {
      zIndex = 1;
    } else if (span <= 3 && span > 1) {
      zIndex = 2;
    } else {
      zIndex = 3;
    }
    return zIndex;
  }

  return (
    <div className="absolute inset-0 grid grid-rows-24 grid-cols-1">
      {schedule?.map((activity: PaliaActivity): JSX.Element => {
        return (
          <div 
            key={activity.id} 
            style={{ 
              gridRowStart: getStartPosition(activity.startHour),
              gridRowEnd: `span ${getSpan(activity)}`,
              background: `${activity.colorBg}`,
              color: `${activity.colorText}`,
              borderColor: `${activity.colorBorder}`,
              zIndex: `${getZIndex(activity)}`
            }}
            className="border-2 rounded-lg shadow-md px-2 py-0.5 col-start-1 row-start-1"
          >
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <button 
                  className="hover: cursor-pointer"
                  onClick={() => {toggleModal(activity.name, activity.imagePath, activity.location, true)}}
                >
                  <MapPin size={20} />
                </button>
                <span>{activity.name}</span>
              </div>
              <button onClick={() => removeFromSchedule(activity)} className="hover: cursor-pointer">
                <CalendarOff size={20} />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}