import React from 'react';
import { 
  FileCheck, 
  Scale, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  AlertCircle 
} from 'lucide-react';

export const TermsConditionsPage: React.FC = () => {
  const sections = [
    { id: 'acceptance', label: '1. Acceptance of Terms' },
    { id: 'brokerage-services', label: '2. Real Estate Brokerage Services' },
    { id: 'agency-disclosure', label: '3. NYS Agency Relationships' },
    { id: 'mls-data', label: '4. Property Information & MLS Disclaimers' },
    { id: 'fair-housing', label: '5. Equal Housing Opportunity Commitment' },
    { id: 'intellectual-property', label: '6. Intellectual Property Rights' },
    { id: 'user-conduct', label: '7. Prohibited Uses of Services' },
    { id: 'liability-limitations', label: '8. Limitation of Broker Liability' },
    { id: 'governing-law', label: '9. Governing Law & Jurisdiction' },
    { id: 'modifications', label: '10. Revisions and Contact' }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* 1. HERO HEADER */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
          <Scale className="w-3.5 h-3.5 text-amber-600" />
          <span>User & Client Terms</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Terms and Conditions
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Last Updated: September 2026. These Terms and Conditions govern your access to minthomesli.com and outline the parameters of real estate brokerage representation provided by Mint Homes.
        </p>
      </header>

      {/* 2. TWO-COLUMN LAYOUT: STICKY TOC ON LEFT, CONTENT ON RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Table of Contents */}
        <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="font-display font-bold text-slate-950 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileCheck className="w-4 h-4 text-amber-700" />
            <span>Table of Contents</span>
          </div>

          <nav className="space-y-1 text-xs">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="w-full text-left py-2 px-2.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-stone-50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>{sec.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="font-semibold text-slate-800">Mint Homes Legal Desk</div>
            <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
            <div>Direct Office: (516) 900-5542</div>
            <div>NYS Licensed Brokerage</div>
          </div>
        </aside>

        {/* Content Body */}
        <article className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          <div id="acceptance" className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the web services provided by Mint Homes at minthomesli.com, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not accept these terms in their entirety, you should discontinue use of this site immediately.
            </p>
          </div>

          <div id="brokerage-services" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              2. Real Estate Brokerage Services
            </h3>
            <p>
              Mint Homes is a licensed real estate broker licensed by the New York State Department of State Division of Licensing Services. Principal corporate headquarters are located at 900 Rockaway Ave, Valley Stream, NY 11581. The content provided on this website is for general informational purposes only and does not establish a formal broker client fiduciary relationship until a written agency agreement has been executed.
            </p>
          </div>

          <div id="agency-disclosure" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              3. NYS Agency Relationships
            </h3>
            <p>
              Under New York Real Property Law Section 443, licensed real estate brokers and agents must provide prospective consumers with an official New York State Disclosure Form for Buyer and Seller at the first substantive contact. This disclosure articulates the legal duties of a Seller Agent, Buyer Agent, and Broker Agent.
            </p>
          </div>

          <div id="mls-data" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              4. Property Information & MLS Disclaimers
            </h3>
            <p>
              All property listing information, including but not limited to asking prices, square footage measurements, room dimensions, school district assignments, real property taxes, and zoning designations, is compiled from sources deemed reliable, including Multiple Listing Service feeds and municipal records. However, no warranty, representation, or guarantee is made regarding its absolute accuracy. All properties are subject to prior sale, change, or withdrawal without notice.
            </p>
          </div>

          <div id="fair-housing" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              5. Equal Housing Opportunity Commitment
            </h3>
            <p>
              Mint Homes conducts business in full compliance with the Federal Fair Housing Act, the New York State Human Rights Law, and all municipal equal housing codes. We do not discriminate on the basis of race, color, religion, sex, disability, familial status, national origin, sexual orientation, gender identity, lawful source of income, or any other protected characteristic.
            </p>
          </div>

          <div id="intellectual-property" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              6. Intellectual Property Rights
            </h3>
            <p>
              All text, graphic designs, logos, software layouts, photographs, architectural illustrations, and digital media displayed on minthomesli.com are the proprietary intellectual property of Mint Homes or used under license. Unauthorized duplication, redistribution, republication, or automated data harvesting is strictly prohibited without prior written consent.
            </p>
          </div>

          <div id="user-conduct" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              7. Prohibited Uses of Services
            </h3>
            <p>
              Users agree not to use the website for any unlawful purpose, transmit unsolicited advertising, attempt to compromise platform security, reverse engineer any site components, or scrape listing records for competitive commercial aggregation.
            </p>
          </div>

          <div id="liability-limitations" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              8. Limitation of Broker Liability
            </h3>
            <p>
              To the fullest extent permissible by applicable law, Mint Homes, its officers, licensed brokers, agents, and affiliates disclaim liability for any indirect, incidental, or consequential damages resulting from website errors, service interruptions, or reliance on unverified property details.
            </p>
          </div>

          <div id="governing-law" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              9. Governing Law & Jurisdiction
            </h3>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Nassau County, New York.
            </p>
          </div>

          <div id="modifications" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              10. Revisions and Contact Information
            </h3>
            <p>
              Mint Homes reserves the right to modify these Terms and Conditions periodically. Continued use of the website following published updates signifies acceptance of the revised provisions.
            </p>
            <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-700 mt-2">
              <div className="font-bold text-slate-900">Mint Homes Legal & Brokerage Compliance</div>
              <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
              <div>Direct Phone: (516) 900-5542 | (888) 592-1593</div>
              <div>Email: admin@minthomesli.com</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
