import { JSX } from "react"
import Image from "next/image"
import type { PaliaActivity, ScheduledActivity, TimeSlot } from "../data"
import { CalendarPlus, CalendarOff, MapPin, Sun, Moon, Sunset, Sunrise } from "lucide-react"

type ActivityListBlock = {
  activity: PaliaActivity;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, imagePath: string, location: string, isOpen: boolean) => void;
}

export default function ActivityListBlock({ activity, toggleScheduleSlot, toggleModal }: ActivityListBlock) {
  const getIcon = (label: string) => {
    switch (label) {
      case "morning":
        return <Sunrise size={20} />
      case "day":
        return <Sun size={20} />
      case "evening":
        return <Sunset size={20} />
      case "night":
        return <Moon size={20} />
      default:
        return <CalendarPlus size={20} />
    }
  }

  return (
    <div
      key={activity.id}
      className="backdrop-blur-sm bg-white/60 border border-white/80 rounded-2xl shadow-md transition-all p-5 relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: `linear-gradient(135deg, #00bcff 0%, transparent 100%)` }}
      ></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {(activity.type === "Bugs" || activity.type === "Fish") && (
              <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md flex-shrink-0">
                <Image
                  placeholder="blur"
                  blurDataURL="/PlaceholderMap.jpg"
                  src={activity.imagePath}
                  width={56}
                  height={56}
                  alt={activity.name}
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg text-slate-800">{activity.name}</h3>
              <button 
                className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-800"
                onClick={() => toggleModal(activity.name, activity.imagePath, activity.location, true)}
              >
                <MapPin size={14} />
                {activity.location}
              </button>
            </div>
          </div>
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ 
              backgroundColor: `${activity.colorBg}`, 
              color: `${activity.colorText}` 
            }}
          >
            {activity.type}
          </span>
        </div>
        
        <p className="text-sm text-slate-600 mb-4">{activity.desc}</p>
        
        <div className="flex gap-2">
          {activity.timesAvailable.sort((a, b) => a.startHour - b.startHour).map((slot: TimeSlot) => {
            const { id, timesAvailable, ...rest } = activity;
            const activityToSchedule = {
              ...rest,
              ...slot
            }
            
            return (
              <button 
                key={slot.id}
                onClick={() => toggleScheduleSlot(activityToSchedule)}
                className="flex-1 p-3 text-slate-600 bg-white/70 hover:bg-white hover:shadow-sm hover:cursor-pointer rounded-lg transition-all font-medium text-sm flex items-center justify-center gap-2"
              >
                {getIcon(slot.label)}
                <span className="capitalize text-slate-600">{slot.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}