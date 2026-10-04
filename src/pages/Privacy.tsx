import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-6xl mx-auto mb-24">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-2">Legal</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#050419] mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#050419]/60">Last updated: October 2026</p>
      </div>

      <div className="glass-card p-8 sm:p-12 border border-white/70 space-y-8 text-[#050419]/80 leading-relaxed text-base">
        <section>
          <h2 className="text-xl font-bold text-[#050419] mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly through our consultation booking forms, consultant applications, and direct communications, including your name, email, phone number, company information, and technical project scope.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#050419] mb-3">2. How We Use Information</h2>
          <p>We use collected data strictly to schedule consultations, assess engineering fit, execute consulting agreements, and ensure enterprise compliance standards.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#050419] mb-3">3. Data Security & Confidentiality</h2>
          <p>All client information, architecture blueprints, and source code are protected under rigorous bilateral Non-Disclosure Agreements (NDA) and encrypted using industry standard protocols.</p>
        </section>
      </div>
    </div>
  );
};
