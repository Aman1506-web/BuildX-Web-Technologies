"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Built from the ground up`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        xl:text-7xl
        text-center
      "
       words={words} />;
}
