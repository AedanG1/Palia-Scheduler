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

export const RARITY = [
  "none",
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary"
] as const;

export type Rarity = typeof RARITY[number];

const rarity = {
  none: {
    rarity: "none",
    rarityColor: "none"
  },
  common: {
    rarity: "common",
    rarityColor: "#62748e"
  },
  uncommon: {
    rarity: "uncommon",
    rarityColor: "#00a63e"
  },
  rare: {
    rarity: "rare",
    rarityColor: "#0084d1"
  },
  epic: {
    rarity: "epic",
    rarityColor: "#432dd7"
  },
  legendary: {
    rarity: "legendary",
    rarityColor: "#c70036"
  }
} as const;

const defaultTimeSlots = {
  morning: {
    label: "morning",
    startHour: 3,
    endHour: 6
  },
  day: {
    label: "day",
    startHour: 6,
    endHour: 18
  },
  evening: {
    label: "evening",
    startHour: 18,
    endHour: 21
  },
  night: {
    label: "night",
    startHour: 21,
    endHour: 3
  }
} as const;

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
  locationImage: string;
  displayImage: string;
  timesAvailable: TimeSlot[];
  rarity: Rarity;
  rarityColor: string;
  type: ActivityType;
};

export type ScheduledActivity = {
  id: string;
  name: string;
  desc: string;
  location: Locations;
  locationImage: string;
  displayImage: string;
  label: TimeLabel;
  startHour: number;
  endHour: number;
  rarity: Rarity;
  rarityColor: string;
  type: ActivityType;
};

export const paliaActivities: Array<PaliaActivity> = [
  {
    id: "flow-tree-grove-spawn",
    name: "Flow-Tree Grove Spawn",
    desc: "Find the Flow-Tree Grove in Bahari Bay. Make sure to let others know where it is!",
    location: "Bahari Bay",
    locationImage: "/BahariBay-Clean.jpg",
    displayImage: "/flow-tree-grove.png",
    timesAvailable: [
      {
        id: "flow-tree-grove-spawn-other",
        label: 'other',
        startHour: 0,
        endHour: 1
      }
    ],
    ...rarity.none,
    type: "Events"
  },
  {
    id: "zekis-underground",
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot",
    location: "Kilima Village",
    locationImage: "/Zeki-Underground.jpg",
    displayImage: "/zeki.png",
    timesAvailable: [
      {
        id: "zekis-underground-other",
        label: 'other',
        startHour: 18,
        endHour: 3
      }
    ],
    ...rarity.none,
    type: "Events"
  },
  {
    id: "piksii-blossom-bounce",
    name: "Piksii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    location: "Elderwood",
    locationImage: "/Elderwood-PiskiiBounce.jpg",
    displayImage: "/piksii-blossom-bounce.png",
    timesAvailable: [
      {
        id: "piksii-blossom-bounce-other",
        label: 'other',
        startHour: 22,
        endHour: 23
      }
    ],
    ...rarity.none,
    type: "Events"
  },
  {
    id: "kilima-flower-bloom",
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom event in Kilima. Make sure to let others know where it is!",
    location: "Kilima",
    locationImage: "/Kilima-Clean.jpg",
    displayImage: "/kilima-flower-bloom.png",
    timesAvailable: [
      {
        id: "kilima-flower-bloom-other",
        label: 'other',
        startHour: 12, 
        endHour: 13
      }
    ],
    ...rarity.none,
    type: "Events"
  },
  {
    id: "cactus-moray",
    name: "Cactus Moray",
    desc: "Requires Glow Worms",
    location: "Bahari Coast",
    locationImage: "",
    displayImage: "/fish-cactus-moray.png",
    timesAvailable: [
      {
        id: "cactus-moray-night",
        ...defaultTimeSlots.night  
      },
      {
        id: "cactus-moray-day",
        ...defaultTimeSlots.day
      }
    ],
    ...rarity.uncommon,
    type: "Fish",
  },
  {
    id: "rainbow-tipped-butterfly",
    name: "Rainbow-Tipped Butterfly",
    desc: "Supreme smoke bombs would be useful",
    location: "Bahari Bay",
    locationImage: "",
    displayImage: "/bug-rainbow-tipped-butterfly.png",
    timesAvailable: [
      {
        id: "rainbow-butterfly-other",
        label: 'other',
        startHour: 10,
        endHour: 13
      }
    ],
    ...rarity.epic,
    type: "Bugs"
  }
];