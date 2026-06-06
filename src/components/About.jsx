import React from 'react';
import myLogo from '../assets/logo.png'; // Organization logo
import bannerImg from '../assets/banner.png'; // 1408*768 Banner image

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-white pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden font-['Plus_Jakarta_Sans'] min-h-screen flex items-center justify-center">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col gap-6 sm:gap-10">
        
        {/* ================= 1. RESPONSIVE HD BANNER (1408*768) ================= */}
        <div className="relative w-full aspect-[1408/768] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-900 shadow-2xl group bg-slate-900/50">
          {/* Dark Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10"></div>
          <img 
            src={bannerImg} 
            alt="ShikarGyan Solutions Banner" 
            className="w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-700 opacity-90"
          />
          {/* Floating Banner Title */}
          <div className="absolute bottom-3 left-4 sm:bottom-6 sm:left-8 md:bottom-8 md:left-10 z-20">
            <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest font-['Orbitron'] bg-blue-500/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-500/20 backdrop-blur-md">
              Official Workspace
            </span>
            <h1 className="text-base sm:text-2xl md:text-4xl font-black font-['Orbitron'] mt-1 sm:mt-2 tracking-wide uppercase text-white drop-shadow-md">
              ShikarGyan Solutions
            </h1>
          </div>
        </div>

        {/* ================= 2. SIMPLE HEADLINE ================= */}
        <div className="text-center mt-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight uppercase font-['Orbitron'] bg-gradient-to-r from-white via-slate-300 to-blue-500 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-medium max-w-xl mx-auto px-2">
            We are a modern team building fast, clean, and beautiful web applications for your business.
          </p>
        </div>

        {/* ================= 3. BUSINESS DETAILS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          
          {/* Left Block: Logo Brand Box */}
          <div className="flex flex-col items-center justify-center bg-slate-900/20 border border-slate-900/60 rounded-2xl sm:rounded-3xl p-6 backdrop-blur-md shadow-xl md:col-span-1 text-center">
            <div className="relative mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
              <img 
                src={myLogo} 
                alt="ShikarGyan Solutions" 
                className="h-16 sm:h-20 w-auto object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              />
            </div>
            <h3 className="font-['Orbitron'] text-xs tracking-widest uppercase font-bold text-slate-200">
              Tech Hub Node
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-[180px]">
              Ready to build and launch modern digital tools anytime.
            </p>
          </div>

          {/* Right Block: Simple Descriptions */}
          <div className="bg-slate-900/30 border border-slate-900/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-md shadow-xl space-y-4 sm:space-y-6 md:col-span-2 flex flex-col justify-center">
            <div>
              <h4 className="text-[10px] sm:text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-1 sm:mb-2 font-['Orbitron']">// Our Goal</h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                At ShikarGyan Solutions, we make software simple. We create fast custom websites, secure dashboards, and helpful online systems. We focus on clean code, safe storage, and smooth designs so your platform runs perfectly without slowing down.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] sm:text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-1 sm:mb-2 font-['Orbitron']">// Work Everywhere</h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                Using advanced version tools and cloud systems, we work seamlessly from anywhere. We provide high-quality support and digital solutions to startups and local businesses globally with easy communication.
              </p>
            </div>
          </div>

        </div>

        {/* ================= 4. THE MINDS SECTION (FIXED NESTED CARDS) ================= */}
        <div className="space-y-4 sm:space-y-6 mt-2">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="h-[1px] bg-slate-900 flex-grow"></div>
            <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase font-['Orbitron'] text-center whitespace-nowrap">
              The Minds Behind ShikarGyan
            </h3>
            <div className="h-[1px] bg-slate-900 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Shivam Mishra */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 sm:p-5 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide text-white font-['Orbitron'] group-hover:text-blue-400 transition-colors">
                    Shivam Mishra
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase">
                    MCA Graduate
                  </p>
                </div>
              </div>
            </div>

            {/* Karan Singh */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 sm:p-5 backdrop-blur-sm relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)]"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide text-white font-['Orbitron'] group-hover:text-indigo-400 transition-colors">
                    Karan Singh
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase">
                    MCA Graduate
                  </p>
                </div>
              </div>
            </div>

            {/* Arun Tiwari - [FIXED UNCLOSED DIV ERROR HERE] */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 sm:p-5 backdrop-blur-sm relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)]"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide text-white font-['Orbitron'] group-hover:text-indigo-400 transition-colors">
                    Arun Tiwari
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase">
                    B.Tech Graduate
                  </p>
                </div>
              </div>
            </div>

            {/* Gyanchand */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 sm:p-5 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide text-white font-['Orbitron'] group-hover:text-emerald-400 transition-colors">
                    Gyanchand
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase">
                    MCA Graduate
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= 5. COMPANY OFFICIAL SOCIAL LINKS WITH LOGOS ================= */}
        <div className="space-y-4 border-t border-slate-900/60 pt-6">
          <h3 className="text-xs font-bold tracking-[0.15em] text-slate-400 uppercase font-['Orbitron'] text-center">
            Connect With Our Agency
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* Instagram Official Page Link */}
            <a 
              href="https://www.instagram.com/shikargyansolutions/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2.5 bg-slate-900/50 border border-slate-900 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 font-['Orbitron'] tracking-wider"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>

            {/* LinkedIn Official Company Link */}
            <a 
              href="https://www.linkedin.com/in/shikargyansolutions/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2.5 bg-slate-900/50 border border-slate-900 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300 font-['Orbitron'] tracking-wider"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>

          </div>
        </div>

        {/* ================= 6. FOOT STAMPS ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-slate-900/60 pt-5">
          <div className="flex items-start space-x-3 bg-slate-900/10 p-3 rounded-xl border border-slate-900/60">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200 block mb-0.5 font-['Orbitron'] text-[9px] uppercase tracking-wider">Office Area:</strong> 
            Mumbai, Maharashtra, India // Active Node
            </p>
          </div>
          <div className="flex items-start space-x-3 bg-slate-900/10 p-3 rounded-xl border border-slate-900/60">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200 block mb-0.5 font-['Orbitron'] text-[9px] uppercase tracking-wider">Availability:</strong> 
              Remote support setup for worldwide clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;