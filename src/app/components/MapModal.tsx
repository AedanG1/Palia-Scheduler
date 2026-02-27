import Image from "next/image"
import { X } from "lucide-react"
import { JSX } from "react"
import { motion } from "motion/react"

type MapModalProps = {
  activityName: string;
  imagePath: string;
  location: string;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function MapModal({activityName, imagePath, location, toggleModal}: MapModalProps): JSX.Element {
  return (
    <div className="fixed inset-0 z-40 flex justify-center items-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

      {/* Image Modal */}
      <motion.div 
        initial={{ scale: 0.5 }} 
        animate={{ scale: 1 }}
        className="flex flex-col p-4 bg-slate-100 text-slate-700 rounded-xl gap-2 z-50"
      >
        <div className="flex flex-row justify-between">
          <p className="text-xl">{activityName}, {location}</p>
          <button 
            className="hover: cursor-pointer"
            onClick={() => {toggleModal("", imagePath, location, false)}}
          >
            <X />
          </button>
        </div>
        <Image 
          placeholder="blur"
          blurDataURL="/PlaceholderMap.jpg"
          className="relative w-180"
          src={imagePath}
          width={800}
          height={600}
          alt=""
          priority
        />
      </motion.div>
    </div>
  )
}