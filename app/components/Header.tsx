"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { useCart } from "../context/CartContext";
import { allProducts } from "../data/products";

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
  const { getTotalItems, setIsCartOpen } = useCart();
  const categoriesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setShowCategories(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get actual categories from products data
  const getProductCategories = () => {
    const categoryMap = new Map();

    allProducts.forEach((product) => {
      const category = product.category;
      if (categoryMap.has(category)) {
        categoryMap.set(category, categoryMap.get(category) + 1);
      } else {
        categoryMap.set(category, 1);
      }
    });

    return Array.from(categoryMap.entries()).map(([name, count]) => ({
      name,
      slug: name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
      count,
    }));
  };

  const categories = getProductCategories();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-surface-dark text-white header-top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm py-2 gap-2">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="flex items-center gap-1 text-white">
                <Phone className="w-4 h-4 text-white" />
                0742578910
              </span>
              <span className="flex items-center gap-1 text-white">
                <Clock className="w-4 h-4 text-white" />
                Mon-Sat: 8AM-6PM
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span className="flex items-center gap-1 text-white">
                <Globe className="w-4 h-4 text-white" />
                Kenya Wide Delivery
              </span>
              <span className="flex items-center gap-1 text-white">
                <MapPin className="w-4 h-4 text-white" />
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
                  <div className="text-xs text-primary font-medium tracking-wide">
                    Nissan Parts Specialist
                  </div>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4 md:mx-8 hidden md:block">
              <form
                onSubmit={handleSearch}
                className="flex border-2 border-accent-primary rounded-lg overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="Search by part number, model, or keyword..."
                  className="flex-1 px-4 py-3 outline-none form-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-accent-primary text-white px-6 py-3 hover:bg-accent-primary hover:opacity-90 transition-all"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-primary hover:text-accent-secondary transition-colors"
              >
                <Heart className="w-6 h-6" />
                <span className="hidden md:block text-primary">Wishlist</span>
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 text-primary hover:text-accent-secondary transition-colors relative"
              >
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
                <span className="hidden md:block text-primary">Cart</span>
              </button>

              <Link
                href="/account"
                className="flex items-center gap-2 text-primary hover:text-accent-secondary transition-colors"
              >
                <User className="w-6 h-6" />
                <span className="hidden md:block text-primary">Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="bg-white border-b border-divider md:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <form
            onSubmit={handleSearch}
            className="flex border-2 border-accent-primary rounded-lg overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search parts..."
              className="flex-1 px-4 py-3 outline-none form-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery?.(e.target.value)}
            />
            <button
              type="submit"
              className="bg-accent-primary text-white px-6 py-3 hover:bg-accent-primary hover:opacity-90 transition-all"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary border-b border-divider">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-3">
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="btn-primary"
              >
                <Menu className="w-5 h-5" />
                All Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCategories && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-divider z-[9999] max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/?category=${encodeURIComponent(category.name)}`}
                      className="flex items-center justify-between px-4 py-3 hover:bg-primary border-b border-divider last:border-b-0 transition-colors"
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="font-medium text-primary">
                        {category.name}
                      </div>
                      <div className="text-xs text-primary">
                        {category.count} items
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <Link
                href="/"
                className={`font-medium transition-colors ${
                  currentPage === "home"
                    ? "text-accent-primary"
                    : "text-primary hover:text-accent-secondary"
                }`}
                onClick={() => {
                  if (setSearchQuery) setSearchQuery("");
                }}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className={`font-medium transition-colors ${
                  currentPage === "shop"
                    ? "text-accent-primary"
                    : "text-primary hover:text-accent-secondary"
                }`}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors ${
                  currentPage === "about"
                    ? "text-accent-primary"
                    : "text-primary hover:text-accent-secondary"
                }`}
              >
                About
              </Link>
              <Link
                href="/support"
                className={`font-medium transition-colors ${
                  currentPage === "support"
                    ? "text-accent-primary"
                    : "text-primary hover:text-accent-secondary"
                }`}
              >
                Support
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors ${
                  currentPage === "contact"
                    ? "text-accent-primary"
                    : "text-primary hover:text-accent-secondary"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="md:ml-auto flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm text-primary mt-2 md:mt-0">
              <span className="flex items-center gap-1">
                <ShoppingCart className="w-4 h-4 text-accent-secondary" />
                Free shipping on orders over KES 5,000
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-accent-secondary" />
                Expert fitment support
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
