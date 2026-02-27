'use client'

import {JSX} from "react";
import useNotificationPermission from "../hooks/useNotificationPermission";
import Link from "next/link";

export default function NotificationSettings(): JSX.Element {
  const {permissionStatus, requestPermission} = useNotificationPermission();

  if (permissionStatus === null) {
    return (
      <div className="flex flex-col items-center mb-15">
        Fetching notification status...
      </div>
    )

  }

  if (permissionStatus === "granted") {
    return (
      <div className="flex flex-col items-center mb-9">
        <p>Notifications enabled ✅</p>
        <Link href="/help"><u>Not getting notifications?</u></Link>
      </div>
    )
  }

  if (permissionStatus === "denied") {
    return (
      <div className="flex flex-col items-center mb-9">
        <p>❌ Notifications have been disabled. Please enable them in browser settings. ❌</p>
        <Link href="/help"><u>Not getting notifications?</u></Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Click the button below and allow your browser to notify when your activities are about to start!</p>
      <button 
        onClick={requestPermission} 
        className="hover:cursor-pointer py-2 px-4 bg-green-300 text-green-900 w-fit rounded-lg border-2"
      >
        Enable Notifications
      </button>
    </div>
  ) 
}