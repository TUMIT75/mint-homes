import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Home, 
  Search, 
  Users, 
  ShieldCheck, 
  MessageSquareQuote, 
  Scale, 
  BookOpen, 
  Mail,
  ChevronDown,
  ChevronRight,
  Calculator,
  Sparkles,
  Award
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  onOpenCalculator,
  favoritesCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop dropdown state
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  
  // Mobile accordion state
  const [mobilePropertyExpanded, setMobilePropertyExpanded] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);

  const propertyDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        propertyDropdownRef.current && 
        !propertyDropdownRef.current.contains(event.target as Node)
      ) {
        setPropertyDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current && 
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setPropertyDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPropertyActive = currentPage === 'properties' || currentPage === 'new-listings';
  const isAboutActive = currentPage === 'about' || currentPage === 'guaranteed-service' || currentPage === 'fair-housing';

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-slate-950 text-slate-300 text-xs transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2 px-4 border-b border-slate-800/80'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>900 Rockaway Ave, Valley Stream, NY 11581</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Monday to Saturday 9:00 AM to 7:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:5169005542" 
              className="flex items-center gap-1.5 text-slate-200 font-medium hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Office: (516) 900-5542</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="tel:8885921593" 
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span>Toll Free: (888) 592-1593</span>
            </a>
            <button 
              onClick={onOpenCalculator}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors ml-1 cursor-pointer"
              title="Mortgage Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Calculator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 ${isScrolled ? 'py-3 shadow-md' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-amber-400 shadow-xs group-hover:bg-slate-900 transition-colors border border-amber-500/30">
              <span className="font-display font-bold text-xl tracking-tight text-amber-400">M</span>
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-950 flex items-center gap-1.5">
                <span>MINT HOMES</span>
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">LI</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase font-medium text-slate-500">
                Premier Real Estate Brokerage
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links with Working Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                currentPage === 'home' 
                  ? 'text-amber-800 font-semibold' 
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>

            {/* 2. Property Search Dropdown */}
            <div 
              ref={propertyDropdownRef}
              className="relative"
              onMouseEnter={() => setPropertyDropdownOpen(true)}
              onMouseLeave={() => setPropertyDropdownOpen(false)}
            >
              <button
                onClick={() => setPropertyDropdownOpen(!propertyDropdownOpen)}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer relative ${
                  isPropertyActive 
                    ? 'text-amber-800 font-semibold' 
                    : 'text-slate-700 hover:text-slate-950'
                }`}
                aria-expanded={propertyDropdownOpen}
              >
                <span>Property Search</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${propertyDropdownOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                {isPropertyActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
                )}
              </button>

              {/* Property Search Dropdown Menu */}
              {propertyDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('properties')}
                    className={`w-full px-4 py-2.5 text-left text-xs transition-colors flex items-start gap-3 hover:bg-stone-50 cursor-pointer ${
                      currentPage === 'properties' ? 'bg-amber-50/70 text-amber-900 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Search className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">All Long Island Listings</div>
                      <div className="text-[11px] text-slate-500">Search homes across Nassau, Suffolk, Queens</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('new-listings')}
                    className={`w-full px-4 py-2.5 text-left text-xs transition-colors flex items-start gap-3 hover:bg-stone-50 cursor-pointer ${
                      currentPage === 'new-listings' ? 'bg-amber-50/70 text-amber-900 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">New Listings</span>
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                      </div>
                      <div className="text-[11px] text-slate-500">Fresh arrivals and upcoming open houses</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 3. About Us Dropdown */}
            <div 
              ref={aboutDropdownRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer relative ${
                  isAboutActive 
                    ? 'text-amber-800 font-semibold' 
                    : 'text-slate-700 hover:text-slate-950'
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                {isAboutActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
                )}
              </button>

              {/* About Us Dropdown Menu */}
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('about')}
                    className={`w-full px-4 py-2.5 text-left text-xs transition-colors flex items-start gap-3 hover:bg-stone-50 cursor-pointer ${
                      currentPage === 'about' ? 'bg-amber-50/70 text-amber-900 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Users className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">About Mint Homes</div>
                      <div className="text-[11px] text-slate-500">Leadership, philosophy, and agent roster</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('guaranteed-service')}
                    className={`w-full px-4 py-2.5 text-left text-xs transition-colors flex items-start gap-3 hover:bg-stone-50 cursor-pointer ${
                      currentPage === 'guaranteed-service' ? 'bg-amber-50/70 text-amber-900 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Guaranteed Service</div>
                      <div className="text-[11px] text-slate-500">6-point written guarantee and cancel anytime</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('fair-housing')}
                    className={`w-full px-4 py-2.5 text-left text-xs transition-colors flex items-start gap-3 hover:bg-stone-50 cursor-pointer ${
                      currentPage === 'fair-housing' ? 'bg-amber-50/70 text-amber-900 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Scale className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Fair Housing Program</div>
                      <div className="text-[11px] text-slate-500">NYS equal housing commitment and disclosures</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Testimonials */}
            <button
              onClick={() => handleNavClick('testimonials')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                currentPage === 'testimonials' 
                  ? 'text-amber-800 font-semibold' 
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span>Testimonials</span>
              {currentPage === 'testimonials' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>

            {/* 5. Blog / Market Insights */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'text-amber-800 font-semibold' 
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span>Market Insights</span>
              {(currentPage === 'blog' || currentPage === 'blog-post') && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>

            {/* 6. Contact Us */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                currentPage === 'contact' 
                  ? 'text-amber-800 font-semibold' 
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span>Contact Us</span>
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('properties')}
              className="relative p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Saved Properties"
            >
              <Search className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white rounded-full text-xs flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConsultation}
              className="bg-slate-950 text-white hover:bg-slate-800 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-sm flex items-center gap-2 cursor-pointer border border-slate-800"
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex bg-slate-950 text-white px-3 py-1.5 rounded-md text-xs font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 mb-4">
            {/* Mobile Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                currentPage === 'home' 
                  ? 'bg-amber-50 text-amber-900 font-semibold border-l-4 border-amber-600' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 text-amber-600" />
                <span>Home</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Mobile Property Search Accordion */}
            <div className="rounded-lg overflow-hidden border border-slate-100">
              <button
                onClick={() => setMobilePropertyExpanded(!mobilePropertyExpanded)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-800 bg-stone-50/70 hover:bg-stone-100 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold">Property Search</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobilePropertyExpanded ? 'rotate-180' : ''}`} />
              </button>

              {mobilePropertyExpanded && (
                <div className="bg-white px-3 py-2 space-y-1 border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('properties')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors text-left cursor-pointer ${
                      currentPage === 'properties' ? 'text-amber-800 font-semibold bg-amber-50' : 'text-slate-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>All Long Island Listings</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => handleNavClick('new-listings')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors text-left cursor-pointer ${
                      currentPage === 'new-listings' ? 'text-amber-800 font-semibold bg-amber-50' : 'text-slate-600 hover:bg-stone-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>New Listings</span>
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile About Us Accordion */}
            <div className="rounded-lg overflow-hidden border border-slate-100">
              <button
                onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-800 bg-stone-50/70 hover:bg-stone-100 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold">About Us</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileAboutExpanded ? 'rotate-180' : ''}`} />
              </button>

              {mobileAboutExpanded && (
                <div className="bg-white px-3 py-2 space-y-1 border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('about')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors text-left cursor-pointer ${
                      currentPage === 'about' ? 'text-amber-800 font-semibold bg-amber-50' : 'text-slate-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>About Mint Homes & Agents</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => handleNavClick('guaranteed-service')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors text-left cursor-pointer ${
                      currentPage === 'guaranteed-service' ? 'text-amber-800 font-semibold bg-amber-50' : 'text-slate-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>Guaranteed Service Program</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => handleNavClick('fair-housing')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors text-left cursor-pointer ${
                      currentPage === 'fair-housing' ? 'text-amber-800 font-semibold bg-amber-50' : 'text-slate-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>Fair Housing Program</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Testimonials */}
            <button
              onClick={() => handleNavClick('testimonials')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                currentPage === 'testimonials' 
                  ? 'bg-amber-50 text-amber-900 font-semibold border-l-4 border-amber-600' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquareQuote className="w-4 h-4 text-amber-600" />
                <span>Testimonials</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Mobile Blog */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'bg-amber-50 text-amber-900 font-semibold border-l-4 border-amber-600' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Market Insights & Blog</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Mobile Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                currentPage === 'contact' 
                  ? 'bg-amber-50 text-amber-900 font-semibold border-l-4 border-amber-600' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>Contact Us</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-slate-950 text-white hover:bg-slate-800 py-3 px-4 rounded-lg text-sm font-semibold text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Schedule Free Advisory Consultation</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full bg-stone-100 text-slate-800 hover:bg-stone-200 py-2.5 px-4 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>Mortgage Payment Calculator</span>
            </button>

            <div className="p-3 bg-stone-50 rounded-lg text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-900">Mint Homes Office</div>
              <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
              <a href="tel:5169005542" className="text-amber-700 font-semibold block pt-1">
                Direct: (516) 900-5542
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
