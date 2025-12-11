"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Banner1 from "../../public/images/banners/FX-Education-banner1.jpg";
import Banner5 from "../../public/images/banners/FX-Education-banner2.jpg";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Master Forex Trading With Real-World Guidance",
      description:
        "Interactive courses, live webinars, expert mentors — all in one powerful learning platform",
      bg: Banner1,
    },
    {
      id: 2,
      title: "Learn & Trade Like Pros",
      description:
        "Trade smarter with tools, analytics, and an international learning community all in one place.",
      bg: Banner5,
    },
  ];
  return (
    <section className="w-full relative overflow-hidden bg-[#F9FBFC]">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="w-full h-screen"
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          320: { height: "60vh" },
          480: { height: "65vh" },
          640: { height: "70vh" },
          768: { height: "75vh" },
          1024: { height: "90vh" },
          1280: { height: "100vh" },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${slide.bg.src})` }}
            >
              <div className="absolute inset-0 bg-[#020014]/30 "></div>
 

              {/* Content Grid */}
              <div className="container mx-auto h-screen flex items-center justify-between lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
                  {/* LEFT CONTENT */}
                  <div className="space-y-7 p-4 md:p-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-semibold text-[#eeeeee] leading-tight drop-shadow-sm">
                      {slide.title}
                    </h1>

                    <p className="text-gray-200 text-xl  leading-relaxed pt-2 mx-auto md:mx-0">
                      {slide.description}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                      <a className="px-10 py-4 bg-linear-to-r from-[#2563EB] to-[#2563EB] rounded-full text-white font-bold text-lg tracking-wide shadow-2xl shadow-blue-400/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/80 transform translate-y-0 hover:-translate-y-0.5">
                        Get Started Now →
                      </a>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
