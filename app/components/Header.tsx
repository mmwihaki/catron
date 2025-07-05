"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { categories } from "../data/products";

export default function Header() {
  const { state } = useCart();
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector(".categories-dropdown");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setShowCategoriesDropdown(false);
      }
    };

    if (showCategoriesDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategoriesDropdown]);

  return (
    <>
      {/* Top Header */}
      <header className="top-header">
        <div className="header-container">
          <Link href="/" className="logo-link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593"
              alt="Catron Auto Parts"
              className="logo"
            />
          </Link>

          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for auto parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <div className="header-actions">
            <Link href="/wishlist" className="header-action">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Wishlist</span>
            </Link>
            <Link href="/cart" className="header-action">
              <div className="cart-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {state.itemCount > 0 && (
                  <span className="cart-badge">{state.itemCount}</span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="categories-dropdown-wrapper">
            <button
              className="categories-button"
              onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              All Categories
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>

            {showCategoriesDropdown && (
              <div className="categories-dropdown">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={
                      category.slug === "all"
                        ? "/shop"
                        : `/category/${category.slug}`
                    }
                    className="category-link"
                    onClick={() => setShowCategoriesDropdown(false)}
                  >
                    <span>{category.name}</span>
                    <span className="category-count">({category.count})</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .top-header {
          background: #f73312;
          color: white;
          padding: 15px 0;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .logo-link {
          color: white;
          text-decoration: none;
          font-size: 24px;
          font-weight: 700;
        }

        .logo {
          height: 40px;
        }

        .search-container {
          flex: 1;
          max-width: 500px;
          display: flex;
          background: white;
          border-radius: 6px;
          overflow: hidden;
        }

        .search-input {
          flex: 1;
          padding: 12px 16px;
          border: none;
          outline: none;
          font-size: 14px;
        }

        .search-button {
          background: #e63312;
          color: white;
          border: none;
          padding: 12px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .search-button:hover {
          background: #d42f02;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .header-action {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          transition: opacity 0.3s ease;
        }

        .header-action:hover {
          opacity: 0.8;
        }

        .cart-icon {
          position: relative;
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #ff6b35;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
        }

        .navigation {
          background: #2c2c2c;
          color: white;
          padding: 15px 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .categories-dropdown-wrapper {
          position: relative;
        }

        .categories-button {
          background: #f73312;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .categories-button:hover {
          background: #e63312;
        }

        .categories-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 6px;
          min-width: 220px;
          z-index: 1000;
          padding: 8px 0;
          margin-top: 4px;
        }

        .category-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          color: #333;
          text-decoration: none;
          font-size: 14px;
          transition: background 0.3s ease;
        }

        .category-link:hover {
          background: #f8f9fa;
        }

        .category-count {
          color: #666;
          font-size: 12px;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #f73312;
        }

        @media (max-width: 768px) {
          .header-container {
            flex-wrap: wrap;
            gap: 15px;
          }

          .search-container {
            order: 3;
            flex-basis: 100%;
          }

          .nav-container {
            flex-direction: column;
            gap: 15px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
