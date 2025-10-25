// components/ReviewSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

export default function RegisterFooter() {
  // Generate consistent particle data that won't change between renders
  const particles = useMemo(() => {
    const particleData = [];
    // Use a seeded approach for consistent values
    const seed = 12345;
    let random = seed;
    
    const seededRandom = () => {
      random = (random * 9301 + 49297) % 233280;
      return random / 233280;
    };

    for (let i = 0; i < 15; i++) {
      particleData.push({
        id: i,
        width: 4 + seededRandom() * 4,
        height: 4 + seededRandom() * 4,
        top: seededRandom() * 100,
        left: seededRandom() * 100,
        opacity: seededRandom() * 0.6 + 0.2,
        duration: 4 + seededRandom() * 3,
      });
    }
    return particleData;
  }, []);

  return (
    <section className="w-full flex justify-center py-12 md:py-16 px-4">
      <div className="relative bg-[#171717] rounded-3xl p-8 md:p-12 text-center max-w-3xl w-full overflow-hidden">
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
          className="inline-flex items-center justify-center bg-white rounded-full px-4 md:px-6 py-3 text-[#171717] font-medium text-base md:text-lg cursor-pointer"
        >
          Register now
          <span className="ml-3 bg-pink-600 p-2 rounded-full flex items-center justify-center">
            <ArrowRight size={16} color="#fff" />
          </span>
        </motion.a>

        {/* Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-white rounded-full"
              style={{
                width: particle.width,
                height: particle.height,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                opacity: particle.opacity,
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: particle.duration,
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
