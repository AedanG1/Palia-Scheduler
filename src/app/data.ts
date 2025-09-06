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

export type PaliaActivity = {
  id: string;
  name: string;
  desc: string;
  location: Locations;
  startHour: number;
  endHour: number;
  colorBg: string;
  colorText: string;
  colorBorder: string;
};

export const paliaActivities: Array<PaliaActivity> = [
  {
    id: nanoid(),
    name: "Flow-Tree Grove Spawn",
    desc: "Find the Flow-Tree Grove in Bahari Bay. Make sure to let others know where it is!",
    location: "Bahari Bay",
    startHour: 0,
    endHour: 1,
    colorBg: "#c4b5fd", // violet 300
    colorText: "#2e1065", // violet 950
    colorBorder: "#8b5cf6" // violet 500
  },
  {
    id: nanoid(),
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot",
    location: "Kilima Village",
    startHour: 18,
    endHour: 3,
    colorBg: "#fda4af", // rose 300
    colorText: "#4c0519", // rose 950
    colorBorder: "#f43f5e" // rose 500
  },
  {
    id: nanoid(),
    name: "Piskii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    location: "Elderwood",
    startHour: 22,
    endHour: 23,
    colorBg: "#a5b4fc", // indigo 300
    colorText: "#1e1b4b", // indigo 950
    colorBorder: "#6366f1" // indigo 500
  },
  {
    id: nanoid(),
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom event in Kilima. Make sure to let others know where it is!",
    location: "Kilima",
    startHour: 12,
    endHour: 13,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 1,
    endHour: 2,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 2,
    endHour: 3,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 3,
    endHour: 4,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 4,
    endHour: 5,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 5,
    endHour: 6,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 6,
    endHour: 7,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 7,
    endHour: 8,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 8,
    endHour: 9,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 9,
    endHour: 10,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 10,
    endHour: 11,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 11,
    endHour: 12,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 12,
    endHour: 13,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 13,
    endHour: 14,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 14,
    endHour: 15,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 15,
    endHour: 16,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 16,
    endHour: 17,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
  {
    id: nanoid(),
    name: "Test",
    desc: "Test description",
    location: "Kilima",
    startHour: 17,
    endHour: 18,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  },
];