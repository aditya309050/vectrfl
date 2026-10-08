import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreadAnimation } from '../components/ThreadAnimation';
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Globe,
  ShoppingBag,
  Layers,
  Cpu,
  Headphones,
  Users,
  Clock,
  Rocket,
  ShieldCheck,
  Plus
} from 'lucide-react';

export const About: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Senior Frontend Engineer (React/Next.js)',
    experience: '5+ years',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const capabilities = [
    {
      icon: <Globe className="w-5 h-5 text-[#0F32DC]" />,
      title: "Websites & Brand Platforms",
      desc: "High-performance, responsive websites with modern frameworks, animations, and SEO-ready architecture."
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#0F32DC]" />,
      title: "E-Commerce & Storefronts",
      desc: "Conversion-focused storefronts with custom carts, payments, and automated inventory workflows."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0F32DC]" />,
      title: "Full-Stack Web Applications",
      desc: "Scalable dashboards, SaaS platforms, and portals with secure authentication and clean APIs."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0F32DC]" />,
      title: "Integrations & Deployment",
      desc: "API integrations, CRM connections, headless CMS setups, and automated CI/CD pipelines."
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#0F32DC]" />,
      title: "Ongoing Support & Optimization",
      desc: "Continuous monitoring, optimization, bug fixes, and feature updates as your product grows."
    }
  ];

  return (
    <div className="min-h-screen pt-32 sm:pt-36 px-6 sm:px-12 max-w-[1600px] mx-auto pb-28">
      {/* Editorial Hero Section */}
      <section className="mb-24 sm:mb-32">
        {/* Massive Bold Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[160px] font-bold tracking-tight text-[#050419] leading-none mb-12 sm:mb-16 select-none"
        >
          About.
        </motion.h1>

        {/* 3-Column Editorial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Column 1: Pill Badge */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#050419] text-white text-xs font-medium tracking-wide shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>About us</span>
            </div>
          </div>

          {/* Column 2: Main Editorial Lead + Social Proof */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[33px] leading-[1.32] text-[#050419] font-normal tracking-tight">
              <strong className="font-bold text-[#050419]">
                A creative agency specialising in design, digital and strategy. We work with high-performing brands that value strong, human relationships.
              </strong>{" "}
              <span className="text-[#050419]/75 font-normal">
                The better we know a client, the better the work, so we invest in understanding your world as much as your brief.
              </span>
            </h2>
          </div>

          {/* Column 3: Secondary Description */}
          <div className="lg:col-span-4 xl:col-span-3">
            <p className="text-sm sm:text-base text-[#050419]/70 leading-relaxed font-normal">
              What we create is clear, effective and built around real business goals. No gimmicks, no unnecessary complexity, just smart ideas, crafted well, and partnerships that last.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section: THE NUMBERS BEHIND THE WORK */}
      <section className="mb-24 sm:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-10"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-[#0F32DC] block mb-2">
            The Numbers Behind The Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#050419] tracking-tight">
            Proven track record of delivering real value
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 w-full">
          {[
            {
              value: "5+",
              title: "Years of Experience",
              desc: "Designing, building, and scaling digital products for businesses and brands.",
              icon: Clock,
              badge: "Industry Proven"
            },
            {
              value: "₹15L+",
              title: "Project Value Delivered",
              desc: "High-ROI digital platforms, web systems, and applications delivered on budget.",
              icon: ShieldCheck,
              badge: "Value Driven"
            },
            {
              value: "25+",
              title: "Clients Served",
              desc: "Startups, consultancies, e-commerce stores, and enterprise brands worldwide.",
              icon: Users,
              badge: "Global Reach"
            },
            {
              value: "30+",
              title: "Projects Delivered",
              desc: "Web applications, corporate portals, mobile products, and custom integrations.",
              icon: Rocket,
              badge: "Full-Cycle"
            }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 350, damping: 22 }
                }}
                className="glass-card p-7 sm:p-8 border border-white/80 rounded-3xl shadow-lg hover:shadow-2xl hover:border-[#0F32DC]/30 transition-all duration-300 text-left relative group overflow-hidden flex flex-col justify-between cursor-default"
              >
                {/* Ambient Radial Hover Glow */}
                <div className="absolute inset-0 bg-radial from-[#0F32DC]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Decorative Top Pill Icon */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#0F32DC]/5 text-[#0F32DC] border border-[#0F32DC]/10 group-hover:bg-[#0F32DC] group-hover:text-white transition-colors duration-300">
                    {stat.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-black/5 flex items-center justify-center text-[#0F32DC] shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Stat Content */}
                <div className="relative z-10 my-auto">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0F32DC] tracking-tight block mb-2 font-mono group-hover:scale-105 group-hover:text-[#0a23a0] transition-transform duration-300">
                    {stat.value}
                  </span>
                  <h3 className="text-lg font-bold text-[#050419] mb-2 leading-snug">
                    {stat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#050419]/70 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>

                {/* Subtle Bottom Accent Glow Line */}
                <div className="relative z-10 mt-5 pt-3 border-t border-black/[0.04] flex items-center justify-start">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#0F32DC]/30 to-transparent group-hover:w-16 group-hover:from-[#0F32DC] transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section: WHAT WE DO */}
      <section className="mb-24 sm:mb-28">
        <div className="text-left mb-12 sm:mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/5 shadow-xs mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#0F32DC]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#0F32DC]">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#050419] leading-[1.15] mb-4">
            We build digital products <br className="hidden sm:inline" />
            that move <span className="text-[#0F32DC]">businesses forward.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#050419]/70 max-w-2xl leading-relaxed">
            From high-performance websites and e-commerce platforms to full-stack applications, integrations, deployment, and ongoing support.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 border border-white/80 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-default"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050419] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#050419]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-2 flex items-center text-[#0F32DC] group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}

          {/* Quick CTA Card with Thread Animation */}
          <div className="rounded-3xl bg-[#06081B] text-white p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Background Radial Glow & Animated Waving Threads */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#0F32DC]/30 rounded-full blur-2xl pointer-events-none" />
            <ThreadAnimation />

            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-widest font-bold text-gray-400 block mb-3">
                Let's Build Together
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-snug">
                Have a project or product in mind?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Tell us what you're building and we'll help map it out.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/book-a-call"
                className="bg-white text-[#050419] hover:bg-gray-100 font-semibold text-xs sm:text-sm py-3 px-5 rounded-full inline-flex items-center justify-between w-auto gap-3 transition-all duration-200 shadow-md group-hover:shadow-lg"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Consultant Network */}
      <section className="glass-card p-8 sm:p-14 border border-white/70 shadow-xl rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-2">
              Our Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050419] mb-6 leading-tight">
              Crafted by Senior Builders, <br />
              Tailored for Business Growth
            </h2>
            <p className="text-base text-[#050419]/80 leading-relaxed mb-6">
              Kavix combines modern software engineering standards with direct founder-level communication. We deliver transparent technical milestones, modular codebases, and measurable business outcomes on every project.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Modern, scalable tech stacks (React, Next.js, TypeScript, Cloud)",
                "Transparent fixed-milestone pricing with zero surprises",
                "Full IP ownership and clean, well-documented repository handoffs"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#050419]">
                  <CheckCircle2 className="w-5 h-5 text-[#0F32DC] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Join Our Network Form */}
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/90 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-[#0F32DC]" />
              <h3 className="text-2xl font-bold text-[#050419]">Join Our Consultant Network</h3>
            </div>
            <p className="text-sm text-[#050419]/70 mb-6">
              Are you a senior frontend engineer, full-stack developer, or UI/UX designer? Join our network for select client engagements.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30 text-green-900 text-center">
                <h4 className="text-lg font-bold mb-1">Application Received</h4>
                <p className="text-sm">Thank you {formData.fullName}. We'll review your profile and reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#050419]/70 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#050419]/70 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#050419]/70 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#050419]/70 mb-1">
                    Core Specialization
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                  >
                    <option value="Senior Frontend Engineer (React/Next.js)">Senior Frontend Engineer (React/Next.js)</option>
                    <option value="Full-Stack Developer (Node/TypeScript)">Full-Stack Developer (Node/TypeScript)</option>
                    <option value="UI/UX & Product Designer">UI/UX & Product Designer</option>
                    <option value="E-Commerce & Shopify Specialist">E-Commerce & Shopify Specialist</option>
                    <option value="Cloud Architect & DevOps">Cloud Architect & DevOps</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="pill-btn pill-btn--dark w-full py-3 mt-2 text-sm"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
