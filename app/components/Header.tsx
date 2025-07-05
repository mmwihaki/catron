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
        style={{ background: "#f73312", color: "white", padding: "15px 0" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593"
              alt="Catron Auto Parts"
              style={{ height: "40px" }}
            />
          </Link>

          {/* Search Bar */}
          <div
            style={{
              flex: 1,
              maxWidth: "500px",
              display: "flex",
              background: "white",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <input
              type="text"
              placeholder="Search for auto parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: "12px 16px",
                border: "none",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              style={{
                background: "#e63312",
                color: "white",
                border: "none",
                padding: "12px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
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

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/wishlist"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
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
            <Link
              href="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              <div style={{ position: "relative" }}>
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
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "#ff6b35",
                      color: "white",
                      borderRadius: "50%",
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontWeight: "600",
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
      <nav style={{ background: "#2c2c2c", color: "white", padding: "15px 0" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              style={{
                background: "#f73312",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
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
                  background: "white",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  borderRadius: "6px",
                  minWidth: "220px",
                  zIndex: 1000,
                  padding: "8px 0",
                  marginTop: "4px",
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
                      padding: "12px 20px",
                      color: "#333",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                    onClick={() => setShowCategoriesDropdown(false)}
                  >
                    <span>{category.name}</span>
                    <span style={{ color: "#666", fontSize: "12px" }}>
                      ({category.count})
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "25px" }}>
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
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
                fontWeight: "500",
              }}
            >
              Shop
            </Link>
            <Link
              href="/about"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
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
