import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About'; // Naya About component connect kiya
import Contact from './components/Contact'; 
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} /> {/* Naya About Page Route add kiya */}
          <Route path="contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;