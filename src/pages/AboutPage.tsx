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
  Filter
} from 'lucide-react';
import { Agent, AGENTS_DATA } from '../data/agents';

interface AboutPageProps {
  onSelectAgent: (agent: Agent) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSelectAgent, onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const ceo = AGENTS_DATA.find((a) => a.isLeadership) || AGENTS_DATA[0];

  const filteredAgents = AGENTS_DATA.filter((agent) => {
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      const match = 
        agent.name.toLowerCase().includes(q) ||
        agent.role.toLowerCase().includes(q) ||
        agent.specialties.some(s => s.toLowerCase().includes(q));
      if (!match) return false;
    }
    if (selectedLanguage !== 'All' && !agent.languages.includes(selectedLanguage)) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          Leadership & Licensed Team
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          About Mint Homes
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Premier real estate brokerage serving Long Island and Queens. Built on legal diligence, fiduciary transparency, and personalized client relationships.
        </p>
      </section>

      {/* 2. CEO PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* CEO Large Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-950">
              <img
                src="https://static.wixstatic.com/media/ca7abb_2ad8a45fc5d34b62b2ae0cc3a43929eb~mv2.png"
                alt="Karina Prudencio, Mint Homes CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-5 text-white">
                <div className="font-display font-bold text-xl">{ceo.name}</div>
                <div className="text-xs text-amber-400 font-medium">{ceo.role}</div>
                <div className="text-[11px] text-slate-300 pt-0.5">{ceo.licenseNumber}</div>
              </div>
            </div>
          </div>

          {/* CEO Bio & Why Work With Me */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              <BadgeCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Founder & Principal Broker</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Meet Karina Prudencio
            </h2>

            {/* Exact Live Bio */}
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="font-medium text-slate-900 text-lg">
                "{ceo.bio}"
              </p>
            </div>

            {/* Why Work With Karina Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-semibold text-slate-900 text-xs flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-amber-700" />
                  <span>15+ Years Legal Background</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Extensive paralegal experience resolving complex title encumbrances, deed restrictions, and municipal compliance.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-semibold text-slate-900 text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Short Sale Negotiation Expert</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Recognized negotiator navigating bank workouts, difficult seller situations, and smooth contract execution.
                </p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-4 bg-slate-950 text-white rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="text-amber-400 uppercase tracking-wider text-[10px] font-bold">Direct Office & Mobile</div>
                <div className="flex items-center gap-3">
                  <a href={`tel:${ceo.phone.replace(/\D/g,'')}`} className="font-semibold text-white hover:text-amber-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{ceo.phone}</span>
                  </a>
                  <span className="text-slate-600">|</span>
                  <a href={`mailto:${ceo.email}`} className="font-semibold text-slate-200 hover:text-amber-400">
                    {ceo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REAL PHILOSOPHY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30 inline-block">
            Our Brokerage Philosophy
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            "Buying or selling a home is a life-changing experience, and we're here to make it seamless."
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our expert team provides personalized service, builds strong relationships, and works tirelessly to help you achieve your real estate goals.
          </p>
        </div>
      </section>

      {/* 4. REAL TEAM DIRECTORY WITH SEARCH & FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block mb-2">
              Our Professional Team
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">
              Licensed Agents & Real Estate Advisors
            </h2>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search agent by name..."
                className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
            >
              <option value="All">All Languages</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish (Español)</option>
            </select>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => onSelectAgent(agent)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Photo Frame */}
                <div className="aspect-4/5 overflow-hidden bg-slate-950 relative">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded">
                    {agent.title.includes('Broker') ? 'Broker' : 'Realtor'}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg font-bold text-slate-950 group-hover:text-amber-800 transition-colors">
                    {agent.name}
                  </h3>
                  <div className="text-xs text-amber-700 font-semibold">{agent.role}</div>
                  <div className="text-[11px] text-slate-500">{agent.licenseNumber}</div>
                  
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1">
                    {agent.bio}
                  </p>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 space-y-1 text-xs text-slate-600">
                <a 
                  href={`tel:${agent.phone.replace(/\D/g,'')}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 hover:text-amber-800 font-semibold pt-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{agent.phone}</span>
                </a>
                <a 
                  href={`mailto:${agent.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 hover:text-amber-800 text-[11px] truncate block"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0 inline" />
                  <span className="truncate">{agent.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
