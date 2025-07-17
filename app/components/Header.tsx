"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  Phone,
  Mail,
  Clock,
  Globe,
  MapPin,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  currentPage?: string;
}

export default function Header({
  searchQuery = "",
  setSearchQuery,
  currentPage,
}: HeaderProps) {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    {
      name: "Engine",
      description: "Oil filters, air filters, spark plugs, timing belts",
      slug: "engine",
      count: 1247,
    },
    {
      name: "Brakes",
      description: "Brake pads, discs, calipers, brake fluid",
      slug: "brakes",
      count: 856,
    },
    {
      name: "Suspension",
      description: "Struts, shocks, springs, bushings",
      slug: "suspension",
      count: 634,
    },
    {
      name: "Electrical",
      description: "Alternators, starters, sensors, lighting",
      slug: "electrical",
      count: 923,
    },
    {
      name: "Body & Trim",
      description: "Panels, bumpers, mirrors, handles",
      slug: "body-trim",
      count: 1456,
    },
    {
      name: "Interior",
      description: "Seats, dashboard, air conditioning",
      slug: "interior",
      count: 445,
    },
  ];

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-surface-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm py-2">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1 text-secondary">
                <Phone className="w-4 h-4 text-accent-primary" />
                +254 700 000 000
              </span>
              <span className="flex items-center gap-1 text-secondary">
                <Mail className="w-4 h-4 text-accent-primary" />
                info@catron.co.ke
              </span>
              <span className="flex items-center gap-1 text-secondary">
                <Clock className="w-4 h-4 text-accent-primary" />
                Mon-Sat: 8AM-6PM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-secondary">
                <Globe className="w-4 h-4 text-accent-primary" />
                Kenya Wide Delivery
              </span>
              <span className="flex items-center gap-1 text-secondary">
                <MapPin className="w-4 h-4 text-accent-primary" />
                Nairobi, Kenya
              </span>
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
                <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  C
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary tracking-tight">
                    CATRON
                  </div>
                  <div className="text-xs text-secondary font-medium tracking-wide">
                    Nissan Parts Specialist
                  </div>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex border-2 border-accent-primary rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search by part number, model, or keyword..."
                  className="flex-1 px-4 py-3 outline-none form-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                />
                <button className="bg-accent-primary text-white px-6 py-3 hover:bg-accent-primary hover:opacity-90 transition-all">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-secondary hover:text-accent-secondary transition-colors"
              >
                <Heart className="w-6 h-6" />
                <span className="hidden md:block">Wishlist</span>
              </Link>

              <Link
                href="/cart"
                className="flex items-center gap-2 text-secondary hover:text-accent-secondary transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="hidden md:block">Cart</span>
              </Link>

              <Link
                href="/account"
                className="flex items-center gap-2 text-secondary hover:text-accent-secondary transition-colors"
              >
                <User className="w-6 h-6" />
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
                <Menu className="w-5 h-5" />
                All Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCategories && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border z-50">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
                    >
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
                className={`font-medium transition-colors ${
                  currentPage === "home"
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className={`font-medium transition-colors ${
                  currentPage === "shop"
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors ${
                  currentPage === "about"
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                About
              </Link>
              <Link
                href="/support"
                className={`font-medium transition-colors ${
                  currentPage === "support"
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Support
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors ${
                  currentPage === "contact"
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="ml-auto flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <ShoppingCart className="w-4 h-4" />
                Free shipping on orders over KES 5,000
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Expert fitment support
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
