'use client'

import { useEffect, useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import usePaliaTime from "./hooks/usePaliaTime";
import type { PaliaActivity } from "./data";
import ScheduleTable from "./components/ScheduleTable";
import useNotificationPermission from "./hooks/useNotificationPermission";

export default function Home() {
  const {permissionStatus} = useNotificationPermission();
  const {paliaTime12Hour, paliaTime24Hour, paliaCurrentHour} = usePaliaTime();
  const [schedule, setSchedule] = useState<Array<PaliaActivity> | null>([{
    id: 1,
    name: "Flow-Tree Garden",
    desc: "Find the Flow-Tree Garden in Bahari Bay. Make sure to let others know where it is!",
    startHour: 7,
    endHour: null 
  }]);
  const [notifiedHour, setNotifiedHour] = useState<number | null>(null);

  useEffect(() => {
    // if the user doesn't have notifications enabled, do nothing
    if (permissionStatus !== "granted") {
      return;
    }

    // check if there's any activity on the user's schedule that's starting in the next hour 
    // and hasn't been notified already
    if (schedule && paliaCurrentHour && paliaCurrentHour !== notifiedHour) {
      for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].startHour === paliaCurrentHour + 1) {
          new Notification(`${schedule[i].name}`, { body: `${schedule[i].desc}` });
          setNotifiedHour(paliaCurrentHour);
        }
      }
    }

  }, [paliaTime24Hour, schedule])

  return (
    <div>
      <NotificationSettings/>
      <h2>{paliaTime12Hour ?? "loading"}</h2>
      <h2>{paliaTime24Hour ?? "loading"}</h2>
      <hr></hr>
      <ScheduleTable schedule={schedule} />
    </div>
  );
}
