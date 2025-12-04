"use client";

import { PlayCircle, Users, Trophy, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";
import TechnicalAnalysis from "../../public/images/images/technicalAnalysis.jpg";
import PerformanceMonitoring from "../../public/images/images/performance-monitoring.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function ForexFeatures() {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        {/* --- Header --- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Core Pillars of Our Trading Education
          </h2>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            We blend hands-on practice, expert training and a global network to
            help you become a confident and profitable trader.
          </p>
        </motion.div>

        {/* --- Grid Start --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* --- Chart Left --- */}
          <motion.div variants={fadeUp} className="lg:col-span-4 relative rounded-2xl h-72 md:h-80 overflow-hidden">
            <Image src={TechnicalAnalysis} alt="Technical Analysis" fill className="object-cover scale-105 hover:scale-110 transition duration-700" priority />
          </motion.div>

          {/* --- Center Trophy Card --- */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="lg:col-span-4 bg-white rounded-2xl p-5 text-center shadow-md border border-gray-200 flex flex-col justify-center items-center duration-300"
          >
            <div className="w-24 h-24 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <Trophy className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-gray-900">
              Trade with Confidence
            </h3>
            <p className="text-gray-600 max-w-xs mt-3">
              Strategy drills, back-testing & real-market practice included from day one.
            </p>
            <span className="mt-6 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full px-4 py-1">
              HANDS-ON LEARNING
            </span>
          </motion.div>

          {/* --- Top Right Feature --- */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="lg:col-span-4 bg-white rounded-2xl p-5 shadow-md border border-gray-200 duration-300"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <PlayCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">
              4,000+ Hrs of Training
            </h4>
            <p className="text-gray-600 mt-2">
              Learn from top-tier professionals with real trading experience:
            </p>
            <ul className="mt-3 space-y-2 text-gray-500 text-sm list-disc list-inside">
              <li>Step-by-step lessons from basics to advanced strategies</li>
              <li>Weekly live market breakdown with Q&A</li>
              <li>Downloadable trading worksheets & playbooks</li>
              <li>Hands-on practice with real charting tools</li>
            </ul>
          </motion.div>

          {/* --- Community Card --- */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="lg:col-span-4 bg-white rounded-2xl p-5 shadow-md border border-gray-200 duration-300"
          >
            <div className="w-12 h-12 bg-sky-400 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">
              Global Trader Community
            </h4>
            <p className="text-gray-600 mt-2">
              A powerful trading network designed to help you grow faster:
            </p>
            <ul className="mt-3 space-y-2 text-gray-500 text-sm list-disc list-inside">
              <li>Daily trade ideas & discussions</li>
              <li>Community challenges & leaderboard</li>
              <li>Exclusive webinars with mentors</li>
              <li>24/7 active support & guidance</li>
            </ul>
          </motion.div>

          {/* --- Lifetime Access --- */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="lg:col-span-4 bg-white rounded-2xl p-5 shadow-md border border-gray-200 duration-300"
          >
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">Lifetime Access</h4>
            <p className="text-gray-600 mt-2">Lifetime access includes:</p>
            <ul className="mt-2 space-y-1 text-gray-500 text-sm list-disc list-inside">
              <li>All future strategy upgrades</li>
              <li>New expert-led modules</li>
              <li>Access anytime, anywhere</li>
            </ul>
          </motion.div>

          {/* --- Chart Bottom Right --- */}
          <motion.div variants={fadeUp} className="lg:col-span-4 relative rounded-2xl h-72 md:h-80 overflow-hidden">
            <Image src={PerformanceMonitoring} alt="Performance Monitoring" fill className="object-cover scale-105 hover:scale-110 transition duration-700" priority />
          </motion.div>

          {/* --- CTA Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12"
          >
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 md:p-14 flex flex-col md:flex-row items-center justify-between text-white">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold">
                  Start Your Journey to Financial Freedom Today
                </h2>
                <p className="text-blue-200 mt-2">
                  Empower your future with proven trading knowledge.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 md:mt-0 bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 shadow-lg transition transform flex items-center gap-2"
              >
                Enroll Now <TrendingUp size={20} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
