'use client'

import { useEffect, useState } from "react";

type PermissionStatus = "default" | "granted" | "denied" | null; 

type NotificationPermission = {
  permissionStatus: PermissionStatus;
  requestPermission: () => Promise<void>;
}

export default function useNotificationPermission(): NotificationPermission {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>(null);

  // check notification status on component mount
  useEffect(() => {
    if(!('Notification' in window)) {
      console.warn('This browser does not support notifications.');
      return;
    }
    setPermissionStatus(Notification.permission);
  }, [])

  const requestPermission = async (): Promise<void> => {
    if (!(permissionStatus === "default")) {
      return;
    }

    const status = await Notification.requestPermission();

    setPermissionStatus(status);
  }

  return {permissionStatus, requestPermission};
}
