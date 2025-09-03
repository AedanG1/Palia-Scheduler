'use client'

import type { PaliaActivity } from "../data"
import {JSX} from "react"
import { paliaActivities } from "../data"

type ScheduleTableProps = {
  schedule: Array<PaliaActivity> | null;
  removeFromSchedule: (activity: PaliaActivity) => void;
  paliaCurrentMinute: number | undefined;
  paliaCurrentHour: number | undefined;
}

export default function ScheduleTable({ schedule, removeFromSchedule, paliaCurrentHour, paliaCurrentMinute }: ScheduleTableProps) {

  return (
    <div></div>
  )
}