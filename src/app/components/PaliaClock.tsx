import { JSX, useEffect, useState } from "react"
import usePaliaTime from "../hooks/usePaliaTime"
import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

type StageOfDay = "Morning" | "Day" | "Evening" | "Night";

export default function PaliaClock(): JSX.Element {
  const {paliaTime12Hour, paliaCurrentHour} = usePaliaTime();
  const [stageOfDay, setStageOfDay] = useState<StageOfDay>("Morning");

  useEffect(() => {
    let stage: StageOfDay;

    if (paliaCurrentHour < 6 && paliaCurrentHour > 2) {
      stage = "Morning";
    } else if (paliaCurrentHour < 18 && paliaCurrentHour > 5) {
      stage = "Day";
    } else if (paliaCurrentHour < 21 && paliaCurrentHour > 17) {
      stage = "Evening";
    } else {
      stage = "Night";
    }

    setStageOfDay(stage);

  }, [paliaCurrentHour])

  const stageOfDayColors = {
    "Morning": {
      foreground: "#7b3306",
      background: "#fee685"
    },
    "Day": {
      foreground: "#024a70",
      background: "#b8e6fe"
    },
    "Evening": {
      foreground: "#8b0836",
      background: "#ffccd3"
    },
    "Night": {
      foreground: "#312c85",
      background: "#c6d2ff"
    }
  }

  const getIcon = (label: string) => {
    switch (label) {
      case "Morning":
        return <Sunrise size={20} />
      case "Day":
        return <Sun size={20} />
      case "Evening":
        return <Sunset size={20} />
      case "Night":
        return <Moon size={20} />
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-row text-sm gap-2 px-4 py-1 rounded-full"
        style={{
          background: `${stageOfDayColors[stageOfDay].background}`,
          color: `${stageOfDayColors[stageOfDay].foreground}`
        }} 
      >
        {getIcon(stageOfDay)}
        <span>{stageOfDay}</span>
      </div>
      <h3 className="text-2xl font-bold">{paliaTime12Hour}</h3>
    </div>
  )
}