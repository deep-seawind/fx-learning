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
  return (
    <section className="relative py-20 pb-5 overflow-hidden">
      <div className="container mx-auto lg:px-0 px-4  relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tighter">
            Trending courses on
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-indigo-600 block sm:inline ps-3">
              Fx Education
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto font-medium pt-2">
            Learn from world-class traders and transform your financial future
            with our curated courses
          </p>
        </div>

        {/* Slider Container */}
        <div className="absolute z-30 top-1/6 -translate-y-1/2 right-4 flex gap-3">
          <button
            aria-label="Previous slide"
            className="swiper-prev-btn p-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            aria-label="Next slide"
            className="swiper-next-btn p-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="relative overflow-hidden pb-4 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            className=" "
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
          >
            {courses.map((course, i) => (
              <SwiperSlide key={i} className="flex! h-auto! my-10">
                <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2 h-full cursor-pointer">
                  {/* Image Container with Overlay */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
 

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-8 h-8 text-blue-600 fill-blue-600" />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-4 py-1.5 text-xs rounded-full font-bold shadow-lg ${getBadgeColor(
                          course.badge
                        )} backdrop-blur-sm`}
                      >
                        {course.badge}
                      </span>
                    </div>

                    {/* Quick Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-gray-800">
                          {course.students}
                        </span>
                      </div>
                      <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-bold text-gray-800">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-2 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {course.author}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-gray-900">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        ({course.reviews} reviews)
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                          {course.price}
                        </span>
                        <span className="line-through text-gray-400 text-sm ml-2">
                          {course.oldPrice}
                        </span>
                      </div>

                      <button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-1">
                        Enroll
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
