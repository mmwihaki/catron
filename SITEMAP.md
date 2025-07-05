# Catron Auto Parts - Website Sitemap

## 🏠 Main Navigation Structure

### **Homepage** (`/`)

- Hero Section with CTAs
- Product Categories Grid
- Featured Products Section
- Newsletter Signup
- Site Footer

### **Shop** (`/shop`)

- Product Catalog with Filters
- Search Functionality
- Sort Options (Price, Rating, Newest)
- Product Grid with Pagination

### **Product Categories** (`/category/[slug]`)

- `/category/oil-filter` - Oil Filters
- `/category/air-filter` - Air Filters
- `/category/cabin-filter` - Cabin Filters
- `/category/headlight-bulbs` - Headlight Bulbs
- `/category/spark-plugs` - Spark Plugs
- `/category/brake-pads` - Brake Pads
- `/category/fuel-filter` - Fuel Filters
- `/category/suspension` - Suspension Parts

### **Product Details** (`/product/[id]`)

- Individual product pages (e.g., `/product/1`, `/product/2`, etc.)
- 360° Product Gallery
- Technical Specifications
- Compatibility Checker
- Reviews & Ratings
- Related Products
- Bulk Quote Modal

### **Shopping Cart** (`/cart`)

- Cart Items Management
- Quantity Controls
- Price Calculations (Subtotal, Tax, Shipping)
- WhatsApp Checkout Integration
- Clear Cart Functionality

### **User Account Pages**

- `/wishlist` - Saved Items

### **Information Pages** (Referenced but not yet implemented)

- `/about` - About Catron Auto Parts
- `/contact` - Contact Information & Form
- `/shipping` - Shipping Information
- `/returns` - Return Policy
- `/warranty` - Warranty Information

## 🛒 **E-commerce Features**

### **Search & Discovery**

- Universal Search with SKU Autocomplete
- Advanced Product Filtering
- Category-based Navigation
- Brand & Model Filtering

### **Product Management**

- 15 Products across 8 Categories
- Real-time Stock Management
- Dynamic Pricing with Discounts
- Volume Pricing Tiers

### **Shopping Experience**

- Persistent Cart (localStorage)
- WhatsApp Checkout Integration
- Guest Checkout Available
- Real-time Price Calculations

### **Payment & Delivery**

- WhatsApp Order Processing
- Free Shipping (Orders >KES 5,000)
- Same-day Delivery (Nairobi)
- Tax Calculation (16% VAT)

## 🎨 **Design System**

### **Color Palette**

- **Primary**: Gradient Blues & Purples (#4A90E2, #7B68EE)
- **Accent**: Coral/Orange (#FF6B6B, #FF8E53)
- **Secondary**: Teal (#4ECDC4)
- **Warning**: Gold (#FFD700)
- **Text**: Dark Gray (#2C3E50, #212529)

### **Typography**

- **Headings**: Montserrat (Bold/Black)
- **Body**: Open Sans (Regular/Medium)
- **Technical**: Titillium Web (Labels & SKUs)

### **Components**

- Interactive Product Cards
- Gradient Buttons with Hover Effects
- Modern Search Bar with Autocomplete
- Responsive Navigation
- Modal Windows (Bulk Quote)

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 **Technical Architecture**

### **Frontend Framework**

- Next.js 14 with App Router
- React 18 with TypeScript
- CSS-in-JS (Inline Styles)

### **State Management**

- React Context (Cart Management)
- Local Storage (Persistence)
- useState Hooks (UI State)

### **Data Structure**

- Product Catalog (`/app/data/products.ts`)
- Category Mappings
- Brand & Model Classifications

### **Routing Structure**

```
app/
├── page.tsx                    # Homepage
├── shop/
│   └── page.tsx               # Shop Catalog
├── category/[slug]/
│   └── page.tsx               # Category Pages
├── product/[id]/
│   └── page.tsx               # Product Details
├── cart/
│   └── page.tsx               # Shopping Cart
├── components/
│   ├── Header.tsx             # Site Navigation
│   ├── ProductCard.tsx        # Product Display
│   └── SearchBar.tsx          # Search Component
├── context/
│   └── CartContext.tsx        # Cart State Management
└── data/
    └── products.ts            # Product Database
```

## 🚀 **Deployment Status**

- **Live URL**: Available via Fly.dev
- **Environment**: Production Ready
- **Performance**: Optimized for Fast Loading
- **SEO**: Meta Tags & Structured Data Ready

---

_Last Updated: December 2024_
_Total Pages: 20+ (Dynamic Product/Category Pages)_
_Core Features: Complete E-commerce with WhatsApp Integration_
