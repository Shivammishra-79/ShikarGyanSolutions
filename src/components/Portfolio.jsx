import React from 'react';
// Agar aap assets folder se image path import karna chahte hain toh line uncomment karein:
// import smartLearningImg from '../assets/image_ff70a7.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "Adv. Umesh Suryawanshi Legal ERP",
      category: "Full-Stack Enterprise Software",
      desc: "A comprehensive Legal ERP platform designed to completely digitize law practice operations. This system integrates a premium client portal for online session bookings, a robust Admin Dashboard for service configuration, blog posts management, and a financial ledger that automates GST-ready income and expense tracking modules seamlessly.",
      techStack: ["React.js", "FastAPI", "Python", "TiDB Cloud", "MySQL", "Tailwind CSS", "Render"],
      projectLink: "https://adv-surya.vercel.app/",
      btnText: "Launch Live Site",
      glow: "hover:shadow-blue-500/10 hover:border-blue-500/30",
      hasImage: false
    },
    {
      title: "Eagle Force Security & Facility Suite",
      category: "Industrial & Management Web Control",
      desc: "An all-in-one corporate facility and security management powerhouse built to automate CCTV surveillance configurations, professional housekeeping logs, and society administration data matrices. Everything runs through a high-performance, interactive 'Cyber-UI' layout dashboard designed for instant enterprise scaling.",
      techStack: ["React.js", "Framer Motion", "React Router v6", "MS SQL Server", "Supabase", "Lucide Icons"],
      projectLink: "https://www.eagleforce.in/",
      btnText: "Launch Cyber Portal",
      glow: "hover:shadow-indigo-500/10 hover:border-indigo-500/30",
      hasImage: false
    },
    {
      title: "Smart Learning Mobile App",
      category: "Academic Android Engineering",
      desc: "A scalable educational application built using structured mobile design patterns. Features localized personalized learning paths, responsive course selection navigation, offline accessibility tools, a secure student user profile configuration engine, and a simulated mock payment gateway interface layout.",
      techStack: ["Android Studio", "Java", "XML", "Firebase OOP", "Unit Testing"],
      projectLink: null, // No link available
      btnText: "Academic Project",
      glow: "hover:shadow-purple-500/10 hover:border-purple-500/30",
      hasImage: true
    }
  ];

  return (
    <section id="portfolio" className="bg-slate-950 text-white pt-28 sm:pt-32 pb-24 px-4 sm:px-6 relative font-['Plus_Jakarta_Sans']">
      
      {/* Background Subtle Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/5 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Heading Element */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-widest uppercase font-['Orbitron']">
              Production Repositories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-['Orbitron'] uppercase">
            Our Featured Work
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Explore our real-world system deployments. We specialize in building reliable, high-performance architectures, secure business software, and clean responsive mobile user applications.
          </p>
        </div>

        {/* Project Grid Layout - 100% Fluid Mobile, Tablet, and Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-slate-900/20 border border-slate-900 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:bg-slate-900/40 hover:-translate-y-1 ${project.glow}`}
            >
              <div>
                {/* Category System Badge */}
                <span className="text-[9px] sm:text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-950/30 border border-blue-900/40 px-2.5 py-1 rounded-md mb-4 inline-block font-['Orbitron']">
                  {project.category}
                </span>

                {/* Highly Readable Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors font-['Orbitron'] uppercase tracking-wide">
                  {project.title}
                </h3>

                {/* Simplified English Description Layout */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-6">
                  {project.desc}
                </p>

                {/* IF THE PROJECT HAS IMAGE SHOWCASE (Academic App) */}
                {project.hasImage && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-slate-900 bg-slate-950 p-2 group-hover:border-slate-800 transition-colors">
                    {/* 
                      Aap direct static file public folder se render kar sakte ho: 
                      ya fir upar uncomment karke imported asset src={smartLearningImg} use kar sakte ho.
                    */}
                    <img 
                      src="/image_ff70a7.jpg" 
                      alt="Smart Learning Android Application Mockup Views" 
                      className="w-full h-auto max-h-40 object-cover object-top rounded-lg opacity-85 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        // Image missing fallback placeholder layout
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Bottom Layout Block: Tech Tags + Dynamic CTA Action */}
              <div className="space-y-4">
                {/* Tech Badges Container */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900/60">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] sm:text-[10px] font-semibold text-slate-400 bg-slate-950 border border-slate-900 px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Context Router Button Interaction */}
                {project.projectLink ? (
                  <a 
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block px-4 py-2.5 text-center text-xs font-bold text-black bg-white rounded-xl hover:bg-slate-200 transition-all font-['Orbitron'] uppercase tracking-wider"
                  >
                    {project.btnText} →
                  </a>
                ) : (
                  <div className="w-full block px-4 py-2.5 text-center text-xs font-bold text-slate-500 bg-slate-900/50 border border-slate-900 rounded-xl font-['Orbitron'] uppercase tracking-wider select-none">
                    {project.btnText}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;