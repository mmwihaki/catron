"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "../data/products";

interface SearchBarProps {
  onSearchResults?: (results: any[]) => void;
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Advanced search with SKU, brand, model, and product name matching
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);

    // Simulate API delay for realistic UX
    setTimeout(() => {
      const results = products
        .filter((product) => {
          const searchTerm = query.toLowerCase();
          return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.sku.toLowerCase().includes(searchTerm) ||
            product.carModel.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
          );
        })
        .slice(0, 8); // Limit to 8 results for dropdown

      setSearchResults(results);
      setShowDropdown(results.length > 0);
      setIsLoading(false);

      if (onSearchResults) {
        onSearchResults(results);
      }
    }, 150);
  };

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span
          key={index}
          style={{
            background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
            color: "white",
            padding: "2px 4px",
            borderRadius: "3px",
            fontWeight: "600",
          }}
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div
      ref={searchRef}
      style={{ position: "relative", width: "100%", maxWidth: "600px" }}
    >
      <div
        style={{
          display: "flex",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid rgba(176, 176, 176, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ position: "relative", flex: 1 }}>
          <input
            type="text"
            placeholder="Search parts by SKU, brand, or model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setShowDropdown(true)}
            style={{
              width: "100%",
              padding: "16px 20px 16px 50px",
              border: "none",
              outline: "none",
              fontSize: "15px",
              fontFamily: "'Open Sans', sans-serif",
              background: "transparent",
              color: "#1E1E1E",
            }}
          />

          {/* Search Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B0B0B0"
            strokeWidth="2"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>

          {/* Loading Indicator */}
          {isLoading && (
            <div
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "20px",
                height: "20px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #E5302C",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            </div>
          )}
        </div>

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

      {/* Search Dropdown */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
            border: "1px solid rgba(176, 176, 176, 0.3)",
            borderRadius: "12px",
            marginTop: "8px",
            maxHeight: "400px",
            overflowY: "auto",
            zIndex: 1000,
            boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
          }}
        >
          {searchResults.length > 0 ? (
            <>
              <div
                style={{
                  padding: "16px 20px 8px",
                  borderBottom: "1px solid rgba(176, 176, 176, 0.1)",
                  fontSize: "12px",
                  fontFamily: "'Titillium Web', sans-serif",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "#B0B0B0",
                }}
              >
                {searchResults.length} Results Found
              </div>

              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => setShowDropdown(false)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "16px 20px",
                      borderBottom: "1px solid rgba(176, 176, 176, 0.1)",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(229, 48, 44, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginRight: "16px",
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#FFFFFF",
                          marginBottom: "4px",
                        }}
                      >
                        {highlightMatch(product.name, searchQuery)}
                      </div>

                      <div
                        style={{
                          fontSize: "12px",
                          color: "#B0B0B0",
                          marginBottom: "2px",
                        }}
                      >
                        <span style={{ color: "#E5302C", fontWeight: "600" }}>
                          {highlightMatch(product.brand, searchQuery)}
                        </span>
                        {" • "}
                        SKU: {highlightMatch(product.sku, searchQuery)}
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "#B0B0B0",
                        }}
                      >
                        Fits: {highlightMatch(product.carModel, searchQuery)}
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Titillium Web', sans-serif",
                          fontWeight: "700",
                          fontSize: "16px",
                          color: "#FFC107",
                        }}
                      >
                        KES {product.price.toLocaleString()}
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: product.stock > 0 ? "#28A745" : "#DC3545",
                          fontWeight: "600",
                        }}
                      >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              <div
                style={{
                  padding: "16px 20px",
                  textAlign: "center",
                }}
              >
                <Link
                  href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    background:
                      "linear-gradient(135deg, #007BFF 0%, #0056B3 100%)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                  onClick={() => setShowDropdown(false)}
                >
                  View All Results
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <div
              style={{
                padding: "40px 20px",
                textAlign: "center",
                color: "#B0B0B0",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                style={{ marginBottom: "16px", opacity: 0.5 }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
              <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                No results found
              </div>
              <div style={{ fontSize: "12px", opacity: 0.7 }}>
                Try searching by SKU, brand, or model
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: translateY(-50%) rotate(0deg);
          }
          100% {
            transform: translateY(-50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
