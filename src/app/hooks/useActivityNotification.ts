'use client'

import { useEffect, useState } from "react";
import useNotificationPermission from "./useNotificationPermission";
import usePaliaTime from "./usePaliaTime";
import type { PaliaActivity } from "../data";

export type NotifiedRecord = {
  [key: string]: number;
};

export default function useActivityNotification(schedule: Array<PaliaActivity>) {
  const [notifiedRecord, setNotifiedRecord] = useState<NotifiedRecord>({});
  const {permissionStatus} = useNotificationPermission();
  const {paliaCurrentHour, paliaDayNumber} = usePaliaTime();

  useEffect(() => {
    // if the user doesn't have notifications enabled, do nothing
    if (permissionStatus !== "granted") return;

    // if there's nothing on the schedule, do nothing
    if (!schedule.length) return;
    
    // Find all activities starting in the next hour
    const upcomingActivities = schedule.filter(
      (activity) => activity.startHour === (paliaCurrentHour + 1)
    );

    if (upcomingActivities) {
      upcomingActivities.forEach((activity) => {
        if (notifiedRecord[activity.id] !== paliaDayNumber) {
          new Notification(activity.name, { body: activity.desc });

          // mark as notified
          setNotifiedRecord((prev) => ({
            ...prev,
            [activity.id]: paliaDayNumber,
          }));
        }
      });
    }

  }, [paliaCurrentHour, schedule, permissionStatus, paliaDayNumber])
}