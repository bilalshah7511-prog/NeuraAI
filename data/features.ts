import { Feature } from "./types";

export const features: Feature[] = [
  {
    id: "writing",
    title: "AI Writing Assistant",
    description:
      "Generate high-quality content in seconds with our advanced AI writing engine powered by state-of-the-art language models.",
    icon: "PenTool",
  },
  {
    id: "blog",
    title: "Blog Generator",
    description:
      "Create engaging blog posts with SEO-optimized titles, meta descriptions, and structured content that ranks.",
    icon: "FileText",
  },
  {
    id: "email",
    title: "Email Writer",
    description:
      "Craft compelling emails for marketing campaigns, cold outreach, newsletters, and follow-ups that convert.",
    icon: "Mail",
  },
  {
    id: "social",
    title: "Social Media Content",
    description:
      "Generate viral-ready posts for Twitter, LinkedIn, Instagram, and Facebook with platform-specific formatting.",
    icon: "Share2",
  },
  {
    id: "summarizer",
    title: "AI Summarizer",
    description:
      "Condense long articles, documents, and reports into clear, concise summaries while preserving key insights.",
    icon: "ListCollapse",
  },
  {
    id: "grammar",
    title: "Grammar Improvement",
    description:
      "Polish your writing with AI-powered grammar checks, style suggestions, and readability improvements.",
    icon: "SpellCheck",
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Enter Your Idea",
    description:
      "Describe what you want to create — a blog post, email, social caption, or any content type you need.",
    icon: "Lightbulb",
  },
  {
    step: 2,
    title: "AI Generates Content",
    description:
      "Our AI analyzes your prompt and generates high-quality, tailored content in your chosen tone and language.",
    icon: "Sparkles",
  },
  {
    step: 3,
    title: "Edit & Export",
    description:
      "Fine-tune the output, save to your library, and export in your preferred format — ready to publish.",
    icon: "Download",
  },
];
