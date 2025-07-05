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
      <header
        style={{
          background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
          color: "white",
          padding: "20px 0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          borderBottom: "1px solid rgba(176, 176, 176, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "28px",
              fontWeight: "800",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(229, 48, 44, 0.3)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span>CATRON</span>
          </Link>

          {/* Search Bar */}
          <div
            style={{
              flex: 1,
              maxWidth: "600px",
              display: "flex",
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(176, 176, 176, 0.3)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              placeholder="Search parts by SKU, brand, or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: "16px 20px",
                border: "none",
                outline: "none",
                fontSize: "15px",
                fontFamily: "'Open Sans', sans-serif",
                background: "transparent",
                color: "#1E1E1E",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                color: "white",
                border: "none",
                padding: "16px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                transition: "all 0.2s ease",
                minWidth: "60px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link
              href="/wishlist"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#B0B0B0",
                textDecoration: "none",
                fontSize: "14px",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "500",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Wishlist</span>
            </Link>
            <Link
              href="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "600",
                padding: "12px 16px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                boxShadow: "0 4px 12px rgba(229, 48, 44, 0.3)",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ position: "relative" }}>
                <svg
                  width="22"
                  height="22"
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
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      background: "#FFC107",
                      color: "#1E1E1E",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: "700",
                      fontFamily: "'Titillium Web', sans-serif",
                      border: "2px solid #1E1E1E",
                    }}
                  >
                    {state.itemCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        style={{
          background: "linear-gradient(135deg, #3A3A3A 0%, #1E1E1E 100%)",
          color: "white",
          padding: "16px 0",
          borderBottom: "1px solid rgba(176, 176, 176, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                color: "white",
                border: "none",
                padding: "14px 24px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 4px 12px rgba(229, 48, 44, 0.3)",
                transition: "all 0.2s ease",
              }}
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
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background:
                    "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                  borderRadius: "12px",
                  minWidth: "280px",
                  zIndex: 1000,
                  padding: "16px 0",
                  marginTop: "8px",
                  border: "1px solid rgba(176, 176, 176, 0.2)",
                }}
              >
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={
                      category.slug === "all"
                        ? "/shop"
                        : `/category/${category.slug}`
                    }
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 24px",
                      color: "#B0B0B0",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => setShowCategoriesDropdown(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(229, 48, 44, 0.1)";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#B0B0B0";
                    }}
                  >
                    <span>{category.name}</span>
                    <span
                      style={{
                        color: "#FFC107",
                        fontSize: "11px",
                        fontFamily: "'Titillium Web', sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      ({category.count})
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "32px" }}>
            <Link
              href="/"
              style={{
                color: "#B0B0B0",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              Home
            </Link>
            <Link
              href="/shop"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "8px 0",
                borderBottom: "2px solid #E5302C",
                transition: "all 0.2s ease",
              }}
            >
              Shop
            </Link>
            <Link
              href="/about"
              style={{
                color: "#B0B0B0",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{
                color: "#B0B0B0",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Montserrat', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "8px 0",
                borderBottom: "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
