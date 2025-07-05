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
    <div className="shop-page">
      <Header />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Auto Parts Shop</h1>
          <p>Find genuine OEM and aftermarket parts for your Nissan vehicle</p>

          {/* Search Bar */}
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for parts, brand, or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          <div className="shop-layout">
            {/* Sidebar Filters */}
            <aside
              className={`filters-sidebar ${showFilters ? "show-mobile" : ""}`}
            >
              <div className="filters-header">
                <h3>Filters</h3>
                <button className="clear-filters" onClick={clearFilters}>
                  Clear All
                </button>
              </div>

              {/* Categories Filter */}
              <div className="filter-group">
                <h4>Categories</h4>
                <div className="filter-options">
                  {categories.map((category) => (
                    <label key={category.slug} className="filter-option">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.slug}
                        onChange={() => setSelectedCategory(category.slug)}
                      />
                      <span>{category.name}</span>
                      <span className="count">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="filter-group">
                <h4>Brand</h4>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === ""}
                      onChange={() => setSelectedBrand("")}
                    />
                    <span>All Brands</span>
                  </label>
                  {brands.map((brand) => (
                    <label key={brand} className="filter-option">
                      <input
                        type="radio"
                        name="brand"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                      />
                      <span>{brand}</span>
                      <span className="count">
                        ({products.filter((p) => p.brand === brand).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Car Model Filter */}
              <div className="filter-group">
                <h4>Car Model</h4>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="model-select"
                >
                  <option value="">All Models</option>
                  {carModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0] || ""}
                    onChange={(e) =>
                      setPriceRange([
                        Number(e.target.value) || 0,
                        priceRange[1],
                      ])
                    }
                    className="price-input"
                  />
                  <span>-</span>
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
                    className="price-input"
                  />
                </div>
                <div className="price-range-display">
                  KES {priceRange[0].toLocaleString()} - KES{" "}
                  {priceRange[1].toLocaleString()}
                </div>
              </div>
            </aside>

            {/* Products Area */}
            <main className="products-area">
              {/* Toolbar */}
              <div className="products-toolbar">
                <div className="toolbar-left">
                  <button
                    className="mobile-filters-toggle"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="4" y1="21" x2="4" y2="14"></line>
                      <line x1="4" y1="10" x2="4" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12" y2="3"></line>
                      <line x1="20" y1="21" x2="20" y2="16"></line>
                      <line x1="20" y1="12" x2="20" y2="3"></line>
                      <line x1="1" y1="14" x2="7" y2="14"></line>
                      <line x1="9" y1="8" x2="15" y2="8"></line>
                      <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                    Filters
                  </button>
                  <span className="results-count">
                    {filteredProducts.length} products found
                  </span>
                </div>
                <div className="toolbar-right">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
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
                <div className="products-grid">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <div className="no-products-icon">
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
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or search terms</p>
                  <button onClick={clearFilters} className="clear-filters-btn">
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Pagination would go here */}
              {sortedProducts.length > 12 && (
                <div className="pagination">
                  <button className="page-btn">Previous</button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">Next</button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shop-page {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-header {
          background: linear-gradient(135deg, #f73312 0%, #e63312 100%);
          color: white;
          padding: 60px 0;
          text-align: center;
        }

        .page-header h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .page-header p {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .search-section {
          max-width: 600px;
          margin: 0 auto;
        }

        .search-container {
          display: flex;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .search-input {
          flex: 1;
          padding: 16px 20px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .search-btn {
          background: #e63312;
          color: white;
          border: none;
          padding: 16px 20px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .search-btn:hover {
          background: #d42f02;
        }

        .main-content {
          padding: 40px 0;
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
        }

        .filters-sidebar {
          background: white;
          border-radius: 12px;
          padding: 24px;
          height: fit-content;
          position: sticky;
          top: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .filters-header h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .clear-filters {
          background: none;
          border: none;
          color: #f73312;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .clear-filters:hover {
          text-decoration: underline;
        }

        .filter-group {
          margin-bottom: 32px;
        }

        .filter-group h4 {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 16px;
        }

        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .filter-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .filter-option input {
          margin: 0;
        }

        .filter-option .count {
          margin-left: auto;
          color: #6b7280;
          font-size: 12px;
        }

        .model-select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
        }

        .price-inputs {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .price-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
        }

        .price-range-display {
          font-size: 14px;
          color: #6b7280;
          text-align: center;
        }

        .products-area {
          min-height: 500px;
        }

        .products-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .toolbar-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .mobile-filters-toggle {
          display: none;
          background: #f73312;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .results-count {
          font-size: 14px;
          color: #6b7280;
        }

        .sort-select {
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .no-products {
          text-align: center;
          padding: 80px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .no-products-icon {
          color: #d1d5db;
          margin-bottom: 24px;
        }

        .no-products h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .no-products p {
          color: #6b7280;
          margin-bottom: 32px;
        }

        .clear-filters-btn {
          background: #f73312;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .clear-filters-btn:hover {
          background: #e63312;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .page-btn {
          background: white;
          border: 1px solid #d1d5db;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        .page-btn.active {
          background: #f73312;
          color: white;
          border-color: #f73312;
        }

        .page-btn:hover:not(.active) {
          background: #f9fafb;
        }

        @media (max-width: 768px) {
          .shop-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .filters-sidebar {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            background: white;
            padding: 20px;
            overflow-y: auto;
          }

          .filters-sidebar.show-mobile {
            display: block;
          }

          .mobile-filters-toggle {
            display: flex;
          }

          .products-toolbar {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }

          .toolbar-left,
          .toolbar-right {
            justify-content: space-between;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
          }

          .page-header h1 {
            font-size: 32px;
          }

          .search-container {
            margin: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}
