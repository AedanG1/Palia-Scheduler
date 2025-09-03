import {JSX} from "react";
import { paliaActivities, PaliaActivity } from "../data";

type ActivityTableProps = {
  schedule: Array<PaliaActivity>;
  addToSchedule: (activity: PaliaActivity) => void;
}

export default function ActivityTable({schedule, addToSchedule}: ActivityTableProps): JSX.Element {
  // show all activities that aren't already on the user's schedule
  const scheduleIds: Array<string> | undefined = schedule.map((activity: PaliaActivity): string => {
    return activity.id;
  }) 

  const activitiesToDisplay: Array<PaliaActivity> = paliaActivities.filter((activity: PaliaActivity) => {
    if (!scheduleIds?.includes(activity.id)) {
      return activity;
    }
  })

  const formatHour = (hour: number): string => {
    const h = hour % 24;
    const meridiem = h >= 12 ? 'pm' : 'am';
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    return `${displayHour} ${meridiem}`;
  }

  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <button 
              key={activity.id} 
              onClick={() => addToSchedule(activity)} 
              style={{
                background: `${activity.colorBg}`,
                color: `${activity.colorText}`,
                borderColor: `${activity.colorBorder}`
              }}
              className={`hover: cursor-pointer border-2 rounded-md px-4 py-2 flex flex-col text-left shadow-md`}
            >
              <span className="font-bold">{activity.name}</span>
              <span className="opacity-70 text-sm">{activity.desc}</span>
              <span className="font-bold text-sm">{formatHour(activity.startHour)} - {formatHour(activity.endHour)}</span>
            </button>
  })

  return (
    <div className="flex flex-col gap-4 w-1/4">
      <h2 className="text-2xl font-bold border-b pb-2 border-slate-600">Activities</h2>
      <div className="flex flex-col gap-2">
        {activityElements}
      </div>
    </div>
  ) 
}