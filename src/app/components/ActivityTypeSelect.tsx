import { ACTIVITYTYPE, ActivityType } from "../data"

type ActivityTypeSelectProps = {
  typeToDisplay: ActivityType;
  handleClick: (activityType: ActivityType) => void;
}

export default function ActivityTypeSelect({typeToDisplay, handleClick}: ActivityTypeSelectProps) {
  const activityButtonElements = ACTIVITYTYPE.map((activity: ActivityType) => {
    return ( 
      <li key={activity}>
        <button onClick={() => {handleClick(activity)}} className="text-2xl font-bold pb-2 hover:cursor-pointer">
          {activity}
        </button>
      </li>
    )
  })
  
  return (
    <ul className="flex flex-row gap-4">
      {activityButtonElements}
    </ul>
  )
}