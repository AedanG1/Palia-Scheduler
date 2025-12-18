import type { PaliaActivity } from "../data"
import { CalendarPlus, MapPin } from "lucide-react"
import { formatHourMeridiem } from "../utils"

type ActivityListBlock = {
  activity: PaliaActivity;
  addToSchedule: (activity: PaliaActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityListBlock({activity, addToSchedule, toggleModal}: ActivityListBlock) {

  {/* IF AN ACTIVITY HAS A TIME OF DAY SPECIFIED, RENDER A LIST OF BUTTONS THAT CORRESPONDS TO EACH TIME OF DAY. THE
    TIMES OF DAY THAT ARE AVAILABLE TO SCHEDULE FOR THE GIVEN ACTIVITY SHOULD BE IN COLOR AND THE REST GREYED OUT. 
    WHEN CLICKED, THE ACTIVITY SHOULD BE ADDED TO THE SCHEDULE BUT NOT REMOVED FROM THE ACTIVITY LIST UNLESS ALL AVAILABLE TIMES OF DAY
    ARE SCHEDULED */}

  {/* CHANGE THE ACTIVITY LIST SO THAT THEY DON'T DISAPPEAR WHEN SCHEDULED BUT RATHER, THEIR BUTTON CHANGES FROM ADD TO SCHEDULE TO
    REMOVE FROM SCHEDULE */}

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
      <button onClick={() => addToSchedule(activity)} className="absolute right-4 hover:cursor-pointer">
        <CalendarPlus />
      </button>
      <div>
        <span className="font-bold">{activity.name} <span className="font-normal">{activity.timeOfDay ? `(${activity.timeOfDay})` : ""}</span></span>
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