import Image from "next/image";
import { ExpandableCardDemo } from "./components/Learn";
import Testimonial from "./components/Testimonial";
import { Hero } from "./components/Hero";
import LearnPython from "./components/LearnPython";

export default function Home() {
  return (
    <div>
      <Hero />
      <LearnPython />
      <ExpandableCardDemo />
      <Testimonial />
    </div>
  );
}
