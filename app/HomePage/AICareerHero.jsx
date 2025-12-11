"use client";

import Image from "next/image";
import { Sparkles, Award, Brain, TrendingUp } from "lucide-react";
import Link from "next/link";
import ForexLearning from "../../public/images/images/forex-learning.jpg";
import { motion } from "framer-motion";

const features = [
  { icon: <Sparkles className="w-5 h-5" />, label: "Learn AI and more" },
  { icon: <Award className="w-5 h-5" />, label: "Prep for a certification" },
  { icon: <Brain className="w-5 h-5" />, label: "Practice with AI coaching" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Advance your career" },
];

export default function AICareerHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="bg-[#131722] bg-[radial-gradient(circle_at_center,#1d4ed8_0%,#131722_65%)] rounded-4xl py-12 mb-20 mt-10 px-6 md:px-10 lg:px-16 container mx-auto overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Master Your Skills in <br />
             
                Forex Trading
              
            </h1>

            <p className="text-base sm:text-lg text-gray-300">
              Learn real market strategies, manage risk like a pro, and trade
              with confidence — guided by experts in global financial markets.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-6">
              {features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-200 hover:text-white transition"
                >
                  <span className="p-2 bg-customs rounded-full">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base font-medium">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href="#"
                className="font-medium px-6 py-3 rounded-lg bg-[#2563EB] shadow-lg
                     hover:from-indigo-700 hover:to-blue-600 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Start Learning
              </Link>

              <p className="text-xs text-gray-400 pt-4">
                Affordable pricing — Learn at your pace
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={ForexLearning.src}
              alt="Forex Education Trader"
              className="rounded-4xl w-full max-w-md lg:max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
