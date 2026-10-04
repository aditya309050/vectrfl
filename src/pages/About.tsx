import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Users, Target, CheckCircle2, Award, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Senior Cloud Architect',
    experience: '7+ years',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-3">
          About Vectr Consulting
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#050419] mb-6">
          Architecting Resilience for High-Consequence Tech
        </h1>
        <p className="text-lg text-[#050419]/75 leading-relaxed">
          We were founded on a straightforward thesis: high-stakes enterprise systems cannot afford slow hiring, guesswork architectures, or legacy vendor runarounds.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="glass-card p-8 sm:p-10 border border-white/70 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#050419] mb-3">Zero-Fail Philosophy</h3>
          <p className="text-sm text-[#050419]/75 leading-relaxed">
            In mission-critical infrastructure, 99.9% isn't enough. We enforce rigorous chaos validation, automated rollback pipelines, and multi-tier redundancy to guarantee resilience.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-10 border border-white/70 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#050419] mb-3">Top 1% Engineering Squads</h3>
          <p className="text-sm text-[#050419]/75 leading-relaxed">
            Our talent network consists of principal engineers, cloud architects, and SRE veterans from top tier infrastructure and tech enterprises. Every consultant is deeply vetted.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-10 border border-white/70 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-[#0F32DC]/10 flex items-center justify-center text-[#0F32DC] mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#050419] mb-3">Immediate Tactical Deployment</h3>
          <p className="text-sm text-[#050419]/75 leading-relaxed">
            We eliminate lengthy recruiter cycles. Our squads activate with domain familiarity, verified clearances, and immediate toolchain integration in 48 hours or less.
          </p>
        </div>
      </div>

      {/* Leadership & Culture Section */}
      <section className="glass-card p-8 sm:p-14 border border-white/70 shadow-xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-2">
              Our Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050419] mb-6 leading-tight">
              Built by Engineers, <br />
              Engineered for Executives
            </h2>
            <p className="text-base text-[#050419]/80 leading-relaxed mb-6">
              Vectr combines technical mastery with executive clarity. We deliver transparent technical milestones, detailed architectural blueprints, and measurable business ROI on every engagement.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "100% On-shore & Verified Global Technical Talent",
                "Strict SLA governance and milestone-linked billing",
                "Full IP ownership and zero lock-in codebase handoffs"
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
            <h3 className="text-2xl font-bold text-[#050419] mb-2">Join Our Consultant Network</h3>
            <p className="text-sm text-[#050419]/70 mb-6">
              Are you a senior or principal engineer? Join our elite roster for high-consequence engagements.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30 text-green-900 text-center">
                <h4 className="text-lg font-bold mb-1">Application Received</h4>
                <p className="text-sm">Thank you {formData.fullName}. Our vetting committee will review your profile and reach out within 24 hours.</p>
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
                      placeholder="+1 (555) 000-0000"
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
                    <option value="Senior Cloud Architect">Senior Cloud Architect (AWS/GCP/Azure)</option>
                    <option value="Principal SRE & DevOps">Principal SRE & DevOps Engineer</option>
                    <option value="AI / ML Systems Engineer">AI / ML Systems Engineer</option>
                    <option value="Cybersecurity & Zero Trust">Cybersecurity & Zero Trust Specialist</option>
                    <option value="Distributed Systems Specialist">Distributed Systems & Database Specialist</option>
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
