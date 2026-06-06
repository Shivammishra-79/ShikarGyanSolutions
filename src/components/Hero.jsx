import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/logo.png';
import bannerImg from '../assets/banner.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-slate-950 text-white pt-24 sm:pt-28 pb-20 px-4 sm:px-6 font-['Plus_Jakarta_Sans']">
      
      {/* ================= 1. VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/85 z-10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 filter saturate-150 scale-105"
        >
          <source 
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d8bb800c5bc91060931db00ff3&profile_id=139&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-10"></div>

      {/* Main Container */}
      <div className="max-w-5xl w-full mx-auto relative z-20 flex flex-col gap-12 sm:gap-16">
        
        {/* ================= 2. HERO HEADLINE ================= */}
        <div className="text-center flex flex-col items-center pt-6 sm:pt-10">
          
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-60"></div>
            <img 
              src={myLogo} 
              alt="ShikarGyan Logo" 
              className="h-20 sm:h-28 md:h-32 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            />
          </div>

          <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-4 py-1.5 rounded-full mb-6 shadow-md backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 tracking-widest uppercase font-['Orbitron']">
              Modern Software Development Agency
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 font-['Orbitron'] uppercase">
            Introducing <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              ShikarGyan Solutions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-medium px-2">
            We build high-speed websites, custom mobile applications, and secure databases. Our digital tools help your business run smoothly and grow faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full sm:w-auto px-4 sm:px-0">
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-black bg-white rounded-xl shadow-xl hover:bg-slate-200 transition-all duration-300 font-['Orbitron'] uppercase tracking-wider text-center"
            >
              Our Work
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-slate-400 bg-slate-900/60 border border-slate-800 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 text-center backdrop-blur-md font-['Orbitron'] uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* ================= 3. AGENCY BANNER ================= */}
        <div className="relative w-full aspect-[1408/768] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-900 shadow-2xl bg-slate-900/40">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
          <img 
            src={bannerImg} 
            alt="ShikarGyan Workspace Banner" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20">
            <h4 className="text-xs sm:text-xl font-bold font-['Orbitron'] tracking-wider text-white uppercase">
              // Premium Code Studio
            </h4>
          </div>
        </div>

        {/* ================= 4. WHAT WE DO ================= */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-['Orbitron'] tracking-wide text-white uppercase">
              [01] Our Core Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Simple and modern tech layouts made for business growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/20 border border-slate-900 p-5 rounded-2xl backdrop-blur-sm">
              <div className="text-blue-400 text-xs font-bold tracking-widest font-['Orbitron'] mb-2">// WEB DEVELOPMENT</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We design clean and ultra-fast websites using modern frameworks like React.js to give your users an amazing experience.
              </p>
            </div>
            <div className="bg-slate-900/20 border border-slate-900 p-5 rounded-2xl backdrop-blur-sm">
              <div className="text-indigo-400 text-xs font-bold tracking-widest font-['Orbitron'] mb-2">// MOBILE APPS</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We develop powerful mobile applications for iOS and Android that work smoothly on every phone and screen size.
              </p>
            </div>
            <div className="bg-slate-900/20 border border-slate-900 p-5 rounded-2xl backdrop-blur-sm sm:col-span-2 md:col-span-1">
              <div className="text-purple-400 text-xs font-bold tracking-widest font-['Orbitron'] mb-2">// DATA & SECURITY</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We setup secure business databases and management ledgers to safely store your company logs and client files.
              </p>
            </div>
          </div>
        </div>

        {/* ================= 5. NEW CLIENT REVIEWS SECTION ================= */}
        <div className="space-y-6 border-t border-slate-900/60 pt-10">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-['Orbitron'] tracking-wide text-white uppercase">
              [02] Client Testimonials
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">See how we help business owners automate their daily operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Review 1 - Adv Umesh Suryawanshi */}
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-sm hover:border-slate-800 transition-colors">
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "ShikarGyan Solutions developed a custom Legal Management ERP and client appointment portal for my practice. It completely automated our manual files, client scheduling, and financial balance books. Exceptionally clean and fast work."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-950 flex justify-between items-center">
                <div>
                  <h5 className="text-xs font-bold font-['Orbitron'] text-white">Adv. Umesh Suryawanshi</h5>
                  <p className="text-[10px] text-blue-400 font-medium">Legal Consultant & Corporate Advocate</p>
                </div>
                <div className="text-amber-400 text-xs tracking-tight">★★★★★</div>
              </div>
            </div>

            {/* Review 2 - Enterprise Client */}
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-sm hover:border-slate-800 transition-colors">
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "We hired ShikarGyan to build a cross-platform web management application for our services tracking. The site layout is fully responsive on mobiles and tablets, and the custom tracking tools save our team hours of work every single week."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-950 flex justify-between items-center">
                <div>
                  <h5 className="text-xs font-bold font-['Orbitron'] text-white">Adv. Umesh Suryawanshi</h5>
                  <p className="text-[10px] text-indigo-400 font-medium">Legal Consultant & Corporate Advocate</p>
                </div>
                <div className="text-amber-400 text-xs tracking-tight">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 6. HOW WE WORK ================= */}
        <div className="space-y-6 border-t border-slate-900/60 pt-10">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-['Orbitron'] tracking-wide text-white uppercase">
              [03] Simple 4-Step Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">How we plan and build your high-performance business applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="p-4 bg-slate-900/10 border border-slate-950 rounded-xl">
              <span className="text-xs font-bold text-blue-500 font-['Orbitron']">01 / DISCUSS</span>
              <h5 className="text-xs font-bold font-['Orbitron'] text-white mt-1 uppercase">Understand Plan</h5>
              <p className="text-[11px] text-slate-500 mt-1">We study your specific business needs and map out the system strategy.</p>
            </div>
            <div className="p-4 bg-slate-900/10 border border-slate-950 rounded-xl">
              <span className="text-xs font-bold text-indigo-500 font-['Orbitron']">02 / BUILD</span>
              <h5 className="text-xs font-bold font-['Orbitron'] text-white mt-1 uppercase">Clean Coding</h5>
              <p className="text-[11px] text-slate-500 mt-1">Our team writes clean backend code, structures databases, and designs wrappers.</p>
            </div>
            <div className="p-4 bg-slate-900/10 border border-slate-950 rounded-xl">
              <span className="text-xs font-bold text-purple-500 font-['Orbitron']">03 / TEST</span>
              <h5 className="text-xs font-bold font-['Orbitron'] text-white mt-1 uppercase">Screen Check</h5>
              <p className="text-[11px] text-slate-500 mt-1">We double check everything on mobile, tablet, and desktops for perfect scaling.</p>
            </div>
            <div className="p-4 bg-slate-900/10 border border-slate-950 rounded-xl">
              <span className="text-xs font-bold text-emerald-500 font-['Orbitron']">04 / LIVE</span>
              <h5 className="text-xs font-bold font-['Orbitron'] text-white mt-1 uppercase">Launch Operations</h5>
              <p className="text-[11px] text-slate-500 mt-1">We deploy your platform securely onto live cloud servers for immediate usage.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;