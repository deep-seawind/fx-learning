"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Banner1 from "../../public/images/banners/banner-1.jpg";
import Banner2 from "../../public/images/banners/banner-2.jpg";
import Banner3 from "../../public/images/banners/banner-3.jpg";
import Banner4 from "../../public/images/banners/banner-4.jpg";
import Banner5 from "../../public/images/banners/banner-5.jpg";
import Banner6 from "../../public/images/banners/banner-6.jpg";
 

const HeroSection = () => {
   const slides = [
    {
      id: 1,
      title: "Master Forex Trading",
      subtitle: "with Real-World Knowledge",
      description:
        "Learn Forex from industry experts with practical strategies, live market tools, and smart learning pathways.",
      bg: Banner4,
      img: Banner1,
    },
    {
      id: 2,
      title: "Learn & Trade Like Pros",
      subtitle: "Boost Your Trading Skills",
      description:
        "Trade smarter with tools, analytics, and an international learning community all in one place.",
      bg: Banner5,
      img: Banner2,
    },
    {
      id: 3,
      title: "Build Confidence in the Markets",
      subtitle: "Transform Your Knowledge into Success",
      description:
        "From fundamentals to advanced strategies — gain skills that help you trade like professionals.",
      bg: Banner6,
      img: Banner3,
    },
  ];
  return (
      <section className="w-full relative overflow-hidden bg-[#F9FBFC]">
      <Swiper
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="h-screen w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${slide.bg.src})` }}
            >
              <div className="absolute inset-0 bg-[#020014]/80 "></div>

              <div className="absolute top-0 left-0 w-full h-full">
                {/* Graphics using a standard purple/indigo for utility compatibility */}
                <svg
                  className="absolute top-0 right-0 w-1/2 h-full opacity-10 text-indigo-500"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="currentColor"
                    d="M0,100 C60,-50 100,60 100,0 L100,100 Z"
                  />
                </svg>
              </div>

              {/* Content Grid */}
              <div className="container mx-auto h-screen flex items-center justify-center px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
                  {/* LEFT CONTENT */}
                  <div className="space-y-7 p-4 md:p-0 text-center md:text-left">
                    <h1 className="text-6xl md:text-6xl font-semibold text-[#eeeeee] leading-tight drop-shadow-sm">
                      {slide.title}
                    </h1>

                    <h2 className="text-3xl font-medium text-[#4f39f6] pt-1 border-l-4 md:border-l-4 border-indigo-300 pl-4 md:pl-4 inline-block">
                      {slide.subtitle}
                    </h2>

                    <p className="text-gray-200 text-xl max-w-lg leading-relaxed pt-2 mx-auto md:mx-0">
                      {slide.description}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                      <a className="px-10 py-4 bg-linear-to-r from-[#4f39f6] to-[#7e73ff] rounded-full text-white font-bold text-lg tracking-wide shadow-2xl shadow-indigo-400/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-500/80 transform translate-y-0 hover:-translate-y-0.5">
                        Get Started Now →
                      </a>

                      <a className="px-10 py-4 border-2 border-gray-300 text-gray-600 bg-white rounded-full font-semibold text-lg transition-all duration-300 hover:border-[#4f39f6] hover:text-[#4f39f6] hover:bg-white">
                        View Portfolio
                      </a>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center relative">
                    <div className="  w-full">
                      <img
                        src={slide.img.src}
                        alt="Professional Digital Asset"
                        className="rounded-4xl w-full h-96 object-cover "
                      />
                    </div>

                    <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-dashed border-[#7e73ff]/50 rounded-full opacity-60 animate-spin-slow hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection