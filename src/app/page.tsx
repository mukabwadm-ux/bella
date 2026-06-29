import HeroSection from "@/components/sections/HeroSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import ToursSection from "@/components/sections/ToursSection";
import TravelGuideSection from "@/components/sections/TravelGuideSection";
import CTABand from "@/components/shared/CTABand";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import TripAdvisorSection from "@/components/sections/TripAdvisorSection";
import {
  getFeaturedDestinations,
  getFeaturedTours,
  getFeaturedTestimonials,
  getFeaturedBlogPosts,
} from "@/lib/supabase";

export const revalidate = 60;

export default async function HomePage() {
  const [destinations, tours, testimonials, blogPosts] = await Promise.all([
    getFeaturedDestinations(),
    getFeaturedTours(),
    getFeaturedTestimonials(),
    getFeaturedBlogPosts(),
  ]);

  return (
    <>
      <HeroSection />
      <DifferenceSection />
      <DestinationsSection destinations={destinations} />
      <ParallaxBanner />
      <ToursSection tours={tours} />
      <TravelGuideSection />
      <CTABand />
      <TestimonialsSection testimonials={testimonials} />
      <TripAdvisorSection />
      <BlogSection posts={blogPosts} />
    </>
  );
}
