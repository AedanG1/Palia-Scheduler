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
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "none"
] as const;

export type Rarity = typeof RARITY[number];

export const BAIT = [
  "Worm",
  "Glow Worm"
] as const;

export type Bait = typeof BAIT[number];

const bait = {
  worm: {
    bait: "Worm",
    baitImage: "/worm.png"
  },
  glowWorm: {
    bait: "Glow Worm",
    baitImage: "/glow-worm.png" 
  }
} as const;

const rarity = {
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
  },
  none: {
    rarity: "none",
    rarityColor: "#f54a00"
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
  bait?: Bait;
  baitImage?: string;
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
  bait?: Bait;
  baitImage?: string;
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
    desc: "An eel with sharp spines growing along its length to deter predators. Found off the coast of Bahari Bay using glow worms in the day and night.",
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
    ...bait.glowWorm,
    ...rarity.uncommon,
    type: "Fish",
  },
  
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
    type: "Bugs"
  }
];