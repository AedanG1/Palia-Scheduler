'use client'

import { useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import type { PaliaActivity } from "./data";
import ScheduleTable from "./components/ScheduleTable";
import ActivityTable from "./components/ActivityTable";
import useActivityNotification from "./hooks/useActivityNotification";
import PaliaClock from "./components/PaliaClock";

export default function Home() {
  const [schedule, setSchedule] = useState<Array<PaliaActivity>>([]);
  const SCHEDULE_STARTING_HOUR = 3; // 0-24
  useActivityNotification(schedule);

  const addToSchedule = (activity: PaliaActivity): void => {
    setSchedule((prev: Array<PaliaActivity>): Array<PaliaActivity> => {
      return [...prev, activity]; 
    })
  }
  
  const removeFromSchedule = (activity: PaliaActivity): void => {
    setSchedule((prev: Array<PaliaActivity>): Array<PaliaActivity> => {
      return prev.filter((prevActivity: PaliaActivity): PaliaActivity | null => {
        return prevActivity.id !== activity.id ? prevActivity : null;
      }) 
    })
  }

  return (
    <div>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold">Palia Scheduler</h1>
        <h2 className="text-slate-500">Current time in Palia</h2>
        <PaliaClock />
        <NotificationSettings />
      </div>
      <div className="flex flex-row gap-24 justify-center">
        <ScheduleTable 
          schedule={schedule}
          removeFromSchedule={removeFromSchedule}
          scheduleStartingHour={SCHEDULE_STARTING_HOUR}
        />
        <ActivityTable schedule={schedule} addToSchedule={addToSchedule}/>
      </div>
    </div>
  );
}
