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
          <tr>
            {!schedule ? null : schedule.map((activity: PaliaActivity): JSX.Element => {
              return <td key={activity.id}>{activity.name}: starts at {activity.startHour}</td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}