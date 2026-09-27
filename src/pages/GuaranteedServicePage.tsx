import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  DollarSign, 
  Phone, 
  ArrowRight, 
  Scale, 
  Lock, 
  Users, 
  Building2,
  CalendarCheck,
  Award
} from 'lucide-react';

interface GuaranteedServicePageProps {
  onOpenConsultation: () => void;
}

export const GuaranteedServicePage: React.FC<GuaranteedServicePageProps> = ({ onOpenConsultation }) => {
  const guaranteePillars = [
    {
      id: 'pillar-1',
      icon: Users,
      title: 'Standardized Client Qualification',
      description: 'Our Standard Operating Procedure outlines the key steps we follow to qualify buyers and renters, ensuring consistent standards and thorough documentation for every party.',
      highlight: 'Equal Treatment'
    },
    {
      id: 'pillar-2',
      icon: Clock,
      title: '2-Hour Communication Response Standard',
      description: 'Your calls, text inquiries, and email requests are answered within two business hours by licensed brokerage personnel. No automated runarounds.',
      highlight: 'Direct Contact'
    },
    {
      id: 'pillar-3',
      icon: ShieldCheck,
      title: 'Cancel Anytime Listing Commitment',
      description: 'If you feel we have not upheld our marketing or fiduciary representation standards, you may cancel your listing agreement without penalty prior to an accepted offer.',
      highlight: 'Zero Risk'
    },
    {
      id: 'pillar-4',
      icon: DollarSign,
      title: 'Pre-Approval & Pricing Accuracy',
      description: 'Every prospective purchase offer is backed by verified lender pre-approval and comparative market data, protecting sellers and buyers from transaction fallout.',
      highlight: 'Verified Funds'
    },
    {
      id: 'pillar-5',
      icon: FileText,
      title: 'Exclusive Written Representation',
      description: 'We execute clear written brokerage agreements specifying all duties, obligations, and disclosure items in compliance with New York State Department of State regulations.',
      highlight: 'Legal Diligence'
    },
    {
      id: 'pillar-6',
      icon: CalendarCheck,
      title: 'Weekly Status and Milestone Updates',
      description: 'Sellers receive regular reports on MLS impressions, showing feedback, and market shifts. Buyers receive daily alerts on fresh inventory matching their criteria.',
      highlight: 'Weekly Reporting'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER WITH EXACT LIVE TEXT */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span>Fiduciary Commitment</span>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Guaranteed Service Program
        </h1>

        {/* Exact Live Text */}
        <p className="text-base text-slate-700 leading-relaxed font-medium">
          "Learn how we ensure fairness, transparency, and professionalism in every transaction. Our Standard Operating Procedure outlines the key steps we follow to qualify buyers and renters, because consistency matters."
        </p>
      </section>

      {/* 2. REFORMATTED BENEFIT BLOCKS WITH ICONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guaranteePillars.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. NEW YORK STATE OPERATING PROCEDURES SUMMARY */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30 inline-block">
            NYS Real Property Law Compliance
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Standardized Operating Procedure Notice
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Pursuant to New York State law, Mint Homes maintains standardized operating procedures for prospective buyers and renters:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="text-amber-400 font-display font-bold text-sm">1. Identification</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We do not require prospective clients to show government identification prior to initial property showings, though individual property sellers or building management may require it.
            </p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="text-amber-400 font-display font-bold text-sm">2. Broker Agreement</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We do not require prospective buyers to execute an exclusive broker agreement prior to viewing homes, though we gladly offer fiduciary buyer agency agreements for dedicated representation.
            </p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="text-amber-400 font-display font-bold text-sm">3. Pre-Approval</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              A pre-approval letter for a mortgage loan or proof of funds is strongly encouraged prior to showing homes to ensure productive visits and competitive offer standing.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Corporate Office: 900 Rockaway Ave, Valley Stream, NY 11581 | Direct: (516) 900-5542
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Request Written Guarantee Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
