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
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=900&q=80",
    rating: "4.7",
    reviews: "31,800",
    price: "₹659",
    oldPrice: "₹3,199",
    badge: "Top Rated",
    students: "98K",
    duration: "28h",
  },

  {
    title: "Algorithmic Trading with Python: Automated Forex Strategies",
    author: "Alvin Lee",
    thumbnail:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=900&q=80",
    rating: "4.8",
    reviews: "18,450",
    price: "₹899",
    oldPrice: "₹4,999",
    badge: "New Release",
    students: "65K",
    duration: "40h",
  },

  {
    title: "Price Action Trading: Identifying Reversal and Trend Patterns",
    author: "Nial Fuller, Learn To Trade",
    thumbnail:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80",
    rating: "4.6",
    reviews: "75,500",
    price: "₹599",
    oldPrice: "₹2,899",
    badge: "Trending",
    students: "210K",
    duration: "24h",
  },

  {
    title: "Fundamental Analysis: Central Banks & Economic Events",
    author: "Jamie Saette, FX Street",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    rating: "4.5",
    reviews: "12,340",
    price: "₹559",
    oldPrice: "₹1,999",
    badge: "Limited Time",
    students: "52K",
    duration: "18h",
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
      return "bg-gradient-to-r from-blue-500 to-[#0049ac] text-white";
  }
};

export default function ForexCourseSlider() {
 
  return (
    <section className="relative my-16 mb-0 py-10 pb-10 overflow-hidden bg-gray-50">
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
            <span
              className="bg-clip-text text-transparent 
          bg-[#2563EB]
          block sm:inline ps-3"
            >
              Fx Education
            </span>
          </h2>

          <p className="text-gray-600 pt-3">
            Learn from world-class traders & transform your financial future
            through curated, premium trading courses.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute z-30 lg:top-22 top-40 right-4 flex gap-3">
          <button
            aria-label="Previous"
            className="swiper-prev-btn p-3 rounded-lg 
        bg-[#2563EB]
        text-white shadow-lg hover:shadow-2xl 
        hover:scale-110 transition duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            aria-label="Next"
            className="swiper-next-btn p-3 rounded-lg 
        bg-linear-to-r from-[#0057ff] to-[#0036d6]
        text-white shadow-lg hover:shadow-2xl 
        hover:scale-110 transition duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Swiper */}
        <div className="relative overflow-hidden mt-18">
<Swiper
  modules={[Navigation, Autoplay]}
  slidesPerView={1} 
  spaceBetween={20}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  loop={true}
  navigation={{
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  }}
  breakpoints={{
    640: { slidesPerView: 1, spaceBetween: 20 },     // Mobile
    768: { slidesPerView: 2, spaceBetween: 25 },     // Tablets
    1024: { slidesPerView: 3, spaceBetween: 30 },    // Small laptops
    1280: { slidesPerView: 3, spaceBetween: 35 },    // Surface Pro 7 (1280px)
    1368: { slidesPerView: 3, spaceBetween: 35 },    // Standard desktops/laptops
    1440: { slidesPerView: 4, spaceBetween: 40 },    // Large desktops
  }}
>


            {courses.map((course, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl shadow-xl border border-gray-100
                    overflow-hidden transition-all duration-300 cursor-pointer 
                    hover:shadow-2xl hover:border-indigo-200 mb-8"
                >
                  {/* Image Area */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover 
                        transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Play Overlay */}
                    <div
                      className="absolute inset-0 bg-black/30 flex items-center justify-center 
                      opacity-0 group-hover:opacity-100 transition duration-500"
                    >
                      <div
                        className="bg-white/95 backdrop-blur-md p-4 rounded-full shadow-2xl 
                        scale-75 group-hover:scale-100 transition duration-300"
                      >
                        <Play className="w-8 h-8 text-[#0049ac] fill-[#0049ac]" />
                      </div>
                    </div>

                    {/* Badge */}
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 
                        text-xs rounded-full font-bold shadow-md tracking-wider uppercase
                        ${getBadgeColor(course.badge)}`}
                    >
                      {course.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-[#0049ac] font-semibold mb-1 flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {course.author}
                    </p>

                    <h3 className="font-semibold text-gray-900 text-lg line-clamp-2 mb-3 transition-colors">
                      {course.title}
                    </h3>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700 font-semibold">
                          {course.students} Students
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700 font-semibold">
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between">
                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="font-bold text-gray-900">
                          {course.rating}
                        </span>
                        <span className="text-gray-400 text-sm hidden sm:inline">
                          ({course.reviews} reviews)
                        </span>
                      </div>

                      {/* Price */}
                      <div>
                        <span className="text-2xl font-semibold text-[#0049ac]">
                          {course.price}
                        </span>
                        <span className="line-through text-gray-400 text-sm ml-2">
                          {course.oldPrice}
                        </span>
                      </div>
                    </div>

                    {/* Enroll Button */}
                    <div className="mt-4">
                      <button
                        className="w-full bg-[#0049ac] text-white px-6 py-3 rounded-xl font-semibold 
                        text-md shadow-lg shadow-indigo-300/50 hover:bg-[#2563EB] transition-all 
                        flex items-center justify-center gap-2"
                      >
                        View Course
                        <ArrowRight className="w-5 h-5" />
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
