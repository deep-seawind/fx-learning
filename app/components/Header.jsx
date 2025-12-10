"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Logo from "../../public/images/logo/FX-Education-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-lg">
      <div className="container mx-auto py-3 flex items-center justify-between px-4 lg:px-8 gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" className="h-10 md:h-18" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 flex-1">

          {/* Mega Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm">
              Explore Courses ▼
            </button>

            {/* Mega Dropdown */}
            <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100
              transition-all duration-300 mt-4 w-[900px] bg-white shadow-xl rounded-xl p-8 
              grid grid-cols-4 gap-10 z-50 border border-gray-100">

              {/* Learning Paths */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Learning Paths</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600">Beginner Trader</li>
                  <li className="hover:text-blue-600">Advanced Trader</li>
                  <li className="hover:text-blue-600">Technical Analyst</li>
                  <li className="hover:text-blue-600">Risk Manager</li>
                  <li className="text-blue-600 cursor-pointer">View All</li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Course Categories</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600">Forex Trading</li>
                  <li className="hover:text-blue-600">Commodities</li>
                  <li className="hover:text-blue-600">Indices</li>
                  <li className="hover:text-blue-600">Crypto Trading</li>
                  <li className="text-blue-600 cursor-pointer">View All</li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Certificates</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600">Forex Certification</li>
                  <li className="hover:text-blue-600">Technical Analysis</li>
                  <li className="hover:text-blue-600">Algo Trading</li>
                  <li className="hover:text-blue-600">Trading Psychology</li>
                  <li className="text-blue-600 cursor-pointer">View All</li>
                </ul>
              </div>

              {/* Trending Skills */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Trending Skills</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600">Price Action</li>
                  <li className="hover:text-blue-600">Chart Patterns</li>
                  <li className="hover:text-blue-600">Swing Trading</li>
                  <li className="hover:text-blue-600">Risk Management</li>
                  <li className="text-blue-600 cursor-pointer">View All</li>
                </ul>
              </div>
            </div>
          </div>
 

          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Webinars
          </Link>

          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Become Instructor
          </Link>

          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Pricing
          </Link>

          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full rounded-full border border-gray-200 py-3 pl-5 pr-14 text-sm shadow-sm outline-none
              focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md">
              <Search size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600">
            Sign In
          </Link>

          <Link
            href="#"
            className="rounded-full bg-linear-to-r from-[#0036d6] to-[#0082ff] text-white px-6 py-2.5
            text-sm font-bold shadow-lg hover:shadow-blue-300 hover:scale-[1.02] transition-all"
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute inset-x-0 bg-white px-4 py-6 space-y-6 shadow-xl">

          <input
            type="text"
            placeholder="Search courses..."
            className="w-full rounded-lg border border-gray-200 py-3 px-3 text-sm shadow-sm"
          />

          <nav className="space-y-5">
            <button
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className="w-full text-left text-sm text-gray-800 font-semibold flex justify-between items-center"
            >
              Explore
              <span>{subMenuOpen ? "▲" : "▼"}</span>
            </button>

            {subMenuOpen && (
              <div className="pl-3 mt-2 space-y-4 animate-fadeIn">
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs mb-2">
                    Learning Paths
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>Beginner Trader</li>
                    <li>Advanced Trader</li>
                    <li>Technical Analyst</li>
                    <li>View all</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 text-xs mb-2">
                    Categories
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>Forex Trading</li>
                    <li>Crypto Trading</li>
                    <li>Commodities</li>
                    <li>View all</li>
                  </ul>
                </div>
              </div>
            )}

            <Link href="#" className="block text-sm font-medium text-gray-800">Courses</Link>
            <Link href="#" className="block text-sm font-medium text-gray-800">Webinars</Link>
            <Link href="#" className="block text-sm font-medium text-gray-800">Become Instructor</Link>
            <Link href="#" className="block text-sm font-medium text-gray-800">Pricing</Link>
            <Link href="#" className="block text-sm font-medium text-gray-800">Dashboard</Link>
          </nav>

          <div className="pt-5 border-t">
            <Link href="#" className="block text-gray-800 font-semibold mb-4">
              Sign In
            </Link>

            <Link
              href="#"
              className="block text-center rounded-full bg-linear-to-r from-[#0036d6] to-[#0082ff] text-white py-2.5 font-bold shadow"
            >
              Start Learning
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
