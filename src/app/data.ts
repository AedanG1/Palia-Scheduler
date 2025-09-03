import { nanoid } from "nanoid";

export type PaliaActivity = {
  id: string;
  name: string;
  desc: string;
  startHour: number;
  endHour: number;
};

export const paliaActivities: Array<PaliaActivity> = [
  {
    id: nanoid(),
    name: "Flow-Tree Garden Spawn",
    desc: "Find the Flow-Tree Garden in Bahari Bay. Make sure to let others know where it is!",
    startHour: 0,
    endHour: 1
  },
  {
    id: nanoid(),
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot or to browse his selection of random goods!",
    startHour: 18,
    endHour: 3
  },
  {
    id: nanoid(),
    name: "Piskii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    startHour: 22,
    endHour: 23
  },
  {
    id: nanoid(),
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom in Kilima. Make sure to let others know where it is!",
    startHour: 12,
    endHour: 13
  }
];