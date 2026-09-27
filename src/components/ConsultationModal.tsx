import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Buying a Home'
}) => {
  if (!isOpen) return null;

  const [service, setService] = useState(initialService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [neighborhood, setNeighborhood] = useState('Valley Stream');
  const [timeline, setTimeline] = useState('Within 30 to 60 Days');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Confidential Brokerage Consultation</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            Schedule Your Advisory Session
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Meet with Md Mint Rahman or a dedicated Long Island licensed specialist in our Valley Stream office or via private video conference.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-950">
                Appointment Requested
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {name}. A licensed specialist will call you at <strong className="text-slate-900">{phone}</strong> within two business hours to confirm your consultation schedule.
              </p>
              <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto space-y-1 text-left">
                <div><strong>Service:</strong> {service}</div>
                <div><strong>Area of Interest:</strong> {neighborhood}</div>
                <div><strong>Timeline:</strong> {timeline}</div>
              </div>
              <button
                onClick={resetForm}
                className="mt-4 bg-slate-950 hover:bg-slate-800 text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  How Can We Assist You?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Buying a Home',
                    'Selling a Home',
                    'Financial Advisory',
                    'Mortgage Pre-Approval',
                    'Multi-Family Investment',
                    'Free Home Valuation'
                  ].map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setService(srv)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        service === srv
                          ? 'bg-amber-50 border-amber-600 text-amber-900 font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First and last name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(516) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Long Island Community
                  </label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-600"
                  >
                    <option value="Valley Stream">Valley Stream / Gibson</option>
                    <option value="Garden City">Garden City</option>
                    <option value="Rockville Centre">Rockville Centre</option>
                    <option value="Long Beach">Long Beach</option>
                    <option value="Floral Park">Floral Park</option>
                    <option value="Elmont">Elmont / Franklin Square</option>
                    <option value="Merrick / Bellmore">Merrick / Bellmore</option>
                    <option value="Great Neck / North Shore">Great Neck / North Shore</option>
                    <option value="Huntington / Dix Hills">Huntington / Dix Hills</option>
                    <option value="Other Long Island Area">Other Long Island Area</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Questions or Property Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your price target, property style, or timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Confirm Consultation Request</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>100% Confidential</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>2-Hour Response Guarantee</span>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
