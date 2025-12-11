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
   <section className="py-10">
  <div className="container mx-auto px-6 lg:px-0 text-center">
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tighter"
    >
      How It 
      <span
        className="bg-clip-text text-transparent 
        bg-[#2563EB] 
        block sm:inline ps-3"
      >
        Works
      </span>
    </motion.h2>

  <p className="text-gray-600 max-w-4xl mx-auto mb-12 pt-2">
  A beautifully simplified 4-step learning flow designed for perfect results —
  helping you learn smarter, stay consistent, and build real long-term skills.
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
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative rounded-[30px] p-8 lg:p-6 text-center shadow-2xl 
              border-2 border-transparent transition-all duration-500 
              group bg-white overflow-hidden
              hover:border-[#2563eb] hover:shadow-blue-300/50 hover:scale-[1.03]"
          >
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 bg-linear-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="relative z-10">

              {/* 🔥 LARGE BACKGROUND NUMBER BEHIND ICON */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                <span className="text-[150px] font-extrabold text-blue-200 opacity-40 leading-none">
                  {index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center relative">
                <div
                  className="p-3 rounded-full shadow-lg transition-all duration-500 
                  bg-white ring-2 ring-blue-100 
                  group-hover:ring-[#2563eb] group-hover:shadow-blue-500/30"
                >
                  <Icon className="w-10 h-10 text-[#2563eb]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2563eb] transition duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {step.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

  );
}
