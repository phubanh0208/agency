import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Các trang chi tiết dịch vụ
import WebDesign from "@/pages/services/WebDesign";
import CoverDesign from "@/pages/services/CoverDesign";
import BannerDesign from "@/pages/services/BannerDesign";
import Tiktok from "@/pages/services/Tiktok";
import SocialMedia from "@/pages/services/SocialMedia";
import Strategy from "@/pages/services/Strategy";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <Routes>
          {/* Trang chủ */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Services />
                <About />
                <Portfolio />
                <Testimonials />
                <Contact />
              </main>
            }
          />

          {/* Các trang dịch vụ */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/cover-design" element={<CoverDesign />} />
          <Route path="/services/banner-design" element={<BannerDesign />} />
          <Route path="/services/tiktok" element={<Tiktok />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/strategy" element={<Strategy />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
