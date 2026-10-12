import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Layers,
  Globe,
  Smartphone,
  Palette,
  Link2,
  Lock,
  Boxes,
  TrendingUp,
  Zap,
  CheckCircle2,
  Terminal,
  Rocket,
  Bug,
  LifeBuoy,
  Check,
  ArrowRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: "frontend",
      category: "development",
      categoryLabel: "Frontend",
      icon: Layout,
      title: "Frontend Development",
      summary: "Modern, dynamic, and responsive user interfaces crafted with top-tier frameworks and fluid 60 FPS animations.",
      deliverables: [
        "React, Next.js, Vue & TypeScript architecture",
        "Tailwind CSS & custom bespoke design systems",
        "Pixel-perfect responsive layouts across all viewports",
        "Ultra-fast Core Web Vitals and fluid micro-animations"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Framer Motion"]
    },
    {
      id: "fullstack",
      category: "development",
      categoryLabel: "Full-Stack",
      icon: Layers,
      title: "Full-Stack Development",
      summary: "End-to-end web applications bridging scalable backend engines with high-performance client experiences.",
      deliverables: [
        "Scalable REST & GraphQL API architecture",
        "Database modeling & migrations (PostgreSQL, MongoDB, Redis)",
        "Secure user authentication (OAuth2, JWT, Role-Based Access)",
        "Microservices & serverless cloud functions"
      ],
      techStack: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      id: "web-dev",
      category: "development",
      categoryLabel: "Web Apps",
      icon: Globe,
      title: "Web Development",
      summary: "Custom web applications, SaaS platforms, and enterprise digital portals tailored to your business goals.",
      deliverables: [
        "Custom SaaS product development from 0 to 1",
        "Enterprise portals & headless CMS integrations",
        "Progressive Web Apps (PWA) with offline capabilities",
        "Responsive web architecture & cross-device compatibility"
      ],
      techStack: ["Web Apps", "SaaS", "Headless CMS", "HTML5", "TypeScript", "Next.js"]
    },
    {
      id: "app-dev",
      category: "development",
      categoryLabel: "Mobile",
      icon: Smartphone,
      title: "App Development",
      summary: "Cross-platform iOS and Android mobile applications engineered with React Native, Flutter, and native bridges.",
      deliverables: [
        "Native iOS & Android cross-platform builds (React Native / Flutter)",
        "Offline caching, push notifications & biometric security",
        "Native device hardware integrations (Camera, GPS, Bluetooth)",
        "Pixel-perfect mobile UI design systems & gesture interactions"
      ],
      techStack: ["React Native", "Flutter", "iOS", "Android", "TypeScript", "Expo"]
    },
    {
      id: "ui-ux",
      category: "development",
      categoryLabel: "Design / UI",
      icon: Palette,
      title: "UI/UX Implementation",
      summary: "Converting Figma, Sketch, and Adobe XD designs into clean, responsive, and accessible production code.",
      deliverables: [
        "Pixel-perfect Figma-to-code translation",
        "Custom UI components, design tokens & theme systems",
        "Interactive prototypes & smooth page transitions",
        "WCAG accessibility standards compliance"
      ],
      techStack: ["Figma", "Tailwind CSS", "Radix UI", "Framer Motion", "Storybook"]
    },
    {
      id: "api",
      category: "integrations",
      categoryLabel: "APIs",
      icon: Link2,
      title: "API Integration",
      summary: "Seamless connection of internal & external REST, GraphQL, gRPC, and WebSocket APIs with robust error handling.",
      deliverables: [
        "Custom API client wrappers & data transformations",
        "Webhook handlers, signature verification & queue workers",
        "Rate limiting, retry mechanisms & resilience patterns",
        "OpenAPI / Swagger documentation & mocking"
      ],
      techStack: ["REST APIs", "GraphQL", "WebSockets", "Axios", "Postman", "OpenAPI"]
    },
    {
      id: "payment",
      category: "integrations",
      categoryLabel: "Payments",
      icon: Lock,
      title: "Payment Integration",
      summary: "Secure checkout flows, recurring billing subscriptions, digital wallets, and automated invoice handling.",
      deliverables: [
        "Stripe, PayPal, Razorpay & digital wallet checkout flows",
        "Subscription tiers, metered usage & invoice webhooks",
        "PCI-DSS Level 1 compliance & SCA 3D-Secure protocols",
        "Refund handling, receipt generation & dispute workflows"
      ],
      techStack: ["Stripe", "PayPal", "Razorpay", "Apple Pay", "Google Pay", "Webhooks"]
    },
    {
      id: "auth",
      category: "integrations",
      categoryLabel: "Security",
      icon: Lock,
      title: "Authentication & Security",
      summary: "Enterprise-grade identity management, social logins, multi-factor authentication (MFA), and RBAC.",
      deliverables: [
        "OAuth2, OIDC & Social logins (Google, GitHub, Apple)",
        "Role-based access control (RBAC) & tenant permissions",
        "NextAuth.js, Auth0, Supabase & Firebase Auth setups",
        "JWT token rotation, secure cookie sessions & MFA"
      ],
      techStack: ["NextAuth", "Auth0", "Supabase Auth", "JWT", "OAuth2", "Firebase"]
    },
    {
      id: "third-party",
      category: "integrations",
      categoryLabel: "Integrations",
      icon: Boxes,
      title: "Third-Party Integrations",
      summary: "Connecting your product with CRMs, email delivery engines, marketing automation, and communication tools.",
      deliverables: [
        "Email & SMS engines (SendGrid, Resend, Twilio)",
        "CRM & analytics syncing (HubSpot, Salesforce, Segment)",
        "Headless CMS setups (Sanity, Strapi, Contentful)",
        "Automated sync pipelines via Zapier & custom webhooks"
      ],
      techStack: ["SendGrid", "Resend", "Twilio", "HubSpot", "Zapier", "Sanity"]
    },
    {
      id: "seo",
      category: "optimization",
      categoryLabel: "SEO",
      icon: TrendingUp,
      title: "SEO (Search Engine Optimization)",
      summary: "Technical and on-page SEO strategies to maximize organic search rankings, indexing, and conversion rates.",
      deliverables: [
        "Technical SEO auditing & crawlability optimization",
        "Core Web Vitals acceleration & speed benchmarking",
        "Structured data, JSON-LD Schema markup & OpenGraph tags",
        "Keyword architecture, canonicalization & sitemap management"
      ],
      techStack: ["Technical SEO", "Schema.org", "Lighthouse", "Core Web Vitals", "GSC"]
    },
    {
      id: "perf",
      category: "optimization",
      categoryLabel: "Performance",
      icon: Zap,
      title: "Performance Optimization",
      summary: "Lightning-fast page loads, asset minification, caching layers, and guaranteed 95+ Lighthouse scores.",
      deliverables: [
        "Bundle size reduction & intelligent code-splitting",
        "Image, video & font optimization (AVIF/WebP, next/font)",
        "Server-side rendering (SSR), ISR & edge caching",
        "Database query optimization & Redis caching"
      ],
      techStack: ["Core Web Vitals", "Vite", "Redis", "Cloudflare CDN", "Lighthouse"]
    },
    {
      id: "testing",
      category: "devops_qa",
      categoryLabel: "QA & Testing",
      icon: CheckCircle2,
      title: "Testing & QA",
      summary: "Rigorous automated and manual quality assurance ensuring rock-solid stability and zero regressions.",
      deliverables: [
        "Automated End-to-End (E2E) testing with Playwright & Cypress",
        "Unit & integration test suites (Vitest, Jest, RTL)",
        "API automated integration and stress testing",
        "Cross-browser and multi-device compatibility testing"
      ],
      techStack: ["Playwright", "Cypress", "Vitest", "Jest", "Postman", "k6"]
    },
    {
      id: "devops",
      category: "devops_qa",
      categoryLabel: "DevOps",
      icon: Terminal,
      title: "Deployment & DevOps",
      summary: "Automated CI/CD pipelines, containerization, and bulletproof cloud infrastructure for seamless shipping.",
      deliverables: [
        "Automated CI/CD workflows (GitHub Actions, GitLab CI)",
        "Docker containerization & environment configuration",
        "Cloud platform hosting (AWS, GCP, Vercel, Cloudflare)",
        "Zero-downtime deployment pipelines & automated SSL/DNS"
      ],
      techStack: ["Docker", "GitHub Actions", "AWS", "Vercel", "Cloudflare", "Linux"]
    },
    {
      id: "app-deployment",
      category: "devops_qa",
      categoryLabel: "App Stores",
      icon: Rocket,
      title: "App Deployment",
      summary: "End-to-end mobile app store release management across Apple App Store & Google Play Store, OTA updates, and CI pipelines.",
      deliverables: [
        "App Store Connect & Google Play Console submission & review approvals",
        "Fastlane & GitHub Actions automated build & signing pipelines",
        "Over-the-Air (OTA) updates via EAS / CodePush for instant hotfixes",
        "Crash reporting, telemetry & app analytics setup (Sentry, Firebase)"
      ],
      techStack: ["App Store", "Google Play", "Fastlane", "Expo EAS", "TestFlight", "Firebase"]
    },
    {
      id: "bug-fixing",
      category: "support",
      categoryLabel: "Maintenance",
      icon: Bug,
      title: "Bug Fixing & Triage",
      summary: "Rapid root-cause triage, debugging, and permanent resolution for front-end, back-end, and database errors.",
      deliverables: [
        "Critical production bug isolation & hotfixing",
        "Console error, unhandled promise & layout bug resolution",
        "API error code debugging (4xx/5xx status codes)",
        "Regression testing to verify bug resolution"
      ],
      techStack: ["Sentry", "Chrome DevTools", "Git Hotfix", "Node.js Debugger", "Log Analysis"]
    },
    {
      id: "maintenance",
      category: "support",
      categoryLabel: "SLA Support",
      icon: LifeBuoy,
      title: "Maintenance & Support",
      summary: "Ongoing technical support, dependency upgrades, security patching, and proactive codebase maintenance.",
      deliverables: [
        "Framework & dependency updates (React, Next.js, Node)",
        "Security vulnerability scanning & patch remediation",
        "Database maintenance, indexing & log monitoring",
        "24/7 incident response SLA & dedicated support"
      ],
      techStack: ["Maintenance", "Security Patches", "Dependabot", "DB Tuning", "24/7 Support"]
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-[1600px] mx-auto pb-24">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F32DC]/10 text-[#0F32DC] text-xs font-semibold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities & Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#050419] mb-6 leading-tight">
          High-Impact Engineering & Digital Services
        </h1>
        <p className="text-lg text-[#050419]/75 max-w-2xl mx-auto leading-relaxed">
          From custom UI/UX, frontend, full-stack, mobile apps, and APIs to DevOps, Testing & QA, and dedicated long-term support — built for scale and velocity.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {[
          { id: 'all', label: `All Services (${services.length})` },
          { id: 'development', label: 'Development & Mobile Apps' },
          { id: 'integrations', label: 'APIs, Auth & Payments' },
          { id: 'optimization', label: 'SEO & Performance' },
          { id: 'devops_qa', label: 'DevOps & App Deployment' },
          { id: 'support', label: 'Bug Fixing & Support' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`pill-btn text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-[#050419] text-white shadow-md'
                : 'glass-card text-[#050419] hover:bg-white/90 hover:scale-[1.02]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="glass-card p-8 sm:p-9 flex flex-col justify-between rounded-[28px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(15,50,220,0.08)] hover:border-[#0F32DC]/25 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Icon & Category Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] group-hover:bg-[#0F32DC] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-black/5 text-[11px] font-semibold text-[#050419]/70 group-hover:border-[#0F32DC]/20 transition-colors">
                    <span>{service.categoryLabel}</span>
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="text-2xl font-bold text-[#050419] mb-3 group-hover:text-[#0F32DC] transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#050419]/75 mb-6 leading-relaxed">
                  {service.summary}
                </p>

                {/* Deliverables */}
                <div className="mb-7">
                  <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#050419]/50 mb-3.5">
                    Core Deliverables
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#050419]/85 leading-snug">
                        <div className="w-4 h-4 rounded-full bg-[#0F32DC]/10 text-[#0F32DC] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Badges & Single Clean CTA */}
              <div className="pt-6 border-t border-black/[0.06] flex flex-col gap-5">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/80 text-[11px] font-medium text-[#050419]/75 border border-black/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Single Aesthetic CTA */}
                <Link
                  to="/book-a-call"
                  className="pill-btn pill-btn--dark w-full text-xs py-3 px-4 flex items-center justify-center gap-2 group-hover:bg-[#0F32DC] transition-all duration-300 font-semibold shadow-xs hover:shadow-md"
                >
                  <span>Consult & Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
