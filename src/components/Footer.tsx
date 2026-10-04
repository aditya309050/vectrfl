import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050419] text-[#FCFCFC] pt-16 pb-12 px-6 sm:px-12 mt-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Top 3 Navigation Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Link
            to="/services"
            className="footer-nav-card group border border-white/10"
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight">
              Our Services
            </span>
            <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#0F32DC] flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </div>
          </Link>

          <Link
            to="/case-studies"
            className="footer-nav-card group border border-white/10"
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight">
              Case Studies
            </span>
            <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#0F32DC] flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </div>
          </Link>

          <Link
            to="/about"
            className="footer-nav-card group border border-white/10"
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight">
              About
            </span>
            <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#0F32DC] flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </div>
          </Link>
        </div>

        {/* Bottom Bar with Logo & Meta */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93 16"
              fill="none"
              className="h-5 w-auto"
            >
              <path
                d="M9.69877 11.9986H9.49841L4.39929 0H0L5.703 13.4208C6.36614 14.9841 7.90123 15.9972 9.59718 15.9972C11.2959 15.9972 12.8282 14.9841 13.4914 13.4208L19.1972 0H14.7979L9.69877 11.9986Z"
                fill="#FCFCFC"
              />
              <path
                d="M19.4286 3.99859V11.9986C19.4286 14.2081 21.2205 15.9972 23.4272 15.9972H35.4257V12.3965H23.4272V9.79753H33.8257V6.19683H23.4272V3.59788H35.4257V0H23.4272C21.2176 0 19.4286 1.79189 19.4286 3.99859Z"
                fill="#FCFCFC"
              />
              <path
                d="M44.3598 3.99859H47.5598C49.0384 3.99859 50.328 4.80282 51.0194 5.99929H55.3058C54.4169 2.54815 51.2846 0 47.5598 0H44.3598C39.9407 0 36.3598 3.58095 36.3598 8C36.3598 12.419 39.9407 16 44.3598 16H47.5598C51.2875 16 54.4198 13.4519 55.3058 10.0007H51.0194C50.328 11.1944 49.0384 12.0014 47.5598 12.0014H44.3598C42.1503 12.0014 40.3612 10.2095 40.3612 8.00282C40.3612 5.79612 42.1531 4.00423 44.3598 4.00423V3.99859Z"
                fill="#FCFCFC"
              />
              <path
                d="M56.0395 0V3.60071H62.0388V15.9972H66.0374V3.60071H72.0367V0H56.0395Z"
                fill="#FCFCFC"
              />
              <path
                d="M92.5968 5.39824C92.5968 2.41552 90.1785 0 87.1986 0H77.4011C75.1915 0 73.4025 1.79189 73.4025 3.99859V15.9972H77.4011V10.7965H84.0409L88.2003 15.9972H92.5996L88.3414 10.6751C90.7739 10.1503 92.5996 7.98871 92.5996 5.39824H92.5968ZM88.5982 5.39824C88.5982 6.39153 87.7912 7.19859 86.7979 7.19859H77.3982V3.59788H86.7979C87.7912 3.59788 88.5982 4.40494 88.5982 5.39824Z"
                fill="#FCFCFC"
              />
            </svg>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Vectr Consulting, Inc. All rights reserved.</p>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
