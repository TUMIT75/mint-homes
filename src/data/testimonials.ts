export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  transactionType: 'Home Buyer' | 'Home Seller' | 'Multi-Family Investor';
  rating: number;
  date: string;
  quote: string;
  story: string;
  propertySummary: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Robert and Samantha Chen',
    location: 'Valley Stream, NY',
    transactionType: 'Home Seller',
    rating: 5,
    date: 'February 2026',
    quote: 'Mint Homes exceeded all expectations. We received three offers above asking price within five days of listing.',
    story: 'Working with Md Mint Rahman and the Mint Homes team was the best real estate decision we have ever made. They provided clear staging advice, professional HDR photography, and conducted an impeccably organized open house weekend. Their communication guarantee was 100% genuine: every question we had was answered within minutes. We closed smoothly in 42 days.',
    propertySummary: 'Sold 4-Bedroom Colonial on Franklin Avenue for $815,000',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Dr. Tariq and Ayesha Mahmood',
    location: 'Garden City, NY',
    transactionType: 'Home Buyer',
    rating: 5,
    date: 'January 2026',
    quote: 'Their patience, local school district knowledge, and strong negotiation secured our dream home in Garden City.',
    story: 'As physicians moving to Long Island, our schedule was extremely demanding. Farhana and Mint coordinated virtual walk-throughs, arranged private weekend viewings around our hospital shifts, and guided us through a competitive bidding environment with strategic clarity. We could not be happier with our new home and our children love their new school.',
    propertySummary: 'Purchased Center Hall Colonial on Meadow Street for $1,485,000',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Marcus and Denise Washington',
    location: 'Elmont, NY',
    transactionType: 'Multi-Family Investor',
    rating: 5,
    date: 'December 2025',
    quote: 'The financial advisory and cash flow analysis provided by Mint Homes gave us total confidence in our multi family purchase.',
    story: 'Tariq and Mint walked us through detailed rent rolls, tenant lease compliance, municipal certificates of occupancy, and net operating income forecasts. They helped us secure pre-approval with competitive lending terms and negotiated vital seller repair credits before closing.',
    propertySummary: 'Acquired Legal 2-Family Residence on Dutch Broadway for $930,000',
    verified: true
  },
  {
    id: 'test-4',
    clientName: 'Michael and Kimberly O\'Connor',
    location: 'Rockville Centre, NY',
    transactionType: 'Home Buyer',
    rating: 5,
    date: 'November 2025',
    quote: 'From pre-approval guidance to handing us the keys, Mint Homes treated our family like their own.',
    story: 'As first time homebuyers, the Long Island market felt intimidating. Carlos and the advisory team sat down with us for two hours on our first visit to explain mortgage options, village taxes, and closing expenses. There were zero surprises along the way. We recommend Mint Homes to every colleague and family member.',
    propertySummary: 'Purchased Classic Village Tudor for $840,000',
    verified: true
  },
  {
    id: 'test-5',
    clientName: 'Grace and Leonard Kim',
    location: 'Great Neck, NY',
    transactionType: 'Home Seller',
    rating: 5,
    date: 'October 2025',
    quote: 'The marketing campaign was breathtaking. Drone video, twilight photography, and targeted digital distribution brought qualified buyers immediately.',
    story: 'We were downsizing after thirty years in our residence. Jessica Vance and the Mint Homes marketing team handled our home with tremendous dignity and discretion. They protected our privacy while securing a qualified cash buyer at our exact target valuation.',
    propertySummary: 'Sold Luxury Gated Residence for $1,250,000',
    verified: true
  },
  {
    id: 'test-6',
    clientName: 'Anil and Sunita Patel',
    location: 'Hicksville, NY',
    transactionType: 'Home Buyer',
    rating: 5,
    date: 'September 2025',
    quote: 'Their multilingual team made every conversation effortless for our extended family.',
    story: 'Having agents who speak Hindi and understand multigenerational family living requirements made all the difference. Priya and Mint found us an expanded ranch with a private suite that suited both our parents and our growing children. Outstanding professional service from beginning to end.',
    propertySummary: 'Purchased Expanded Ranch on Blueberry Lane for $765,000',
    verified: true
  }
];
