import React, { useState, useEffect } from 'react';
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
  Users, 
  Phone, 
  ChevronRight, 
  Star,
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  Instagram,
  FileText,
  BadgeCheck,
  Mail,
  Calculator,
  Compass,
  Building2,
  Calendar
} from 'lucide-react';
import { Property, PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { AGENTS_DATA } from '../data/agents';

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
  // Hero Slider Images from Live Site
  const heroSlides = [
    {
      url: 'https://static.wixstatic.com/media/ca7abb_08da1a03996444938360ffb130aabf1c~mv2.jpg',
      tag: 'Luxury Mint Homes Line',
      title: 'Find Your Perfect Property in Long Island & Queens',
      subtitle: 'Experience, legal diligence, and personalized fiduciary service since 2007'
    },
    {
      url: 'https://static.wixstatic.com/media/ca7abb_bcb028e23298404d99de22818902fe56~mv2.webp',
      tag: 'Ready to Get Your Keys',
      title: 'Making Homeownership Seamless and Stress-Free',
      subtitle: 'Over 15 years paralegal background securing optimal terms and clean title resolution'
    },
    {
      url: 'https://static.wixstatic.com/media/ca7abb_51d1398575af48c991d9f11400c5869d~mv2.jpg',
      tag: 'Valley Stream Headquarters',
      title: 'Trusted Real Estate Guidance You Can Count On',
      subtitle: 'From financial advisory to mortgage pre-approval and successful closings'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
  const featuredTestimonials = TESTIMONIALS_DATA.slice(0, 3);
  const ceo = AGENTS_DATA.find((a) => a.isLeadership) || AGENTS_DATA[0];

  // Real Instagram / Listing updates from live site
  const liveUpdates = [
    {
      id: 'ig-1',
      tag: 'New Listing Alert',
      title: 'Spacious & Fully Renovated Restaurant',
      caption: 'Large bar area, huge basement for storage, all brand-new equipment included. Prime location on main road with high traffic and visibility.',
      contacts: 'Nataly Fuentes: (929) 282-7753 | Karina Prudencio: (516) 312-4467',
      image: 'https://static.wixstatic.com/media/ca7abb_d83fed79882f4bff969bcc294d5f2b95~mv2.jpeg',
      badge: 'Commercial Prime'
    },
    {
      id: 'ig-2',
      tag: 'Open House',
      title: 'Well-Maintained 4-Bedroom Cape in Valley Stream',
      caption: 'Offering comfort, versatility, and plenty of space inside and out. Enjoy the open-concept layout, dedicated office space, and private yard.',
      contacts: 'Mint Homes Advisory Desk: (516) 900-5542',
      image: 'https://static.wixstatic.com/media/ca7abb_51d1398575af48c991d9f11400c5869d~mv2.jpg',
      badge: 'Open House Tour'
    },
    {
      id: 'ig-3',
      tag: 'Just Sold',
      title: 'Another Month of Successful Closings',
      caption: 'Congratulations to the new homeowners. Thinking about selling or buying your home? Let us guide you with expertise, dedication, and results.',
      contacts: 'Direct Broker Line: (516) 312-4467',
      image: 'https://static.wixstatic.com/media/ca7abb_08da1a03996444938360ffb130aabf1c~mv2.jpg',
      badge: 'Successfully Closed'
    },
    {
      id: 'ig-4',
      tag: 'Property Advisory',
      title: 'Investing in Quality Work for Long-Term Value',
      caption: 'Cheap today does not always mean economical tomorrow. When it comes to your property, cutting corners on repairs may seem like a quick way to save money, but quality work protects your investment.',
      contacts: 'Karina Prudencio, Broker: (516) 312-4467',
      image: 'https://static.wixstatic.com/media/ca7abb_bcb028e23298404d99de22818902fe56~mv2.webp',
      badge: 'Fiduciary Tip'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 sm:pb-28 lg:pb-32">
      {/* 1. HERO SLIDER WITH WORKING SEARCH BAR OVERLAY */}
      <section className="relative min-h-[660px] lg:min-h-[740px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Slider Background Images */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-102 transition-transform duration-6000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        ))}

        {/* Slider Navigation Arrows */}
        <button
          onClick={() => setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/30">
            <span>{heroSlides[activeSlide].tag}</span>
            <span aria-hidden="true">·</span>
            <span>Valley Stream, NY</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-4">
            {heroSlides[activeSlide].title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
            {heroSlides[activeSlide].subtitle}
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
                    className="w-full bg-stone-50 border border-slate-300 text-slate-900 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Long Island & Queens</option>
                    <option value="Valley Stream">Valley Stream, NY</option>
                    <option value="Garden City">Garden City, NY</option>
                    <option value="Rockville Centre">Rockville Centre, NY</option>
                    <option value="Great Neck">Great Neck, NY</option>
                    <option value="Massapequa">Massapequa, NY</option>
                    <option value="Queens">Queens, NY</option>
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
                    className="w-full bg-stone-50 border border-slate-300 text-slate-900 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="All">Any Price</option>
                    <option value="under-700k">Under $700,000</option>
                    <option value="700k-1m">$700,000 - $1,000,000</option>
                    <option value="1m-1.5m">$1,000,000 - $1,500,000</option>
                    <option value="over-1.5m">$1,500,000+</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                    <Home className="w-3.5 h-3.5 text-amber-600" />
                    <span>Property Type</span>
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-stone-50 border border-slate-300 text-slate-900 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Single Family">Single Family</option>
                    <option value="Multi-Family">Multi-Family</option>
                    <option value="Condo">Condo / Co-op</option>
                    <option value="Commercial">Commercial Property</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-amber-600" />
                    <span>Bedrooms</span>
                  </label>
                  <select
                    value={selectedBeds}
                    onChange={(e) => setSelectedBeds(e.target.value)}
                    className="w-full bg-stone-50 border border-slate-300 text-slate-900 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>NYS Fair Housing & MLS Compliant</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onOpenCalculator}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5 text-slate-500" />
                    <span>Mortgage Calc</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
                  >
                    <Search className="w-4 h-4 text-amber-400" />
                    <span>Search Listings</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. CEO PROFILE SECTION (READY TO GET YOUR KEYS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* CEO Real Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 aspect-4/5">
              <img
                src={ceo.photo || '/karina-prudencio.jpg'}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg';
                }}
                alt="Karina Prudencio, Mint Homes CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-5 text-white">
                <div className="font-display font-bold text-2xl">{ceo.name}</div>
                <div className="text-sm text-amber-400 font-semibold">{ceo.role}</div>
                <div className="text-xs text-slate-300 pt-1 font-mono">{ceo.licenseNumber}</div>
              </div>
            </div>
          </div>

          {/* CEO Introduction Text & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              <BadgeCheck className="w-4 h-4 text-amber-600" />
              <span>Ready to Get Your Keys</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Meet Karina Prudencio
            </h2>

            {/* Exact Live Bio Text */}
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-lg">
                &quot;I&apos;m Karina Prudencio, a real estate expert with over 15 years as a paralegal and a successful career in real estate since 2007. My legal background helps me navigate complex deals, resolve title issues, and secure the best terms for you.&quot;
              </p>
              <p>
                &quot;Whether you&apos;re a first-time buyer or an investor, I&apos;ll make your real estate journey smooth and stress-free. Let&apos;s find your perfect home with Mint Homes!&quot;
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-semibold text-slate-900 text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>15+ Years Legal Paralegal Depth</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Resolving encumbrances, title defects, and deed issues before they delay your closing.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-semibold text-slate-900 text-xs flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-amber-700" />
                  <span>17+ Years Licensed Real Estate Record</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trusted negotiator securing optimal terms for residential buyers, sellers, and investors.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
              <a
                href="tel:5163124467"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Direct: (516) 312-4467</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE SERVICES (CAN WE DO FOR YOU?) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200">
            <span>What We Do</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 uppercase">
            Can We Do For You?
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2">
            Buying or selling a home is a life-changing experience, and we&apos;re here to make it seamless. Our expert team provides personalized service, builds strong relationships, and works tirelessly to help you achieve your real estate goals.
          </p>
        </div>

        {/* 3 Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Financial Advisory */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <Landmark className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Financial Advisory
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strategic financial planning for your real estate journey. Understand purchasing capacity, market trends, tax assessments, and equity growth with clear, fiduciary guidance.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Market valuation & pricing analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Closing costs & budget transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Investment ROI assessments</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold transition-all cursor-pointer"
              >
                <span>Start Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Pre-Approved */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Essential First Step
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <KeyRound className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Get Pre-Approved
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with reputable mortgage partners to secure a verified pre-approval letter. Present stronger, winning offers with competitive terms in fast-moving New York markets.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Documentation checklist support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Conventional, FHA & VA lender connections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Accurate monthly payment estimation</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={onOpenCalculator}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-stone-50 text-xs font-semibold cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-700" />
                <span>Calculator</span>
              </button>
              <button
                onClick={onOpenConsultation}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
              >
                <span>Start Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Card 3: Sell or Buy Your Home */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Sell or Buy Your Home
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full-service brokerage representation from first viewing or listing presentation through closing. Expert negotiation, contract review, and proactive coordination at every step.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>High-visibility multi-platform marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Personalized tour & private open house hosting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Guaranteed service standard compliance</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('properties')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED REAL PROPERTIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 mb-2">
              <span>Curated Selection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              Featured Properties
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Top residential and commercial properties available across Long Island and Queens
            </p>
          </div>
          <button
            onClick={() => onNavigate('properties')}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 cursor-pointer"
          >
            <span>View All Properties</span>
            <ChevronRight className="w-4 h-4" />
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

      {/* 5. REAL INSTAGRAM FEED & COMMUNITY LISTING ALERTS (@minthomesli) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 mb-2">
              <Instagram className="w-3.5 h-3.5 text-amber-700" />
              <span>@minthomesli Updates</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              Latest Listing Alerts & Insights
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Real-time property arrivals, open house announcements, and market advice from our team
            </p>
          </div>

          <a
            href="https://www.instagram.com/minthomesli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @minthomesli</span>
          </a>
        </div>

        {/* 4 Clean Card Components using exact images & captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveUpdates.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-base text-slate-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <div className="font-medium text-slate-800">{item.contacts}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. REAL TESTIMONIALS SECTION */}
      <section className="bg-stone-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300">
              <span>Client Experiences</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
              Client Testimonials
            </h2>
            <p className="text-sm text-slate-600">
              Genuine feedback from families and clients who found their dream home with Mint Homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-slate-900 text-sm">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {t.town}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Read All Testimonials</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. GET IN TOUCH BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <span>Connect With Us</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Get In Touch!
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Whether you are preparing to buy, sell, or simply have questions about Long Island real estate values and fair housing procedures, our team is here for you.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>900 Rockaway Ave, Valley Stream, NY 11581, EE. UU.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:5169005542" className="hover:text-amber-400 transition-colors font-medium">
                  Office: (516) 900-5542
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:admin@minthomesli.com" className="hover:text-amber-400 transition-colors">
                  admin@minthomesli.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row lg:flex-col justify-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg cursor-pointer text-center"
            >
              <span>Schedule Free Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide transition-all border border-white/20 cursor-pointer text-center"
            >
              <span>Visit Contact Page</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
