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
    <section className="py-10 pb-5 bg-white relative overflow-hidden">
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

          <p className="text-lg text-gray-600 mt-2">
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
          {/* Card Component Structure */}
          {[
            {
              Icon: Zap,
              title: "AI-Powered Learning",
              text: "Adaptive algorithms personalize your learning path based on your progress, strengths, and goals for maximum efficiency.",
              color: "indigo",
            },
            {
              Icon: PlayCircle,
              title: "Live Mentorship",
              text: "Interactive sessions with veteran traders, Q&A, and real-time market analysis for practical insight.",
              color: "blue",
            },
            // ENHANCED GREEN COLOR FOR CERTIFICATIONS
            {
              Icon: Award,
              title: "Verified Certifications",
              text: "Earn globally recognized certificates upon course completion to validate your skills and boost credibility.",
              color: "emerald",
            },
            {
              Icon: Users,
              title: "Community & Tutor Chat",
              text: "24/7 instant help from the AI tutor and access to a vibrant community of fellow traders.",
              color: "red",
            },
            {
              Icon: TrendingUp,
              title: "Progress Analytics",
              text: "Track performance, analyze skill growth, and identify learning patterns in real time to optimize studies.",
              color: "orange",
            },
            {
              Icon: Clock,
              title: "Instant Assessments",
              text: "Auto-graded quizzes and tailored feedback after every module for instant knowledge confirmation and improvement.",
              color: "purple",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                boxShadow: `0 30px 60px -15px rgba(59, 130, 246, 0.3)`,
              }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition duration-300 ease-in-out cursor-pointer group 
                before:absolute before:inset-0 before:p-0.5 before:rounded-3xl before:bg-linear-to-br before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100 overflow-hidden
              `}
              style={{
                // Define dynamic gradient for hover effect based on color
                // Note: Tailwind v3 color definitions are used (e.g., emerald, blue)
                "--color-main": `var(--color-${item.color}-600)`,
                "--color-light": `var(--color-${item.color}-50)`,
                "--color-dark": `var(--color-${item.color}-700)`,
                "--tw-gradient-from":
                  item.color === "indigo"
                    ? "#4f46e5"
                    : item.color === "blue"
                    ? "#3b82f6"
                    : item.color === "emerald"
                    ? "#10b981"
                    : item.color === "red"
                    ? "#ef4444"
                    : item.color === "orange"
                    ? "#f97316"
                    : "#a855f7",
                "--tw-gradient-to":
                  item.color === "indigo"
                    ? "#3730a3"
                    : item.color === "blue"
                    ? "#2563eb"
                    : item.color === "emerald"
                    ? "#059669"
                    : item.color === "red"
                    ? "#dc2626"
                    : item.color === "orange"
                    ? "#ea580c"
                    : "#9333ea",
              }}
            >
              <div className={`relative z-10`}>
                <item.Icon
                  // Enhanced icon styling for better contrast and pop
                  className={`w-12 h-12 text-${item.color}-600 mb-6 p-2 bg-${item.color}-50 rounded-xl transition duration-300 
                    group-hover:text-white group-hover:bg-linear-to-r from-${item.color}-500 to-${item.color}-600 shadow-md shadow-${item.color}-200/50`}
                  strokeWidth={2}
                />
                <h4 className="text-2xl font-extrabold text-gray-900 mb-3 transition duration-300 group-hover:text-gray-800">
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
