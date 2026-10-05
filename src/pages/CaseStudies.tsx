import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ExternalLink, X, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  categoryTag: string;
  image: string;
  url: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  summary: string;
  deliverables: string[];
  techStack: string[];
}

export const CaseStudies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "mindstep",
      client: "MINDSTEP LEADERSHIP",
      title: "MindStep Leadership Platform",
      category: "web_apps",
      categoryTag: "Executive Leadership & Coaching Platform",
      url: "https://www.mindstepleadership.com/",
      isFeatured: true,
      featuredBadge: "FEATURED CLIENT",
      image: "/portfolio/mindstep.png",
      summary: "Modern web platform engineered for an international executive leadership consulting firm, featuring interactive program roadmaps, custom Strapi headless CMS, and automated executive booking flows.",
      deliverables: [
        "High-performance Next.js App Router architecture",
        "Strapi Headless CMS integration for dynamic content management",
        "Automated lead generation, Calendly sync & analytics pipeline"
      ],
      techStack: ["Next.js", "React", "Strapi CMS", "Tailwind CSS", "TypeScript"]
    },
    {
      id: "zunevo",
      client: "ZUNEVO",
      title: "Zunevo E-Commerce Storefront",
      category: "ecommerce",
      categoryTag: "Handcrafted Lifestyle & Accessories",
      url: "https://www.zunevo.shop/",
      image: "/portfolio/zunevo.png",
      summary: "High-conversion lifestyle storefront featuring handcrafted accessories, eyeglasses brooches, interactive product lookbooks, seamless cart drawer, and automated checkout.",
      deliverables: [
        "High-converting responsive checkout experience",
        "Dynamic cart drawer with upsell recommendations",
        "Payment gateway integration with automated invoicing"
      ],
      techStack: ["React", "Shopify / Custom Web", "Stripe", "Tailwind CSS", "Analytics"]
    },
    {
      id: "smallscreen",
      client: "SMALL SCREEN MARKETING",
      title: "Small Screen Marketing Agency",
      category: "branding_ui",
      categoryTag: "Digital Marketing & Video Production",
      url: "https://www.smallscreenmarketing.com/",
      image: "/portfolio/smallscreen.png",
      summary: "Creative agency web presence showcasing digital marketing campaigns, video storytelling reels, case studies, and conversion-optimized inbound client acquisition funnels.",
      deliverables: [
        "Fluid 60 FPS interactive motion and video integration",
        "Portfolio showcase with high-definition video embed engine",
        "Lead qualification funnel and CRM webhook pipelines"
      ],
      techStack: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "HubSpot CRM"]
    },
    {
      id: "speakerssolutions",
      client: "SPEAKERS SOLUTIONS",
      title: "Speakers Solutions Australia",
      category: "web_apps",
      categoryTag: "Keynote Talent & Booking Platform",
      url: "https://speakerssolutions.com.au/",
      image: "/portfolio/speakerssolutions.png",
      summary: "Comprehensive talent bureau portal representing world-class keynote speakers, trainers, and MCs across Australia, with real-time speaker availability inquiry workflows.",
      deliverables: [
        "Advanced faceted search by industry, topic, and fee tier",
        "Dedicated speaker video portfolio & press kit hubs",
        "Direct event quote calculator & booking inquiry system"
      ],
      techStack: ["React", "Next.js", "REST APIs", "Tailwind CSS", "PostgreSQL"]
    },
    {
      id: "mymindhub",
      client: "MYMINDHUB",
      title: "MyMindHub Mental Wellness App",
      category: "web_apps",
      categoryTag: "Mental Health & Psychology Hub",
      url: "https://mymindhub.vercel.app/",
      image: "/portfolio/mymindhub.png",
      summary: "Accessible mental health and guided wellness web application delivering curated psychological resources, mood tracking tools, and interactive self-care modules.",
      deliverables: [
        "Ultra-responsive, calming glassmorphism user interface",
        "Interactive wellness assessment tools and resource library",
        "Serverless edge deployment with sub-100ms global latency"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel Edge"]
    },
    {
      id: "norliza",
      client: "NORLIZA",
      title: "Norliza Brand & Creative Studio",
      category: "branding_ui",
      categoryTag: "Bespoke Portfolio & Brand Studio",
      url: "https://norliza.com/",
      image: "/portfolio/norliza.png",
      summary: "Editorial personal brand platform and creative studio showcase, featuring minimalist typography, high-impact aesthetic imagery, and bespoke client advisory booking.",
      deliverables: [
        "Editorial minimalist layout and responsive grid",
        "High-resolution portfolio galleries with lazy-loading",
        "Contact and VIP advisory appointment scheduling"
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: "ekaa",
      client: "EKAA",
      title: "Ekaa Digital Wellness Platform",
      category: "web_apps",
      categoryTag: "Modern Web Application & Community",
      url: "https://ekaa.vercel.app/",
      image: "/portfolio/ekaa.png",
      summary: "Holistic lifestyle, learning, and wellness SaaS web app featuring interactive digital guides, membership portal, and community interaction workflows.",
      deliverables: [
        "Modern React single-page application architecture",
        "Member authentication and access-gated course content",
        "Fluid animated page transitions and mobile optimization"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      id: "joinwithme",
      client: "JOINWITHME",
      title: "JoinWithMe Event & Social Networking",
      category: "web_apps",
      categoryTag: "Community & Event Networking Platform",
      url: "https://joinwithme.in/",
      image: "/portfolio/joinwithme.png",
      summary: "Interactive event discovery and community networking platform connecting attendees, hosts, and organizers with real-time RSVPs and location-based meetups.",
      deliverables: [
        "Location-based event mapping and search engine",
        "Instant RSVP, ticket registration, and social sharing",
        "User profiles and real-time community engagement"
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
      id: "ncgrp",
      client: "NC GROUP (NCGRP.SE)",
      title: "NC Group Scandinavian Enterprise",
      category: "enterprise",
      categoryTag: "Nordic Enterprise Corporate & Industrial Portal",
      url: "https://ncgrp.se/",
      image: "/portfolio/ncgrp.png",
      summary: "Corporate multi-division web portal for a leading Swedish enterprise group, showcasing industrial project portfolios, sustainability reports, and corporate governance.",
      deliverables: [
        "Multilingual Scandinavian enterprise corporate presence",
        "Interactive project portfolio & division directories",
        "High-security enterprise hosting with optimized SEO"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Enterprise Cloud"]
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 px-6 sm:px-12 max-w-[1600px] mx-auto pb-28">
      {/* Editorial Header Section Matching Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
        <div className="lg:col-span-5">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#050419] leading-[1.05]">
            Our work
          </h1>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xl sm:text-2xl text-[#050419]/80 leading-relaxed font-normal">
            We specialize in crafting, developing, and delivering digital products that spell success for our cherished clients. We excel at creating fresh and captivating websites, building robust brand systems, and producing creative content.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-14">
        {[
          { id: 'all', label: 'All Work (9)' },
          { id: 'web_apps', label: 'Websites & Apps' },
          { id: 'ecommerce', label: 'E-Commerce' },
          { id: 'branding_ui', label: 'Brand & UX Design' },
          { id: 'enterprise', label: 'Enterprise Platforms' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`pill-btn text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === tab.id
                ? 'bg-[#050419] text-white shadow-md'
                : 'glass-card text-[#050419] hover:bg-white/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 4-Column Showcase Gallery Grid with Real Website Screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12 mb-28">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Real Browser Mockup Box */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0e1015] border border-black/10 mb-4 shadow-sm group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                {/* Browser Top Window Bar */}
                <div className="h-6 px-2.5 bg-[#181a20] border-b border-white/10 flex items-center justify-between shrink-0 z-20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-[8px] font-mono text-white/60 truncate max-w-[150px]">
                    {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </div>
                  <div className="w-3" />
                </div>

                {/* Real Website Screenshot Image */}
                <div className="flex-1 w-full h-full relative overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />

                {/* Quick Link Badge on Hover */}
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white text-[10px] font-medium shadow-md z-20">
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3 text-[#57cdff]" />
                </div>
              </div>

              {/* Tag / Client Name */}
              <div className="mb-1.5 flex items-center gap-2">
                {project.isFeatured ? (
                  <span className="bg-[#E2F700] text-black font-extrabold text-[10px] tracking-wider px-2 py-0.5 rounded shadow-sm">
                    {project.featuredBadge || 'FEATURED'}
                  </span>
                ) : (
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#050419]/60">
                    {project.client}
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#050419] group-hover:text-[#0F32DC] transition-colors leading-snug">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <div className="rounded-3xl sm:rounded-[40px] bg-[#050419] text-white p-10 sm:p-16 relative overflow-hidden text-center flex flex-col items-center shadow-2xl border border-white/10 group">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0F32DC_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0F32DC]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-widest text-[#57cdff] mb-6 relative z-10">
          <Sparkles className="w-3.5 h-3.5 text-[#57cdff]" />
          <span>Start Your Next Milestone</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 relative z-10">
          Have Something Worth Building?
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 relative z-10">
          Let’s turn your product roadmap into a high-impact reality with our principal engineering squads.
        </p>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <Link to="/book-a-call" className="pill-btn pill-btn--light text-sm sm:text-base px-8 py-3.5 flex items-center gap-2 font-semibold">
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services" className="pill-btn pill-btn--glass text-white border-white/20 hover:bg-white/10 text-sm sm:text-base px-8 py-3.5 font-semibold">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050419]/75 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#D0E1EB] border border-white/80 rounded-3xl shadow-2xl overflow-hidden my-8">
            {/* Modal Real Browser Preview */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex flex-col">
              {/* Browser Window Header */}
              <div className="h-7 px-3 bg-[#181a20] border-b border-white/10 flex items-center justify-between shrink-0 z-20">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-3 py-0.5 rounded bg-black/50 border border-white/10 text-[9px] font-mono text-white/70 flex items-center gap-1.5">
                  <span className="text-[#27C93F]">🔒</span>
                  <span>{activeModalProject.url}</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Real Website Image */}
              <div className="flex-1 w-full h-full relative overflow-hidden bg-black">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-9 right-3 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors z-30"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white text-[10px] font-mono font-bold z-30">
                {activeModalProject.client}
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0F32DC] block mb-1">
                {activeModalProject.categoryTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#050419] mb-4">
                {activeModalProject.title}
              </h2>
              <p className="text-base text-[#050419]/80 leading-relaxed mb-6">
                {activeModalProject.summary}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#050419]/60 mb-3">
                  Delivered Scope:
                </h4>
                <ul className="flex flex-col gap-2">
                  {activeModalProject.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#050419]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#0F32DC] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white text-xs font-mono font-medium text-[#050419]/80 border border-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn pill-btn--glass text-xs py-2.5 px-4 flex items-center gap-1.5"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/book-a-call"
                    onClick={() => setActiveModalProject(null)}
                    className="pill-btn pill-btn--dark text-xs py-2.5 px-4 flex items-center gap-1.5"
                  >
                    <span>Scope Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
