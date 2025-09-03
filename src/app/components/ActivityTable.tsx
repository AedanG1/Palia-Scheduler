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

  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <button 
              key={activity.id} 
              onClick={() => addToSchedule(activity)} 
              className="hover: cursor-pointer"
            >
              {activity.name}: starts at {activity.startHour}
            </button>
  })

  return (
    <div className="flex flex-col">{activityElements}</div>
  ) 
}