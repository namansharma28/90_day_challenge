"use client";

import { CheckCircle, XCircle } from "lucide-react";

export default function WorkshopComparison() {
  const without = [
    "Stuck, wasting precious time.",
    "Missing big career opportunities.",
    "Confidence might keeps dropping.",
    "Trapped in an unfulfilling career.",
    "May not reach your true potential",
  ];

  const withWorkshop = [
    "Get clear, actionable roadmap",
    "Understand how to act immediately",
    "Gain clarity on in-demand tech roles",
    "Achieve Your Dream Job Faster",
    "Boost self-confidence",
  ];

  return (
    <section className="relative flex justify-center items-center w-full py-20 px-6overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eee_1px,transparent_1px),linear-gradient(to_bottom,#eee_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-6xl w-full flex flex-col items-center">
        {/* Content Box */}
        <div className="bg-white rounded-3xl shadow-sm border border-neutral-200 p-6 sm:p-10 md:p-14 w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-stretch">
          {/* Left Box */}
          <div className="flex-1 border border-dashed border-neutral-300 rounded-2xl p-6 sm:p-10 flex flex-col justify-center bg-white">
            <h3 className="text-center text-lg sm:text-xl font-semibold mb-6">
              Without this workshop
            </h3>
            <ul className="space-y-5">
              {without.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-800">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Box */}
          <div className="flex-1 bg-[#111] text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-center md:ml-[-2px]">
            <h3 className="text-center text-lg sm:text-xl font-semibold mb-6 text-[#ff1f70]">
              With this workshop ✨
            </h3>
            <ul className="space-y-5">
              {withWorkshop.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
