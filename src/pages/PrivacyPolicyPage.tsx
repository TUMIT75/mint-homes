import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    { id: 'sec-intro', label: 'Overview & Scope' },
    { id: 'sec-1', label: '1. Information We Collect' },
    { id: 'sec-2', label: '2. How We Use Your Information' },
    { id: 'sec-3', label: '3. Sharing of Information' },
    { id: 'sec-4', label: '4. Cookies & Tracking' },
    { id: 'sec-5', label: '5. Third-Party Services' },
    { id: 'sec-6', label: '6. Data Security Measures' },
    { id: 'sec-7', label: '7. Your Privacy Rights' },
    { id: 'sec-8', label: '8. Contact Information' },
    { id: 'sec-9', label: '9. SMS Terms & Conditions' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          Last Updated: September 2026. Welcome to Mint Homes Real Estate. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
        </p>
      </header>

      {/* 2. TWO-COLUMN LAYOUT: STICKY TOC ON LEFT, EXACT LIVE TEXT ON RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Sticky Table of Contents */}
        <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="font-display font-bold text-slate-950 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="w-4 h-4 text-amber-700" />
            <span>Table of Contents</span>
          </div>

          <nav className="space-y-1 text-xs">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="w-full text-left py-2 px-2.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-stone-50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>{sec.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="font-semibold text-slate-900">Corporate Brokerage</div>
            <div>Mint Homes Real Estate</div>
            <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
            <div>Direct Office: (516) 900-5542</div>
            <div>Email: admin@minthomesli.com</div>
          </div>
        </aside>

        {/* Right: Exact Real Legal Content from Live Site */}
        <article className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          <div id="sec-intro" className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Welcome to Mint Homes Real Estate
            </h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website (www.minthomesli.com) and utilize our real estate brokerage services.
            </p>
          </div>

          <div id="sec-1" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              1. Information We Collect
            </h3>
            <p>
              When you visit our website or fill out a form, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Contact details including your full name, email address, and telephone number</li>
              <li>Property preferences, price ranges, and financing readiness information</li>
              <li>Any other information you voluntarily provide in inquiries or valuation requests</li>
            </ul>
            <p className="pt-2">
              We may also automatically collect certain information such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Pages visited on our website and duration of visits</li>
              <li>Browser types, operating systems, and referring IP addresses</li>
              <li>Cookies and tracking technologies to enhance user navigation</li>
            </ul>
          </div>

          <div id="sec-2" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              2. How We Use Your Information
            </h3>
            <p>
              Mint Homes Real Estate may use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Respond to inquiries, questions, and tour requests</li>
              <li>Provide information about real estate opportunities and active listings</li>
              <li>Assist you with the home buying or selling process</li>
              <li>Send updates, marketing communications, market reports, or newsletters</li>
              <li>Improve our website, listings presentation, and brokerage services</li>
            </ul>
          </div>

          <div id="sec-3" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              3. Sharing of Information
            </h3>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl font-medium text-amber-950">
              Data will not be sold or shared with third parties for marketing or promotional purposes.
            </div>
            <p>
              We may share your information only with trusted partners assisting with transactions, such as title search companies, closing attorneys, or mortgage advisors explicitly requested by you. These partners are required to protect your information and maintain confidentiality.
            </p>
          </div>

          <div id="sec-4" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              4. Cookies and Tracking Technologies
            </h3>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings, although certain features of the site may function differently.
            </p>
          </div>

          <div id="sec-5" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              5. Third-Party Services
            </h3>
            <p>
              Our website may contain links to third-party websites or services, such as mortgage rate calculators or social media platforms. We are not responsible for the privacy practices of those external websites.
            </p>
          </div>

          <div id="sec-6" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              6. Data Security
            </h3>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of internet transmission or electronic storage is completely secure.
            </p>
          </div>

          <div id="sec-7" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              7. Your Privacy Rights
            </h3>
            <p>
              You may request at any time to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Access your personal information held in our records</li>
              <li>Update or correct your personal data</li>
              <li>Request deletion of your personal data</li>
            </ul>
            <p className="pt-2">
              To make a request, please contact us using the information below.
            </p>
          </div>

          <div id="sec-8" className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-950">
              8. Contact Information
            </h3>
            <p>
              If you have any questions about this Privacy Policy, please contact our office:
            </p>
            <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-700">
              <div className="font-bold text-slate-900 text-sm">Mint Homes Real Estate</div>
              <div>900 Rockaway Ave, Valley Stream, NY 11581</div>
              <div>Telephone: (516) 900-5542 | (888) 592-1593</div>
              <div>Email: admin@minthomesli.com</div>
              <div>Website: www.minthomesli.com</div>
            </div>
          </div>

          {/* Exact SMS Terms from Live Site */}
          <div id="sec-9" className="space-y-3 pt-6 border-t border-slate-100">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
              <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
              <span>Communications Policy</span>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950">
              9. SMS Terms & Conditions
            </h3>
            <p>
              We use SMS to confirm appointments, send tour reminders, and notify clients of schedule updates or important transaction changes.
            </p>
            <p>
              You can cancel the SMS service at any time. Just text "STOP". After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.
            </p>
            <p>
              If you are experiencing issues with the messaging program you can reply with the keyword "HELP" for more assistance, or you can get help directly at marketing@minthomesli.com.
            </p>
            <p className="text-xs text-slate-500">
              Carriers are not liable for delayed or undelivered messages. As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency may vary. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
