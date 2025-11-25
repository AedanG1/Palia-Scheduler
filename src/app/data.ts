import { nanoid } from "nanoid";

export const LOCATIONS = [
  "Kilima",
  "Kilima Village",
  "Bahari Bay",
  "Elderwood",
  "Elderwood Freshwater",
  "Elderwood Saltwater"
] as const;

export type Locations = typeof LOCATIONS[number];

// add fish etc. to palia activities but create a new property "type" within the type

export type PaliaActivity = {
  id: string;
  name: string;
  desc: string;
  location: Locations;
  imagePath: string;
  startHour: number;
  endHour: number;
  colorBg: string;
  colorText: string;
  colorBorder: string;
  type: "event" | "fish";
};

export const paliaActivities: Array<PaliaActivity> = [
  {
    id: nanoid(),
    name: "Flow-Tree Grove Spawn",
    desc: "Find the Flow-Tree Grove in Bahari Bay. Make sure to let others know where it is!",
    location: "Bahari Bay",
    imagePath: "/BahariBay-Clean.jpg",
    startHour: 0,
    endHour: 1,
    colorBg: "#c4b5fd", // violet 300
    colorText: "#2e1065", // violet 950
    colorBorder: "#8b5cf6", // violet 500
    type: "event"
  },
  {
    id: nanoid(),
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot",
    location: "Kilima Village",
    imagePath: "/Zeki-Underground.jpg",
    startHour: 18,
    endHour: 3,
    colorBg: "#fda4af", // rose 300
    colorText: "#4c0519", // rose 950
    colorBorder: "#f43f5e", // rose 500
    type: "event"
  },
  {
    id: nanoid(),
    name: "Piskii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    location: "Elderwood",
    imagePath: "/Elderwood-PiskiiBounce.jpg",
    startHour: 22,
    endHour: 23,
    colorBg: "#a5b4fc", // indigo 300
    colorText: "#1e1b4b", // indigo 950
    colorBorder: "#6366f1", // indigo 500
    type: "event"
  },
  {
    id: nanoid(),
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom event in Kilima. Make sure to let others know where it is!",
    location: "Kilima",
    imagePath: "/Kilima-Clean.jpg",
    startHour: 12,
    endHour: 13,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e", // green 500
    type: "event"
  },
];