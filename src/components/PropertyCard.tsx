import React from 'react';
import { 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  Heart, 
  Calendar, 
  ArrowUpRight 
} from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  isFavorite,
  onToggleFavorite,
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  // Approximate monthly payment based on 20% down, 6.5% 30yr fixed + taxes/ins
  const estMonthly = Math.round(
    ((property.price * 0.8) * (0.065 / 12) * Math.pow(1 + 0.065 / 12, 360)) /
      (Math.pow(1 + 0.065 / 12, 360) - 1) +
      property.taxesAnnual / 12 +
      150
  );

  return (
    <div 
      onClick={() => onSelect(property)}
      className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:border-slate-300"
    >
      {/* Media Frame */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <img
          src={property.photos[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient Scrim for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Floating Controls */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider bg-slate-950/85 backdrop-blur-md text-amber-400 px-2.5 py-1 rounded">
              {property.status}
            </span>
            <span className="text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
              {property.propertyType}
            </span>
          </div>

          <button
            onClick={(e) => onToggleFavorite(property.id, e)}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-xs cursor-pointer"
            aria-label="Save to favorites"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-700'
              }`} 
            />
          </button>
        </div>

        {/* Open House Notice if scheduled */}
        {property.openHouseTime && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
            <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate font-medium">{property.openHouseTime}</span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price and Est Payment */}
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <div className="font-display text-2xl font-bold text-slate-950 tracking-tight">
              {formattedPrice}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Est. ${estMonthly.toLocaleString()}/mo
            </div>
          </div>

          {/* Address & Neighborhood */}
          <div className="flex items-center gap-1.5 text-sm text-slate-700 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">{property.address}, {property.town}</span>
          </div>

          {/* Unboxed Metadata Line with subtle separators */}
          <div className="flex items-center gap-3 text-xs text-slate-500 pt-3 pb-3 border-y border-slate-100 my-3">
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-slate-400" />
              <strong className="text-slate-800 font-semibold">{property.beds}</strong> Beds
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-slate-400" />
              <strong className="text-slate-800 font-semibold">{property.baths}</strong> Baths
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
              <strong className="text-slate-800 font-semibold">{property.sqft.toLocaleString()}</strong> SqFt
            </span>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {property.tagline}
          </p>
        </div>

        {/* Card Footer with Agent & Action */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={property.agent.photo}
              alt={property.agent.name}
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs font-medium text-slate-700 truncate max-w-[130px]">
              {property.agent.name}
            </span>
          </div>

          <span className="text-xs font-semibold text-amber-800 group-hover:text-amber-900 flex items-center gap-1 transition-colors">
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};
