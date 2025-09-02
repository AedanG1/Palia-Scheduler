'use client'

import { useEffect, useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import usePaliaTime from "./hooks/usePaliaTime";
import type { PaliaActivity } from "./data";
import ScheduleTable from "./components/ScheduleTable";
import useNotificationPermission from "./hooks/useNotificationPermission";
import ActivityTable from "./components/ActivityTable";

export default function Home() {
  const {permissionStatus} = useNotificationPermission();
  const {paliaTime12Hour, paliaTime24Hour, paliaCurrentHour} = usePaliaTime();
  const [schedule, setSchedule] = useState<Array<PaliaActivity>>([]);
  const [notifiedHour, setNotifiedHour] = useState<number | null>(null);

  useEffect(() => {
    // if the user doesn't have notifications enabled, do nothing
    if (permissionStatus !== "granted") {
      return;
    }
    
    // only notify if user has a schedule, palia time has loaded, and hasn't been notified already
    if (!schedule || !paliaCurrentHour || paliaCurrentHour === notifiedHour) return;

    // find any activity in the schedule that is starting in an hour
    const upcomingActivity: PaliaActivity | undefined = schedule.find(
      (activity) => activity.startHour === (paliaCurrentHour + 1)
    ); 

    // send a notification and set the notified hour to current hour
    if (upcomingActivity) {
      new Notification(`${upcomingActivity.name}`, { body: `${upcomingActivity.desc}`})
      // TODO: fix this so that the notification happens every day only once.
      // if there's only one activity on the schedule, it doesn't get notified the next day.
      setNotifiedHour(paliaCurrentHour);
    }

  }, [paliaTime24Hour, schedule])

  const handleSchedule = (activity: PaliaActivity): void => {
    setSchedule((prev: Array<PaliaActivity>): Array<PaliaActivity> => {
      return [...prev, activity]; 
    })
  }

  return (
    <div>
      <NotificationSettings/>
      <h2>{paliaTime12Hour ?? "loading"}</h2>
      <h2>{paliaTime24Hour ?? "loading"}</h2>
      <hr></hr>
      <div className="flex flex-row gap-24">
        <ScheduleTable schedule={schedule} />
        <ActivityTable schedule={schedule} handleSchedule={handleSchedule}/>
      </div>
    </div>
  );
}
