import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Who is this workshop for?",
    answer: "This workshop is perfect for anyone interested in building a strong career in techjhsbdjks k h jbqwbdwdqwjbjj   bijwq bqidqjd qjedjke  jn njnkjenwf kfnejnwjnj",
  },
  {
    question: "What is this workshop about?",
    answer: "This workshop is designed to transform your tech career in just 2 hours! ...",
  },
  {
    question: "Will I need any prior coding experience for this workshop?",
    answer: "No prior coding experience is needed...",
  },
  {
    question: "Will I receive any materials or resources after the workshop?",
    answer: "Yes, you will get all the necessary materials and resources...",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <span className="text-pink-500 font-medium mb-2">★ FAQ</span>
        <h2 className="text-5xl font-bold leading-tight">
          Got Questions? <br /> We Got Answers
        </h2>
      </div>

      {/* Right column */}
      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl p-5 transition-all duration-300 cursor-pointer shadow-md ${
                isOpen ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h6 className="font-semibold text-lg">{item.question}</h6>
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-3 text-sm relative"
                  >
                    {item.answer}
                    {/* Simple particle dots */}
                    <span className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-bounce"></span>
                    <span className="absolute bottom-4 right-6 w-1 h-1 bg-white rounded-full animate-bounce delay-150"></span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
