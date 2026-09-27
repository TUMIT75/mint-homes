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
  salesVolume?: string;
  isLeadership?: boolean;
}

export const AGENTS_DATA: Agent[] = [
  {
    id: 'agent-1',
    name: 'Karina Prudencio',
    role: 'Mint Homes CEO and Principal Broker',
    title: 'NYS Licensed Real Estate Broker',
    licenseNumber: 'NYS Lic. #10491208492',
    phone: '(516) 312-4467',
    email: 'karina@minthomesli.com',
    photo: 'https://static.wixstatic.com/media/ca7abb_2ad8a45fc5d34b62b2ae0cc3a43929eb~mv2.png',
    languages: ['English', 'Spanish'],
    specialties: ['Residential Sales', 'Short Sale Negotiations', 'Title Issue Resolution', 'Commercial Deals'],
    bio: "I'm Karina Prudencio, a real estate expert with over 15 years as a paralegal and a successful career in real estate since 2007. My legal background helps me navigate complex deals, resolve title issues, and secure the best terms for you. Whether you're a first-time buyer or an investor, I'll make your real estate journey smooth and stress-free. Let's find your perfect home with Mint Homes!",
    yearsExperience: 19,
    salesVolume: 'Over $120M Career Volume',
    isLeadership: true
  },
  {
    id: 'agent-2',
    name: 'Nataly Fuentes',
    role: 'Licensed Real Estate Salesperson',
    title: 'NYS Licensed Real Estate Salesperson',
    licenseNumber: 'NYS Lic. #10401328914',
    phone: '(929) 282-7753',
    email: 'natalyfuentesrealtor@gmail.com',
    photo: 'https://static.wixstatic.com/media/24db1c_b146d9b05ff5416db985bfee6b5bc753~mv2.jpg',
    languages: ['English', 'Spanish'],
    specialties: ['First-Time Homebuyers', 'Valley Stream and Queens Homes', 'Commercial Leases', 'Tour Scheduling'],
    bio: 'Dedicated real estate professional specializing in residential properties across Nassau County and Queens. Working closely with buyers and sellers to deliver attentive guidance, strategic negotiations, and complete transaction transparency.',
    yearsExperience: 8,
    salesVolume: '$24M+ Volume'
  },
  {
    id: 'agent-3',
    name: 'Judit Ramirez',
    role: 'Real Estate Advisor and Customer Support Lead',
    title: 'NYS Licensed Real Estate Professional',
    licenseNumber: 'NYS Lic. #10401295843',
    phone: '(516) 277-6745',
    email: 'admin@minthomesli.com',
    photo: 'https://static.wixstatic.com/media/a21602_884560f401dd4a2bbaf874ab0ddbbae2~mv2.jpg',
    languages: ['English', 'Spanish'],
    specialties: ['Buyer Housing Matching', 'Closing Coordination', 'Client Care', 'Documentation'],
    bio: 'Focused on ensuring every buyer finds the perfect fit for their housing needs. Praised by clients for attentive listening, swift follow-through, and persistent commitment to helping families reach their homeownership goals.',
    yearsExperience: 7,
    salesVolume: '$18M+ Volume'
  },
  {
    id: 'agent-4',
    name: 'Mint Homes Advisory Desk',
    role: 'Client Fiduciary and Transaction Management',
    title: 'Licensed Brokerage Operations',
    licenseNumber: 'NYS Firm Lic. #10991208500',
    phone: '(516) 900-5542',
    email: 'admin@minthomesli.com',
    photo: 'https://static.wixstatic.com/media/3518fe_89f31e0b38344815ad29158b5e487921~mv2.png',
    languages: ['English', 'Spanish'],
    specialties: ['Standard Operating Procedures', 'Title Search Coordination', 'Mortgage Pre-Approval Support'],
    bio: 'Our centralized operations desk supporting clients from initial inquiry through deed recording, providing consistent oversight under NYS Standard Operating Procedures.',
    yearsExperience: 15
  }
];
