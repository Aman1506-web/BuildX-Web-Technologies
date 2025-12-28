"use client";

// Simple Spotlight Component
const Spotlight = ({ className, fill }: { className?: string; fill?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <defs>
        <radialGradient id="spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill} stopOpacity="1" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="500" cy="500" rx="500" ry="500" fill="url(#spotlight)" />
    </svg>
  );
};

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Fast Delivery",
    description: "1-2 weeks delivery for most projects. Call us for more information.",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Development",
    description: "We design and develop your website with the latest technologies and trends.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalability + Maintenance",
    description: "We offer maintenance and scalability for all websites.",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure Building",
    description: "Safe and secure building practices. To ensure your data is safe.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics Tracking",
    description: "Track your progress with our built in analytics",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Dynamic Websites",
    description: "We build dynamic solutions that are easy to manage.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description: "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export default function GuaranteesSection() {
  return (
    <section className="mt-24">
      <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[40px] bg-black">
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 select-none opacity-30"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)'
          }}
        />

        {/* Spotlight Effect */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
          <Spotlight
            className="absolute -top-20 h-96 w-96 opacity-40"
            fill="white"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 py-20 px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            Our guarantees to you.
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-neutral-300 text-center max-w-5xl mx-auto">
            We ensure the highest quality of work, with the fastest delivery times.
          </p>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-neutral-900/60 backdrop-blur-sm p-8 border border-neutral-800"
              >
                <div className="w-16 rounded-md bg-neutral-800 p-4">
                  <img
                    src={feature.icon}
                    width={64}
                    height={64}
                    alt="icon"
                    className="h-8 w-8"
                  />
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-neutral-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}