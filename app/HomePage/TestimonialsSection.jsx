"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "David McCall",
    username: "@davemccall",
    text: "Edumile’s courses provided practical skills and real-world experience, transforming my career growth.",
  },
  {
    name: "Mervin Cobb",
    username: "@mervincobb01",
    text: "Interactive content and support made online learning enjoyable and rewarding.",
  },
  {
    name: "Julian Munoz",
    username: "@julianmunoz63",
    text: "Engaging lessons, hands-on projects, and certifications that employers truly value.",
  },
  {
    name: "Elvis Young",
    username: "@elvisyoung",
    text: "The intuitive platform and expert support made learning stress-free and effective.",
  },
  {
    name: "Jason Diaz",
    username: "@jasondiaz29",
    text: "The skills I gained through Edumile have been invaluable for advancing my career.",
  },
  {
    name: "Rob Sanchez",
    username: "@robsanchez",
    text: "The community kept me motivated in my journey. Amazing learning experience!",
  },
];

const Avatar = ({ name, index }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2563EB] text-white font-bold text-lg shadow-md border-2 border-white">
      {initials}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-18 bg-linear-to-b from-white to-blue-50 ">
      <div className="container mx-auto relative lg:px-0 px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tighter">
            Loved by
            <span className="bg-clip-text text-transparent bg-[#2563EB] block sm:inline ps-3">
              50,000+ Learners
            </span>
          </h2>
          <p className="  text-gray-600 mt-2">
            See what our community is saying about their learning experience.
          </p>
        </div>

        <div className="absolute z-30 top-1/4 -translate-y-1/2 right-4 flex gap-3">
          <button
            aria-label="Previous slide"
            className="swiper-prev-btn p-3 rounded-lg bg-[#2563EB] text-white shadow-xl hover:shadow-2xl transition duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            aria-label="Next slide"
            className="swiper-next-btn p-3 rounded-lg bg-[#2563EB] text-white shadow-xl hover:shadow-2xl transition duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 2800 }}
          navigation={{
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/70 backdrop-blur-xl border border-zinc-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-4xl p-5 relative my-10 mb-10 mx-2">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-5">
                  <Avatar name={t.name} index={i} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-blue-600 font-medium">{t.username}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-md italic leading-relaxed">
                  “{t.text}”
                </p>

                {/* Rating */}
                <div className="flex gap-1 mt-5 text-yellow-400">
                  {Array(5)
                    .fill("")
                    .map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                </div>

                {/* Decorative highlight */}
                <span className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-blue-100 blur-2xl"></span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
