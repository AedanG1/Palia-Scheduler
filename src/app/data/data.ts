export const LOCATIONS = [
  "Kilima",
  "Kilima Village",
  "Kilima Lake",
  "Kilima Rivers",
  "Bahari Bay",
  "Bahari Coast",
  "Bahari Rivers",
  "Elderwood",
  "Elderwood Freshwater",
  "Elderwood Saltwater",
  "Caves",
  "Ponds",
  "Temple of the Gales"
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

export const bait = {
  worm: {
    bait: "Worm",
    baitImage: "/worm.png"
  },
  glowWorm: {
    bait: "Glow Worm",
    baitImage: "/glow-worm.png" 
  }
} as const;

export const rarity = {
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
    rarityColor: "#44403b"
  }
} as const;

export const defaultTimeSlots = {
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