"use client";
import { motion } from "framer-motion";
import { UserPlus, BookOpen, PlayCircle, Award } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    desc: "Create your personalized learning profile and unlock your tailored learning journey.",
    icon: UserPlus,
  },
  {
    title: "Choose a Course",
    desc: "Pick from beginner-friendly to advanced Forex strategy courses crafted by experts.",
    icon: BookOpen,
  },
  {
    title: "Learn & Interact",
    desc: "Watch videos, take notes, join discussions, and apply your learning instantly.",
    icon: PlayCircle,
  },
  {
    title: "Earn Certificates",
    desc: "Complete courses and earn shareable certificates recognized globally.",
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
   <section className="py-12 bg-white">
  <div className="container mx-auto px-6 lg:px-0 text-center">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tighter"
    >
      How It{" "}
      <span
        className="bg-clip-text text-transparent 
        bg-linear-to-r from-[#0057ff] to-[#0036d6] 
        block sm:inline ps-3"
      >
        Works
      </span>
    </motion.h2>

    <p className=" text-gray-600 max-w-2xl mx-auto mb-20">
      A beautifully simplified 4-step learning flow designed for perfect results.
    </p>

    {/* Steps */}
    <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-white rounded-3xl p-8 shadow-xl 
                       border border-[#0036d620]
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all group"
          >

            {/* Step Number Circle */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div
                className="text-white font-bold w-14 h-14 flex items-center justify-center 
                           rounded-full shadow-lg text-xl
                           group-hover:scale-110 transition-transform"
                style={{
                  background: "linear-gradient(to right, #0036d6, #0057ff)",
                }}
              >
                {index + 1}
              </div>
            </div>

            {/* Icon */}
            <div className="mt-8 mb-6 flex justify-center">
              <div
                className="p-4 rounded-2xl shadow-inner group-hover:shadow-xl transition-all"
                style={{
                  background: "#0057ff12",
                }}
              >
                <Icon className="w-10 h-10" style={{ color: "#0057ff" }} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {step.desc}
            </p>

            {/* Bottom Glow Line */}
            <div
              className="h-[3px] w-0 group-hover:w-full mt-6 mx-auto rounded-full transition-all"
              style={{
                background: "linear-gradient(to right, #0036d6, #0057ff)",
              }}
            ></div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

  );
}
