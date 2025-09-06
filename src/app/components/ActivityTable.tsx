import {JSX} from "react";
import { paliaActivities, PaliaActivity } from "../data";
import { CalendarPlus, MapPin } from "lucide-react";

type ActivityTableProps = {
  schedule: Array<PaliaActivity>;
  addToSchedule: (activity: PaliaActivity) => void;
}

export default function ActivityTable({schedule, addToSchedule}: ActivityTableProps): JSX.Element {
  // get IDs of activities on schedule
  const scheduleIds: Array<string> | undefined = schedule.map((activity: PaliaActivity): string => {
    return activity.id;
  }) 

  // show all activities that aren't already on the user's schedule, sorted by start time
  const activitiesToDisplay: Array<PaliaActivity> = paliaActivities.filter((activity: PaliaActivity) => {
    if (!scheduleIds?.includes(activity.id)) {
      return activity;
    }
  }).sort((a, b) => a.startHour - b.startHour);

  // Format the hour to 12 hour
  const formatHour = (hour: number): string => {
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const meridiem = hour >= 12 ? 'pm' : 'am';
    return `${displayHour} ${meridiem}`;
  }

  // create the Activity Elements from the activities that aren't on the user's schedule
  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <div 
              key={activity.id} 
              style={{
                background: `${activity.colorBg}`,
                color: `${activity.colorText}`,
                borderColor: `${activity.colorBorder}`
              }}
              className={`border-2 rounded-md px-4 py-2 flex flex-col text-left shadow-md relative gap-2`}
            >
              <button onClick={() => addToSchedule(activity)} className="absolute right-4 hover:cursor-pointer">
                <CalendarPlus />
              </button>
              <div>
                <span className="font-bold">{activity.name}</span>
                <button className="flex flex-row items-center gap-1 hover:cursor-pointer"> 
                  <MapPin size={16} />
                  {activity.location}
                </button>
              </div>
              <span className="opacity-70 text-sm">{activity.desc}</span>
              <span className="font-bold text-sm">{formatHour(activity.startHour)} - {formatHour(activity.endHour)}</span>
            </div>
  })

  return (
    <div className="flex flex-col gap-4 w-1/4">
      <h2 className="text-2xl font-bold border-b pb-2 border-slate-600">Activities</h2>
      <div className="flex flex-col gap-2 overflow-y-auto max-h-200">
        {activityElements}
      </div>
    </div>
  ) 
}