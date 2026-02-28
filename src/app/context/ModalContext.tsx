'use client'

import { createContext, useContext } from "react"
import { useState } from "react";

type ModalStatus = {
  activityName: string;
  locationImage: string;
  location: string;
  isOpen: boolean;
};

type ModalContextType = {
  modalStatus: ModalStatus;
  toggleModal: (activityName: string, locationImage: string, location: string, isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({children}: React.PropsWithChildren) {

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
    <ModalContext.Provider value={{ modalStatus, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)
  if (!context) throw new Error("useModalContext must be used within a ModalProvider");
  return context;
}