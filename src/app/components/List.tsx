'use client'

import {JSX, useEffect, useState} from "react";
import { ActivityType, PaliaActivity, ScheduledActivity } from "../data/data";
import { allActivites } from "../data/allActivites";
import ListItem from "./ListItem";
import TypeSelect from "./TypeSelect";

type ListProps = {
  schedule: Array<ScheduledActivity>;
  toggleScheduleItem: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function List({schedule, toggleScheduleItem, toggleModal}: ListProps): JSX.Element {
  // handle state of type of activities that should be displayed in the list
  const [typeToDisplay, setTypeToDisplay] = useState<ActivityType>("Events");

  // handle type button click
  const handleClick = (activityType: ActivityType) => {
    setTypeToDisplay(() => {
      return activityType; 
    })
  };

  // show all activities that are the same type as the one selected in alphabetical order
  const activitiesToDisplay: Array<PaliaActivity> = allActivites.filter((activity: PaliaActivity) => {
    if (typeToDisplay === activity.type) {
      return activity;
    }
  }).sort((a, b) => a.name.localeCompare(b.name)
  );

  // create the Activity Elements from the activities
  const activityElements: Array<JSX.Element> = activitiesToDisplay.map((activity: PaliaActivity): JSX.Element => {
    return <ListItem 
      key={activity.id} 
      schedule={schedule}
      activity={activity} 
      toggleScheduleItem={toggleScheduleItem}
      toggleModal={toggleModal}
    />
  })

  return (
    <div className="flex flex-col gap-4 w-1/3">
      <TypeSelect typeToDisplay={typeToDisplay} handleClick={handleClick} />
      <div className="space-y-2 max-h-200 overflow-y-auto scroll-smooth pr-2 pb-4">
        {activityElements}
      </div>
    </div>
  ) 
}