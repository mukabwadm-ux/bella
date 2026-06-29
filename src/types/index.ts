export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  short_description: string;
  long_description: string;
  hero_image: string;
  best_time: string;
  climate: string;
  highlights: string[];
  about: string;
  featured: boolean;
  created_at: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  summary: string;
  details?: string;
  hero_image: string;
  hero_image_alt?: string;
  duration: number;
  group_size: string;
  price_from_kes: number;
  difficulty: "easy" | "moderate" | "challenging";
  category: string;
  destinations: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  faqs: FAQ[];
  featured: boolean;
  best_seller: boolean;
  created_at: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  accommodation?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  tags: string[];
  author: string;
  featured: boolean;
  published_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  body: string;
  trip_type: string;
  source: string;
  featured: boolean;
}

export interface EnquiryFormData {
  tour_slug?: string;
  name: string;
  email: string;
  phone: string;
  travel_date: string;
  group_size: number;
  message: string;
}
