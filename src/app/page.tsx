'use client'

import { useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import type { ScheduledActivity } from "./data";
import ScheduleTable from "./components/ScheduleTable";
import ActivityList from "./components/ActivityList";
import useActivityNotification from "./hooks/useActivityNotification";
import PaliaClock from "./components/PaliaClock";
import MapModal from "./components/MapModal";

type ModalStatus = {
  activityName: string;
  imagePath: string;
  location: string;
  isOpen: boolean;
};

export default function Home() {
  const [schedule, setSchedule] = useState<Array<ScheduledActivity>>([]);
  const [modalStatus, setModalStatus] = useState<ModalStatus>({
    activityName: "",
    imagePath: "",
    location: "",
    isOpen: false
  });
  const SCHEDULE_STARTING_HOUR = 3; // 0-24
  useActivityNotification(schedule);

  const toggleScheduleSlot = (activityToSchedule: ScheduledActivity) => {
    const exists = schedule.some(a => a.id === activityToSchedule.id);

    if (exists) {
      const newSchedule = schedule.filter(a => a.id !== activityToSchedule.id);
      setSchedule(() => {
        return newSchedule;
      })
    } else {
      setSchedule((prev) => {
        return [
          ...prev,
          activityToSchedule
        ]
      })
    }
  }

  const toggleModal = (activityName: string, imagePath: string, location: string, isOpen: boolean): void => {
    setModalStatus(() => {
      return {
        activityName: activityName,
        imagePath: imagePath,
        location: location,
        isOpen: isOpen,
      }
    })
  }

  return (
    <div className="relative">

      {/* Map Modal */}
      {modalStatus.isOpen ? 
        <MapModal 
          activityName={modalStatus.activityName} 
          imagePath={modalStatus.imagePath} 
          location={modalStatus.location} 
          toggleModal={toggleModal} 
        />
      : 
        null}

      <div className="relative py-8 px-4 md:py-10 md:px-24">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold">Palia Scheduler</h1>
          <h2 className="text-slate-500">Current time in Palia</h2>
          <PaliaClock />
          <NotificationSettings />
        </div>
        <div className="flex flex-col md:flex-row gap-20 justify-center">
          <ScheduleTable 
            schedule={schedule}
            toggleScheduleSlot={toggleScheduleSlot}
            toggleModal={toggleModal}
            scheduleStartingHour={SCHEDULE_STARTING_HOUR}
          />
          <ActivityList 
            schedule={schedule} 
            toggleScheduleSlot={toggleScheduleSlot}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
}
