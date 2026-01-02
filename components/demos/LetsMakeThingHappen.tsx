import React from "react";

import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section className="
     my-10 md:py-20 md:mx-auto
    bg-accent rounded-[45px] p-6 md:p-15 relative overflow-hidden">
      <div className="md:pr-88 relative z-10">
        <p className="text-xl md:text-3xl font-medium">
          Let&apos;s make things happen
        </p>

        <p className="my-6 md:my-10 text-sm md:text-lg">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/meeting"
          className="inline-block py-2.5 px-8
            md:py-3 md:px-16
            text-base md:text-xl
            hover:bg-blue-700
            rounded-[6px] 
            dark:border-white 
            bg-blue-500 
            text-white 
            transition 
            duration-200 
        "
        >
          Book a Call
        </Link>
      </div>
      
      {/* Mobile image - bottom right, smaller */}
      <div className="absolute -bottom-4 -right-4 md:hidden opacity-20">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={150}
          height={150}
        />
      </div>
      
      {/* Desktop image - top right, larger */}
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;