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
    { id: 'mls-data', label: '4. Property Information and MLS Disclaimers' },
    { id: 'fair-housing', label: '5. Equal Housing Opportunity Commitment' },
    { id: 'intellectual-property', label: '6. Intellectual Property Rights' },
    { id: 'user-conduct', label: '7. Prohibited Uses of Services' },
    { id: 'liability-limitations', label: '8. Limitation of Broker Liability' },
    { id: 'governing-law', label: '9. Governing Law and Jurisdiction' },
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
          <span>User and Client Terms</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Terms and Conditions
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Effective Date: January 1, 2026. Last Revised: March 2026. These Terms and Conditions govern your access to minthomesli.com and outline the parameters of real estate brokerage representation provided by Mint Homes.
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

        {/* Legal Text Content */}
        <main className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-10 text-slate-800 text-sm leading-relaxed">
          {/* Section 1 */}
          <section id="acceptance" className="space-y-3 scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the web portal minthomesli.com or engaging in professional communications with our licensed sales agents, you signify your unreserved agreement to be bound by these Terms and Conditions. If you do not agree to these terms, you must discontinue your use of our digital platforms immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section id="brokerage-services" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              2. Real Estate Brokerage Services
            </h2>
            <p>
              Mint Homes provides real estate marketing, buyer advisory, property valuation, seller listing services, and multi-family investment guidance throughout Long Island, New York. Our primary physical headquarters is located at 900 Rockaway Ave, Valley Stream, NY 11581.
            </p>
            <p>
              Engaging with our digital tools, saving property bookmarks, or requesting an appointment does not establish an exclusive client-broker fiduciary relationship until a formal written New York State Agency Disclosure Form and representation agreement is fully executed by all parties.
            </p>
          </section>

          {/* Section 3 */}
          <section id="agency-disclosure" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              3. NYS Real Property Law Agency Disclosure Notice
            </h2>
            <p>
              Pursuant to Section 443 of the New York Real Property Law, real estate licensees are obligated to deliver a statutory disclosure of agency relationship to prospective buyers and sellers at the first substantive contact for residential real property.
            </p>
            <p>
              Prior to discussing confidential financial situations or property negotiation strategies with our agents, you will be invited to review and sign the standard New York State Disclosure Form for Buyer and Seller.
            </p>
          </section>

          {/* Section 4 */}
          <section id="mls-data" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              4. Property Information and MLS Disclaimers
            </h2>
            <p>
              All property listing information, specifications, room measurements, boundary lines, school districts, tax figures, and structural details presented on this site are derived from sources deemed reliable, including OneKey MLS and municipal records, but are not guaranteed.
            </p>
            <p>
              Information is subject to errors, omissions, change of price, prior sale, or withdrawal without prior notice. Prospective purchasers and lessees are advised to conduct independent engineering, environmental, zoning, and legal title examinations with licensed New York professionals prior to binding contract execution.
            </p>
          </section>

          {/* Section 5 */}
          <section id="fair-housing" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              5. Equal Housing Opportunity Commitment
            </h2>
            <p>
              Mint Homes conducts all business in complete adherence to the Federal Fair Housing Act, the New York State Human Rights Law, and local county codes. We provide equal professional services without discrimination based on race, creed, color, national origin, sexual orientation, gender identity, military status, sex, disability, familial status, marital status, or lawful source of income.
            </p>
          </section>

          {/* Section 6 */}
          <section id="intellectual-property" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              6. Intellectual Property Rights
            </h2>
            <p>
              All text, graphic layouts, logo designs, architectural photographs, floorplan diagrams, and website code on minthomesli.com are the exclusive property of Mint Homes or licensed from authorized content partners. No content may be reproduced, distributed, or republished without prior written authorization from our principal broker.
            </p>
          </section>

          {/* Section 7 */}
          <section id="user-conduct" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              7. Prohibited Uses of Services
            </h2>
            <p>
              When using our digital portals and forms, you agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Submit false, fraudulent, or deceptive contact details or property ownership claims.</li>
              <li>Deploy automated scripts, scrapers, or bots to harvest property listing records without written license.</li>
              <li>Attempt to circumvent security measures or disrupt server infrastructure.</li>
              <li>Use the website to harass, defame, or intimidate brokerage personnel or other site visitors.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="liability-limitations" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              8. Limitation of Broker Liability
            </h2>
            <p>
              To the fullest extent permissible under applicable New York State jurisprudence, Mint Homes, its officers, directors, licensed associate brokers, and independent salespersons shall not be held liable for indirect, incidental, or consequential damages resulting from the use or inability to use this website, typographical errors in listing prices, or unforeseen municipal tax reassessments.
            </p>
          </section>

          {/* Section 9 */}
          <section id="governing-law" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              9. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by, construed, and enforced in accordance with the substantive laws of the State of New York, without regard to conflict of law principles. Any dispute arising from or related to these terms shall be brought exclusively in the state courts located in Nassau County, New York.
            </p>
          </section>

          {/* Section 10 */}
          <section id="modifications" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              10. Revisions and Broker Inquiries
            </h2>
            <p>
              Mint Homes reserves the right to modify or replace these Terms and Conditions at any time. Notice of revisions will be indicated by the updated effective date at the head of this document.
            </p>

            <div className="p-5 bg-stone-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-950 text-sm">
                Mint Homes Real Estate Brokerage
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>900 Rockaway Ave, Valley Stream, NY 11581</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Telephone: (516) 900-5542</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Email: legal@minthomesli.com</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
