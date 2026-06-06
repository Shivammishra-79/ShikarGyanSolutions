import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import myLogo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll hone par navbar background badalne ke liye switch effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 font-['Plus_Jakarta_Sans'] transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* ================= BRAND LOGO + FULL COMPANY NAME ================= */}
        <Link 
          to="/" 
          onClick={() => handleNavigation('/')}
          className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group"
        >
          {/* Logo Container with Glow */}
          <div className="relative flex items-center justify-center h-10 sm:h-11 md:h-12 transition-transform duration-300 group-hover:scale-105">
            <img 
              src={myLogo} 
              alt="ShikarGyan Solutions Logo" 
              className="h-full w-auto object-contain max-h-10 sm:max-h-11 md:max-h-12 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            />
          </div>
          
          {/* Company Name Layout - Optimized for Mobile, Tablet, and Monitors */}
          <div className="flex flex-col justify-center leading-none">
            <span className="text-sm sm:text-base md:text-lg font-black tracking-wider text-white uppercase font-['Orbitron']">
              Shikar<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Gyan</span>
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase font-['Orbitron'] mt-0.5 group-hover:text-slate-400 transition-colors">
              Solutions
            </span>
          </div>
        </Link>

        {/* ================= HIGHLY READABLE NAVIGATION LINKS ================= */}
        {/* Font sizes are locked between sm and base for perfect visibility */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-bold tracking-wide text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`transition-all duration-200 relative py-1 hover:text-white font-medium ${
                location.pathname === link.path 
                  ? 'text-white' 
                  : 'hover:text-white'
              }`}
            >
              {link.name}
              {/* Active Indicator Underline */}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* ================= INTERACTIVE SOCIAL CONTROLS ================= */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* Instagram Option */}
          <a 
            href="https://www.instagram.com/shikargyansolutions/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram Account"
            className="p-2 rounded-xl bg-slate-900/40 border border-slate-900/60 text-slate-400 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* LinkedIn Option */}
          <a 
            href="https://www.linkedin.com/in/shikargyansolutions/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-slate-900/40 border border-slate-900/60 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Responsive Hamburger Toggle Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2.5 rounded-xl bg-slate-900/50 border border-slate-900/80 text-slate-400 hover:text-white transition-all duration-300"
            aria-label="Menu Opener"
          >
            <svg className="w-5 h-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ================= MOBILE / TABLET DROPDOWN DRAWER ================= */}
      {/* Expanded item sizing for high touchscreen interaction readability */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-900/90 backdrop-blur-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`block px-5 py-3.5 rounded-xl text-base font-bold tracking-wide transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-blue-400 bg-blue-500/10 border border-blue-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;