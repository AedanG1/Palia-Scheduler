import type { PaliaActivity } from "../data"
import {act, JSX} from "react"

type ScheduleTableProps = {
  schedule: Array<PaliaActivity> | null;
  removeFromSchedule: (activity: PaliaActivity) => void;
}

export default function ScheduleTable({ schedule, removeFromSchedule }: ScheduleTableProps) {
  return (
    <div>
      {!schedule ? null : schedule.map((activity: PaliaActivity): JSX.Element => {
        return <button 
                key={activity.id}
                onClick={() => { removeFromSchedule(activity) }}
                className="hover: cursor-pointer"
                >
                  {activity.name}: starts at {activity.startHour}
                </button>
      })}
    </div>
  )
}