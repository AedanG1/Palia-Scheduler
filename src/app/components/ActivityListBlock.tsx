import { JSX } from "react"
import type { PaliaActivity, ScheduledActivity, TimeSlot } from "../data"
import { CalendarPlus, CalendarOff, MapPin, Sun, Moon, Sunset, Sunrise } from "lucide-react"

type ActivityListBlock = {
  activity: PaliaActivity;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityListBlock({activity, toggleScheduleSlot, toggleModal}: ActivityListBlock) {

  // each button needs to give the scheduleActivity object ex. "cactus-moray-day"
  const scheduleButtons: Array<JSX.Element> = activity.timesAvailable.sort(
    (a, b) => a.startHour - b.startHour
  ).map(
    (slot: TimeSlot): JSX.Element => {
      const {id, timesAvailable, ...rest} = activity;
      const activityToSchedule = {
        ...rest,
        ...slot
      }

      let icon = <CalendarPlus />;

      switch(slot.label) {
        case "morning":
          icon = <Sunrise />
          break;
        case "day":
          icon = <Sun />
          break;
        case "evening":
          icon = <Sunset />
          break;
        case "night":
          icon = <Moon />
          break;
      }

      return (
        <button key={slot.id} onClick={() => toggleScheduleSlot(activityToSchedule)}>{icon}</button>
      )
    }
  );

  return (
    <div 
      key={activity.id} 
      style={{
        background: `${activity.colorBg}`,
        color: `${activity.colorText}`,
        borderColor: `${activity.colorBorder}`
      }}
      className="border-2 rounded-md px-4 py-2 flex flex-row text-left shadow-md justify-between"
    >
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-bold">{activity.name}</span>
          <button 
            className="flex flex-row items-center gap-1 hover:cursor-pointer"
            onClick={() => {toggleModal(activity.name, activity.imagePath, activity.location, true)}}
          > 
            <MapPin size={16} />
            {activity.location}
          </button>
        </div>
        <span className="opacity-70 text-sm">{activity.desc}</span>
      </div>
      <div className="flex flex-col gap-3">
        {scheduleButtons}
      </div>
    </div>
  )
}