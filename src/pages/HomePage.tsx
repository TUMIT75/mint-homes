import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Home, 
  Bed, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Landmark, 
  KeyRound, 
  Award, 
  Users, 
  Phone, 
  Clock, 
  ChevronRight, 
  Star,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Property, PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { TESTIMONIALS_DATA } from '../data/testimonials';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectProperty: (property: Property) => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onApplySearchFilters?: (filters: {
    town: string;
    propertyType: string;
    priceRange: string;
    beds: string;
  }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProperty,
  onOpenConsultation,
  onOpenCalculator,
  favorites,
  onToggleFavorite,
  onApplySearchFilters
}) => {
  // Hero Search Bar State
  const [selectedTown, setSelectedTown] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedBeds, setSelectedBeds] = useState('All');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onApplySearchFilters) {
      onApplySearchFilters({
        town: selectedTown,
        propertyType: selectedType,
        priceRange: selectedPrice,
        beds: selectedBeds,
      });
    }
    onNavigate('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredProperties = PROPERTIES_DATA.slice(0, 3);
  const featuredTestimonial = TESTIMONIALS_DATA[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION WITH WORKING SEARCH BAR OVERLAY */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Full-bleed Architectural Hero Image with Multi-layer Scrim */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
            alt="Long Island luxury residence exterior"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
          {/* Subtitle kicker with unboxed typographic separator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <span>Nassau County</span>
            <span aria-hidden="true">·</span>
            <span>Suffolk County</span>
            <span aria-hidden="true">·</span>
            <span>Queens</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
            Find Your Sanctuary Across Long Island
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
            Guiding families, sellers, and property investors with bespoke market advisory, verified MLS listings, and guaranteed fiduciary service from Valley Stream to Montauk.
          </p>

          {/* Interactive Search Engine Overlay Form */}
          <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 text-slate-900 text-left">
            <form onSubmit={handleHeroSearch} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>Location</span>
                  </label>
                  <select
                    value={selectedTown}
                    onChange={(e) => setSelectedTown(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-600"
                  >
                    <option value="All">All Long Island</option>
                    <option value="Valley Stream">Valley Stream</option>
                    <option value="Garden City">Garden City</option>
                    <option value="Rockville Centre">Rockville Centre</option>
                    <option value="Long Beach">Long Beach</option>
                    <option value="Floral Park">Floral Park</option>
                    <option value="Elmont">Elmont</option>
                    <option value="Merrick">Merrick</option>
                    <option value="Great Neck">Great Neck</option>
                    <option value="Huntington">Huntington</option>
                    <option value="Dix Hills">Dix Hills</option>
                    <option value="Massapequa">Massapequa</option>
                    <option value="Hicksville">Hicksville</option>
                  </select>
                </div>

                {/* Property Type Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                    <Home className="w-3.5 h-3.5 text-amber-600" />
                    <span>Property Type</span>
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-600"
                  >
                    <option value="All">All Types</option>
                    <option value="Single Family">Single Family</option>
                    <option value="Multi-Family">Multi-Family</option>
                    <option value="Condominium">Condominium</option>
                    <option value="Luxury Estate">Luxury Estate</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                    <span>Price Range</span>
                  </label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-600"
                  >
                    <option value="All">Any Price</option>
                    <option value="Under $750k">Under $750,000</option>
                    <option value="$750k to $1M">$750,000 to $1,000,000</option>
                    <option value="$1M to $1.5M">$1,000,000 to $1,500,000</option>
                    <option value="$1.5M+">$1,500,000 and Above</option>
                  </select>
                </div>

                {/* Bedrooms Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-amber-600" />
                    <span>Bedrooms</span>
                  </label>
                  <select
                    value={selectedBeds}
                    onChange={(e) => setSelectedBeds(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-600"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Quick Searches:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedType('Single Family');
                      onNavigate('properties');
                    }}
                    className="hover:text-amber-800 underline cursor-pointer"
                  >
                    Single Family
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedType('Multi-Family');
                      onNavigate('properties');
                    }}
                    className="hover:text-amber-800 underline cursor-pointer"
                  >
                    Multi-Family
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTown('Valley Stream');
                      onNavigate('properties');
                    }}
                    className="hover:text-amber-800 underline cursor-pointer"
                  >
                    Valley Stream
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-slate-950 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
                >
                  <Search className="w-4 h-4 text-amber-400" />
                  <span>Search Properties</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. PROVEN PERFORMANCE METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              $180M+
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-800">
              Closed Sales Volume
            </div>
            <p className="text-xs text-slate-500">Across Long Island and NYC</p>
          </div>

          <div className="space-y-1 border-l border-slate-100 pl-4 sm:pl-6">
            <div className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              98.4%
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-800">
              List to Sale Ratio
            </div>
            <p className="text-xs text-slate-500">Empirical pricing accuracy</p>
          </div>

          <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6">
            <div className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              14 Days
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-800">
              Average to Offer
            </div>
            <p className="text-xs text-slate-500">Targeted marketing distribution</p>
          </div>

          <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6">
            <div className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              100%
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-800">
              Service Guarantee
            </div>
            <p className="text-xs text-slate-500">Written fiduciary protections</p>
          </div>
        </div>
      </section>

      {/* 3. THREE INTERACTIVE SERVICE CARDS (REDESIGNED AS REQUESTED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200/80 inline-block mb-3">
            What Can We Do For You
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4">
            Comprehensive Real Estate Advisory
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether securing your first residence, marketing a luxury property, or structuring a multi-family investment, our specialized departments provide direct fiduciary guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1: Financial Advisory */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-slate-300">
            <div>
              <div className="w-14 h-14 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-950 mb-3">
                Financial Advisory
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Navigate the financial intricacies of Long Island ownership. We analyze village taxes, property reassessments, monthly carry costs, and long-term equity projections.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nassau and Suffolk tax grievance strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-family net operating income forecasts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1031 tax deferred exchange navigation</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCalculator}
              className="w-full bg-stone-100 hover:bg-stone-200 text-slate-900 font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Financial Tools</span>
              <ChevronRight className="w-4 h-4 text-amber-700" />
            </button>
          </div>

          {/* Service Card 2: Get Pre-Approved */}
          <div className="bg-white rounded-2xl p-8 border-2 border-amber-600/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Priority Step
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                <Landmark className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-950 mb-3">
                Mortgage Pre-Approval
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Strengthen your purchasing power before making an offer. We connect you with verified New York lending institutions for rapid underwritten pre-approvals.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct connections to trusted local mortgage bankers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FHA, VA, Conventional, and Jumbo loan assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>First-time homebuyer grant qualification</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Start Pre-Approval Process</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Service Card 3: Sell or Buy Your Home */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-slate-300">
            <div>
              <div className="w-14 h-14 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                <KeyRound className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-950 mb-3">
                Sell or Buy Your Home
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Full-service fiduciary representation. Sellers benefit from premier HDR photography, drone tours, and MLS syndication. Buyers receive early pre-market access.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complimentary professional home valuation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cancel-Anytime listing agreement protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>End-to-end closing concierge support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('properties')}
              className="w-full bg-stone-100 hover:bg-stone-200 text-slate-900 font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Current Listings</span>
              <ChevronRight className="w-4 h-4 text-amber-700" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROPERTIES CAROUSEL / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200/80 inline-block mb-3">
              Curated Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Featured Long Island Listings
            </h2>
          </div>

          <button
            onClick={() => onNavigate('properties')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors cursor-pointer group"
          >
            <span>View All Available Properties</span>
            <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={onSelectProperty}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      {/* 5. CEO & LEADERSHIP HIGHLIGHT: "GET READY TO GET YOUR KEYS" */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
                    alt="Md Mint Rahman, Founder and Principal Broker"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Verified Credential Tag */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-amber-600 text-white p-4 rounded-xl shadow-xl max-w-xs border border-amber-400/40">
                  <div className="font-display font-bold text-lg leading-tight">Md "Mint" Rahman</div>
                  <div className="text-xs text-amber-100 font-medium">Founder and Principal Broker</div>
                  <div className="text-[11px] text-amber-200 mt-1">NYS Licensed Real Estate Broker</div>
                </div>
              </div>
            </div>

            {/* Narrative & Value Pillars */}
            <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30 inline-block">
                  Get Ready to Get Your Keys
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  A Distinctive Fiduciary Commitment to Every Client
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When I founded Mint Homes in Valley Stream, my objective was straightforward: replace the hurried, impersonal nature of traditional real estate with rigorous financial advisory, empirical neighborhood analytics, and deep multicultural advocacy.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
                  <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Multilingual Client Support</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our team provides fluent guidance in English, Bengali, Spanish, Urdu, and Hindi for absolute contract clarity.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
                  <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Empirical MLS Valuation</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We rely on recent comparable settlement records rather than speculative algorithms to protect your equity.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
                  <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Active Community Presence</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Proud member of the Long Island Board of Realtors (LIBOR) and active supporter of local civic initiatives.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
                  <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Written Service Guarantees</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We hold ourselves accountable in writing with communication and cancel-anytime listing protections.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Private Advisory Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Meet Our Licensed Roster</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GUARANTEED SERVICE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-2xl border border-slate-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded border border-amber-300/80 inline-block">
                Client Protection Standards
              </span>
              <h3 className="font-display text-3xl font-bold text-slate-950 tracking-tight">
                The Mint Homes Five-Point Guarantee
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most real estate brokerages make promises. We commit to them in writing. Experience total peace of mind through every phase of your transaction.
              </p>
              <button
                onClick={() => onNavigate('guaranteed-service')}
                className="bg-slate-950 hover:bg-slate-800 text-white font-semibold py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Guarantee Details</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="font-bold text-slate-950 text-sm mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>2-Hour Response Promise</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calls, text messages, and buyer inquiries are returned within two business hours without exception.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="font-bold text-slate-950 text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Cancel-Anytime Listing</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If you are ever unsatisfied with our listing representation, you may cancel anytime before an accepted offer.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="font-bold text-slate-950 text-sm mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                  <span>Accurate Valuation Standard</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous comparative market analyses prevent costly pricing mistakes and protect your equity.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="font-bold text-slate-950 text-sm mb-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Dedicated Closing Concierge</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless coordination between title companies, attorneys, lenders, and village building departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED CLIENT TESTIMONIAL PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-xs text-slate-400 ml-2 font-medium">
                Verified Seller Experience
              </span>
            </div>

            <blockquote className="font-display text-2xl sm:text-3xl font-semibold leading-relaxed text-white">
              "{featuredTestimonial.quote}"
            </blockquote>

            <p className="text-slate-300 text-sm leading-relaxed">
              {featuredTestimonial.story}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <div className="font-semibold text-white text-base">
                  {featuredTestimonial.clientName}
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {featuredTestimonial.location} · {featuredTestimonial.propertySummary}
                </div>
              </div>

              <button
                onClick={() => onNavigate('testimonials')}
                className="text-xs uppercase font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer underline"
              >
                <span>Read 340+ Verified Reviews</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RECENT COMMUNITY UPDATES AND SOCIAL SPOTLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200/80 inline-block mb-3">
              Community and Market Updates
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Life and Closings Across Long Island
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Follow our neighborhood tours, recent milestone settlements, and weekly local insights.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 bg-stone-100 px-3.5 py-2 rounded-lg">
            <span>Official Feed</span>
            <span>·</span>
            <span>@minthomesli</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="aspect-square relative overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
                  alt="Valley Stream Closing Milestone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded">
                  Closing Day
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Valley Stream, NY</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-950 group-hover:text-amber-800 transition-colors">
                  Keys Handed Over in Gibson Section
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Congratulations to our wonderful buyers on securing their forever colonial home. Closed in 38 days with zero lending delays.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 text-[11px] font-semibold text-amber-800 flex items-center justify-between border-t border-slate-100 mt-2">
              <span>View Transaction Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="aspect-square relative overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
                  alt="Long Beach Boardwalk Penthouse Tour"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded">
                  Open House
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Long Beach, NY</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-950 group-hover:text-amber-800 transition-colors">
                  Oceanfront Boardwalk Showcase
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Welcomed over thirty prospective buyers during Sunday public preview at our Shore Road corner penthouse listing.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 text-[11px] font-semibold text-amber-800 flex items-center justify-between border-t border-slate-100 mt-2">
              <span>Inspect Listing Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="aspect-square relative overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                  alt="Garden City Architectural Spotlight"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded">
                  Architecture
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Garden City, NY</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-950 group-hover:text-amber-800 transition-colors">
                  Center Hall Colonial Features
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Spotlighting custom millwork, sweeping bridal staircases, and Wolf chef kitchens in central Nassau County estates.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 text-[11px] font-semibold text-amber-800 flex items-center justify-between border-t border-slate-100 mt-2">
              <span>Read Market Guide</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="aspect-square relative overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                  alt="Elmont Multi-Family Investment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded">
                  Investor Alert
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Elmont, NY</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-950 group-hover:text-amber-800 transition-colors">
                  Legal Two-Family Cash Flow
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Navigating rental yield, separate utility meters, and certificate of occupancy records near UBS Arena.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 text-[11px] font-semibold text-amber-800 flex items-center justify-between border-t border-slate-100 mt-2">
              <span>Review Rent Projections</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOME VALUATION / DIRECT CONTACT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="border border-slate-200 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white shadow-xs">
          <div className="max-w-2xl space-y-2 text-center lg:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Curious What Your Long Island Home Is Worth Today?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Receive a customized, confidential comparative market evaluation with recent closed neighborhood comps. Zero obligation, zero cost.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer text-center"
            >
              Request Free Valuation
            </button>
            <a
              href="tel:5169005542"
              className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-slate-900 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors text-center"
            >
              Call (516) 900-5542
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
