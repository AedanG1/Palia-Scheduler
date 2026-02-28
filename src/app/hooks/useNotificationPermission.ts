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

  // function to request permission for notifications
  const requestPermission = async (): Promise<void> => {
    // don't ask for permission once already set
    if (!(permissionStatus === "default")) {
      return;
    }

    // send permission request
    const status = await Notification.requestPermission();

    // set permission status of user's choice
    setPermissionStatus(status);
  }

  return {permissionStatus, requestPermission};
}