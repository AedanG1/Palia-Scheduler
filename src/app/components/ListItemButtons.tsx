import { TimeSlot, PaliaActivity, ScheduledActivity } from "../data/data";
import { Sunrise, Sun, Sunset, Moon, CalendarPlus, CalendarCheck } from "lucide-react";
import useFormatHourString from "../hooks/useFormatHourString";
            
type ListItemButtonsProps = {
  schedule: Array<ScheduledActivity>;
  activity: PaliaActivity;
  toggleScheduleItem: (activityToSchedule: ScheduledActivity) => void;
  setHoveredButton: (slotId: string | null) => void;
}

export default function ListItemButtons({schedule, activity, toggleScheduleItem, setHoveredButton}: ListItemButtonsProps) {
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
          onMouseEnter={() => setHoveredButton(slot.id)}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => toggleScheduleItem(activityToSchedule)}
          className={`flex-1 p-3 hover:shadow-sm hover:cursor-pointer rounded-lg transition-all font-medium text-sm flex items-center justify-center gap-2 
            ${
              isScheduled
              ? "text-green-800 bg-green-200/70 hover:bg-green-200 hover:shadow-green-500/50"
              : "text-slate-600 bg-white/70 hover:bg-white"
            }`}
        >
          {
            isScheduled 
            ? <CalendarCheck size={20} /> 
            : getIcon(slot.label)
          }
          <span className="capitalize">
            {
              slot.label === "other"
              ? `${format(slot.startHour).toLocaleLowerCase()} - ${format(slot.endHour).toLocaleLowerCase()}`
              : slot.label
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
