'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

const navItems = [
  { name: 'Courses', href: '/courses' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Community', href: '/community' },
  { name: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // body scroll lock when menu open
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-2xl backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 p-1 shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <BarChart2 className="h-full w-full text-white" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter transition-colors duration-300 group-hover:text-indigo-700">
            FX<span className="text-indigo-600">Master</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:gap-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-1 rounded-full text-base font-medium text-gray-600 transition-all duration-300 hover:text-indigo-800 hover:bg-indigo-50"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="/login" className="px-3 py-2 text-base text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-indigo-400/50 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/70 hover:-translate-y-0.5"
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile Menu Button — toggle */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden -m-2.5 p-2.5 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
 
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!isOpen}
      />
 
      <aside 
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm transform transition-transform duration-400 ease-in-out lg:hidden
          bg-white p-6  
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between bg-white">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 p-1  ">
              <BarChart2 className="h-full w-full text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              FX<span className="text-indigo-600">Master</span>
            </span>
          </Link>

          <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="p-2.5 text-gray-700 hover:text-indigo-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="space-y-4 border-t border-gray-100 pt-6 bg-white h-screen">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 text-lg font-semibold text-gray-800 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-gray-100 space-y-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-full border border-gray-300 px-3 py-2.5 text-base font-semibold text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-full bg-indigo-600 px-3 py-3 text-base font-bold text-white shadow-md hover:bg-indigo-700"
            >
              Start Learning
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}
