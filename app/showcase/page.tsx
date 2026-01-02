import { BlurFadeDemo } from "@/components/demos/BlurFadeDemo";
import ShowcaseNavbar from "@/components/demos/Showcase-Navbar";
import LetsMakeThingsHappenSection from "@/components/demos/LetsMakeThingHappen";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Navbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative pt-20">
  <BlurFade inView delay={0.15}>
    <h1 className="text-3xl lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20">
      Design & Code That Helps Your Business Grow
    </h1>
  </BlurFade>
</div>

       <BlurFade inView delay={0.3}>
  <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
    Have a look at some of our recent projects.
  </p>
</BlurFade>


        <BlurFadeDemo />

        <LetsMakeThingsHappenSection />


      </section>

      <Footer />

    </div>
  );
};

export default Showcase;