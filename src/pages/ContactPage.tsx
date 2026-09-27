import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Calendar,
  Building2,
  Navigation
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Buying a Home',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
          <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
          <span>Direct Broker Access</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Contact Mint Homes
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Connect directly with Karina Prudencio and our licensed advisory team. Visit our Valley Stream corporate office or submit an inquiry below.
        </p>
      </section>

      {/* 2. TWO-COLUMN LAYOUT: FORM ON LEFT, MAP & DETAILS ON RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Send a Direct Message
            </h2>
            <p className="text-xs text-slate-600">
              Please share your contact details and real estate goals. We guarantee a response within two business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-stone-50 rounded-2xl border border-slate-200 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950">
                Inquiry Received
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting Mint Homes. A licensed team member will follow up with you shortly at {formData.phone || formData.email || 'your contact number'}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', email: '', phone: '', serviceInterest: 'Buying a Home', message: '' });
                }}
                className="bg-slate-950 text-white font-semibold text-xs px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Maria Gonzalez"
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maria@example.com"
                    className="w-full bg-stone-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(516) 000-0000"
                    className="w-full bg-stone-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                >
                  <option value="Buying a Home">Buying a Home</option>
                  <option value="Selling a Property">Selling a Property</option>
                  <option value="Financial Advisory & Pre-Approval">Financial Advisory & Pre-Approval</option>
                  <option value="Commercial Real Estate">Commercial Real Estate</option>
                  <option value="Short Sale or Title Advisory">Short Sale or Title Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Criteria *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the property you are looking for or the home you wish to sell..."
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Office Details & Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* Office Contact Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                Brokerage Headquarters
              </span>
              <h3 className="font-display text-xl font-bold text-slate-950">
                Mint Homes Corporate Office
              </h3>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Address</div>
                  <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Phone Lines</div>
                  <div>Direct Office: <a href="tel:5169005542" className="text-slate-900 font-semibold hover:underline">(516) 900-5542</a></div>
                  <div>Broker Direct: <a href="tel:5163124467" className="text-slate-900 font-semibold hover:underline">(516) 312-4467</a></div>
                  <div>Secondary Line: <a href="tel:5162776745" className="text-slate-900 font-semibold hover:underline">(516) 277-6745</a></div>
                  <div>Toll Free: <a href="tel:8885921593" className="text-slate-900 font-semibold hover:underline">(888) 592-1593</a></div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Email Addresses</div>
                  <div>General: <a href="mailto:admin@minthomesli.com" className="text-slate-900 font-semibold hover:underline">admin@minthomesli.com</a></div>
                  <div>Broker: <a href="mailto:karina@minthomesli.com" className="text-slate-900 font-semibold hover:underline">karina@minthomesli.com</a></div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Hours of Operation</div>
                  <div>Monday to Saturday: 9:00 AM to 7:00 PM</div>
                  <div>Sunday: By Appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-amber-600" />
                <span>Valley Stream Location</span>
              </span>
              <a
                href="https://maps.google.com/?q=900+Rockaway+Ave,+Valley+Stream,+NY+11581"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 font-semibold hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="aspect-16/10 w-full bg-slate-100">
              <iframe
                title="Mint Homes Location Map"
                src="https://maps.google.com/maps?q=900%20Rockaway%20Ave,%20Valley%20Stream,%20NY%2011581&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. SINGLE CONSOLIDATED LEGAL DISCLAIMER */}
      <section className="p-6 bg-stone-50 rounded-2xl border border-slate-200 text-xs text-slate-500 leading-relaxed space-y-2">
        <div className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span>Licensed Brokerage Disclosure</span>
        </div>
        <p>
          Mint Homes is a licensed real estate broker in the State of New York. Corporate Office: 900 Rockaway Ave, Valley Stream, NY 11581. All material presented herein is intended for information purposes only and is compiled from sources deemed reliable, but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. Equal Housing Opportunity.
        </p>
      </section>
    </div>
  );
};
