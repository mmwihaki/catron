"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { categories } from "../data/products";
import SearchBar from "./SearchBar";

export default function Header() {
  const { state } = useCart();
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

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
          background: "#FFFFFF",
          color: "#212529",
          padding: "20px 0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderBottom: "1px solid #E9ECEF",
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
              color: "#212529",
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

          {/* Enhanced Search Bar */}
          <SearchBar />

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link
              href="/wishlist"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#6C757D",
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
          background: "#F8F9FA",
          color: "#212529",
          padding: "16px 0",
          borderBottom: "1px solid #E9ECEF",
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
                  background: "#FFFFFF",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  borderRadius: "12px",
                  minWidth: "280px",
                  zIndex: 1000,
                  padding: "16px 0",
                  marginTop: "8px",
                  border: "1px solid #E9ECEF",
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
                      color: "#6C757D",
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
                      e.currentTarget.style.color = "#E5302C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#6C757D";
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
                color: "#6C757D",
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
                color: "#212529",
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
                color: "#6C757D",
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
                color: "#6C757D",
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
