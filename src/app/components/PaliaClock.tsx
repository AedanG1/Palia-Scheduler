import { JSX } from "react"
import usePaliaTime from "../hooks/usePaliaTime"

export default function PaliaClock(): JSX.Element {
  const {paliaTime12Hour} = usePaliaTime();

  return (
    <h3 className="text-2xl font-bold">{paliaTime12Hour}</h3>
  )
}