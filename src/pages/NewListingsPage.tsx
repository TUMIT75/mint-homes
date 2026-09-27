import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  MapPin, 
  DollarSign, 
  Home, 
  Bed, 
  Bath, 
  Clock, 
  Calendar, 
  Filter, 
  ArrowUpDown, 
  Search, 
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Property, PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';

interface NewListingsPageProps {
  onSelectProperty: (property: Property) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onOpenConsultation: () => void;
}

export const NewListingsPage: React.FC<NewListingsPageProps> = ({
  onSelectProperty,
  favorites,
  onToggleFavorite,
  onOpenConsultation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTown, setSelectedTown] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

  // Filter properties that are New Listing or Open House or recently active
  const newListings = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      // Prioritize new listings, open houses, or price improved
      const isRecent = 
        prop.status === 'New Listing' || 
        prop.status === 'Open House Sunday' || 
        prop.yearBuilt >= 2014;

      if (!isRecent) return false;

      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const matches = 
          prop.title.toLowerCase().includes(q) ||
          prop.address.toLowerCase().includes(q) ||
          prop.town.toLowerCase().includes(q) ||
          prop.zip.includes(q) ||
          prop.features.some(f => f.toLowerCase().includes(q));
        if (!matches) return false;
      }

      if (selectedTown !== 'All' && prop.town !== selectedTown) return false;
      if (selectedType !== 'All' && prop.propertyType !== selectedType) return false;

      if (selectedPrice === 'Under $800k' && prop.price >= 800000) return false;
      if (selectedPrice === '$800k to $1.2M' && (prop.price < 800000 || prop.price > 1200000)) return false;
      if (selectedPrice === '$1.2M+' && prop.price < 1200000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return b.yearBuilt - a.yearBuilt;
    });
  }, [searchTerm, selectedTown, selectedPrice, selectedType, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedTown('All');
    setSelectedPrice('All');
    setSelectedType('All');
    setSortBy('newest');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Fresh MLS Inventory</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          New Long Island Property Listings
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Be the first to tour homes just brought to market. Browse recently listed single-family residences, waterfront contemporary homes, and scheduled weekend open houses across Nassau and Suffolk.
        </p>
      </section>

      {/* 2. MARKET TIMING METRICS BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs text-center">
        <div className="space-y-1">
          <div className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
            Average Days to Contract
          </div>
          <div className="font-display text-3xl font-bold text-slate-950">
            14 Days
          </div>
          <p className="text-[11px] text-slate-500">Across Nassau County</p>
        </div>

        <div className="space-y-1 border-l border-slate-100 pl-4">
          <div className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
            Upcoming Open Houses
          </div>
          <div className="font-display text-3xl font-bold text-amber-800">
            This Weekend
          </div>
          <p className="text-[11px] text-slate-500">Saturday and Sunday tours</p>
        </div>

        <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-4">
          <div className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
            Verified Pre-Market Access
          </div>
          <div className="font-display text-3xl font-bold text-slate-950">
            Exclusive
          </div>
          <p className="text-[11px] text-slate-500">For registered buyers</p>
        </div>

        <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-4">
          <div className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
            Broker Response Time
          </div>
          <div className="font-display text-3xl font-bold text-emerald-800">
            Under 2 Hours
          </div>
          <p className="text-[11px] text-slate-500">Written guarantee</p>
        </div>
      </section>

      {/* 3. FILTER AND SEARCH STRIP */}
      <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by community, street address, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="newest">Newest to Market</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            <button
              onClick={resetFilters}
              className="p-2.5 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer"
              title="Reset filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Dropdown Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 text-xs">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Township / Village
            </label>
            <select
              value={selectedTown}
              onChange={(e) => setSelectedTown(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            >
              <option value="All">All Locations</option>
              <option value="Valley Stream">Valley Stream</option>
              <option value="Garden City">Garden City</option>
              <option value="Dix Hills">Dix Hills</option>
              <option value="Long Beach">Long Beach</option>
              <option value="Huntington">Huntington</option>
              <option value="Merrick">Merrick</option>
              <option value="Hicksville">Hicksville</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Price Range
            </label>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            >
              <option value="All">All Price Points</option>
              <option value="Under $800k">Under $800,000</option>
              <option value="$800k to $1.2M">$800,000 to $1,200,000</option>
              <option value="$1.2M+">$1,200,000 and Above</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Property Classification
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            >
              <option value="All">All Classifications</option>
              <option value="Single Family">Single Family</option>
              <option value="Multi-Family">Multi-Family</option>
              <option value="Condominium">Condominium</option>
              <option value="Luxury Estate">Luxury Estate</option>
            </select>
          </div>
        </div>
      </section>

      {/* 4. RESULTS GRID WITH EXPLICIT NEW BADGES */}
      <section className="space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <div>
            Showing <strong className="text-slate-900">{newListings.length}</strong> new and upcoming properties
          </div>
          {(selectedTown !== 'All' || selectedPrice !== 'All' || selectedType !== 'All' || searchTerm) && (
            <button
              onClick={resetFilters}
              className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {newListings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <Search className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-display text-xl font-bold text-slate-950">
              No New Listings Match Your Current Filters
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              New properties are added to our portfolio each week. Reset your filters or register for instant pre-market email alerts.
            </p>
            <button
              onClick={resetFilters}
              className="bg-slate-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newListings.map((property) => (
              <div key={property.id} className="relative">
                {/* Visual New Badge Callout */}
                <div className="absolute -top-3 left-4 z-20 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-md border border-amber-400">
                  New on Market
                </div>
                <PropertyCard
                  property={property}
                  onSelect={onSelectProperty}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. PRE-MARKET VIP ALERT CALLOUT */}
      <section className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-xl text-center lg:text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-amber-500/30 inline-block">
            VIP Buyer Registry
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Receive New Long Island Listings Before They Hit the Public MLS
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our principal brokers frequently represent off-market residences and pocket listings. Register your search parameters for direct confidential notifications.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shrink-0"
        >
          <span>Register for VIP Pre-Market Alerts</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
