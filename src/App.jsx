import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About'; 
import Contact from './components/Contact'; 
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen'; // Naya components connect kiya

function App() {
  // Shuruat me loading true rahegi taaki Thank You screen dikhe
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        // Jab tak loading true hai, sirf Thank You animation dikhao
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        // 2.5 seconds baad jaise hi loading false hogi, poori website load ho jayegi smooth fade-in ke sath
        <div className="animate-fade-in">
          <BrowserRouter>
            <ScrollToTop /> 
            
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="about" element={<About />} /> 
                <Route path="contact" element={<Contact />} /> 
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;