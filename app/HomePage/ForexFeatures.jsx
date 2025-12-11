"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Trophy,
  TrendingUp,
  PlayCircle,
  Zap,
  Award,
} from "lucide-react";
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
    <section className="py-10 pb-5 relative overflow-hidden">

      <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <p className="  text-gray-600 mt-2">
            We blend AI-driven learning, real-time mentorship, and data-backed
            performance growth to turn you into a confident, profitable trader.
          </p>
        </motion.div>

        {/* Features Grid - Hyper-Enhanced Cards with Gradient Borders and Icons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              Icon: Zap,
              title: "AI-Powered Learning",
              text: "Adaptive algorithms personalize your learning path based on your progress, strengths, and goals for maximum efficiency.",
              color: {
                main: "#4f46e5",
                hover1: "#4f46e5",
                hover2: "#3730a3",
                bg: "#eef2ff",
              },
            },
            {
              Icon: PlayCircle,
              title: "Live Mentorship",
              text: "Interactive sessions with veteran traders, Q&A, and real-time market analysis for practical insight.",
              color: {
                main: "#3b82f6",
                hover1: "#3b82f6",
                hover2: "#2563eb",
                bg: "#eff6ff",
              },
            },
            {
              Icon: Award,
              title: "Verified Certifications",
              text: "Earn globally recognized certificates upon course completion to validate your skills and boost credibility.",
              color: {
                main: "#10b981",
                hover1: "#10b981",
                hover2: "#059669",
                bg: "#ecfdf5",
              },
            },
            {
              Icon: Users,
              title: "Community & Tutor Chat",
              text: "24/7 instant help from the AI tutor and access to a vibrant community of fellow traders.",
              color: {
                main: "#ef4444",
                hover1: "#ef4444",
                hover2: "#dc2626",
                bg: "#fef2f2",
              },
            },
            {
              Icon: TrendingUp,
              title: "Progress Analytics",
              text: "Track performance, analyze skill growth, and identify learning patterns in real time to optimize studies.",
              color: {
                main: "#f97316",
                hover1: "#f97316",
                hover2: "#ea580c",
                bg: "#fff7ed",
              },
            },
            {
              Icon: Clock,
              title: "Instant Assessments",
              text: "Auto-graded quizzes and tailored feedback after every module for instant knowledge confirmation and improvement.",
              color: {
                main: "#a855f7",
                hover1: "#a855f7",
                hover2: "#9333ea",
                bg: "#faf5ff",
              },
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial={{ background: "white" }}
              whileHover={{
                y: -8,
                background: `linear-gradient(135deg, ${item.color.hover1}15, ${item.color.hover2}20)`,
                boxShadow: "0 30px 60px -15px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative bg-white rounded-4xl p-8 shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div className="relative z-10">
                <div
                  style={{
                    color: item.color.main,
                    backgroundColor: item.color.bg,
                  }}
                  className=" w-12 h-12 mb-6 p-2 rounded-xl shadow-md 
                          transition-all duration-300 
                          group-hover:text-white 
                          group-hover:bg-current!
                          "
                >
                  <item.Icon className="w-full h-full group-hover:text-white" />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-500 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}

      
      </div>
</div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 container mx-auto"
        >
          <div
            className=" relative rounded-4xl p-10 md:p-14 flex flex-col md:flex-row  items-center justify-between text-white shadow-xl bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/55 before:rounded-4xl before:z-0"
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
    </section>
  );
}
