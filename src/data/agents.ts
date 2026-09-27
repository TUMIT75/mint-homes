export interface Agent {
  id: string;
  name: string;
  role: string;
  title: string;
  licenseNumber: string;
  phone: string;
  email: string;
  photo: string;
  languages: string[];
  specialties: string[];
  bio: string;
  yearsExperience: number;
  salesVolume: string;
  isLeadership?: boolean;
}

export const AGENTS_DATA: Agent[] = [
  {
    id: 'agent-1',
    name: 'Md "Mint" Rahman',
    role: 'Founder and Principal Broker',
    title: 'NYS Licensed Real Estate Broker',
    licenseNumber: 'NYS Lic. #10491208492',
    phone: '(516) 900-5542',
    email: 'mint@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Bengali', 'Hindi', 'Urdu'],
    specialties: ['Residential Sales', 'Commercial Investments', 'Multi-Family Properties', 'Negotiation Advisory'],
    bio: 'Founder and Principal Broker of Mint Homes. Over fifteen years of distinguished real estate leadership across Long Island and New York City. Dedicated to empowering families with transparent market guidance, sound financial advice, and tailored marketing campaigns.',
    yearsExperience: 16,
    salesVolume: '$180M+ Career Volume',
    isLeadership: true
  },
  {
    id: 'agent-2',
    name: 'Farhana Sultana',
    role: 'Senior Associate Broker',
    title: 'NYS Licensed Associate Real Estate Broker',
    licenseNumber: 'NYS Lic. #10311284910',
    phone: '(516) 900-5542',
    email: 'farhana@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Bengali'],
    specialties: ['First-Time Homebuyers', 'Garden City and Floral Park Estates', 'Home Staging Advisory'],
    bio: 'Specializing in residential properties throughout Nassau County. Farhana brings meticulous attention to detail and unwavering client advocacy to every transaction.',
    yearsExperience: 9,
    salesVolume: '$38M+ Volume'
  },
  {
    id: 'agent-3',
    name: 'Carlos Mendez',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401295843',
    phone: '(516) 900-5542',
    email: 'carlos@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Spanish'],
    specialties: ['Bilingual Buyer Representation', 'South Shore Waterfront', 'Condominium Communities'],
    bio: 'Proud Long Island native specializing in coastal properties and townhouses. Carlos ensures buyers navigate mortgage approval and closing procedures smoothly.',
    yearsExperience: 7,
    salesVolume: '$29M+ Volume'
  },
  {
    id: 'agent-4',
    name: 'Jessica Vance',
    role: 'Luxury Property Specialist',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401314890',
    phone: '(516) 900-5542',
    email: 'jessica@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    languages: ['English'],
    specialties: ['Luxury Waterfront Estates', 'North Shore Gold Coast', 'Strategic Seller Marketing'],
    bio: 'Jessica curates bespoke marketing campaigns for high value residences in Merrick, Dix Hills, and Huntington. Her digital reach and staging insights produce record sales.',
    yearsExperience: 11,
    salesVolume: '$64M+ Volume'
  },
  {
    id: 'agent-5',
    name: 'Tariq Al-Mansoor',
    role: 'Multi-Family and Commercial Advisor',
    title: 'NYS Licensed Associate Real Estate Broker',
    licenseNumber: 'NYS Lic. #10311299401',
    phone: '(516) 900-5542',
    email: 'tariq@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Arabic', 'Urdu'],
    specialties: ['Multi-Family Income Properties', '1031 Exchanges', 'Investment Financial Analysis'],
    bio: 'Tariq advises private investors and families on portfolio growth and cash flowing multi family properties across Nassau County and the Queens border.',
    yearsExperience: 12,
    salesVolume: '$52M+ Volume'
  },
  {
    id: 'agent-6',
    name: 'Elena Rostova',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401321094',
    phone: '(516) 900-5542',
    email: 'elena@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Russian', 'Ukrainian'],
    specialties: ['Relocation Services', 'New Construction Developments', 'Suffolk County Communities'],
    bio: 'Dedicated to helping families transition seamlessly into Long Island communities. Elena brings deep knowledge of local school districts and municipal amenities.',
    yearsExperience: 6,
    salesVolume: '$24M+ Volume'
  },
  {
    id: 'agent-7',
    name: 'David Goldberg',
    role: 'Senior Sales Consultant',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401265819',
    phone: '(516) 900-5542',
    email: 'david@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Hebrew'],
    specialties: ['Single Family Residential', 'Estate Sales and Probate', 'Senior Housing Transitions'],
    bio: 'With over two decades in sales negotiation, David provides compassionate guidance to families navigating estate sales and property downsizings.',
    yearsExperience: 14,
    salesVolume: '$46M+ Volume'
  },
  {
    id: 'agent-8',
    name: 'Priya Sharma',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401340912',
    phone: '(516) 900-5542',
    email: 'priya@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Hindi', 'Punjabi'],
    specialties: ['Hicksville and Syosset Markets', 'First-Time Buyer Grants', 'Mortgage Pre-Qualification'],
    bio: 'Priya is passionate about guiding emerging buyers through the complete purchase process, from credit optimization to the closing table.',
    yearsExperience: 5,
    salesVolume: '$19M+ Volume'
  },
  {
    id: 'agent-9',
    name: 'Kwame Osei',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401358921',
    phone: '(516) 900-5542',
    email: 'kwame@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Twi'],
    specialties: ['Valley Stream and Elmont Homes', 'Property Valuation', 'Contract Negotiation'],
    bio: 'Kwame brings energetic, transparent advocacy to homeowners in Valley Stream and western Nassau County, ensuring listings secure top market dollar.',
    yearsExperience: 8,
    salesVolume: '$31M+ Volume'
  },
  {
    id: 'agent-10',
    name: 'Mei-Ling Chen',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401367120',
    phone: '(516) 900-5542',
    email: 'meiling@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Mandarin', 'Cantonese'],
    specialties: ['Great Neck and Manhasset Communities', 'International Buyers', 'Condominium Sales'],
    bio: 'Mei-Ling connects domestic and international buyers with luxury residences along the North Shore, delivering discreet and professional representation.',
    yearsExperience: 10,
    salesVolume: '$42M+ Volume'
  },
  {
    id: 'agent-11',
    name: 'Anthony Rossi',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401378945',
    phone: '(516) 900-5542',
    email: 'anthony@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Italian'],
    specialties: ['Massapequa and Wantagh Communities', 'Home Renovation Value', 'Seller Representation'],
    bio: 'Anthony combines deep construction knowledge with market analytics to help sellers maximize returns before placing their homes on the MLS.',
    yearsExperience: 7,
    salesVolume: '$26M+ Volume'
  },
  {
    id: 'agent-12',
    name: 'Nazia Begum',
    role: 'Client Care Coordinator and Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401389012',
    phone: '(516) 900-5542',
    email: 'nazia@minthomesli.com',
    photo: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80',
    languages: ['English', 'Bengali', 'Hindi'],
    specialties: ['First-Time Buyers', 'Closing Coordination', 'Document Compliance'],
    bio: 'Nazia ensures every transaction maintains clear timelines and seamless communication between attorneys, title companies, and lending officers.',
    yearsExperience: 5,
    salesVolume: '$18M+ Volume'
  }
];
