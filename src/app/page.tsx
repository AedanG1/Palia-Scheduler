'use client'

import usePalianTime from "./hooks/usePalianTime";

export default function Home() {
  const {clockText} = usePalianTime();

  return (
    <h2>{clockText}</h2>
  );
}
