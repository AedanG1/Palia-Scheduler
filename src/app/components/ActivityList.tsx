'use client'

import {JSX, useState} from "react";
import { ActivityType, paliaActivities, PaliaActivity } from "../data";
import ActivityListBlock from "./ActivityListBlock";
import ActivityTypeSelect from "./ActivityTypeSelect";

type ActivityListProps = {
  schedule: Array<PaliaActivity>;
  addToSchedule: (activity: PaliaActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityList({schedule, addToSchedule, toggleModal}: ActivityListProps): JSX.Element {
  // handle state of activities that should be displayed in the list
  const [typeToDisplay, setTypeToDisplay] = useState<ActivityType>("Events");
  
  const handleClick = (activityType: ActivityType) => {
    setTypeToDisplay((prev) => {
      return activityType; 
    })
  }
  // get IDs of activities on schedule
  const scheduleIds: Array<string> | undefined = schedule.map((activity: PaliaActivity): string => {
    return activity.id;
  }) 

  // show all activities that aren't already on the user's schedule and that are the same type as the one
  // selected, sorted by start time
  const activitiesToDisplay: Array<PaliaActivity> = paliaActivities.filter((activity: PaliaActivity) => {
    if (!scheduleIds?.includes(activity.id) && typeToDisplay === activity.type) {
      return activity;
    }
  }).sort((a, b) => a.startHour - b.startHour);

  // filter activities based on the selected type

  // create the Activity Elements from the activities that aren't on the user's schedule
  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <ActivityListBlock key={activity.id} activity={activity} addToSchedule={addToSchedule} toggleModal={toggleModal} />
  })

  // needs buttons for different types of activites
  return (
    <div className="flex flex-col gap-4 md:w-1/4 overflow-x-clip">
      <ActivityTypeSelect typeToDisplay={typeToDisplay} handleClick={handleClick} />
      <div className="flex flex-col gap-2 overflow-y-auto overflow-x-clip max-h-200">
        {activityElements}
      </div>
    </div>
  ) 
}