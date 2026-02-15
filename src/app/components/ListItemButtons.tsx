import { TimeSlot, PaliaActivity, ScheduledActivity } from "../data";
import { Sunrise, Sun, Sunset, Moon, CalendarPlus } from "lucide-react";
import useFormatHourString from "../hooks/useFormatHourString";
            
type ListItemButtonsProps = {
  schedule: Array<ScheduledActivity>;
  activity: PaliaActivity;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
}

export default function ListItemButtons({schedule, activity, toggleScheduleSlot}: ListItemButtonsProps) {
  const format = useFormatHourString();

  const getIcon = (label: string) => {
    switch (label) {
      case "morning":
        return <Sunrise size={20} />
      case "day":
        return <Sun size={20} />
      case "evening":
        return <Sunset size={20} />
      case "night":
        return <Moon size={20} />
      default:
        return <CalendarPlus size={20} />
    }
  }

  const scheduleButtons = activity.timesAvailable.sort((a, b) => a.startHour - b.startHour).map((slot: TimeSlot) => {
      const { id, timesAvailable, ...rest } = activity;
      const activityToSchedule = {
        ...rest,
        ...slot
      }

      const isScheduled = schedule.some(s => s.id === slot.id);
      
      return (
        <button 
          key={slot.id}
          onClick={() => toggleScheduleSlot(activityToSchedule)}
          className="flex-1 p-3 text-slate-600 bg-white/70 hover:bg-white hover:shadow-sm hover:cursor-pointer rounded-lg transition-all font-medium text-sm flex items-center justify-center gap-2"
        >
          {getIcon(slot.label)}
          <span className="capitalize text-slate-600">
            {
              slot.label === "other" ?
                `${format(slot.startHour).toLocaleLowerCase()} - ${format(slot.endHour).toLocaleLowerCase()}`
              :
                slot.label
            }
          </span>
        </button>
      )
    })

  return (
    <div className="flex gap-2">
      {scheduleButtons}
    </div>
  )
}
