import { activityType, rarity } from "./data";
import type { PaliaActivity } from "./data";

export const events: Array<PaliaActivity> = [
  {
    id: "flow-tree-grove-spawn",
    name: "Flow-Tree Grove Spawn",
    desc: "Find the Flow-Tree Grove in Bahari Bay. Make sure to let others know where it is!",
    location: "Bahari Bay",
    locationImage: "/loc-flow-tree-grove.webp",
    displayImage: "/flow-tree-grove.webp",
    timesAvailable: [
      {
        id: "flow-tree-grove-spawn-other",
        label: 'other',
        startHour: 0,
        endHour: 1
      }
    ],
    ...rarity.none,
    ...activityType.events
  },

  {
    id: "zekis-underground",
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot",
    location: "Kilima Village",
    locationImage: "/zeki-underground.webp",
    displayImage: "/zeki.webp",
    timesAvailable: [
      {
        id: "zekis-underground-other",
        label: 'other',
        startHour: 18,
        endHour: 3
      }
    ],
    ...rarity.none,
    ...activityType.events
  },

  {
    id: "piksii-blossom-bounce",
    name: "Piksii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    location: "Elderwood",
    locationImage: "/elderwood-piksii-bounce.webp",
    displayImage: "/piksii-blossom-bounce.webp",
    timesAvailable: [
      {
        id: "piksii-blossom-bounce-other",
        label: 'other',
        startHour: 22,
        endHour: 23
      }
    ],
    ...rarity.none,
    ...activityType.events
  },

  {
    id: "kilima-flower-bloom",
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom event in Kilima. Make sure to let others know where it is!",
    location: "Kilima",
    locationImage: "/loc-kilima-flower-bloom.webp",
    displayImage: "/kilima-flower-bloom.webp",
    timesAvailable: [
      {
        id: "kilima-flower-bloom-other",
        label: 'other',
        startHour: 12, 
        endHour: 13
      }
    ],
    ...rarity.none,
    ...activityType.events
  },
];