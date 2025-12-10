"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ForexBasics from "../../public/images/images/forex-basics.jpg";
import TechnicalAnalysis from "../../public/images/categories/image-4.jpg";
import RiskMangement from "../../public/images/images/risk-management.jpg";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Technical Analysis",
    subtitle: "Indicators, Patterns, Smart Money Concepts",
    image: TechnicalAnalysis,
  },
  {
    title: "Forex Basics",
    subtitle: "Currency, Trading Pairs, Market Structure",
    image: ForexBasics,
  },
  {
    title: "Risk Management",
    subtitle: "Position Sizing, Stop Loss, Journaling",
    image: RiskMangement,
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
export default function Certificates() {
  return (
    <section className="w-full bg-[#131722] rounded-4xl py-16 px-6 md:px-16 mt-10 container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get certified and grow in <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-indigo-600 ">
              Forex Trading
            </span>
          </h2>

          <p className="text-gray-300 text-lg mt-4 max-w-md">
            Learn Forex trading with structured programs, real-market
            strategies, and mentorship from experienced professional traders.
          </p>

          <motion.button
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2 items-center font-semibold mt-6 text-amber-300 transition-all duration-300"
          >
            Explore Forex Courses <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* RIGHT: COURSE CARDS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-[#1B1F2E] rounded-2xl p-3 cursor-pointer 
                         hover:scale-[1.06] transition-all duration-300
                         shadow-md hover:shadow-cyan-600/20"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              </div>
              <h3 className="mt-3 font-bold text-white text-lg">
                {course.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{course.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
