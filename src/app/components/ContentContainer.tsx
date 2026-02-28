'use client'

import { useState } from "react";
import type { ScheduledActivity } from "../data/data";
import List from "./List";
import Schedule from "./Schedule";
import ActivityNotificationManager from "./ActivityNotificationManager";

export default function ContentContainer() {
  const [schedule, setSchedule] = useState<Array<ScheduledActivity>>([]);
  const SCHEDULE_STARTING_HOUR = 3; // 0-24

  // handle adding an item to the schedule
  const toggleScheduleItem = (activityToSchedule: ScheduledActivity) => {
    // check if the activity is on the schedule
    const exists = schedule.some(a => a.id === activityToSchedule.id);

    // if the activity is on the schedule, remove it from the schedule
    if (exists) {
      const newSchedule = schedule.filter(a => a.id !== activityToSchedule.id);
      setSchedule(() => {
        return newSchedule;
      })
      // else, add it to the schedule
    } else {
      setSchedule((prev) => {
        return [
          ...prev,
          activityToSchedule
        ]
      })
    }
  }
  
  // handle clearing user schedule
  const handleClearSchedule = () => {
    setSchedule(() => []);
  }

  return (
    <div className="flex flex-col md:flex-row gap-20 justify-center">
      <ActivityNotificationManager schedule={schedule} />
      <Schedule 
        schedule={schedule}
        handleClearSchedule={handleClearSchedule}
        toggleScheduleItem={toggleScheduleItem}
        scheduleStartingHour={SCHEDULE_STARTING_HOUR}
      />
      <List 
        schedule={schedule} 
        toggleScheduleItem={toggleScheduleItem}
      />
    </div>
  )
}