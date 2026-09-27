export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  town: string;
  county: 'Nassau' | 'Suffolk';
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: 'Single Family' | 'Multi-Family' | 'Condominium' | 'Luxury Estate' | 'Townhouse' | 'Commercial';
  status: 'Active' | 'New Listing' | 'Open House Sunday' | 'Price Improved' | 'Pending';
  openHouseTime?: string;
  tagline: string;
  description: string;
  features: string[];
  photos: string[];
  taxesAnnual: number;
  hoaMonthly?: number;
  schools: {
    district: string;
    elementary: string;
    highSchool: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
}

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'prop-commercial-1',
    title: 'Spacious & Fully Renovated Restaurant Property',
    price: 985000,
    address: 'Rockaway Avenue Commercial Corridor',
    town: 'Valley Stream',
    county: 'Nassau',
    zip: '11581',
    beds: 0,
    baths: 3,
    sqft: 3400,
    lotSize: '75 x 120 ft',
    yearBuilt: 2021,
    propertyType: 'Commercial',
    status: 'New Listing',
    tagline: 'Prime location on main road with large bar area, huge basement for storage, all equipment included.',
    description: 'Spacious and fully renovated turnkey restaurant and commercial property in prime Valley Stream location. Features a large bar area perfect for guests and entertainment, huge full-height basement for storage and prep, and all brand-new commercial kitchen equipment included. Exceptional road visibility, easy customer access, and dedicated on-site parking.',
    features: [
      'All Commercial Kitchen Equipment Included',
      'Large Custom Bar Area and Dining Room',
      'Huge Full-Height Basement for Storage',
      'Prime Main Road Visibility and Access',
      'Dedicated Customer Parking'
    ],
    photos: [
      'https://static.wixstatic.com/media/ca7abb_d83fed79882f4bff969bcc294d5f2b95~mv2.jpeg',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 14200,
    schools: {
      district: 'Valley Stream Central High School District 24',
      elementary: 'Wheeler Avenue School',
      highSchool: 'Valley Stream Central High School'
    },
    coordinates: {
      lat: 40.6640,
      lng: -73.7050
    },
    agent: {
      name: 'Nataly Fuentes',
      phone: '(929) 282-7753',
      email: 'natalyfuentesrealtor@gmail.com',
      photo: 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg'
    }
  },
  {
    id: 'prop-1',
    title: 'Expanded Colonial in Desirable Gibson Section',
    price: 789000,
    address: '142 S Franklin Ave',
    town: 'Valley Stream',
    county: 'Nassau',
    zip: '11581',
    beds: 4,
    baths: 3,
    sqft: 2450,
    lotSize: '60 x 100 ft',
    yearBuilt: 2004,
    propertyType: 'Single Family',
    status: 'New Listing',
    openHouseTime: 'Sunday, 1:00 PM to 3:00 PM',
    tagline: 'Meticulously updated colonial residence close to LIRR Gibson and Valley Stream stations.',
    description: 'Welcome to this immaculate four bedroom colonial residence situated in the coveted Gibson section of Valley Stream. Featuring an open concept chef kitchen with quartz countertops, custom soft close cabinetry, stainless steel appliances, and an expansive breakfast bar. The sun drenched family room offers soaring ceilings and direct walkout access to a private landscaped backyard with custom stone patio. The primary master suite showcases dual walk in closets and a renovated spa bath with double vanity. Additional highlights include a fully finished basement with private outside entrance, central air conditioning, gleaming hardwood floors, and a two car detached garage.',
    features: [
      'Chef Kitchen with Quartz Countertops',
      'Dual Zone Central Air Conditioning',
      'Finished Basement with Separate Entrance',
      'Hardwood Floors Throughout',
      'Two Car Detached Garage',
      'Private Paver Patio and Fenced Yard',
      'Paved Private Driveway'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 11450,
    schools: {
      district: 'Valley Stream Central High School District 24',
      elementary: 'William L. Buck School',
      highSchool: 'Valley Stream South High School'
    },
    coordinates: {
      lat: 40.6625,
      lng: -73.7085
    },
    agent: {
      name: 'Karina Prudencio',
      phone: '(516) 312-4467',
      email: 'karina@minthomesli.com',
      photo: 'https://static.wixstatic.com/media/ca7abb_2ad8a45fc5d34b62b2ae0cc3a43929eb~mv2.png'
    }
  },
  {
    id: 'prop-2',
    title: 'Stately Brick Center Hall Estate',
    price: 1485000,
    address: '88 Meadow Street',
    town: 'Garden City',
    county: 'Nassau',
    zip: '11530',
    beds: 5,
    baths: 4.5,
    sqft: 3950,
    lotSize: '100 x 125 ft',
    yearBuilt: 2011,
    propertyType: 'Luxury Estate',
    status: 'Active',
    tagline: 'Timeless architectural elegance paired with modern luxury in the heart of Garden City.',
    description: 'An exceptional classic center hall brick colonial estate offering unparalleled sophistication. Grand two story marble foyer with sweeping bridal staircase leads into expansive formal living and dining rooms. The gourmet kitchen features top tier Subzero and Wolf appliances, oversized marble island, walk in pantry, and generous breakfast pavilion. The luxurious primary suite includes a fireplace, custom dressing room, and lavish marble bath with soaking tub and steam shower. Located moments from Seventh Street boutiques, dining, and Garden City LIRR station with easy access to Manhattan.',
    features: [
      'Subzero and Wolf Professional Appliances',
      'Grand Two Story Entry Foyer',
      'Primary Suite with Marble Fireplace',
      'Custom Wine Cellar and Tasting Room',
      'Heated In Ground Gunite Saltwater Pool',
      'Three Car Attached Heated Garage',
      'Whole House Smart Lighting and Audio'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 24200,
    schools: {
      district: 'Garden City Union Free School District',
      elementary: 'Stratford Avenue School',
      highSchool: 'Garden City High School'
    },
    coordinates: {
      lat: 40.7268,
      lng: -73.6514
    },
    agent: {
      name: 'Nataly Fuentes',
      phone: '(929) 282-7753',
      email: 'natalyfuentesrealtor@gmail.com',
      photo: 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg'
    }
  },
  {
    id: 'prop-3',
    title: 'Oceanfront Luxury Penthouse Residence',
    price: 895000,
    address: '420 Shore Road Unit PH4',
    town: 'Long Beach',
    county: 'Nassau',
    zip: '11561',
    beds: 2,
    baths: 2,
    sqft: 1620,
    lotSize: 'Condo',
    yearBuilt: 2018,
    propertyType: 'Condominium',
    status: 'Open House Sunday',
    openHouseTime: 'Sunday, 12:00 PM to 2:00 PM',
    tagline: 'Panoramic Atlantic ocean views and wrap around private terrace right on the Long Beach boardwalk.',
    description: 'Experience waterfront luxury at its finest. This top floor corner penthouse provides sweeping Atlantic ocean views from every room through floor to ceiling impact resistant glass. Open concept living and entertaining space with custom Italian cabinetry, premium quartz countertops, and designer lighting. Step directly onto the iconic two mile Long Beach boardwalk, and take advantage of private direct beach access, heated oceanfront pool, fitness center, and reserved indoor garage parking.',
    features: [
      'Sweeping Atlantic Ocean Views',
      'Wraparound 450 SqFt Private Ocean Terrace',
      'Direct Boardwalk and Beach Access',
      'Heated Outdoor Swimming Pool',
      'Two Deeded Indoor Parking Spaces',
      'Concierge and Security Service',
      'Pet Friendly Luxury Residence'
    ],
    photos: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 8900,
    hoaMonthly: 720,
    schools: {
      district: 'Long Beach City School District',
      elementary: 'East Elementary School',
      highSchool: 'Long Beach High School'
    },
    coordinates: {
      lat: 40.5884,
      lng: -73.6579
    },
    agent: {
      name: 'Judit Ramirez',
      phone: '(516) 277-6745',
      email: 'admin@minthomesli.com',
      photo: 'https://static.wixstatic.com/media/a21602_884560f401dd4a2bbaf874ab0ddbbae2~mv2.jpg'
    }
  },
  {
    id: 'prop-4',
    title: 'High Income Legal Two Family Investment',
    price: 949000,
    address: '320 Dutch Broadway',
    town: 'Elmont',
    county: 'Nassau',
    zip: '11003',
    beds: 6,
    baths: 4,
    sqft: 3100,
    lotSize: '50 x 100 ft',
    yearBuilt: 1998,
    propertyType: 'Multi-Family',
    status: 'Active',
    tagline: 'Turnkey legal two family property generating outstanding cash flow near UBS Arena.',
    description: 'Incredible investment opportunity or owner occupant sanctuary. Legal two family residence fully renovated from top to bottom. Unit one features three bedrooms, two full baths, modern granite kitchen, and direct access to full finished basement. Unit two features three bedrooms, two full baths, open living space, and separate utilities. Separate gas meters, separate electric panels, low maintenance vinyl exterior, and private six car driveway. Minutes from UBS Arena, Belmont Park, Cross Island Parkway, and Queens transit.',
    features: [
      'Legal 2 Family Certificate of Occupancy',
      'Separate Gas and Electric Meters',
      'Fully Finished High Ceiling Basement',
      'Private Driveway Accommodating 6 Vehicles',
      'Projected Annual Rental Income $78,000',
      'Low Maintenance Exterior and Fenced Grounds',
      'Modern High Efficiency Heating Systems'
    ],
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 13200,
    schools: {
      district: 'Elmont Union Free School District',
      elementary: 'Dutch Broadway School',
      highSchool: 'Elmont Memorial High School'
    },
    coordinates: {
      lat: 40.6975,
      lng: -73.7126
    },
    agent: {
      name: 'Karina Prudencio',
      phone: '(516) 312-4467',
      email: 'karina@minthomesli.com',
      photo: 'https://static.wixstatic.com/media/ca7abb_2ad8a45fc5d34b62b2ae0cc3a43929eb~mv2.png'
    }
  },
  {
    id: 'prop-5',
    title: 'Modern Waterfront Contemporary on Deep Water Canal',
    price: 1695000,
    address: '54 Shore Drive',
    town: 'Merrick',
    county: 'Nassau',
    zip: '11566',
    beds: 4,
    baths: 3.5,
    sqft: 3400,
    lotSize: '75 x 110 ft',
    yearBuilt: 2020,
    propertyType: 'Luxury Estate',
    status: 'Price Improved',
    tagline: 'Spectacular waterfront sanctuary with 75 feet of private bulkhead and deep water boat slip.',
    description: 'An architectural masterpiece for the discerning boater and entertainer. Rebuilt in 2020 to FEMA guidelines with premier materials. Boasts a massive great room with 18 foot glass walls overlooking peaceful canal waters. Chef caliber kitchen with quartzite counters, custom integrated panel appliances, and temperature controlled glass wine display. Outside, an oversized composite multi level deck features an outdoor kitchen, fire table, and deep water slip accommodating up to a 45 foot vessel with immediate access to South Shore bays.',
    features: [
      '75 Feet of Bulkhead with Boat Slip',
      'Elevated Construction Exceeding FEMA Standards',
      'Floor to Ceiling Panoramic Water Views',
      'Outdoor Summer Kitchen and Fire Lounge',
      'Primary Wing with Private Sunrise Balcony',
      'Attached Heated 2 Car Garage',
      'Solar Panel Array with Battery Backup'
    ],
    photos: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 21800,
    schools: {
      district: 'Merrick Union Free School District',
      elementary: 'Birch School',
      highSchool: 'Sanford H. Calhoun High School'
    },
    coordinates: {
      lat: 40.6629,
      lng: -73.5518
    },
    agent: {
      name: 'Jessica Vance',
      phone: '(516) 900-5542',
      email: 'jessica@minthomesli.com',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'prop-6',
    title: 'Charming Updated Tudor in Prime Village Location',
    price: 849000,
    address: '76 Maple Avenue',
    town: 'Rockville Centre',
    county: 'Nassau',
    zip: '11570',
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    lotSize: '55 x 115 ft',
    yearBuilt: 1938,
    propertyType: 'Single Family',
    status: 'Active',
    tagline: 'Historic architectural character seamlessly blended with contemporary luxury comforts.',
    description: 'Step into this captivating English Tudor residence located in the heart of Rockville Centre village. Authentic leaded glass accents, exposed timber beam ceiling, and a handsome stone wood burning fireplace grace the gracious living room. The modernized kitchen includes custom shaker cabinetry, farmhouse sink, marble counters, and stainless appliances. Formal dining room opens to a sunny stone breakfast nook. Fully fenced manicured backyard with brick patio perfect for weekend gatherings. Walk to LIRR, village restaurants, parks, and schools.',
    features: [
      'Original Leaded Glass Windows and Beamed Ceilings',
      'Wood Burning Fieldstone Fireplace',
      'Renovated Marble and Stainless Kitchen',
      'Primary Bedroom with Ensuite Bath',
      'Walk to Village Dining and LIRR Express',
      'Rockville Centre Municipal Electric Savings',
      'Detached Garage with Storage Loft'
    ],
    photos: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 14600,
    schools: {
      district: 'Rockville Centre Union Free School District',
      elementary: 'Hewitt School',
      highSchool: 'South Side High School'
    },
    coordinates: {
      lat: 40.6587,
      lng: -73.6418
    },
    agent: {
      name: 'Tariq Al-Mansoor',
      phone: '(516) 900-5542',
      email: 'tariq@minthomesli.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'prop-7',
    title: 'Custom Contemporary Masterpiece on Private Acre',
    price: 1890000,
    address: '15 Candlewood Path',
    town: 'Dix Hills',
    county: 'Suffolk',
    zip: '11746',
    beds: 5,
    baths: 5.5,
    sqft: 5200,
    lotSize: '1.05 Acres',
    yearBuilt: 2016,
    propertyType: 'Luxury Estate',
    status: 'New Listing',
    openHouseTime: 'Saturday, 1:00 PM to 3:00 PM',
    tagline: 'Spectacular resort style living on an idyllic private acre in the prestigious Half Hollow Hills district.',
    description: 'Resort living redefined in Dix Hills. This custom architectural contemporary home sits privately on a quiet cul de sac acre. Dramatic entrance foyer with twenty foot ceilings leads to soaring open living spaces. Commercial grade chef kitchen with dual prep islands, double ovens, and pantry. Primary wing is an oasis with fireplace, spa bathroom featuring free standing soaking tub, and custom boutique walk in closets. Outdoor sanctuary features an Olympic sized heated saltwater pool, waterfall spa, covered pavilion with outdoor kitchen, and manicured grounds.',
    features: [
      'Private 1.05 Acre Landscaped Grounds',
      'Olympic Saltwater Pool with Waterfall Spa',
      'Outdoor Kitchen and Covered Entertaining Pavilion',
      'Half Hollow Hills Renowned School District',
      'Finished Walk Out Lower Level with Gym and Theater',
      'Circular Paver Driveway and 3 Car Garage',
      'Whole Property Security and Irrigation Systems'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 27900,
    schools: {
      district: 'Half Hollow Hills Central School District',
      elementary: 'Otsego Elementary School',
      highSchool: 'Half Hollow Hills High School West'
    },
    coordinates: {
      lat: 40.7954,
      lng: -73.3323
    },
    agent: {
      name: 'Elena Rostova',
      phone: '(516) 900-5542',
      email: 'elena@minthomesli.com',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'prop-8',
    title: 'Renovated Split Level with In Ground Pool',
    price: 749000,
    address: '92 Division Avenue',
    town: 'Massapequa',
    county: 'Nassau',
    zip: '11758',
    beds: 4,
    baths: 2.5,
    sqft: 2350,
    lotSize: '65 x 100 ft',
    yearBuilt: 1968,
    propertyType: 'Single Family',
    status: 'Active',
    tagline: 'Turnkey living with entertainer backyard and pristine updates in Massapequa school district.',
    description: 'Look no further for your suburban dream. This expanded split level residence has been thoroughly updated with modern finishes. Open kitchen showcases white shaker cabinetry, stainless appliances, and granite island overlooking the dining room. Lower level family room features a gas fireplace and sliding doors to the resort style yard with custom in ground pool, extensive patio space, and vinyl privacy fencing. Low taxes, quiet tree lined street, and close to Massapequa Preserve trails and shopping.',
    features: [
      'In Ground Swimming Pool with Newer Liner',
      'Updated Kitchen with Granite Countertops',
      'Gas Heating and Central Air Conditioning',
      'Massapequa School District',
      'Attached Garage and Wide Driveway',
      'Quiet Residential Street Near Preserve',
      'Finished Den with Gas Fireplace'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 12800,
    schools: {
      district: 'Massapequa Union Free School District',
      elementary: 'Fairfield Elementary School',
      highSchool: 'Massapequa High School'
    },
    coordinates: {
      lat: 40.6729,
      lng: -73.4735
    },
    agent: {
      name: 'Nataly Fuentes',
      phone: '(929) 282-7753',
      email: 'natalyfuentesrealtor@gmail.com',
      photo: 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg'
    }
  },
  {
    id: 'prop-9',
    title: 'Waterfront Villa with Private Deep Harbor Dock',
    price: 2450000,
    address: '12 West Shore Road',
    town: 'Huntington',
    county: 'Suffolk',
    zip: '11743',
    beds: 5,
    baths: 4.5,
    sqft: 4600,
    lotSize: '0.85 Acres',
    yearBuilt: 2014,
    propertyType: 'Luxury Estate',
    status: 'Active',
    tagline: 'Prestigious North Shore Gold Coast haven with private deep water dock and sunset views.',
    description: 'Set on prestigious Huntington Harbor, this custom residence affords unobstructed water views and extraordinary tranquility. Direct deep water dock can accommodate large boats at all tides. Soaring two story living room with natural stone fireplace and floor to ceiling windows. Gourmet kitchen is an entertainer paradise with custom butler pantry, dual dishwashers, and marble breakfast counter. Primary suite features private veranda overlooking the bay and a marble bathroom suite. Minutes from vibrant Huntington Village theaters and restaurants.',
    features: [
      'Private Deep Water Dock on Huntington Harbor',
      'Floor to Ceiling Harbor Sunset Views',
      'Custom Outdoor Living Room with Fireplace',
      'Walk Out Lower Level with Wine Storage and Media Room',
      'Private Primary Balcony Overlooking the Water',
      'Three Car Heated Garage with Tesla Wall Charger',
      'Minutes to Huntington Village Dining and Arts'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 29500,
    schools: {
      district: 'Huntington Union Free School District',
      elementary: 'Flower Hill Primary School',
      highSchool: 'Huntington High School'
    },
    coordinates: {
      lat: 40.8912,
      lng: -73.4357
    },
    agent: {
      name: 'Jessica Vance',
      phone: '(516) 900-5542',
      email: 'jessica@minthomesli.com',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    id: 'prop-10',
    title: 'Charming Cape Cod in Heart of Floral Park',
    price: 685000,
    address: '45 Clover Street',
    town: 'Floral Park',
    county: 'Nassau',
    zip: '11001',
    beds: 4,
    baths: 2,
    sqft: 1850,
    lotSize: '40 x 100 ft',
    yearBuilt: 1952,
    propertyType: 'Single Family',
    status: 'Pending',
    tagline: 'Storybook curb appeal steps from Floral Park village recreation center and train.',
    description: 'Charming and exceptionally maintained four bedroom Cape Cod residence in Floral Park. Beautiful hardwood floors throughout, formal dining room, modern kitchen with breakfast bar, and updated bathrooms. First floor features two bedrooms and full bath, while the second floor features two additional spacious bedrooms. Full finished basement with laundry and storage. Enjoy Floral Park village amenities including the private recreation center, Olympic pool, tennis courts, and swift 35 minute commute into Penn Station and Grand Central Madison.',
    features: [
      'Floral Park Village Resident Amenities and Pool',
      'Short Walk to LIRR Floral Park Station',
      'Updated Kitchen and Bathrooms',
      'Finished Basement with Storage',
      'Fenced Private Yard with Patio',
      'Hardwood Floors Throughout',
      'Low Village Utilities and Dependable Municipal Services'
    ],
    photos: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 10900,
    schools: {
      district: 'Floral Park-Bellerose Union Free School District',
      elementary: 'John Lewis Childs School',
      highSchool: 'Floral Park Memorial High School'
    },
    coordinates: {
      lat: 40.7248,
      lng: -73.7054
    },
    agent: {
      name: 'Nataly Fuentes',
      phone: '(929) 282-7753',
      email: 'natalyfuentesrealtor@gmail.com',
      photo: 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg'
    }
  },
  {
    id: 'prop-11',
    title: 'Luxury Townhome at The Gates with Private Elevator',
    price: 989000,
    address: '18 Country Club Road',
    town: 'Great Neck',
    county: 'Nassau',
    zip: '11020',
    beds: 3,
    baths: 3.5,
    sqft: 2850,
    lotSize: 'Townhouse',
    yearBuilt: 2017,
    propertyType: 'Townhouse',
    status: 'Active',
    tagline: 'Sophisticated gated townhouse living with private internal elevator and country club amenities.',
    description: 'Elevated lifestyle within a private gated community. This luxury multi level townhouse features a private interior elevator serving all floors. Designer finishes throughout, ten foot ceilings, crown moldings, gas fireplace, and custom built ins. Gourmet kitchen boasts Viking appliances and quartz waterfall counters. Primary bedroom suite offers private terrace, two walk in dressing rooms, and marble bath. Clubhouse offers heated indoor pool, fitness center, concierge, and tennis court.',
    features: [
      'Private Multi Level In Home Elevator',
      'Gated Community with 24 Hour Security Guard',
      'Private Clubhouse with Indoor Heated Pool',
      'Viking Professional Appliance Suite',
      'Attached 2 Car Garage with Epoxy Floors',
      'Great Neck South Renowned School District',
      'Private Terrace Overlooking Manicured Greenery'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 16400,
    hoaMonthly: 590,
    schools: {
      district: 'Great Neck Union Free School District',
      elementary: 'Lakeville Elementary School',
      highSchool: 'Great Neck South High School'
    },
    coordinates: {
      lat: 40.7937,
      lng: -73.7285
    },
    agent: {
      name: 'Judit Ramirez',
      phone: '(516) 277-6745',
      email: 'admin@minthomesli.com',
      photo: 'https://static.wixstatic.com/media/a21602_884560f401dd4a2bbaf874ab0ddbbae2~mv2.jpg'
    }
  },
  {
    id: 'prop-12',
    title: 'Expanded Ranch with Guest Quarters Near Cantiague Park',
    price: 765000,
    address: '114 Blueberry Lane',
    town: 'Hicksville',
    county: 'Nassau',
    zip: '11801',
    beds: 4,
    baths: 3,
    sqft: 2280,
    lotSize: '70 x 100 ft',
    yearBuilt: 1961,
    propertyType: 'Single Family',
    status: 'Open House Sunday',
    openHouseTime: 'Sunday, 2:00 PM to 4:00 PM',
    tagline: 'Generously expanded ranch with flexible multigenerational layout in central Nassau.',
    description: 'Welcome home to this expanded ranch with exceptional floorplan flexibility. Main level offers an open concept formal living room, updated kitchen with center island, primary bedroom with en suite bath, plus two additional bedrooms and full bath. The rear extension provides a separate suite with private bathroom, perfect for extended family, home office, or guest quarters. Full basement with high ceilings, central air, gas heat, and large private yard with covered patio. Convenient to Hicksville LIRR hub and shopping.',
    features: [
      'Flexible Extended Family Suite Layout',
      'Updated Kitchen with Granite Island',
      'Gas Heat and Central Air Conditioning',
      'Close to Hicksville Major LIRR Transit Hub',
      'Large Fenced Yard with Covered Porch',
      'Full Basement with Abundant Storage Space',
      'Private Driveway for 4 Vehicles'
    ],
    photos: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ],
    taxesAnnual: 11900,
    schools: {
      district: 'Hicksville Union Free School District',
      elementary: 'Woodland Avenue School',
      highSchool: 'Hicksville High School'
    },
    coordinates: {
      lat: 40.7684,
      lng: -73.5251
    },
    agent: {
      name: 'Tariq Al-Mansoor',
      phone: '(516) 900-5542',
      email: 'tariq@minthomesli.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  }
];
