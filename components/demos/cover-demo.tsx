
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1
        className="
          text-4xl sm:text-5xl md:text-7xl
          leading-tight md:leading-[1.1]
          font-semibold
          max-w-7xl
          mx-auto
          md:text-center
          relative
          z-20
          bg-clip-text
          text-transparent
          bg-linear-to-b from-neutral-800 via-neutral-700 to-neutral-700
          dark:from-neutral-800 dark:via-white dark:to-white
        "
      >
        Elevate your brand with
        <br className="block mt-6 md:mt-8" />
        <Cover>
          <span className="text-blue-600">
            BuildX
          </span>{" "}
          Web Services
        </Cover>
      </h1>
    </div>
  );
}
