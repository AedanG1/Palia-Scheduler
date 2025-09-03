import { nanoid } from "nanoid";

export type PaliaActivity = {
  id: string;
  name: string;
  desc: string;
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
    startHour: 0,
    endHour: 1,
    colorBg: "#c4b5fd", // violet 300
    colorText: "#2e1065", // violet 950
    colorBorder: "#8b5cf6" // violet 500
  },
  {
    id: nanoid(),
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot! GAMBA!",
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
    startHour: 22,
    endHour: 23,
    colorBg: "#a5b4fc", // indigo 300
    colorText: "#1e1b4b", // indigo 950
    colorBorder: "#6366f1" // indigo 500
  },
  {
    id: nanoid(),
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom in Kilima. Make sure to let others know where it is!",
    startHour: 12,
    endHour: 13,
    colorBg: "#86efac", // green 300
    colorText: "#052e16", // green 950
    colorBorder: "#22c55e" // green 500
  }
];