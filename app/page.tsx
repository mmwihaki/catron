"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CatronHomePage() {
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("Nissan");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleEngine, setVehicleEngine] = useState("");
  const [vehicleFuelType, setVehicleFuelType] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [activeTab, setActiveTab] = useState("models");
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

  const nissanMakes = ["Nissan"];

  const nissanModels = [
    { name: "Note", model: "E12 DIG-S", engine: "1198cc HR12DDR" },
    { name: "Note", model: "E12 e-Power", engine: "1198cc HR12DE" },
    { name: "Note", model: "E11", engine: "1597cc HR16DE" },
    { name: "Note", model: "E12 Puredrive", engine: "1198cc HR12DE" },
    { name: "Note", model: "E11", engine: "1498cc HR15DE" },
    { name: "Note", model: "E12", engine: "1597cc HR16DE" },
    { name: "Sylphy", model: "B17", engine: "1797cc MRA8DE" },
    { name: "Serena", model: "C27 e-Power", engine: "1198cc HR12DE" },
    { name: "Serena", model: "C25", engine: "1997cc MR20DE" },
    { name: "AdVan", model: "Y12", engine: "1800cc MR18DE" },
    { name: "Wingroad", model: "Y12", engine: "1800cc MR18DE" },
    { name: "NV200 Vanette", model: "M20", engine: "1598cc HR16DE" },
    { name: "Kicks", model: "D15 e-Power", engine: "1198cc HR12DE" },
    { name: "X-Trail", model: "T31", engine: "1997cc MR20DE" },
    { name: "X-Trail", model: "T31", engine: "2488cc QR25DE" },
    { name: "X-Trail", model: "T32", engine: "2488cc QR25DE" },
    { name: "March", model: "K13", engine: "1198cc HR12DE" },
    { name: "March", model: "K12", engine: "1498cc HR15DE" },
    { name: "Tiida", model: "C11", engine: "1797cc MR18DE" },
    { name: "Tiida", model: "C11", engine: "1498cc HR15DE" },
    { name: "TiidaLatio", model: "SC11", engine: "1797cc MR18DE" },
    { name: "Tiida Latio", model: "SC11", engine: "1498cc HR15DE" },
    { name: "Latio", model: "N17", engine: "1198cc HR12DE" },
    { name: "Bluebird Sylphy", model: "G11", engine: "1997cc MR20DE" },
    { name: "Bluebird Sylphy", model: "G11", engine: "1498cc HR15DE" },
    { name: "Dualis", model: "J10", engine: "1997cc MR20DE" },
    { name: "Teana", model: "J32", engine: "2495cc VQ25DE" },
    { name: "Teana", model: "J32", engine: "2488cc QR25DE" },
    { name: "Teana", model: "L33", engine: "2488cc QR25DE" },
    { name: "NV350 Caravan", model: "E26", engine: "2488cc QR25DE" },
    { name: "Elgrand", model: "E52", engine: "2488cc QR25DE" },
    { name: "Murano", model: "Z50", engine: "2488cc QR25DE" },
    { name: "Lafesta", model: "B30", engine: "1997cc MR20DE" },
    { name: "Juke", model: "F15", engine: "1498cc HR15DE" },
    { name: "Cube", model: "Z11", engine: "1498cc HR15DE" },
    { name: "Cube", model: "Z12", engine: "1498cc HR15DE" },
  ];

  const engineSpecs = {
    HR12DDR: "1198cc",
    HR13DE: "1329cc",
    HR15DE: "1498cc",
    HR16DE: "1597cc",
    HR16DDR: "1597cc Turbo",
    QR25DE: "2488cc",
    VQ25DE: "2495cc",
    VQ35DE: "3498cc",
    VQ37VHR: "3696cc",
  };

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
      link: "https://www.trodo.com/air-filter-cabin-kavo-dcf-1023",
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
      link: "https://www.trodo.com/air-filter-cabin-kavo-dcf-1024k",
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
      link: "https://www.osram.com/ecat/NIGHT%20BREAKER%20200-Halogen%20headlight%20lamps-Car%20lighting-Automotive/com/en/GPS01_3495633/ZMP_4062357/",
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
      link: "https://www.sparkplugs.co.uk/ngk-spark-plug-dilkar7e11hs-97439",
    },
  ];

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

  const categories = [
    "Oil Filters",
    "Air Filters",
    "Headlight Bulbs",
    "Spark Plugs",
    "Brake Pads",
  ];

  const navLinks = ["Home", "Shop", "Blog", "Contact Us"];

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "in category:", searchCategory);
  };

  const handleVehicleSearch = () => {
    console.log("Vehicle search:", {
      year: vehicleYear,
      brand: vehicleBrand,
      model: vehicleModel,
      engine: vehicleEngine,
      fuelType: vehicleFuelType,
    });
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
              <select className="search-category">
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
              <button className="search-button" onClick={handleSearch}>
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
              <span className="action-icon">👤</span>
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
            {navLinks.map((link) => (
              <Link
                key={link}
                href={
                  link === "Home"
                    ? "/"
                    : link === "Shop"
                      ? "/shop"
                      : `#${link.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="nav-link"
              >
                {link}
              </Link>
            ))}
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text-section">
              <div className="hero-text-item">
                <h2 className="hero-subtitle">#1 Nissan Parts Marketplace</h2>
              </div>
              <div className="hero-text-item">
                <h1 className="hero-title">
                  Nissan OEM &amp; Aftermarket Parts
                </h1>
              </div>
              <div className="hero-text-item hero-search-intro">
                <h2 className="hero-search-title">Search by Nissan Model</h2>
                <p className="hero-search-description">
                  Filter your results by entering your Nissan model to ensure
                  you find the exact parts that fit.
                </p>
              </div>
            </div>

            <div className="hero-form-section">
              <form
                className="vehicle-search-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleVehicleSearch();
                }}
              >
                <div className="form-fields-container">
                  <select
                    name="year"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 8 }, (_, i) => {
                      const year = 2000 + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    name="brand"
                    value={vehicleBrand}
                    onChange={(e) => setVehicleBrand(e.target.value)}
                    className="form-select"
                    disabled={!vehicleYear}
                  >
                    <option value="">Brand</option>
                    <option value="nissan">Nissan</option>
                  </select>

                  <select
                    name="model"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="form-select"
                    disabled={!vehicleBrand}
                  >
                    <option value="">Model</option>
                    <option value="note">Note</option>
                    <option value="sylphy">Sylphy</option>
                    <option value="serena">Serena</option>
                    <option value="advan">AdVan</option>
                    <option value="wingroad">Wingroad</option>
                    <option value="nv200-vanette">NV200 Vanette</option>
                    <option value="kicks">Kicks</option>
                    <option value="x-trail">X-Trail</option>
                    <option value="march">March</option>
                    <option value="tiida">Tiida</option>
                    <option value="tiida-latio">Tiida Latio</option>
                    <option value="latio">Latio</option>
                    <option value="bluebird-sylphy">Bluebird Sylphy</option>
                    <option value="dualis">Dualis</option>
                    <option value="teana">Teana</option>
                    <option value="nv350-caravan">NV350 Caravan</option>
                    <option value="elgrand">Elgrand</option>
                    <option value="murano">Murano</option>
                    <option value="lafesta">Lafesta</option>
                    <option value="juke">Juke</option>
                    <option value="cube">Cube</option>
                  </select>

                  <select
                    name="engine"
                    value={vehicleEngine}
                    onChange={(e) => setVehicleEngine(e.target.value)}
                    className="form-select"
                    disabled={!vehicleModel}
                  >
                    <option value="">Engine</option>
                    <option value="1198cc-hr12ddr">1198cc HR12DDR</option>
                    <option value="1198cc-hr12de">1198cc HR12DE</option>
                    <option value="1597cc-hr16de">1597cc HR16DE</option>
                    <option value="1797cc-mra8de">1797cc MRA8DE</option>
                    <option value="1800cc-mr18de">1800cc MR18DE</option>
                    <option value="1598cc-hr16de">1598cc HR16DE</option>
                    <option value="1997cc-mr20de">1997cc MR20DE</option>
                    <option value="2488cc-qr25de">2488cc QR25DE</option>
                    <option value="1797cc-mr18de">1797cc MR18DE</option>
                    <option value="2495cc-vq25de">2495cc VQ25DE</option>
                    <option value="1498cc-hr15de">1498cc HR15DE</option>
                  </select>

                  <select
                    name="fueltype"
                    value={vehicleFuelType}
                    onChange={(e) => setVehicleFuelType(e.target.value)}
                    className="form-select"
                    disabled={!vehicleEngine}
                  >
                    <option value="">Fuel Type</option>
                    <option value="petrol">Petrol</option>
                    <option value="hybrid">e-Power (Hybrid)</option>
                    <option value="electric">Electric</option>
                  </select>

                  <button type="submit" className="search-submit-btn">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          <div className="categories-header">
            <h2 className="section-title">Shop by Categories</h2>
          </div>
          <div className="categories-grid">
            {[
              {
                name: "Auto Parts",
                description: "All Nissan Parts",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/2021/12/categories-30.png",
                slug: "auto-parts",
              },
              {
                name: "Oil Filters",
                description: "Engine Oil Filters",
                image:
                  "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
                slug: "oil-filter",
              },
              {
                name: "Air Filters",
                description: "Air & Cabin Filters",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/categories-23.png",
                slug: "air-filters",
              },
              {
                name: "Headlight Bulbs",
                description: "OSRAM, H4 Bulbs",
                image:
                  "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=300",
                slug: "headlight-bulbs",
              },
              {
                name: "Spark Plugs",
                description: "NGK Spark Plugs",
                image:
                  "https://images.pexels.com/photos/3846527/pexels-photo-3846527.jpeg?auto=compress&cs=tinysrgb&w=300",
                slug: "spark-plugs",
              },
              {
                name: "Brake Pads",
                description: "LPR, JAPKO Brake Pads",
                image:
                  "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=300",
                slug: "brake-pads",
              },
            ].map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image-container">
                  <Link
                    href={`/category/${category.slug}`}
                    className="category-image-link"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-image"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="category-content">
                  <div className="category-title">
                    <Link
                      href={`/category/${category.slug}`}
                      className="category-link"
                    >
                      {category.name}
                    </Link>
                  </div>
                  <div className="category-description">
                    {category.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Items for New Car Section */}
      <section className="essential-items-section">
        <div className="essential-items-container">
          <div className="essential-items-header">
            <div className="header-content">
              <h2 className="essential-items-title">
                Essential Items for New Car
              </h2>
            </div>
          </div>

          <div className="products-static-grid">
            <div className="products-grid-container">
              {essentialProducts.map((product) => (
                <div key={product.id} className="product-card">
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
                          width="225"
                          height="225"
                        />
                      </a>
                    </div>

                    <div className="product-info">
                      <div className="product-category">
                        <Link
                          href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="category-link"
                        >
                          {product.category}
                        </Link>
                      </div>

                      <div className="product-name">
                        <h5>
                          <a href={product.link} className="product-name-link">
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
                            <span className="rating-text">
                              Rated <strong>{product.rating.toFixed(2)}</strong>{" "}
                              out of 5
                            </span>
                          </div>
                        </div>
                        <div className="reviews-count">
                          <p>
                            {product.reviews} Review
                            {product.reviews !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>

                      <div className="product-price">
                        <p className="price-container">
                          {product.originalPrice && (
                            <del className="original-price">
                              <span>
                                <span className="currency">KES </span>
                                <span>
                                  {product.originalPrice.toLocaleString()}
                                </span>
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
          </div>
        </div>
      </section>

      {/* Featured Models/Engines Section */}
      <section className="featured-makes-section">
        <div className="featured-makes-container">
          <div className="featured-header">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === "models" ? "active" : ""}`}
                onClick={() => setActiveTab("models")}
              >
                <span>Featured Models</span>
              </button>
              <button
                className={`tab-button ${activeTab === "engines" ? "active" : ""}`}
                onClick={() => setActiveTab("engines")}
              >
                <span>Featured Engines</span>
              </button>
            </div>
          </div>

          <div className="featured-content">
            {activeTab === "models" && (
              <div className="models-grid">
                {nissanModels.map((model, index) => (
                  <button key={index} className="model-button">
                    <div className="model-info">
                      <div className="model-name">
                        {model.name} {model.model}
                      </div>
                      <div className="model-engine">{model.engine}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {activeTab === "engines" && (
              <div className="engines-grid">
                {[...new Set(nissanModels.map((model) => model.engine))].map(
                  (engine, index) => (
                    <button key={index} className="engine-button">
                      <div className="engine-info">
                        <div className="engine-name">{engine}</div>
                        <div className="engine-count">
                          {
                            nissanModels.filter(
                              (model) => model.engine === engine,
                            ).length
                          }{" "}
                          Models
                        </div>
                      </div>
                    </button>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers-section">
        <div className="best-sellers-container">
          <div className="best-sellers-header">
            <div className="header-left">
              <h2 className="best-sellers-title">Best Sellers</h2>
              <div className="countdown-timer">
                <span className="timer-label">Expires in:</span>
                <div className="timer-display">
                  <span className="timer-item">124D :</span>
                  <span className="timer-item">14H :</span>
                  <span className="timer-item">13M :</span>
                  <span className="timer-item">49S</span>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="category-tabs">
                <button className="tab-link active">Top 10</button>
                <button className="tab-link">Top Air Filters</button>
                <button className="tab-link">Top Auto Parts</button>
                <button className="tab-link">Top Exteriors</button>
              </div>
            </div>
          </div>

          <div className="products-grid-container">
            {essentialProducts.map((product) => (
              <div key={`bestseller-${product.id}`} className="product-card">
                <div className="product-card-inner">
                  <div className="product-discount-badge">
                    {Math.round(
                      (((product.originalPrice || product.price + 500) -
                        product.price) /
                        (product.originalPrice || product.price + 500)) *
                        100,
                    )}
                    % OFF
                  </div>

                  <div className="product-image-container">
                    <a href={product.link} className="product-image-link">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                        width="225"
                        height="225"
                      />
                    </a>
                  </div>

                  <div className="product-info">
                    <div className="product-category">
                      <Link
                        href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="category-link"
                      >
                        {product.category}
                      </Link>
                    </div>

                    <div className="product-name">
                      <h5>
                        <a href={product.link} className="product-name-link">
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
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="new-arrivals-container">
          <div className="new-arrivals-header">
            <div className="header-content">
              <h2 className="new-arrivals-title">New Arrivals</h2>
              <Link
                href="/shop?search_type=new-arrivals"
                className="see-all-link"
              >
                <span>See All Products</span>
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div className="products-grid-container">
            {essentialProducts.map((product) => (
              <div key={`new-arrival-${product.id}`} className="product-card">
                <div className="product-card-inner">
                  <div className="new-badge">NEW</div>

                  <div className="product-image-container">
                    <a href={product.link} className="product-image-link">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                        width="225"
                        height="225"
                      />
                    </a>
                  </div>

                  <div className="product-info">
                    <div className="product-category">
                      <Link
                        href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="category-link"
                      >
                        {product.category}
                      </Link>
                    </div>

                    <div className="product-name">
                      <h5>
                        <a href={product.link} className="product-name-link">
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
                        <span className="regular-price">
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
        </div>
      </section>

      {/* Tips & Guides Section */}
      <section className="tips-guides-section">
        <div className="tips-guides-container">
          <div className="section-header">
            <h2 className="section-title">Tips & Guides</h2>
            <Link href="/blog" className="view-all-link">
              See All Articles
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>

          <div className="tips-guides-content">
            <div className="featured-article">
              <div className="article-image">
                <a href="/blog/vehicle-maintenance">
                  <img
                    src="https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                    alt="Vehicle maintenance tips"
                  />
                </a>
              </div>
              <div className="article-content">
                <h3 className="article-title">
                  <a href="/blog/vehicle-maintenance">
                    Essential Vehicle Maintenance Tips for Optimal Performance
                  </a>
                </h3>
                <p className="article-excerpt">
                  Keep your vehicle running smoothly with these essential
                  maintenance tips. From regular oil changes to brake
                  inspections, learn how to extend your car's lifespan...
                </p>
                <div className="article-meta">
                  <div className="author">
                    <i className="fas fa-user"></i>
                    <span>By Catron Team</span>
                  </div>
                  <div className="date">
                    <i className="fas fa-calendar"></i>
                    <span>Dec 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="article-list">
              {[
                {
                  title: "How to Choose the Right Air Filter for Your Car",
                  excerpt:
                    "Air filters play a crucial role in engine performance. Learn how to select the best one...",
                  image:
                    "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
                  date: "Dec 12, 2024",
                },
                {
                  title: "Understanding Your Vehicle's Brake System",
                  excerpt:
                    "A comprehensive guide to brake components and maintenance for optimal safety...",
                  image:
                    "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
                  date: "Dec 10, 2024",
                },
                {
                  title: "The Importance of Regular Oil Changes",
                  excerpt:
                    "Why timely oil changes are essential for your engine's health and longevity...",
                  image:
                    "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
                  date: "Dec 8, 2024",
                },
              ].map((article, index) => (
                <div key={index} className="small-article">
                  <div className="small-article-image">
                    <a href={`/blog/article-${index + 1}`}>
                      <img src={article.image} alt={article.title} />
                    </a>
                  </div>
                  <div className="small-article-content">
                    <h4 className="small-article-title">
                      <a href={`/blog/article-${index + 1}`}>{article.title}</a>
                    </h4>
                    <p className="small-article-excerpt">{article.excerpt}</p>
                    <div className="article-meta">
                      <div className="date">
                        <i className="fas fa-calendar"></i>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="featured-brands-section">
        <div className="featured-brands-container">
          <h2 className="section-title">Featured Brands</h2>
          <div className="brands-grid">
            {[
              {
                name: "NGK",
                image:
                  "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
              },
              {
                name: "OSRAM",
                image:
                  "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
              },
              {
                name: "KAVO",
                image:
                  "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
              },
              {
                name: "DENSO",
                image:
                  "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
              },
              {
                name: "BOSCH",
                image:
                  "https://images.pexels.com/photos/244824/pexels-photo-244824.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
              },
              {
                name: "MANN",
                image:
                  "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
              },
            ].map((brand) => (
              <div key={brand.name} className="brand-card">
                <a
                  href={`/brands/${brand.name.toLowerCase()}`}
                  className="brand-link"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="brand-image"
                  />
                  <span className="brand-name">{brand.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">Subscribe To Our Newsletter</h2>
              <p className="newsletter-description">
                Register now to get latest updates on promotions &amp; coupons.
                Don't worry, we not spam!
              </p>
            </div>
            <div className="newsletter-form-wrapper">
              <form
                className="newsletter-form"
                action="/#newsletter"
                method="post"
              >
                <div className="form-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="newsletter-submit">
                    Subscribe
                  </button>
                </div>
                <p className="newsletter-policy">
                  <span>By subscribing, you accepted the our</span>
                  <a href="/privacy-policy" className="policy-link">
                    Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand-section">
                <div className="footer-brand-content">
                  <a href="/" className="footer-logo-link">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593?format=webp&width=191"
                      alt="Catron Auto Parts"
                      className="footer-logo"
                    />
                  </a>
                  <div className="footer-brand-description">
                    <h6 className="footer-tagline">
                      #1 Kenya's biggest online marketplace for car spare OEM &
                      Aftermarkets.
                    </h6>
                    <p className="footer-disclaimer">
                      All manufacturer names, symbols, and descriptions, used in
                      our images and text are used solely for identification
                      purposes only. It is neither inferred nor implied that any
                      item sold by Catron.co.ke is a product authorized by or in
                      any way connected with any vehicle manufacturers displayed
                      on this page
                    </p>
                    <div className="footer-social">
                      <a href="https://twitter.com/" className="social-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 64 64"
                          width="18"
                          height="18"
                        >
                          <path d="M56.9,14.8l3.9-4.9C62,8.6,62.3,7.6,62.4,7c-3,1.9-5.9,2.5-7.9,2.5h-0.8L53.2,9c-2.5-2.2-5.5-3.4-8.9-3.4c-7.2,0-13,5.9-13,13c0,0.5,0,1,0.1,1.5l0.3,2.1l-2.2-0.1C16.3,21.8,5.5,10.5,3.7,8.5c-2.9,5.3-1.3,10.2,0.5,13.3l3.5,5.8l-5.5-3c0.1,4.3,1.8,7.7,4.9,10.2l2.7,2L7,37.9c1.8,5.3,5.6,7.4,8.6,8.3l3.8,1l-3.3,2.3c-5.7,4-13,3.8-16.1,3.5c6.6,4.5,14.2,5.5,19.7,5.5c4,0,7-0.5,7.7-0.7c29-6.8,30.3-32.6,30.2-37.8v-0.8l0.6-0.5c3.5-3.3,5-5.1,5.8-6.1c-0.3,0.2-0.7,0.3-1.2,0.4L56.9,14.8z"></path>
                        </svg>
                      </a>
                      <a href="https://facebook.com/" className="social-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 64 64"
                          width="18"
                          height="18"
                        >
                          <path d="M47.9,25.6L47.9,25.6h-5.8H40v-2.1v-6.4v-2.1h2.1h4.4c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2h-7.6c-8.2,0-13.9,5.9-13.9,14.4v9.1v2.1h-2.1H16c-1.5,0-2.7,1.2-2.7,2.8v7.4c0,1.5,1.2,2.7,2.7,2.7h6.9h2.1v2.1v20.8c0,1.5,1.2,2.7,2.7,2.7h9.8c0.6,0,1.2-0.3,1.6-0.7c0.5-0.5,0.7-1.2,0.7-1.8l0,0v0V40.5v-2.1H42h4.6c1.3,0,2.4-0.9,2.6-2.1l0-0.1l0-0.1l1.4-7.1c0.2-0.8,0-1.6-0.6-2.4C49.6,26.1,48.8,25.7,47.9,25.6z"></path>
                        </svg>
                      </a>
                      <a href="https://youtube.com/" className="social-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 64 64"
                          width="18"
                          height="18"
                        >
                          <path d="M62.7,16.6c-0.7-2.8-2.9-4.9-5.7-5.7c-5-1.3-25-1.3-25-1.3s-20,0-25,1.3c-2.8,0.7-4.9,2.9-5.7,5.7C0,21.6,0,32,0,32  s0,10.4,1.3,15.4c0.7,2.8,2.9,4.9,5.7,5.7c5,1.3,25,1.3,25,1.3s20,0,25-1.3c2.8-0.7,4.9-2.9,5.7-5.7C64,42.4,64,32,64,32  S64,21.6,62.7,16.6z M25.6,41.6V22.4L42.2,32L25.6,41.6z"></path>
                        </svg>
                      </a>
                      <a href="https://instagram.com/" className="social-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 64 64"
                          width="18"
                          height="18"
                        >
                          <g>
                            <path d="M62.9,19.2c-0.1-3.2-0.7-5.5-1.4-7.6S59.7,7.8,58,6.1s-3.4-2.7-5.4-3.5c-2-0.8-4.2-1.3-7.6-1.4C41.5,1,40.5,1,32,1s-9.4,0-12.8,0.1s-5.5,0.7-7.6,1.4S7.8,4.4,6.1,6.1s-2.8,3.4-3.5,5.5c-0.8,2-1.3,4.2-1.4,7.6S1,23.5,1,32s0,9.4,0.1,12.8c0.1,3.4,0.7,5.5,1.4,7.6c0.7,2.1,1.8,3.8,3.5,5.5s3.5,2.8,5.5,3.5c2,0.7,4.2,1.3,7.6,1.4C22.5,63,23.4,63,31.9,63s9.4,0,12.8-0.1s5.5-0.7,7.6-1.4c2.1-0.7,3.8-1.8,5.5-3.5s2.8-3.5,3.5-5.5c0.7-2,1.3-4.2,1.4-7.6c0.1-3.2,0.1-4.2,0.1-12.7S63,22.6,62.9,19.2zM57.3,44.5c-0.1,3-0.7,4.6-1.1,5.8c-0.6,1.4-1.3,2.5-2.4,3.5c-1.1,1.1-2.1,1.7-3.5,2.4c-1.1,0.4-2.7,1-5.8,1.1c-3.2,0-4.2,0-12.4,0s-9.3,0-12.5-0.1c-3-0.1-4.6-0.7-5.8-1.1c-1.4-0.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-0.4-1.1-1-2.7-1.1-5.8c0-3.1,0-4.1,0-12.4s0-9.3,0.1-12.5c0.1-3,0.7-4.6,1.1-5.8c0.6-1.4,1.3-2.5,2.3-3.5c1.1-1.1,2.1-1.7,3.5-2.3c1.1-0.4,2.7-1,5.8-1.1c3.2-0.1,4.2-0.1,12.5-0.1s9.3,0,12.5,0.1c3,0.1,4.6,0.7,5.8,1.1c1.4,0.6,2.5,1.3,3.5,2.3c1.1,1.1,1.7,2.1,2.4,3.5c0.4,1.1,1,2.7,1.1,5.8c0.1,3.2,0.1,4.2,0.1,12.5S57.4,41.3,57.3,44.5z"></path>
                            <path d="M32,16.1c-8.9,0-15.9,7.2-15.9,15.9c0,8.9,7.2,15.9,15.9,15.9S48,40.9,48,32S40.9,16.1,32,16.1z M32,42.4c-5.8,0-10.4-4.7-10.4-10.4S26.3,21.6,32,21.6c5.8,0,10.4,4.6,10.4,10.4S37.8,42.4,32,42.4z"></path>
                            <ellipse
                              cx="48.7"
                              cy="15.4"
                              rx="3.7"
                              ry="3.7"
                            ></ellipse>
                          </g>
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
                      <a href="/category/auto-parts">Auto Parts</a>
                    </li>
                    <li>
                      <a href="/category/car-care">Car Care</a>
                    </li>
                    <li>
                      <a href="/category/fluids-chemicals">
                        Fluids & Chemicals
                      </a>
                    </li>
                    <li>
                      <a href="/category/oils-tools-supplies">
                        Oils Tools & Supplies
                      </a>
                    </li>
                    <li>
                      <a href="/category/wheels-tires">Wheel & Tires</a>
                    </li>
                    <li>
                      <a href="/category/clearance">Clearances</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="footer-column">
                  <h6 className="footer-column-title">Information</h6>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/about-us">About Catron</a>
                    </li>
                    <li>
                      <a href="/investors">Investors</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/career">Career</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/affiliate-program">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="/sell-on-catron">Sell on Catron</a>
                    </li>
                    <li>
                      <a href="/partnership">Partnership</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="footer-column">
                  <h6 className="footer-column-title">Customer Service</h6>
                  <ul className="footer-links-list">
                    <li>
                      <a href="/help-center">Help Center</a>
                    </li>
                    <li>
                      <a href="/my-account">My Account</a>
                    </li>
                    <li>
                      <a href="/track">Track</a>
                    </li>
                    <li>
                      <a href="/my-order">My Order</a>
                    </li>
                    <li>
                      <a href="/return-policy">Return Policy</a>
                    </li>
                    <li>
                      <a href="/gift-cards">Gift Cards</a>
                    </li>
                    <li>
                      <a href="/buy-wholesale">Buy Wholesale</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .homepage {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Promo Banner */
        .promo-banner {
          background-color: rgb(30, 30, 31);
          color: white;
          padding: 10px 0;
          font-size: 14px;
        }

        .promo-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .black-friday {
          color: rgb(247, 51, 18);
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

        /* Main Header */
        .main-header {
          background-color: rgb(38, 38, 39);
          color: white;
          padding: 15px 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          gap: 30px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-image {
          width: 40px;
          height: 40px;
          border-radius: 4px;
        }
        .logo-text {
          font-size: 24px;
          font-weight: bold;
          color: rgb(247, 51, 18);
        }

        .search-section {
          flex: 1;
          max-width: 500px;
        }

        .search-bar {
          display: flex;
          background: white;
          border-radius: 4px;
          overflow: hidden;
        }

        .search-category {
          padding: 10px;
          border: none;
          background: rgb(242, 242, 247);
          color: #333;
        }

        .search-input {
          flex: 1;
          padding: 10px;
          border: none;
          outline: none;
        }

        .search-button {
          padding: 10px 15px;
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          cursor: pointer;
        }

        .header-actions {
          display: flex;
          gap: 20px;
        }

        .action-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          font-size: 12px;
        }

        .action-icon {
          font-size: 18px;
          margin-bottom: 2px;
        }

        /* Navigation */
        .main-navigation {
          background-color: rgb(42, 42, 43);
          color: white;
          padding: 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .categories-btn {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 15px 20px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .categories-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          min-width: 200px;
        }

        .dropdown-item {
          padding: 12px 16px;
          color: #333;
          text-decoration: none;
          display: block;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          transition: background 0.2s;
        }

        .dropdown-item:hover {
          background: #f8f9fa;
          color: rgb(247, 51, 18);
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          margin-left: 30px;
          flex: 1;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          padding: 15px 0;
          font-size: 14px;
          font-weight: 600;
        }

        .nav-link:hover {
          color: rgb(247, 51, 18);
        }

        .nav-actions {
          display: flex;
          gap: 20px;
        }

        .nav-action {
          color: white;
          text-decoration: none;
          font-size: 12px;
        }

        /* Hero Section */
        .hero-section {
          background-image: url("https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 0 60px 0;
          position: relative;
          background-color: rgba(0, 0, 0, 0.5);
          min-height: 80vh;
          transition:
            background 0.3s ease,
            border 0.3s ease,
            border-radius 0.3s ease,
            box-shadow 0.4s ease,
            transform 0.3s ease;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-container {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          max-width: 1520px;
          position: relative;
          z-index: 2;
          padding: 0 12px;
        }

        .hero-content {
          display: flex;
          min-height: 1px;
          position: relative;
          width: 100%;
          align-content: flex-start;
          flex-flow: row wrap;
          flex-wrap: wrap;
          z-index: 2;
        }

        .hero-text-section {
          width: 100%;
          text-align: center;
        }

        .hero-text-item {
          margin-bottom: 20px;
          position: relative;
          text-align: center;
          width: 100%;
        }

        .hero-search-intro {
          margin-top: 80px;
        }

        .hero-subtitle {
          color: rgb(255, 255, 255);
          font-size: 30px;
          line-height: 1.2;
          position: relative;
          text-align: center;
          text-transform: uppercase;
          transition-duration: 0.6s;
          font-weight: 400;
          margin: 0;
        }

        .hero-title {
          color: rgb(255, 255, 255);
          font-size: 60px;
          font-weight: 700;
          line-height: 1.1;
          position: relative;
          text-align: center;
          transition-duration: 0.6s;
          margin: 0;
        }

        .hero-search-title {
          color: rgb(255, 255, 255);
          font-size: 30px;
          font-weight: 700;
          line-height: 1.2;
          position: relative;
          text-align: center;
          transition-duration: 0.6s;
          margin: 0;
        }

        .hero-search-description {
          color: rgb(255, 255, 255);
          line-height: 16px;
          text-align: center;
          margin: 15px 0 0 0;
        }

        .hero-form-section {
          position: relative;
          width: 100%;
        }

        /* Vehicle Search Form */
        .vehicle-search-form {
          background-color: rgb(255, 255, 255);
          border: 0.8px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px 8px 0px 0px;
          border-style: solid none none;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          padding: 30px;
          color: #333;
        }

        .form-fields-container {
          display: flex;
          gap: 20px;
          width: 100%;
          justify-content: space-between;
        }

        .form-select {
          background-color: rgb(255, 255, 255);
          border: 0.8px solid rgb(212, 212, 212);
          border-radius: 3px;
          color: rgb(68, 68, 68);
          cursor: pointer;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          font-size: 15px;
          height: 50px;
          line-height: 50px;
          padding: 0 20px;
          width: 100%;
          user-select: none;
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'> <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/> </svg>");
          background-position: 95% 16px;
          background-repeat: no-repeat;
        }

        .form-select:disabled {
          background-color: rgb(242, 242, 247);
          opacity: 0.7;
          cursor: default;
        }

        .search-submit-btn {
          appearance: auto;
          background-color: rgb(247, 51, 18);
          border: 1.6px solid rgb(247, 51, 18);
          border-radius: 4px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          font-weight: 700;
          height: 52px;
          line-height: 16px;
          max-width: 160px;
          padding: 15px 20px;
          text-align: center;
          text-transform: capitalize;
          transition-duration: 0.3s;
          width: 100%;
        }

        .search-submit-btn:hover {
          background-color: rgb(220, 40, 15);
          border-color: rgb(220, 40, 15);
        }

        /* Categories Section */
        .categories-section {
          position: relative;
          background-color: rgb(255, 255, 255);
        }

        .categories-container {
          background-color: rgb(242, 242, 247);
          padding: 75px 0;
        }

        .categories-header {
          margin-left: auto;
          margin-right: auto;
          max-width: 1520px;
          padding-left: 12px;
          padding-right: 12px;
          width: 100%;
        }

        .section-title {
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
          margin-bottom: 35px;
          position: relative;
          transition-duration: 0.6s;
          color: #333;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          justify-content: center;
          align-items: flex-start;
          margin-left: auto;
          margin-right: auto;
          max-width: 1200px;
          padding-left: 12px;
          padding-right: 12px;
          width: 100%;
        }

        .category-card {
          background-color: rgb(255, 255, 255);
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          flex-flow: column nowrap;
          margin-bottom: 30px;
          padding: 60px 17px 25px 17px;
          text-align: center;
          transition-duration: 0.3s;
          width: 100%;
          min-width: 160px;
        }

        .category-image-container {
          align-items: center;
          display: flex;
          height: 60px;
          justify-content: center;
          margin-bottom: 30px;
          text-align: center;
        }

        .category-image-link {
          cursor: pointer;
          display: grid;
          text-align: center;
        }

        .category-image {
          cursor: pointer;
          margin-left: auto;
          margin-right: auto;
          max-width: 114px;
          text-align: center;
          width: auto;
          height: auto;
        }

        .category-content {
          margin-top: auto;
          text-align: center;
        }

        .category-title {
          margin-bottom: 5px;
        }

        .category-link {
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          line-height: 23.996px;
          text-align: center;
          text-decoration: none;
          color: #333;
        }

        .category-link:hover {
          color: rgb(247, 51, 18);
        }

        .category-description {
          color: rgb(102, 102, 102);
          font-size: 12px;
          text-align: center;
        }

        .load-more-container {
          margin-top: 50px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          max-width: 1520px;
          padding-left: 12px;
          padding-right: 12px;
          width: 100%;
        }

        .load-more-button {
          appearance: auto;
          background-color: rgb(255, 255, 255);
          border: 0.8px solid rgb(204, 204, 204);
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          font-weight: 700;
          height: 52px;
          line-height: 16px;
          padding: 15px 53px;
          text-align: center;
          text-transform: capitalize;
          transition-duration: 0.3s;
          color: #333;
        }

        .load-more-button:hover {
          background-color: rgb(247, 51, 18);
          border-color: rgb(247, 51, 18);
          color: white;
        }

        .load-more-container {
          text-align: center;
        }

        .load-more-button {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        /* Essential Items Section */
        .essential-items-section {
          background: rgb(242, 242, 247);
          padding: 65px 0;
        }

        .essential-items-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .essential-items-header {
          margin-bottom: 40px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .essential-items-title {
          font-size: 30px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }

        .see-all-link {
          color: rgb(247, 51, 18);
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .products-static-grid {
          position: relative;
        }

        .products-grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .product-card {
          position: relative;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-card-inner {
          padding: 20px;
          position: relative;
          height: 100%;
        }

        .product-discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgb(247, 51, 18);
          color: white;
          padding: 5px 8px;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 600;
          z-index: 1;
        }

        .product-image-container {
          margin-bottom: 15px;
          text-align: center;
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
        }

        .product-category {
          margin-bottom: 8px;
        }

        .category-link {
          color: #666;
          text-decoration: none;
          font-size: 12px;
          text-transform: uppercase;
        }

        .product-name {
          margin-bottom: 10px;
        }

        .product-name h5 {
          margin: 0;
          font-size: 16px;
          line-height: 1.3;
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
          gap: 10px;
          margin-bottom: 10px;
        }

        .rating-stars {
          position: relative;
        }

        .stars {
          color: rgb(255, 186, 0);
          font-size: 14px;
        }

        .star-display {
          color: rgb(255, 186, 0);
        }

        .rating-text {
          position: absolute;
          left: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
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
          gap: 10px;
        }

        .original-price {
          color: #999;
          font-size: 14px;
          text-decoration: line-through;
        }

        .sale-price,
        .regular-price {
          color: rgb(247, 51, 18);
          font-size: 18px;
          font-weight: 600;
        }

        .currency {
          color: inherit;
        }

        .product-actions {
          margin-top: 15px;
        }

        .add-to-cart-btn {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          width: 100%;
          text-align: center;
          transition: background 0.3s ease;
        }

        .add-to-cart-btn:hover {
          background: rgb(220, 40, 15);
        }

        /* Featured Makes/Models Section */
        .featured-makes-section {
          padding: 65px 0;
          background: white;
        }

        .featured-makes-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .featured-header {
          margin-bottom: 40px;
        }

        .tab-buttons {
          display: flex;
          justify-content: center;
          gap: 2px;
          background: rgb(242, 242, 247);
          border-radius: 8px;
          padding: 4px;
          max-width: 400px;
          margin: 0 auto;
        }

        .tab-button {
          flex: 1;
          padding: 12px 20px;
          border: none;
          background: transparent;
          color: #666;
          cursor: pointer;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .tab-button.active {
          background: white;
          color: rgb(247, 51, 18);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .models-grid,
        .engines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }

        .model-button,
        .engine-button {
          padding: 15px 20px;
          border: 2px solid rgb(212, 212, 212);
          background: white;
          color: #333;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: left;
        }

        .model-button:hover,
        .engine-button:hover {
          border-color: rgb(247, 51, 18);
          color: rgb(247, 51, 18);
        }

        .model-info,
        .engine-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .model-name,
        .engine-name {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .model-engine,
        .engine-count {
          font-size: 12px;
          color: #666;
          font-weight: 400;
        }

        .model-button:hover .model-name,
        .engine-button:hover .engine-name {
          color: rgb(247, 51, 18);
        }

        .model-button:hover .model-engine,
        .engine-button:hover .engine-count {
          color: rgb(200, 40, 15);
        }

        .view-more-container {
          text-align: center;
        }

        .view-more-button {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .view-more-btn {
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
        }

        /* Best Sellers Section */
        .best-sellers-section {
          background: rgb(242, 242, 247);
          padding: 65px 0;
        }

        .best-sellers-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .best-sellers-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .best-sellers-title {
          font-size: 30px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }

        .countdown-timer {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 10px 20px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .timer-label {
          font-size: 14px;
          color: #666;
        }

        .timer-display {
          display: flex;
          gap: 5px;
        }

        .timer-item {
          color: rgb(247, 51, 18);
          font-weight: bold;
          font-size: 16px;
        }

        .category-tabs {
          display: flex;
          gap: 5px;
        }

        .tab-link {
          padding: 10px 20px;
          border: none;
          background: white;
          color: #666;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tab-link.active {
          background: rgb(247, 51, 18);
          color: white;
        }

        .tab-link:hover {
          background: rgb(247, 51, 18);
          color: white;
        }

        /* New Arrivals Section */
        .new-arrivals-section {
          padding: 65px 0;
          background: white;
        }

        .new-arrivals-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .new-arrivals-header {
          margin-bottom: 40px;
        }

        .new-arrivals-title {
          font-size: 30px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }

        .new-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgb(34, 197, 94);
          color: white;
          padding: 5px 8px;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 600;
          z-index: 1;
        }

        /* Tips & Guides Section */
        .tips-guides-section {
          background: rgb(242, 242, 247);
          padding: 65px 0;
        }

        .tips-guides-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .view-all-link {
          color: rgb(247, 51, 18);
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .tips-guides-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .featured-article {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .article-image {
          height: 300px;
          overflow: hidden;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-content {
          padding: 30px;
        }

        .article-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .article-title a {
          color: #333;
          text-decoration: none;
        }

        .article-title a:hover {
          color: rgb(247, 51, 18);
        }

        .article-excerpt {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .article-meta {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #999;
        }

        .author,
        .date {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .article-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .small-article {
          display: flex;
          gap: 15px;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .small-article-image {
          width: 100px;
          height: 80px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .small-article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .small-article-content {
          flex: 1;
        }

        .small-article-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .small-article-title a {
          color: #333;
          text-decoration: none;
        }

        .small-article-title a:hover {
          color: rgb(247, 51, 18);
        }

        .small-article-excerpt {
          font-size: 14px;
          color: #666;
          line-height: 1.4;
          margin-bottom: 10px;
        }

        /* Featured Brands Section */
        .featured-brands-section {
          padding: 65px 0;
          background: white;
        }

        .featured-brands-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .brand-card {
          background: white;
          border: 2px solid rgb(242, 242, 247);
          border-radius: 8px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .brand-card:hover {
          border-color: rgb(247, 51, 18);
          transform: translateY(-5px);
        }

        .brand-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .brand-image {
          width: 100%;
          height: 80px;
          object-fit: contain;
          margin-bottom: 15px;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .brand-card:hover .brand-image {
          filter: grayscale(0%);
        }

        .brand-name {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        /* Newsletter Section */
        .newsletter-section {
          position: relative;
          background: rgb(246, 247, 250);
          border-top: 0.8px solid rgb(229, 229, 229);
          border-bottom: 0.8px solid rgb(229, 229, 229);
          padding: 90px 0;
        }

        .newsletter-container {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          max-width: 1320px;
          padding: 0 12px;
          width: 100%;
          position: relative;
        }

        .newsletter-content {
          display: flex;
          flex-wrap: wrap;
          margin-left: -12px;
          margin-right: -12px;
          width: 100%;
        }

        .newsletter-text {
          flex-shrink: 0;
          max-width: 100%;
          padding-left: 12px;
          padding-right: 12px;
          width: 41.6667%;
        }

        .newsletter-title {
          font-size: 30px;
          font-weight: 700;
          line-height: 36px;
          margin-bottom: 15px;
          position: relative;
          transition-duration: 0.6s;
        }

        .newsletter-description {
          color: rgb(102, 102, 102);
          font-size: 14px;
          line-height: 28px;
          margin-bottom: 15px;
        }

        .newsletter-form-wrapper {
          flex-shrink: 0;
          max-width: 100%;
          padding-left: 12px;
          padding-right: 12px;
          width: 50%;
          margin-left: 8.33333%;
        }

        .newsletter-form {
          display: block;
        }

        .form-input-group {
          display: inline-flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 15px;
          margin-top: 5px;
          position: relative;
          width: 100%;
        }

        .newsletter-input {
          appearance: auto;
          background-color: rgb(255, 255, 255);
          border: 0.8px solid rgb(204, 204, 204);
          border-radius: 4px;
          color: rgb(153, 153, 153);
          cursor: text;
          display: inline-block;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          font-size: 15px;
          height: 52px;
          line-height: 27.855px;
          overflow: clip;
          padding: 12px 17px;
          width: 100%;
        }

        .newsletter-submit {
          appearance: auto;
          background-color: rgb(247, 51, 18);
          border: 1.6px solid rgb(247, 51, 18);
          border-radius: 0 4px 4px 0;
          color: rgb(255, 255, 255);
          cursor: pointer;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          font-weight: 700;
          height: 52px;
          left: -5px;
          line-height: 16px;
          padding: 15px 20px;
          position: relative;
          text-align: center;
          text-transform: capitalize;
          transition-duration: 0.3s;
        }

        .newsletter-submit:hover {
          background-color: rgb(220, 45, 16);
          border-color: rgb(220, 45, 16);
        }

        .newsletter-policy {
          color: rgb(102, 102, 102);
          font-size: 14px;
          line-height: 28px;
          margin-bottom: 15px;
          margin-top: 5px;
        }

        .policy-link {
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          margin-left: 5px;
          text-decoration: underline;
          color: rgb(102, 102, 102);
        }

        .policy-link:hover {
          color: rgb(247, 51, 18);
        }

        /* Footer */
        .footer {
          background: rgb(246, 247, 250);
          padding-bottom: 50px;
          padding-top: 100px;
        }

        .footer-container {
          margin-left: auto;
          margin-right: auto;
          max-width: 1320px;
          padding-left: 12px;
          padding-right: 12px;
          width: 100%;
        }

        .footer-content {
          position: relative;
        }

        .footer-main {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }

        .footer-brand-section {
          display: flex;
          min-height: 1px;
          position: relative;
          width: 41.6667%;
        }

        .footer-brand-content {
          align-content: flex-start;
          display: flex;
          flex-flow: row wrap;
          flex-wrap: wrap;
          position: relative;
          width: 100%;
          padding-right: 105px;
        }

        .footer-logo-link {
          cursor: pointer;
          display: inline-block;
        }

        .footer-logo {
          cursor: pointer;
          display: inline;
          margin-bottom: 20px;
          max-width: 191px;
          overflow-clip-margin: content-box;
          overflow-x: clip;
          overflow-y: clip;
        }

        .footer-brand-description {
          width: 100%;
        }

        .footer-tagline {
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 30px;
          position: relative;
          transition-duration: 0.6s;
          color: #333;
        }

        .footer-disclaimer {
          border-color: rgb(102, 102, 102);
          color: rgb(102, 102, 102);
          font-size: 14px;
          line-height: 23.996px;
          margin-bottom: 10px;
          outline-color: rgb(102, 102, 102);
          text-decoration-color: rgb(102, 102, 102);
          text-emphasis-color: rgb(102, 102, 102);
          width: 100%;
        }

        .footer-social {
          align-items: center;
          display: flex;
          justify-content: flex-start;
          margin-top: 35px;
        }

        .social-icon {
          cursor: pointer;
          display: grid;
          font-size: 24px;
          margin-right: 20px;
          text-decoration: none;
          color: #666;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: rgb(247, 51, 18);
        }

        .social-icon svg {
          cursor: pointer;
          font-size: 18px;
          height: 18px;
          overflow-clip-margin: content-box;
          overflow-x: hidden;
          overflow-y: hidden;
          width: 18px;
          fill: currentColor;
        }

        .footer-links-section {
          display: flex;
          min-height: 1px;
          position: relative;
          width: 16.6667%;
        }

        .footer-links-section:last-child {
          width: 24.999%;
        }

        .footer-column {
          align-content: flex-start;
          display: flex;
          flex-flow: row wrap;
          flex-wrap: wrap;
          position: relative;
          width: 100%;
        }

        .footer-column-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
          margin-bottom: 35px;
          position: relative;
          transition-duration: 0.6s;
          color: #333;
          width: 100%;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .footer-links-list li {
          font-size: 18px;
          line-height: 32.4px;
          text-align: left;
        }

        .footer-links-list a {
          border-color: rgb(102, 102, 102);
          color: rgb(102, 102, 102);
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          outline-color: rgb(102, 102, 102);
          text-align: left;
          text-decoration-color: rgb(102, 102, 102);
          text-emphasis-color: rgb(102, 102, 102);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links-list a:hover {
          color: rgb(247, 51, 18);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .search-submit-btn {
            grid-column: span 2;
          }

          .products-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .header-container {
            flex-wrap: wrap;
            gap: 15px;
          }

          .search-section {
            order: 3;
            width: 100%;
            max-width: none;
          }

          .nav-container {
            flex-wrap: wrap;
            gap: 15px;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: center;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-form-section {
            margin-top: 30px;
          }

          .form-fields-container {
            flex-direction: column;
            gap: 15px;
          }

          .search-submit-btn {
            max-width: none;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          @media (max-width: 576px) {
            .category-card {
              max-width: calc(50% - 15px);
              min-width: 120px;
            }
          }

          .products-grid-container {
            grid-template-columns: 1fr;
          }

          .header-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .essential-items-title {
            font-size: 24px;
          }

          .best-sellers-header,
          .new-arrivals-header .header-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .header-left {
            flex-direction: column;
            gap: 15px;
          }

          .countdown-timer {
            justify-content: center;
          }

          .category-tabs {
            flex-wrap: wrap;
            justify-content: center;
          }

          .tab-link {
            font-size: 12px;
            padding: 8px 15px;
          }

          .tips-guides-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .small-article {
            flex-direction: column;
            text-align: center;
          }

          .small-article-image {
            width: 100%;
            height: 200px;
          }

          .newsletter-content {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }

          .newsletter-text,
          .newsletter-form-wrapper {
            width: 100%;
            margin-left: 0;
          }

          .newsletter-title {
            font-size: 24px;
          }

          .form-input-group {
            flex-direction: column;
            gap: 15px;
          }

          .newsletter-submit {
            left: 0;
            border-radius: 4px;
          }

          .footer-main {
            flex-direction: column;
            gap: 40px;
          }

          .footer-brand-section,
          .footer-links-section {
            width: 100%;
          }

          .footer-brand-content {
            padding-right: 0;
            text-align: center;
          }

          .footer-column-title {
            text-align: center;
          }

          .brands-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .makes-grid,
          .models-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .make-button,
          .model-button {
            padding: 10px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
