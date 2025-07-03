"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ShopPage() {
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("Nissan");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleEngine, setVehicleEngine] = useState("");
  const [cartItems, setCartItems] = useState(3);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedEngines, setSelectedEngines] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);

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
    { name: "All Parts", count: 1205 },
    { name: "Auto Care", count: 85 },
    { name: "Auto Electronics", count: 120 },
    { name: "Batteries", count: 45 },
    { name: "Body Parts", count: 200 },
    { name: "Brakes", count: 150 },
    { name: "Car Audio", count: 75 },
    { name: "Engine Components", count: 300 },
    { name: "Exhaust", count: 65 },
    { name: "Filters", count: 90 },
    { name: "Fluids & Chemicals", count: 55 },
    { name: "Fuel System", count: 80 },
    { name: "Lights & Lighting", count: 110 },
    { name: "Performance", count: 40 },
    { name: "Steering & Suspension", count: 180 },
    { name: "Tires & Rims", count: 95 },
    { name: "Tools & Equipment", count: 70 },
    { name: "Transmission", count: 85 },
  ];

  const bestSellerProducts = [
    {
      id: 1,
      name: "EXHAUST SYSTEM Dual sports exhaust with header",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      originalPrice: 12000,
      salePrice: 10500,
      rating: 4.5,
      reviews: 24,
      sale: true,
    },
    {
      id: 2,
      name: "STEERING Racing steering wheel with quick release",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop",
      originalPrice: 8500,
      salePrice: 7500,
      rating: 4.8,
      reviews: 18,
      sale: true,
    },
    {
      id: 3,
      name: "AIR FILTER Racing panel air filter - enhanced airflow",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop",
      originalPrice: 4500,
      salePrice: 4200,
      rating: 4.6,
      reviews: 32,
      sale: true,
    },
    {
      id: 4,
      name: "CAR TIRES High performance steering wheel cover",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      originalPrice: 3500,
      salePrice: 3200,
      rating: 4.3,
      reviews: 15,
      sale: true,
    },
  ];

  const allProducts = [
    ...bestSellerProducts,
    {
      id: 5,
      name: "STEERING Pro racing steering black",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop",
      originalPrice: 18000,
      salePrice: null,
      rating: 4.7,
      reviews: 12,
      sale: false,
    },
    {
      id: 6,
      name: "AIR FILTER Racing flat bottom steering wheel",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop",
      originalPrice: 14000,
      salePrice: null,
      rating: 4.4,
      reviews: 8,
      sale: false,
    },
    {
      id: 7,
      name: 'CARBON WHEELS 19" carbon performance wheels',
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      originalPrice: 85000,
      salePrice: 74000,
      rating: 4.9,
      reviews: 5,
      sale: true,
    },
    {
      id: 8,
      name: "EXHAUST SYSTEM JDM tuned exhaust with chrome tip",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      originalPrice: 9500,
      salePrice: null,
      rating: 4.2,
      reviews: 28,
      sale: false,
    },
    {
      id: 9,
      name: "AFTERGLOW Electric wheel chair with red chrome",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop",
      originalPrice: 32000,
      salePrice: null,
      rating: 4.6,
      reviews: 7,
      sale: false,
    },
    {
      id: 10,
      name: "STEERING Gear with boost shock with blue chrome",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop",
      originalPrice: 12000,
      salePrice: 10800,
      rating: 4.1,
      reviews: 14,
      sale: true,
    },
    {
      id: 11,
      name: "STAINLESS Stainless exhaust kit with blue chrome",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      originalPrice: 22000,
      salePrice: null,
      rating: 4.8,
      reviews: 11,
      sale: false,
    },
    {
      id: 12,
      name: "ALLOY WHEELS Ultra light racing alloy wheels",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      originalPrice: 65000,
      salePrice: null,
      rating: 4.5,
      reviews: 9,
      sale: false,
    },
  ];

  const brands = [
    "Catron",
    "NISMO",
    "Mugen",
    "Spoon",
    "HKS",
    "Greddy",
    "Tomei",
    "Blitz",
  ];
  const models = [
    "Note",
    "Sentra",
    "Altima",
    "X-Trail",
    "Serena",
    "March",
    "Juke",
    "Teana",
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="shop-page">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-content">
              <div className="contact-info">
                <span>📞 Call 254 728 800 826</span>
                <span>📧 Send us a Email</span>
                <span>📍 Visit Us</span>
              </div>
              <div className="header-actions">
                <Link href="/track-order">Track Order</Link>
                <Link href="/my-account">
                  <i className="fas fa-user"></i> My Account
                </Link>
                <Link href="/wishlist">
                  <i className="fas fa-heart"></i> Wishlist
                </Link>
                <Link href="/cart" className="cart-link">
                  <i className="fas fa-shopping-cart"></i> Cart ({cartItems})
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <div className="header-main-content">
              <Link href="/" className="logo">
                <span className="logo-icon">🔧</span>
                <span className="logo-text">Catron</span>
              </Link>

              <div className="search-section">
                <div className="search-bar">
                  <select className="search-category">
                    <option value="all">All Categories</option>
                    <option value="engine">Engine Parts</option>
                    <option value="brakes">Brake System</option>
                    <option value="suspension">Suspension</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search for parts, accessories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              <div className="header-actions">
                <Link href="/compare" className="compare-link">
                  <i className="fas fa-balance-scale"></i>
                  Compare
                </Link>
                <Link href="/cart" className="cart-link">
                  <i className="fas fa-shopping-cart"></i>
                  Cart ({cartItems})
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="navigation">
          <div className="container">
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="active">
                  Shop Now
                </Link>
              </li>
              <li>
                <Link href="/vehicle-guide">Vehicle Guide</Link>
              </li>
              <li>
                <Link href="/installation">Installation</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="nav-actions">
              <span>Track Order</span>
              <span>Call: 254 728 800 826</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="shop-layout">
            {/* Sidebar */}
            <aside className="sidebar">
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map((category, index) => (
                    <label key={index} className="category-item">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              category.name,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                (c) => c !== category.name,
                              ),
                            );
                          }
                        }}
                      />
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Diameter</h3>
                <div className="filter-options">
                  {['14"', '15"', '16"', '17"', '18"', '19"', '20"'].map(
                    (size) => (
                      <label key={size} className="filter-item">
                        <input type="checkbox" />
                        <span>{size}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="filter-section">
                <h3>Width</h3>
                <div className="filter-options">
                  {["185", "195", "205", "215", "225", "235", "245"].map(
                    (width) => (
                      <label key={width} className="filter-item">
                        <input type="checkbox" />
                        <span>{width}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="filter-section">
                <h3>Color</h3>
                <div className="color-options">
                  {[
                    { name: "Black", color: "#000000" },
                    { name: "Silver", color: "#C0C0C0" },
                    { name: "White", color: "#FFFFFF" },
                    { name: "Red", color: "#FF0000" },
                    { name: "Blue", color: "#0000FF" },
                  ].map((color) => (
                    <label key={color.name} className="color-item">
                      <input type="checkbox" />
                      <span
                        className="color-swatch"
                        style={{ backgroundColor: color.color }}
                      ></span>
                      <span>{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Price</h3>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="price-slider"
                  />
                  <div className="price-display">
                    Ksh {priceRange[0]} - Ksh {priceRange[1]}
                  </div>
                  <button className="btn-apply">Filter</button>
                </div>
              </div>

              <div className="filter-section">
                <h3>Brand</h3>
                <div className="filter-options">
                  {brands.map((brand) => (
                    <label key={brand} className="filter-item">
                      <input type="checkbox" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Model</h3>
                <div className="filter-options">
                  {models.map((model) => (
                    <label key={model} className="filter-item">
                      <input type="checkbox" />
                      <span>{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Rating</h3>
                <div className="rating-options">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="rating-item">
                      <input type="checkbox" />
                      <div className="rating-stars">
                        {renderStars(rating)}
                        <span>& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Area */}
            <div className="product-area">
              {/* Hero Section */}
              <div className="shop-hero">
                <h1>Shop</h1>
                <div className="hero-image">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=300&fit=crop"
                    alt="Car tires and wheels"
                  />
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="breadcrumb">
                <Link href="/">Home</Link> &gt; <span>Shop</span>
              </div>

              {/* Best Seller Section */}
              <section className="best-seller-section">
                <h2>Best Seller</h2>
                <div className="product-grid">
                  {bestSellerProducts.map((product) => (
                    <div key={product.id} className="product-card">
                      {product.sale && <span className="sale-badge">Sale</span>}
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                        <div className="product-actions">
                          <button className="quick-view">Quick View</button>
                          <button className="add-to-cart">Add to Cart</button>
                        </div>
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-rating">
                          {renderStars(product.rating)}
                          <span className="review-count">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="product-price">
                          {product.salePrice ? (
                            <>
                              <span className="sale-price">
                                Ksh {product.salePrice.toLocaleString()}
                              </span>
                              <span className="original-price">
                                Ksh {product.originalPrice.toLocaleString()}
                              </span>
                            </>
                          ) : (
                            <span className="price">
                              Ksh {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sort and View Options */}
              <div className="sort-section">
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
                <div className="view-options">
                  <span>Show</span>
                  <select defaultValue="12">
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>

              {/* All Products Grid */}
              <div className="all-products">
                <div className="product-grid">
                  {allProducts.slice(4).map((product) => (
                    <div key={product.id} className="product-card">
                      {product.sale && <span className="sale-badge">Sale</span>}
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                        <div className="product-actions">
                          <button className="quick-view">Quick View</button>
                          <button className="add-to-cart">Add to Cart</button>
                        </div>
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-rating">
                          {renderStars(product.rating)}
                          <span className="review-count">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="product-price">
                          {product.salePrice ? (
                            <>
                              <span className="sale-price">
                                Ksh {product.salePrice.toLocaleString()}
                              </span>
                              <span className="original-price">
                                Ksh {product.originalPrice.toLocaleString()}
                              </span>
                            </>
                          ) : (
                            <span className="price">
                              Ksh {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button className="page-btn" disabled>
                  «
                </button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">»</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>1800 500 1234 925</p>
              <p>Send us a Specialist</p>
              <p>Technical Info, Business, Information Contact</p>
              <div className="payment-methods">
                <img
                  src="https://via.placeholder.com/40x25/333/fff?text=VISA"
                  alt="Visa"
                />
                <img
                  src="https://via.placeholder.com/40x25/333/fff?text=MC"
                  alt="Mastercard"
                />
                <img
                  src="https://via.placeholder.com/40x25/333/fff?text=PP"
                  alt="PayPal"
                />
              </div>
            </div>

            <div className="footer-section">
              <h3>Customer Service</h3>
              <ul>
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/returns">Returns</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping Info</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Support</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Information</h3>
              <ul>
                <li>
                  <Link href="/about">About Catron</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
                <li>
                  <Link href="/affiliate">Affiliate Program</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Subscribe To Our Newsletter</h3>
              <p>
                Be the first to learn about our latest discounts and special
                offers
              </p>
              <div className="newsletter-signup">
                <input type="email" placeholder="Your email address" />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .shop-page {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Header Styles */
        .header-top {
          background: #f8f9fa;
          padding: 8px 0;
          font-size: 14px;
        }

        .header-top-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-info {
          display: flex;
          gap: 20px;
        }

        .header-actions {
          display: flex;
          gap: 20px;
        }

        .header-actions a {
          color: #333;
          text-decoration: none;
        }

        .header-main {
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }

        .header-main-content {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #333;
          font-size: 24px;
          font-weight: bold;
        }

        .logo-icon {
          color: rgb(247, 51, 18);
          font-size: 28px;
        }

        .search-section {
          flex: 1;
          max-width: 600px;
        }

        .search-bar {
          display: flex;
          border: 2px solid rgb(247, 51, 18);
          border-radius: 4px;
          overflow: hidden;
        }

        .search-category {
          padding: 12px 15px;
          border: none;
          background: #f8f9fa;
          width: 150px;
        }

        .search-bar input {
          flex: 1;
          padding: 12px 15px;
          border: none;
          outline: none;
        }

        .search-btn {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 12px 20px;
          cursor: pointer;
        }

        .navigation {
          background: #333;
          color: white;
          padding: 12px 0;
        }

        .navigation .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          padding: 8px 0;
        }

        .nav-links a.active,
        .nav-links a:hover {
          color: rgb(247, 51, 18);
        }

        .nav-actions {
          display: flex;
          gap: 20px;
          font-size: 14px;
        }

        /* Main Content */
        .main-content {
          padding: 20px 0;
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 30px;
        }

        /* Sidebar */
        .sidebar {
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
        }

        .category-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .category-item,
        .filter-item,
        .rating-item,
        .color-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .category-count {
          margin-left: auto;
          color: #666;
        }

        .color-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .color-swatch {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #ddd;
        }

        .price-range {
          padding: 10px 0;
        }

        .price-slider {
          width: 100%;
          margin-bottom: 10px;
        }

        .price-display {
          text-align: center;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .btn-apply {
          width: 100%;
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .rating-stars {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .star {
          color: #ddd;
        }

        .star.filled {
          color: #ffc107;
        }

        /* Product Area */
        .product-area {
          background: white;
        }

        .shop-hero {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
        }

        .shop-hero h1 {
          font-size: 36px;
          margin-bottom: 20px;
        }

        .hero-image img {
          max-width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        .breadcrumb {
          margin-bottom: 20px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: rgb(247, 51, 18);
          text-decoration: none;
        }

        .best-seller-section {
          margin-bottom: 40px;
        }

        .best-seller-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .product-card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .sale-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgb(247, 51, 18);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          z-index: 1;
        }

        .product-image {
          position: relative;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .product-actions {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          padding: 10px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-actions {
          transform: translateY(0);
        }

        .product-actions button {
          background: white;
          border: none;
          padding: 8px 12px;
          margin: 0 5px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .product-info {
          padding: 15px;
        }

        .product-name {
          font-size: 14px;
          margin-bottom: 8px;
          height: 40px;
          overflow: hidden;
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .review-count {
          font-size: 12px;
          color: #666;
        }

        .product-price {
          font-weight: 600;
        }

        .sale-price {
          color: rgb(247, 51, 18);
          margin-right: 8px;
        }

        .original-price {
          text-decoration: line-through;
          color: #666;
          font-size: 14px;
        }

        .sort-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .sort-options select,
        .view-options select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .view-options {
          display: flex;
          align-items: center;
          gap: 10px;
        }

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

        /* Footer */
        .footer {
          background: #333;
          color: white;
          padding: 40px 0 20px;
          margin-top: 60px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .footer-section h3 {
          margin-bottom: 15px;
          color: rgb(247, 51, 18);
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section a {
          color: #ccc;
          text-decoration: none;
        }

        .footer-section a:hover {
          color: white;
        }

        .payment-methods {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .newsletter-signup {
          display: flex;
          margin-top: 15px;
        }

        .newsletter-signup input {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 4px 0 0 4px;
        }

        .btn-subscribe {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .shop-layout {
            grid-template-columns: 250px 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .shop-layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            order: 2;
          }

          .product-area {
            order: 1;
          }

          .header-main-content {
            flex-direction: column;
            gap: 15px;
          }

          .nav-links {
            flex-wrap: wrap;
            gap: 15px;
          }

          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }

          .sort-section {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }

          .header-top-content {
            flex-direction: column;
            gap: 10px;
          }

          .contact-info,
          .header-actions {
            flex-wrap: wrap;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}
