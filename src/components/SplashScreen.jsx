import React, { useEffect, useState, useRef } from 'react';
import myLogo from '../assets/logo.png';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // ================= DYNAMIC FLOATING BALLOONS / PARTICLES EFFECT =================
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Canvas size setup
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Balloon/Particle Blueprint
    class FloatingBalloon {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100; // Screen ke neeche se shuru hoga
        this.radius = Math.random() * 15 + 10; // Balloon size
        this.speed = Math.random() * 1.5 + 0.5; // Upar udne ki speed
        this.wobble = Math.random() * 2; // Hawa me thoda hilne ke liye
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        // Premium corporate color palette (Blue & Purple translucent shades)
        const colors = ['rgba(59, 130, 246, 0.25)', 'rgba(99, 102, 241, 0.25)', 'rgba(168, 85, 247, 0.25)', 'rgba(6, 182, 212, 0.25)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speed; // Neeche se upar udna
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.5; // Side-to-side natural float movement

        // Agar balloon top se bahar nikal jaye, to wapas neeche se reset hoga
        if (this.y < -this.radius) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        // Drawing the main balloon structure
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Drawing small string/tail for realistic balloon look
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.radius);
        ctx.lineTo(this.x, this.y + this.radius + 8);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();
      }
    }

    // Initialize 30 floating balloons
    const balloonArray = [];
    for (let i = 0; i < 30; i++) {
      balloonArray.push(new FloatingBalloon());
    }

    // Animation Loop Runtime
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balloonArray.forEach(balloon => {
        balloon.update();
        balloon.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // 4 seconds automatic cleanup timeout
    const timer = setTimeout(() => {
      handleClose();
    }, 4000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 500);
  };

  return (
    <div 
      className={`fixed inset-0 bg-slate-950 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out overflow-hidden ${
        fadeOut ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100'
      }`}
    >
      {/* Dynamic Interactive Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none z-0" />

      {/* Top Right Skip Button */}
      <button 
        onClick={handleClose}
        className="absolute top-6 right-6 z-50 text-slate-400 hover:text-white border border-slate-900 bg-slate-950/90 px-4 py-2 rounded-lg text-[10px] font-mono tracking-widest uppercase transition-all duration-300 hover:border-slate-700 active:scale-95 cursor-pointer"
      >
        SKIP INTERFACE ✕
      </button>

      {/* Grid Overlay for Premium Look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Center Display Box */}
      <div className="relative flex flex-col items-center text-center px-6 z-10 select-none animate-[fadeIn_0.8s_ease-out]">
        
        {/* Core Identity Image */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-60"></div>
          <img 
            src={myLogo} 
            alt="ShikarGyan" 
            className="h-20 sm:h-24 w-auto object-contain relative z-10 filter drop-shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-[pulse_3s_infinite]"
          />
        </div>

        {/* Minimal Connection Standard Tag */}
        <div className="inline-flex items-center space-x-2 bg-slate-950 border border-slate-900 px-4 py-1.5 rounded-md mb-6 shadow-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)] animate-ping"></span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-slate-500 uppercase font-['Orbitron']">
            [ INCOMING_CONNECTION_ESTABLISHED ]
          </span>
        </div>

        {/* Premium Corporate English Text */}
        <h2 className="text-3xl sm:text-4xl font-black font-['Orbitron'] tracking-[0.15em] text-white uppercase mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          THANK YOU FOR VISITING
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide max-w-lg leading-relaxed font-['Plus_Jakarta_Sans'] px-4">
          We truly appreciate you taking the time to explore our digital platform. <br />
          <span className="text-blue-400 font-semibold font-mono text-xs tracking-widest uppercase mt-2 block">
            Preparing your ShikarGyan workspace experience...
          </span>
        </p>

        {/* Premium Loading Progress Element */}
        <div className="w-48 h-[2px] bg-slate-900 overflow-hidden mt-10 rounded-full relative">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 w-full rounded-full origin-left animate-loading-bar"></div>
        </div>

        {/* System Build Specs */}
        <span className="text-[8px] font-mono text-slate-700 tracking-[0.3em] uppercase mt-6 block">
          CORE_ENGINE_v2.06 // PRODUCTION_LIVE
        </span>

      </div>
    </div>
  );
};

export default SplashScreen;