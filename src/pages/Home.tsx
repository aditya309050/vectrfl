import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Cloud,
  Terminal,
  Zap,
  CheckCircle2,
  ChevronDown,
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  Layers,
  Sparkles
} from 'lucide-react';

export const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const video1Ref = React.useRef<HTMLVideoElement>(null);
  const video2Ref = React.useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  React.useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    v1.play().catch(() => {});

    const interval = setInterval(() => {
      const current = activeVideo === 1 ? v1 : v2;
      const next = activeVideo === 1 ? v2 : v1;

      if (current && current.duration && current.currentTime > current.duration - 2) {
        if (next.paused || next.currentTime < 0.1) {
          next.currentTime = 0;
          next.play().catch(() => {});
          setActiveVideo(activeVideo === 1 ? 2 : 1);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [activeVideo]);

  const steps = [
    {
      number: "01",
      title: "Discover & Plan",
      desc: "We understand your goals, requirements, users, and technical needs, then define the right approach, scope, and roadmap.",
      highlight: "Clear scope & roadmap",
      icon: (
        <div className="relative w-12 h-12 mb-6">
          <div className="w-8 h-8 rounded-md bg-[#7A2828] absolute bottom-0 left-0 shadow-sm" />
          <div className="w-7 h-7 rounded-full bg-[#E06D44] absolute -top-1 left-2 opacity-95 shadow-sm" />
        </div>
      )
    },
    {
      number: "02",
      title: "Design & Develop",
      desc: "We turn the plan into a polished digital product using modern technologies, clean architecture, and scalable development practices.",
      highlight: "Built for performance",
      icon: (
        <div className="relative w-12 h-12 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#D96B43] absolute bottom-1 left-0 opacity-95 shadow-sm" />
          <div className="w-8 h-8 rounded-full bg-[#7A2828] absolute bottom-1 left-4 opacity-95 shadow-sm" />
        </div>
      )
    },
    {
      number: "03",
      title: "Test & Deploy",
      desc: "We test across devices, browsers, and key user flows, fix issues, and deploy your product to a reliable production environment.",
      highlight: "Tested & production-ready",
      icon: (
        <div className="relative w-12 h-12 mb-6 flex items-center justify-start">
          <div className="w-10 h-10 rounded-full bg-[#C83B3B] flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 rounded-full bg-[#ECE5D8]" />
          </div>
        </div>
      )
    },
    {
      number: "04",
      title: "Optimize & Maintain",
      desc: "After launch, we monitor, optimize, fix bugs, and continuously improve your product as your business grows.",
      highlight: "Continuous growth & support",
      icon: (
        <div className="relative w-12 h-12 mb-6 flex flex-col items-center justify-center w-10">
          <div className="w-3.5 h-3.5 rounded-full bg-[#E06D44] mb-0.5 shadow-sm" />
          <div className="w-8 h-8 rounded-full bg-[#7A2828] shadow-sm" />
        </div>
      )
    }
  ];

  const faqs = [
    {
      tag: "Scope & Services",
      q: "What services does Vectr provide?",
      a: "We provide frontend and full-stack development, web development, API and payment integrations, SEO, deployment, testing, bug fixing, and ongoing maintenance."
    },
    {
      tag: "Full Lifecycle",
      q: "Can you build a website or application from scratch?",
      a: "Yes. We can handle the complete process from planning and development to testing, deployment, and post-launch support."
    },
    {
      tag: "Existing Systems",
      q: "Can you work on an existing website or application?",
      a: "Yes. We can fix bugs, add features, improve performance, optimize SEO, integrate third-party services, and maintain existing products."
    },
    {
      tag: "DevOps & SLA",
      q: "Do you provide deployment and maintenance?",
      a: "Yes. We can manage production deployment, hosting setup, updates, bug fixes, performance improvements, and ongoing maintenance."
    },
    {
      tag: "Integrations & APIs",
      q: "Can you integrate payments and third-party APIs?",
      a: "Yes. We can integrate payment gateways, APIs, authentication, analytics, CRMs, and other third-party services."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Full-Width Video Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-36 pb-16 px-6 sm:px-12 mb-24">
        {/* Full-Width Dual Seamless Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={video1Ref}
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              activeVideo === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src="/mixkit-clouds-and-blue-sky-background-2408-full-hd.mp4"
              type="video/mp4"
            />
          </video>
          <video
            ref={video2Ref}
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              activeVideo === 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src="/mixkit-clouds-and-blue-sky-background-2408-full-hd.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Cinematic Vignette Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70 pointer-events-none" />

        {/* Hero Content Overlaid on Video */}
        <div className="relative z-10 max-w-5xl w-full mx-auto my-auto flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] mb-6 drop-shadow-xl">
            We Build Digital Products <br className="hidden sm:inline" />
            That Move Businesses Forward.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl font-normal leading-relaxed mb-10 drop-shadow-md">
            From frontend and full-stack development to deployment, integrations, SEO, testing, and ongoing maintenance — we build reliable digital solutions from idea to production.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/services"
              className="btn-shimmer group relative px-10 py-4 min-h-[3.25rem] bg-[#F8F6F0] hover:bg-white text-[#050419] font-bold uppercase tracking-widest text-xs sm:text-sm rounded-md transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-105 inline-flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Explore Our Services</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Step Interactive Horizontal Expanding Boxes Section */}
      <section className="px-6 sm:px-12 max-w-[1600px] mx-auto mb-28">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-2">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050419]">
            From Idea to Production, Step by Step
          </h2>
        </div>

        {/* 4 Horizontal Expanding Boxes Container */}
        <div className="w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-[#D5CCBC] min-h-[460px] bg-[#ECE5D8]">
          {steps.map((step, idx) => {
            const isExpanded = activeStep === idx;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-500 ease-out border-b lg:border-b-0 lg:border-r border-[#D5CCBC] last:border-0 select-none ${
                  isExpanded
                    ? 'lg:flex-[2.6] bg-[#DDD4C4] shadow-inner'
                    : 'lg:flex-1 bg-[#ECE5D8] hover:bg-[#E5DDCF]'
                }`}
              >
                <div>
                  {/* Geometric Artistic Icon */}
                  <div className="flex items-center justify-between mb-4">
                    {step.icon}
                    <span className="text-xs font-mono font-bold text-[#211714]/40">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className={`font-bold tracking-tight text-[#211714] transition-all duration-300 mb-4 ${
                    isExpanded ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Step Description & Tag (Smooth Expand) */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded
                        ? 'opacity-100 max-h-96 translate-y-0'
                        : 'lg:opacity-0 lg:max-h-0 lg:-translate-y-2'
                    }`}
                  >
                    <p className="text-sm sm:text-base text-[#211714]/80 leading-relaxed mb-6 font-normal">
                      {step.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#211714]/10 text-[#211714] text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F32DC]" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 mt-6 border-t border-[#D5CCBC]/80 flex items-center justify-between text-xs text-[#211714]/60 font-medium">
                  <span className="uppercase tracking-wider font-semibold">Phase {step.number}</span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isExpanded ? 'bg-[#0F32DC] scale-125 ring-4 ring-[#0F32DC]/20' : 'bg-[#211714]/25'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practice Areas / Services Grid */}
      <section className="px-6 sm:px-12 max-w-[1600px] mx-auto mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-2">
              Full-Cycle Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050419]">
              Specialized Engineering Services
            </h2>
          </div>
          <Link to="/services" className="pill-btn pill-btn--dark shrink-0">
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Service Badges Ribbon */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {[
            "Frontend Development",
            "Full-Stack Development",
            "Web Development",
            "UI/UX Implementation",
            "API Integration",
            "Payment Integration",
            "Authentication",
            "Third-Party Integrations",
            "SEO",
            "Performance Optimization",
            "Testing & QA",
            "Deployment & DevOps",
            "Bug Fixing",
            "Maintenance & Support"
          ].map((srv, idx) => (
            <Link
              key={idx}
              to="/services"
              className="px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white text-xs font-semibold text-[#050419] border border-white/80 shadow-sm transition-all hover:scale-105"
            >
              • {srv}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#050419] mb-3">Frontend & Full-Stack Development</h3>
              <p className="text-sm text-[#050419]/75 leading-relaxed mb-6">
                Modern React, Next.js, and TypeScript applications engineered with scalable APIs, robust state management, and pixel-perfect responsiveness.
              </p>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#0F32DC] flex items-center gap-1 group-hover:underline">
              <span>Explore Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#050419] mb-3">APIs, Payments & Authentication</h3>
              <p className="text-sm text-[#050419]/75 leading-relaxed mb-6">
                Turnkey integration of payment systems, secure user authentications, custom APIs, and third-party software connections.
              </p>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#0F32DC] flex items-center gap-1 group-hover:underline">
              <span>Explore Integrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#050419] mb-3">SEO & Performance Optimization</h3>
              <p className="text-sm text-[#050419]/75 leading-relaxed mb-6">
                Fast loading speeds, technical search engine optimization, structured schema markup, and smooth Core Web Vitals for maximum visibility.
              </p>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#0F32DC] flex items-center gap-1 group-hover:underline">
              <span>Explore Optimization</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#050419] mb-3">Deployment & DevOps</h3>
              <p className="text-sm text-[#050419]/75 leading-relaxed mb-6">
                Automated release pipelines, reliable cloud hosting configuration, automated backups, and seamless zero-downtime shipping.
              </p>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#0F32DC] flex items-center gap-1 group-hover:underline">
              <span>Explore DevOps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#050419] mb-3">Testing & QA</h3>
              <p className="text-sm text-[#050419]/75 leading-relaxed mb-6">
                Comprehensive testing across devices, browsers, and critical user journeys to guarantee bug-free releases and rock-solid stability.
              </p>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#0F32DC] flex items-center gap-1 group-hover:underline">
              <span>Explore Testing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#050419] mb-3">Maintenance & Support</h3>
              <p className="text-sm text-[#050419]/75 leading-relaxed mb-6">
                Rapid bug fixing, proactive dependency and security updates, database tuning, and continuous technical support as your business scales.
              </p>
            </div>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#0F32DC] flex items-center gap-1 group-hover:underline">
              <span>Explore Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="px-6 sm:px-12 max-w-[1600px] mx-auto mb-28">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-[#0F32DC] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050419] mb-4">
            Questions? We've Got Answers.
          </h2>
          <p className="text-base sm:text-lg text-[#050419]/75 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our capabilities, delivery processes, and technical services.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setOpenFaq(idx)}
                className={`glass-card rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? 'border-[#0F32DC]/40 shadow-xl bg-white/90 scale-[1.005]'
                    : 'border-white/80 hover:border-[#0F32DC]/30 hover:shadow-md hover:bg-white/75'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-5 flex-1 pr-2">
                    {/* Index & Tag */}
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-[#0F32DC] text-white shadow-md'
                          : 'bg-[#050419]/5 text-[#050419]/70 group-hover:bg-[#0F32DC]/10 group-hover:text-[#0F32DC]'
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-[#050419] group-hover:text-[#0F32DC] transition-colors">
                        {faq.q}
                      </span>
                      <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide uppercase bg-black/5 text-[#050419]/60 border border-black/5">
                        {faq.tag}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#0F32DC] text-white rotate-180 shadow-md'
                        : 'bg-white/80 border border-white text-[#050419]/70 group-hover:bg-[#0F32DC]/10 group-hover:text-[#0F32DC]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Animated Body using CSS Grid Template Rows */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-7 pt-2 text-base text-[#050419]/80 leading-relaxed border-t border-black/5">
                      <div className="p-4 sm:p-5 rounded-xl bg-white/60 border border-white/80 shadow-inner flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0F32DC] shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-[#050419]/85 font-medium leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl glass-card border border-white/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#050419]">Have a question not listed here?</h4>
              <p className="text-xs sm:text-sm text-[#050419]/70">We're happy to discuss your specific technical scope or roadmap.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/book-a-call" className="pill-btn pill-btn--dark text-xs sm:text-sm px-5 py-2.5 flex items-center gap-1.5">
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/services" className="pill-btn pill-btn--glass text-xs sm:text-sm px-5 py-2.5">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-6 sm:px-12 max-w-[1600px] mx-auto">
        <div className="rounded-3xl bg-[#050419] text-white p-10 sm:p-20 relative overflow-hidden text-center flex flex-col items-center shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0F32DC_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#57cdff] mb-4 relative z-10">
            Immediate Tactical Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mb-6 relative z-10 leading-tight">
            Protect your schedule, modernize your systems, and scale with confidence.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 relative z-10">
            Schedule a direct technical consultation with our principal architects today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/book-a-call" className="pill-btn pill-btn--light text-base px-8 py-3.5">
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/case-studies" className="pill-btn pill-btn--glass text-white border-white/20 hover:bg-white/10 text-base px-8 py-3.5">
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
