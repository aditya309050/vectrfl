import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { CaseStudies } from './pages/CaseStudies';
import { About } from './pages/About';
import { BookCall } from './pages/BookCall';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#D0E1EB] text-[#050419] selection:bg-[#0F32DC] selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-a-call" element={<BookCall />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Legacy route redirects */}
          <Route path="/industries" element={<Navigate to="/services" replace />} />
          <Route path="/our-mission" element={<Navigate to="/case-studies" replace />} />
          <Route path="/apply" element={<Navigate to="/about" replace />} />
          <Route path="/request-crew" element={<Navigate to="/book-a-call" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
