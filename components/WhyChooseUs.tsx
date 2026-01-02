import { 
  Target, 
  Smartphone, 
  Code2, 
  Zap, 
  MessageSquare, 
  Users, 
  Search, 
  BarChart3 
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: "Conversion-focused design",
      description: "Every element is crafted to turn visitors into customers"
    },
    {
      icon: Smartphone,
      title: "Mobile-first approach",
      description: "Optimized for seamless experience across all devices"
    },
    {
      icon: Code2,
      title: "Clean & scalable codebase",
      description: "Built with best practices for long-term maintainability"
    },
    {
      icon: Zap,
      title: "Fast turnaround time",
      description: "Launch your project quickly without compromising quality"
    },
    {
      icon: MessageSquare,
      title: "Transparent communication",
      description: "Regular updates and clear timelines throughout the project"
    },
    {
      icon: Users,
      title: "Direct access to founders",
      description: "Work directly with experienced founders, not junior staff"
    },
    {
      icon: Search,
      title: "SEO-ready structure",
      description: "Built-in optimization to help your site rank from day one"
    },
    {
      icon: BarChart3,
      title: "Analytics & tracking setup",
      description: "Monitor performance and make data-driven decisions"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Why clients choose{" "}
            <span className="text-blue-600">Quiotech</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver results through proven strategies and transparent partnerships
          </p>
        </div>

        {/* Desktop Grid (2 columns) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group flex gap-4 p-6 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <div className="flex flex-col gap-4 p-5 rounded-lg bg-white border border-gray-200 h-full shadow-sm">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-base">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {reasons.map((_, index) => (
              <div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Ready to start your project?
          </p>
          <a
            href="/meeting"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm md:text-base"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Custom scrollbar hide styles - add to global CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}