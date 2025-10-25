"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4">
      {/* Top Text */}
      <div className="text-center mb-10">
        <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold leading-tight text-[#171717]">
          <span className="text-[#171717] font-bold">Over </span>
          <span className="text-[#ff5100] font-bold">4,000 students </span>
          <span className="text-[#171717] font-bold">secured jobs at </span>
          <span className="text-[#ff5100] font-bold">360+ Companies.</span>
        </h2>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-6xl mb-10">
        <Image
          src="https://framerusercontent.com/images/BaFF3ZFFmMyvh7wUbQ63vEGys.png?lossless=1&width=2534&height=822"
          alt="Stats Image"
          width={2534}
          height={822}
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-10">
        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <span className="text-[#ff5100] text-3xl font-bold tracking-tight">
            4,000+
          </span>
          <p className="text-[#171717] text-base text-center mt-2">
            Success stories
          </p>
        </div>

        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <span className="text-[#ff5100] text-3xl font-bold tracking-tight">
            360+
          </span>
          <p className="text-[#171717] text-base text-center mt-2">
            Companies hired
          </p>
        </div>

        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <span className="text-[#ff5100] text-3xl font-bold tracking-tight">
            15,000+
          </span>
          <p className="text-[#171717] text-base text-center mt-2">
            Happy students
          </p>
        </div>
      </div>

      {/* Final Text */}
      <p className="text-center text-[#212121] text-lg max-w-3xl">
        And we can do the same for you. Our mission is to help you land your
        dream job in the next 6 months.
      </p>
    </section>
  );
}
