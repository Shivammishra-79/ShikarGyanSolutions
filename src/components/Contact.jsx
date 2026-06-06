import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import myLogo from '../assets/logo.png'; // Popup aur heading ke liye logo

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Popup handle karne ke liye state
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const EMAILJS_SERVICE_ID = "service_iuo1q4g"; 
  const EMAILJS_TEMPLATE_ID = "template_31b6kzd"; 
  const EMAILJS_PUBLIC_KEY = "Ke2sdnubxnnqO0now";

  // Yeh useEffect automatic 5 second ka timer manage karega
  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000); // 5 Seconds timer as per your code

      // Clean up timer if component unmounts or popup closes early
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        setLoading(false);
        setShowPopup(true); // Email send hote hi popup screen par aayega
        setFormData({ name: '', mobile: '', email: '', message: '' });
    }, (error) => {
        alert("Transmission failed. Please check your network or try again.");
        console.log(error.text);
        loading(false);
    });
  };

  return (
    <section id="contact" className="bg-slate-950 text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden font-['Plus_Jakarta_Sans'] min-h-screen flex items-center justify-center">
      
      {/* Background Deep Tech Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto relative z-10 flex flex-col gap-6 sm:gap-8">
        
        {/* Simple but Futuristic Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase font-['Orbitron'] bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 font-medium px-2">
            Fill your details below to establish connection with our core network.
          </p>
        </div>

        {/* Clean High-Tech Form Container */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl relative">
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2 font-['Orbitron']">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500/60 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 outline-none transition-all duration-300"
              />
            </div>

            {/* Mobile Input */}
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2 font-['Orbitron']">Mobile Number</label>
              <input 
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500/60 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 outline-none transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2 font-['Orbitron']">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500/60 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 outline-none transition-all duration-300"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2 font-['Orbitron']">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Type your message here..."
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500/60 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-200 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 text-[10px] sm:text-xs font-bold text-black bg-white rounded-xl uppercase tracking-widest font-['Orbitron'] hover:bg-blue-500 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:bg-slate-800 disabled:text-slate-500 cursor-pointer"
            >
              {loading ? "Sending Data..." : "Send Message"}
            </button>

          </form>
        </div>

        {/* ================= OFFICIAL AGENCY SOCIAL MEDIA PLATFORMS ================= */}
        <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-4 text-center space-y-3">
          <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest font-['Orbitron']">
            Follow Our Official Handles
          </h4>
          <div className="flex items-center justify-center space-x-4">
            
            {/* Instagram Official Agency Link */}
            <a 
              href="https://www.instagram.com/shikargyansolutions/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-2 bg-slate-950 border border-slate-800/80 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 font-['Orbitron'] tracking-wider"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="hidden xs:inline">Instagram</span>
            </a>

            {/* LinkedIn Official Company Link */}
            <a 
              href="https://www.linkedin.com/in/shikargyansolutions/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-2 bg-slate-950 border border-slate-800/80 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300 font-['Orbitron'] tracking-wider"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="hidden xs:inline">LinkedIn</span>
            </a>

          </div>
        </div>

        {/* ================= PERMANENT LOCATION & SERVICE INFRASTRUCTURE GRID ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          <div className="flex items-start space-x-3 bg-slate-900/30 backdrop-blur-sm p-4 rounded-2xl border border-slate-900">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mt-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200 block mb-0.5 font-['Orbitron'] tracking-wider uppercase text-[10px]">Hub Location:</strong> 
              Mumbai, Maharashtra, India
            </p>
          </div>

          <div className="flex items-start space-x-3 bg-slate-900/30 backdrop-blur-sm p-4 rounded-2xl border border-slate-900">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200 block mb-0.5 font-['Orbitron'] tracking-wider uppercase text-[10px]">Service Delivery:</strong> 
              Fully Operational Globally // Remote Services Available for Everyone
            </p>
          </div>

        </div>

      </div>

      {/* ================= AUTOMATED MIDDLE POPUP MODAL ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Dark Backdrop Blur Background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          
          {/* Central Glassmorphic Popup Card */}
          <div className="relative bg-slate-900 border border-slate-800 max-w-md w-full rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(59,130,246,0.2)] z-10 flex flex-col items-center">
            
            {/* Big Glowing Logo Image inside Popup */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
              <img 
                src={myLogo} 
                alt="ShikarGyan Solutions" 
                className="h-16 sm:h-20 w-auto object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              />
            </div>

            {/* Simple English Heading */}
            <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white mb-2 sm:mb-3">
              Message Sent!
            </h3>

            {/* Simple English Content */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Thank you for connecting with us! ShikarGyan Solutions has received your message successfully. Our team will review your requirements and get back to you shortly.
            </p>

            <p className="text-[10px] text-slate-500">Closing automatically in few seconds...</p>

          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;