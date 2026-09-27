import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Scale, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Search,
  Sparkles,
  Users,
  MessageSquareQuote,
  BookOpen,
  FileText,
  FileCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenCalculator
}) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Newsletter & Consultation Strip */}
      <div className="border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
              Ready to Buy or Sell on Long Island?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect directly with our licensed brokerage team for a confidential market evaluation and personalized transaction strategy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="tel:5169005542"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-lg text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call (516) 900-5542</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Information */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 rounded-xl px-3 py-1.5 inline-block shadow-sm">
              <img 
                src="/mint-homes-logo.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://static.wixstatic.com/media/3518fe_89f31e0b38344815ad29158b5e487921~mv2.png/v1/crop/x_9,y_186,w_4158,h_727/fill/w_558,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3518fe_89f31e0b38344815ad29158b5e487921~mv2.png';
                }}
                alt="Mint Homes" 
                className="h-7 sm:h-8 w-auto object-contain" 
              />
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed pr-4">
            Mint Homes represents buyers, sellers, and property investors throughout Nassau County, Suffolk County, and Queens. Our fiduciary commitment, multilingual advisory, and written service guarantees deliver confidence at every closing.
          </p>

          <div className="space-y-2 pt-2 text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>900 Rockaway Ave, Valley Stream, NY 11581</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct Office: (516) 900-5542</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Toll Free: (888) 592-1593</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>info@minthomesli.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Monday to Saturday: 9:00 AM to 7:00 PM</span>
            </div>
          </div>
        </div>

        {/* Column 2: Properties & Search */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
            <Search className="w-4 h-4 text-amber-400" />
            <span>Property Search</span>
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <button 
                onClick={() => handleNav('properties')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                All Long Island Listings
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('new-listings')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-2"
              >
                <span>New Listings</span>
                <span className="bg-amber-600/30 text-amber-300 text-[10px] font-bold px-1.5 py-0.2 rounded border border-amber-500/40">NEW</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('properties')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Valley Stream Homes
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('properties')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Garden City Residences
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('properties')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Multi Family Properties
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenCalculator} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left text-amber-400/90 font-medium"
              >
                Mortgage Calculator
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: About & Services */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Company & Service</span>
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <button 
                onClick={() => handleNav('about')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                About Us & Leadership
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('about')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Licensed Agent Directory
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('guaranteed-service')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 text-amber-300 font-medium"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Guaranteed Service</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('fair-housing')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>Fair Housing Program</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('testimonials')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Client Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('contact')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Contact Brokerage Office
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Market Insights & Legal */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Insights & Legal</span>
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <button 
                onClick={() => handleNav('blog')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left font-medium text-amber-300"
              >
                Market Insights Blog
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('blog-post')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Featured Analysis Post
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('privacy-policy')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Privacy Policy</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('terms-conditions')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
              >
                <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Terms and Conditions</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('fair-housing')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                NYS Anti-Discrimination Notice
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('guaranteed-service')} 
                className="hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                Operating Procedures
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Verified Badges and Affiliations */}
      <div className="border-t border-slate-900 bg-slate-950/70 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>NYS Licensed Real Estate Broker</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Member of Long Island Board of Realtors (LIBOR)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>National Association of Realtors (NAR)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">Equal Housing Opportunity</span>
          </div>
        </div>
      </div>

      {/* Single Consolidated Legal Disclaimer */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-xs text-slate-300 leading-relaxed space-y-2">
          <p>
            Mint Homes is a licensed real estate broker in the State of New York. Corporate Office: 900 Rockaway Ave, Valley Stream, NY 11581. All material presented herein is intended for information purposes only and is compiled from sources deemed reliable, but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No guarantee, warranty, or representation of any kind is made regarding the accuracy of descriptions, measurements, square footages, or boundary indications. All properties are subject to prior sale, change, or withdrawal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-300 text-[11px]">
            <div>
              Copyright 2026 Mint Homes. All Rights Reserved.
            </div>
            <div className="flex items-center flex-wrap gap-3 sm:gap-4">
              <button onClick={() => handleNav('privacy-policy')} className="hover:text-white cursor-pointer underline">
                Privacy Policy
              </button>
              <span>·</span>
              <button onClick={() => handleNav('terms-conditions')} className="hover:text-white cursor-pointer underline">
                Terms & Conditions
              </button>
              <span>·</span>
              <button onClick={() => handleNav('fair-housing')} className="hover:text-white cursor-pointer underline">
                Fair Housing
              </button>
              <span>·</span>
              <button onClick={() => handleNav('guaranteed-service')} className="hover:text-white cursor-pointer underline">
                Guaranteed Service
              </button>
              <span>·</span>
              <button onClick={() => handleNav('contact')} className="hover:text-white cursor-pointer underline">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
