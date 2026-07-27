export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: "free" | "pro" | "business";
  credits: number;
  maxCredits: number;
  joinedAt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  prompt: string;
}

export interface Generation {
  id: string;
  title: string;
  content: string;
  contentType: ContentType;
  tone: Tone;
  language: Language;
  wordCount: number;
  createdAt: string;
  isFavorite: boolean;
}

export type ContentType =
  | "blog post"
  | "article"
  | "email"
  | "social media post"
  | "product description"
  | "ad copy";

export type Tone = "professional" | "friendly" | "creative" | "formal";

export type Language = "English" | "Spanish" | "French" | "German";

export interface DashboardStats {
  totalGenerations: number;
  wordsGenerated: number;
  savedProjects: number;
  plan: string;
}
