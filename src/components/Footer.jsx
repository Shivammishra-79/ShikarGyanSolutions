import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import myLogo from '../assets/logo.png';

const Footer = () => {
  const location = useLocation();

  const handleFooterNavigation = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900/80 pt-16 pb-10 px-4 sm:px-6 relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Dynamic Ambient Background Flare */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= 1. UPGRADED TOP CONTENT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Full Brand Statement */}
          <div className="sm:col-span-2 space-y-4">
            <Link 
              to="/" 
              onClick={() => handleFooterNavigation('/')}
              className="flex items-center space-x-3 group w-fit"
            >
              <img 
                src={myLogo} 
                alt="ShikarGyan Solutions Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-['Orbitron']">
                  Shikar<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Gyan</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase font-['Orbitron'] mt-0.5">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-medium">
              We design premium full-stack websites, high-performance web applications, and safe database systems. We help modern businesses scale with stable cloud architectures.
            </p>
          </div>

          {/* Column 2: Enhanced Navigation Map */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-['Orbitron'] border-l-2 border-blue-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-semibold text-slate-400">
              <li>
                <Link to="/" onClick={() => handleFooterNavigation('/')} className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleFooterNavigation('/services')} className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={() => handleFooterNavigation('/portfolio')} className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => handleFooterNavigation('/about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Physical & Cloud Infrastructure Nodes */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-['Orbitron'] border-l-2 border-indigo-500 pl-2.5">
              Operational Hub
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li className="flex flex-col">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-wider font-['Orbitron'] mb-0.5">Location</span>
                Mumbai, Maharashtra, India
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-wider font-['Orbitron'] mb-0.5">Availability</span>
                Global Operations // Remote Enabled
              </li>
              <li className="pt-1">
                <Link 
                  to="/contact" 
                  onClick={() => handleFooterNavigation('/contact')}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-bold uppercase tracking-wider font-['Orbitron'] text-xs flex items-center gap-1"
                >
                  Start Your Project &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= 2. RESPONSIVE SOCIAL BAR & SYSTEM RIGHTS ================= */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Stamp */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs sm:text-sm text-slate-500 font-semibold tracking-wide">
              &copy; {new Date().getFullYear()} ShikarGyan Solutions. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 font-medium tracking-normal">
              Designed for extreme cross-platform screen layout optimization.
            </p>
          </div>

          {/* Premium Social Media Hyperlinks Container */}
          <div className="flex items-center space-x-3 order-first md:order-none">
            {/* Instagram Profile */}
            <a 
              href="https://www.instagram.com/shikargyansolutions/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="ShikarGyan Instagram Node"
              className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-900 text-slate-400 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn Network */}
            <a 
              href="https://www.linkedin.com/in/shikargyansolutions/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="ShikarGyan LinkedIn Corporate Portal"
              className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-900 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Active Cloud Status Indicator */}
          <div className="flex items-center space-x-2 bg-slate-900/30 border border-slate-900/80 rounded-full px-3.5 py-1.5 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[10px] text-slate-400 font-['Orbitron'] tracking-widest uppercase font-bold">
              SYS_STATUS: ACTIVE
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;