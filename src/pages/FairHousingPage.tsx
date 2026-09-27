import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  Phone, 
  ExternalLink,
  BookOpen,
  Home
} from 'lucide-react';

export const FairHousingPage: React.FC = () => {
  const protectedClasses = [
    { title: 'Race, Creed, and Color', desc: 'Equal access without distinction based on ancestral background, ethnicity, or skin tone.' },
    { title: 'National Origin', desc: 'Protection against discrimination based on nationality, ancestral lineage, or native language.' },
    { title: 'Sex, Sexual Orientation, and Gender Identity', desc: 'Unconditional equality regardless of biological sex, gender expression, or sexual orientation.' },
    { title: 'Age and Marital Status', desc: 'Fair evaluation regardless of chronological age or marital standing.' },
    { title: 'Disability and Reasonable Accommodation', desc: 'Guaranteed rights to reasonable physical modifications and assistive accommodations for individuals with disabilities.' },
    { title: 'Familial Status', desc: 'Full protection for households with minor children, pregnant women, and legal guardians.' },
    { title: 'Military and Veteran Status', desc: 'Protection for active duty military members, reservists, and honorably discharged veterans.' },
    { title: 'Lawful Source of Income', desc: 'Full protection for buyers and renters using housing choice vouchers (Section 8), SSI, or public assistance.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          Official Legal Compliance
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Fair Housing and Equal Opportunity Policy
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Mint Homes is committed to compliance with Title VIII of the Civil Rights Act of 1968 (Federal Fair Housing Act), the New York State Human Rights Law, and Nassau and Suffolk County administrative human rights regulations.
        </p>
      </section>

      {/* 2. OFFICIAL STATUTORY STATEMENT */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex items-center gap-3 text-amber-800 font-semibold text-sm">
          <Scale className="w-5 h-5 text-amber-700" />
          <span>New York State Department of State Fair Housing Notice</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
          Equal Opportunity in Housing is the Law in New York State
        </h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          Federal, New York State, and local laws prohibit discrimination by housing providers, including real estate brokers, salespersons, landlords, property managers, and mortgage lenders. Real estate agents licensed by the New York State Division of Licensing Services are legally bound to provide equal professional service to all prospective buyers, sellers, tenants, and landlords without distinction.
        </p>

        <div className="p-6 bg-stone-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-3 leading-relaxed">
          <div className="font-bold text-slate-900 text-sm">
            Under New York Law, it is Illegal to:
          </div>
          <ul className="space-y-2 list-disc pl-5">
            <li>Refuse to sell, rent, or lease housing to any person based on protected characteristics.</li>
            <li>Discriminate in terms, conditions, or privileges of the sale or rental of housing.</li>
            <li>Steer prospective buyers or renters toward or away from specific neighborhoods based on demographic identity.</li>
            <li>Refuse to permit reasonable modifications of existing premises occupied or to be occupied by a person with a disability.</li>
            <li>Refuse to make reasonable accommodations in rules, policies, or services for a person with a disability.</li>
            <li>Inquire about or indicate preferences regarding race, religion, lawful source of income, or familial status.</li>
          </ul>
        </div>
      </section>

      {/* 3. PROTECTED CHARACTERISTICS GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
            Protected Classes
          </span>
          <h3 className="font-display text-3xl font-bold text-slate-950">
            Protected Characteristics Under New York Law
          </h3>
          <p className="text-sm text-slate-600">
            Our firm vigorously upholds protections under Federal, State, and County statutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {protectedClasses.map((item, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 font-display font-bold text-base text-slate-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REASONABLE ACCOMMODATIONS FOR PERSONS WITH DISABILITIES */}
      <section className="bg-stone-50 rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>Disability Accommodations</span>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-950">
          Reasonable Accommodations and Modifications
        </h3>

        <p className="text-sm text-slate-700 leading-relaxed">
          Housing providers must permit tenants and homeowners with disabilities to make reasonable modifications to dwellings at their expense if necessary for full enjoyment of the premises. Additionally, housing providers must adjust rules, policies, or practices when such accommodations are necessary to afford an individual with a disability equal opportunity to use and enjoy a dwelling, including permitting verified service and support animals in properties with animal restrictions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 pt-2">
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Reasonable Modifications:</strong>
            Physical alterations such as ramp installations, doorway widening, grab bar placement, or lowering counters for wheelchair access.
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Reasonable Accommodations:</strong>
            Policy exceptions such as waiving pet restrictions or pet fees for documented assistance animals, or allocating an accessible reserved parking space.
          </div>
        </div>
      </section>

      {/* 5. HOW TO FILE A COMPLAINT WITH NYS AUTHORITIES */}
      <section className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
            Enforcement Contacts
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Reporting Alleged Housing Discrimination
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            If you believe you have experienced discrimination in connection with a housing transaction, you have the right to file an official complaint with New York State and Federal regulatory bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="font-bold text-white text-sm">
              NYS Division of Human Rights
            </div>
            <p className="text-xs text-slate-400">
              One Fordham Plaza, 4th Floor, Bronx, NY 10458
            </p>
            <div className="text-xs text-amber-400 font-semibold">
              Phone: (888) 392-3644
            </div>
            <div className="text-xs text-slate-400">
              dhr.ny.gov
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="font-bold text-white text-sm">
              NYS Department of State
            </div>
            <p className="text-xs text-slate-400">
              Division of Licensing Services, 123 William St, New York, NY 10038
            </p>
            <div className="text-xs text-amber-400 font-semibold">
              Phone: (212) 417-5747
            </div>
            <div className="text-xs text-slate-400">
              dos.ny.gov/licensing
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="font-bold text-white text-sm">
              U.S. Dept. of Housing (HUD)
            </div>
            <p className="text-xs text-slate-400">
              Office of Fair Housing and Equal Opportunity, 26 Federal Plaza, NY 10278
            </p>
            <div className="text-xs text-amber-400 font-semibold">
              Phone: (800) 496-4294
            </div>
            <div className="text-xs text-slate-400">
              hud.gov/fairhousing
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
          Mint Homes Brokerage Office: 900 Rockaway Ave, Valley Stream, NY 11581 · Telephone: (516) 900-5542
        </div>
      </section>
    </div>
  );
};
