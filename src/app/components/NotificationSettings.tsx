'use client'

import {JSX} from "react";
import useNotificationPermission from "../hooks/useNotificationPermission";

export default function NotificationSettings(): JSX.Element {
  const {permissionStatus, requestPermission} = useNotificationPermission();

  if (permissionStatus === "granted") {
    return <p>Notifications enabled ✅</p>
  }

  if (permissionStatus === "denied") {
    return <p>❌ Notifications have been disabled. Please enable them in browser settings. ❌</p>
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Please click the button below to be notified when your activities are about to start!</p>
      <button 
        onClick={requestPermission} 
        className="hover:cursor-pointer py-2 px-4 bg-green-300 text-green-900 w-fit rounded-lg border-2"
      >
        Enable Notifications
      </button>
    </div>
  ) 
}