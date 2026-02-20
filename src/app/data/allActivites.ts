import { bugs } from "./bugs";
import type { PaliaActivity } from "./data";
import { events } from "./events";
import { fish } from "./fish";

export const allActivites: Array<PaliaActivity> = [
  ...events, ...fish, ...bugs
];
