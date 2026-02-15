'use client'

import {JSX, useState} from "react";
import { ActivityType, paliaActivities, PaliaActivity, ScheduledActivity } from "../data";
import ActivityListBlock from "./ActivityListBlock";
import ActivityTypeSelect from "./ActivityTypeSelect";

type ActivityListProps = {
  schedule: Array<ScheduledActivity>;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityList({schedule, toggleScheduleSlot, toggleModal}: ActivityListProps): JSX.Element {
  // handle state of type of activities that should be displayed in the list
  const [typeToDisplay, setTypeToDisplay] = useState<ActivityType>("Events");
  
  const handleClick = (activityType: ActivityType) => {
    setTypeToDisplay(() => {
      return activityType; 
    })
  };

  // show all activities that are the same type as the one selected in alphabetical order
  const activitiesToDisplay: Array<PaliaActivity> = paliaActivities.filter((activity: PaliaActivity) => {
    if (typeToDisplay === activity.type) {
      return activity;
    }
  }).sort((a, b) => a.name.localeCompare(b.name)
  );

  // create the Activity Elements from the activities
  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <ActivityListBlock 
      key={activity.id} 
      schedule={schedule}
      activity={activity} 
      toggleScheduleSlot={toggleScheduleSlot}
      toggleModal={toggleModal}
    />
  })

  return (
    <div className="flex flex-col gap-4 w-1/3">
      <ActivityTypeSelect typeToDisplay={typeToDisplay} handleClick={handleClick} />
      <div className="space-y-2 max-h-200 overflow-y-auto scroll-smooth pr-2 pb-80">
        {activityElements}
      </div>
    </div>
  ) 
}