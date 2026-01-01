import Image from "next/image";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <section className="relative flex flex-col items-center px-4 pt-1 md:pt-1">

      {/* 🔹 Heading (unchanged) */}
      <h1
        className="
          text-3xl sm:text-4xl md:text-6xl
          leading-tight md:leading-[1.1]
          font-semibold
          max-w-6xl
          mx-auto
          text-center
          relative
          z-20
        "
      >
        Websites that convert.
        <Cover >
          <span className="text-blue-600">Designed.</span>{" "}
          Built. Scaled.
        </Cover>
      </h1>

    </section>
  );
}
