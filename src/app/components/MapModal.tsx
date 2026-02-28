'use client'

import Image from "next/image"
import { X } from "lucide-react"
import { JSX } from "react"
import { motion } from "motion/react"
import { useModalContext } from "../context/ModalContext"

export default function MapModal(): JSX.Element | null {
  const {modalStatus, toggleModal} = useModalContext();

  if (!modalStatus.isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-center items-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900 opacity-70"
        onClick={() => {toggleModal("", "", "", false)}}
      ></div>

      {/* Image Modal */}
      <motion.div 
        initial={{ scale: 0.5 }} 
        animate={{ scale: 1 }}
        className="flex flex-col p-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl gap-2 z-50"
      >
        <div className="flex flex-row justify-between">
          <p className="text-xl">{modalStatus.activityName}, {modalStatus.location}</p>
          <button 
            className="hover: cursor-pointer"
            onClick={() => {toggleModal("", "", "", false)}}
          >
            <X />
          </button>
        </div>
        <Image 
          placeholder="blur"
          blurDataURL="/PlaceholderMap.jpg"
          className="relative w-180"
          src={modalStatus.locationImage}
          width={800}
          height={600}
          alt=""
          priority
        />
      </motion.div>
    </div>
  )
}