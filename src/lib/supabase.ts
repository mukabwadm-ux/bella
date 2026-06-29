import { createClient } from "@supabase/supabase-js";
import type { Destination, Tour, BlogPost, Testimonial } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getFeaturedDestinations(): Promise<Destination[]> {
  const { data } = await supabase
    .from("destinations")
    .select("*")
    .eq("featured", true)
    .order("name");
  return data ?? [];
}

export async function getAllDestinations(): Promise<Destination[]> {
  const { data } = await supabase
    .from("destinations")
    .select("*")
    .order("name");
  return data ?? [];
}

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  const { data } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function getFeaturedTours(): Promise<Tour[]> {
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("featured", true)
    .order("price_from_kes");
  return data ?? [];
}

export async function getAllTours(): Promise<Tour[]> {
  const { data } = await supabase
    .from("tours")
    .select("*")
    .order("price_from_kes");
  return data ?? [];
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("featured", true)
    .order("published_at", { ascending: false })
    .limit(3);
  return data ?? [];
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });
  return data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

export async function getToursByDestination(destinationSlug: string): Promise<Tour[]> {
  const { data } = await supabase
    .from("tours")
    .select("*")
    .contains("destinations", [destinationSlug])
    .order("price_from_kes");
  return data ?? [];
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const { data } = await supabase
    .from("testimonials")
    .select("*")
    .eq("featured", true)
    .order("rating", { ascending: false });
  return data ?? [];
}
