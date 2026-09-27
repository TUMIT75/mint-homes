export interface Testimonial {
  id: string;
  author: string;
  role: string;
  town: string;
  rating: number;
  quote: string;
  fullReview: string;
  year: string;
  source: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'G. & M. Thompson',
    role: 'Homebuyer Client',
    town: 'Valley Stream, NY',
    rating: 5,
    quote: 'There are not enough words in the dictionary to describe my joy with Mint. Service, service and service with an absolute smile.',
    fullReview: 'There are not enough words in the dictionary to describe my joy with Mint. Service, service and service with an absolute smile. Knowledgeable and extremely competent. Thank you Mint for our Forever home. Bless you all.',
    year: '2025',
    source: 'Verified Client'
  },
  {
    id: 'test-2',
    author: 'D. Washington',
    role: 'First-Time Homebuyer',
    town: 'Long Island, NY',
    rating: 5,
    quote: 'Karina from the very first phone call promised to get it done and within 2 months she and Judit were able to find me the perfect fit for my housing needs!',
    fullReview: "There truly are no words good enough to express how wonderful Karina and her team from Mint homes were! After working with multiple other agents over the span of 2 1/2 years to no avail of finding a home Karina from the very first phone call promised to get it done and within 2 months she and Judit were able to find me the perfect fit for my housing needs! They listened to my wishes and made it happen. To this day even after closing I'm still able to call her for assistance and she's always happy and willing to help me. I thank her and Judit so much for making one of the biggest goals of my life come true!",
    year: '2025',
    source: 'Verified Client'
  },
  {
    id: 'test-3',
    author: 'R. Morales',
    role: 'Home Buyer Client',
    town: 'Queens / Nassau, NY',
    rating: 5,
    quote: 'Karina and her crew represented me on the process of buying my house. Very professional and always with the right advice.',
    fullReview: 'Karina and her crew represented me on the process of buying my house. Very professional and always with the right advice to help us achieve our best decision with the purchase. Thank you!!',
    year: '2024',
    source: 'Verified Client'
  },
  {
    id: 'test-4',
    author: 'J. & E. Castillo',
    role: 'Seller & Short Sale Client',
    town: 'Nassau County, NY',
    rating: 5,
    quote: 'Karina is a very experienced real estate broker, absolutely an expert as a negotiator in short sales.',
    fullReview: 'Karina is a very experienced real estate broker, absolutely an expert as a negotiator in short sales. Her expertise, legal background, and negotiation skills resolved our complex title issues and secured the best outcome.',
    year: '2024',
    source: 'Verified Client'
  },
  {
    id: 'test-5',
    author: 'B. & L. Miller',
    role: 'Homeowners & Sellers',
    town: 'Valley Stream, NY',
    rating: 5,
    quote: 'My husband and I had a very challenging situation that made it difficult to close on our home. Then we met Karina and she inspired confidence.',
    fullReview: "My husband and I had a very challenging situation that made it difficult to close on our home. We were very frustrated. Then we met Karina and she inspired confidence. She stuck with us; she kept us informed every step of the way and she made the deal happen. If you want a realtor that can not only find you a buyer but walk you step by step through the process and stay with you until closing then Karina is for you. We highly recommend her, you won't be disappointed.",
    year: '2025',
    source: 'Verified Client'
  },
  {
    id: 'test-6',
    author: 'A. Davis',
    role: 'Residential Buyer',
    town: 'Long Island, NY',
    rating: 5,
    quote: 'Karina is the best at anything she does! She is extremely talented and professional. She was an absolute pleasure to work with.',
    fullReview: 'Karina is the best at anything she does! She is extremely talented and professional. She was an absolute pleasure to work with. She was on top of the situation every step of the way. I would highly recommend her to anyone looking for an agent.',
    year: '2025',
    source: 'Verified Client'
  }
];
