'use client'

import NotificationSettings from "./components/NotificationSettings";
import usePaliaTime from "./hooks/usePaliaTime";

export default function Home() {
  const {paliaTime12Hour, paliaTime24Hour} = usePaliaTime();

  return (
    <div>
      <NotificationSettings/>
      <h2>{paliaTime12Hour}</h2>
      <h2>{paliaTime24Hour}</h2>
    </div>
  );
}
