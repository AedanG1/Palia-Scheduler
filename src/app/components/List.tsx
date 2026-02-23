'use client'

import {JSX, useState} from "react";
import { ActivityType, PaliaActivity, ScheduledActivity } from "../data/data";
import { allActivites } from "../data/allActivites";
import ListItem from "./ListItem";
import TypeSelect from "./TypeSelect";
import { X } from "lucide-react";

type ListProps = {
  schedule: Array<ScheduledActivity>;
  toggleScheduleItem: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function List({schedule, toggleScheduleItem, toggleModal}: ListProps): JSX.Element {
  // handle state of type of activities that should be displayed in the list
  const [typeToDisplay, setTypeToDisplay] = useState<ActivityType>("Events");
  // handle state of search input
  const [searchInput, setSearchInput] = useState<string>("");

  // handle type button click
  const handleClick = (activityType: ActivityType) => {
    setTypeToDisplay(() => {
      return activityType; 
    })
  };

  // handle search input
  const handleSearchInput = (string: string) => {
    setSearchInput(() => {
      return string;
    })
  };

  // clear search input
  const handleClearSearchInput = () => {
    setSearchInput("");
  };

  // show all activities that are the same type as the one selected in alphabetical order
  const activitiesToDisplay: Array<PaliaActivity> = allActivites.filter((activity: PaliaActivity) => {
    if (typeToDisplay === activity.type && activity.name.toLowerCase().includes(searchInput.toLowerCase())) {
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
      <div className="flex flex-row gap-8">
        <TypeSelect typeToDisplay={typeToDisplay} handleClick={handleClick} />
        <div className="relative w-full">
          <input 
            className="w-full h-full border-b outline-none" 
            placeholder={`Search ${typeToDisplay}...`} 
            type="text" 
            value={searchInput}
            onChange={(e) => {handleSearchInput(e.target.value)}}>
          </input>
          {
            searchInput &&
            <button 
              className="absolute right-2 self-center hover:cursor-pointer" 
              onClick={() => {handleClearSearchInput()}}>
                <X size={16} />
            </button>
          }
        </div>
      </div>
      <div className="space-y-2 max-h-200 overflow-y-auto scroll-smooth pb-4">
        {activityElements}
      </div>
    </div>
  ) 
}