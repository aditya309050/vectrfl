import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`site-header transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent py-6 text-white'
            : 'bg-[#D0E1EB]/90 backdrop-blur-md py-4 shadow-sm text-[#050419]'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Left Nav */}
          <nav
            className={`hidden md:flex items-center gap-8 font-medium text-sm ${
              isTransparent ? 'text-white' : 'text-[#050419]'
            }`}
          >
            <Link
              to="/services"
              className="hover:opacity-75 transition-opacity uppercase tracking-wider text-xs font-semibold"
            >
              Our Services
            </Link>
            <Link
              to="/case-studies"
              className="hover:opacity-75 transition-opacity uppercase tracking-wider text-xs font-semibold"
            >
              Case Studies
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
            <Link to="/" aria-label="Kavix Home" className="block group">
              <span
                className={`text-xl md:text-2xl font-black tracking-[0.22em] transition-colors duration-300 uppercase select-none ${
                  isTransparent ? 'text-white' : 'text-[#050419]'
                }`}
              >
                KAVIX
              </span>
            </Link>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/about"
                className={`pill-btn h-11 px-6 min-h-[2.75rem] flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isTransparent
                    ? 'bg-white/15 border border-white/40 text-white backdrop-blur-md hover:bg-white/25 shadow-sm'
                    : 'pill-btn--glass'
                }`}
              >
                <span className="flex items-center justify-center leading-none">About</span>
              </Link>
              <Link
                to="/book-a-call"
                className={`pill-btn h-11 px-6 min-h-[2.75rem] flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isTransparent
                    ? 'bg-white text-[#050419] hover:bg-white/95 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] font-semibold'
                    : 'pill-btn--dark shadow-md'
                }`}
              >
                <span className="flex items-center justify-center leading-none">Book a Call</span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full backdrop-blur-md border p-2 focus:outline-none ${
                isTransparent ? 'bg-white/20 border-white/40 text-white' : 'bg-white/50 border-white/60 text-[#050419]'
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 rounded-full transition-transform duration-300 ${
                  isTransparent ? 'bg-white' : 'bg-[#050419]'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-opacity duration-300 ${
                  isTransparent ? 'bg-white' : 'bg-[#050419]'
                } ${mobileMenuOpen ? 'opacity-0' : 'mb-1'}`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-transform duration-300 ${
                  isTransparent ? 'bg-white' : 'bg-[#050419]'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050419]/40 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#D0E1EB] shadow-2xl p-8 flex flex-col justify-between border-l border-white/40">
            <div>
              <div className="flex justify-between items-center mb-10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Kavix Home">
                  <span className="text-xl font-black tracking-[0.22em] text-[#050419] uppercase select-none">
                    KAVIX
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-xl font-medium text-[#050419]">
                <li>
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-[#0F32DC] transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-[#0F32DC] transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-[#0F32DC] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-a-call"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-[#0F32DC] transition-colors"
                  >
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/50">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="pill-btn pill-btn--glass w-full text-center"
              >
                <span>About</span>
              </Link>
              <Link
                to="/book-a-call"
                onClick={() => setMobileMenuOpen(false)}
                className="pill-btn pill-btn--dark w-full text-center"
              >
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
