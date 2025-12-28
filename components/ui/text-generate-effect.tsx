"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);

  // 👇 trigger when visible
  const isInView = useInView(containerRef, {
    once: true,          // 🔥 run only once
    margin: "-100px",    // start slightly before fully visible
  });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!isInView) return;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.15),
      }
    );
  }, [isInView, animate, filter, duration]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "font-bold leading-tight tracking-tight",
        className
      )}
    >
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block opacity-0 dark:text-white text-black"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
