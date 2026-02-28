import { it, expect } from "vitest";
import { bugs } from "../src/app/data/bugs";
import { fish } from "../src/app/data/fish";

it ("all bug images return 200", async () => {
  const failed: string[] = [];

  for (let item of bugs) {
    const res = await fetch(`http://localhost:3000${item.locationImage}`);
    if (res.status !== 200) {
      failed.push(item.locationImage);
    }
  }

  expect(failed, `Failed images:\n${failed.join('\n')}`).toHaveLength(0);
})

it ("all fish images return 200", async () => {
  const failed: string[] = [];

  for (let item of fish) {
    const res = await fetch(`http://localhost:3000${item.locationImage}`);
    if (res.status !== 200) {
      failed.push(item.locationImage);
    }
  }

  expect(failed, `Failed images:\n${failed.join('\n')}`).toHaveLength(0);
})