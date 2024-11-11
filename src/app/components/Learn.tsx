"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-clicks";
import { TypewriterEffectSmoothDemo } from "./TypeWritter";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <TypewriterEffectSmoothDemo />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={600}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Introduction to Python Functions",
    title: "What are Functions?",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SYGJKpD4w0mBzibM5UgK1a5Reo1QMlnQ4g&s",
    ctaText: "Learn",
    ctaLink: "https://python.org/doc/functions",
    content: `
        Functions are reusable blocks of code designed to perform a specific task. In Python, functions are defined using the 'def' keyword, followed by the function name and parentheses. Functions can have parameters and can return a value.
        Example:
        
        def greet(name):
            return f"Hello, {name}!"
            
        greet("Alice") # Output: Hello, Alice!
      `,
  },
  {
    description: "Parameters and Arguments",
    title: "Understanding Parameters",
    src: "https://pyseek.com/wp-content/uploads/2024/01/Parameters-vs-Arguments-in-Python.webp",
    ctaText: "Learn",
    ctaLink: "https://python.org/doc/parameters",
    content: `
        Parameters are placeholders in function definitions, and arguments are the actual values passed to the function. Parameters define what type of data a function can accept.
        Example:
        
        def add(a, b):
            return a + b
            
        add(5, 3) # Output: 8
      `,
  },
  {
    description: "Default Parameters",
    title: "Setting Default Parameters",
    src: "https://media.geeksforgeeks.org/geeksforgeeks/DefaultargumentsinPython/DefaultargumentsinPython20240618163723.jpg",
    ctaText: "Learn",
    ctaLink: "https://python.org/doc/default-parameters",
    content: `
        Default parameters allow you to specify default values for function arguments. If no argument is provided, the default value is used.
        Example:
        
        def greet(name="Guest"):
            return f"Hello, {name}!"
            
        greet() # Output: Hello, Guest!
        greet("Alice") # Output: Hello, Alice!
      `,
  },
  {
    description: "Return Statements",
    title: "Returning Values",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jPG5VF-7iXrfMP3QltE-Wj2qa5lqmOzDzQ&s",
    ctaText: "Learn",
    ctaLink: "https://python.org/doc/return",
    content: `
        The return statement allows a function to send a result back to the caller. A function can return any type of data, including numbers, strings, lists, or even other functions.
        Example:
        
        def square(num):
            return num * num
            
        square(4) # Output: 16
      `,
  },
  {
    description: "Lambda Functions",
    title: "Anonymous Functions",
    src: "https://image.spreadshirtmedia.net/image-server/v1/compositions/T813A39PA5870PT17X82Y52D192683560W11366H16044/views/1,width=550,height=550,appearanceId=39,backgroundColor=F6BC1A,noPt=true/anonymus-hacker-mask-womens-premium-t-shirt.jpg",
    ctaText: "Learn",
    ctaLink: "https://python.org/doc/lambda",
    content: `
        Lambda functions are small, anonymous functions defined with the 'lambda' keyword. They can have any number of arguments but only one expression.
        Example:
        
        square = lambda x: x * x
        square(4) # Output: 16
      `,
  },
];
