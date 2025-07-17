"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import { allProducts, getFeaturedProducts, Product } from "./data/products";
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

  const addToWhatsAppCart = (product: Product, quantity: number = 1) => {
    const phoneNumber = "+254700000000";
    let message = `Hi! I'd like to order this Nissan part:\n\n`;
    message += `• ${quantity}x ${product.name}\n`;
    message += `• SKU: ${product.sku}\n`;
    message += `• Price: KES ${(product.price * quantity).toLocaleString()}\n\n`;
    message += `Please confirm availability, compatibility, and payment details.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow group relative">
      {product.originalPrice && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium">
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
          <div className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium">
            NEW
          </div>
        </div>
      )}

      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mb-2">
        <div className="text-xs text-red-600 font-medium mb-1">
          {product.category}
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="text-xs text-gray-500 mb-2">
          SKU: {product.sku} | Brand: {product.brand}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="text-yellow-400 text-sm">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <div className="text-xs text-gray-500 mb-4">
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
          <span className="text-sm text-gray-500 line-through">
            KES {product.originalPrice.toLocaleString()}
          </span>
        )}
        <span className="text-lg font-bold text-red-600">
          KES {product.price.toLocaleString()}
        </span>
      </div>

      <button
        onClick={() => addToWhatsAppCart(product)}
        disabled={!product.inStock}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors w-full text-sm flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
        {product.inStock ? "Add to WhatsApp Cart" : "Out of Stock"}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage="home"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&h=1080&fit=crop')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-red-500">Nissan</span> Parts
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Kenya's #1 marketplace for genuine OEM and performance parts.
                Quality guaranteed, expert fitment support, fast delivery
                nationwide.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/shop"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Shop Nissan Parts
                </Link>
                <Link
                  href="/support"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Fitment Guide
                </Link>
              </div>
            </div>

            {/* Vehicle Selector */}
            <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Find Parts for Your Nissan
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Engine
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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

                <button
                  type="button"
                  className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
                >
                  Find Compatible Parts
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">
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
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-200"
                >
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {category.count} parts available
                  </div>
                  <div className="flex items-center justify-center text-red-600 font-medium">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-red-600" />
                Best Sellers
              </h2>
              <p className="text-xl text-gray-600">
                Most popular Nissan parts this month
              </p>
            </div>
            <Link
              href="/shop?sort=popular"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-red-600 hover:text-red-600 transition-colors"
            >
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <Package className="w-8 h-8 text-blue-600" />
                Essentials for Your Car
              </h2>
              <p className="text-xl text-gray-600">
                Must-have maintenance parts for every Nissan owner
              </p>
            </div>
            <Link
              href="/shop?category=essentials"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-green-600" />
                New Arrivals
              </h2>
              <p className="text-xl text-gray-600">
                Latest additions to our Nissan parts catalog
              </p>
            </div>
            <Link
              href="/shop?filter=new"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-green-600 hover:text-green-600 transition-colors"
            >
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

      {/* Features Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-300">
                100% genuine OEM and certified aftermarket parts
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Same day dispatch, Kenya-wide delivery
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-300">
                Professional fitment guidance and technical support
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Ordering</h3>
              <p className="text-gray-300">
                Easy ordering via WhatsApp with instant support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div>
                  <div className="text-2xl font-bold">CATRON</div>
                  <div className="text-sm text-gray-300">
                    Nissan Parts Specialist
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Kenya's premier destination for genuine Nissan OEM and
                performance parts. We're committed to keeping your Nissan
                running at peak performance with quality parts and expert
                support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Shop All Parts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/engine"
                    className="hover:text-white transition-colors"
                  >
                    Engine Parts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/brakes"
                    className="hover:text-white transition-colors"
                  >
                    Brake System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/suspension"
                    className="hover:text-white transition-colors"
                  >
                    Suspension
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/electrical"
                    className="hover:text-white transition-colors"
                  >
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/body-trim"
                    className="hover:text-white transition-colors"
                  >
                    Body & Trim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-white transition-colors"
                  >
                    Fitment Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/warranty"
                    className="hover:text-white transition-colors"
                  >
                    Warranty Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-white transition-colors"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-300 text-sm">
                © 2024 Catron Auto Parts. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-300">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
