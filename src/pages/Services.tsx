import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Layers,
  Globe,
  Smartphone,
  Palette,
  Link2,
  CreditCard,
  Lock,
  Boxes,
  TrendingUp,
  Zap,
  CheckCircle2,
  Terminal,
  Rocket,
  Bug,
  LifeBuoy,
  Check
} from 'lucide-react';
import { PaymentModal } from '../components/PaymentModal';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState({ name: 'Frontend Development', price: 1999 });

  const handleOpenPayment = (name: string, price: number) => {
    setActiveService({ name, price });
    setModalOpen(true);
  };

  const services = [
    {
      id: "frontend",
      category: "development",
      icon: Layout,
      title: "Frontend Development",
      price: 1999,
      priceLabel: "$1,999 / Sprint",
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
      icon: Layers,
      title: "Full-Stack Development",
      price: 3499,
      priceLabel: "$3,499 / Sprint",
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
      icon: Globe,
      title: "Web Development",
      price: 2499,
      priceLabel: "$2,499 / Project",
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
      icon: Smartphone,
      title: "App Development",
      price: 2999,
      priceLabel: "$2,999 / Project",
      summary: "Cross-platform iOS and Android mobile applications engineered with React Native, Flutter, and native bridges.",
      deliverables: [
        "Native iOS & Android cross-platform builds (React Native / Flutter)",
        "Offline caching, push notifications & biometric security (FaceID/Fingerprint)",
        "Native device hardware integrations (Camera, GPS, Bluetooth, Accelerometer)",
        "Pixel-perfect mobile UI design systems & fluid gesture interactions"
      ],
      techStack: ["React Native", "Flutter", "iOS", "Android", "TypeScript", "Expo"]
    },
    {
      id: "ui-ux",
      category: "development",
      icon: Palette,
      title: "UI/UX Implementation",
      price: 1499,
      priceLabel: "$1,499 / Project",
      summary: "Converting Figma, Sketch, and Adobe XD designs into clean, responsive, and accessible production code.",
      deliverables: [
        "Pixel-perfect Figma-to-code translation",
        "Custom UI components, design tokens & theme systems",
        "Interactive prototypes & smooth page transitions",
        "WCAG accessibility standards compliance"
      ],
      techStack: ["Figma", "Tailwind CSS", "Radix UI", "Framer Motion", "Storybook", "CSS Modules"]
    },
    {
      id: "api",
      category: "integrations",
      icon: Link2,
      title: "API Integration",
      price: 1299,
      priceLabel: "$1,299 / Integration",
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
      icon: CreditCard,
      title: "Payment Integration",
      price: 999,
      priceLabel: "$999 / Setup",
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
      icon: Lock,
      title: "Authentication",
      price: 1199,
      priceLabel: "$1,199 / Setup",
      summary: "Enterprise-grade identity management, social logins, multi-factor authentication (MFA), and RBAC.",
      deliverables: [
        "OAuth2, OIDC & Social logins (Google, GitHub, Apple)",
        "Role-based access control (RBAC) & tenant permissions",
        "NextAuth.js, Auth0, Supabase & Firebase Auth configurations",
        "JWT token rotation, secure cookie sessions & MFA"
      ],
      techStack: ["NextAuth", "Auth0", "Supabase Auth", "JWT", "OAuth2", "Firebase"]
    },
    {
      id: "third-party",
      category: "integrations",
      icon: Boxes,
      title: "Third-Party Integrations",
      price: 899,
      priceLabel: "$899 / Integration",
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
      icon: TrendingUp,
      title: "SEO (Search Engine Optimization)",
      price: 999,
      priceLabel: "$999 / Mo",
      summary: "Technical and on-page SEO strategies to maximize organic search rankings, indexing, and conversion rates.",
      deliverables: [
        "Technical SEO auditing & crawlability optimization",
        "Core Web Vitals acceleration & speed benchmarking",
        "Structured data, JSON-LD Schema markup & OpenGraph tags",
        "Keyword architecture, canonicalization & sitemap management"
      ],
      techStack: ["Technical SEO", "Schema.org", "Lighthouse", "Core Web Vitals", "GSC", "Ahrefs"]
    },
    {
      id: "perf",
      category: "optimization",
      icon: Zap,
      title: "Performance Optimization",
      price: 1099,
      priceLabel: "$1,099 / Audit",
      summary: "Lightning-fast page loads, asset minification, caching layers, and guaranteed 95+ Lighthouse scores.",
      deliverables: [
        "Bundle size reduction & intelligent code-splitting",
        "Image, video & font optimization (AVIF/WebP, next/font)",
        "Server-side rendering (SSR), ISR & edge caching",
        "Database query optimization & Redis caching"
      ],
      techStack: ["Core Web Vitals", "Vite", "Redis", "Cloudflare CDN", "Bundle Analyzer", "Lighthouse"]
    },
    {
      id: "testing",
      category: "devops_qa",
      icon: CheckCircle2,
      title: "Testing & QA",
      price: 1299,
      priceLabel: "$1,299 / Suite",
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
      icon: Terminal,
      title: "Deployment & DevOps",
      price: 1499,
      priceLabel: "$1,499 / Setup",
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
      icon: Rocket,
      title: "App Deployment",
      price: 1499,
      priceLabel: "$1,499 / Setup",
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
      icon: Bug,
      title: "Bug Fixing",
      price: 699,
      priceLabel: "$699 / Package",
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
      icon: LifeBuoy,
      title: "Maintenance & Support",
      price: 799,
      priceLabel: "$799 / Mo",
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
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#050419] mb-6">
          High-Impact Engineering & Digital Services
        </h1>
        <p className="text-lg text-[#050419]/75 leading-relaxed">
          From pixel-perfect UI/UX, frontend, full-stack, app development, and payment integrations to SEO, DevOps, App Deployment, Testing & QA, and dedicated Maintenance & Support — we deliver end-to-end technical excellence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
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
            className={`pill-btn text-sm font-medium transition-all ${
              selectedCategory === tab.id
                ? 'bg-[#050419] text-white shadow-md'
                : 'glass-card text-[#050419] hover:bg-white/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="glass-card p-8 sm:p-10 flex flex-col justify-between border border-white/70 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] group-hover:bg-[#0F32DC] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0F32DC] bg-[#0F32DC]/10 px-3 py-1 rounded-full">
                    {service.priceLabel}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#050419] mb-3 group-hover:text-[#0F32DC] transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-[#050419]/75 mb-6 leading-relaxed">
                  {service.summary}
                </p>

                {/* Deliverables */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#050419]/60 mb-3">
                    Core Deliverables:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#050419]/85">
                        <Check className="w-4 h-4 text-[#0F32DC] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Badges & CTA */}
              <div className="pt-6 border-t border-black/10 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/70 text-xs font-mono font-medium text-[#050419]/80 border border-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleOpenPayment(service.title, service.price)}
                    className="pill-btn pill-btn--dark text-xs py-2.5 px-4 flex-1 flex items-center justify-center gap-1.5"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Pay Deposit & Start</span>
                  </button>
                  <Link
                    to="/book-a-call"
                    className="pill-btn pill-btn--glass text-xs py-2.5 px-4 shrink-0"
                  >
                    <span>Consult</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={activeService.name}
        defaultPrice={activeService.price}
      />
    </div>
  );
};
