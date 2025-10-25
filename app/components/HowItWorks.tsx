"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    time: "0–30 Minutes",
    title: "What’s Hot in Tech",
    desc: "From AI to DevOps, see where the industry is headed and how you can ride the wave.",
    image: "https://framerusercontent.com/images/hPzBEZR2fQxtDcPzILVtmHCwrk.png",
  },
  {
    time: "30–60 Minutes",
    title: "A Roadmap Built for You",
    desc: "Whether you’re just starting or already working, get a personalized career plan to land your next big role.",
    image: "https://framerusercontent.com/images/viKZIP6lratKvfWZeYmEu33RIPg.png",
  },
  {
    time: "60–90 Minutes",
    title: "Resume Secrets That Work",
    desc: "Stop blending in. Build a resume that highlights your projects and attracts recruiters. Bonus: free templates.",
    image: "https://framerusercontent.com/images/aHmuCGXUgceUf4AWHKCNUqkIhPk.png",
  },
  {
    time: "90–120 Minutes",
    title: "Hiring Trends 2025",
    desc: "Understand how tech hiring is evolving and position yourself ahead of the curve.",
    image: "https://framerusercontent.com/images/CE23NkxkHWkiUHtLyiQmVuMaGgI.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 py-24 flex flex-col items-center text-center"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <p className="text-orange-500 font-semibold tracking-wide uppercase mb-2">
          Agenda
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What You’ll Learn in <span className="text-orange-500">2 Hours</span>
        </h2>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-300 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-sm font-semibold text-gray-700 mb-2">
              {step.time}
            </div>
            <div className="relative w-full h-52 mb-4 overflow-hidden rounded-2xl">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
