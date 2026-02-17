import { type ScheduledActivity } from "../data";
import { CalendarOff, MapPin } from "lucide-react";
import Image from "next/image";
import { ItemPosition } from "./Schedule";

type ScheduleItemProps = {
  activity: ScheduledActivity;
  toggleScheduleItem: (activityToSchedule: ScheduledActivity) => void;
  scheduleRowHeight: number;
  scheduleStartingHour: number;
  itemPosition: ItemPosition;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ScheduleItem({ 
  activity,
  toggleScheduleItem, 
  scheduleRowHeight,
  scheduleStartingHour, 
  itemPosition,
  toggleModal
} : ScheduleItemProps) {


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

  return (
    <div 
      key={activity.id} 
      style={{ 
        top: `${getStartPosition(activity.startHour)}rem`,
        height: `${getSpan(activity) * scheduleRowHeight}rem`,
        background: `color-mix(in srgb, ${activity.rarityColor} 10%, white)`,
        color: `${activity.rarityColor}`,
        borderColor: `${activity.rarityColor}`,
        zIndex: `${getZIndex(activity)}`,
        width: `${itemPosition.widthPercent}%`,
        left: `${itemPosition.leftPercent}%`
      }}
      className="border-2 rounded-lg shadow-md px-2 py-0.5 absolute"
    >
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2 min-w-0 overflow-hidden">
          <button 
            className="hover: cursor-pointer"
            onClick={() => {toggleModal(activity.name, activity.locationImage, activity.location, true)}}
          >
            <MapPin size={20} />
          </button>
          <span className="overflow-hidden shrink-0">{activity.name}</span>
          {
            activity.bait && activity.baitImage &&
            <div className="flex flex-row gap-2 shrink-0">
                <Image
                  placeholder="blur"
                  blurDataURL="/PlaceholderMap.jpg"
                  src={activity.baitImage}
                  width={20}
                  height={20}
                  alt={activity.bait}
                  title={activity.bait}
                  className="object-contain"
                />
                <span className="text-sm">Required</span>
            </div>
          }
        </div>
        <button onClick={() => toggleScheduleItem(activity)} className="hover: cursor-pointer pl-2">
          <CalendarOff size={20} />
        </button>
      </div>
    </div>
  )
}