import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  MessageSquareQuote, 
  ArrowRight,
  TrendingUp,
  Award,
  Filter
} from 'lucide-react';
import { Testimonial, TESTIMONIALS_DATA } from '../data/testimonials';

interface TestimonialsPageProps {
  onOpenConsultation: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onOpenConsultation
}) => {
  const [filterType, setFilterType] = useState<string>('All');

  const filtered = TESTIMONIALS_DATA.filter((item) => {
    if (filterType === 'All') return true;
    return item.transactionType === filterType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          Verified Client Stories
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Trusted by Hundreds of Long Island Families
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Read authentic, unfiltered experiences from homeowners, buyers, and property investors who partnered with Mint Homes across Nassau and Suffolk counties.
        </p>
      </section>

      {/* 2. REPUTATION SUMMARY METRICS */}
      <section className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-center">
          <div className="space-y-2">
            <div className="font-display text-5xl font-bold text-amber-400">
              4.9
            </div>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-400">Overall Rating Score</p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="font-display text-3xl font-bold text-white">
              340+
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Verified Transactions
            </div>
            <p className="text-xs text-slate-400">Closed across NY & Long Island</p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="font-display text-3xl font-bold text-white">
              98.4%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Client Retention Rate
            </div>
            <p className="text-xs text-slate-400">Repeat and referral transactions</p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="font-display text-3xl font-bold text-white">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Fiduciary Commitment
            </div>
            <p className="text-xs text-slate-400">Written service guarantee</p>
          </div>
        </div>
      </section>

      {/* 3. FILTER CONTROLS & TESTIMONIALS GRID */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-semibold text-slate-800">
            Filtering by Transaction Type:
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Home Buyer', 'Home Seller', 'Multi-Family Investor'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  filterType === t
                    ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-stone-50'
                }`}
              >
                {t === 'All' ? 'All Client Stories' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    {item.transactionType}
                  </span>
                </div>

                <blockquote className="font-display text-xl font-bold text-slate-950 leading-snug">
                  "{item.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.story}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-950 text-sm">
                    {item.clientName}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <div className="text-[11px] text-amber-800 font-medium mt-1">
                    {item.propertySummary}
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 text-[11px] font-medium shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Closing</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALLOUT STRIP */}
      <section className="bg-stone-100 rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-4">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
          Ready to Write Your Long Island Success Story?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Whether you are selling a family home or purchasing your first property, our licensed team is ready to guide you.
        </p>
        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenConsultation}
            className="bg-slate-950 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center gap-2"
          >
            <span>Schedule Free Advisory Meeting</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>
    </div>
  );
};
