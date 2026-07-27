# NeuraAI - AI Writing Assistant Platform

A premium AI SaaS platform built with Next.js, React, and Tailwind CSS. A professional portfolio-ready AI writing assistant with a marketing website and fully functional dashboard UI.

![NeuraAI](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## Features

### Landing Page
- Modern hero section with AI dashboard preview mockup
- Feature cards showcasing AI capabilities
- How It Works section
- Pricing with monthly/yearly toggle
- Testimonials with ratings
- FAQ accordion
- Responsive footer with social links

### Authentication
- Login page with social auth buttons
- Signup page with validation
- Forgot password flow

### Dashboard
- Collapsible sidebar navigation
- Usage statistics and credit tracking
- Quick create buttons
- Recent creations list

### AI Content Generator
- Large prompt textarea with character counter
- Content type, tone, and language selection
- Simulated AI generation with loading states
- Copy, regenerate, save, and download actions

### Additional Pages
- History with search and filter
- Template library
- Favorites
- Billing and subscription management
- Account settings

### UX Features
- Dark/light mode toggle
- Framer Motion animations
- Toast notifications
- Loading skeletons
- Empty states
- Fully responsive design

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Dashboard pages
│   ├── login/              # Auth pages
│   ├── signup/
│   └── forgot-password/
├── components/
│   ├── landing/            # Landing page sections
│   ├── providers/          # Context providers
│   └── ui/                 # Reusable UI components
├── data/                   # Dummy data and types
├── hooks/                  # Custom React hooks
└── utils/                  # Utility functions
```

## Deployment

Deploy to Vercel with one click:

```bash
npx vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

## Author

Built by [Muhammad Bilal Shah](https://github.com/bilalshah7511-prog) — Frontend Developer specializing in React & Next.js.

- GitHub: [bilalshah7511-prog](https://github.com/bilalshah7511-prog)
- Portfolio: [bilal-sattar-portfolio.vercel.app](https://bilal-sattar-portfolio.vercel.app)
- LinkedIn: [muhammad-bilal-shah](https://www.linkedin.com/in/muhammad-bilal-shah-30950b405)

## License

MIT
