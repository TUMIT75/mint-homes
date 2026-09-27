import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Search, 
  Globe2, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Building2,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Agent, AGENTS_DATA } from '../data/agents';

interface AboutPageProps {
  onSelectAgent: (agent: Agent) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onSelectAgent,
  onOpenConsultation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const ceo = AGENTS_DATA.find((a) => a.isLeadership) || AGENTS_DATA[0];
  const allAgents = AGENTS_DATA.filter((a) => !a.isLeadership);

  const filteredAgents = useMemo(() => {
    return allAgents.filter((agent) => {
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const matches = 
          agent.name.toLowerCase().includes(q) ||
          agent.role.toLowerCase().includes(q) ||
          agent.licenseNumber.toLowerCase().includes(q) ||
          agent.specialties.some(s => s.toLowerCase().includes(q));
        if (!matches) return false;
      }

      if (selectedLanguage !== 'All' && !agent.languages.includes(selectedLanguage)) {
        return false;
      }

      if (selectedSpecialty !== 'All' && !agent.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()))) {
        return false;
      }

      return true;
    });
  }, [allAgents, searchTerm, selectedLanguage, selectedSpecialty]);

  const languagesList = ['All', 'English', 'Bengali', 'Spanish', 'Urdu', 'Hindi', 'Russian', 'Mandarin'];
  const specialtiesList = ['All', 'First-Time Homebuyers', 'Luxury', 'Multi-Family', 'Waterfront', 'Relocation'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO INTRODUCTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          About Mint Homes
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Rooted in Long Island. Dedicated to Your Financial Peace.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Founded on Rockaway Avenue in Valley Stream, Mint Homes is an independent, licensed New York real estate brokerage. We merge rigorous market analytics with authentic personal advocacy for buyers, sellers, and investors across Nassau County, Suffolk County, and Queens.
        </p>
      </section>

      {/* 2. CEO LEADERSHIP PROFILE & WHY WORK WITH ME (COMPREHENSIVE REDESIGN) */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Executive Portrait Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-3/4 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl relative bg-slate-900">
              <img
                src={ceo.photo}
                alt={ceo.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                  Principal Broker and Founder
                </span>
                <div className="text-xl font-display font-bold text-white mt-1">
                  {ceo.name}
                </div>
                <div className="text-xs text-slate-300">
                  {ceo.licenseNumber}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block">Experience</span>
                <strong className="text-white text-sm">{ceo.yearsExperience} Years in NY Real Estate</strong>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <span className="text-slate-500 block">Career Production</span>
                <strong className="text-amber-400 text-sm">{ceo.salesVolume}</strong>
              </div>
            </div>
          </div>

          {/* Detailed Executive Narrative & Why Work With Me */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Executive Leadership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Fiduciary Leadership with Deep Community Roots
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When I established Mint Homes at 900 Rockaway Avenue in Valley Stream, I recognized that New York home transactions needed far more than surface level salesmanship. Long Island real estate involves complex municipal codes, shifting school district boundaries, incorporated village tax jurisdictions, and competitive multi offer negotiations.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our firm was built to provide complete fiduciary protection. We treat every buyer purchase like an investment in their family future, and every listing like our own residence. With transparent communication and rigorous contract guidance, we turn what can be an intimidating process into a rewarding milestone.
            </p>

            {/* Why Work With Me Feature Blocks (Addresses the heading without text problem!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Globe2 className="w-4 h-4" />
                  <span>Bilingual and Multicultural Expertise</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fluent in English, Bengali, Hindi, and Urdu. We ensure first-generation buyers and international investors understand every clause of their contract without confusion.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Community Leadership</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Active member of the Long Island Board of Realtors (LIBOR), NYSAR, and Valley Stream community programs. Deeply invested in local neighborhood prosperity.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Empirical MLS Pricing Strategy</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No guesswork or inflated promises. Every valuation is grounded in rigorous historical settlement comps, producing a 98.4% list to sale ratio.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Principal Access</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clients receive direct access to my desk throughout their closing. Our 2-hour communication guarantee applies to every single client inquiry.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Direct Consultation with Broker</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:5169005542"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl text-sm font-semibold border border-slate-700 text-slate-200 hover:bg-slate-900 transition-colors"
              >
                Direct Office: (516) 900-5542
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES AND FIDUCIARY PILLARS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
            Our Brokerage Standard
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-950">
            Why Discerning Clients Choose Mint Homes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950">
              Hyper-Local Knowledge
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From Gibson in Valley Stream to Garden City estates and the Dix Hills corridor, our agents understand street by street market nuances, tax equalization rates, and school district boundaries.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950">
              High-Caliber Marketing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never cut corners on presentation. Every listing features magazine quality HDR photography, twilight exteriors, floorplans, immersive 3D tours, and targeted digital campaigns.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950">
              Absolute Transparency
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No hidden fees, no opaque contracts, and no pressure. Our written service guarantee gives sellers the freedom to cancel their representation agreement at any time before an accepted offer.
            </p>
          </div>
        </div>
      </section>

      {/* 4. UNIFORM LICENSED AGENT DIRECTORY (COMPLETELY FIXES THE PLAIN TEXT LIST PROBLEM!) */}
      <section className="space-y-8 pt-6 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block mb-2">
              Our Professional Team
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-950">
              Meet Our Licensed Real Estate Specialists
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Every Mint Homes agent is fully licensed by the New York Department of State and dedicated to ethical representation.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredAgents.length}</strong> Licensed Advisors
          </div>
        </div>

        {/* Directory Search & Filters Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search agent by name, specialty, or license..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600"
              />
            </div>

            {/* Language Filter */}
            <div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:border-amber-600"
              >
                <option value="All">All Languages Spoken</option>
                {languagesList.filter(l => l !== 'All').map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Specialty Filter */}
            <div>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:border-amber-600"
              >
                <option value="All">All Practice Specialties</option>
                {specialtiesList.filter(s => s !== 'All').map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Uniform Agent Card Grid (Identical aspect ratios, clear typography, proper actions) */}
        {filteredAgents.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8 space-y-3">
            <Users className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-display text-lg font-bold text-slate-950">
              No Agents Match the Selected Filters
            </h4>
            <p className="text-xs text-slate-500">
              Try resetting your language or specialty selection to view all team members.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLanguage('All');
                setSelectedSpecialty('All');
              }}
              className="text-xs text-amber-700 font-semibold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-slate-300"
              >
                {/* Standardized Photo Box */}
                <div>
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-xs text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded">
                      {agent.salesVolume}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-950 leading-tight">
                        {agent.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {agent.role}
                      </p>
                      <p className="text-[11px] text-amber-800 font-mono mt-0.5">
                        {agent.licenseNumber}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {agent.bio}
                    </p>

                    {/* Unboxed Metadata for Languages and Specialties */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-medium text-slate-800">
                          {agent.languages.join(', ')}
                        </span>
                      </div>
                      <div className="text-slate-500 truncate">
                        <span className="font-semibold text-slate-700">Focus: </span>
                        <span>{agent.specialties.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectAgent(agent)}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-white font-semibold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Connect with Agent</span>
                  </button>

                  <a
                    href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full block text-center py-1.5 rounded-lg border border-slate-200 hover:bg-stone-50 text-[11px] font-semibold text-slate-700 transition-colors"
                  >
                    Direct: {agent.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. JOIN MINT HOMES CAREER CALLOUT */}
      <section className="bg-stone-100 rounded-2xl p-8 sm:p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h3 className="font-display text-2xl font-bold text-slate-950">
            Are You a Licensed Real Estate Professional?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Mint Homes provides modern marketing infrastructure, full broker mentorship, and attractive commission models for ambitious NYS licensed agents.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="bg-slate-950 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
        >
          Confidential Career Inquiry
        </button>
      </section>
    </div>
  );
};
