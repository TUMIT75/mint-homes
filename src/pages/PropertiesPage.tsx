import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Home, 
  Bed, 
  Bath, 
  SlidersHorizontal, 
  Grid, 
  Map, 
  RotateCcw, 
  Heart, 
  Sparkles, 
  ChevronDown,
  ArrowUpDown,
  Navigation,
  Check,
  Maximize2
} from 'lucide-react';
import { Property, PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';

interface PropertiesPageProps {
  onSelectProperty: (property: Property) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  initialFilters?: {
    town: string;
    propertyType: string;
    priceRange: string;
    beds: string;
  };
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  onSelectProperty,
  favorites,
  onToggleFavorite,
  initialFilters
}) => {
  // Search and Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTown, setSelectedTown] = useState(initialFilters?.town || 'All');
  const [selectedType, setSelectedType] = useState(initialFilters?.propertyType || 'All');
  const [selectedPrice, setSelectedPrice] = useState(initialFilters?.priceRange || 'All');
  const [selectedBeds, setSelectedBeds] = useState(initialFilters?.beds || 'All');
  const [selectedCounty, setSelectedCounty] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'sqft-desc' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [activeMapPropertyId, setActiveMapPropertyId] = useState<string>(PROPERTIES_DATA[0].id);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      // Favorites filter
      if (onlyFavorites && !favorites.includes(prop.id)) {
        return false;
      }

      // Keyword / Address / Title / MLS Search
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesQuery = 
          prop.title.toLowerCase().includes(query) ||
          prop.address.toLowerCase().includes(query) ||
          prop.town.toLowerCase().includes(query) ||
          prop.zip.includes(query) ||
          prop.propertyType.toLowerCase().includes(query) ||
          prop.features.some(f => f.toLowerCase().includes(query));
        if (!matchesQuery) return false;
      }

      // Town Filter
      if (selectedTown !== 'All' && prop.town !== selectedTown) {
        return false;
      }

      // County Filter
      if (selectedCounty !== 'All' && prop.county !== selectedCounty) {
        return false;
      }

      // Property Type Filter
      if (selectedType !== 'All' && prop.propertyType !== selectedType) {
        return false;
      }

      // Beds Filter
      if (selectedBeds !== 'All') {
        const minBeds = parseInt(selectedBeds, 10);
        if (prop.beds < minBeds) return false;
      }

      // Price Range Filter
      if (selectedPrice === 'Under $750k' && prop.price >= 750000) return false;
      if (selectedPrice === '$750k to $1M' && (prop.price < 750000 || prop.price > 1000000)) return false;
      if (selectedPrice === '$1M to $1.5M' && (prop.price < 1000000 || prop.price > 1500000)) return false;
      if (selectedPrice === '$1.5M+' && prop.price < 1500000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'sqft-desc') return b.sqft - a.sqft;
      if (sortBy === 'newest') return b.yearBuilt - a.yearBuilt;
      return 0; // featured default
    });
  }, [
    searchTerm,
    selectedTown,
    selectedCounty,
    selectedType,
    selectedPrice,
    selectedBeds,
    sortBy,
    onlyFavorites,
    favorites
  ]);

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedTown('All');
    setSelectedType('All');
    setSelectedPrice('All');
    setSelectedBeds('All');
    setSelectedCounty('All');
    setOnlyFavorites(false);
    setSortBy('featured');
  };

  const activeMapProperty = PROPERTIES_DATA.find(p => p.id === activeMapPropertyId) || filteredProperties[0] || PROPERTIES_DATA[0];

  const townsList = [
    'All',
    'Valley Stream',
    'Garden City',
    'Rockville Centre',
    'Long Beach',
    'Floral Park',
    'Elmont',
    'Merrick',
    'Great Neck',
    'Huntington',
    'Dix Hills',
    'Massapequa',
    'Hicksville'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded w-fit mb-2 border border-amber-200">
            <span>Verified MLS Representation</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Long Island Property Listings
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Browse active homes, newly listed properties, and open house schedules across Nassau and Suffolk counties.
          </p>
        </div>

        {/* View Switcher and Saved Filter */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
              onlyFavorites 
                ? 'bg-red-50 border-red-200 text-red-700' 
                : 'bg-white border-slate-200 text-slate-700 hover:bg-stone-50'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-red-500 text-red-500' : ''}`} />
            <span>Saved ({favorites.length})</span>
          </button>

          <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-slate-200 text-xs font-medium">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-white text-slate-950 shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'map' 
                  ? 'bg-white text-slate-950 shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Map View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
        {/* Search Input Row */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by street name, town, zip code, or features (pool, waterfront)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none pl-8 pr-8 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-amber-600 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="sqft-desc">Largest Living Area</option>
                <option value="newest">Newest Construction</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              onClick={resetAllFilters}
              className="p-2.5 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer"
              title="Reset all filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Detailed Secondary Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-2 border-t border-slate-100 text-xs">
          {/* Town Dropdown */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Town / Village
            </label>
            <select
              value={selectedTown}
              onChange={(e) => setSelectedTown(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              {townsList.map(town => (
                <option key={town} value={town}>{town}</option>
              ))}
            </select>
          </div>

          {/* Property Type Dropdown */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Property Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Single Family">Single Family</option>
              <option value="Multi-Family">Multi-Family</option>
              <option value="Condominium">Condominium</option>
              <option value="Luxury Estate">Luxury Estate</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>

          {/* Price Range Dropdown */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Price Range
            </label>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="All">Any Price</option>
              <option value="Under $750k">Under $750,000</option>
              <option value="$750k to $1M">$750k to $1,000,000</option>
              <option value="$1M to $1.5M">$1,000,000 to $1.5M</option>
              <option value="$1.5M+">$1,500,000 and Above</option>
            </select>
          </div>

          {/* Bedrooms Dropdown */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Minimum Bedrooms
            </label>
            <select
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="All">Any Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>

          {/* County Dropdown */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              County Jurisdiction
            </label>
            <select
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="All">All Counties</option>
              <option value="Nassau">Nassau County</option>
              <option value="Suffolk">Suffolk County</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header Status */}
      <div className="flex items-center justify-between text-xs text-slate-600">
        <div>
          Showing <strong className="text-slate-900">{filteredProperties.length}</strong> verified Long Island residences
          {selectedTown !== 'All' && <span> in {selectedTown}</span>}
          {selectedType !== 'All' && <span> ({selectedType})</span>}
        </div>

        {(selectedTown !== 'All' || selectedType !== 'All' || selectedPrice !== 'All' || selectedBeds !== 'All' || searchTerm) && (
          <button
            onClick={resetAllFilters}
            className="text-amber-700 hover:text-amber-900 font-semibold cursor-pointer underline"
          >
            Clear active filters
          </button>
        )}
      </div>

      {/* View Content: Grid Mode vs Map Mode */}
      {viewMode === 'grid' ? (
        <>
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
              <Search className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-display text-xl font-bold text-slate-950">
                No Properties Match Your Specific Criteria
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Try widening your price range, clearing the bedroom filter, or exploring adjacent Long Island communities.
              </p>
              <button
                onClick={resetAllFilters}
                className="mt-2 bg-slate-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelect={onSelectProperty}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        /* Interactive Map View with Property Pins & Detail Panel */
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
          {/* Map Graphic Canvas */}
          <div className="lg:col-span-7 bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center p-6 text-white">
            {/* Visual stylized Long Island map canvas */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Long Island Coastal Outline Schematic */}
            <div className="relative w-full max-w-lg aspect-16/10 border border-slate-800 rounded-xl bg-slate-900/90 p-4 shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-amber-400">
                  <Navigation className="w-3.5 h-3.5 rotate-45" />
                  <span>Long Island Geographic Grid</span>
                </span>
                <span>Nassau / Suffolk Corridor</span>
              </div>

              {/* Pin Markers on Schematic */}
              <div className="relative h-64 w-full">
                {PROPERTIES_DATA.map((prop, idx) => {
                  // Approximate spatial offset on schematic based on latitude and longitude
                  // West to East: Longitude -73.73 (Great Neck/Valley Stream) to -73.33 (Dix Hills/Huntington)
                  const leftPct = Math.min(Math.max(((prop.coordinates.lng - (-73.75)) / (-73.30 - (-73.75))) * 80 + 10, 8), 90);
                  // South to North: Latitude 40.58 (Long Beach) to 40.89 (Huntington)
                  const bottomPct = Math.min(Math.max(((prop.coordinates.lat - 40.58) / (40.90 - 40.58)) * 75 + 10, 10), 85);
                  
                  const isSelected = prop.id === activeMapProperty.id;

                  return (
                    <button
                      key={prop.id}
                      onClick={() => setActiveMapPropertyId(prop.id)}
                      style={{ left: `${leftPct}%`, bottom: `${bottomPct}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer group ${
                        isSelected ? 'z-30 scale-125' : 'z-10 hover:scale-110'
                      }`}
                      title={`${prop.title} ($${prop.price.toLocaleString()})`}
                    >
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold shadow-md transition-colors ${
                        isSelected 
                          ? 'bg-amber-500 text-slate-950 ring-2 ring-white' 
                          : 'bg-slate-950/90 text-white border border-slate-700 hover:border-amber-400'
                      }`}>
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>${(prop.price / 1000).toFixed(0)}k</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                <span>Valley Stream / South Shore</span>
                <span>Central Nassau</span>
                <span>North Shore / Suffolk</span>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-400 text-center">
              Click any pin marker on the Long Island grid to inspect property specifications.
            </div>
          </div>

          {/* Active Property Card on Side of Map */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-stone-50 border-t lg:border-t-0 lg:border-l border-slate-200">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {activeMapProperty.status}
                </span>
                <span>{activeMapProperty.county} County</span>
              </div>

              <div className="aspect-16/10 rounded-xl overflow-hidden mb-4 bg-slate-200 shadow-xs relative">
                <img
                  src={activeMapProperty.photos[0]}
                  alt={activeMapProperty.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => onToggleFavorite(activeMapProperty.id, e)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 hover:text-red-500 cursor-pointer shadow-xs"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(activeMapProperty.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

              <div className="font-display text-2xl font-bold text-slate-950 mb-1">
                ${activeMapProperty.price.toLocaleString()}
              </div>

              <div className="flex items-center gap-1.5 text-sm text-slate-700 font-medium mb-3">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>{activeMapProperty.address}, {activeMapProperty.town}, NY {activeMapProperty.zip}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-600 pb-3 border-b border-slate-200 mb-3">
                <span><strong>{activeMapProperty.beds}</strong> Beds</span>
                <span>·</span>
                <span><strong>{activeMapProperty.baths}</strong> Baths</span>
                <span>·</span>
                <span><strong>{activeMapProperty.sqft.toLocaleString()}</strong> SqFt</span>
                <span>·</span>
                <span>{activeMapProperty.propertyType}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {activeMapProperty.description}
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => onSelectProperty(activeMapProperty)}
                className="w-full bg-slate-950 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Inspect Full Property Dossier
              </button>
              <div className="text-[11px] text-slate-500 text-center">
                Agent: {activeMapProperty.agent.name} · {activeMapProperty.agent.phone}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
