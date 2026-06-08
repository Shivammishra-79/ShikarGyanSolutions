import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/logo.png';
import bannerImg from '../assets/banner.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#030712] text-white pt-24 sm:pt-28 pb-20 px-4 sm:px-6 font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* ================= 1. KHATARNAK ANIMATED CYBER GRID BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-30%)',
            animation: 'grid-move 20s linear infinite',
          }}
        ></div>
        
        {/* Deep Overlay Gradients for Cinematic Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,#030712_80%)] z-10"></div>
      </div>

      {/* Extreme Neon Glows (Pulse & Float Effect) */}
      <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[180px] pointer-events-none z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none z-10 animate-pulse duration-[4000ms]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[200px] pointer-events-none z-10"></div>

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto relative z-20 flex flex-col gap-16 sm:gap-20">
        
        {/* ================= 2. HERO HEADLINE ================= */}
        <div className="text-center flex flex-col items-center pt-8 sm:pt-12">
          
          {/* Logo with Insane Glow */}
          <div className="relative mb-8 group cursor-pointer">
            <div className="absolute inset-0 bg-blue-500/40 blur-3xl rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
            <img 
              src={myLogo} 
              alt="ShikarGyan Logo" 
              className="h-24 sm:h-32 md:h-36 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-110 filter drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]"
            />
          </div>

          {/* Badges with Cyber Style */}
          <div className="inline-flex items-center space-x-2 bg-slate-950 border border-blue-500/30 px-5 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-xl animate-bounce duration-[3000ms]">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 tracking-widest uppercase font-['Orbitron']">
              SYSTEM LEVEL_ DEPLOYMENT // ACTIVE
            </span>
          </div>

          {/* Glitch-styled Shimmer Text */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] mb-8 font-['Orbitron'] uppercase">
            Introducing <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              ShikarGyan Solutions
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-medium px-4">
            We build high-speed websites, custom mobile applications, and secure databases. Our digital tools help your business run smoothly and grow faster.
          </p>

          {/* Cyberpunk Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto px-6 sm:px-0">
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto px-10 py-4 text-sm font-bold text-black bg-white rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 font-['Orbitron'] uppercase tracking-wider text-center group relative overflow-hidden"
            >
              <span className="relative z-10">Our Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
              {/* Text color shift on hover */}
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold tracking-wider">Our Work</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-4 text-sm font-bold text-slate-300 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 text-center backdrop-blur-xl font-['Orbitron'] uppercase tracking-wider group"
            >
              Contact Us
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-blue-400">→</span>
            </Link>
          </div>
        </div>

        {/* ================= 3. AGENCY BANNER (Sci-Fi Frame) ================= */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-slate-950 group hover:border-blue-500/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
          <img 
            src={bannerImg} 
            alt="ShikarGyan Workspace Banner" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out filter brightness-90 saturate-125"
          />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20">
            <h4 className="text-sm sm:text-2xl font-bold font-['Orbitron'] tracking-wider text-white uppercase flex items-center gap-3 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
              <span className="w-8 h-px bg-blue-500 animate-pulse"></span>
              Premium Code Studio
            </h4>
          </div>
          {/* Cyber Glaze Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        </div>

        {/* ================= 4. WHAT WE DO (Glow Cards) ================= */}
        <div className="space-y-10">
          <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Orbitron'] tracking-wide text-white uppercase flex items-center gap-3 justify-center sm:justify-start">
                <span className="text-blue-500 animate-pulse">[01]</span> Our Core Services
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">Simple and modern tech layouts made for business growth.</p>
            </div>
            <Link to="/services" className="text-xs font-bold text-blue-400 font-['Orbitron'] uppercase tracking-widest hover:text-blue-300 hover:tracking-widest transition-all">View All Services →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {title: "WEB DEVELOPMENT", desc: "We design clean and ultra-fast websites using modern frameworks like React.js to give your users an amazing experience.", color: "text-blue-400", icon: "🌐", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"},
              {title: "MOBILE APPS", desc: "We develop powerful mobile applications for iOS and Android that work smoothly on every phone and screen size.", color: "text-indigo-400", icon: "📱", glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"},
              {title: "DATA & SECURITY", desc: "We setup secure business databases and management ledgers to safely store your company logs and client files.", color: "text-purple-400", icon: "🔐", glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"}
            ].map((service, index) => (
              <div key={index} className={`bg-slate-950 border border-slate-900 p-7 rounded-3xl backdrop-blur-xl hover:border-slate-700 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden ${service.glow}`}>
                <div className="absolute -bottom-10 -right-10 text-9xl opacity-[0.02] group-hover:opacity-[0.07] group-hover:scale-125 transition-all duration-500">{service.icon}</div>
                <div className={`${service.color} text-xs font-bold tracking-widest font-['Orbitron'] mb-3`}>// {service.title}</div>
                <p className="text-sm text-slate-400 group-hover:text-slate-200 leading-relaxed relative z-10 transition-colors duration-300">
                  {service.desc}
                </p>
                {/* Micro Border Glow */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 5. CLIENT REVIEWS ================= */}
        <div className="space-y-10 border-t border-slate-900 pt-16">
          <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Orbitron'] tracking-wide text-white uppercase flex items-center gap-3 justify-center sm:justify-start">
                <span className="text-indigo-500">[02]</span> Client Testimonials
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">See how we help business owners automate their daily operations.</p>
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm justify-center bg-slate-950 px-4 py-2 border border-slate-900 rounded-full">★★★★★ <span className="text-slate-500 text-xs ml-1">(5.0 Avg Rating)</span></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "ShikarGyan Solutions developed a custom Legal Management ERP and client appointment portal for my practice. It completely automated our manual files, client scheduling, and financial balance books. Exceptionally clean and fast work.",
                name: "Adv. Umesh Suryawanshi",
                title: "Legal Consultant & Corporate Advocate",
                color: "text-blue-400"
              },
              {
                quote: "We hired ShikarGyan to build a cross-platform web management application for our services tracking. The site layout is fully responsive on mobiles and tablets, and the custom tracking tools save our team hours of work every single week.",
                name: "Enterprise Client",
                title: "Services Industry Leader",
                color: "text-indigo-400"
              }
            ].map((review, index) => (
              <div key={index} className="bg-slate-950/60 border border-slate-900 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-xl hover:border-slate-800 transition-all duration-300 relative group overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="absolute top-6 right-8 text-6xl opacity-5 group-hover:opacity-10 transition-opacity font-serif">“</div>
                <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 italic leading-relaxed mb-6 relative z-10 transition-colors">
                  "{review.quote}"
                </p>
                <div className="mt-auto pt-6 border-t border-slate-900 flex justify-between items-center gap-4 relative z-10">
                  <div>
                    <h5 className="text-sm font-bold font-['Orbitron'] text-white">{review.name}</h5>
                    <p className={`text-xs ${review.color} font-medium mt-0.5`}>{review.title}</p>
                  </div>
                  <div className="text-amber-400 text-sm tracking-tight flex-shrink-0">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 6. HOW WE WORK ================= */}
        <div className="space-y-10 border-t border-slate-900 pt-16 mb-10">
          <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Orbitron'] tracking-wide text-white uppercase flex items-center gap-3 justify-center sm:justify-start">
                <span className="text-purple-500">[03]</span> Simple 4-Step Process
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">How we plan and build your high-performance business applications.</p>
            </div>
            <button className="text-xs font-bold text-purple-400 font-['Orbitron'] uppercase tracking-widest hover:text-purple-300 transition-colors">Learn More About Process</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center md:text-left">
            {[
              {step: "01 / DISCUSS", title: "Understand Plan", desc: "We study your specific business needs and map out the system strategy.", color: "text-blue-500", border: "hover:border-blue-500/50"},
              {step: "02 / BUILD", title: "Clean Coding", desc: "Our team writes clean backend code, structures databases, and designs wrappers.", color: "text-indigo-500", border: "hover:border-indigo-500/50"},
              {step: "03 / TEST", title: "Screen Check", desc: "We double check everything on mobile, tablet, and desktops for perfect scaling.", color: "text-purple-500", border: "hover:border-purple-500/50"},
              {step: "04 / LIVE", title: "Launch Operations", desc: "We deploy your platform securely onto live cloud servers for immediate usage.", color: "text-emerald-500", border: "hover:border-emerald-500/50"}
            ].map((item, index) => (
              <div key={index} className={`p-6 bg-slate-950 border border-slate-900 rounded-2xl group transition-all duration-300 ${item.border} hover:shadow-lg`}>
                <span className={`text-xs font-bold ${item.color} font-['Orbitron'] tracking-wider`}>{item.step}</span>
                <h5 className="text-sm font-bold font-['Orbitron'] text-white mt-2 uppercase transition-colors tracking-wide">{item.title}</h5>
                <p className="text-[12px] sm:text-xs text-slate-400 mt-2 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;