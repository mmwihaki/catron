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
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="flex flex-between text-sm">
            <div className="flex gap-4">
              <div className="flex gap-1">
                <Phone size={16} />
                0742578910
              </div>
              <div className="flex gap-1">
                <Clock size={16} />
                Mon-Sat: 8AM-6PM
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <Globe size={16} />
                Kenya Wide Delivery
              </div>
              <div className="flex gap-1">
                <MapPin size={16} />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="flex flex-between">
            <Link href="/" className="logo">
              CATRON
              <div className="text-sm font-medium text-gray">Nissan Parts Specialist</div>
            </Link>

            <div className="flex-1" style={{maxWidth: '500px', margin: '0 2rem'}}>
              <form onSubmit={handleSearch} style={{position: 'relative'}}>
                <input
                  type="text"
                  placeholder="Search by part number, model, category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                  className="input search-input"
                />
                <button type="submit" className="search-btn">
                  <Search size={18} />
                </button>
              </form>
            </div>

            <div className="flex gap-3">
              <button className="flex flex-col text-center">
                <Heart size={20} />
                <span className="text-sm">Wishlist</span>
              </button>
              <button onClick={() => setIsCartOpen(true)} className="flex flex-col text-center cart-icon">
                <ShoppingCart size={20} />
                {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
                <span className="text-sm">Cart</span>
              </button>
              <button className="flex flex-col text-center">
                <User size={20} />
                <span className="text-sm">Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <div className="container">
          <div className="flex flex-between">
            <div className="flex gap-4">
              <form onSubmit={handleSearch} style={{position: 'relative'}}>
                <input
                  type="text"
                  placeholder="Search parts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                  className="input"
                  style={{width: '300px'}}
                />
                <button type="submit" className="search-btn">
                  <Search size={16} />
                </button>
              </form>

              <div ref={categoriesRef} style={{position: 'relative'}}>
                <button onClick={() => setShowCategories(!showCategories)} className="btn btn-secondary flex gap-2">
                  <Menu size={16} />
                  All Categories
                  <ChevronDown size={16} />
                </button>
                {showCategories && (
                  <div style={{position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.5rem', minWidth: '250px', zIndex: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}}>
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        onClick={() => setShowCategories(false)}
                        style={{display: 'block', padding: '0.75rem 1rem', textDecoration: 'none', color: '#374151', borderBottom: '1px solid #f3f4f6'}}
                      >
                        <div className="flex flex-between">
                          {category.name}
                          <span className="text-sm text-gray">{category.count} items</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <nav className="nav">
              <Link
                href="/"
                className="nav-link"
                onClick={() => {
                  if (setSearchQuery) setSearchQuery("");
                }}
              >
                Home
              </Link>
              <Link href="/shop" className="nav-link">Shop</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/support" className="nav-link">Support</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

            <div className="flex gap-4 text-sm">
              <div>Free shipping on orders over KES 5,000</div>
              <div>Expert fitment support</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
