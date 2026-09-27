import React, { useState } from 'react';
import { 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  Award, 
  BookOpen, 
  MessageSquare,
  Users,
  BadgeCheck,
  ChevronRight,
  Filter,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { Agent, AGENTS_DATA } from '../data/agents';

interface AboutPageProps {
  onSelectAgent: (agent: Agent) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSelectAgent, onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedLicense, setCopiedLicense] = useState<string | null>(null);

  const ceo = AGENTS_DATA.find((a) => a.isLeadership) || AGENTS_DATA[0];
  const teamMembers = AGENTS_DATA.filter((a) => !a.isLeadership);

  const handleCopyLicense = (lic: string) => {
    navigator.clipboard.writeText(lic);
    setCopiedLicense(lic);
    setTimeout(() => setCopiedLicense(null), 2000);
  };

  const filteredTeam = teamMembers.filter((agent) => {
    if (searchTerm.trim() === '') return true;
    const q = searchTerm.toLowerCase();
    return (
      agent.name.toLowerCase().includes(q) ||
      agent.role.toLowerCase().includes(q) ||
      agent.phone.toLowerCase().includes(q) ||
      agent.email.toLowerCase().includes(q) ||
      agent.licenseNumber.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-16 pb-20 sm:pb-28 lg:pb-32">
      {/* 1. SECTION 1: ABOUT US & FOUNDER LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 mb-3">
            <span>Section 1</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 uppercase">
            About Us
          </h1>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* CEO Dual Card Section matching the live site graphic */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Real Photo of Karina Prudencio */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 aspect-4/5">
              <img
                src={ceo.photo || '/karina-prudencio.jpg'}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg';
                }}
                alt="Karina Prudencio, Mint Homes CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-5 text-white">
                <div className="font-display font-bold text-2xl">{ceo.name}</div>
                <div className="text-sm text-amber-400 font-semibold">{ceo.role}</div>
                <div className="text-xs text-slate-300 pt-1 font-mono">{ceo.licenseNumber}</div>
              </div>
            </div>
          </div>

          {/* Infographic Graphic & Authentic Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gradient-to-br from-cyan-800 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-cyan-700/40 space-y-6">
              <div className="border-b border-white/20 pb-4 text-center sm:text-left">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Karina Prudencio
                </h2>
                <p className="text-amber-400 font-semibold text-sm sm:text-base mt-1">
                  17 years of Real Estate experience
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Experience & dedication
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Bilingual expertise
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Community leader
                  </div>
                </div>
              </div>

              {/* Community Leader & Social Advocate Endorsements */}
              <div className="pt-2 border-t border-white/15">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-300 text-center mb-3">
                  Community Leader and Social Advocate
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
                  <span className="px-3 py-1 rounded-full bg-white/15 text-white border border-white/20">
                    PAZITOS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/15 text-white border border-white/20">
                    NICE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/15 text-white border border-white/20">
                    Long Island Community Coalitions
                  </span>
                </div>
              </div>
            </div>

            {/* Authentic Text Wording */}
            <div className="bg-stone-50 p-6 rounded-2xl border border-slate-200 text-slate-700 leading-relaxed text-sm sm:text-base space-y-3">
              <p className="font-serif italic text-slate-900 text-base sm:text-lg">
                "{ceo.bio}"
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-600">
                <a 
                  href={`tel:${ceo.phone.replace(/[^0-9]/g, '')}`} 
                  className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct: {ceo.phone}</span>
                </a>
                <a 
                  href={`mailto:${ceo.email}`} 
                  className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{ceo.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: PHILOSOPHY */}
      <section className="bg-slate-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20">
            <span>Section 2</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            Philosophy
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed pt-4">
            At Mint Homes, we believe that buying or selling a home is a life-changing experience, and we are here to make it seamless. Our expert team provides personalized service, builds strong relationships, and works tirelessly to help you achieve your real estate goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-left">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 font-display text-lg font-bold">Client First</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated attention to each family&apos;s unique circumstances, timeline, and financial objectives.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 font-display text-lg font-bold">Legal Diligence</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Navigating complex deals, title checks, municipal records, and securing best fiduciary terms.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 font-display text-lg font-bold">Community Roots</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proudly rooted in Valley Stream, Nassau County, and Queens with active social advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 3: TEAM DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200">
            <span>Section 3</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 uppercase">
            Team
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
          
          {/* Authentic Team Text From the Live Site */}
          <p className="text-base text-slate-700 leading-relaxed font-normal pt-2">
            Our team is made up of passionate, dedicated professionals who are always willing to lend a helping hand. Each member brings a unique skill set and a strong commitment to excellence. Their enthusiasm for their work and collaborative spirit drive our success, making us stronger together as we deliver outstanding results.
          </p>
        </div>

        {/* Live Search Filter */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search agent by name, phone, or license..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            />
          </div>
          {searchTerm && (
            <div className="text-xs text-slate-500 text-center mt-2">
              Showing {filteredTeam.length} of {teamMembers.length} team members
            </div>
          )}
        </div>

        {/* Team Grid: Exact Circular Portraits and Uniform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredTeam.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Circular Agent Image */}
              <div className="relative mb-5">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-amber-100 shadow-md group-hover:border-amber-400 transition-colors bg-stone-100">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Agent Name in bold caps */}
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 uppercase mb-2">
                {agent.name}
              </h3>

              {/* Contact Details */}
              <div className="w-full space-y-2 text-xs sm:text-sm text-slate-700 mb-5 flex-1">
                {/* Phone */}
                <div className="flex items-center justify-center gap-1.5">
                  <span className="font-semibold text-slate-900 italic">Phone:</span>
                  <a
                    href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                    className="text-slate-800 hover:text-amber-700 font-medium transition-colors"
                  >
                    {agent.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <span className="font-semibold text-slate-900 italic">E-mail:</span>
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-amber-700 hover:text-amber-800 underline transition-colors break-all"
                  >
                    {agent.email}
                  </a>
                </div>

                {/* License */}
                {agent.licenseNumber && (
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <span className="font-semibold text-slate-900 italic">License:</span>
                    <button
                      onClick={() => handleCopyLicense(agent.licenseNumber)}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-mono text-xs cursor-pointer group/btn"
                      title="Click to copy license"
                    >
                      <span>{agent.licenseNumber}</span>
                      {copiedLicense === agent.licenseNumber ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3 text-slate-400 group-hover/btn:text-slate-600" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="w-full grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-stone-100 hover:bg-amber-100 text-slate-800 hover:text-amber-900 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call</span>
                </a>
                <a
                  href={`mailto:${agent.email}?subject=Inquiry%20regarding%20Mint%20Homes%20Properties`}
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredTeam.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No agents found matching &quot;{searchTerm}&quot;. Please try a different name or license.
          </div>
        )}
      </section>

      {/* 4. CALL TO ACTION CONSULTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Personalized Real Estate Support
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to find your perfect home with Mint Homes?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Connect with Karina Prudencio and our licensed advisory team. Free consultation, mortgage pre-qualification guidance, and tailored property matching.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Schedule Free Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="tel:5169005542"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide transition-all border border-white/20"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>(516) 900-5542</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
