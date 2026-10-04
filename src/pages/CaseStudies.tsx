import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ShieldCheck, Database, Award } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const studies = [
    {
      id: "fintech",
      client: "Tier-1 Global FinTech",
      title: "Zero-Downtime Multi-Region Kubernetes Migration for 10M+ Daily Active Users",
      challenge: "Legacy monolithic payment processing infrastructure experiencing peak load latency spikes and high operational overhead with single-region risk.",
      solution: "Vectr deployed an 8-person Principal Architecture & SRE squad. We containerized legacy services, designed active-active multi-region Kubernetes clusters on AWS with automated global traffic routing, and implemented GitOps deployment pipelines.",
      results: [
        { label: "Availability SLA", value: "99.999%" },
        { label: "P99 Latency Reduction", value: "68%" },
        { label: "Cloud Spend Savings", value: "$1.4M / yr" },
        { label: "Time to Deploy", value: "< 10 min" }
      ],
      tags: ["FinTech", "AWS", "Kubernetes", "Multi-Region", "Terraform"]
    },
    {
      id: "logistics",
      client: "Global Supply Chain & Logistics",
      title: "Critical Database State Recovery & Outage Mitigation Under 48 Minutes",
      challenge: "Severe distributed database corruption during holiday peak season, freezing fulfillment tracking across 120 global distribution centers.",
      solution: "Vectr Emergency Incident Response unit dispatched within 12 minutes. Diagnosed split-brain consensus failure, executed point-in-time state reconciliation, repaired replication topologies, and restored normal operations.",
      results: [
        { label: "Recovery Time (RTO)", value: "48 Mins" },
        { label: "Data Loss (RPO)", value: "0 bytes" },
        { label: "Saved Revenue", value: "$4.2M+" },
        { label: "SLA Response", value: "12 Mins" }
      ],
      tags: ["Emergency Response", "PostgreSQL", "Distributed DB", "Disaster Recovery"]
    },
    {
      id: "healthcare",
      client: "Healthcare Systems Network",
      title: "HIPAA-Compliant Private AI & Retrieval Architecture Across 40+ Hospital Facilities",
      challenge: "Urgent need for clinical decision support AI without exposing protected health information (PHI) to third-party public API endpoints.",
      solution: "Architected a fully private, on-premise GPU cluster running open-weights LLMs with secure vector embeddings (Qdrant), strictly governed by Zero Trust role-based access control and continuous audit telemetry.",
      results: [
        { label: "Facilities Deployed", value: "42 Sites" },
        { label: "Query Speed", value: "< 450ms" },
        { label: "Security Compliance", value: "100% HIPAA" },
        { label: "Doctor Satisfaction", value: "96%" }
      ],
      tags: ["Healthcare", "Private AI", "LLMs", "Zero Trust", "Qdrant"]
    }
  ];

  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-3">
          Proven Enterprise Track Record
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#050419] mb-6">
          Case Studies & Engineering Impact
        </h1>
        <p className="text-lg text-[#050419]/75 leading-relaxed">
          Explore how our consulting squads deliver high-impact architecture, rescue mission-critical platforms, and drive transformational growth.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
        <div className="glass-card p-6 text-center border border-white/70">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#0F32DC] mb-1">₹15L+</div>
          <div className="text-xs sm:text-sm text-[#050419]/70 font-medium">Project Value Delivered</div>
        </div>
        <div className="glass-card p-6 text-center border border-white/70">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#0F32DC] mb-1">25+</div>
          <div className="text-xs sm:text-sm text-[#050419]/70 font-medium">Clients Served</div>
        </div>
        <div className="glass-card p-6 text-center border border-white/70">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#0F32DC] mb-1">30+</div>
          <div className="text-xs sm:text-sm text-[#050419]/70 font-medium">Projects Delivered</div>
        </div>
        <div className="glass-card p-6 text-center border border-white/70">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#0F32DC] mb-1">5+</div>
          <div className="text-xs sm:text-sm text-[#050419]/70 font-medium">Years of Combined Experience</div>
        </div>
      </div>

      {/* Case Study Cards */}
      <div className="flex flex-col gap-12 mb-24">
        {studies.map((study, idx) => (
          <div
            key={study.id}
            className="glass-card p-8 sm:p-12 border border-white/70 shadow-xl overflow-hidden relative group"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#050419] text-white">
                {study.client}
              </span>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-white/80 text-[#050419]/70 border border-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#050419] mb-6 leading-snug">
              {study.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-red-600 mb-2">
                  The Critical Challenge
                </h4>
                <p className="text-sm sm:text-base text-[#050419]/80 leading-relaxed mb-6">
                  {study.challenge}
                </p>

                <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F32DC] mb-2">
                  Vectr Architecture & Execution
                </h4>
                <p className="text-sm sm:text-base text-[#050419]/80 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Key Results Grid */}
              <div className="grid grid-cols-2 gap-4 bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/60">
                {study.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-4 rounded-xl bg-white/70 border border-white/80">
                    <div className="text-2xl sm:text-3xl font-black text-[#050419] tracking-tight mb-1">
                      {res.value}
                    </div>
                    <div className="text-xs font-medium text-[#050419]/60">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-black/10 flex justify-end">
              <Link
                to="/book-a-call"
                className="pill-btn pill-btn--dark text-xs sm:text-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
