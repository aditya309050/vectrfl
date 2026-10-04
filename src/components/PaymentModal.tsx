import React, { useState } from 'react';
import {
  X,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Download,
  Building,
  Smartphone,
  Sparkles
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPrice?: number;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Frontend Development",
  defaultPrice = 1999
}) => {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [amount, setAmount] = useState(defaultPrice);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'paypal' | 'invoice'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const [cardData, setCardData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    country: 'United States',
    zip: ''
  });

  if (!isOpen) return null;

  const serviceOptions = [
    { name: "Frontend Development", price: 1999 },
    { name: "Full-Stack Development", price: 3499 },
    { name: "Web Development", price: 2499 },
    { name: "UI/UX Implementation", price: 1499 },
    { name: "API Integration", price: 1299 },
    { name: "Payment Integration", price: 999 },
    { name: "Authentication", price: 1199 },
    { name: "Third-Party Integrations", price: 899 },
    { name: "SEO", price: 999 },
    { name: "Performance Optimization", price: 1099 },
    { name: "Testing & QA", price: 1299 },
    { name: "Deployment & DevOps", price: 1499 },
    { name: "Bug Fixing", price: 699 },
    { name: "Maintenance & Support", price: 799 },
    { name: "Custom Project Deposit", price: 1000 }
  ];

  const handleServiceChange = (serviceName: string) => {
    setSelectedService(serviceName);
    const found = serviceOptions.find(s => s.name.toLowerCase() === serviceName.toLowerCase() || serviceName.toLowerCase().includes(s.name.toLowerCase()));
    if (found) {
      setAmount(found.price);
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTransactionId(`TX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
    }, 1600);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = raw.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      setCardData({ ...cardData, cardNumber: parts.join(' ') });
    } else {
      setCardData({ ...cardData, cardNumber: raw });
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    setCardData({ ...cardData, expiry: val.substring(0, 5) });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050419]/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#D0E1EB] border border-white/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#050419] text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0F32DC] flex items-center justify-center text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">Vectr Secure Checkout</h3>
              <p className="text-xs text-gray-300 font-mono">256-Bit Encrypted Payment Integration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Payment Success View */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-green-600 mb-1 block">
              Payment Successful
            </span>
            <h2 className="text-3xl font-bold text-[#050419] mb-2">Thank you for your business!</h2>
            <p className="text-sm text-[#050419]/70 mb-8 max-w-md mx-auto">
              Your payment for <strong>{selectedService}</strong> has been confirmed. A formal receipt and project kick-off roadmap were dispatched to your email.
            </p>

            {/* Receipt Box */}
            <div className="bg-white/80 border border-white p-6 rounded-2xl text-left mb-8 max-w-md mx-auto shadow-sm">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-black/10 text-xs font-mono text-gray-500">
                <span>Transaction Reference</span>
                <span className="font-bold text-[#050419]">{transactionId}</span>
              </div>
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-black/10 text-sm">
                <span className="text-gray-600">Service Engaged</span>
                <span className="font-semibold text-[#050419] text-right">{selectedService}</span>
              </div>
              <div className="flex justify-between items-center text-base font-bold text-[#050419]">
                <span>Total Amount Paid</span>
                <span className="text-[#0F32DC]">${amount.toLocaleString()} USD</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="pill-btn pill-btn--glass text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Invoice PDF</span>
              </button>
              <button
                onClick={onClose}
                className="pill-btn pill-btn--dark text-sm px-8"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          /* Payment Form View */
          <form onSubmit={handlePayment} className="p-6 sm:p-10">
            {/* Service Selection & Price */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-2">
                Selected Service / Engagement
              </label>
              <select
                value={selectedService}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-[#0F32DC] text-sm font-medium text-[#050419]"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.name} value={opt.name}>
                    {opt.name} — ${opt.price.toLocaleString()} USD
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#050419]/70 mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#050419] text-white border-[#050419] shadow-md'
                      : 'bg-white/80 text-[#050419] hover:bg-white border-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`py-3 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                    paymentMethod === 'apple'
                      ? 'bg-[#050419] text-white border-[#050419] shadow-md'
                      : 'bg-white/80 text-[#050419] hover:bg-white border-white'
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Apple / Google Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`py-3 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                    paymentMethod === 'paypal'
                      ? 'bg-[#050419] text-white border-[#050419] shadow-md'
                      : 'bg-white/80 text-[#050419] hover:bg-white border-white'
                  }`}
                >
                  <span className="font-extrabold text-sm text-[#0F32DC]">Pay</span>
                  <span>PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('invoice')}
                  className={`py-3 px-3 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                    paymentMethod === 'invoice'
                      ? 'bg-[#050419] text-white border-[#050419] shadow-md'
                      : 'bg-white/80 text-[#050419] hover:bg-white border-white'
                  }`}
                >
                  <Building className="w-5 h-5" />
                  <span>Wire / Net 30</span>
                </button>
              </div>
            </div>

            {/* Card Inputs */}
            {paymentMethod === 'card' && (
              <div className="space-y-4 bg-white/60 p-5 rounded-2xl border border-white mb-6 animate-fade-in">
                <div>
                  <label className="block text-xs font-semibold text-[#050419]/70 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={cardData.name}
                    onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 bg-white focus:outline-none focus:border-[#0F32DC] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#050419]/70 mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength={19}
                      placeholder="4242 •••• •••• 4242"
                      value={cardData.cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-black/10 bg-white focus:outline-none focus:border-[#0F32DC] text-sm font-mono"
                    />
                    <CreditCard className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#050419]/70 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM / YY"
                      maxLength={5}
                      value={cardData.expiry}
                      onChange={handleExpiryChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 bg-white focus:outline-none focus:border-[#0F32DC] text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#050419]/70 mb-1">
                      CVC / Security Code
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={4}
                      placeholder="CVC"
                      value={cardData.cvc}
                      onChange={(e) => setCardData({ ...cardData, cvc: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 bg-white focus:outline-none focus:border-[#0F32DC] text-sm font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'apple' && (
              <div className="bg-white/60 p-6 rounded-2xl border border-white text-center mb-6 animate-fade-in">
                <p className="text-sm text-[#050419]/80 mb-4">
                  Pay instantly using your biometrically authenticated Apple Pay or Google Pay wallet.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium text-sm cursor-pointer hover:bg-black/90">
                  <span>Pay with Wallet</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="bg-white/60 p-6 rounded-2xl border border-white text-center mb-6 animate-fade-in">
                <p className="text-sm text-[#050419]/80 mb-4">
                  You will be redirected to PayPal's secure portal to authorize your payment of <strong>${amount.toLocaleString()} USD</strong>.
                </p>
              </div>
            )}

            {paymentMethod === 'invoice' && (
              <div className="bg-white/60 p-6 rounded-2xl border border-white text-left mb-6 animate-fade-in">
                <p className="text-sm text-[#050419]/80 mb-2">
                  For enterprise invoicing, Net 30 terms, and ACH / Wire transfers, submit your PO below.
                </p>
                <input
                  type="text"
                  placeholder="Enterprise PO # (Optional)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 bg-white focus:outline-none focus:border-[#0F32DC] text-sm"
                />
              </div>
            )}

            {/* Total Summary & Submit */}
            <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-500 block">Total Due</span>
                <span className="text-2xl sm:text-3xl font-black text-[#050419] tracking-tight">
                  ${amount.toLocaleString()} <span className="text-xs font-normal text-gray-500">USD</span>
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="pill-btn pill-btn--dark text-sm px-8 py-3.5 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Securely...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay ${amount.toLocaleString()} USD</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Security Assurance */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                PCI-DSS Level 1 Certified
              </span>
              <span>•</span>
              <span>256-Bit SSL Encryption</span>
              <span>•</span>
              <span>Satisfaction SLA Guarantee</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
