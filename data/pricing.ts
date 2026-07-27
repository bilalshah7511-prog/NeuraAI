import { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started with AI writing",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "50 AI generations per month",
      "Basic AI models",
      "5 content templates",
      "Email support",
      "Standard export formats",
    ],
    cta: "Get Started Free",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professionals who create content daily",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Unlimited AI generations",
      "Advanced AI models (GPT-4)",
      "50+ premium templates",
      "Priority support",
      "All export formats",
      "Tone & language customization",
      "Content history & favorites",
    ],
    highlighted: true,
    cta: "Start Pro Trial",
  },
  {
    id: "business",
    name: "Business",
    description: "For teams and growing businesses",
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Advanced analytics dashboard",
      "API access & webhooks",
      "Custom brand voice",
      "Dedicated account manager",
      "SSO & team permissions",
    ],
    cta: "Contact Sales",
  },
];
