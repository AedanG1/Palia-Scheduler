'use client'

import { useEffect, useState } from "react";
import useNotificationPermission from "./useNotificationPermission";
import usePaliaTime from "./usePaliaTime";
import type { PaliaActivity } from "../data";

// TODO: Make sure NotifiedRecord isn't blocking the wrong notifications
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
    
    // Find first activity starting in the next hour
    const upcomingActivity = schedule.find(
      (activity) => activity.startHour === (paliaCurrentHour + 1) % 24 // wrap to 0 after 23
    );

    if (upcomingActivity) {
      if (notifiedRecord[upcomingActivity.id] !== paliaDayNumber) {
        new Notification(upcomingActivity.name, { body: upcomingActivity.desc });

        // mark as notified
        setNotifiedRecord((prev) => ({
          ...prev,
          [upcomingActivity.id]: paliaDayNumber,
        }));
      }
    }

  }, [paliaCurrentHour, schedule, permissionStatus, paliaDayNumber])
}