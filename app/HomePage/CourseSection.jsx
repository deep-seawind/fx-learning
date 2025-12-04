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
      img: "/forex1.jpg",
      title: "Complete Forex Trading Mastery",
      uni: "Global Market Academy",
      duration: "8 Weeks",
      mode: "Online",
      tag: "Beginner to Pro",
      rating: 4.8,
    },
    {
      img: "/technical1.jpg",
      title: "Technical Analysis: Chart Patterns Trading",
      uni: "Trading Experts Hub",
      duration: "6 Weeks",
      mode: "Online",
      tag: "Live Market Practice",
      rating: 4.7,
    },
    {
      img: "/risk1.jpg",
      title: "Risk & Money Management Masterclass",
      uni: "Finance IQ Institute",
      duration: "4 Weeks",
      mode: "Online",
      tag: "Learn Risk Control",
      rating: 4.9,
    },
  ],
  1: [
    {
      img: "/forex2.jpg",
      title: "Forex Trading for Beginners",
      uni: "Forex Academy Pro",
      duration: "6 Weeks",
      mode: "Online",
      tag: "Certified Course",
      rating: 4.6,
    },
    {
      img: "/forex3.jpg",
      title: "Institutional Forex Trading Strategies",
      uni: "Elite Traders Institute",
      duration: "10 Weeks",
      mode: "Online",
      tag: "Advanced Level",
      rating: 4.8,
    },
  ],
  2: [
    {
      img: "/technical2.jpg",
      title: "Price Action & Smart Money Concepts",
      uni: "Chart Masters",
      duration: "8 Weeks",
      mode: "Online",
      tag: "Industry Standard",
      rating: 4.9,
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
    },
  ],
};

export default function CourseSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="container mx-auto py-16 pt-5">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-center text-transparent bg-clip-text bg-linear-to-r from-black to-gray-100 animate-slide-in-up">
        Our featured
        <span className="inline-block bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-indigo-600 drop-shadow-lg ps-2">
          Courses
        </span>
      </h1>

      <p className="text-center text-gray-600 max-w-5xl mx-auto my-4 mb-8 animate-fade-in-up">
        Learn from expert traders with real market experience. Master
        strategies, gain confidence, and build the financial future you’ve
        always wanted — one skill at a time.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl p-5 space-y-7 sticky lg:top-8 h-fit border border-gray-100 transition-all duration-300">
          {/* Header Block */}
          <div className="space-y-2 border-b pb-4 border-gray-100">
            <h2 className="text-lg tracking-widest font-semibold  bg-linear-to-r from-[#6A11CB] via-[#2575FC] to-[#00E3FF] text-transparent bg-clip-text">
              Fx Education Modules
            </h2>

            <h3 className="text-xl text-gray-900 leading-snug">
              Explore Trading Mastery Paths
            </h3>
          </div>

          {/* Category List */}
          <ul className="space-y-1">
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
                                      ? "bg-linear-to-br from-blue-600 to-indigo-700 shadow-md shadow-blue-500/30 "
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

        {/* Courses Grid */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold  text-gray-800 ">
            {categories[active].name}
          </h2>
          <div className=" w-28 h-1.5 mb-10 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 shadow-xl shadow-blue-500/50"></div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {(coursesByCategory[active] || []).map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl premium-shadow overflow-hidden group hover:shadow-blue-300/50 hover:shadow-2xl shadow-lg shadow-zinc-300/50 cursor-pointer "
              >
                <div className="overflow-hidden relative h-40">
                  {course.isBestSeller && (
                    <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white">
                      BESTSELLER
                    </div>
                  )}

                  <div
                    style={{ backgroundImage: `url(${course.img})` }}
                    className="w-full h-full bg-cover bg-center group-hover:scale-[1.08] group-hover:brightness-90 transition-all duration-500 relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent"></div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h5 className="text-xs text-indigo-600 font-bold tracking-widest">
                    {course.uni}
                  </h5>

                  <h3 className="text-xl text-gray-900 leading-tight font-semibold line-clamp-2 min-h-14">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between border-t pt-4 border-gray-100">
                    {/* Duration and Mode */}
                    <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
                      <Clock size={16} className="text-indigo-400" />{" "}
                      {course.duration}
                    </p>

                    {/* Rating Badge - Visually Stronger */}
                    <div className="flex items-center gap-1 bg-yellow-400/20 px-3 py-1 rounded-full border border-yellow-500">
                      <Star size={14} fill="#FACC15" color="#FACC15" />
                      <span className="text-sm font-semibold text-yellow-800">
                        {course.rating ? course.rating.toFixed(1) : "N/A"}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">
                    {course.tag}
                  </span>

                  <button className="w-full mt-3 flex items-center justify-center gap-2 text-blue-700 font-bold border-2 border-blue-600 rounded-xl py-2.5   group-hover:bg-blue-600 group-hover:text-white  group-hover:border-transparent transition-all duration-300 active:scale-[0.98]">
                    <PlayCircle size={18} />
                    Start Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
