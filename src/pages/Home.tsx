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
          {[
            {
              index: "01",
              tag: "Architecture & UI",
              title: "Frontend & Full-Stack Development",
              desc: "Modern React, Next.js, and TypeScript applications engineered with scalable APIs, robust state management, and pixel-perfect responsiveness.",
              chips: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"],
              linkText: "Explore Development",
              to: "/services"
            },
            {
              index: "02",
              tag: "Security & Flows",
              title: "APIs, Payments & Authentication",
              desc: "Turnkey integration of payment systems, secure user authentications, custom APIs, and third-party software connections.",
              chips: ["Stripe", "OAuth 2.0", "REST / GraphQL", "Webhooks"],
              linkText: "Explore Integrations",
              to: "/services"
            },
            {
              index: "03",
              tag: "Growth & Speed",
              title: "SEO & Performance Optimization",
              desc: "Fast loading speeds, technical search engine optimization, structured schema markup, and smooth Core Web Vitals for maximum visibility.",
              chips: ["Core Web Vitals", "SSR / Edge", "Lighthouse 95+", "Schema"],
              linkText: "Explore Optimization",
              to: "/services"
            },
            {
              index: "04",
              tag: "Infrastructure",
              title: "Deployment & DevOps",
              desc: "Automated release pipelines, reliable cloud hosting configuration, automated backups, and seamless zero-downtime shipping.",
              chips: ["Docker", "GitHub Actions", "AWS / Cloudflare", "CI/CD"],
              linkText: "Explore DevOps",
              to: "/services"
            },
            {
              index: "05",
              tag: "Reliability & QA",
              title: "Testing & QA",
              desc: "Comprehensive testing across devices, browsers, and critical user journeys to guarantee bug-free releases and rock-solid stability.",
              chips: ["Playwright", "Cypress", "Vitest", "E2E Testing"],
              linkText: "Explore Testing",
              to: "/services"
            },
            {
              index: "06",
              tag: "SLA & Maintenance",
              title: "Maintenance & Support",
              desc: "Rapid bug fixing, proactive dependency and security updates, database tuning, and continuous technical support as your business scales.",
              chips: ["Bug Hotfixes", "Security Patches", "DB Indexing", "24/7 SLA"],
              linkText: "Explore Support",
              to: "/services"
            }
          ].map((card, idx) => (
            <Link
              key={idx}
              to={card.to}
              className="glass-card p-8 rounded-3xl border border-white/80 hover:border-[#0F32DC]/40 hover:shadow-2xl hover:bg-white/95 transition-all duration-400 group cursor-pointer flex flex-col justify-between h-[280px] relative overflow-hidden select-none"
            >
              {/* Background dynamic ambient glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F32DC]/5 rounded-full blur-2xl group-hover:bg-[#0F32DC]/15 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header Badge & Index */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-black/5 text-[#050419]/70 border border-black/5 group-hover:bg-[#0F32DC]/10 group-hover:text-[#0F32DC] transition-colors">
                    {card.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#050419]/40 group-hover:text-[#0F32DC] transition-colors">
                    {card.index}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#050419] group-hover:text-[#0F32DC] transition-colors duration-300 leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Dynamic Interactive Body: Chips by default, detailed subheading on hover */}
              <div className="relative my-auto min-h-[76px] flex items-center">
                {/* Default State: Capability Chips */}
                <div className="flex flex-wrap gap-1.5 transition-all duration-300 opacity-100 visible group-hover:opacity-0 group-hover:invisible group-hover:-translate-y-1 absolute inset-0 flex items-center">
                  {card.chips.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/85 border border-white text-xs font-mono font-medium text-[#050419]/80 shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Hover State: Subheading Description */}
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <p className="text-sm text-[#050419]/85 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Link Bar */}
              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0F32DC] mt-auto">
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="w-2 h-2 rounded-full bg-black/15 group-hover:bg-[#0F32DC] group-hover:scale-125 transition-all duration-300" />
              </div>
            </Link>
          ))}
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
      <section className="px-6 sm:px-12 max-w-[1600px] mx-auto mb-20">
        <div className="rounded-3xl sm:rounded-[40px] bg-[#050419] text-white p-10 sm:p-20 relative overflow-hidden text-center flex flex-col items-center shadow-2xl border border-white/10 group">
          {/* Subtle Ambient Glow and Grid */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0F32DC_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0F32DC]/25 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#0F32DC]/35 transition-all duration-700"></div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#57cdff] mb-6 relative z-10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#57cdff]" />
            <span>You Bring the Idea. We'll Build the Rest.</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6 relative z-10 leading-[1.08]">
            Have Something <br />
            <span className="bg-gradient-to-r from-white via-white to-[#57cdff] bg-clip-text text-transparent">
              Worth Building?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300/90 max-w-2xl mb-10 relative z-10 leading-relaxed font-normal">
            From the first line of code to the final deployment, we build, integrate, test, optimize, and maintain digital products that are ready for the real world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              to="/book-a-call"
              className="pill-btn pill-btn--light text-sm sm:text-base px-8 py-4 flex items-center gap-2 font-semibold shadow-lg hover:shadow-white/20 transition-all hover:scale-105"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/case-studies"
              className="pill-btn pill-btn--glass text-white border-white/20 hover:bg-white/15 text-sm sm:text-base px-8 py-4 font-semibold transition-all hover:scale-105"
            >
              <span>See Our Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
