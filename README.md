This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!-- Project structure -->

📦 fx-education-portal
├─ 📁 app
│  ├─ layout.js                         # Global wrapper (Header/Footer)
│  ├─ page.js                           # Homepage (Hero, Features etc.)
│  │
│  ├─ 📁 courses                         # All FX courses
│  │  ├─ page.js                        # Courses listing page
│  │  └─ [slug]
│  │     └─ page.js                     # Individual course details
│  │
│  ├─ 📁 lessons                         # Detailed learning content
│  │  └─ [lessonId]
│  │     └─ page.js                     # Individual lesson page
│  │
│  ├─ 📁 glossary                        # Forex glossary section
│  │  ├─ page.js                        # Glossary search page
│  │  └─ [term]
│  │     └─ page.js                     # Term details page
│  │
│  ├─ 📁 market-news                     # News & analysis
│  │  ├─ page.js                        # Articles list
│  │  └─ [slug]
│  │     └─ page.js                     # News details
│  │
│  ├─ 📁 tools                           # Trading calculators & tools
│  │  ├─ pip-calculator.js
│  │  ├─ profit-calculator.js
│  │  └─ fx-converter.js
│  │
│  ├─ 📁 quizzes                         # Learning quizzes
│  │  ├─ page.js
│  │  └─ [quizId]
│  │     └─ page.js
│  │
│  ├─ 📁 videos                          # Educational video section
│  │  └─ page.js                        # Video list page
│  │
│  ├─ 📁 community                       # Forum / discussion
│  │  ├─ page.js
│  │  └─ [topicId]
│  │     └─ page.js
│  │
│  ├─ 📁 account                         # Authentication pages
│  │  ├─ login
│  │  │  └─ page.js
│  │  ├─ register
│  │  │  └─ page.js
│  │  ├─ profile
│  │  │  └─ page.js                     # User profile page
│  │  └─ dashboard
│  │     └─ page.js                     # User dashboard
│  │
│  ├─ 📁 api                             # Serverless backend APIs
│  │  ├─ courses
│  │  │  └─ route.js
│  │  ├─ glossary
│  │  │  └─ route.js
│  │  ├─ users
│  │  │  └─ route.js
│  │  └─ auth
│  │     └─ route.js                    # Login/logout APIs
│  │
│  ├─ 📁 components                      # Reusable UI components
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ CourseCard.jsx
│  │  ├─ GlossarySearch.jsx
│  │  ├─ QuizCard.jsx
│  │  └─ VideoCard.jsx
│  │
│  ├─ 📁 (sections)                      # Homepage sections & unique sections
│  │  ├─ HeroSection.jsx
│  │  ├─ WhatIsForexSection.jsx
│  │  ├─ CoursesSection.jsx
│  │  ├─ ToolsSection.jsx
│  │  └─ TestimonialsSection.jsx
│  │
│  ├─ 📁 styles                          # Global & module CSS
│  │  └─ globals.css
│  │
│  └─ favicon.ico
│
├─ 📁 public                             # Static files (images, icons)
│  ├─ images
│  │  ├─ courses
│  │  ├─ glossary
│  │  ├─ flags
│  │  └─ banners
│  └─ videos
│     └─ intro.mp4
│
├─ 📁 lib                                # Helper/backend logic
│  ├─ courseService.js
│  ├─ glossaryService.js
│  └─ auth.js
│
├─ 📁 store                              # Redux / Zustand (if required)
│  └─ userStore.js
│
├─ 📁 hooks                              # Custom React hooks
│  └─ useAuth.js
│
├─ 📁 constants                          # Static data like terms list
│  └─ glossary-terms.js
│
├─ .gitignore
├─ package.json
├─ next.config.js
├─ jsconfig.json                         # Import path aliases
└─ README.md

