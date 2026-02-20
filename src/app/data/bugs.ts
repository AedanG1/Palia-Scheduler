import { activityType, defaultTimeSlots, rarity } from "./data";
import { PaliaActivity } from "./data"

  
export const bugs: Array<PaliaActivity> = [
  {
    id: "rainbow-tipped-butterfly",
    name: "Rainbow-Tipped Butterfly",
    desc: "Ancient legends say this rare butterfly got its beautiful coloring from dipping the tip of its wings in a Well of Flow. Found in the Fields of Bahari Bay during the morning and day.",
    location: "Bahari Bay",
    locationImage: "",
    displayImage: "/bug-rainbow-tipped-butterfly.png",
    timesAvailable: [
      {
        id: "rainbow-butterfly-morning",
        ...defaultTimeSlots.morning
      },
      {
        id: "rainbow-butterfly-day",
        ...defaultTimeSlots.day
      }
    ],
    ...rarity.epic,
    ...activityType.bugs
  }
];