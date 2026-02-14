import { JSX } from "react"
import Image from "next/image"
import type { PaliaActivity, ScheduledActivity, TimeSlot } from "../data"
import { CalendarPlus, CalendarOff, MapPin, Sun, Moon, Sunset, Sunrise } from "lucide-react"
import useFormatHourString from "../hooks/useFormatHourString"

type ActivityListBlock = {
  activity: PaliaActivity;
  toggleScheduleSlot: (activityToSchedule: ScheduledActivity) => void;
  toggleModal: (activityName: string, locationImage: string, location: string, isOpen: boolean) => void;
}

export default function ActivityListBlock({ activity, toggleScheduleSlot, toggleModal }: ActivityListBlock) {

  const format = useFormatHourString();

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
            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md flex-shrink-0">
              <Image
                placeholder="blur"
                blurDataURL="/PlaceholderMap.jpg"
                src={activity.displayImage}
                width={56}
                height={56}
                alt={activity.name}
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
            activity.rarity ?
              <span 
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  backgroundColor: `${activity.rarityColor}30`, 
                  color: `${activity.rarityColor}` 
                }}
              >
                {activity.rarity}
              </span>
            :
              null
          }
        </div>
        
        {
          activity.bait && activity.baitImage ?
            <div className="flex flex-row gap-2 items-center mb-4">
              <Image
                placeholder="blur"
                blurDataURL="/PlaceholderMap.jpg"
                src={activity.baitImage}
                width={24}
                height={24}
                alt={activity.name}
                className="object-contain"
              />
              <p className="text-sm text-slate-600">Requires {activity.bait}s</p>
            </div>
          :
            null
        }

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
                <span className="capitalize text-slate-600">
                  {
                    slot.label === "other" ?
                      `${format(slot.startHour).toLocaleLowerCase()} - ${format(slot.endHour).toLocaleLowerCase()}`
                    :
                      slot.label
                  }
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}