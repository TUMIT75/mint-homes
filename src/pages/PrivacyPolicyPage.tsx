import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    { id: 'introduction', label: '1. Introduction and Scope' },
    { id: 'information-collected', label: '2. Information We Collect' },
    { id: 'how-we-use', label: '3. How We Use Your Information' },
    { id: 'mls-and-third-parties', label: '4. Third-Party Disclosures' },
    { id: 'sms-and-communications', label: '5. SMS and Telephone Communications' },
    { id: 'cookies-and-tracking', label: '6. Cookies and Tracking Technologies' },
    { id: 'data-security', label: '7. Data Security and Retention' },
    { id: 'your-privacy-rights', label: '8. Your Privacy Rights' },
    { id: 'contact-officer', label: '9. Contact Our Privacy Officer' }
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
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span>Legal Transparency</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Effective Date: January 1, 2026. Last Revised: March 2026. Mint Homes is committed to protecting your personal information and respecting your privacy rights across all real estate transactions and digital services.
        </p>
      </header>

      {/* 2. TWO-COLUMN LAYOUT: STICKY TOC ON LEFT, CONTENT ON RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Table of Contents */}
        <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="font-display font-bold text-slate-950 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="w-4 h-4 text-amber-700" />
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
            <div className="font-semibold text-slate-800">Corporate Brokerage</div>
            <div>Mint Homes Real Estate</div>
            <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
            <div>Direct Office: (516) 900-5542</div>
          </div>
        </aside>

        {/* Legal Text Body */}
        <main className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-10 text-slate-800 text-sm leading-relaxed">
          {/* Section 1 */}
          <section id="introduction" className="space-y-3 scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              1. Introduction and Scope
            </h2>
            <p>
              This Privacy Policy explains how Mint Homes and its licensed affiliated real estate salespersons collect, use, disclose, and safeguard your personal information when you visit minthomesli.com, contact our brokerage offices, schedule a property viewing, or engage our services as a buyer, seller, landlord, or tenant.
            </p>
            <p>
              Mint Homes is a licensed real estate broker in the State of New York with principal offices located at 900 Rockaway Ave, Valley Stream, NY 11581. By accessing our services, you acknowledge that you have read and understood the practices described in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="information-collected" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              2. Information We Collect
            </h2>
            <p>
              We collect information that identifies, relates to, describes, or is reasonably capable of being associated with you. The categories of information we collect include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Contact and Identity Information:</strong> Full legal name, residential mailing address, personal telephone numbers, electronic mail address, and preferred times of contact.
              </li>
              <li>
                <strong>Real Estate Search Criteria:</strong> Property types of interest, geographic locations in Nassau and Suffolk counties, price target ranges, bedroom and bathroom preferences, and moving timelines.
              </li>
              <li>
                <strong>Financial Verification Documentation:</strong> Mortgage pre-approval letters, verified proof of funds letters from recognized banking institutions, and debt-to-income benchmarks required by sellers for offer submission.
              </li>
              <li>
                <strong>Technical Usage Data:</strong> Internet protocol (IP) addresses, browser classification, operating system details, referring web addresses, and pages viewed during browsing sessions.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="how-we-use" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              3. How We Use Your Information
            </h2>
            <p>
              Mint Homes uses collected information strictly for legitimate real estate brokerage and advisory operations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Facilitating private property showings and open house appointments.</li>
              <li>Preparing New York statutory agency disclosure forms and standard representation agreements.</li>
              <li>Transmitting formal purchase offers, counteroffers, and contract addenda to sellers and cooperating listing brokers.</li>
              <li>Coordinating with licensed title companies, settlement attorneys, mortgage lenders, and municipal building departments.</li>
              <li>Providing requested comparative market evaluations and neighborhood pricing analytics.</li>
              <li>Delivering responsive customer service pursuant to our written 2-hour response guarantee.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="mls-and-third-parties" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              4. Third-Party Disclosures
            </h2>
            <p>
              Mint Homes does not sell, rent, or lease consumer personal records to commercial data brokers. We disclose information only under the following limited circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Multiple Listing Services (MLS):</strong> Transmission of listing information to OneKey MLS and the Long Island Board of Realtors (LIBOR) according to regulatory listing guidelines.
              </li>
              <li>
                <strong>Closing Participants:</strong> Necessary transmission of contracts and identification to title insurance examiners, client escrow attorneys, and licensed structural home inspectors.
              </li>
              <li>
                <strong>Statutory and Legal Mandates:</strong> Disclosure when compelled by judicial subpoena, court order, or official inquiry by the New York Department of State Division of Licensing Services.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="sms-and-communications" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              5. SMS and Telephone Communications Policy
            </h2>
            <p>
              When you submit your telephone number on an inquiry form, tour scheduling request, or valuation inquiry, you provide consent for Mint Homes licensed agents to contact you via telephone call and SMS text message regarding your inquiry.
            </p>
            <p>
              Consent is never a condition of purchase. Message and data rates may apply. You may opt out of receiving SMS notifications at any time by replying STOP to any text message from our brokerage. For telephone assistance, call our corporate line at (516) 900-5542.
            </p>
          </section>

          {/* Section 6 */}
          <section id="cookies-and-tracking" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              6. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website uses first-party cookies to remember your saved favorite properties and filter preferences between visits. You may configure your internet browser to refuse cookies; however, certain interactive tools such as saved property bookmarks and custom filter states may not function properly without local storage enabled.
            </p>
          </section>

          {/* Section 7 */}
          <section id="data-security" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              7. Data Security and Retention Standards
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect your personal information against unauthorized access, destruction, or disclosure. Pursuant to New York State real estate licensing law (19 NYCRR Section 175.23), records relating to closed, pending, or canceled real estate transactions are retained for a minimum statutory period of three years.
            </p>
          </section>

          {/* Section 8 */}
          <section id="your-privacy-rights" className="space-y-3 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              8. Your Privacy Rights
            </h2>
            <p>
              Under applicable state laws and regulations, you retain specific rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The right to request disclosure of what personal information we maintain regarding you.</li>
              <li>The right to request correction of inaccurate, outdated, or incomplete records.</li>
              <li>The right to request deletion of personal information, subject to statutory document retention requirements under New York real estate licensing laws.</li>
              <li>The right to be free from discrimination for exercising any privacy rights guaranteed by law.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="contact-officer" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              9. Contact Our Privacy Officer
            </h2>
            <p>
              If you have questions, comments, or wish to exercise your rights under this Privacy Policy, contact our designated privacy compliance officer at:
            </p>

            <div className="p-5 bg-stone-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 text-sm">
                Mint Homes Real Estate Brokerage
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Attention: Privacy Compliance, 900 Rockaway Ave, Valley Stream, NY 11581</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Office Telephone: (516) 900-5542</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Electronic Inquiries: privacy@minthomesli.com</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
