"use client";

import Image from "next/image";
import { useMemo } from "react";

const testimonials = [
  { name: "David McCall",      username: "@davemccall",    text: "Edumile’s courses provided practical skills and real-world experience, transforming my career growth." },
  { name: "Mervin Cobb",       username: "@mervincobb01",  text: "Interactive content and support made online learning enjoyable and rewarding." },
  { name: "Julian Munoz",      username: "@julianmunoz63", text: "Engaging lessons, hands-on projects, and certifications that employers truly value." },
  { name: "Elvis Young",       username: "@elvisyoung",    text: "The intuitive platform and expert support made learning stress-free and effective." },
  { name: "Jason Diaz",        username: "@jasondiaz29",   text: "The skills I gained through Edumile have been invaluable for advancing my career." },
  { name: "Rob Sanchez",       username: "@robsanchez",    text: "The community kept me motivated in my journey. Amazing learning experience!" },
  { name: "Chester H.",        username: "@chester3",      text: "Expert feedback and hands-on projects helped me build a strong professional portfolio." },
];

const Avatar = ({ name, index }) => {
  const colors = ["3B82F6","10B981","F59E0B","EF4444","6366F1","EC4899","06B6D4"];
  const initials = name.split(" ").map(n => n[0]).join("");
  const color = colors[index % colors.length];
  return (
    <img
      src={`https://placehold.co/64x64/${color}/ffffff?text=${initials}`}
      alt={name}
      className="w-16 h-16 rounded-full border-2 border-gray-200"
    />
  );
};

const InfiniteRow = ({ direction = "left", speed = 60 }) => {
  const items = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <div className="overflow-hidden py-4">
      <div
        className="flex"
        style={{
          animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} ${speed}s linear infinite`,
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="shrink-0 w-80 md:w-96 mx-4 bg-[#F4F7FB] rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar name={t.name} index={i} />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">{t.name}</h4>
                <p className="text-blue-600 font-medium">{t.username}</p>
              </div>
            </div>
            <p className="text-gray-700 italic text-sm">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-gray-900">
              Learners <span className="text-blue-600">Achieving Success</span> Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our community enhances skills, transforms careers, and unlocks new opportunities.
            </p>
          </div>

          {/* Scrolling Rows */}
          <div className="relative mask-gradient">
            <InfiniteRow direction="left"  speed={20} />
            <InfiniteRow direction="right" speed={28} />
          </div>

        
        </div>
      </section>

      <style jsx>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .mask-gradient > div:hover > div { animation-play-state: paused; }
      `}</style>
    </>
  );
}