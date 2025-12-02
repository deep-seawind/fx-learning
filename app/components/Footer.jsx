import React from 'react';
import Link from 'next/link';
import { BarChart2, Zap, Mail, MapPin } from 'lucide-react'; 

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { name: 'Courses', href: '/courses' },
      { name: 'Analytics Hub', href: '/analytics' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Legal & Privacy', href: '/legal' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/support' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'System Status', href: '/status' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        
        {/* Top Section: Call to Action (Floating Block) */}
        <div className="relative -mt-40 mb-16 rounded-[2rem] bg-white p-6 shadow-2xl ring-4 ring-indigo-50/50 sm:p-10 lg:p-14 transform transition-all duration-700 ease-in-out hover:scale-[1.01] hover:shadow-indigo-400/40">
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left">
            
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-0">
              <div className="p-3 bg-indigo-100 rounded-full flex-shrink-0 mb-4 sm:mb-0">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" strokeWidth={1.5} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Ready to Master the Markets?
                </h3>
                <p className="text-gray-500 mt-1 text-sm sm:text-lg">
                  Join over 50,000 successful traders today.
                </p>
              </div>
            </div>

            <Link
              href="/signup"
              className="rounded-full bg-indigo-600 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-bold text-white shadow-xl shadow-indigo-400/60 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/80 hover:-translate-y-1"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
        
        {/* Main Grid Links Section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-y-10 mt-8">
          
          {/* Brand and Description Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 p-1 shadow-md">
                <BarChart2 className="h-full w-full text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                FX<span className="text-indigo-600">Master</span>
              </span>
            </Link>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xs">
              Precision learning for the future of foreign exchange trading. Built for clarity and confidence.
            </p>
            {/* Contact Info Group */}
            <div className="mt-6 space-y-2 text-sm">
                <p className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <a href="mailto:support@fxmaster.com" className="hover:text-indigo-600 transition-colors">support@fxmaster.com</a>
                </p>
                <p className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>123 Global Exchange, London, UK</span>
                </p>
            </div>
          </div>

          {/* Navigation Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-base sm:text-lg font-extrabold text-gray-900 mb-4 sm:mb-5">{section.title}</h4>
              <ul role="list" className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-gray-600 transition-colors duration-200 hover:text-indigo-600 hover:opacity-90"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section: Copyright and Legal */}
        <div className="mt-12 pt-6 border-t border-gray-200 sm:mt-16 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FXMaster, Inc. All rights reserved. | Trading involves risk. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;