import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden">
      {/* Navbar fixed rahega */}
      <Navbar />
      
      {/* Outlet ka matlab hai jo bhi current page (Home, Services etc.) hoga wo yahan load hoga */}
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      
      {/* Footer automatic har page ke niche aayega */}
      <Footer />
    </div>
  );
};

export default Layout;