import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WhatsHot from "./components/WhatsHot";
import FeaturedMakes from "./components/FeaturedMakes";
import ProductSection from "./components/ProductSection";
import "./styles/page.css";

export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <Hero />
      <Categories />
      <WhatsHot />
      <FeaturedMakes />
      <ProductSection
        title="Essential Items for New Car"
        products={essentialProducts}
      />
      <ProductSection
        title="Best Seller"
        products={bestSellerProducts}
        showCountdown={true}
      />
      <ProductSection title="New Arrivals" products={newArrivalsProducts} />
    </main>
  );
}

const essentialProducts = [
  {
    id: 1,
    title: "M195 METHOS Black with Bronze Face",
    category: "Air Filters",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    image: "/api/placeholder/300/200",
    isOnSale: true,
  },
  {
    id: 2,
    title: "Premium Engine Oil Filter",
    category: "Oil Filters",
    price: 24.99,
    rating: 4.8,
    image: "/api/placeholder/300/200",
  },
  {
    id: 3,
    title: "High Performance Brake Pads",
    category: "Brake Parts",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    image: "/api/placeholder/300/200",
    isOnSale: true,
  },
  {
    id: 4,
    title: "LED Headlight Bulbs",
    category: "Lighting",
    price: 49.99,
    rating: 4.6,
    image: "/api/placeholder/300/200",
  },
];

const bestSellerProducts = [
  {
    id: 5,
    title: "Carbon Fiber Spoiler",
    category: "Exterior",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    image: "/api/placeholder/300/200",
    isOnSale: true,
    badge: "Best Seller",
  },
  {
    id: 6,
    title: "Sport Suspension Kit",
    category: "Suspension",
    price: 899.99,
    rating: 4.8,
    image: "/api/placeholder/300/200",
    badge: "Top Rated",
  },
  {
    id: 7,
    title: "Performance Exhaust System",
    category: "Exhaust",
    price: 549.99,
    originalPrice: 699.99,
    rating: 4.7,
    image: "/api/placeholder/300/200",
    isOnSale: true,
  },
  {
    id: 8,
    title: "Racing Seat Set",
    category: "Interior",
    price: 1299.99,
    rating: 4.9,
    image: "/api/placeholder/300/200",
    badge: "Premium",
  },
];

const newArrivalsProducts = [
  {
    id: 9,
    title: "Smart Dashboard Camera",
    category: "Electronics",
    price: 199.99,
    rating: 4.5,
    image: "/api/placeholder/300/200",
    badge: "New",
  },
  {
    id: 10,
    title: "Wireless Phone Charger",
    category: "Electronics",
    price: 79.99,
    rating: 4.6,
    image: "/api/placeholder/300/200",
    badge: "New",
  },
  {
    id: 11,
    title: "All-Weather Floor Mats",
    category: "Interior",
    price: 89.99,
    rating: 4.7,
    image: "/api/placeholder/300/200",
    badge: "New",
  },
  {
    id: 12,
    title: "Ceramic Coating Kit",
    category: "Car Care",
    price: 149.99,
    rating: 4.8,
    image: "/api/placeholder/300/200",
    badge: "New",
  },
];
