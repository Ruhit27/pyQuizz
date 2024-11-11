import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-[80%] mt-3  ">
        <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center  font-sans tracking-tight">
          Are You Ready To Learn?
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Python Function.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Python Function.</span>
            </div>
          </div>
        </h2>
        <div className="flex justify-center">
          <Link href={"/signup"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white text-black text-xl  border-neutral-200 dark:border-slate-800"
            >
              Take Quizz
            </Button>
          </Link>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
