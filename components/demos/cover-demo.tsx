import Image from "next/image";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <section className="relative flex flex-col items-center px-4 pt-3 md:pt-20">

      {/* 🔹 Image added ABOVE heading */}
      <div className="mb-6 md:mb-20">
        <Image
          src="/illustrations/design-build-grow.png"
          alt="Design Build Grow"
          width={320}
          height={120}
          priority
          className="h-16 sm:h-20 md:h-24 scale-120 md:scale-190 w-auto object-contain"
        />
      </div>

      {/* 🔹 Heading (unchanged) */}
      <h1
        className="
          text-4xl sm:text-5xl md:text-7xl
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
