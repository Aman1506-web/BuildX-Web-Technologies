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
    { value: 15, label: "Tech stack Mastery" },
    { value: 10, label: "In House-Projects" },
  ],
logos = [
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { logo: "/logo/ts-logo.png", name: "TypeScript" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", name: "Vercel" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  { logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", name: "Shadcn UI" },
  { 
    logo: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" fill="none" viewBox="0 0 82 30"><path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/><path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/><path fill="#0ae448" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/><path fill="#0ae448" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/></svg>`)}`,
    name: "GSAP" 
  },
  { logo: "/logo/framer-motion.svg", name: "Framer Motion" },
  { logo: "/logo/convex.svg", name: "Convex" },
  { logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", name: "Supabase" },
],
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
                Powered by <span className="text-blue-500">Modern Technologies</span> that are trusted worldwide.
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

