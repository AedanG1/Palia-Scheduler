'use client'

import { useState } from "react";
import type { ScheduledActivity } from "../data/data";
import List from "./List";
import Schedule from "./Schedule";
import ActivityNotificationManager from "./ActivityNotificationManager";

export default function ContentContainer() {
  const [schedule, setSchedule] = useState<Array<ScheduledActivity>>([]);
  const SCHEDULE_STARTING_HOUR = 3; // 0-24

  const toggleScheduleItem = (activityToSchedule: ScheduledActivity) => {
    const exists = schedule.some(a => a.id === activityToSchedule.id);

    if (exists) {
      const newSchedule = schedule.filter(a => a.id !== activityToSchedule.id);
      setSchedule(() => {
        return newSchedule;
      })
    } else {
      setSchedule((prev) => {
        return [
          ...prev,
          activityToSchedule
        ]
      })
    }
  }

  const handleClearSchedule = () => {
    setSchedule(() => []);
  }

  return (
    <div className="flex flex-col mx-auto xl:flex-row gap-20 justify-center max-w-[1440px]">
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
