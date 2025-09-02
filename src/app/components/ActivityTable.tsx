import {act, JSX} from "react";
import { paliaActivities, PaliaActivity } from "../data";

export default function ActivityTable({schedule}: {schedule: Array<PaliaActivity> | null}): JSX.Element {
  // show all activities that aren't already on the user's schedule
  const scheduleIds: Array<number> | undefined = schedule?.map((activity: PaliaActivity): number => {
    return activity.id;
  }) 

  const activitiesToDisplay: Array<PaliaActivity> = paliaActivities.filter((activity: PaliaActivity) => {
    if (!scheduleIds?.includes(activity.id)) {
      return activity;
    }
  })

  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <p key={activity.id}>{activity.name}: starts at {activity.startHour}</p>
  })

  return (
    <div>{activityElements}</div>
  ) 
}