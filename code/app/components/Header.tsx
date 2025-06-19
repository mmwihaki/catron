"use client";

import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top promotional banner */}
      <div className="top-banner">
        <div className="container">
          <div className="banner-content">
            <span className="promo-text">BLACK FRIDAY 50% Brator50</span>
            <div className="language-selector">
              <select>
                <option>EN</option>
                <option>ES</option>
                <option>FR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <h1>Brator</h1>
            </div>

            {/* Search bar */}
            <div className="search-container">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for car parts, accessories..."
                  className="search-input"
                />
                <button className="search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* User actions */}
            <div className="user-actions">
              <button className="action-btn wishlist-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="action-count">0</span>
              </button>

              <button className="action-btn cart-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 6H4m3 7v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="action-count">0</span>
              </button>

              <button className="btn btn-primary sign-in-btn">Sign In</button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navigation ${isMenuOpen ? "mobile-open" : ""}`}>
        <div className="container">
          <div className="nav-content">
            <div className="categories-dropdown">
              <button className="categories-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Categories
              </button>
            </div>

            <ul className="main-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/brands">Brands</a>
              </li>
              <li>
                <a href="/deals">Deals</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <div className="tracking-links">
              <a href="/track-order" className="track-order">
                Track Your Order
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
