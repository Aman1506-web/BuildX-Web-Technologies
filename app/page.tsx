"use client";

import Image from "next/image";
import { Element } from "react-scroll";
import Link from "next/link";
// import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
// import { CoverDemo } from "@/components/demos/cover-demo";
// import { PiCheckBold } from "react-icons/pi";
// import { TypeAnimation } from "react-type-animation";
// import { NumberTicker } from "@/components/ui/number-ticker";
// import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logo";
import { TextGenerateEffectDemo } from "@/components/demos/text-generate-effect-demo";
import { ShineBorder } from "@/components/ui/shine-border";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import TypeOnScroll from "@/components/demos/TypeOnScrollDemo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { IconStarFilled } from "@tabler/icons-react";
import HeroSection from "@/components/HeroSection";

import GuaranteesSection from "@/components/demos/GuaranteeSection";
import LetsMakeThingsHappenSection from "@/components/demos/LetsMakeThingHappen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  const services = [
    {
      icon: "/images/s_6.png",
      title: "Web Design + Development",
      description: `Modern websites designed to represent your business professionally.
Fast, mobile-friendly, and easy for customers to use.`,
    },
    {
      icon: "/images/s_1.png",
      title: "Search Engine Optimization",
      description: `Improve your website’s visibility on Google and search engines. We optimize your site to help customers find your business online.`,
    },
    {
      icon: "/images/s_5.png",
      title: "Content Creation",
      description: `High-quality content for websites and social media. We create content that communicates your brand clearly and builds trust.`,
    },
    {
      icon: "/images/s_3.png",
      title: "Social Media Marketing",
      description: `Grow your brand on Instagram and Facebook with consistent posting and engagement.We help businesses stay active and connected with their audience.`,
    },
    {
      icon: "/images/s_4.png",
      title: "Email & Whatsapp Marketing",
      description: `Reach your customers directly with emails and WhatsApp messages.Perfect for offers, updates, reminders, and repeat customers.`,
    },
    {
      icon: "/images/s_2.png",
      title: "Online Ads (Google & Social Media)",
      description: `Run ads on Google, Facebook, and Instagram to get fast enquiries and leads.Best for businesses looking for quick results.`,
    },
  ];

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
      {/* Navbar */}
      <Navbar />

      <main className="md:pb-10">
        <HeroSection />
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center">
            <TextGenerateEffectDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-lg md:text-xl text-gray-500">
            All our services are designed to help businesses get more visibility, enquiries, and growth.
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

                <h1 className="text-lg font-medium">{service.title}</h1>

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
          <h1 className="text-3xl md:text-4xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
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
          text-lg md:text-xl text-gray-500"
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
                  className="lg:text-3xl text-2xl font-semibold"
                />

                <TypeOnScroll
                  text="Connect with us via meeting"
                  className="text-lg lg:text-xl text-gray-500"
                />

                <TypeOnScroll
                  text="2. Collaborate"
                  className="lg:text-3xl text-2xl font-semibold"
                />

                <TypeOnScroll
                  text="Outline the scope of the project"
                  className="text-lg lg:text-xl text-gray-500"
                />

                <TypeOnScroll
                  text="3. Create"
                  className="lg:text-3xl text-2xl font-semibold"
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

      {/* <WhyChooseUs /> */}

      <Element name="guarentees">
        <GuaranteesSection />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
