'use client'

import { useEffect, useState } from "react";
import useNotificationPermission from "./useNotificationPermission";
import usePaliaTime from "./usePaliaTime";
import { type ScheduledActivity } from "../data/data";

export type NotifiedRecord = {
  [key: string]: number;
};

export default function useActivityNotification(schedule: Array<ScheduledActivity>) {
  const [notifiedRecord, setNotifiedRecord] = useState<NotifiedRecord>({});
  const {permissionStatus} = useNotificationPermission();
  const {paliaCurrentHour, paliaDayNumber} = usePaliaTime();

  useEffect(() => {
    if (permissionStatus !== "granted") return;

    if (!schedule.length) return;

    const upcomingActivity = schedule.find(
      a => a.startHour === (paliaCurrentHour + 1) % 24 // wrap to 0 after 23
    )

    if (upcomingActivity) {
      if (notifiedRecord[upcomingActivity.id] !== paliaDayNumber) {
        new Notification(upcomingActivity.name, { body: `${upcomingActivity.location} - ${upcomingActivity.desc}` });

        setNotifiedRecord((prev) => ({
          ...prev,
          [upcomingActivity.id]: paliaDayNumber,
        }));
      }
    }

  }, [paliaCurrentHour, schedule, permissionStatus, paliaDayNumber])
}
