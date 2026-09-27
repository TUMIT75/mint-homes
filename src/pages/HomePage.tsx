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
  BadgeCheck
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
  // Hero Slider Images from Live Site
  const heroSlides = [
    {
      url: 'https://static.wixstatic.com/media/ca7abb_08da1a03996444938360ffb130aabf1c~mv2.jpg',
      title: 'Luxury Mint Homes Line',
      subtitle: 'Find Your Perfect Property Across Long Island & Queens'
    },
    {
      url: 'https://static.wixstatic.com/media/ca7abb_bcb028e23298404d99de22818902fe56~mv2.webp',
      title: 'Ready to Get Your Keys',
      subtitle: 'Personalized Service, Strong Relationships, Exceptional Results'
    },
    {
      url: 'https://static.wixstatic.com/media/ca7abb_51d1398575af48c991d9f11400c5869d~mv2.jpg',
      title: 'Premier Real Estate Brokerage',
      subtitle: 'Expert Legal Insight & Fiduciary Negotiation Since 2007'
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
  const featuredTestimonial = TESTIMONIALS_DATA[1]; // Karina & Judit review

  // Real Instagram / Listing updates from live site
  const liveUpdates = [
    {
      id: 'ig-1',
      tag: 'New Listing Alert',
      title: 'Fully Renovated Restaurant & Commercial Property',
      caption: 'Spacious & fully renovated restaurant with large bar area, huge basement for storage, all brand-new equipment included, prime location on main road with high visibility.',
      contacts: 'Nataly Fuentes: (929) 282-7753 | Karina Prudencio: (516) 312-4467',
      image: 'https://static.wixstatic.com/media/ca7abb_d83fed79882f4bff969bcc294d5f2b95~mv2.jpeg',
      date: 'Recent Update'
    },
    {
      id: 'ig-2',
      tag: 'Open House',
      title: 'Well-Maintained 4-Bedroom Cape',
      caption: 'Discover this well-maintained 4-bedroom, 2-bath Cape offering comfort, versatility, and plenty of space inside and out. Enjoy the open-concept layout, dedicated office space, and private yard.',
      contacts: 'Mint Homes Advisory Desk: (516) 900-5542',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      date: 'Valley Stream, NY'
    },
    {
      id: 'ig-3',
      tag: 'Just Sold',
      title: 'Another Month of Successful Closings',
      caption: 'Another month of successful closings and congratulations to the new homeowners. Thinking about selling or buying your home? Let us guide you with expertise, dedication, and results.',
      contacts: 'Direct Broker Line: (516) 312-4467',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      date: 'Closed in August'
    },
    {
      id: 'ig-4',
      tag: 'Property Advisory',
      title: 'Investing in Quality Work',
      caption: 'Cheap today does not always mean economical tomorrow. When it comes to your property, cutting corners on repairs may seem like a quick way to save money, but in reality, quality work protects your investment.',
      contacts: 'Karina Prudencio, Broker: (516) 312-4467',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      date: 'Client Guide'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
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
            <span>Valley Stream</span>
            <span aria-hidden="true">·</span>
            <span>Nassau County</span>
            <span aria-hidden="true">·</span>
            <span>Queens</span>
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
                    <option value="Under $750k">Under $750,000</option>
                    <option value="$750k to $1M">$750,000 to $1,000,000</option>
                    <option value="$1M to $1.5M">$1,000,000 to $1,500,000</option>
                    <option value="$1.5M+">$1,500,000 and Above</option>
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
                    className="w-full bg-stone-50 border border-slate-300 text-slate-900 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Single Family">Single Family Home</option>
                    <option value="Multi-Family">Multi Family Residence</option>
                    <option value="Townhouse">Townhouse / Condo</option>
                    <option value="Commercial">Commercial Property</option>
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
                    className="w-full bg-stone-50 border border-slate-300 text-slate-900 text-sm rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="3+ Beds">3+ Bedrooms</option>
                    <option value="4+ Beds">4+ Bedrooms</option>
                    <option value="5+ Beds">5+ Bedrooms</option>
                  </select>
                </div>
              </div>

              {/* Submit Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Real Estate Brokerage in Valley Stream, NY</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
                  >
                    <Search className="w-4 h-4 text-amber-400" />
                    <span>Search Available Properties</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. REAL CEO INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Real Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-950">
              <img
                src="https://static.wixstatic.com/media/ca7abb_2ad8a45fc5d34b62b2ae0cc3a43929eb~mv2.png"
                alt="Karina Prudencio, Mint Homes CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-5 text-white">
                <div className="font-display font-bold text-xl">Karina Prudencio</div>
                <div className="text-xs text-amber-400 font-medium">Mint Homes CEO and Principal Broker</div>
                <div className="text-[11px] text-slate-300 pt-0.5">NYS Licensed Real Estate Broker</div>
              </div>
            </div>
          </div>

          {/* Real Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              <BadgeCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Leadership and Legal Advisory</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Ready to Get Your Keys with Confidence
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-lg">
                "I'm Karina Prudencio, a real estate expert with over 15 years as a paralegal and a successful career in real estate since 2007. My legal background helps me navigate complex deals, resolve title issues, and secure the best terms for you."
              </p>
              <p>
                "Whether you're a first-time buyer or an investor, I'll make your real estate journey smooth and stress-free. Let's find your perfect home with Mint Homes!"
              </p>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="text-slate-500 uppercase tracking-wider font-semibold">Direct Broker Inquiries</div>
                <div className="flex items-center gap-3">
                  <a href="tel:5163124467" className="font-semibold text-slate-900 hover:text-amber-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>(516) 312-4467</span>
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href="mailto:karina@minthomesli.com" className="font-semibold text-slate-900 hover:text-amber-700">
                    karina@minthomesli.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="bg-slate-950 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Full Biography</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REAL PHILOSOPHY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30 inline-block">
              Our Brokerage Philosophy
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              "Buying or selling a home is a life-changing experience, and we're here to make it seamless."
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our expert team provides personalized service, builds strong relationships, and works tirelessly to help you achieve your real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* 4. REAL THREE SERVICES SECTION WITH REAL LIVE IMAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
            Tailored Real Estate Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Delivering end to end support through licensed real estate advisory, lending partner coordination, and diligent closing execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Financial Advisory */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <img
                  src="https://static.wixstatic.com/media/ca7abb_14532616e36247b182055f39d48c46dd~mv2.jpeg"
                  alt="Financial advisory services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded">
                  Service 01
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-bold text-slate-950">
                  Financial Advisory
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Navigating real estate transactions requires sound financial structuring. We connect buyers and investors with trusted consultants to analyze loan options, calculate true costs, and plan for long-term equity growth.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Financial Consultation</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Service 2: Pre-Approval */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <img
                  src="https://static.wixstatic.com/media/ca7abb_75e7c573c5af4842b79aba7609fa5279~mv2.jpeg"
                  alt="Mortgage pre-approval guidance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded">
                  Service 02
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-bold text-slate-950">
                  Pre-Approval Guidance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Getting pre-approved gives you critical leverage in competitive Long Island bidding. We guide you through essential documentation (W-2s, pay stubs, bank statements) to streamline verification with reputable mortgage lenders.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={onOpenCalculator}
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Calculate Mortgage Payment</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Service 3: Sell or Buy Your Home */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <img
                  src="https://static.wixstatic.com/media/3518fe_fae33eb2adc047af8f79d3a0141c88c5~mv2.jpeg"
                  alt="Sell or buy your home"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded">
                  Service 03
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-bold text-slate-950">
                  Sell or Buy Your Home
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Whether selling your residence for top dollar or locating your dream property, our licensed team protects your fiduciary interests from initial market evaluation through contract signing and title closing.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('properties')}
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Browse Long Island Listings</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED LISTINGS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block mb-2">
              Featured Opportunities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Curated Long Island Properties
            </h2>
          </div>
          <button
            onClick={() => onNavigate('properties')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-900 transition-colors cursor-pointer"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4" />
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

      {/* 6. REDESIGNED INSTAGRAM / LIVE PROPERTY UPDATES AS CLEAN CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 mb-2">
              <Instagram className="w-3.5 h-3.5 text-amber-600" />
              <span>Live Social & Listing Feed</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">
              Recent Updates & Listing Alerts
            </h2>
          </div>
          <a
            href="https://www.instagram.com/minthomesli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-amber-800 transition-colors"
          >
            <span>Follow @minthomesli on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square overflow-hidden bg-slate-100 relative">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {update.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded">
                    {update.date}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-display font-bold text-base text-slate-950 leading-snug">
                    {update.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {update.caption}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 text-[11px] text-slate-500">
                <div className="font-semibold text-slate-800 pt-2">{update.contacts}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REAL TESTIMONIAL PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
          <div className="flex items-center gap-1.5 text-amber-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-semibold text-white">5.0 Star Client Review</span>
          </div>

          <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-slate-100 leading-snug">
            "{featuredTestimonial.fullReview}"
          </blockquote>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-white text-base">
                {featuredTestimonial.author}
              </div>
              <div className="text-xs text-amber-400">
                {featuredTestimonial.role} · {featuredTestimonial.town}
              </div>
            </div>

            <button
              onClick={() => onNavigate('testimonials')}
              className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
            >
              Read More Client Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
