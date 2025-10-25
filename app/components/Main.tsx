"use client";

import React from "react";
import Hero from "@/app/components/Hero";
import AboutSection from "./AboutSection";
import HowItWorks from "./HowItWorks";
import WhyJoin from "./WhyJoin";
import SolutionSection from "./SolutionSection";
import ReviewsSection from "./Reviews";
import FAQ from "./FAQ";
import RegisterFooter from "./RegisterFooter";

const Main = () => {
  return (
    <main
      id="main"
      className="relative min-h-screen w-auto bg-white text-gray-900 overflow-x-hidden"
      data-framer-root=""
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] [background-size:15px_15px] pointer-events-none" />

      {/* Outer Wrapper */}
      <div className="relative flex flex-col items-center justify-start w-full min-h-screen">
        {/* Hero Section */}
        <section className="w-full">
          <Hero />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full min-h-[80vh] flex items-center justify-center"
        >
          <AboutSection />
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white border-t border-gray-200"
        >
          <HowItWorks />
        </section>
        <section
          id="features"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white border-t border-gray-200"
        >
          <WhyJoin />
        </section>
        <section
          id="features"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white border-t border-gray-200"
        >
          <SolutionSection />
        </section>
        <section
          id="features"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white border-t border-gray-200"
        >
          <ReviewsSection />
        </section>
        <section
          id="features"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white border-t border-gray-200"
        >
          <FAQ />
        </section>
        <section
          id="features"
          className="w-full min-h-[80vh] flex items-center justify-center bg-white border-t border-gray-200"
        >
          <RegisterFooter />
        </section>
      </div>
    </main>
  );
};

export default Main;
