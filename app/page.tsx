"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import OptimizedImage from "./components/OptimizedImage";
import { allProducts, getFeaturedProducts, Product } from "./data/products";
import { useCart } from "./context/CartContext";
import {
  Filter,
  Wind,
  Disc,
  Zap,
  AirVent,
  Wrench,
  ArrowRight,
  Star,
  TrendingUp,
  Package,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleEngine, setVehicleEngine] = useState("");
  const { addToCart } = useCart();

  // Get different product sets
  const featuredProducts =
    getFeaturedProducts().length > 0
      ? getFeaturedProducts().slice(0, 4)
      : allProducts.slice(0, 4);

  // Best sellers - products with highest rating and reviews
  const bestSellers = [...allProducts]
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, 4);

  // Essentials - common maintenance items
  const essentials = allProducts
    .filter(
      (product) =>
        product.category === "Oil Filter" ||
        product.category === "Air Filter" ||
        product.category === "Cabin Filter" ||
        product.category === "Spark Plugs",
    )
    .slice(0, 4);

  // New arrivals - products marked as new or recently added
  const newArrivals = allProducts
    .filter((product) => product.isNew)
    .slice(0, 4);

  const categories = [
    {
      name: "Oil Filters",
      description: "Engine oil filtration systems",
      icon: Filter,
      slug: "oil-filter",
      count: allProducts.filter((p) => p.category === "Oil Filter").length,
    },
    {
      name: "Air Filters",
      description: "Air intake filtration",
      icon: Wind,
      slug: "air-filter",
      count: allProducts.filter((p) => p.category === "Air Filter").length,
    },
    {
      name: "Brake Pads",
      description: "Brake system components",
      icon: Disc,
      slug: "brake-pads",
      count: allProducts.filter((p) => p.category === "Brake Pads").length,
    },
    {
      name: "Spark Plugs",
      description: "Ignition system parts",
      icon: Zap,
      slug: "spark-plugs",
      count: allProducts.filter((p) => p.category === "Spark Plugs").length,
    },
    {
      name: "Cabin Filters",
      description: "Interior air quality",
      icon: AirVent,
      slug: "cabin-filter",
      count: allProducts.filter((p) => p.category === "Cabin Filter").length,
    },
    {
      name: "Accessories",
      description: "Various auto accessories",
      icon: Wrench,
      slug: "accessories",
      count: allProducts.filter((p) => p.category === "Accessories").length,
    },
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="card-white hover:shadow-xl transition-shadow group relative">
      {product.originalPrice && (
        <div className="absolute top-4 left-4 z-10">
          <div className="badge-primary">
            {Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100,
            )}
            % OFF
          </div>
        </div>
      )}

      {product.isNew && (
        <div className="absolute top-4 right-4 z-10">
          <div className="badge-secondary">NEW</div>
        </div>
      )}

      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-primary pixel-perfect">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <div className="mb-2">
        <div className="text-xs text-accent-primary font-medium mb-1">
          {product.category}
        </div>
        <h3 className="font-semibold text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="text-xs text-secondary mb-2">
          SKU: {product.sku} | Brand: {product.brand}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="text-yellow-400 text-sm">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-secondary">({product.reviews})</span>
        </div>

        <div className="text-xs text-secondary mb-4">
          Compatible: {product.compatibility.slice(0, 2).join(", ")}
          {product.compatibility.length > 2 &&
            ` +${product.compatibility.length - 2} more`}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div
            className={`text-xs px-2 py-1 rounded ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {product.inStock
              ? product.stockLevel <= 10
                ? `Low Stock (${product.stockLevel})`
                : "In Stock"
              : "Out of Stock"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {product.originalPrice && (
          <span className="text-sm text-secondary line-through">
            KES {product.originalPrice.toLocaleString()}
          </span>
        )}
        <span className="text-lg font-bold text-accent-primary">
          KES {product.price.toLocaleString()}
        </span>
      </div>

      <button
        onClick={() => {
          // Add to cart functionality (can be expanded later)
          console.log("Added to cart:", product.name);
        }}
        disabled={!product.inStock}
        className="btn-primary w-full text-sm disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage="home"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-surface-dark to-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&h=1080&fit=crop&auto=format&q=95')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-accent-primary">Nissan</span>{" "}
                Parts
              </h1>
              <p className="text-xl mb-8 text-secondary">
                Kenya's #1 marketplace for genuine OEM and performance parts.
                Quality guaranteed, expert fitment support, fast delivery
                nationwide.
              </p>
              <div className="flex gap-4">
                <Link href="/shop" className="btn-primary text-lg px-8 py-4">
                  Shop Nissan Parts
                </Link>
                <Link
                  href="/support"
                  className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
                >
                  Fitment Guide
                </Link>
              </div>
            </div>

            {/* Vehicle Selector */}
            <div className="card-white">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                Find Parts for Your Nissan
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Year
                    </label>
                    <select
                      className="form-input w-full"
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(e.target.value)}
                    >
                      <option value="">Select Year</option>
                      {Array.from({ length: 15 }, (_, i) => 2024 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ),
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Model
                    </label>
                    <select
                      className="form-input w-full"
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                    >
                      <option value="">Select Model</option>
                      <option value="Note">Note</option>
                      <option value="March">March</option>
                      <option value="X-Trail">X-Trail</option>
                      <option value="Qashqai">Qashqai</option>
                      <option value="Serena">Serena</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Engine
                  </label>
                  <select
                    className="form-input w-full"
                    value={vehicleEngine}
                    onChange={(e) => setVehicleEngine(e.target.value)}
                  >
                    <option value="">Select Engine</option>
                    <option value="1.0L">1.0L</option>
                    <option value="1.2L DIG-S">1.2L DIG-S</option>
                    <option value="1.5L">1.5L</option>
                    <option value="2.0L">2.0L</option>
                    <option value="2.5L">2.5L</option>
                  </select>
                </div>

                <button type="button" className="btn-primary w-full py-3">
                  Find Compatible Parts
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Shop by Category
            </h2>
            <p className="text-xl text-secondary">
              Find the exact parts you need for your Nissan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group card-white hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-10 text-accent-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent-primary transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-secondary mb-4">{category.description}</p>
                  <div className="text-sm text-secondary mb-4">
                    {category.count} parts available
                  </div>
                  <div className="flex items-center justify-center text-accent-primary font-medium">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3 text-primary">
                <TrendingUp className="w-8 h-8 text-accent-primary" />
                Best Sellers
              </h2>
              <p className="text-xl text-secondary">
                Most popular Nissan parts this month
              </p>
            </div>
            <Link href="/shop?sort=popular" className="btn-outline">
              View All Best Sellers
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Essentials for Your Car */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3 text-primary">
                <Package className="w-8 h-8 text-accent-secondary" />
                Essentials for Your Car
              </h2>
              <p className="text-xl text-secondary">
                Must-have maintenance parts for every Nissan owner
              </p>
            </div>
            <Link href="/shop?category=essentials" className="btn-outline">
              View All Essentials
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentials.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3 text-primary">
                <Sparkles className="w-8 h-8 text-accent-secondary" />
                New Arrivals
              </h2>
              <p className="text-xl text-secondary">
                Latest additions to our Nissan parts catalog
              </p>
            </div>
            <Link href="/shop?filter=new" className="btn-outline">
              View All New Arrivals
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.length > 0
              ? newArrivals.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : // Fallback to some products if no new arrivals
                allProducts
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
