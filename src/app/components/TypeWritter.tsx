"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Best",
    },
    {
      text: "Learning",
    },
    {
      text: "Platform",
    },
    {
      text: "Ever",
    },
  ];
  return (
    <div
      id="learn"
      className="flex flex-col items-center justify-center   text-black  "
    >
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
