import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight, 
  Check, 
  X as XIcon, 
  PhoneCall, 
  Camera, 
  DollarSign, 
  HelpCircle 
} from 'lucide-react';

interface GuaranteedServicePageProps {
  onOpenConsultation: () => void;
}

export const GuaranteedServicePage: React.FC<GuaranteedServicePageProps> = ({
  onOpenConsultation
}) => {
  const guarantees = [
    {
      step: '01',
      title: '2-Hour Communication Guarantee',
      icon: Clock,
      short: 'Calls and inquiries answered within two business hours without exception.',
      details: 'Few things in real estate are as frustrating as waiting days for a callback from your listing broker. At Mint Homes, every client call, text, and email received during business hours is acknowledged within two hours. We provide regular weekly status reports with buyer feedback and marketing analytics.'
    },
    {
      step: '02',
      title: 'Empirical Valuation Guarantee',
      icon: TrendingUp,
      short: 'Data-driven comparative market analyses grounded in real closed settlement comps.',
      details: 'We never artificially inflate valuation estimates simply to secure a listing. Our pricing methodology evaluates recent closed transactions, pending escrows, municipal tax equalization rates, and hyper-local inventory supply in your immediate neighborhood.'
    },
    {
      step: '03',
      title: 'Omnichannel Marketing Guarantee',
      icon: Camera,
      short: 'Magazine-quality HDR photography, 3D virtual tours, and regional MLS syndication.',
      details: 'Every property represented by Mint Homes receives our full marketing deployment at zero upfront expense to the homeowner. This includes high-resolution architectural photography, twilight shots, measured floorplans, immersive virtual walk-throughs, and targeted social media distribution.'
    },
    {
      step: '04',
      title: 'Cancel-Anytime Listing Agreement',
      icon: ShieldCheck,
      short: 'Freedom to terminate your representation agreement with zero cancellation fees.',
      details: 'Most traditional brokerages lock sellers into rigid six or twelve month binding contracts. We believe our performance should earn your business every day. If you are ever dissatisfied with our service and we cannot resolve the issue within 48 hours, you may cancel your listing agreement with zero penalty prior to an accepted offer.'
    },
    {
      step: '05',
      title: 'Dedicated Closing Concierge',
      icon: Award,
      short: 'End-to-end management from contract signing to handing over the keys.',
      details: 'Navigating New York closing procedures requires relentless diligence. Our dedicated transaction coordinators liaise directly between buyers, sellers, bank underwriters, title examiners, and municipal building inspectors to prevent closing delays.'
    }
  ];

  const comparisonRows = [
    { feature: 'Written 2-Hour Response Time Promise', mintHomes: true, standard: false },
    { feature: 'Cancel-Anytime Listing Agreement Without Penalty', mintHomes: true, standard: false },
    { feature: 'Professional HDR Photography and Floorplans Included', mintHomes: true, standard: 'Sometimes' },
    { feature: 'Direct Access to Principal Broker Desk', mintHomes: true, standard: false },
    { feature: 'Multilingual Team Support (English, Bengali, Spanish, Urdu, Hindi)', mintHomes: true, standard: false },
    { feature: 'Detailed Weekly Buyer Feedback Reports', mintHomes: true, standard: false },
    { feature: 'Municipal Certificate of Occupancy Verification Assistance', mintHomes: true, standard: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          Written Client Protections
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          The Mint Homes Five-Point Service Guarantee
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          While many real estate brokerages offer verbal assurances, Mint Homes delivers our fiduciary protections in writing. We eliminate risk for Long Island homeowners and buyers through concrete service standards.
        </p>
      </section>

      {/* 2. FIVE-POINT GUARANTEE DETAILED CARDS */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step} 
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-2xl font-bold text-slate-300">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 mb-3">
                    {item.short}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enforced in Writing</span>
                </div>
              </div>
            );
          })}

          {/* Consultation Card in Grid */}
          <div className="bg-slate-950 text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-slate-900 px-2.5 py-1 rounded border border-amber-500/30 inline-block">
                Start Today
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Request a Guaranteed Seller Advisory
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Discover how our five-point guarantee protects your home sale price, eliminates stress, and accelerates your closing timeline.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-6 w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Schedule Valuation Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON MATRIX: MINT HOMES VS STANDARD BROKERAGE */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
            Direct Comparison
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-950">
            Mint Homes Standard versus Conventional Brokerages
          </h2>
          <p className="text-sm text-slate-600">
            See how our written fiduciary agreements protect your interests every day.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Fiduciary Standard</th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs bg-slate-900 text-amber-400 text-center">
                    Mint Homes Standard
                  </th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs text-slate-400 text-center">
                    Standard Brokerages
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                    <td className="py-4 px-6 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center bg-amber-50/40">
                      <div className="inline-flex items-center gap-1 font-semibold text-emerald-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Included in Writing</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-500">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? (
                          <Check className="w-5 h-5 text-slate-600 mx-auto" />
                        ) : (
                          <div className="inline-flex items-center gap-1 text-slate-400">
                            <XIcon className="w-4 h-4 text-slate-400" />
                            <span>Rarely Provided</span>
                          </div>
                        )
                      ) : (
                        <span>{row.standard}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAL BROKER PLEDGE */}
      <section className="bg-stone-50 rounded-2xl p-8 sm:p-12 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto">
            <FileCheck className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
            A Personal Pledge from Our Principal Broker
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed italic">
            "Real estate representation is founded on fiduciary trust. If at any moment you feel our marketing, communication, or counsel has failed to satisfy our written commitments, bring it to my direct attention. If we cannot rectify the matter within 48 hours, you are free to walk away from your listing agreement without paying a single dollar. That is my personal commitment to you."
          </p>
          <div className="pt-2">
            <div className="font-display font-bold text-base text-slate-950">
              Md "Mint" Rahman
            </div>
            <div className="text-xs text-amber-800 font-medium">
              Founder and Principal Broker · Mint Homes Real Estate Brokerage
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
