"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center md:items-start py-16 px-4 md:px-8 text-gray-900">
      {/* Hero Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-start max-w-3xl text-center md:text-left md:ml-20"
      >
        {/* Card with Images + small heading */}
        <div className="flex flex-row items-center justify-center border border-dashed border-gray-300 rounded-[40px] shadow-sm px-6 py-4 mb-6">
          <div className="flex items-center justify-center space-x-[-10px] mb-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white bg-amber-50">
              <Image
                src="https://framerusercontent.com/images/bWxvDlv7cLWM9LCzSgoKzg5QlTo.webp?width=96&height=96"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white bg-amber-50">
              <Image
                src="https://framerusercontent.com/images/vyf7zzceRHlOk5DGlB6TWm7x4.png?width=1080&height=1080"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white">
              <Image
                src="https://framerusercontent.com/images/Yq1YkOMOsOcUGJfWQw6DDlmz47E.png?width=96&height=96"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-800 font-medium text-sm bg-white">4,000+ Success Stories</p>
        </div>

        {/* Main Headings */}
        <div className="space-y-1 mb-6 flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            2 Hours Workshop
          </h1>
          <div className="flex space-x-3">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 leading-tight">
              To Transform
            </h1>
            <motion.div
              initial={{ rotate: 20, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-9 h-9 bg-pink-600 rounded-xl shadow-[rgba(255,81,0,0.2)_-5px_4px_20px_0px] overflow-hidden"
            >
              <Image
                src="https://framerusercontent.com/images/RJ4xCGMKAVmHY5GQ3arRkQz3yk.png?width=773&height=762"
                alt=""
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Tech Career
          </h1>
        </div>

        {/* Supporting text */}
        <p className="text-base md:text-lg text-gray-700 mb-8 text-center md:text-left">
          Designed to give you career clarity and a practical, actionable placement strategy.
        </p>

        {/* CTA Button */}
        <Link
          href="https://pages.razorpay.com/coding-shuttle-webinar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-[40px] shadow-lg hover:scale-[1.03] transition-transform duration-300"
        >
          <span className="text-base md:text-lg font-semibold">
            Register Now – Only ₹99
          </span>
          <span className="relative flex items-center justify-center w-10 h-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-5 h-5 text-gray-900"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
            <span className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        </Link>
      </motion.div>

      {/* Showreel Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-12 flex flex-col items-center justify-center space-y-3"
      >
        <div className="flex items-center space-x-6 text-gray-900 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
            </svg>
            <p>12:30 PM (IST)</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 4h18v18H3z" strokeWidth="2" />
            </svg>
            <p>2nd November (Sunday)</p>
          </div>
        </div>

        <p className="text-center text-red-600 text-base font-medium">
          Only a few seats left!
        </p>
      </motion.div> */}
    </section>
  );
};

export default Hero;
