"use client";

import Image from "next/image";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { PiCheckBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { NumberTicker } from "@/components/ui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logo";
import { TextGenerateEffectDemo } from "@/components/demos/text-generate-effect-demo";
import { ShineBorder } from "@/components/ui/shine-border";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import TypeOnScroll from "@/components/demos/TypeOnScrollDemo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { IconStarFilled } from "@tabler/icons-react";

import GuaranteesSection from "@/components/demos/GuaranteeSection";
import LetsMakeThingsHappenSection from "@/components/demos/LetsMakeThingHappen";
import Navbar from "@/components/Navbar";

export default function Home() {

  const services = [
    {
      icon: "/images/s_6.png",
      title: "Web Design + Development",
      description:
        "Take your business to the next level with our web design and development services",
    },
    {
      icon: "/images/s_1.png",
      title: "Search Engine Optimization",
      description:
        "Get your website to the top of search engine results with our SEO services",
    },
    {
      icon: "/images/s_5.png",
      title: "Content Creation",
      description:
        "Boost your brand's online presence with our social media marketing services",
    },
    {
      icon: "/images/s_3.png",
      title: "Social Media Marketing",
      description:
        "Interact with your customers and increase sales with our email marketing services",
    },
    {
      icon: "/images/s_4.png",
      title: "Email Marketing",
      description:
        "With our content creation services, we help businesses drive results",
    },
    {
      icon: "/images/s_2.png",
      title: "Pay-Per-Click Advertising",
      description:
        "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
    },
  ];

  


  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
      {/* Navbar */}
      <Navbar/>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          {/* <AnimatedShinyTextDemo /> */}

          <h1>
            <CoverDemo />
          </h1>

          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
           We design and build websites that convert. Book a call to discuss your project.
          </p>
          {/* CTA Buttons - Colorful Design */}
        <div className="flex md:justify-center items-center gap-x-4 relative z-10">
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl font-semibold
              hover:bg-blue-700
              rounded-[6px]
              border 
              whitespace-nowrap
              border-black 
              bg-blue-500 
              text-white 
              transition 
              duration-200 
              shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
          >
            Book Call
          </Link>
          
          <Link
            href="/showcase"
            className="bg-yellow-400
              py-3 
              px-10
              md:px-16
              md:text-xl
              font-semibold
              text-black
              border
              border-black
              rounded-[6px]
              hover:bg-yellow-500
              transition
              duration-200
              shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
          >
            Projects
          </Link>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            {/* Design */}
            <p className="md:text-xl font-semibold flex gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              <TypeAnimation sequence={["Design"]} speed={60} cursor={false} />
            </p>

            {/* Development */}
            <p className="md:text-xl font-semibold flex gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              <TypeAnimation
                sequence={["Development"]}
                speed={60}
                cursor={false}
              />
            </p>

            {/* Marketing */}
            <p className="md:text-xl font-semibold flex gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              <TypeAnimation
                sequence={["Marketing"]}
                speed={60}
                cursor={false}
              />
            </p>

            {/* Strategy */}
            <p className="md:text-xl font-semibold flex gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              <TypeAnimation
                sequence={["Strategy"]}
                speed={60}
                cursor={false}
              />
            </p>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={1000} className="text-blue-500" /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} className="text-blue-500" /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="fast"
                direction="left"
                items={[
                  {
                    logo: "/logo/BXLogo.png",
                    name: "Logo1",
                  },
                  {
                    logo: "/logo/BreatheX_logo.png",
                    name: "Logo2",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1 className="text-4xl md:text-6xl xl:text-7xl text-center">
            <TextGenerateEffectDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="
        relative overflow-hidden
        flex flex-col justify-between h-full
        space-y-4 text-center
        bg-gray-100 p-6 cursor-pointer
        rounded-md
        transition-transform
        hover:scale-105
      "
              >
                {/* ✨ SHINY BORDER */}
                <ShineBorder shineColor={["#2563EB", "#0EA5E9", "#020617"]} />

                {/* CONTENT */}
                <Image
                  src={service.icon}
                  width={600}
                  height={600}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt={service.title}
                />

                <h1 className="text-xl font-medium">{service.title}</h1>

                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
          >
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            {/* LEFT SIDE – animation */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>

            {/* RIGHT SIDE – typewriter process */}
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <div className="ml-6 md:ml-10 pt-8 space-y-6">
                <TypeOnScroll
                  text="1. Connect"
                  className="lg:text-4xl text-3xl font-semibold"
                />

                <TypeOnScroll
                  text="Connect with us via meeting"
                  className="text-lg lg:text-xl text-gray-500"
                />

                <TypeOnScroll
                  text="2. Collaborate"
                  className="lg:text-4xl text-3xl font-semibold"
                />

                <TypeOnScroll
                  text="Outline the scope of the project"
                  className="text-lg lg:text-xl text-gray-500"
                />

                <TypeOnScroll
                  text="3. Create"
                  className="lg:text-4xl text-3xl font-semibold"
                />

                <TypeOnScroll
                  text="Leave the rest to us"
                  className="text-lg lg:text-xl text-gray-500"
                />
              </div>
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/BXLogo.png"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with Bird for over 2 years and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <GuaranteesSection />
      </Element>

        <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/BXLogo.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">+91-9654248879</p>
          <p className="text-left  text-xl  text-gray-500">
           buildxwebtech739@gmail.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 BuildX Web Technologies. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
