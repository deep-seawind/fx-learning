"use client";
import { useState } from "react";
import {
  BarChart2,
  TrendingUp,
  LineChart,
  BookText,
  Shield,
  MonitorCheck,
  Layers,
  Database,
  Bitcoin,
  Globe,
  Award,
  Zap,
  PlayCircle,
  Clock,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import CompleteForex from "../../public/images/courses/image-1.jpg";
import TechnicalAnalysis from "../../public/images/courses/image-2.jpg";
import RiskMoney from "../../public/images/courses/image-3.jpg";
import TrendTrading from "../../public/images/courses/image-4.jpg";
import FundamentalAnalysis from "../../public/images/courses/image-5.jpg";
import TradingPsychology from "../../public/images/courses/image-6.jpg";

// UPDATED CATEGORIES FOR FX EDUCATION
const categories = [
  { name: "Popular Courses", icon: BarChart2 },
  { name: "Forex Trading", icon: TrendingUp },
  { name: "Technical Analysis", icon: LineChart },
  { name: "Fundamental Analysis", icon: BookText },
  { name: "Risk Management", icon: Shield },
  { name: "Trading Tools & Software", icon: MonitorCheck },
  { name: "Derivatives & Futures", icon: Layers },
  { name: "MetaTrader Courses", icon: Database },
  { name: "Crypto & Digital Assets", icon: Bitcoin },
  { name: "Commodities & Indices", icon: Globe },
  { name: "Financial Market Certifications", icon: Award },
];

// ALL TAB COURSE DATA
const coursesByCategory = {
  0: [
    {
      img: CompleteForex,
      title: "Complete Forex Trading Mastery",
      uni: "Global Market Academy",
      duration: "8 Weeks",
      mode: "Online",
      tag: "Beginner to Pro",
      rating: 4.8,
      price: "₹14,999",
      oldPrice: "₹24,999", // Added oldPrice
    },
    {
      img: TechnicalAnalysis,
      title: "Technical Analysis: Chart Patterns",
      uni: "Trading Experts Hub",
      duration: "6 Weeks",
      mode: "Online",
      tag: "Live Market Practice",
      rating: 4.7,
      price: "₹11,499",
      oldPrice: "₹19,999", // Added oldPrice
    },
    {
      img: RiskMoney,
      title: "Risk & Money Management Masterclass",
      uni: "Finance IQ Institute",
      duration: "4 Weeks",
      mode: "Online",
      tag: "Learn Risk Control",
      rating: 4.9,
      price: "₹9,999",
      oldPrice: "₹16,999", // Added oldPrice
    },
    {
      img: TrendTrading,
      title: "Trend Trading & Price Action Strategies",
      uni: "Global Market Academy",
      duration: "8 Weeks",
      mode: "Online",
      tag: "Beginner to Pro",
      rating: 4.8,
      price: "₹13,499",
      oldPrice: "₹21,999", // Added oldPrice
    },
    {
      img: FundamentalAnalysis,
      title: "Fundamental Analysis for Currency Markets",
      uni: "Trading Experts Hub",
      duration: "6 Weeks",
      mode: "Online",
      tag: "Live Market Practice",
      rating: 4.7,
      price: "₹10,999",
      oldPrice: "₹18,999", // Added oldPrice
    },
    {
      img: TradingPsychology,
      title: "Trading Psychology & Discipline Blueprint",
      uni: "Finance IQ Institute",
      duration: "4 Weeks",
      mode: "Online",
      tag: "Learn Risk Control",
      rating: 4.9,
      price: "₹8,999",
      oldPrice: "₹14,999", // Added oldPrice
    },
  ],

  1: [
    {
      img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80",
      title: "Forex Trading for Beginners",
      uni: "Forex Academy Pro",
      duration: "6 Weeks",
      mode: "Online",
      tag: "Certified Course",
      rating: 4.6,
      price: "₹7,999",
      oldPrice: "₹12,999", // Added oldPrice
    },
    {
      img: "https://images.unsplash.com/photo-1581093458791-9d16b1a57c4b?auto=format&fit=crop&w=900&q=80",
      title: "Institutional Trading Strategies",
      uni: "Elite Traders Institute",
      duration: "10 Weeks",
      mode: "Online",
      tag: "Advanced Level",
      rating: 4.8,
      price: "₹19,999",
      oldPrice: "₹29,999", // Added oldPrice
    },
  ],

  2: [
    {
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
      title: "Price Action & Smart Money Concepts",
      uni: "Chart Masters",
      duration: "8 Weeks",
      mode: "Online",
      tag: "Industry Standard",
      rating: 4.9,
      price: "₹12,999",
      oldPrice: "₹20,999", // Added oldPrice
    },
  ],

  3: [
    {
      img: "/fundamental1.jpg",
      title: "Fundamental Analysis & Macroeconomics",
      uni: "Global Finance School",
      duration: "12 Weeks",
      mode: "Online",
      tag: "Economy Insights",
      rating: 4.5,
      price: "₹15,999",
      oldPrice: "₹25,999", // Added oldPrice
    },
  ],

  4: [
    {
      img: "/risk2.jpg",
      title: "Professional Risk Management for Traders",
      uni: "Risk Control Academy",
      duration: "5 Weeks",
      mode: "Online",
      tag: "Capital Protection",
      rating: 4.7,
      price: "₹9,499",
      oldPrice: "₹15,499", // Added oldPrice
    },
  ],

  5: [
    {
      img: "/tools1.jpg",
      title: "Algorithmic Trading with TradingView",
      uni: "Tech Traders Hub",
      duration: "10 Weeks",
      mode: "Online",
      tag: "Trading Automation",
      rating: 4.8,
      price: "₹22,999",
      oldPrice: "₹34,999", // Added oldPrice
    },
  ],

  6: [
    {
      img: "/futures1.jpg",
      title: "Futures & Options Trading",
      uni: "Derivatives Specialist School",
      duration: "12 Weeks",
      mode: "Online",
      tag: "Professional Track",
      rating: 4.6,
      price: "₹17,499",
      oldPrice: "₹27,499", // Added oldPrice
    },
  ],

  7: [
    {
      img: "/mt41.jpg",
      title: "MetaTrader 4 & 5 Full Guide",
      uni: "Broker Tools Academy",
      duration: "3 Weeks",
      mode: "Online",
      tag: "Platform Mastery",
      rating: 4.7,
      price: "₹5,999",
      oldPrice: "₹9,999", // Added oldPrice
    },
  ],

  8: [
    {
      img: "/crypto1.jpg",
      title: "Crypto Trading & Blockchain Basics",
      uni: "Digital Assets Institute",
      duration: "8 Weeks",
      mode: "Online",
      tag: "Top Rated",
      rating: 4.9,
      price: "₹14,499",
      oldPrice: "₹23,499", // Added oldPrice
    },
  ],

  9: [
    {
      img: "/commodity1.jpg",
      title: "Commodity & Index Market Trading",
      uni: "Commodities Trading School",
      duration: "7 Weeks",
      mode: "Online",
      tag: "Global Markets",
      rating: 4.5,
      price: "₹11,999",
      oldPrice: "₹18,999", // Added oldPrice
    },
  ],

  10: [
    {
      img: "/certificate1.jpg",
      title: "International Financial Market Certification (IFMC)",
      uni: "Finance Certification Board",
      duration: "16 Weeks",
      mode: "Online",
      tag: "Certification Exam",
      rating: 4.8,
      price: "₹24,999",
      oldPrice: "₹39,999", // Added oldPrice
    },
  ],
};

export default function CourseSection() {
  const [active, setActive] = useState(0);

  return (
    <section className=" py-16 pt-10 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-center animate-slide-in-up">
            Our featured
            <span className="inline-block bg-clip-text text-transparent bg-[#2563EB] drop-shadow-lg ps-2">
              Courses
            </span>
          </h1>

          <p className="text-center text-gray-600 max-w-5xl mx-auto my-4 mb-8 animate-fade-in-up">
            Learn from expert traders with real market experience. Master
            strategies, gain confidence, and build the financial future you’ve
            always wanted — one skill at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center "
          >
            <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl p-5 space-y-7 sticky lg:top-28 h-fit border border-gray-100 transition-all duration-300">
              {/* Header Block */}
              <div className="space-y-2 border-b pb-4 border-gray-100">
                <h2 className="text-lg tracking-widest font-semibold  bg-linear-to-r from-[#0057ff] to-[#0036d6] text-transparent bg-clip-text">
                  Fx Education Modules
                </h2>

                <h3 className="text-xl text-gray-900 leading-snug">
                  Explore Trading Mastery Paths
                </h3>
              </div>

              {/* Category List */}
              <ul className="space-y-2">
                {categories.map((cat, i) => {
                  const isActive = active === i;

                  return (
                    <li
                      key={i}
                      onClick={() => setActive(i)}
                      className={`group flex items-center gap-4 py-3 px-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out active:scale-[0.99] transform
                              ${
                                isActive
                                  ? "active-glow-bg text-blue-800 bg-linear-to-r from-[#e7e4ff] to-[#f7f9ff] font-semibold shadow-lg shadow-blue-500/10"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900  "
                              }`}
                    >
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 shrink-0
                                  ${
                                    isActive
                                      ? "bg-[#2563EB] shadow-md shadow-blue-500/30 "
                                      : "bg-gray-200/50 group-hover:bg-gray-200"
                                  }`}
                      >
                        <cat.icon
                          className={`w-4 h-4 transition-colors duration-200`}
                          strokeWidth={isActive ? 2.5 : 1.8}
                          color={isActive ? "white" : "#6B7280"}
                        />
                      </div>

                      <span className="text-sm tracking-wide">{cat.name}</span>

                      {isActive && (
                        <Layers
                          size={18}
                          className="text-blue-500 ml-auto animate-pulse-slow"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
          {/* Courses Grid */}

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {categories[active].name}
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-[#0049ac] to-[#0066ff] rounded-full"></div>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {(coursesByCategory[active] || []).map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        style={{ backgroundImage: `url(${course.img.src})` }}
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Bestseller Badge */}
                      {course.isBestSeller && (
                        <div className="absolute top-4 right-4 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                          <Star size={14} className="fill-white" />
                          BESTSELLER
                        </div>
                      )}

                      {/* Category Tag */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {course.tag}
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-md p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                          <PlayCircle size={32} className="text-[#0049ac]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* University */}
                      <p className="text-sm font-semibold text-[#0049ac] mb-2 uppercase tracking-wide">
                        {course.uni}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight min-h-14">
                        {course.title}
                      </h3>

                      {/* Stats Grid */}
                      <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-100">
                        {/* Duration */}
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="p-2 bg-[#0049ac]/10 rounded-lg">
                            <Clock size={16} className="text-[#0049ac]" />
                          </div>
                          <span className="text-sm font-medium">
                            {course.duration}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-2 rounded-lg">
                          <Star
                            size={16}
                            className="fill-amber-400 text-amber-400"
                          />
                          <span className="text-sm font-bold text-amber-700">
                            {course.rating ? course.rating.toFixed(1) : "N/A"}
                          </span>
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold bg-linear-to-r from-[#0049ac] to-[#0066ff] bg-clip-text text-transparent">
                            {course.price || "Free"}
                          </span>
                          {course.oldPrice && (
                            <span className="text-sm line-through text-gray-400">
                              {course.oldPrice}
                            </span>
                          )}
                        </div>

                        <button className="px-6 py-3 bg-linear-to-r from-[#0049ac] to-[#0066ff] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0049ac]/50 transform hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
                          Enroll
                        </button>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0049ac]/20 transition-colors duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
