import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Pause,
  ChevronDown,
  Plus
} from 'lucide-react';
import { FluidHeroAnimation } from '../components/FluidHeroAnimation';

export const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const faqs = [
    {
      tag: "Scope & Services",
      q: "What services does Kavix provide?",
      a: "We provide frontend and full-stack web engineering, mobile app development (iOS & Android), brand identity systems, API & cloud architecture, payment integrations, SEO optimization, and ongoing product maintenance."
    },
    {
      tag: "Full Lifecycle",
      q: "Can you build a platform from scratch?",
      a: "Yes. We handle end-to-end execution from initial scoping, wireframes, and UI design to production full-stack code, cloud deployment, and App Store releases."
    },
    {
      tag: "Fixed Milestones",
      q: "How do you price and structure engagements?",
      a: "We operate with clear, transparent fixed-milestone pricing and agile sprint roadmaps. No hidden agency overheads or unexpected retainers."
    },
    {
      tag: "Ownership & Code",
      q: "Do we get 100% intellectual property ownership?",
      a: "Yes. You own 100% of all code, assets, database schemas, and documentation from day one with clean Git repositories and deployment runbooks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050419] text-[#FCFCFC] selection:bg-[#0F32DC] selection:text-white">
      {/* 1. CINEMATIC HERO (Liquid Obsidian & Molten Chrome WebGL Shader) */}
      <section className="relative w-full h-[92vh] sm:h-[96vh] lg:h-screen min-h-[650px] flex flex-col justify-between overflow-hidden bg-black">
        {/* Fullscreen Liquid Obsidian Shader */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <FluidHeroAnimation isPlaying={isPlaying} />
          {/* Subtle Dark Studio Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
        </div>

        {/* Top Spacer */}
        <div className="relative z-10 pt-20" />

        {/* Center: Massive Bold Studio Title & Play Reel Interaction */}
        <div className="relative z-10 my-auto text-center px-6 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-9xl md:text-[130px] lg:text-[170px] font-black tracking-[-0.04em] text-white leading-none select-none uppercase mb-6 drop-shadow-2xl"
          >
            KAVIX
          </motion.h1>

          {/* Interactive Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            aria-label="Toggle Hero Fluid Reel"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white shadow-2xl hover:border-white hover:bg-white/20 transition-all duration-300 group cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1 group-hover:scale-110 transition-transform" />
            )}
          </motion.button>
        </div>

        {/* Bottom Spacer */}
        <div className="relative z-10 pb-6" />
      </section>

      {/* 2. FLUID WORK ARCHIVE (The Kurage Asymmetric Showcase) */}
      <section className="bg-white text-[#050419] py-24 sm:py-32 px-6 sm:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050419] text-white text-xs font-medium tracking-wide mb-4">
                <Plus className="w-3.5 h-3.5" />
                <span>Selected Works</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#050419] leading-none">
                Featured Projects.
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="pill-btn pill-btn--dark self-start md:self-auto text-xs sm:text-sm px-6 py-3 flex items-center gap-2"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric Showcase Grid */}
          <div className="space-y-8 sm:space-y-12">
            {/* 1. Full-Width Video Showcase (Synchrony) */}
            <Link
              to="/case-studies"
              className="block relative w-full h-[450px] sm:h-[600px] lg:h-[700px] rounded-3xl sm:rounded-[36px] overflow-hidden group shadow-xl border border-black/5"
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&auto=format&fit=crop&q=80"
                alt="Synchrony"
                className="w-full h-full object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Kurage Frosted Glass Hover Overlay (cHoverDiv) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 sm:p-14">
                <div className="w-full p-6 sm:p-10 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#57cdff] block mb-2">
                      DA VINCI // FULL-STACK
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
                      Synchrony
                    </h3>
                    <div className="w-12 h-0.5 bg-white mb-2" />
                    <p className="text-xs sm:text-sm text-white/80 font-normal">
                      The synchrony of sound, code, and optics
                    </p>
                  </div>
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#050419] font-bold text-xs uppercase tracking-wider self-start sm:self-auto shrink-0 shadow-md">
                    View Project
                  </span>
                </div>
              </div>
            </Link>

            {/* 2. Side-by-Side Pair: Endless Knot + Ping Pong */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <Link
                to="/case-studies"
                className="block relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden group shadow-lg border border-black/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&auto=format&fit=crop&q=80"
                  alt="Endless Knot"
                  className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-10">
                  <div className="w-full p-6 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#57cdff] block mb-1">
                        Branding & Web
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold">Endless Knot</h4>
                      <p className="text-xs text-white/80">Woven for the vogue</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>

              <Link
                to="/case-studies"
                className="block relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden group shadow-lg border border-black/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
                  alt="Ping Pong"
                  className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-10">
                  <div className="w-full p-6 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#57cdff] block mb-1">
                        Originals // Motion
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold">Ping Pong</h4>
                      <p className="text-xs text-white/80">Let's go crazy.</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            </div>

            {/* 3. Side-by-Side Pair: Payoneer + VCC Hospital */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <Link
                to="/case-studies"
                className="block relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden group shadow-lg border border-black/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
                  alt="Payoneer"
                  className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-10">
                  <div className="w-full p-6 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#57cdff] block mb-1">
                        Fintech Platform
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold">Payoneer</h4>
                      <p className="text-xs text-white/80">Cross-border scale & financial systems</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>

              <Link
                to="/case-studies"
                className="block relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden group shadow-lg border border-black/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80"
                  alt="VCC Hospital"
                  className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-10">
                  <div className="w-full p-6 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#57cdff] block mb-1">
                        Healthcare UX
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold">VCC</h4>
                      <p className="text-xs text-white/80">We keep your heart in shape</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            </div>

            {/* 4. Full-Width Showcase (WileyNXT) */}
            <Link
              to="/case-studies"
              className="block relative w-full h-[450px] sm:h-[580px] rounded-3xl sm:rounded-[36px] overflow-hidden group shadow-xl border border-black/5"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80"
                alt="WileyNXT"
                className="w-full h-full object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 sm:p-14">
                <div className="w-full p-6 sm:p-10 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/20 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#57cdff] block mb-2">
                      EDTECH // BRAND & PLATFORM
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
                      WileyNXT
                    </h3>
                    <div className="w-12 h-0.5 bg-white mb-2" />
                    <p className="text-xs sm:text-sm text-white/80 font-normal">
                      Empowering the next generation of digital learning
                    </p>
                  </div>
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#050419] font-bold text-xs uppercase tracking-wider self-start sm:self-auto shrink-0 shadow-md">
                    View Case Study
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* 4. FAQ ACCORDION SECTION (Full-Width Balanced 2-Column Layout) */}
      <section className="bg-white text-[#050419] py-24 sm:py-32 px-6 sm:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0F32DC] block font-mono">
                EVERYTHING ANSWERED
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#050419] leading-[1.1]">
                Frequently Asked Questions.
              </h2>
              <p className="text-sm sm:text-base text-[#050419]/70 leading-relaxed font-normal pt-2">
                Have questions about our technical capabilities, pricing, sprint roadmaps, or IP handoffs? Here's everything you need to know.
              </p>
              <div className="pt-4">
                <Link
                  to="/book-a-call"
                  className="pill-btn pill-btn--dark inline-flex items-center gap-2 text-xs sm:text-sm px-6 py-3 font-semibold shadow-md"
                >
                  <span>Still have questions? Let's talk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Accordion spanning full right width */}
            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setOpenFaq(idx)}
                    className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen
                        ? 'border-[#0F32DC]/40 bg-black/[0.02] shadow-md'
                        : 'border-black/10 hover:border-black/20 hover:bg-black/[0.01]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                          isOpen ? 'bg-[#0F32DC] text-white' : 'bg-[#050419] text-white'
                        }`}>
                          0{idx + 1}
                        </span>
                        <span className="text-base sm:text-lg md:text-xl font-bold text-[#050419]">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#0F32DC]' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-7 pt-1 text-sm sm:text-base text-[#050419]/75 leading-relaxed border-t border-black/5 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
