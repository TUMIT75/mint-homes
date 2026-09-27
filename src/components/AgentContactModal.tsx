import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Send 
} from 'lucide-react';
import { Agent } from '../data/agents';

interface AgentContactModalProps {
  agent: Agent | null;
  onClose: () => void;
}

export const AgentContactModal: React.FC<AgentContactModalProps> = ({
  agent,
  onClose
}) => {
  if (!agent) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Schedule a Showing');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Agent Header Banner */}
        <div className="bg-slate-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/60 shrink-0"
            />
            <div>
              <div className="text-amber-400 text-[11px] font-semibold uppercase tracking-wider">
                Direct Agent Connection
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {agent.name}
              </h3>
              <p className="text-xs text-slate-300">
                {agent.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-950">
                Direct Message Dispatched
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, {name}. {agent.name} has been notified and will reach out to you via {phone} shortly.
              </p>
              <div className="p-3 bg-stone-50 rounded-lg text-xs text-slate-600 max-w-xs mx-auto">
                <span>Direct Agent Phone: </span>
                <a href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-slate-900 underline">
                  {agent.phone}
                </a>
              </div>
              <button
                onClick={onClose}
                className="mt-4 bg-slate-950 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="flex items-center gap-2 p-3 bg-amber-50/70 border border-amber-200/70 rounded-lg text-xs text-amber-950">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Licensed with Mint Homes. NYS License {agent.licenseNumber}.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Reason for Inquiry
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-600"
                >
                  <option value="Schedule a Showing">Schedule a Showing</option>
                  <option value="Listing and Selling My Home">Listing and Selling My Home</option>
                  <option value="Neighborhood Market Consultation">Neighborhood Market Consultation</option>
                  <option value="Mortgage Pre-Approval Guidance">Mortgage Pre-Approval Guidance</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(516) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={2}
                  placeholder={`Hello ${agent.name}, I am looking for assistance with...`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Message to {agent.name.split(' ')[0]}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xs text-amber-800 hover:text-amber-900 font-semibold inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Or Call Directly: {agent.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
