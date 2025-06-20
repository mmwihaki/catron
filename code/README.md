# Brator-Inspired Car Parts Website

A modern car parts and accessories e-commerce website inspired by the design of https://brator-main.smartdemowp.com/

## Features

### 🎨 Design & Layout

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Brand Colors**: Uses the distinctive red (#F73312) as the primary brand color
- **Typography**: Professional typography hierarchy with Arial as the primary font

### 🏗️ Components

#### Header

- **Top Banner**: Black Friday promotional banner with language selector
- **Main Header**: Logo, search functionality, wishlist/cart icons, and sign-in button
- **Navigation**: Categories dropdown, main navigation menu, and order tracking link
- **Mobile Responsive**: Collapsible hamburger menu for mobile devices

#### Hero Section

- **Vehicle Search**: Advanced search form with year, brand, model, engine, and fuel type filters
- **Compelling Headlines**: "#1 Online Marketplace" and "Car Spares OEM & Aftermarkets"
- **Gradient Background**: Modern gradient design with subtle decorative elements

#### Categories Section

- **16 Categories**: Auto Parts, Car Care, Engine Parts, Brake System, Lighting, etc.
- **Category Cards**: Each with icon, title, subtitle, and item count
- **Hover Effects**: Smooth hover animations with transform and color changes
- **Load More**: Button to load additional categories

#### What's Hot Slider

- **Promotional Cards**: 4 different promotional sections with gradient backgrounds
- **Interactive Slider**: Navigation arrows and dot indicators
- **Call-to-Action**: "Shop Now" buttons on each promotional card

#### Featured Makes/Models

- **Tab Navigation**: Switch between Featured Makes and Featured Models
- **Grid Layout**: Responsive grid of car manufacturers and models
- **Interactive Buttons**: Hover effects and arrow indicators

#### Product Sections

- **Essential Items**: Product carousel for new car essentials
- **Best Seller**: Products with countdown timer and special badges
- **New Arrivals**: Latest products with "New" badges
- **Product Cards**: Include images, ratings, pricing, and add-to-cart functionality

### 🛠️ Technical Implementation

#### Framework & Tools

- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **CSS Modules**: Component-scoped styling
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

#### Component Architecture

- **Modular Components**: Each section is a separate, reusable component
- **Clean Code**: Well-organized file structure with separated concerns
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Performance**: Optimized images and smooth animations

#### Interactive Features

- **Search Functionality**: Vehicle search with multiple filters
- **Product Carousel**: Horizontal scrolling product displays
- **Countdown Timer**: Real-time countdown for sales
- **Tab Navigation**: Category/model switching
- **Mobile Menu**: Responsive navigation

### 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

### 🎯 Key Design Elements

- **Card-based Layout**: Consistent card design throughout
- **Hover Animations**: Subtle transform and color transitions
- **Color Consistency**: Red (#F73312) used for CTAs and accents
- **Typography Scale**: Consistent font sizes and weights
- **Spacing System**: Uniform padding and margin system

## Development

### Getting Started

```bash
npm install
npm run dev
```

### Project Structure

```
code/
├── app/
│   ├── components/
│   │   ├── Header.tsx & Header.css
│   │   ├── Hero.tsx & Hero.css
│   │   ├── Categories.tsx & Categories.css
│   │   ├── WhatsHot.tsx & WhatsHot.css
│   │   ├── FeaturedMakes.tsx & FeaturedMakes.css
│   │   └── ProductSection.tsx & ProductSection.css
│   ├── styles/
│   │   └── page.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.js
├── package.json
└── tsconfig.json
```

### Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS3 (Grid, Flexbox, Animations)
- Modern ES6+ JavaScript

## Features Implemented

✅ Responsive header with navigation
✅ Hero section with vehicle search
✅ Categories grid with hover effects
✅ Interactive promotional slider
✅ Featured makes/models tabs
✅ Product carousels with ratings
✅ Countdown timer functionality
✅ Mobile-responsive design
✅ Smooth animations and transitions
✅ Modern UI/UX design patterns

This website provides a solid foundation for a car parts e-commerce platform with modern design patterns and user experience best practices.
