import { BlurFadeDemo } from "@/components/demos/BlurFadeDemo";
import ShowcaseNavbar from "@/components/demos/Showcase-Navbar";
import LetsMakeThingsHappenSection from "@/components/demos/LetsMakeThingHappen";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import Navbar from "@/components/Navbar";

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
};

export default Showcase;