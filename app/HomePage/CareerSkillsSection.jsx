"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import ChartsImage from "../../public/images/images/banner-3.jpg";
import Mindset from "../../public/images/categories/image-2.jpg";
import Fundamental from "../../public/images/categories/image-3.jpg";
import Analysis from "../../public/images/categories/image-4.jpg";
import { motion } from "framer-motion";

const careerCards = [
  {
    title: "Risk Management & Position Sizing",
    learners: "8,920+",
    img: ChartsImage,
  },
  {
    title: "Technical Analysis: Candlesticks & Patterns",
    learners: "12,500+",
    img: Analysis,
  },
  {
    title: "Trading Psychology & Mindset",
    learners: "5,100+",
    img: Mindset,
  },
  {
    title: "Fundamental Forex Drivers (NFP, CPI)",
    learners: "15,300+",
    img: Fundamental,
  },
];

export default function CareerSkillsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-30 pb-10 bg-gray-50 overflow-hidden lg:px-0 px-4">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left: Content */}
          <div className="col-span-2 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tighter"
            >
              Trade Smarter: <br />
              <span className="bg-clip-text text-transparent bg-[#2563EB] block sm:inline">
                Essential Forex Learning
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-500 mb-10"
            >
              Start your journey in the world's largest financial market. Master
              technical analysis, risk management, and trading psychology with
              our expert-led courses.
            </motion.p>
          </div>

          {/* Right: Swiper/Carousel */}
          <div className="relative col-span-3">
            <div className="absolute top-0 right-0 z-30 flex gap-3 -mt-16 md:-mt-18">
              <button
                aria-label="Previous slide"
                className="swiper-prev-btn p-3 rounded-lg bg-[#2563EB] border hover:border-[#2563EB] hover:text-[#2563EB] text-white shadow-md hover:bg-gray-100  transition duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                aria-label="Next slide"
                  className="swiper-prev-btn p-3 rounded-lg bg-[#2563EB] border hover:border-[#2563EB] hover:text-[#2563EB] text-white shadow-md hover:bg-gray-100  transition duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {mounted && (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, Keyboard]}
                  spaceBetween={30}
                  slidesPerView={1.05}
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
                  className="py-10"
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 2 },
                  }}
                >
                  {careerCards.map((card, idx) => (
                    <SwiperSlide key={idx} className=" ">
                      <article className="relative rounded-3xl bg-gray-50 overflow-visible group transition duration-300 hover:-translate-y-1">
                        <div className="relative h-64 md:h-72 bg-gray-100 flex items-center justify-center overflow-hidden rounded-4xl">
                          <img
                            src={card.img.src}
                            alt={card.title}
                            className="object-cover w-full h-full transition duration-500 group-hover:scale-[1.05]"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://placehold.co/800x450/475569/ffffff?text=Forex+Content";
                            }}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10 -mt-10 mx-4 bg-white rounded-xl shadow-lg p-4 flex items-end justify-between border border-gray-100">
                          <div className="w-96">
                            <span className="flex items-center text-sm font-medium text-blue-700 bg-blue-100 rounded-full px-3 py-1 mb-2 w-fit">
                              <Users className="w-4 h-4 mr-1.5" />{" "}
                              {card.learners} Learners
                            </span>

                            <h3 className="text-sm mt-2 font-semibold text-gray-900 leading-snug">
                              {card.title}
                            </h3>
                          </div>

                          <div className="p-3 rounded-full border border-[#2563EB] bg-[#2563EB] text-white group-hover:bg-white group-hover:text-[#2563EB] transition shadow-md">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="h-4"></div>
                      </article>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
