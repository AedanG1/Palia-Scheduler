import Image from "next/image"
import type { PaliaActivity, ScheduledActivity } from "../data/data"
import { MapPin } from "lucide-react"
import ListItemButtons from "./ListItemButtons"

type ListItemProps = {
  schedule: Array<ScheduledActivity>;
  activity: PaliaActivity;
  toggleScheduleItem: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, locationImage: string, location: string, isOpen: boolean) => void;
}

export default function ListItem({ schedule, activity, toggleScheduleItem, toggleModal}: ListItemProps) {

  return (
    <div
      key={activity.id}
      className="backdrop-blur-sm bg-white/60 border border-white/80 rounded-2xl shadow-md transition-all p-5 relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${activity.typeColor} 0%, transparent 100%)` }}
      ></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md flex-shrink-0">
              <Image
                placeholder="blur"
                blurDataURL="/PlaceholderMap.jpg"
                src={activity.displayImage}
                width={56}
                height={56}
                alt={activity.name}
                title={activity.name}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800">{activity.name}</h3>
              <button 
                className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-800 hover:cursor-pointer"
                onClick={() => toggleModal(activity.name, activity.locationImage, activity.location, true)}
              >
                <MapPin size={14} />
                {activity.location}
              </button>
            </div>
          </div>
          {
            activity.rarity !== "none" &&
              <span 
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  backgroundColor: `${activity.rarityColor}30`, 
                  color: `${activity.rarityColor}` 
                }}
              >
                {activity.rarity}
              </span>
          }
        </div>
        
        {
          activity.bait && activity.baitImage &&
            <div className="flex flex-row gap-2 items-center mb-4">
              <Image
                placeholder="blur"
                blurDataURL="/PlaceholderMap.jpg"
                src={activity.baitImage}
                width={24}
                height={24}
                alt={activity.bait}
                title={activity.bait}
                className="object-contain"
              />
              <p className="text-sm text-slate-600">Requires {activity.bait}s</p>
            </div>
        }

        <p className="text-sm text-slate-600 mb-4">{activity.desc}</p>
        
        {/* Toggle Schedule Buttons */}
        <ListItemButtons
          schedule={schedule}
          activity={activity} 
          toggleScheduleItem={toggleScheduleItem}
        />
      </div>
    </div>
  )
}