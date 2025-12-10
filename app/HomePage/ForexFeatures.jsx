"use client";

import { motion } from "framer-motion";
import { Users, Clock, Trophy, TrendingUp, PlayCircle } from "lucide-react";
import JourneyBg from "../../public/images/images/performance-monitoring.jpg";

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ForexFeatures() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            The Core Pillars of Our Trading Education
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            We blend AI-driven learning, real-time mentorship, and data-backed
            performance growth to turn you into a confident, profitable trader.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* AI-Powered Learning */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 transition cursor-pointer group hover:shadow-2xl"
          >
            <Trophy
              className="w-12 h-12 text-indigo-600 mb-5"
              strokeWidth={2}
            />
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition">
              AI-Powered Learning
            </h4>
            <p className="text-gray-600 mt-3">
              Adaptive algorithms personalize your learning path based on your
              progress and goals.
            </p>
          </motion.div>

          {/* Live Webinars */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 transition cursor-pointer group hover:shadow-2xl"
          >
            <PlayCircle className="w-12 h-12 text-blue-600 mb-5" />
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition">
              Live Webinars
            </h4>
            <p className="text-gray-600 mt-3">
              Interactive sessions with experts, Q&A, and real-time
              collaboration.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 transition cursor-pointer group hover:shadow-2xl"
          >
            <TrendingUp className="w-12 h-12 text-green-600 mb-5" />
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
              Certifications
            </h4>
            <p className="text-gray-600 mt-3">
              Earn globally recognized certificates & showcase them on LinkedIn.
            </p>
          </motion.div>

          {/* AI Tutor Chat */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 transition cursor-pointer group hover:shadow-2xl"
          >
            <Users className="w-12 h-12 text-red-500 mb-5" />
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition">
              AI Tutor Chat
            </h4>
            <p className="text-gray-600 mt-3">
              24/7 instant help to explain concepts and answer questions
              anytime.
            </p>
          </motion.div>

          {/* Progress Analytics */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 transition cursor-pointer group hover:shadow-2xl"
          >
            <Clock className="w-12 h-12 text-orange-500 mb-5" />
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition">
              Progress Analytics
            </h4>
            <p className="text-gray-600 mt-3">
              Track performance, skill growth & learning patterns in real time.
            </p>
          </motion.div>

          {/* Instant Assessments */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 transition cursor-pointer group hover:shadow-2xl"
          >
            <Trophy className="w-12 h-12 text-purple-500 mb-5" />
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
              Instant Assessments
            </h4>
            <p className="text-gray-600 mt-3">
              Auto-graded quizzes with tailored improvements for faster results.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div
            className="
      relative rounded-2xl p-10 md:p-14 flex flex-col md:flex-row 
      items-center justify-between text-white shadow-xl
      bg-cover bg-center bg-no-repeat
      before:absolute before:inset-0
      before:bg-black/55 before:rounded-2xl before:z-0
    "
            style={{
              backgroundImage: `url(${JourneyBg.src})`,
            }}
          >
            {/* Content Layer */}
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bols">
                Start Your Journey to Financial Freedom Today
              </h2>
              <p className="text-blue-100 mt-2">
                Your profitable trading career begins with the right guidance.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
        relative z-10 mt-6 md:mt-0 bg-white text-gray-900 
        font-bold px-8 py-3 rounded-full hover:bg-gray-100 
        shadow-lg transition flex items-center gap-2
      "
            >
              Enroll Now <TrendingUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
