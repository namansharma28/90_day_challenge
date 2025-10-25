"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Briefcase, UserCheck, TrendingUp, FileText, DollarSign, Globe } from "lucide-react";
import FeatureCarousel from "./FeatureCarousal";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
} as const;


export default function WhyJoin() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Section Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
          Why Join This Workshop?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          This isn’t just another webinar — it’s a career transformation workshop.
          We promise not to waste your time or money.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-6">
        {/* Top Left — wide (col-span-3) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-3 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all min-h-[300px]"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Comprehensive Guide</h3>
          <p className="text-gray-400 mb-6">
            Understand major tech paths like Artificial Intelligence, Java Full Stack, and DevOps.
            Gain practical, hands-on industry experience — not just theory.
          </p>
          <div className="flex flex-wrap gap-3">
            <Tag icon={<Code className="w-4 h-4" />} label="Java Full Stack" />
            <Tag icon={<Cpu className="w-4 h-4" />} label="Artificial Intelligence" />
            <Tag icon={<Briefcase className="w-4 h-4" />} label="Backend Focused" />
          </div>
        </motion.div>

        {/* Top Right — narrow (col-span-2) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1.5}
          viewport={{ once: true }}
          className="col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all min-h-[300px]"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Recruitment Process</h3>
          <p className="text-gray-400 mb-6">
            Learn how tech giants like Google, Microsoft, and Facebook hire — and how to crack
            their coding interviews with smart prep.
          </p>
          <div className="flex flex-wrap gap-3">
            <Tag icon={<UserCheck className="w-4 h-4" />} label="Recruiter’s POV" />
            <Tag icon={<Code className="w-4 h-4" />} label="Interview Assistance" />
          </div>
        </motion.div>

        {/* Bottom Left — narrow (col-span-2) */}
        <motion.div
          variants={fadeUp}

          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          className="col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all min-h-[300px]"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Career Clarity</h3>
          <p className="text-gray-400 mb-6">
            Get industry insights and learn trending tech stacks. Build the right skills to
            stay ahead of the competition in the evolving tech landscape.
          </p>
          <div className="flex flex-wrap gap-3">
            <Tag icon={<TrendingUp className="w-4 h-4" />} label="Tech Trends" />
            <Tag icon={<FileText className="w-4 h-4" />} label="Industry Insights" />
          </div>
        </motion.div>

        {/* Bottom Right — wide (col-span-3) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2.5}
          viewport={{ once: true }}
          className="col-span-3 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all min-h-[300px]"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Remote Job Strategy</h3>
          <p className="text-gray-400 mb-6">
            Learn how to grab remote jobs in 2025 and perfect your resume for international tech
            companies. Understand what modern recruiters look for.
          </p>
          <div className="flex flex-wrap gap-3">
            <Tag icon={<FileText className="w-4 h-4" />} label="Resume Optimisation" />
            <Tag icon={<DollarSign className="w-4 h-4" />} label="Remote Jobs Strategy" />
            <Tag icon={<Globe className="w-4 h-4" />} label="Top Technology" />
          </div>
        </motion.div>
      </div>
      <FeatureCarousel />
    </section>
  );
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 text-gray-200 text-sm border border-neutral-700 hover:border-orange-500 transition-colors">
      {icon}
      {label}
    </span>
  );
}
