"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  BookOpen,
  Clock,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Play,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Complete Forex Trading Masterclass 2025: From Zero to Pro",
    author: "Rayner Teo, TradingSim",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    rating: "4.9",
    reviews: "55,120",
    price: "₹799",
    oldPrice: "₹5,999",
    badge: "Bestseller",
    students: "142K",
    duration: "32h",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Technical Analysis & Risk Management for FX Traders",
    author: "Kathy Lien, BKForex",
    thumbnail:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop",
    rating: "4.7",
    reviews: "31,800",
    price: "₹659",
    oldPrice: "₹3,199",
    badge: "Top Rated",
    students: "98K",
    duration: "28h",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Algorithmic Trading with Python: Automated Forex Strategies",
    author: "Alvin Lee",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    rating: "4.8",
    reviews: "18,450",
    price: "₹899",
    oldPrice: "₹4,999",
    badge: "New Release",
    students: "65K",
    duration: "40h",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Price Action Trading: Identifying Reversal and Trend Patterns",
    author: "Nial Fuller, Learn To Trade",
    thumbnail:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
    rating: "4.6",
    reviews: "75,500",
    price: "₹599",
    oldPrice: "₹2,899",
    badge: "Trending",
    students: "210K",
    duration: "24h",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Fundamental Analysis: Central Banks & Economic Events",
    author: "Jamie Saette, FX Street",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    rating: "4.5",
    reviews: "12,340",
    price: "₹559",
    oldPrice: "₹1,999",
    badge: "Limited Time",
    students: "52K",
    duration: "18h",
    gradient: "from-rose-400 to-red-500",
  },
];

const getBadgeColor = (badge) => {
  switch (badge) {
    case "Bestseller":
      return "bg-gradient-to-r from-emerald-500 to-teal-600 text-white";
    case "Top Rated":
      return "bg-gradient-to-r from-amber-500 to-orange-600 text-white";
    case "Limited Time":
      return "bg-gradient-to-r from-rose-500 to-red-600 text-white";
    case "Trending":
      return "bg-gradient-to-r from-purple-500 to-pink-600 text-white";
    default:
      return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white";
  }
};

export default function ForexCourseSlider() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
   <section className="relative py-20 pb-10 overflow-hidden bg-white">
  <div className="container mx-auto px-4 lg:px-0 relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
        Trending Courses on
        <span className="bg-clip-text text-transparent 
          bg-[#2563EB]
          block sm:inline ps-3">
          Fx Education
        </span>
      </h2>

      <p className="text-gray-600 pt-3">
        Learn from world-class traders & transform your financial future through curated, premium trading courses.
      </p>
    </motion.div>

    {/* Slider Controls */}
    <div className="absolute z-30 top-24 right-4 flex gap-3">
      <button
        aria-label="Previous"
        className="swiper-prev-btn p-3 rounded-xl 
        bg-[#2563EB]
        text-white shadow-lg hover:shadow-2xl 
        hover:scale-110 transition duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        aria-label="Next"
        className="swiper-next-btn p-3 rounded-xl 
        bg-linear-to-r from-[#0057ff] to-[#0036d6]
        text-white shadow-lg hover:shadow-2xl 
        hover:scale-110 transition duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>

    {/* Swiper */}
    <div className="relative overflow-hidden mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 3500 }}
        loop={true}
        navigation={{ nextEl: ".swiper-next-btn", prevEl: ".swiper-prev-btn" }}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >

        {courses.map((course, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-white rounded-3xl shadow-xl border border-[#e9ecf5]
              overflow-hidden transition-all duration-500 cursor-pointer 
              hover:shadow-2xl hover:border-[#0057ff40] mb-10"
            >

              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover 
                  transition-transform duration-300 group-hover:scale-110"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl 
                    scale-75 group-hover:scale-105 transition">
                    <Play className="w-8 h-8 text-[#0057ff]" />
                  </div>
                </div>

                {/* Badge */}
                <span
                  className={`absolute top-4 left-4 px-4 py-1.5 
                  text-xs rounded-full font-bold shadow-md 
                  ${getBadgeColor(course.badge)} 
                  backdrop-blur-sm`}
                >
                  {course.badge}
                </span>

                {/* Stats */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <div className="flex-1 bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 
                    flex items-center gap-2 shadow">
                    <Users className="w-4 h-4 text-[#0057ff]" />
                    <span className="text-xs font-bold text-gray-800">
                      {course.students}
                    </span>
                  </div>

                  <div className="flex-1 bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 
                    flex items-center gap-2 shadow">
                    <Clock className="w-4 h-4 text-[#0036d6]" />
                    <span className="text-xs font-bold text-gray-800">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-base line-clamp-2 mb-2 
                  group-hover:text-[#0057ff] transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                  <Award className="w-4 h-4 text-gray-400" />
                  {course.author}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    ({course.reviews} reviews)
                  </span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl bg-linear-to-r from-[#0057ff] to-[#0036d6]
                      bg-clip-text text-transparent font-semibold">
                      {course.price}
                    </span>
                    <span className="line-through text-gray-400 text-sm ml-2">
                      {course.oldPrice}
                    </span>
                  </div>

                  <button className="border border-[#2563EB]
                    text-[#2563EB] px-4 py-2 rounded-xl font-semibold 
                    text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all 
                    flex items-center gap-1">
                    Enroll
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  </div>
</section>

  );
}
