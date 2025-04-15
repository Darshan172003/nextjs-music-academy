# Next.js Music 🎵

This is a **Next.js** project designed for a music school website. It provides information about courses, instructors, and events, along with a contact form for inquiries.

## Features

- **Dynamic Pages**: Built with Next.js for fast and dynamic rendering.
- **Contact Form**: Users can send messages directly from the website.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Interactive UI**: Includes animations and hover effects for an engaging user experience.
- **JSON Data**: Course information is dynamically loaded from `music_courses.json`.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/Darshan172003/nextjs-music-academy
cd nextjs-music
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx        # Contact page with a form and toast notifications
│   ├── courses/
│   │   └── page.tsx        # Courses page displaying available music courses
│   ├── layout.tsx          # Root layout with global styles and Toaster
│   ├── globals.css         # Global CSS styles
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Reusable UI components (e.g., BackgroundBeams, Tooltips)
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer section
│   └── HeroSection.tsx     # Hero section for the homepage
├── data/
│   └── music_courses.json  # JSON file containing course data
├── utils/
│   └── cn.ts               # Utility functions
```

## Key Libraries Used

- [Next.js](https://nextjs.org) - Framework for server-rendered React applications.
- [Aceternity UI](https://ui.aceternity.com/) - Motion-powered UI component library built with Tailwind CSS and Framer Motion.
- [Sonner](https://github.com/emilkowalski/sonner) - For toast notifications.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for styling.
