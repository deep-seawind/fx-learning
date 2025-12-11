"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  GraduationCap,
  HelpCircle,
  Laptop,
} from "lucide-react";
import ForexChart from "../../public/images/images/forex-chart-1.jpg";
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

  const highlights = [
    {
      title: "Stock Market Classes Near Me",
      desc: "Flexible classes where you pick the schedule.",
      icon: Calendar,
    },
    {
      title: "Stock Market Courses in Delhi",
      desc: "Interactive learning designed to fulfill your curiosity.",
      icon: GraduationCap,
    },
    {
      title: "Stock Market Learning Courses",
      desc: "Online, accessible programs to learn from anywhere.",
      icon: Laptop,
    },
    {
      title: "Share Market Training",
      desc: "Mentor support to help you clear every doubt.",
      icon: HelpCircle,
    },
  ];
  return (
    <section className="w-full bg-[#131722] bg-[radial-gradient(circle_at_center,#1d4ed8_0%,#131722_65%)] container mx-auto px-16 mt-10 rounded-4xl py-12 pb-10">
      <div className="grid lg:grid-cols-3 gap-12 items-center ">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 col-span-2"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Master Forex Trading with <br />
            Expert Mentors
          </h1>

          {/* Description */}
          {/* <p className="text-gray-600 text-base leading-relaxed">
    Become a profitable trader with structured forex education, live market
    sessions, and proven strategies used by professionals worldwide. Learn
    how to analyze price movements, manage risk with confidence, and build
    long-term trading consistency. Whether you're a beginner or leveling up
    your skills, our expert mentors and real-time support ensure you grow as
    a successful trader.
  </p> */}

          {/* EXTRA CONTENT YOU PROVIDED – Rewritten & Styled */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
          p-5 rounded-2xl bg-[#111] 
          shadow-md hover:shadow-xl 
          border border-gray-800
          transition-all duration-300 group
        "
                >
                  {/* Icon */}
                  <div
                    className="
      w-14 h-14 flex items-center justify-center 
      rounded-xl mb-4 
      bg-customs bg-blue-900/40 
      text-black
      group-hover:bg-[#2563eb] group-hover:text-white
      transition-all duration-300 shadow-sm
    "
                  >
                    <Icon size={30} />
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold   text-white text-lg">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="  text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4 pt-4">
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
  </div> */}

          {/* Animated Stats */}
          {/* <div
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
  </div> */}
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="  gap-4 sm:gap-6"
        >
          {/* LEFT IMAGE */}
          <div className="rounded-4xl overflow-hidden shadow-md">
            <Image
              src={ForexChart}
              height={500}
              alt="Forex chart"
              className="w-full h-48 sm:h-64 md:h-140 object-cover   rounded-4xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
