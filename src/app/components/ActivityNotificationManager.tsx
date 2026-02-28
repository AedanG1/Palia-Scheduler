'use client'

import { ScheduledActivity } from "../data/data";
import useActivityNotification from "../hooks/useActivityNotification";

type ActivityNotificationManagerProps = {
  schedule: Array<ScheduledActivity>;
}

export default function ActivityNotificationManager({schedule}: ActivityNotificationManagerProps) {
  useActivityNotification(schedule);
  return null;
}