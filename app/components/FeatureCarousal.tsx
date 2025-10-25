"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  "Bonuses worth ₹10,000",
  "4.9 Stars Rating",
  "Personalized mentorship",
  "Placements-ready insights",
  "Switch your career",
  "Learn from top experts",
];

export default function FeatureChips() {
  return (
    <section className="relative overflow-hidden py-10 my-4">
      {/* subtle gradient mask to fade edges */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 mask-fade" />

        <motion.div
          className="flex gap-2 items-center animate-scroll whitespace-nowrap"
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          animate={{ x: ["0%", "-50%"] }}
        >
          {[...features, ...features].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-1 rounded-full border border-dashed border-neutral-300 bg-white/80 backdrop-blur-sm px-4 h-9 shadow-[0_0_2px_rgba(0,0,0,0.05)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
              <p className="text-sm text-neutral-700 font-medium whitespace-nowrap">
                {text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            black 12.5%,
            black 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            black 12.5%,
            black 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
