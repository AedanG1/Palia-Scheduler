export const LOCATIONS = [
  "Kilima",
  "Kilima Village",
  "Bahari Bay",
  "Bahari Coast",
  "Elderwood",
  "Elderwood Freshwater",
  "Elderwood Saltwater"
] as const;

export type Locations = typeof LOCATIONS[number];

export const ACTIVITYTYPE = [
  "Events",
  "Fish",
  "Bugs"
] as const;

export type ActivityType = typeof ACTIVITYTYPE[number];

export const TIMELABEL = [
  "morning",
  "day",
  "evening",
  "night",
  "other"
] as const;

export type TimeLabel = typeof TIMELABEL[number];

export type TimeSlot = {
  id: string;
  label: TimeLabel;
  startHour: number;
  endHour: number;
}

export type PaliaActivity = {
  id: string;
  name: string;
  desc: string;
  location: Locations;
  imagePath: string;
  timesAvailable: TimeSlot[];
  colorBg: string;
  colorText: string;
  colorBorder: string;
  type: ActivityType;
};

export type ScheduledActivity = {
  id: string;
  name: string;
  desc: string;
  location: Locations;
  imagePath: string;
  label: TimeLabel;
  startHour: number;
  endHour: number;
  colorBg: string;
  colorText: string;
  colorBorder: string;
  type: ActivityType;
};

export const paliaActivities: Array<PaliaActivity> = [
  {
    id: "flow-tree-grove-spawn",
    name: "Flow-Tree Grove Spawn",
    desc: "Find the Flow-Tree Grove in Bahari Bay. Make sure to let others know where it is!",
    location: "Bahari Bay",
    imagePath: "/BahariBay-Clean.jpg",
    timesAvailable: [
      {
        id: "flow-tree-grove-spawn-other",
        label: 'other',
        startHour: 0,
        endHour: 1
      }
    ],
    colorBg: "#c4b5fd", // violet 300
    colorText: "#2e1065", // violet 950
    colorBorder: "#8b5cf6", // violet 500
    type: "Events"
  },
  {
    id: "zekis-underground",
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot",
    location: "Kilima Village",
    imagePath: "/Zeki-Underground.jpg",
    timesAvailable: [
      {
        id: "zekis-underground-other",
        label: 'other',
        startHour: 18,
        endHour: 3
      }
    ],
    colorBg: "#fda4af", // rose 300
    colorText: "#4c0519", // rose 950
    colorBorder: "#f43f5e", // rose 500
    type: "Events"
  },
  {
    id: "piskii-blossom-bounce",
    name: "Piskii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    location: "Elderwood",
    imagePath: "/Elderwood-PiskiiBounce.jpg",
    timesAvailable: [
      {
        id: "piskii-blossom-bounce-other",
        label: 'other',
        startHour: 22,
        endHour: 23
      }
    ],
    colorBg: "#a5b4fc", // indigo 300
    colorText: "#1e1b4b", // indigo 950
    colorBorder: "#6366f1", // indigo 500
    type: "Events"
  },
  {
    id: "kilima-flower-bloom",
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom event in Kilima. Make sure to let others know where it is!",
    location: "Kilima",
    imagePath: "/Kilima-Clean.jpg",
    timesAvailable: [
      {
        id: "kilima-flower-bloom-other",
        label: 'other',
        startHour: 12, 
        endHour: 13
      }
    ],
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e", // green 500
    type: "Events"
  },
  {
    id: "cactus-moray",
    name: "Cactus Moray",
    desc: "Requires Glow Worms",
    location: "Bahari Coast",
    imagePath: "/fish-cactus-moray.png",
    timesAvailable: [
      {
        id: "cactus-moray-night",
        label: 'night',
        startHour: 21,
        endHour: 3
      },
      {
        id: "cactus-moray-day",
        label: 'day',
        startHour: 6,
        endHour: 18
      }
    ],
    colorBg: "#86efac",
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e", // green 500
    type: "Fish",
  },
  {
    id: "rainbow-butterfly",
    name: "Rainbow-Tipped Butterfly",
    desc: "rare",
    location: "Bahari Bay",
    imagePath: "/bug-rainbow-tipped-butterfly.png",
    timesAvailable: [
      {
        id: "rainbow-butterfly-other",
        label: 'other',
        startHour: 10,
        endHour: 13
      }
    ],
    colorBg: "#86efac",
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e", // green 500
    type: "Bugs"
  }
];