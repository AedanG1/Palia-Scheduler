import Image from "next/image"
import { X } from "lucide-react"
import { JSX } from "react"

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
      <div className="flex flex-col p-4 bg-slate-500 rounded-xl gap-2 z-50">
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
          className="relative w-180"
          src={`${imagePath}`}
          width={4437}
          height={3993}
          alt=""
        />
        </div>
    </div>
  )
}