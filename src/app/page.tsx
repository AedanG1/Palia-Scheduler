'use client'

import { useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import type { PaliaActivity } from "./data";
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
  const [schedule, setSchedule] = useState<Array<PaliaActivity>>([]);
  const [modalStatus, setModalStatus] = useState<ModalStatus>({
    activityName: "",
    imagePath: "",
    location: "",
    isOpen: false
  });
  const SCHEDULE_STARTING_HOUR = 3; // 0-24
  useActivityNotification(schedule);

  const addToSchedule = (activity: PaliaActivity): void => {
    setSchedule((prev: Array<PaliaActivity>): Array<PaliaActivity> => {
      return [...prev, activity]; 
    })
  }
  
  const removeFromSchedule = (activity: PaliaActivity): void => {
    setSchedule((prev: Array<PaliaActivity>): Array<PaliaActivity> => {
      return prev.filter((prevActivity: PaliaActivity): PaliaActivity | null => {
        return prevActivity.id !== activity.id ? prevActivity : null;
      }) 
    })
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

      <div className="relative py-10 px-24">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold">Palia Scheduler</h1>
          <h2 className="text-slate-500">Current time in Palia</h2>
          <PaliaClock />
          <NotificationSettings />
        </div>
        <div className="flex flex-row gap-20 justify-center">
          <ScheduleTable 
            schedule={schedule}
            removeFromSchedule={removeFromSchedule}
            toggleModal={toggleModal}
            scheduleStartingHour={SCHEDULE_STARTING_HOUR}
          />
          <ActivityList 
            schedule={schedule} 
            addToSchedule={addToSchedule} 
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
}
