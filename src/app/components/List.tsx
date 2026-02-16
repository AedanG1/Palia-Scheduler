'use client'

import {JSX, useEffect, useState} from "react";
import { ActivityType, paliaActivities, PaliaActivity, ScheduledActivity } from "../data";
import ListItem from "./ListItem";
import TypeSelect from "./TypeSelect";
import CursorBadge from "./CursorBadge";

type ListProps = {
  schedule: Array<ScheduledActivity>;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function List({schedule, toggleScheduleSlot, toggleModal}: ListProps): JSX.Element {
  // handle state of type of activities that should be displayed in the list
  const [typeToDisplay, setTypeToDisplay] = useState<ActivityType>("Events");
  // handle state of cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0});
  // handle state of a button being hovered over or not
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  // handle state of badge visibility
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    // handle change in cursor position
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }

    // set showBadge to true / false depending on whether the hoveredButton is in the schedule
    setShowBadge(schedule.some(s => s.id === hoveredButton));

    // if hovering over a button, add an event listener to update cursor position
    window.addEventListener("mousemove", handleMouseMove);
    
    // remove event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    // run useEffect on every change to schedule state or hoveredButton state
  }, [hoveredButton, schedule])
  
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
    return <ListItem 
      key={activity.id} 
      schedule={schedule}
      activity={activity} 
      toggleScheduleSlot={toggleScheduleSlot}
      toggleModal={toggleModal}
      setHoveredButton={setHoveredButton}
    />
  })

  return (
    <div className="flex flex-col gap-4 w-1/3">
      <TypeSelect typeToDisplay={typeToDisplay} handleClick={handleClick} />
      <div className="space-y-2 max-h-200 overflow-y-auto scroll-smooth pr-2 pb-80">
        {activityElements}
      </div>
      {showBadge && <CursorBadge cursorPosition={cursorPosition} />}
    </div>
  ) 
}