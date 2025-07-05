"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products, categories, brands, carModels } from "../data/products";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortBy, setSortBy] = useState("name");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;

    const matchesBrand = !selectedBrand || product.brand === selectedBrand;

    const matchesModel =
      !selectedModel || product.carModel.includes(selectedModel);

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesModel &&
      matchesPrice
    );
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("");
    setSelectedModel("");
    setPriceRange([0, 20000]);
    setSearchQuery("");
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Header />

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
          gap: "40px",
        }}
      >
        {/* Sidebar Filters */}
        <aside
          style={{
            width: "280px",
            flexShrink: 0,
            background: "white",
            borderRadius: "8px",
            padding: "20px",
            height: "fit-content",
            position: "sticky",
            top: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Filters Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              paddingBottom: "15px",
              borderBottom: "1px solid #eee",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                margin: "0",
                color: "#333",
              }}
            >
              Filters
            </h3>
            <button
              onClick={clearFilters}
              style={{
                background: "none",
                border: "none",
                color: "#f73312",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Clear All
            </button>
          </div>

          {/* Categories Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Categories
            </h4>
            <div style={{ fontSize: "14px" }}>
              {categories.map((category) => (
                <label
                  key={category.slug}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.slug}
                    onChange={() => setSelectedCategory(category.slug)}
                    style={{ marginRight: "8px" }}
                  />
                  <span style={{ color: "#666" }}>{category.name}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    ({category.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Price
            </h4>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0] || ""}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value) || 0, priceRange[1]])
                }
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
              <span style={{ alignSelf: "center" }}>-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1] || ""}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    Number(e.target.value) || 20000,
                  ])
                }
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#666",
                textAlign: "center",
              }}
            >
              KES {priceRange[0].toLocaleString()} - KES{" "}
              {priceRange[1].toLocaleString()}
            </div>
          </div>

          {/* Brand Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Brand
            </h4>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === ""}
                onChange={() => setSelectedBrand("")}
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: "14px", color: "#666" }}>
                All Brands
              </span>
            </label>
            {brands.map((brand) => (
              <label
                key={brand}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === brand}
                  onChange={() => setSelectedBrand(brand)}
                  style={{ marginRight: "8px" }}
                />
                <span style={{ fontSize: "14px", color: "#666" }}>{brand}</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "12px",
                    color: "#999",
                  }}
                >
                  ({products.filter((p) => p.brand === brand).length})
                </span>
              </label>
            ))}
          </div>

          {/* Model Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Model
            </h4>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                background: "white",
              }}
            >
              <option value="">All Models</option>
              {carModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Main Products Area */}
        <main style={{ flex: 1 }}>
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#333",
                  margin: "0 0 4px 0",
                }}
              >
                Auto Parts Shop
              </h2>
              <span
                style={{
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                {sortedProducts.length} products found
              </span>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: "10px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  background: "white",
                }}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                background: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  color: "#ddd",
                  marginBottom: "24px",
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "12px",
                }}
              >
                No products found
              </h3>
              <p
                style={{
                  color: "#666",
                  marginBottom: "32px",
                }}
              >
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={clearFilters}
                style={{
                  background: "#f73312",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 12 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "white",
                  borderRadius: "4px",
                }}
              >
                Previous
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  border: "1px solid #f73312",
                  background: "#f73312",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                1
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "white",
                  borderRadius: "4px",
                }}
              >
                2
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  background: "white",
                  borderRadius: "4px",
                }}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
