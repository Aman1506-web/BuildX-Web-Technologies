import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { NumberTicker } from "@/components/ui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logo";
import { CoverDemo } from "@/components/demos/cover-demo";

// Types for better type safety
interface HeroFeature {
  text: string;
  sequence: string[];
}

interface HeroStats {
  value: number;
  label: string;
}

interface HeroLogo {
  logo: string;
  name: string;
}

interface HeroSectionProps {
  heading?: React.ReactNode;
  heroImage?: string;
  heroImageAlt?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features?: HeroFeature[];
  stats?: HeroStats[];
  logos?: HeroLogo[];
  trustedByText?: string;
}

export default function HeroSection({
  heading,
  heroImage = "/illustrations/design-build-grow.png", // Your single hero image path
  heroImageAlt = "Hero Illustration",
  description = "We design and build websites that convert. Book a call to discuss your project.",
  primaryButtonText = "Book Call",
  primaryButtonLink = "/meeting",
  secondaryButtonText = "Projects",
  secondaryButtonLink = "/showcase",
  features = [
    { text: "Design", sequence: ["Design"] },
    { text: "Development", sequence: ["Development"] },
    { text: "Marketing", sequence: ["Marketing"] },
    { text: "Strategy", sequence: ["Strategy"] },
  ],
  stats = [
    { value: 1000, label: "Happy Clients" },
    { value: 100, label: "Projects Completed" },
  ],
  logos = [
    { logo: "/logo/quiotech-logo.png", name: "Logo1" },
    { logo: "/logo/BreatheX_logo.png", name: "Logo2" },
  ],
  trustedByText = "Trusted by fast moving brands worldwide",
}: HeroSectionProps) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-0 mx-auto max-w-7xl pt-10 md:pt-14 pb-10 md:pb-16">
      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
        
        {/* Hero Illustration Image - Single Image */}
        
          <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:max-w-4xl h-24 sm:h-32 md:h-40 lg:h-48 mx-auto px-2 sm:px-4">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        

        {/* Heading */}
        <div className="w-full mt-0 mb-4 md:mb-10 px-2">
          <h1 className="text-center">
            {heading || <CoverDemo />}
          </h1>
        </div>

        {/* Description */}
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-500 max-w-4xl mx-auto px-4 md:px-0">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto max-w-md">
          <Link
            href={primaryButtonLink}
            className="flex-1 min-w-35 py-2.5 px-6 sm:px-8 md:px-12 text-sm md:text-lg font-semibold
              text-center whitespace-nowrap
              rounded-[6px]
               
              bg-blue-600 text-white 
              hover:bg-blue-700
              transition duration-200 
            
              active:translate-x-[3px]
              active:translate-y-[3px]"
          >
            {primaryButtonText}
          </Link>
          
          <Link
            href={secondaryButtonLink}
            className="flex-1 min-w-35 py-2.5 px-6 sm:px-8 md:px-12 text-sm md:text-lg font-medium
              text-center whitespace-nowrap
              rounded-[6px]
            
              bg-blue-100 text-[#005BAB]
              hover:bg-blue-300
              transition duration-200
              
              active:translate-x-[3px]
              active:translate-y-[3px]"
          >
            {secondaryButtonText}
          </Link>
        </div>

        {/* Features Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mx-auto px-4">
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex items-center gap-1.5 md:gap-4 justify-center w-full"
    >
              <PiCheckBold className="text-lg md:text-xl text-blue-500 flex-shrink-0" />
              <p className="text-sm md:text-base lg:text-xl font-semibold whitespace-nowrap">
                <TypeAnimation
                  sequence={feature.sequence}
                  speed={5}
                  cursor={false}
                />
              </p>
            </div>
          ))}
        </div>

        {/* Stats and Logos Section */}
        <div className="w-full max-w-6xl mx-auto px-4 mt-6 md:mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
            {/* Stats */}
            <div className="w-full md:w-2/5">
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6 md:w-4/5">
                {trustedByText}
              </h2>

              <div className="flex items-center gap-5">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <div className="flex-1">
                      <div className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
                        <NumberTicker value={stat.value} className="text-blue-500" />
                        <span className="ml-1">+</span>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1">
                        {stat.label}
                      </p>
                    </div>
                    
                    {index < stats.length - 1 && (
                      <div className="w-px h-16 bg-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Logos */}
            <div className="w-full md:w-3/5 overflow-hidden">
              <InfiniteMovingLogos
                speed="fast"
                direction="left"
                items={logos}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


