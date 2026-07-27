import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "NeuraAI - AI Writing Assistant Platform",
    template: "%s | NeuraAI",
  },
  description:
    "Create better content with artificial intelligence. NeuraAI helps you generate blog posts, emails, social media content, and more in seconds.",
  keywords: [
    "AI writing assistant",
    "content generator",
    "AI blog writer",
    "email writer",
    "social media content",
    "NeuraAI",
  ],
  authors: [{ name: "NeuraAI" }],
  openGraph: {
    title: "NeuraAI - AI Writing Assistant Platform",
    description:
      "Create better content with artificial intelligence. Generate blog posts, emails, and social content in seconds.",
    type: "website",
    locale: "en_US",
    siteName: "NeuraAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuraAI - AI Writing Assistant Platform",
    description:
      "Create better content with artificial intelligence. Generate blog posts, emails, and social content in seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
