import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  ExternalLink, 
  Building2, 
  FileText,
  HelpCircle
} from 'lucide-react';

export const FairHousingPage: React.FC = () => {
  const protectedClasses = [
    { name: 'Race, Color, and National Origin', desc: 'Protection against discrimination based on ancestry, heritage, or ethnic background.' },
    { name: 'Creed and Religion', desc: 'Protection for all religious beliefs, practices, affiliations, or lack thereof.' },
    { name: 'Sex, Sexual Orientation, & Gender Identity', desc: 'Protection covering gender, sexual orientation, gender expression, and transgender status.' },
    { name: 'Familial Status & Children', desc: 'Protection for families with children under 18, pregnant individuals, and legal guardians.' },
    { name: 'Lawful Source of Income', desc: 'Protection for vouchers, Section 8, social security, child support, or public assistance.' },
    { name: 'Disability & Reasonable Accommodations', desc: 'Full rights to physical modifications, service animals, and policy adaptations without fee.' },
    { name: 'Marital & Partnership Status', desc: 'Equal treatment regardless of single, married, divorced, or domestic partnership standing.' },
    { name: 'Military and Veteran Status', desc: 'Protection for active-duty personnel, reservists, national guard, and veterans.' },
    { name: 'Age & Citizenship Status', desc: 'Protection against ageist practices and unlawful immigration inquiries.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER WITH EXACT LIVE STATEMENT */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
          <Scale className="w-3.5 h-3.5 text-amber-600" />
          <span>Equal Housing Opportunity</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Fair Housing Program
        </h1>

        {/* Exact Live Text */}
        <p className="text-base text-slate-700 leading-relaxed font-medium">
          "Everyone deserves a fair chance. Learn how New York's Fair Housing Enforcement Program works to protect buyers and renters from discrimination in any real estate transaction."
        </p>
      </section>

      {/* 2. PROTECTED CLASSES GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
            Protected Characteristics Under Federal & New York Law
          </h2>
          <p className="text-xs text-slate-600">
            Federal Fair Housing Act, New York State Human Rights Law, and Nassau/Suffolk County Administrative Codes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {protectedClasses.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <h3 className="font-semibold text-slate-950 text-sm">{item.name}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. REASONABLE ACCOMMODATIONS PROTOCOL */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
            Accessibility Standards
          </span>
          <h3 className="font-display text-2xl font-bold text-slate-950">
            Notice of Rights: Reasonable Accommodations
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Under New York State Law, housing providers and brokers must make reasonable accommodations in rules, policies, practices, or services when necessary to afford persons with disabilities equal opportunity to use and enjoy a dwelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-slate-700 leading-relaxed">
          <div className="p-5 bg-stone-50 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Assistance & Service Animals</h4>
            <p>
              Housing providers cannot apply no-pet policies or charge pet deposits, surcharges, or extra fees for emotional support or service animals required by individuals with disabilities.
            </p>
          </div>

          <div className="p-5 bg-stone-50 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Physical Modifications</h4>
            <p>
              Tenants and buyers with disabilities have the right to construct reasonable physical modifications (such as grab bars, ramps, or lowered fixtures) at their expense to facilitate access.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL REPORTING & ENFORCEMENT AGENCIES */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30 inline-block">
            Enforcement & Reporting
          </span>
          <h3 className="font-display text-2xl font-bold text-white">
            How to File a Fair Housing Complaint
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            If you suspect you have been subjected to discrimination in any real estate transaction, you have the legal right to file an official complaint:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="font-semibold text-white text-sm">NYS Division of Human Rights</div>
            <div className="text-slate-300">One Fordham Plaza, 4th Floor, Bronx, NY 10458</div>
            <div className="text-amber-400 font-semibold pt-1">Phone: (888) 392-3644</div>
            <div className="text-slate-400">Website: dhr.ny.gov</div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="font-semibold text-white text-sm">NYS Department of State</div>
            <div className="text-slate-300">Division of Licensing Services, 123 William St, New York, NY 10038</div>
            <div className="text-amber-400 font-semibold pt-1">Phone: (212) 417-5800</div>
            <div className="text-slate-400">Website: dos.ny.gov</div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="font-semibold text-white text-sm">U.S. Dept of Housing (HUD)</div>
            <div className="text-slate-300">26 Federal Plaza, Room 3532, New York, NY 10278</div>
            <div className="text-amber-400 font-semibold pt-1">Phone: (800) 669-9777</div>
            <div className="text-slate-400">Website: hud.gov</div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
          Mint Homes is an Equal Housing Opportunity brokerage. We strictly adhere to all applicable anti-discrimination laws across Valley Stream, Nassau, Suffolk, and New York State.
        </div>
      </section>
    </div>
  );
};
