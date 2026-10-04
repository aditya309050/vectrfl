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
            <Link to="/" aria-label="Vectr Consulting Home" className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93 16"
                fill="none"
                className="h-4 w-auto transition-colors duration-300"
              >
                <path
                  d="M9.69877 11.9986H9.49841L4.39929 0H0L5.703 13.4208C6.36614 14.9841 7.90123 15.9972 9.59718 15.9972C11.2959 15.9972 12.8282 14.9841 13.4914 13.4208L19.1972 0H14.7979L9.69877 11.9986Z"
                  fill={isTransparent ? '#FFFFFF' : '#050419'}
                />
                <path
                  d="M19.4286 3.99859V11.9986C19.4286 14.2081 21.2205 15.9972 23.4272 15.9972H35.4257V12.3965H23.4272V9.79753H33.8257V6.19683H23.4272V3.59788H35.4257V0H23.4272C21.2176 0 19.4286 1.79189 19.4286 3.99859Z"
                  fill={isTransparent ? '#FFFFFF' : '#050419'}
                />
                <path
                  d="M44.3598 3.99859H47.5598C49.0384 3.99859 50.328 4.80282 51.0194 5.99929H55.3058C54.4169 2.54815 51.2846 0 47.5598 0H44.3598C39.9407 0 36.3598 3.58095 36.3598 8C36.3598 12.419 39.9407 16 44.3598 16H47.5598C51.2875 16 54.4198 13.4519 55.3058 10.0007H51.0194C50.328 11.1944 49.0384 12.0014 47.5598 12.0014H44.3598C42.1503 12.0014 40.3612 10.2095 40.3612 8.00282C40.3612 5.79612 42.1531 4.00423 44.3598 4.00423V3.99859Z"
                  fill={isTransparent ? '#FFFFFF' : '#050419'}
                />
                <path
                  d="M56.0395 0V3.60071H62.0388V15.9972H66.0374V3.60071H72.0367V0H56.0395Z"
                  fill={isTransparent ? '#FFFFFF' : '#050419'}
                />
                <path
                  d="M92.5968 5.39824C92.5968 2.41552 90.1785 0 87.1986 0H77.4011C75.1915 0 73.4025 1.79189 73.4025 3.99859V15.9972H77.4011V10.7965H84.0409L88.2003 15.9972H92.5996L88.3414 10.6751C90.7739 10.1503 92.5996 7.98871 92.5996 5.39824H92.5968ZM88.5982 5.39824C88.5982 6.39153 87.7912 7.19859 86.7979 7.19859H77.3982V3.59788H86.7979C87.7912 3.59788 88.5982 4.40494 88.5982 5.39824Z"
                  fill={isTransparent ? '#FFFFFF' : '#050419'}
                />
              </svg>
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
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 93 16"
                    fill="none"
                    className="h-4 w-auto"
                  >
                    <path
                      d="M9.69877 11.9986H9.49841L4.39929 0H0L5.703 13.4208C6.36614 14.9841 7.90123 15.9972 9.59718 15.9972C11.2959 15.9972 12.8282 14.9841 13.4914 13.4208L19.1972 0H14.7979L9.69877 11.9986Z"
                      fill="#050419"
                    />
                    <path
                      d="M19.4286 3.99859V11.9986C19.4286 14.2081 21.2205 15.9972 23.4272 15.9972H35.4257V12.3965H23.4272V9.79753H33.8257V6.19683H23.4272V3.59788H35.4257V0H23.4272C21.2176 0 19.4286 1.79189 19.4286 3.99859Z"
                      fill="#050419"
                    />
                    <path
                      d="M44.3598 3.99859H47.5598C49.0384 3.99859 50.328 4.80282 51.0194 5.99929H55.3058C54.4169 2.54815 51.2846 0 47.5598 0H44.3598C39.9407 0 36.3598 3.58095 36.3598 8C36.3598 12.419 39.9407 16 44.3598 16H47.5598C51.2875 16 54.4198 13.4519 55.3058 10.0007H51.0194C50.328 11.1944 49.0384 12.0014 47.5598 12.0014H44.3598C42.1503 12.0014 40.3612 10.2095 40.3612 8.00282C40.3612 5.79612 42.1531 4.00423 44.3598 4.00423V3.99859Z"
                      fill="#050419"
                    />
                    <path
                      d="M56.0395 0V3.60071H62.0388V15.9972H66.0374V3.60071H72.0367V0H56.0395Z"
                      fill="#050419"
                    />
                    <path
                      d="M92.5968 5.39824C92.5968 2.41552 90.1785 0 87.1986 0H77.4011C75.1915 0 73.4025 1.79189 73.4025 3.99859V15.9972H77.4011V10.7965H84.0409L88.2003 15.9972H92.5996L88.3414 10.6751C90.7739 10.1503 92.5996 7.98871 92.5996 5.39824H92.5968ZM88.5982 5.39824C88.5982 6.39153 87.7912 7.19859 86.7979 7.19859H77.3982V3.59788H86.7979C87.7912 3.59788 88.5982 4.40494 88.5982 5.39824Z"
                      fill="#050419"
                    />
                  </svg>
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
