import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

interface TestimonialsPageProps {
  onOpenConsultation: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered = TESTIMONIALS_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER WITH EXACT LIVE INTRO */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
          <MessageSquareQuote className="w-3.5 h-3.5 text-amber-600" />
          <span>Verified Client Stories</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Client Testimonials
        </h1>

        {/* Exact Live Intro Text */}
        <p className="text-base text-slate-700 leading-relaxed font-medium">
          "Real stories from real clients. Discover how we've helped families and individuals find the place they now call home."
        </p>
      </section>

      {/* 2. SUMMARY METRICS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
          <div className="font-display font-bold text-3xl text-slate-950">5.0</div>
          <div className="flex justify-center text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <div className="text-[11px] text-slate-500 pt-1">Average Client Rating</div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
          <div className="font-display font-bold text-3xl text-slate-950">100%</div>
          <div className="text-xs font-semibold text-emerald-700">Fiduciary Representation</div>
          <div className="text-[11px] text-slate-500">Licensed Brokerage</div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
          <div className="font-display font-bold text-3xl text-slate-950">2007</div>
          <div className="text-xs font-semibold text-amber-800">Established In Real Estate</div>
          <div className="text-[11px] text-slate-500">19+ Years Track Record</div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
          <div className="font-display font-bold text-3xl text-slate-950">2 Mo</div>
          <div className="text-xs font-semibold text-amber-800">Average Match Speed</div>
          <div className="text-[11px] text-slate-500">From First Consultation</div>
        </div>
      </section>

      {/* 3. REVIEWS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Star Rating and Quote Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-800">
                  <Quote className="w-4 h-4" />
                </div>
              </div>

              {/* Exact Live Review */}
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                "{item.fullReview}"
              </p>
            </div>

            {/* Author Byline */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-slate-950 text-sm">{item.author}</div>
                <div className="text-slate-500">{item.role} · {item.town}</div>
              </div>
              <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {item.source}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* 4. CALL TO ACTION STRIP */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-xl space-y-2 text-center sm:text-left">
          <h3 className="font-display text-2xl font-bold text-white">
            Experience the Mint Homes Difference
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Connect with Karina Prudencio and our team for individualized buyer or seller representation.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          Schedule Free Consultation
        </button>
      </section>
    </div>
  );
};
