"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { logo: string; name: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "10s" : speed === "normal" ? "40s" : "100s";
    containerRef.current.style.setProperty(
      "--animation-duration",
      duration
    );
  };

  const addAnimation = () => {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);

    children.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current!.appendChild(clone);
    });

    getDirection();
    getSpeed();

    requestAnimationFrame(() => {
      setStart(true);
    });
  };

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max gap-6 md:gap-8 py-4 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:paused"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-center shrink-0 h-16 md:h-20"
          >
            <div className="relative h-full w-auto flex items-center justify-center hover:scale-110 transition-all duration-300">
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={56}
                className="h-12 md:h-16 w-auto object-contain"
                style={{ maxHeight: "64px" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};