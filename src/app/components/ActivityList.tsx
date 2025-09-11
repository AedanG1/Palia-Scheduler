import {JSX} from "react";
import { paliaActivities, PaliaActivity } from "../data";
import ActivityListBlock from "./ActivityListBlock";

type ActivityListProps = {
  schedule: Array<PaliaActivity>;
  addToSchedule: (activity: PaliaActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityList({schedule, addToSchedule, toggleModal}: ActivityListProps): JSX.Element {
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

  // create the Activity Elements from the activities that aren't on the user's schedule
  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <ActivityListBlock key={activity.id} activity={activity} addToSchedule={addToSchedule} toggleModal={toggleModal} />
  })

  return (
    <div className="flex flex-col gap-4 w-1/4 overflow-x-clip">
      <h2 className="text-2xl font-bold border-b pb-2 border-slate-600">Activities</h2>
      <div className="flex flex-col gap-2 overflow-y-auto overflow-x-clip max-h-200">
        {activityElements}
      </div>
    </div>
  ) 
}