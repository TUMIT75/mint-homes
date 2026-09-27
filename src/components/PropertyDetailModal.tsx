import React, { useState } from 'react';
import { 
  X, 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  Calendar, 
  Check, 
  Phone, 
  Mail, 
  Calculator, 
  Heart, 
  Share2, 
  Building, 
  GraduationCap, 
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onOpenConsultation: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenConsultation,
}) => {
  if (!property) return null;

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanYears, setLoanYears] = useState(30);
  const [tourFormSubmitted, setTourFormSubmitted] = useState(false);
  const [tourDate, setTourDate] = useState('2026-10-02');
  const [tourTime, setTourTime] = useState('11:00 AM');
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');

  const downPaymentAmount = Math.round((property.price * downPaymentPercent) / 100);
  const loanPrincipal = property.price - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanYears * 12;
  
  const monthlyPrincipalInterest = monthlyRate > 0
    ? Math.round(
        (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      )
    : Math.round(loanPrincipal / numberOfPayments);

  const monthlyPropertyTax = Math.round(property.taxesAnnual / 12);
  const monthlyInsurance = 160;
  const monthlyHOA = property.hoaMonthly || 0;
  const totalMonthly = monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTourFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {property.status}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                MLS Listing ID #{property.id.toUpperCase()}
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 truncate max-w-xl">
              {property.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => onToggleFavorite(property.id, e)}
              className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                isFavorite 
                  ? 'bg-red-50 border-red-200 text-red-600' 
                  : 'bg-stone-50 border-slate-200 text-slate-600 hover:bg-stone-100'
              }`}
              title="Save to favorites"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
            </button>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="p-2.5 rounded-full bg-stone-50 border border-slate-200 text-slate-600 hover:bg-stone-100 transition-colors cursor-pointer"
              title="Copy share link"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-stone-100 text-slate-700 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          {/* Photo Gallery with Thumbnail Rail */}
          <div className="space-y-3">
            <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-950">
              <img
                src={property.photos[activePhotoIdx]}
                alt={`${property.title} view ${activePhotoIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              
              {property.photos.length > 1 && (
                <>
                  <button
                    onClick={() => setActivePhotoIdx((prev) => (prev === 0 ? property.photos.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setActivePhotoIdx((prev) => (prev === property.photos.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md font-medium">
                Photo {activePhotoIdx + 1} of {property.photos.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.photos.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {property.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIdx === idx ? 'border-amber-600 scale-98 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing, Address & Key Metrics Grid */}
          <div className="bg-stone-50 border border-slate-200 rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
                  {formattedPrice}
                </span>
                <span className="text-sm font-medium text-slate-600">
                  Est. ${totalMonthly.toLocaleString()} / month
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-base text-slate-800 font-medium">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{property.address}, {property.town}, NY {property.zip} ({property.county} County)</span>
              </div>
              {property.openHouseTime && (
                <div className="flex items-center gap-2 text-sm text-amber-900 bg-amber-50/80 border border-amber-200/80 px-3 py-1.5 rounded-md mt-2 w-fit">
                  <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-medium">Public Open House: {property.openHouseTime}</span>
                </div>
              )}
            </div>

            {/* Core Metrics Column */}
            <div className="grid grid-cols-3 gap-3 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 text-center">
              <div className="p-2">
                <div className="text-xl font-bold text-slate-900">{property.beds}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Beds</div>
              </div>
              <div className="p-2">
                <div className="text-xl font-bold text-slate-900">{property.baths}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Baths</div>
              </div>
              <div className="p-2">
                <div className="text-xl font-bold text-slate-900">{property.sqft.toLocaleString()}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Sq Ft</div>
              </div>
            </div>
          </div>

          {/* Two-Column Content: Detailed Specs & Tour Scheduler */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview & Description */}
              <div>
                <h3 className="font-display text-xl font-bold text-slate-950 mb-3">
                  Property Description
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Architectural & Structural Specifications */}
              <div>
                <h3 className="font-display text-xl font-bold text-slate-950 mb-3">
                  Property Specifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  <div className="p-3 bg-stone-50 rounded-lg border border-slate-100">
                    <span className="text-xs text-slate-500 block">Property Type</span>
                    <span className="font-semibold text-slate-900">{property.propertyType}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-slate-100">
                    <span className="text-xs text-slate-500 block">Year Built</span>
                    <span className="font-semibold text-slate-900">{property.yearBuilt}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-slate-100">
                    <span className="text-xs text-slate-500 block">Lot Dimension</span>
                    <span className="font-semibold text-slate-900">{property.lotSize}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-slate-100">
                    <span className="text-xs text-slate-500 block">Annual Property Taxes</span>
                    <span className="font-semibold text-slate-900">${property.taxesAnnual.toLocaleString()}/yr</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-slate-100">
                    <span className="text-xs text-slate-500 block">County</span>
                    <span className="font-semibold text-slate-900">{property.county} County</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-slate-100">
                    <span className="text-xs text-slate-500 block">Price Per Sq Ft</span>
                    <span className="font-semibold text-slate-900">${Math.round(property.price / property.sqft)}</span>
                  </div>
                </div>
              </div>

              {/* Premium Features Checklist */}
              <div>
                <h3 className="font-display text-xl font-bold text-slate-950 mb-3">
                  Interior and Exterior Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* School District Information */}
              <div>
                <h3 className="font-display text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-amber-700" />
                  <span>Public Schools and District</span>
                </h3>
                <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-100">
                    <span className="text-slate-600">School District:</span>
                    <span className="font-semibold text-slate-900">{property.schools.district}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-100">
                    <span className="text-slate-600">Elementary School:</span>
                    <span className="font-semibold text-slate-900">{property.schools.elementary}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-slate-600">High School:</span>
                    <span className="font-semibold text-slate-900">{property.schools.highSchool}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Mortgage Calculator Component for this listing */}
              <div className="p-5 bg-stone-50 border border-slate-200 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-slate-950 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-700" />
                    <span>Monthly Payment Calculator</span>
                  </h3>
                  <span className="text-base font-bold text-amber-800">
                    ${totalMonthly.toLocaleString()}/mo
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-600 mb-1 font-medium">
                      Down Payment: {downPaymentPercent}% (${downPaymentAmount.toLocaleString()})
                    </label>
                    <input 
                      type="range" 
                      min="5" 
                      max="50" 
                      step="5"
                      value={downPaymentPercent} 
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1 font-medium">
                      Interest Rate: {interestRate}%
                    </label>
                    <input 
                      type="range" 
                      min="4.0" 
                      max="9.0" 
                      step="0.1"
                      value={interestRate} 
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1 font-medium">
                      Loan Term: {loanYears} Years
                    </label>
                    <select
                      value={loanYears}
                      onChange={(e) => setLoanYears(Number(e.target.value))}
                      className="w-full p-1.5 bg-white border border-slate-300 rounded text-xs text-slate-800"
                    >
                      <option value={30}>30 Years Fixed</option>
                      <option value={15}>15 Years Fixed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <div>
                    <span className="block text-slate-400">Principal and Interest</span>
                    <strong className="text-slate-900 font-semibold">${monthlyPrincipalInterest.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400">Property Taxes</span>
                    <strong className="text-slate-900 font-semibold">${monthlyPropertyTax.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400">Homeowners Insurance</span>
                    <strong className="text-slate-900 font-semibold">${monthlyInsurance}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400">HOA Fee</span>
                    <strong className="text-slate-900 font-semibold">${monthlyHOA}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column: Tour Request & Agent Profile */}
            <div className="space-y-6">
              {/* Tour Request Form */}
              <div className="bg-slate-950 text-white rounded-xl p-5 shadow-lg border border-slate-800">
                <h4 className="font-display text-lg font-bold text-white mb-1">
                  Schedule a Private Tour
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Experience this residence in person with a Mint Homes licensed specialist.
                </p>

                {tourFormSubmitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-lg p-4 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="font-semibold text-sm text-emerald-200">Tour Request Received</div>
                    <p className="text-xs text-emerald-300/90 leading-relaxed">
                      Thank you, {tourName}. Our listing specialist will call {tourPhone} to confirm your appointment for {tourDate} at {tourTime}.
                    </p>
                    <button
                      onClick={() => setTourFormSubmitted(false)}
                      className="mt-2 text-xs text-white underline hover:text-emerald-300 cursor-pointer"
                    >
                      Book another time
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleTourSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Select Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={tourDate}
                        onChange={(e) => setTourDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Preferred Time
                      </label>
                      <select
                        value={tourTime}
                        onChange={(e) => setTourTime(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:30 PM">2:30 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        value={tourName}
                        onChange={(e) => setTourName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(516) 000-0000"
                        value={tourPhone}
                        onChange={(e) => setTourPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all mt-2 cursor-pointer shadow-md"
                    >
                      Request Private Showing
                    </button>

                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Mint Homes 2-Hour Response Guarantee</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Assigned Agent Profile Card */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Listing Specialist
                </span>
                <div className="flex items-center gap-3">
                  <img
                    src={property.agent.photo}
                    alt={property.agent.name}
                    className="w-14 h-14 rounded-full object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <h5 className="font-semibold text-slate-950 text-sm">
                      {property.agent.name}
                    </h5>
                    <p className="text-xs text-slate-500">
                      NYS Licensed Real Estate Specialist
                    </p>
                    <p className="text-xs text-amber-700 font-medium">
                      Mint Homes Long Island
                    </p>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href={`tel:${property.agent.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-stone-100 hover:bg-stone-200 text-slate-900 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>Call Direct: {property.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 border border-slate-200 hover:bg-stone-50 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-600" />
                    <span>Email Agent: {property.agent.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
