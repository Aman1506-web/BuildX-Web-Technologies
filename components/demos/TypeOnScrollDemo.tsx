"use client";

import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

type TypeSpeed = "slow" | "medium" | "fast";

type Props = {
  text: string;
  className?: string;
  speed?: TypeSpeed;
};

export default function TypeOnScroll({
  text,
  className,
  speed = "medium",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {start && (
        <>
          <TypeAnimation
            sequence={[text, () => setShowCursor(false)]}
            speed={{ type: "keyStrokeDelayInMs", value: 50 }}
            repeat={0}
            cursor={false}
            wrapper="span"
          />
          {showCursor && <span className="type-animation-cursor" />}
        </>
      )}
    </div>
  );
}
