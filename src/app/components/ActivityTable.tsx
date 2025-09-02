import {act, JSX} from "react";
import { paliaActivities, PaliaActivity } from "../data";

type ActivityTableProps = {
  schedule: Array<PaliaActivity>;
  handleSchedule: (activity: PaliaActivity) => void;
}

export default function ActivityTable({schedule, handleSchedule}: ActivityTableProps): JSX.Element {
  // show all activities that aren't already on the user's schedule
  const scheduleIds: Array<number> | undefined = schedule.map((activity: PaliaActivity): number => {
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
              onClick={() => handleSchedule(activity)} 
              className="hover: cursor-pointer"
            >
              {activity.name}: starts at {activity.startHour}
            </button>
  })

  return (
    <div className="flex flex-col">{activityElements}</div>
  ) 
}