"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ForexChart from "../../public/images/images/forex-chart.jpg";
import TradingPerson from "../../public/images/images/Trading-person.jpg";
import TraderLearning from "../../public/images/images/trader-learning.jpg";
import { useEffect, useRef, useState } from "react";

export const KnowledgeSection = () => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef);

  const [activeTraders, setActiveTraders] = useState(0);
  const [experience, setExperience] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const animateCounter = (setValue, end) => {
      let start = 0;
      const duration = 2000;
      const step = end / (duration / 16);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          setValue(end);
          clearInterval(counter);
        } else {
          setValue(Math.floor(start));
        }
      }, 16);
    };

    animateCounter(setActiveTraders, 20000);
    animateCounter(setExperience, 5);
    animateCounter(setSuccessRate, 98);
  }, [isInView]);
  return (
  <section className="w-full bg-white py-16 pb-10">
  <div className="grid lg:grid-cols-2 gap-12 items-center container mx-auto">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
        Master Forex Trading with{" "}
        <span
          className="inline-block bg-clip-text text-transparent 
                     bg-linear-to-r from-[#0057ff] to-[#0036d6] drop-shadow-lg"
        >
          Expert Mentors
        </span>
      </h1>

      <p className="text-gray-600 text-base">
        Become a profitable trader with structured forex education, live
        market sessions, and proven strategies used by professionals
        worldwide. Learn how to analyze price movements, manage risk with
        confidence, and build long-term trading consistency. Whether you're
        a beginner or leveling up your skills, our expert mentors and
        real-time support ensure you grow as a successful trader.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <button
          className="flex items-center gap-2 
                     bg-linear-to-r from-[#0057ff] to-[#0036d6] 
                     text-white px-6 sm:px-8 py-3 rounded-full font-semibold
                     shadow-md hover:shadow-xl hover:scale-[1.03] 
                     transition-all duration-300"
        >
          Start Learning <ArrowRight size={18} />
        </button>

        <button
          className="border-2 border-gray-300 text-gray-700 
                     px-6 sm:px-8 py-3 rounded-full font-semibold
                     hover:border-[#0057ff] hover:text-[#0057ff]
                     transition-all duration-300"
        >
          Explore Courses
        </button>
      </div>

      {/* Animated Stats */}
      <div
        ref={counterRef}
        className="grid grid-cols-3 sm:text-center text-left 
                   gap-6 pt-6 border-t border-gray-200"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {activeTraders.toLocaleString()}+
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">Active Traders</p>
        </div>

        <div className="border-x border-gray-200 px-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {experience}+ Years
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">Experience</p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {successRate}%
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">Success Rate</p>
        </div>
      </div>
    </motion.div>

    {/* RIGHT IMAGES */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-4 sm:gap-6"
    >
      {/* Image 1 */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <Image
          src={ForexChart}
          height={500}
          alt="Forex chart"
          className="w-full h-40 sm:h-56 lg:h-64 object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <Image
          src={TradingPerson}
          height={500}
          alt="Trading student"
          className="w-full h-40 sm:h-56 lg:h-64 object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="rounded-2xl overflow-hidden col-span-2 shadow-md">
        <Image
          src={TraderLearning}
          height={500}
          alt="Trader learning"
          className="w-full h-52 sm:h-64 lg:h-80 object-cover"
        />
      </div>
    </motion.div>
  </div>
</section>

  );
};
