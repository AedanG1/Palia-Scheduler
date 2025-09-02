import type { PaliaActivity } from "../data"
import {JSX} from "react"

export default function ScheduleTable({ schedule }: {schedule: Array<PaliaActivity> | null}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Schedule
            </th>
          </tr>
        </thead>
        <tbody>
            {!schedule ? null : schedule.map((activity: PaliaActivity): JSX.Element => {
              return <tr key={activity.id}><p>{activity.name}: starts at {activity.startHour}</p></tr>
            })}
        </tbody>
      </table>
    </div>
  )
}