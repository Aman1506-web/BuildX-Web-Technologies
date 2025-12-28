import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[1.1]">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          <div className="flex items-center gap-4">
            <span className="text-blue-500">&nbsp;BuildX</span>
            <span className="text-black dark:text-white">Web Technologies</span>
          </div>
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={20} direction={-1}>
          <div className="flex items-center gap-4">
            <span className="text-blue-500">&nbsp;BuildX</span>
            <span className="text-black dark:text-white">Web Technologies</span>
          </div>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
}
