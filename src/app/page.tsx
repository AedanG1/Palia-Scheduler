'use client'

import usePaliaTime from "./hooks/usePaliaTime";

export default function Home() {
  const {clockText, paliaTime} = usePaliaTime();

  return (
    <div>
      <h2>{clockText}</h2>
      <h2>{paliaTime}</h2>
    </div>
  );
}
