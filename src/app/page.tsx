'use client'

import { useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import type { ScheduledActivity } from "./data";
import Schedule from "./components/Schedule";
import List from "./components/List";
import useActivityNotification from "./hooks/useActivityNotification";
import PaliaClock from "./components/PaliaClock";
import MapModal from "./components/MapModal";

type ModalStatus = {
  activityName: string;
  locationImage: string;
  location: string;
  isOpen: boolean;
};

export default function Home() {
  const [schedule, setSchedule] = useState<Array<ScheduledActivity>>([]);
  const [modalStatus, setModalStatus] = useState<ModalStatus>({
    activityName: "",
    locationImage: "",
    location: "",
    isOpen: false
  });
  const SCHEDULE_STARTING_HOUR = 3; // 0-24
  useActivityNotification(schedule);

  // handle clearing user schedule
  const handleClearSchedule = () => {
    setSchedule(() => []);
  }

  // handle adding an item to the schedule
  const toggleScheduleItem = (activityToSchedule: ScheduledActivity) => {
    // check if the activity is on the schedule
    const exists = schedule.some(a => a.id === activityToSchedule.id);

    // if the activity is on the schedule, remove it from the schedule
    if (exists) {
      const newSchedule = schedule.filter(a => a.id !== activityToSchedule.id);
      setSchedule(() => {
        return newSchedule;
      })
      // else, add it to the schedule
    } else {
      setSchedule((prev) => {
        return [
          ...prev,
          activityToSchedule
        ]
      })
    }
  }

  // handle the opening and closing of the modal
  const toggleModal = (activityName: string, locationImage: string, location: string, isOpen: boolean): void => {
    setModalStatus(() => {
      return {
        activityName: activityName,
        locationImage: locationImage,
        location: location,
        isOpen: isOpen,
      }
    })
  }

  return (
    <div className="relative">

      {/* Map Modal */}
      {
        modalStatus.isOpen && 
          <MapModal 
            activityName={modalStatus.activityName} 
            imagePath={modalStatus.locationImage} 
            location={modalStatus.location} 
            toggleModal={toggleModal} 
          />
      }

      <div className="relative py-8 px-4 md:py-10 md:px-24">
        <div className="flex flex-col items-center mb-8 gap-2">
          <h1 className="text-4xl font-bold">Palia Scheduler</h1>
          <h2 className="text-slate-500">Current time in Palia</h2>
          <PaliaClock />
          <NotificationSettings />
        </div>
        <div className="flex flex-col md:flex-row gap-20 justify-center">
          <Schedule 
            schedule={schedule}
            handleClearSchedule={handleClearSchedule}
            toggleScheduleItem={toggleScheduleItem}
            toggleModal={toggleModal}
            scheduleStartingHour={SCHEDULE_STARTING_HOUR}
          />
          <List 
            schedule={schedule} 
            toggleScheduleItem={toggleScheduleItem}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
}
