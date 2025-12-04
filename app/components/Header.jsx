"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Logo from "../../public/images/logo/FX-Education-logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur-md shadow-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" className="h-7 md:h-20" />
        </Link>

        {/* Desktop Navigation + Search */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {/* Desktop Mega Menu - Hover */}
            <div className="relative group hidden lg:block">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 text-sm font-medium">
                Explore ▼
              </button>

              {/* Dropdown */}
              <div
                className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100
               transition-all duration-300 mt-4 w-[920px] bg-white shadow-xl rounded-xl p-8 
               grid grid-cols-4 gap-10 z-50 border border-gray-100"
              >
                {/* Explore Roles */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Explore roles
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">
                      Forex Trader
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Crypto Trader
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Market Analyst
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Risk Manager
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Investment Advisor
                    </li>
                    <li className="text-blue-600 cursor-pointer">View all</li>
                  </ul>
                </div>

                {/* Explore Categories */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Explore categories
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">
                      Forex Trading
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Commodities
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Indices
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Shares
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      ETF Trading
                    </li>
                    <li className="text-blue-600 cursor-pointer">View all</li>
                  </ul>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Earn a Certificate
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">
                      Forex Certification
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Technical Analysis
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Trading Psychology
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Risk Management
                    </li>
                    <li className="text-blue-600 cursor-pointer">View all</li>
                  </ul>
                </div>

                {/* Trending Skills */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Trending skills
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">
                      Price Action
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Chart Patterns
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Algo Trading
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      Crypto Trading
                    </li>
                    <li className="text-blue-600 cursor-pointer">View all</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Degrees
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full rounded-full border border-gray-200 py-3 pl-5 pr-14 text-sm shadow-sm outline-none
              focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md">
              <Search size={16} className="text-white" />
            </button>
          </div>

          {/* New Link */}
          <Link
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Plans & Pricing
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            Sign In
          </Link>

          <Link
            href="#"
            className="rounded-full bg-linear-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5
                       text-sm font-bold shadow-lg hover:shadow-blue-500/40
                       hover:from-indigo-700 hover:to-blue-600 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute inset-x-0 bg-white px-4 py-6 space-y-5 shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-200 py-3 px-3 text-sm shadow-sm"
          />

          <nav className="space-y-4">
            <div>
              <button
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                className="w-full text-left text-sm text-gray-800 font-medium flex justify-between items-center"
              >
                Explore
                <span>{subMenuOpen ? "▲" : "▼"}</span>
              </button>

              {subMenuOpen && (
                <div className="pl-3 mt-3 space-y-4 animate-fadeIn">
                  {/* Same MENU CONTENT reused but stacked */}
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xs mb-2">
                      Explore roles
                    </h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>Forex Trader</li>
                      <li>Crypto Trader</li>
                      <li>Market Analyst</li>
                      <li>View all</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-xs mb-2">
                      Categories
                    </h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>Forex Trading</li>
                      <li>Commodities</li>
                      <li>Indices</li>
                      <li>View all</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link href="#" className="block text-sm text-gray-800 font-medium">
              Degrees
            </Link>
            <Link href="#" className="block text-sm font-medium text-gray-800">
              Plans & Pricing
            </Link>
          </nav>

          <div className="pt-5 border-t">
            <Link href="#" className="block text-gray-800 font-semibold mb-4">
              Sign In
            </Link>
            <Link
              href="#"
              className="block text-center rounded-full bg-blue-600 text-white py-2.5 font-bold shadow hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
