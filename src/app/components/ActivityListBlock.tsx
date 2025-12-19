import type { PaliaActivity } from "../data"
import { CalendarPlus, CalendarOff, MapPin } from "lucide-react"
import { formatHourMeridiem } from "../utils"

type ActivityListBlock = {
  activity: PaliaActivity;
  addToSchedule: (activity: PaliaActivity) => void;
  removeFromSchedule: (activity: PaliaActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
  scheduleIds: Array<string> | undefined;
}

export default function ActivityListBlock({activity, addToSchedule, removeFromSchedule, toggleModal, scheduleIds}: ActivityListBlock) {

  return (
    <div 
      key={activity.id} 
      style={{
        background: `${activity.colorBg}`,
        color: `${activity.colorText}`,
        borderColor: `${activity.colorBorder}`
      }}
      className="border-2 rounded-md px-4 py-2 flex flex-col text-left shadow-md relative gap-2 overflow-x-clip"
    >
      {
        // toggle between add or remove from schedule buttons based on whether or not the activity is on the schedule or not
        scheduleIds?.includes(activity.id) ? 
        (
          <button onClick={() => removeFromSchedule(activity)} className="absolute right-4 hover:cursor-pointer">
            <CalendarOff />
          </button>
        ) : (
          <button onClick={() => addToSchedule(activity)} className="absolute right-4 hover:cursor-pointer">
            <CalendarPlus />
          </button>
        )
      }
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
      <span className="font-bold text-sm">{formatHourMeridiem(activity.startHour)} - {formatHourMeridiem(activity.endHour)}</span>
    </div>
  )
}