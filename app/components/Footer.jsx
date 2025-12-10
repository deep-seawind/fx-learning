"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Logo from "../../public/images/logo/FX-Education-logo.png";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Courses", href: "/courses" },
      { name: "Analytics Hub", href: "/analytics" },
      { name: "Pricing", href: "/pricing" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Legal & Privacy", href: "/legal" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/support" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "System Status", href: "/status" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0C0F14] text-white overflow-hidden">
      <div className="container mx-auto pt-10 pb-5 relative z-10">
        {/* GLASS CARD */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10 md:p-14 md:pb-5">
          {/* GRID */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
            {/* BRAND */}
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src={Logo.src}
                  alt="Logo"
                  className="h-18 opacity-90 rounded bg-white p-2"
                />
              </Link>

              <p className="mt-5 text-gray-300 text-sm max-w-xs leading-relaxed">
                The world’s most intuitive Forex learning platform — designed
                for clarity, confidence & real-world growth.
              </p>
            </div>

            {/* LINKS */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}

                  <span
                    className="block w-12 h-1 mt-1 rounded-full bg-linear-to-r 
                    from-[lab(54.1736%_13.3368_-74.6839)] 
                    to-[lab(32.4486%_49.2217_-84.6695)]"
                  ></span>
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="relative text-gray-300 text-sm hover:text-white transition group"
                      >
                        {link.name}
                        <span className="absolute left-0 bottom-0 h-px w-0 bg-white group-hover:w-full transition-all"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* BRAND */}
            <div className=" ">
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact
                <span
                  className="block w-12 h-1 mt-1 rounded-full bg-linear-to-r 
                    from-[lab(54.1736%_13.3368_-74.6839)] 
                    to-[lab(32.4486%_49.2217_-84.6695)]"
                ></span>
              </h4>

              {/* CONTACT */}
              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a
                    href="mailto:support@fxmaster.com"
                    className="hover:text-white transition"
                  >
                    support@fxmaster.com
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>123 Global Exchange, London, UK</span>
                </p>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="p-3 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all"
                  >
                    <Icon size={18} className="text-white opacity-90" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-200 text-sm">
              © {new Date().getFullYear()} FXMaster™ — Learn Smarter. Trade
              Smarter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
