// components/ReviewSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RegisterFooter() {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="relative bg-[#171717] rounded-3xl p-12 text-center max-w-3xl w-full overflow-hidden">
        {/* Headline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl font-semibold mb-4"
        >
          Your dream career is just one <br className="hidden sm:block" /> workshop away
        </motion.h3>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-base sm:text-lg mb-8"
        >
          Don't waste too much time thinking. It's only ₹99 and It'll be worth your time.
        </motion.p>

        {/* Button */}
        <motion.a
          href="https://pages.razorpay.com/coding-shuttle-webinar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center bg-white rounded-full px-6 py-3 text-[#171717] font-medium text-lg cursor-pointer"
        >
          Register now
          <span className="ml-3 bg-pink-600 p-2 rounded-full flex items-center justify-center">
            <ArrowRight size={16} color="#fff" />
          </span>
        </motion.a>

        {/* Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: 4 + Math.random() * 4,
                height: 4 + Math.random() * 4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
