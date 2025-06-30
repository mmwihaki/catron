"use client";

import React, { useState, useEffect } from "react";

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
  const [showMoreMakes, setShowMoreMakes] = useState(false);
  const [showMoreModels, setShowMoreModels] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const nissanMakes = ["Nissan"];

  const nissanModels = [
    {
      name: "Note",
      generations: ["E11", "E12 DIG-S", "E12 e-Power", "E12 Puredrive", "E12"],
    },
    { name: "Sylphy", generations: ["B17"] },
    { name: "Serena", generations: ["C27 e-Power", "C25"] },
    { name: "AdVan", generations: ["Y12"] },
    { name: "Wingroad", generations: ["Y12"] },
    { name: "NV200 Vanette", generations: ["M20"] },
    { name: "Kicks", generations: ["D15 e-Power"] },
    { name: "X-Trail", generations: ["T31", "T32"] },
    { name: "March", generations: ["K13", "K12"] },
    { name: "Tiida", generations: ["C11"] },
    { name: "TiidaLatio", generations: ["SC11"] },
    { name: "Latio", generations: ["N17"] },
    { name: "Bluebird Sylphy", generations: ["G11"] },
    { name: "Dualis", generations: ["J10"] },
    { name: "Teana", generations: ["J32", "L33"] },
    { name: "NV350 Caravan", generations: ["E26"] },
    { name: "Elgrand", generations: ["E52"] },
    { name: "Murano", generations: ["Z50"] },
    { name: "Lafesta", generations: ["B30"] },
    { name: "Juke", generations: ["F15"] },
    { name: "Cube", generations: ["Z11", "Z12"] },
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

  const renderStars = (rating) => {
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
    "Engine Parts",
    "Air Filters",
    "Oil Filters",
    "Cabin Filters",
    "Spark Plugs",
    "Brake System",
    "Suspension",
    "Exhaust System",
    "Electrical",
    "Cooling System",
    "Transmission",
    "Headlight Bulbs",
    "Exterior Parts",
    "Interior Parts",
  ];

  const navLinks = [
    "Home",
    "Shop",
    "Product",
    "Vendor",
    "Mega Menu",
    "Blog",
    "Pages",
    "Contact Us",
  ];

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
                🔍
              </button>
            </div>
          </div>

          <div className="header-actions">
            <div className="action-item">
              <span className="action-icon">💗</span>
              <span className="action-text">Wishlist</span>
            </div>
            <div className="action-item">
              <span className="action-icon">🛒</span>
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
          <div className="categories-dropdown">
            <button className="categories-btn">☰ All Categories</button>
          </div>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
              >
                {link}
              </a>
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
        <div className="hero-content">
          <div className="hero-badge">PREMIUM AUTO PARTS</div>
          <h1 className="hero-title">
            Quality Parts for
            <br />
            Your Vehicle
          </h1>
          <p className="hero-subtitle">
            Find OEM and aftermarket parts for all vehicle makes and models
          </p>

          <div className="vehicle-search-form">
            <h3>Search by Vehicle</h3>
            <div className="form-row">
              <select
                value={vehicleYear}
                onChange={(e) => setVehicleYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {Array.from({ length: 25 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>

              <select
                value={vehicleBrand}
                onChange={(e) => setVehicleBrand(e.target.value)}
              >
                <option value="">Select Brand</option>
                <option value="Nissan">Nissan</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Mazda">Mazda</option>
                <option value="Subaru">Subaru</option>
              </select>

              <select
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
              >
                <option value="">Select Model</option>
                {nissanModels.map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>

              <select
                value={vehicleEngine}
                onChange={(e) => setVehicleEngine(e.target.value)}
              >
                <option value="">Select Engine</option>
                {Object.entries(engineSpecs).map(([code, spec]) => (
                  <option key={code} value={code}>
                    {code} - {spec}
                  </option>
                ))}
              </select>

              <select
                value={vehicleFuelType}
                onChange={(e) => setVehicleFuelType(e.target.value)}
              >
                <option value="">Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>

              <button
                className="search-submit-btn"
                onClick={handleVehicleSearch}
              >
                Search Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          <h2 className="section-title">Shop by Categories</h2>
          <div className="categories-grid">
            {[
              {
                name: "Engine Parts",
                image:
                  "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "245 Products",
              },
              {
                name: "Air Filters",
                image:
                  "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "189 Products",
              },
              {
                name: "Oil Filters",
                image:
                  "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "167 Products",
              },
              {
                name: "Brake System",
                image:
                  "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "234 Products",
              },
              {
                name: "Suspension",
                image:
                  "https://images.pexels.com/photos/244824/pexels-photo-244824.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "145 Products",
              },
              {
                name: "Electrical",
                image:
                  "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "267 Products",
              },
            ]
              .slice(0, showMoreCategories ? 6 : 4)
              .map((category, index) => (
                <div key={index} className="category-card">
                  <a
                    href={`#category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="category-link"
                  >
                    <div className="category-image">
                      <img src={category.image} alt={category.name} />
                    </div>
                    <div className="category-info">
                      <h3 className="category-name">{category.name}</h3>
                      <p className="category-count">{category.count}</p>
                    </div>
                  </a>
                </div>
              ))}
          </div>
          <div className="load-more-container">
            <button
              className="load-more-button"
              onClick={() => setShowMoreCategories(!showMoreCategories)}
            >
              {showMoreCategories ? "Show Less" : "Load More"}
            </button>
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
              <a href="/shop?search_type=parts" className="see-all-link">
                <span>View More Products</span>
                <i className="fas fa-chevron-right"></i>
              </a>
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
                        <a
                          href={`#category-${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="category-link"
                        >
                          {product.category}
                        </a>
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

      {/* Featured Makes/Models Section */}
      <section className="featured-makes-section">
        <div className="featured-makes-container">
          <div className="featured-header">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === "makes" ? "active" : ""}`}
                onClick={() => setActiveTab("makes")}
              >
                <span>Featured Makes</span>
              </button>
              <button
                className={`tab-button ${activeTab === "models" ? "active" : ""}`}
                onClick={() => setActiveTab("models")}
              >
                <span>Featured Models</span>
              </button>
            </div>
          </div>

          <div className="featured-content">
            {activeTab === "makes" && (
              <div className="makes-grid">
                {[
                  "Nissan",
                  "Toyota",
                  "Honda",
                  "Mazda",
                  "Subaru",
                  "Mitsubishi",
                  "Suzuki",
                  "Daihatsu",
                ]
                  .slice(0, showMoreMakes ? 8 : 6)
                  .map((make) => (
                    <button key={make} className="make-button">
                      {make}
                    </button>
                  ))}
              </div>
            )}

            {activeTab === "models" && (
              <div className="models-grid">
                {nissanModels.slice(0, showMoreModels ? 12 : 8).map((model) => (
                  <button key={model.name} className="model-button">
                    {model.name}
                  </button>
                ))}
              </div>
            )}

            <div className="view-more-container">
              <button
                className="view-more-button"
                onClick={() => {
                  if (activeTab === "makes") {
                    setShowMoreMakes(!showMoreMakes);
                  } else {
                    setShowMoreModels(!showMoreModels);
                  }
                }}
              >
                {(activeTab === "makes" ? showMoreMakes : showMoreModels)
                  ? "Show Less"
                  : "View More"}
              </button>
            </div>
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
                      <a
                        href={`#category-${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="category-link"
                      >
                        {product.category}
                      </a>
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

          <div className="view-more-container">
            <a href="/shop?search_type=bestsellers" className="view-more-btn">
              View More Products
            </a>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="new-arrivals-container">
          <div className="new-arrivals-header">
            <div className="header-content">
              <h2 className="new-arrivals-title">New Arrivals</h2>
              <a href="/shop?search_type=new-arrivals" className="see-all-link">
                <span>See All Products</span>
                <i className="fas fa-chevron-right"></i>
              </a>
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
                      <a
                        href={`#category-${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="category-link"
                      >
                        {product.category}
                      </a>
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

          <div className="view-more-container">
            <a href="/shop?search_type=new-arrivals" className="view-more-btn">
              View More Products
            </a>
          </div>
        </div>
      </section>

      {/* Tips & Guides Section */}
      <section className="tips-guides-section">
        <div className="tips-guides-container">
          <div className="section-header">
            <h2 className="section-title">Tips & Guides</h2>
            <a href="/blog" className="view-all-link">
              See All Articles
              <i className="fas fa-chevron-right"></i>
            </a>
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-section">
              <div className="footer-logo">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593?format=webp&width=150"
                  alt="Catron Auto Parts"
                  className="footer-logo-image"
                />
                <p className="footer-description">
                  Your trusted partner for premium auto parts and accessories.
                  Quality guaranteed with every purchase.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    📘
                  </a>
                  <a href="#" className="social-link">
                    📷
                  </a>
                  <a href="#" className="social-link">
                    🐦
                  </a>
                  <a href="#" className="social-link">
                    📺
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/categories">Categories</a>
                </li>
                <li>
                  <a href="/brands">Brands</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Categories</h4>
              <ul className="footer-links">
                <li>
                  <a href="/category/engine-parts">Engine Parts</a>
                </li>
                <li>
                  <a href="/category/air-filters">Air Filters</a>
                </li>
                <li>
                  <a href="/category/brake-system">Brake System</a>
                </li>
                <li>
                  <a href="/category/suspension">Suspension</a>
                </li>
                <li>
                  <a href="/category/electrical">Electrical</a>
                </li>
                <li>
                  <a href="/category/exhaust">Exhaust System</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Customer Service</h4>
              <ul className="footer-links">
                <li>
                  <a href="/help">Help Center</a>
                </li>
                <li>
                  <a href="/shipping">Shipping Info</a>
                </li>
                <li>
                  <a href="/returns">Returns</a>
                </li>
                <li>
                  <a href="/warranty">Warranty</a>
                </li>
                <li>
                  <a href="/track-order">Track Your Order</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+254 700 000 000</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@catron.co.ke</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>Mon-Fri: 8AM-6PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-container">
              <div className="footer-bottom-left">
                <p>&copy; 2024 Catron Auto Parts. All rights reserved.</p>
              </div>
              <div className="footer-bottom-right">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookies">Cookie Policy</a>
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
          background: linear-gradient(
            135deg,
            rgb(247, 51, 18) 0%,
            rgb(220, 40, 15) 100%
          );
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-badge {
          background: rgba(255, 255, 255, 0.2);
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .hero-title {
          font-size: 60px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        /* Vehicle Search Form */
        .vehicle-search-form {
          background: white;
          border-radius: 8px;
          padding: 30px;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
        }

        .vehicle-search-form h3 {
          margin-bottom: 20px;
          color: rgb(247, 51, 18);
          font-size: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .form-row select {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .search-submit-btn {
          grid-column: span 3;
          background: rgb(247, 51, 18);
          color: white;
          border: none;
          padding: 15px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 10px;
        }

        .search-submit-btn:hover {
          background: rgb(220, 40, 15);
        }

        /* Categories Section */
        .categories-section {
          padding: 65px 0;
          background: white;
        }

        .categories-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 35px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          color: #333;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .category-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
        }

        .category-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .category-image {
          height: 200px;
          overflow: hidden;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-info {
          padding: 20px;
          text-align: center;
        }

        .category-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #333;
        }

        .category-count {
          color: #666;
          font-size: 14px;
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

        .makes-grid,
        .models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }

        .make-button,
        .model-button {
          padding: 15px 20px;
          border: 2px solid rgb(212, 212, 212);
          background: white;
          color: #333;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .make-button:hover,
        .model-button:hover {
          border-color: rgb(247, 51, 18);
          color: rgb(247, 51, 18);
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

        /* Footer */
        .footer {
          background: rgb(30, 30, 31);
          color: white;
        }

        .footer-content {
          background: rgb(30, 30, 31);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 40px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-section {
          min-width: 0;
        }

        .footer-logo {
          margin-bottom: 20px;
        }

        .footer-logo-image {
          width: 150px;
          height: auto;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
        }

        .footer-description {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgb(247, 51, 18);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .social-link:hover {
          background: rgb(220, 40, 15);
        }

        .footer-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: rgb(247, 51, 18);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ccc;
        }

        .contact-item i {
          color: rgb(247, 51, 18);
          width: 16px;
        }

        .footer-bottom {
          border-top: 1px solid rgb(60, 60, 61);
          padding: 20px 0;
        }

        .footer-bottom-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .footer-bottom-left p {
          margin: 0;
          color: #ccc;
          font-size: 14px;
        }

        .footer-bottom-right {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-right a {
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-bottom-right a:hover {
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

          .form-row {
            grid-template-columns: 1fr;
          }

          .search-submit-btn {
            grid-column: span 1;
          }

          .categories-grid,
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

          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .footer-bottom-container {
            flex-direction: column;
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
