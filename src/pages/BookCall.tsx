import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Lock,
  Sparkles
} from 'lucide-react';
import { PaymentModal } from '../components/PaymentModal';

export const BookCall: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    engagementType: 'Frontend Development',
    timeline: 'Immediate / Urgent (< 1 week)',
    squadSize: '3-5 Engineers',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const servicesList = [
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
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-[1400px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-3">
          Direct Technical Engagement
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-[#050419] mb-4">
          Book a Strategic Consultation
        </h1>
        <p className="text-base sm:text-lg text-[#050419]/75 leading-relaxed">
          Connect directly with a Principal Engineer to scope your project requirements, timeline, and deliverables.
        </p>
      </div>

      {/* Main Booking Card */}
      <div className="glass-card p-8 sm:p-12 border border-white/70 shadow-2xl mb-24">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#050419] mb-3">Consultation Request Confirmed</h2>
            <p className="text-base text-[#050419]/75 max-w-lg mx-auto mb-8">
              Thank you {formData.fullName}. A calendar invite and technical scope brief have been sent to <strong>{formData.email}</strong>.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F32DC]/10 text-[#0F32DC] text-xs font-semibold mb-8">
              <Clock className="w-4 h-4" />
              <span>A Principal Engineer will connect within 2 hours</span>
            </div>

            {/* Direct Deposit Option */}
            <div className="bg-white/70 border border-white p-6 rounded-2xl max-w-lg mx-auto mb-4 text-left shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#0F32DC] text-white flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#050419]">Fast-Track Your Sprint Kickoff</h4>
                  <p className="text-xs text-[#050419]/70">Lock in your engineering schedule immediately with an initial deposit.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPaymentModalOpen(true)}
                className="pill-btn pill-btn--dark w-full py-3 text-sm flex items-center justify-center gap-2 mt-4"
              >
                <Lock className="w-4 h-4" />
                <span>Pay Sprint Deposit Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Step Indicators */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-black/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#050419] text-white flex items-center justify-center text-xs font-bold font-mono">
                  {step}
                </span>
                <span className="font-semibold text-sm sm:text-base text-[#050419]">
                  {step === 1 && "Select Service & Timeline"}
                  {step === 2 && "Company & Contact Information"}
                </span>
              </div>
              <span className="text-xs text-gray-500 font-mono">Step {step} of 2</span>
            </div>

            {step === 1 && (
              <div className="flex flex-col gap-8 animate-fade-in">
                {/* Engagement Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-3">
                    Select Required Service ({servicesList.length} Options)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {servicesList.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, engagementType: type })}
                        className={`p-3.5 rounded-xl text-left border text-sm font-medium transition-all ${
                          formData.engagementType === type
                            ? 'bg-[#050419] text-white border-[#050419] shadow-md'
                            : 'bg-white/70 text-[#050419] hover:bg-white border-white/80'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-3">
                    Target Start Date
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      "Immediate / Urgent (< 1 week)",
                      "Within 2-4 weeks",
                      "Strategic Roadmap (Next Month)"
                    ].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`p-3.5 rounded-xl text-center border text-xs sm:text-sm font-medium transition-all ${
                          formData.timeline === t
                            ? 'bg-[#050419] text-white border-[#050419] shadow-md'
                            : 'bg-white/70 text-[#050419] hover:bg-white border-white/80'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setPaymentModalOpen(true)}
                    className="text-xs font-medium text-[#0F32DC] hover:underline flex items-center gap-1.5"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay Initial Deposit Directly Online</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="pill-btn pill-btn--dark px-8 py-3 text-sm"
                  >
                    <span>Continue to Contact Info</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-6 animate-fade-in">
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
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Tech"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
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
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-1.5">
                    Brief Technical Scope or Deliverables
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your goals, tech stack, or deadlines..."
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:border-[#0F32DC] text-sm"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="pill-btn pill-btn--glass text-sm px-6 py-2.5"
                  >
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="pill-btn pill-btn--dark px-8 py-3 text-sm"
                  >
                    <span>Schedule Technical Call</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        defaultService={formData.engagementType}
      />
    </div>
  );
};
