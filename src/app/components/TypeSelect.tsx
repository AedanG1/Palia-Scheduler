import { ACTIVITYTYPE, ActivityType } from "../data/data"
import { motion } from "motion/react"

type TypeSelectProps = {
  typeToDisplay: ActivityType;
  handleClick: (activityType: ActivityType) => void;
}

export default function TypeSelect({typeToDisplay, handleClick}: TypeSelectProps) {
  const activityButtonElements = ACTIVITYTYPE.map((activity: ActivityType) => {
    const isSelected = typeToDisplay === activity;
    
    return ( 
      <li key={activity} className="relative">
        <button 
          onClick={() => {handleClick(activity)}} 
          className={`text-2xl font-bold pb-2 hover:cursor-pointer transition-colors ${
            isSelected ? "text-slate-800 dark:text-slate-200" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400"
          }`}
        >
          {activity}
        </button>
        {isSelected && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-0.25 bg-slate-800 dark:bg-slate-200"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </li>
    )
  })
  
  return (
    <ul className="flex flex-row gap-4">
      {activityButtonElements}
    </ul>
  )
}