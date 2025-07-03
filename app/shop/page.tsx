"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ShopPage() {
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(3);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");
  const [activeTab, setActiveTab] = useState("top10");

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

  const categories = [
    "Oil Filters",
    "Air Filters",
    "Headlight Bulbs",
    "Spark Plugs",
    "Brake Pads",
    "Suspension",
    "Engine Parts",
    "Exhaust Systems",
    "Tires & Wheels",
    "Electronics",
    "Body Parts",
    "Transmission",
  ];

  const nissanMakes = ["Nissan"];
  const nissanModels = [
    "Note",
    "Sentra",
    "Sylphy",
    "Serena",
    "AdVan",
    "Wingroad",
    "NV200 Vanette",
    "Kicks",
    "X-Trail",
    "March",
    "Tiida",
    "TiidaLatio",
    "Latio",
    "Bluebird Sylphy",
    "Dualis",
    "Teana",
    "NV350 Caravan",
    "Elgrand",
    "Murano",
    "Lafesta",
    "Juke",
    "Cube",
  ];
  const vehicleYears = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ];
  const engineTypes = [
    "1198cc HR12DDR",
    "1198cc HR12DE",
    "1597cc HR16DE",
    "1498cc HR15DE",
    "1797cc MRA8DE",
    "1997cc MR20DE",
    "1800cc MR18DE",
    "2488cc QR25DE",
    "2495cc VQ25DE",
    "3498cc VQ35DE",
  ];
  const brands = ["Catron", "KAVO", "OSRAM", "NGK", "NISMO", "Mugen", "HKS"];

  const essentialProducts = [
    {
      id: 1,
      name: "KAVO Cabin Filter",
      category: "Air Filters",
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 2500,
      originalPrice: 3000,
      rating: 4.5,
      reviews: 12,
      link: "#",
    },
    {
      id: 2,
      name: "KAVO Cabin Filter Premium",
      category: "Air Filters",
      image:
        "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 3200,
      originalPrice: 3800,
      rating: 4.7,
      reviews: 8,
      link: "#",
    },
    {
      id: 3,
      name: "OSRAM Night Breaker 200 H4",
      category: "Headlight Bulbs",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 4500,
      rating: 4.9,
      reviews: 15,
      link: "#",
    },
    {
      id: 4,
      name: "NGK Spark Plug DIG-S",
      category: "Spark Plugs",
      image:
        "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 1800,
      rating: 4.6,
      reviews: 20,
      link: "#",
    },
  ];

  const airFilters = [
    {
      id: 101,
      name: "KAVO Cabin Filter",
      category: "Air Filters",
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 2500,
      originalPrice: 3000,
      rating: 4.5,
      reviews: 12,
      link: "#",
    },
    {
      id: 102,
      name: "Premium Air Filter Element",
      category: "Air Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Air+Filter",
      price: 1800,
      originalPrice: 2200,
      rating: 4.3,
      reviews: 8,
      link: "#",
    },
    {
      id: 103,
      name: "High Flow Air Filter",
      category: "Air Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Air+Filter",
      price: 3500,
      rating: 4.6,
      reviews: 15,
      link: "#",
    },
    {
      id: 104,
      name: "OEM Replacement Air Filter",
      category: "Air Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Air+Filter",
      price: 1500,
      originalPrice: 1800,
      rating: 4.2,
      reviews: 20,
      link: "#",
    },
  ];

  const oilFilters = [
    {
      id: 201,
      name: "Premium Oil Filter",
      category: "Oil Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Oil+Filter",
      price: 1200,
      originalPrice: 1500,
      rating: 4.7,
      reviews: 25,
      link: "#",
    },
    {
      id: 202,
      name: "High Performance Oil Filter",
      category: "Oil Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Oil+Filter",
      price: 1800,
      rating: 4.5,
      reviews: 18,
      link: "#",
    },
    {
      id: 203,
      name: "OEM Oil Filter Element",
      category: "Oil Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Oil+Filter",
      price: 900,
      originalPrice: 1100,
      rating: 4.3,
      reviews: 30,
      link: "#",
    },
    {
      id: 204,
      name: "Extended Life Oil Filter",
      category: "Oil Filters",
      image:
        "https://via.placeholder.com/300x200/e0e0e0/666666?text=Oil+Filter",
      price: 2200,
      rating: 4.8,
      reviews: 12,
      link: "#",
    },
  ];

  const allProducts = [
    ...essentialProducts,
    {
      id: 5,
      name: "Performance Brake Pads",
      category: "Brake Pads",
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 8500,
      originalPrice: 10000,
      rating: 4.7,
      reviews: 12,
      link: "#",
    },
    {
      id: 6,
      name: "High Performance Oil Filter",
      category: "Oil Filters",
      image:
        "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 1200,
      rating: 4.4,
      reviews: 8,
      link: "#",
    },
    {
      id: 7,
      name: "LED Headlight Conversion Kit",
      category: "Headlight Bulbs",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 12000,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 5,
      link: "#",
    },
    {
      id: 8,
      name: "Performance Exhaust System",
      category: "Exhaust Systems",
      image:
        "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 25000,
      rating: 4.2,
      reviews: 28,
      link: "#",
    },
  ];

  const getDisplayedProducts = () => {
    switch (activeTab) {
      case "airfilters":
        return airFilters;
      case "oilfilters":
        return oilFilters;
      default:
        return essentialProducts;
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push("★");
      } else if (i === fullStars && hasHalfStar) {
        stars.push("☆");
      } else {
        stars.push("☆");
      }
    }
    return stars.join("");
  };

  return (
    <div className="homepage">
      {/* Black Friday Banner */}
      <div className="promo-banner">
        <div className="promo-content">
          <span className="promo-text">
            <span className="black-friday">SPECIAL OFFER</span> | Premium Auto
            Parts
            <span className="discount">Quality Guaranteed</span> | Free shipping
            on orders over <span className="promo-code">KES 5,000</span>
          </span>
          <div className="language-selector">
            Language: <span className="current-lang">EN</span> ▼
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593?format=webp&width=200"
              alt="Catron Auto Parts"
              className="logo-image"
            />
          </div>

          <div className="search-section">
            <div className="search-bar">
              <select
                className="search-category"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search for products..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button">
                <svg
                  width="16"
                  height="16"
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

          <div className="header-actions">
            <div className="action-item">
              <span className="action-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </span>
              <span className="action-text">Wishlist</span>
            </div>
            <div className="action-item">
              <span className="action-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </span>
              <span className="action-text">Cart ({cartItems})</span>
            </div>
            <div className="action-item">
              <span className="action-icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="action-text">Sign In</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="main-navigation">
        <div className="nav-container">
          <div className="categories-dropdown" style={{ position: "relative" }}>
            <button
              className="categories-btn"
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
            </button>
            {showCategoriesDropdown && (
              <div className="categories-dropdown-menu">
                <Link href="/category/auto-parts">
                  <div className="dropdown-item">Auto Parts</div>
                </Link>
                <Link href="/category/oil-filter">
                  <div className="dropdown-item">Oil Filters</div>
                </Link>
                <Link href="/category/air-filters">
                  <div className="dropdown-item">Air Filters</div>
                </Link>
                <Link href="/category/headlight-bulbs">
                  <div className="dropdown-item">Headlight Bulbs</div>
                </Link>
                <Link href="/category/spark-plugs">
                  <div className="dropdown-item">Spark Plugs</div>
                </Link>
                <Link href="/category/brake-pads">
                  <div className="dropdown-item">Brake Pads</div>
                </Link>
              </div>
            )}
          </div>

          <div className="nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/shop" className="nav-link active">
              Shop
            </a>
            <a href="/blog" className="nav-link">
              Blog
            </a>
            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </div>

          <div className="nav-actions">
            <a href="#order-tracking" className="nav-action">
              Order Tracking
            </a>
            <a href="#compare" className="nav-action">
              Compare (0)
            </a>
          </div>
        </div>
      </nav>

      {/* Shop Content */}
      <main className="shop-main">
        <div className="shop-container">
          <div className="shop-layout">
            {/* Sidebar */}
            <aside className="shop-sidebar">
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="filter-list">
                  {categories.map((category, index) => (
                    <label key={index} className="filter-item">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              category,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter((c) => c !== category),
                            );
                          }
                        }}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Make</h3>
                <div className="filter-list">
                  {nissanMakes.map((make) => (
                    <label key={make} className="filter-item">
                      <input type="checkbox" />
                      <span>{make}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Model</h3>
                <div className="filter-list scrollable">
                  {nissanModels.slice(0, 8).map((model) => (
                    <label key={model} className="filter-item">
                      <input type="checkbox" />
                      <span>{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Year</h3>
                <div className="filter-list">
                  {vehicleYears.slice(0, 6).map((year) => (
                    <label key={year} className="filter-item">
                      <input type="checkbox" />
                      <span>{year}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Engine</h3>
                <div className="filter-list">
                  {engineTypes.slice(0, 5).map((engine) => (
                    <label key={engine} className="filter-item">
                      <input type="checkbox" />
                      <span>{engine}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Price</h3>
                <div className="price-filter">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="price-slider"
                  />
                  <div className="price-display">
                    KES 0 - KES {priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <h3>Brand</h3>
                <div className="filter-list">
                  {brands.map((brand) => (
                    <label key={brand} className="filter-item">
                      <input type="checkbox" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="shop-content">
              {/* Best Sellers Section */}
              <section className="best-sellers-section">
                <div className="best-sellers-container">
                  <div className="best-sellers-header">
                    <div className="header-left">
                      <h2 className="best-sellers-title">Best Sellers</h2>
                    </div>
                    <div className="header-right">
                      <div className="category-tabs">
                        <button
                          className={`tab-link ${activeTab === "top10" ? "active" : ""}`}
                          onClick={() => setActiveTab("top10")}
                        >
                          Top 10
                        </button>
                        <button
                          className={`tab-link ${activeTab === "airfilters" ? "active" : ""}`}
                          onClick={() => setActiveTab("airfilters")}
                        >
                          Top Air Filters
                        </button>
                        <button
                          className={`tab-link ${activeTab === "oilfilters" ? "active" : ""}`}
                          onClick={() => setActiveTab("oilfilters")}
                        >
                          Top Oil Filters
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="products-grid-container shop-grid">
                    {getDisplayedProducts().map((product) => (
                      <div
                        key={`bestseller-${product.id}`}
                        className="product-card"
                      >
                        <div className="product-card-inner">
                          <div className="product-discount-badge">
                            {Math.round(
                              (((product.originalPrice || product.price + 500) -
                                product.price) /
                                (product.originalPrice ||
                                  product.price + 500)) *
                                100,
                            )}
                            % OFF
                          </div>

                          <div className="product-image-container">
                            <a
                              href={product.link}
                              className="product-image-link"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                                loading="lazy"
                                width="180"
                                height="180"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <div className="product-category">
                              <a
                                href={`#category-${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                                className="category-link"
                              >
                                {product.category}
                              </a>
                            </div>

                            <div className="product-name">
                              <h5>
                                <a
                                  href={product.link}
                                  className="product-name-link"
                                >
                                  {product.name}
                                </a>
                              </h5>
                            </div>

                            <div className="product-rating">
                              <div className="rating-stars">
                                <div
                                  className="stars"
                                  title={`Rated ${product.rating} out of 5`}
                                >
                                  <span className="star-display">
                                    {renderStars(product.rating)}
                                  </span>
                                </div>
                              </div>
                              <div className="reviews-count">
                                <p>{product.reviews} Reviews</p>
                              </div>
                            </div>

                            <div className="product-price">
                              <p className="price-container">
                                {product.originalPrice && (
                                  <del className="original-price">
                                    <span className="currency">KES </span>
                                    <span>
                                      {product.originalPrice.toLocaleString()}
                                    </span>
                                  </del>
                                )}
                                <span
                                  className={
                                    product.originalPrice
                                      ? "sale-price"
                                      : "regular-price"
                                  }
                                >
                                  <span className="currency">KES </span>
                                  <span>{product.price.toLocaleString()}</span>
                                </span>
                              </p>
                            </div>

                            <div className="product-actions">
                              <a
                                href={product.link}
                                className="add-to-cart-btn"
                              >
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* All Products Section */}
              <section className="all-products-section">
                <div className="all-products-header">
                  <h2>All Products</h2>
                  <div className="sort-options">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="name">Sort by Name</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Sort by Rating</option>
                    </select>
                  </div>
                </div>

                <div className="products-grid-container shop-grid">
                  {allProducts.map((product) => (
                    <div key={`all-${product.id}`} className="product-card">
                      <div className="product-card-inner">
                        {product.originalPrice && (
                          <div className="product-discount-badge">
                            {Math.round(
                              ((product.originalPrice - product.price) /
                                product.originalPrice) *
                                100,
                            )}
                            % OFF
                          </div>
                        )}

                        <div className="product-image-container">
                          <a href={product.link} className="product-image-link">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="product-image"
                              loading="lazy"
                              width="180"
                              height="180"
                            />
                          </a>
                        </div>

                        <div className="product-info">
                          <div className="product-category">
                            <a
                              href={`#category-${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                              className="category-link"
                            >
                              {product.category}
                            </a>
                          </div>

                          <div className="product-name">
                            <h5>
                              <a
                                href={product.link}
                                className="product-name-link"
                              >
                                {product.name}
                              </a>
                            </h5>
                          </div>

                          <div className="product-rating">
                            <div className="rating-stars">
                              <div
                                className="stars"
                                title={`Rated ${product.rating} out of 5`}
                              >
                                <span className="star-display">
                                  {renderStars(product.rating)}
                                </span>
                              </div>
                            </div>
                            <div className="reviews-count">
                              <p>{product.reviews} Reviews</p>
                            </div>
                          </div>

                          <div className="product-price">
                            <p className="price-container">
                              {product.originalPrice && (
                                <del className="original-price">
                                  <span className="currency">KES </span>
                                  <span>
                                    {product.originalPrice.toLocaleString()}
                                  </span>
                                </del>
                              )}
                              <span
                                className={
                                  product.originalPrice
                                    ? "sale-price"
                                    : "regular-price"
                                }
                              >
                                <span className="currency">KES </span>
                                <span>{product.price.toLocaleString()}</span>
                              </span>
                            </p>
                          </div>

                          <div className="product-actions">
                            <a href={product.link} className="add-to-cart-btn">
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                  <button className="page-btn" disabled>
                    ‹
                  </button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">›</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand-section">
                <div className="footer-brand-content">
                  <a href="/" className="footer-logo-link">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593?format=webp&width=200"
                      alt="Catron Auto Parts"
                      className="footer-logo"
                    />
                  </a>
                  <div className="footer-brand-description">
                    <h6 className="footer-tagline">
                      #1 Kenya's biggest online marketplace for car spare OEM &
                      aftermarket parts
                    </h6>
                    <p className="footer-disclaimer">
                      All manufacturer names, symbols, and descriptions, used in
                      our images and text are used solely for identification
                      purposes only. It is neither inferred nor implied that any
                      item sold by Catron is a product authorized by or in any
                      way connected with any vehicle manufacturers displayed on
                      this page.
                    </p>
                    <div className="footer-social">
                      <a href="https://twitter.com/" className="social-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a href="https://facebook.com/" className="social-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="https://instagram.com/" className="social-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="https://youtube.com/" className="social-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="footer-column">
                  <h6 className="footer-column-title">Catron's Catalog</h6>
                  <ul className="footer-links-list">
                    <li>
                      <a href="#oil-filters">Oil Filters</a>
                    </li>
                    <li>
                      <a href="#air-filters">Air Filters</a>
                    </li>
                    <li>
                      <a href="#headlight-bulbs">Headlight Bulbs</a>
                    </li>
                    <li>
                      <a href="#spark-plugs">Spark Plugs</a>
                    </li>
                    <li>
                      <a href="#brake-pads">Brake Pads</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="footer-column">
                  <h6 className="footer-column-title">Information</h6>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/about">About Catron</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/shipping">Shipping Info</a>
                    </li>
                    <li>
                      <a href="/returns">Returns</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="footer-column">
                  <h6 className="footer-column-title">Customer Service</h6>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/help">Help Center</a>
                    </li>
                    <li>
                      <a href="/track-order">Track Your Order</a>
                    </li>
                    <li>
                      <a href="/warranty">Warranty</a>
                    </li>
                    <li>
                      <a href="/installation">Installation Services</a>
                    </li>
                    <li>
                      <a href="/support">Technical Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Use all styles from the homepage */
        .homepage {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          line-height: 1.5;
          color: #333;
        }

        /* Promo Banner */
        .promo-banner {
          background: #333;
          color: white;
          padding: 8px 0;
          font-size: 14px;
        }

        .promo-content {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 12px;
        }

        .black-friday {
          background: rgb(247, 51, 18);
          padding: 2px 8px;
          border-radius: 3px;
          font-weight: bold;
        }

        .discount {
          color: rgb(247, 51, 18);
          font-weight: bold;
        }

        .promo-code {
          color: rgb(247, 51, 18);
          font-weight: bold;
        }

        .language-selector {
          font-size: 12px;
        }

        .current-lang {
          font-weight: bold;
        }

        /* Header Styles */
        .main-header {
          background: white;
          border-bottom: 1px solid #eee;
          padding: 15px 0;
        }

        .header-container {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 0 12px;
        }

        .logo-image {
          height: 45px;
          width: auto;
        }

        .search-section {
          flex: 1;
          max-width: 600px;
        }

        .search-bar {
          display: flex;
          border: 2px solid rgb(247, 51, 18);
          border-radius: 6px;
          overflow: hidden;
          background: white;
        }

        .search-category {
          background: #f8f9fa;
          border: none;
          padding: 12px 15px;
          min-width: 140px;
          font-size: 14px;
        }

        .search-input {
          flex: 1;
          border: none;
          padding: 12px 15px;
          outline: none;
          font-size: 14px;
        }

        .search-button {
          background: rgb(247, 51, 18);
          border: none;
          padding: 12px 20px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-actions {
          display: flex;
          gap: 25px;
        }

        .action-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
        }

        .action-icon {
          color: #666;
        }

        /* Navigation */
        .main-navigation {
          background: #f8f9fa;
          border-bottom: 1px solid #ddd;
          padding: 12px 0;
        }

        .nav-container {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 0 12px;
        }

        .categories-btn {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .categories-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          min-width: 200px;
        }

        .dropdown-item {
          display: block;
          padding: 10px 15px;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #eee;
        }

        .dropdown-item:hover {
          background: #f8f9fa;
          color: rgb(247, 51, 18);
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 0;
        }

        .nav-link.active,
        .nav-link:hover {
          color: rgb(247, 51, 18);
        }

        .nav-actions {
          margin-left: auto;
          display: flex;
          gap: 20px;
        }

        .nav-action {
          color: #666;
          text-decoration: none;
          font-size: 14px;
        }

        .nav-action:hover {
          color: rgb(247, 51, 18);
        }

        /* Shop Layout */
        .shop-main {
          padding: 30px 0;
        }

        .shop-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 30px;
        }

        /* Sidebar */
        .shop-sidebar {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          height: fit-content;
        }

        .filter-section {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }

        .filter-section:last-child {
          border-bottom: none;
        }

        .filter-section h3 {
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .filter-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .filter-list.scrollable {
          max-height: 150px;
        }

        .filter-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
          cursor: pointer;
        }

        .filter-item input {
          margin: 0;
        }

        .price-filter {
          padding: 10px 0;
        }

        .price-slider {
          width: 100%;
          margin-bottom: 10px;
        }

        .price-display {
          text-align: center;
          font-weight: 600;
          color: #333;
        }

        /* Shop Content */
        .shop-content {
          background: white;
        }

        /* Best Sellers Section */
        .best-sellers-section {
          margin-bottom: 40px;
        }

        .best-sellers-container {
          position: relative;
        }

        .best-sellers-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .best-sellers-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          color: #333;
        }

        .category-tabs {
          display: flex;
          gap: 15px;
        }

        .tab-link {
          background: transparent;
          border: 1px solid #ddd;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          color: #666;
        }

        .tab-link.active {
          background: rgb(247, 51, 18);
          color: white;
          border-color: rgb(247, 51, 18);
        }

        /* Products Grid - Smaller for Shop */
        .products-grid-container.shop-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .product-card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          position: relative;
          background: white;
          height: 350px;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .product-card-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .product-discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgb(247, 51, 18);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: bold;
          z-index: 1;
        }

        .product-image-container {
          position: relative;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 140px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-info {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-category {
          margin-bottom: 8px;
        }

        .category-link {
          color: rgb(247, 51, 18);
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
        }

        .product-name {
          margin-bottom: 10px;
        }

        .product-name h5 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          height: 40px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .product-name-link {
          color: #333;
          text-decoration: none;
        }

        .product-name-link:hover {
          color: rgb(247, 51, 18);
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .rating-stars {
          display: flex;
          align-items: center;
        }

        .star-display {
          color: #ffc107;
          font-size: 14px;
        }

        .reviews-count {
          margin: 0;
        }

        .reviews-count p {
          margin: 0;
          font-size: 12px;
          color: #666;
        }

        .product-price {
          margin-bottom: 15px;
        }

        .price-container {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .original-price {
          color: #999;
          font-size: 12px;
        }

        .sale-price,
        .regular-price {
          color: rgb(247, 51, 18);
          font-weight: 600;
          font-size: 16px;
        }

        .currency {
          font-size: 12px;
        }

        .product-actions {
          margin-top: auto;
        }

        .add-to-cart-btn {
          width: 100%;
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 10px;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          display: block;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .add-to-cart-btn:hover {
          background: rgb(220, 45, 16);
        }

        /* All Products Section */
        .all-products-section {
          margin-top: 40px;
        }

        .all-products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .all-products-header h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
          color: #333;
        }

        .sort-options select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: white;
          font-size: 14px;
        }

        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .page-btn {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: white;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
        }

        .page-btn.active {
          background: rgb(247, 51, 18);
          color: white;
          border-color: rgb(247, 51, 18);
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-btn:hover:not(:disabled):not(.active) {
          background: #f8f9fa;
        }

        /* Footer Styles */
        .footer {
          background: rgb(246, 247, 250);
          padding: 50px 0 30px;
          margin-top: 60px;
        }

        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .footer-main {
          display: flex;
          gap: 30px;
        }

        .footer-brand-section {
          flex: 2;
        }

        .footer-brand-content {
          padding-right: 30px;
        }

        .footer-logo {
          height: 45px;
          width: auto;
          margin-bottom: 20px;
        }

        .footer-tagline {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #333;
        }

        .footer-disclaimer {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer-social {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: rgb(247, 51, 18);
        }

        .footer-links-section {
          flex: 1;
        }

        .footer-column-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #333;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links-list li {
          margin-bottom: 8px;
        }

        .footer-links-list a {
          color: #666;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-links-list a:hover {
          color: rgb(247, 51, 18);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .shop-layout {
            grid-template-columns: 250px 1fr;
            gap: 20px;
          }

          .products-grid-container.shop-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            gap: 15px;
          }

          .search-section {
            order: 3;
            width: 100%;
            max-width: none;
          }

          .nav-container {
            flex-direction: column;
            gap: 15px;
          }

          .shop-layout {
            grid-template-columns: 1fr;
          }

          .shop-sidebar {
            order: 2;
          }

          .shop-content {
            order: 1;
          }

          .best-sellers-header {
            flex-direction: column;
            text-align: center;
          }

          .header-left {
            flex-direction: column;
            gap: 15px;
          }

          .category-tabs {
            flex-wrap: wrap;
            justify-content: center;
          }

          .products-grid-container.shop-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-main {
            flex-direction: column;
          }

          .footer-brand-content {
            padding-right: 0;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .products-grid-container.shop-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .promo-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
