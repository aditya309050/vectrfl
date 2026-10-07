import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 max-w-6xl mx-auto mb-24">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#0F32DC] block mb-2">Legal</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#050419] mb-4">Terms of Service</h1>
        <p className="text-sm text-[#050419]/60">Last updated: October 2026</p>
      </div>

      <div className="glass-card p-8 sm:p-12 border border-white/70 space-y-8 text-[#050419]/80 leading-relaxed text-base">
        <section>
          <h2 className="text-xl font-bold text-[#050419] mb-3">1. Agreement to Terms</h2>
          <p>By accessing Kavix platforms and engaging our specialized engineering squads, you agree to be bound by these Terms of Service and all related Statements of Work (SOW).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#050419] mb-3">2. Intellectual Property & Ownership</h2>
          <p>Upon full milestone payment settlement, all client-specific custom code, architectural designs, and engineering artifacts created by Kavix squads become the exclusive intellectual property of the client with zero vendor lock-in.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#050419] mb-3">3. Service Level Agreements (SLA)</h2>
          <p>Our emergency incident response and consulting deliverables are governed by explicit, contractual SLAs agreed upon in each custom engagement order.</p>
        </section>
      </div>
    </div>
  );
};
