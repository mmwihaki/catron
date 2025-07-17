"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  compatibility: string[];
  inStock: boolean;
  isNew?: boolean;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleEngine, setVehicleEngine] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const featuredProducts: Product[] = [
    {
      id: 1,
      sku: "NIS-OF-001",
      name: "NISSAN OEM Oil Filter 15208-65F0C",
      category: "Oil Filters",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      price: 1850,
      originalPrice: 2200,
      rating: 4.8,
      reviews: 156,
      compatibility: ["Note E12", "March K13", "Micra K13"],
      inStock: true,
    },
    {
      id: 2,
      sku: "NIS-AF-002",
      name: "NISSAN Cabin Air Filter 27277-1HM0A",
      category: "Air Filters",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      price: 3200,
      originalPrice: 3800,
      rating: 4.7,
      reviews: 89,
      compatibility: ["X-Trail T32", "Qashqai J11"],
      inStock: true,
    },
    {
      id: 3,
      sku: "NIS-SP-003",
      name: "NGK Spark Plug DILKAR7E11HS for DIG-S",
      category: "Spark Plugs",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
      price: 2400,
      rating: 4.9,
      reviews: 203,
      compatibility: ["Note DIG-S", "March DIG-S"],
      inStock: true,
    },
    {
      id: 4,
      sku: "NIS-BP-004",
      name: "NISSAN OEM Brake Pads Front D4060-1HM0A",
      category: "Brake Pads",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&h=300&fit=crop",
      price: 8500,
      originalPrice: 9800,
      rating: 4.6,
      reviews: 134,
      compatibility: ["X-Trail T32", "Qashqai J11"],
      inStock: true,
    },
  ];

  const categories = [
    {
      name: "Engine",
      description: "Oil filters, air filters, spark plugs, timing belts",
      icon: "🔧",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&h=200&fit=crop",
      slug: "engine",
      count: 1247,
    },
    {
      name: "Brakes",
      description: "Brake pads, discs, calipers, brake fluid",
      icon: "🛑",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=300&h=200&fit=crop",
      slug: "brakes",
      count: 856,
    },
    {
      name: "Suspension",
      description: "Struts, shocks, springs, bushings",
      icon: "⚙️",
      image:
        "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&h=200&fit=crop",
      slug: "suspension",
      count: 634,
    },
    {
      name: "Electrical",
      description: "Alternators, starters, sensors, lighting",
      icon: "⚡",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      slug: "electrical",
      count: 923,
    },
    {
      name: "Body & Trim",
      description: "Panels, bumpers, mirrors, handles",
      icon: "🚗",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=300&h=200&fit=crop",
      slug: "body-trim",
      count: 1456,
    },
    {
      name: "Interior",
      description: "Seats, dashboard, air conditioning",
      icon: "🪑",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
      slug: "interior",
      count: 445,
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        {/* Top Bar */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center text-sm py-2">
              <div className="flex items-center gap-6">
                <span>📞 +254 700 000 000</span>
                <span>✉️ info@brator.co.ke</span>
                <span>🕒 Mon-Sat: 8AM-6PM</span>
              </div>
              <div className="flex items-center gap-4">
                <span>🌍 Kenya Wide Delivery</span>
                <span>📍 Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="logo">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    B
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      BRATOR
                    </div>
                    <div className="text-xs text-gray-500">
                      Nissan Parts Specialist
                    </div>
                  </div>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-8">
                <div className="flex border-2 border-red-600 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search by part number, model, or keyword..."
                    className="flex-1 px-4 py-3 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6">
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="hidden md:block">Wishlist</span>
                </Link>

                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 relative"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                    />
                  </svg>
                  <span className="hidden md:block">Cart</span>
                </Link>

                <Link
                  href="/account"
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="hidden md:block">Account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-8 py-3">
              <div className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  All Categories
                </button>

                {showCategories && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border z-50">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
                      >
                        <span className="text-xl">{category.icon}</span>
                        <div>
                          <div className="font-medium text-gray-900">
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {category.count} items
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="font-medium text-gray-700 hover:text-red-600"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="font-medium text-gray-700 hover:text-red-600"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="font-medium text-gray-700 hover:text-red-600"
                >
                  About
                </Link>
                <Link
                  href="/support"
                  className="font-medium text-gray-700 hover:text-red-600"
                >
                  Support
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-gray-700 hover:text-red-600"
                >
                  Contact
                </Link>
              </div>

              <div className="ml-auto flex items-center gap-4 text-sm text-gray-500">
                <span>📦 Free shipping on orders over KES 5,000</span>
                <span>🔧 Expert fitment support</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

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

      {/* Category Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">
              Find the exact parts you need for your Nissan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {category.name}
                      </h3>
                      <div className="text-sm text-gray-500">
                        {category.count} parts available
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-red-600 font-medium">
                    Shop Now
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Best Sellers</h2>
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
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow group relative"
              >
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
                    SKU: {product.sku}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-yellow-400 text-sm">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
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

                  <div className="text-xs text-gray-500 mb-4">
                    Compatible: {product.compatibility.slice(0, 2).join(", ")}
                    {product.compatibility.length > 2 &&
                      ` +${product.compatibility.length - 2} more`}
                  </div>
                </div>

                <button
                  onClick={() => addToWhatsAppCart(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full text-sm flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Add to WhatsApp Cart
                </button>
              </div>
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
                  B
                </div>
                <div>
                  <div className="text-2xl font-bold">BRATOR</div>
                  <div className="text-sm text-gray-400">
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
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z.001" />
                  </svg>
                </a>
              </div>
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
              <div className="text-gray-400 text-sm">
                © 2024 Brator Auto Parts. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
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
