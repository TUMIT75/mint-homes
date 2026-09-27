import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Navigation, 
  Send, 
  Train, 
  Building2,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Home Valuation Request');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM to 12:00 PM)');
  const [message, setMessage] = useState('');
  const [consentChecked, setConsentChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          Valley Stream Headquarters
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Connect with Mint Homes
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Visit our Valley Stream brokerage offices or connect directly with our licensed advisory team. We respond to all inquiries within two business hours.
        </p>
      </section>

      {/* 2. CLEAN TWO-COLUMN LAYOUT: FORM ON LEFT, CONTACT & MAP ON RIGHT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Send a Confidential Message
            </h2>
            <p className="text-xs text-slate-500">
              Fill out the details below and an experienced licensed specialist will reach out promptly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 bg-stone-50 rounded-xl border border-slate-200 p-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-950">
                Message Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Your inquiry regarding "{subject}" has been assigned to our senior brokerage team. We will contact you at <strong className="text-slate-900">{phone}</strong> during your preferred window ({preferredTime}).
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-slate-950 text-white font-semibold py-2 px-6 rounded-lg text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
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
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-600"
                  >
                    <option value="Home Valuation Request">Free Home Valuation Request</option>
                    <option value="Buyer Representation">Buyer Representation and Tours</option>
                    <option value="Multi-Family Investment">Multi-Family and Commercial Advisory</option>
                    <option value="Mortgage Pre-Approval">Mortgage Pre-Approval Guidance</option>
                    <option value="Career Inquiry">Agent Career Opportunities</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Contact Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Morning (9:00 AM to 12:00 PM)',
                    'Afternoon (12:00 PM to 4:00 PM)',
                    'Evening (4:00 PM to 7:00 PM)'
                  ].map((win) => (
                    <button
                      key={win}
                      type="button"
                      onClick={() => setPreferredTime(win)}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                        preferredTime === win
                          ? 'bg-amber-50 border-amber-600 text-amber-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-stone-50'
                      }`}
                    >
                      {win.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message or Specific Property of Interest
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the property, timeline, or assistance you require..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              {/* Single Consolidated Legal Disclaimer and Consent Checkbox */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-slate-600 leading-relaxed">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-0.5 accent-amber-600 shrink-0 rounded"
                  />
                  <span>
                    By submitting this form, you consent to receive telephone calls and text messages from Mint Homes regarding your real estate inquiry at the telephone number provided. Consent is not a condition of purchase. Message and data rates may apply. You may opt out at any time by replying STOP.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!consentChecked}
                className="w-full bg-slate-950 hover:bg-slate-800 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Submit Inquiry</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Mint Homes 2-Hour Response Guarantee Applies</span>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Office Details & Styled Interactive Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* Office Contact Dossier */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                Corporate Office
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-950">
                Mint Homes Real Estate
              </h3>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950 block">Brokerage Address</strong>
                  <span>900 Rockaway Ave, Valley Stream, NY 11581</span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Centrally situated in Nassau County, near Sunrise Highway and Merrick Road.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950 block">Telephone Lines</strong>
                  <div className="space-y-0.5">
                    <div>
                      Direct Office: <a href="tel:5169005542" className="text-amber-800 font-bold hover:underline">(516) 900-5542</a>
                    </div>
                    <div>
                      Toll Free: <a href="tel:8885921593" className="text-slate-700 font-medium hover:underline">(888) 592-1593</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950 block">Electronic Mail</strong>
                  <a href="mailto:info@minthomesli.com" className="text-amber-800 font-medium hover:underline">
                    info@minthomesli.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950 block">Office Hours</strong>
                  <div className="text-xs text-slate-600 space-y-0.5">
                    <div>Monday to Saturday: 9:00 AM to 7:00 PM</div>
                    <div>Sunday: 10:00 AM to 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Train className="w-4 h-4 text-slate-400" />
              <span>5 minutes from LIRR Valley Stream and Gibson Stations</span>
            </div>
          </div>

          {/* Styled Visual Location Map */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 text-white space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <Navigation className="w-4 h-4" />
                <span>Valley Stream Location Map</span>
              </div>
              <span className="text-[10px] text-slate-400">Rockaway Ave Corridor</span>
            </div>

            {/* Stylized Visual Map Display */}
            <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />
              
              {/* Street grid representation */}
              <div className="relative w-full h-full flex flex-col justify-around text-[10px] text-slate-500">
                <div className="border-b border-slate-800/80 pb-1 flex justify-between">
                  <span>Merrick Road</span>
                  <span className="text-slate-600">RT 27</span>
                </div>
                <div className="relative py-4 flex items-center justify-center">
                  <div className="absolute inset-y-0 w-8 bg-slate-800/60 rounded" />
                  <div className="z-10 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg shadow-xl font-bold text-xs flex items-center gap-1.5 animate-pulse">
                    <Building2 className="w-4 h-4 text-slate-950" />
                    <span>Mint Homes (900 Rockaway)</span>
                  </div>
                </div>
                <div className="border-t border-slate-800/80 pt-1 flex justify-between">
                  <span>Sunrise Highway</span>
                  <span>Valley Stream LIRR</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=900+Rockaway+Ave,+Valley+Stream,+NY+11581"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
