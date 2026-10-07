import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Lock,
  Plus,
  MessageSquare
} from 'lucide-react';
import { PaymentModal } from '../components/PaymentModal';

export const BookCall: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    engagementType: 'Full-Stack Web App',
    timeline: 'Immediate / Urgent (< 1 week)',
    budgetRange: '$5k - $15k',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: '',
    preferredTime: 'Morning (9 AM - 12 PM)'
  });

  const servicesList = [
    "Full-Stack Web App",
    "Frontend Engineering (React/Next.js)",
    "E-Commerce & Storefronts",
    "Mobile App (iOS / Android)",
    "API & Cloud Integrations",
    "UI/UX Design to Code",
    "Performance & SEO Optimization",
    "Architecture Audit & Refactor"
  ];

  const budgetRanges = [
    "< $5k",
    "$5k - $15k",
    "$15k - $30k",
    "$30k+"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-36 px-6 sm:px-12 max-w-[1600px] mx-auto pb-28">
      {/* Editorial Hero Section */}
      <section className="mb-20 sm:mb-28">
        {/* Massive Bold Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[160px] font-bold tracking-tight text-[#050419] leading-none mb-12 sm:mb-16 select-none"
        >
          Book a call.
        </motion.h1>

        {/* 3-Column Editorial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Column 1: Pill Badge & Quick Contact Channels */}
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#050419] text-white text-xs font-medium tracking-wide shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Book a consultation</span>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/70 hover:bg-white border border-black/5 text-xs font-semibold text-[#050419] shadow-xs hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>Fast WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto text-[#0F32DC] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/40 border border-black/[0.04] text-[11px] text-[#050419]/70">
                <Clock className="w-3.5 h-3.5 text-[#0F32DC] shrink-0" />
                <span>Typical response time: &lt; 2 hours</span>
              </div>
            </div>
          </div>

          {/* Column 2: Main Editorial Lead + Social Proof */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[33px] leading-[1.32] text-[#050419] font-normal tracking-tight">
              <strong className="font-bold text-[#050419]">
                Let’s build something exceptional together. Tell us about your product, timeline, and architectural requirements.
              </strong>{" "}
              <span className="text-[#050419]/75 font-normal">
                We partner closely with founders and high-performing teams to turn ambitious concepts into fast, dependable, and high-impact digital experiences.
              </span>
            </h2>
          </div>

          {/* Column 3: Secondary Description */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-3xl bg-white/60 border border-white/80 shadow-xs space-y-3">
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#0F32DC] block">
                Direct Principal Scoping
              </span>
              <p className="text-xs sm:text-sm text-[#050419]/75 leading-relaxed font-normal">
                Zero agency bureaucracy. A direct 30-minute scoping session to map out technical feasibility, architecture blueprints, and clear fixed-milestone budgets.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Interactive Booking Workspace */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 sm:p-14 border border-white/80 shadow-2xl rounded-3xl mb-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F32DC]/5 rounded-full blur-3xl pointer-events-none" />

        {submitted ? (
          <div className="text-center py-12 relative z-10 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0F32DC] block mb-2">
              Request Received
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050419] mb-3 tracking-tight">
              Consultation Scheduled!
            </h2>
            <p className="text-base text-[#050419]/75 max-w-lg mx-auto mb-8 leading-relaxed">
              Thank you <strong className="text-[#050419]">{formData.fullName}</strong>. We've sent a calendar invitation and technical brief summary to <strong>{formData.email}</strong>.
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F32DC]/10 text-[#0F32DC] text-xs font-semibold mb-10">
              <Clock className="w-4 h-4" />
              <span>A Principal Engineer will review and connect within 2 hours</span>
            </div>

            {/* Direct Deposit Option */}
            <div className="bg-white/80 border border-white p-7 rounded-3xl max-w-xl mx-auto text-left shadow-lg">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0F32DC] text-white flex items-center justify-center shadow-md">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#050419]">Fast-Track Your Sprint Kickoff</h4>
                  <p className="text-xs text-[#050419]/70">Lock in your engineering squad immediately with an initial deposit.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPaymentModalOpen(true)}
                className="pill-btn pill-btn--dark w-full py-3.5 text-sm flex items-center justify-center gap-2 mt-4 font-semibold shadow-md"
              >
                <Lock className="w-4 h-4" />
                <span>Pay Sprint Deposit Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10">
            {/* Step Navigation Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-black/10 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#050419] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                  0{step}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#050419]">
                    {step === 1 && "Select Service & Scope"}
                    {step === 2 && "Timeline & Budget Details"}
                    {step === 3 && "Contact & Meeting Preferences"}
                  </h3>
                  <p className="text-xs text-[#050419]/60">Step {step} of 3 — Scoping Consultation</p>
                </div>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      step === num
                        ? 'w-8 bg-[#0F32DC]'
                        : step > num
                        ? 'w-4 bg-[#050419]'
                        : 'w-4 bg-black/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP 1: SERVICE TYPE */}
            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-4">
                    Choose Primary Service Requirement
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {servicesList.map((type) => {
                      const isSelected = formData.engagementType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, engagementType: type })}
                          className={`p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between h-32 group ${
                            isSelected
                              ? 'bg-[#050419] text-white border-[#050419] shadow-xl scale-[1.02]'
                              : 'bg-white/70 text-[#050419] hover:bg-white border-white/80 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#0F32DC]'
                            }`}>
                              Option
                            </span>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              isSelected ? 'bg-[#0F32DC] text-white' : 'bg-black/5 text-gray-400 group-hover:text-black'
                            }`}>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <span className="font-bold text-sm leading-snug">
                            {type}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={() => setPaymentModalOpen(true)}
                    className="text-xs font-medium text-[#0F32DC] hover:underline flex items-center gap-1.5"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Have an urgent project? Pay deposit directly</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="pill-btn pill-btn--dark px-8 py-3.5 text-sm font-semibold flex items-center gap-2 shadow-md"
                  >
                    <span>Next: Timeline & Budget</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TIMELINE & BUDGET */}
            {step === 2 && (
              <div className="space-y-8 animate-fade-in">
                {/* Timeline */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-3">
                    Target Start Date / Urgency
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Immediate / Urgent", desc: "< 1 week kickoff" },
                      { label: "Standard Sprint", desc: "Within 2-4 weeks" },
                      { label: "Strategic Roadmap", desc: "Next quarter / month" }
                    ].map((item) => {
                      const isSelected = formData.timeline === item.label;
                      return (
                        <button
                          type="button"
                          key={item.label}
                          onClick={() => setFormData({ ...formData, timeline: item.label })}
                          className={`p-4 rounded-2xl text-left border transition-all ${
                            isSelected
                              ? 'bg-[#050419] text-white border-[#050419] shadow-lg'
                              : 'bg-white/70 text-[#050419] hover:bg-white border-white/80'
                          }`}
                        >
                          <div className="font-bold text-sm mb-1">{item.label}</div>
                          <div className={`text-xs ${isSelected ? 'text-gray-300' : 'text-[#050419]/60'}`}>
                            {item.desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-3">
                    Estimated Project Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budgetRange: b })}
                        className={`py-3 px-4 rounded-xl text-center border text-xs sm:text-sm font-semibold transition-all ${
                          formData.budgetRange === b
                            ? 'bg-[#0F32DC] text-white border-[#0F32DC] shadow-md'
                            : 'bg-white/70 text-[#050419] hover:bg-white border-white/80'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="pill-btn pill-btn--glass text-xs sm:text-sm px-6 py-2.5 font-medium"
                  >
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="pill-btn pill-btn--dark px-8 py-3.5 text-sm font-semibold flex items-center gap-2 shadow-md"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT & SCOPE */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                      Company / Startup Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@acme.com"
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                    Brief Technical Scope or Goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your product requirements, current tech stack, or upcoming launch deadlines..."
                    className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                  />
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="pill-btn pill-btn--glass text-xs sm:text-sm px-6 py-2.5 font-medium"
                  >
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="pill-btn pill-btn--dark px-8 py-3.5 text-sm font-semibold flex items-center gap-2 shadow-xl"
                  >
                    <span>Confirm & Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </motion.div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        defaultService={formData.engagementType}
      />
    </div>
  );
};
