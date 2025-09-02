export type PaliaActivity = {
  id: number;
  name: string;
  desc: string;
  startHour: number;
  endHour: number | null;
};

export const paliaActivities: Array<PaliaActivity> = [
  {
    id: 1,
    name: "Flow-Tree Garden",
    desc: "Find the Flow-Tree Garden in Bahari Bay. Make sure to let others know where it is!",
    startHour: 0,
    endHour: null
  },
  {
    id: 2,
    name: "Zeki's Underground",
    desc: "Head to Zeki's Underground for a game of Hot Pot or to browse his selection of random goods!",
    startHour: 18,
    endHour: 3
  },
  {
    id: 3,
    name: "Piskii Blossom Bounce",
    desc: "Travel to the Elderwood and collect the floating seeds before time runs out!",
    startHour: 22,
    endHour: 23
  },
  {
    id: 4,
    name: "Kilima Flower Bloom",
    desc: "Find the Flower Bloom in Kilima. Make sure to let others know where it is!",
    startHour: 12,
    endHour: null
  }
];