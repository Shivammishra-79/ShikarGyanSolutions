import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: "Web Development & Architecture",
      desc: "We build fast, ultra-responsive, and modern websites and custom web portals tailored to optimize your business operations online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      glow: "group-hover:shadow-blue-500/10"
    },
    {
      title: "Mobile App Development",
      desc: "Designing and engineering seamless, high-performance cross-platform mobile applications to keep your business connected with users anywhere.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      glow: "group-hover:shadow-indigo-500/10"
    },
    {
      title: "Database (DBA) Solutions",
      desc: "Providing robust, secure, and optimized database design, management, and migration services to ensure your business data is hamesha safe and fast.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      glow: "group-hover:shadow-purple-500/10"
    },
    {
      title: "Data Analytics Services",
      desc: "Transforming raw data into actionable business insights. We build custom dashboards and analytical pipelines to drive smart decision-making.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      glow: "group-hover:shadow-emerald-500/10"
    },
    {
      title: "Custom Digital Cards & Assets",
      desc: "Crafting minimalist, modern, and interactive digital business cards and professional brand layouts to give your business a polished identity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      glow: "group-hover:shadow-amber-500/10"
    }
  ];

  return (
   // Pehle line ko change karke aisi kar do:
<section id="services" className="bg-slate-950 text-white pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">What We Offer</h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight">
            Our Core Expertise
          </p>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Delivering clean, scalable, and high-quality technical solutions tailored for enterprise demand.
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-slate-900/40 border border-slate-900 rounded-2xl p-8 hover:bg-slate-900/80 hover:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.glow}`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300 mb-6">
                {service.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;