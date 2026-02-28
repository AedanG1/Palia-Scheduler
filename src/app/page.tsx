'use client'

import { useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import PaliaClock from "./components/PaliaClock";
import MapModal from "./components/MapModal";
import ToggleThemeButton from "./components/ToggleThemeButton";
import ContentContainer from "./components/ContentContainer";

type ModalStatus = {
  activityName: string;
  locationImage: string;
  location: string;
  isOpen: boolean;
};

export default function Home() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>({
    activityName: "",
    locationImage: "",
    location: "",
    isOpen: false
  });

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
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-4xl font-bold">Palia Scheduler</h1>
            <ToggleThemeButton />
          </div>
          <h2 className="text-slate-500">Current time in Palia</h2>
          <PaliaClock />
          <NotificationSettings />
        </div>
        <ContentContainer toggleModal={toggleModal} />
      </div>
    </div>
  );
}
