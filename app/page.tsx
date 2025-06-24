"use client";

import { useState, useEffect } from "react";

export default function BratorHomePage() {
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleEngine, setVehicleEngine] = useState("");
  const [vehicleFuelType, setVehicleFuelType] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [activeTab, setActiveTab] = useState("models");
  const [showMoreMakes, setShowMoreMakes] = useState(false);
  const [showMoreModels, setShowMoreModels] = useState(false);

  const nissanMakes = ["Nissan", "Infiniti", "Datsun", "Nismo"];

  const nissanModels = [
    "Altima",
    "Sentra",
    "Maxima",
    "Versa",
    "Rogue",
    "Murano",
    "Pathfinder",
    "Armada",
    "Frontier",
    "Titan",
    "370Z",
    "GT-R",
    "Leaf",
    "Kicks",
    "Juke",
    "X-Trail",
    "Navara",
    "Note",
    "Qashqai",
    "Micra",
    "Sylphy",
    "Teana",
    "Patrol",
    "Sunny",
  ];

  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [isProductAutoPlaying, setIsProductAutoPlaying] = useState(true);

  const essentialProducts = [
    {
      id: 1,
      name: "M195 METHOS Black with Bronze Face",
      category: "Air Filters",
      price: 32.0,
      originalPrice: null,
      rating: 4.5,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "#product-1",
    },
    {
      id: 2,
      name: "CF2 FORGED COMPRESSION",
      category: "Custom Wheels",
      price: 42.0,
      originalPrice: 45.0,
      rating: 5.0,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: "7% Off",
      link: "#product-2",
    },
    {
      id: 3,
      name: "SV-F4 Matte Bronze with Chrome Flip",
      category: "Fluids & Chemicals",
      price: 45.0,
      originalPrice: null,
      rating: 5.0,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "#product-3",
    },
    {
      id: 4,
      name: "ABL-24 BETA Gloss Black",
      category: "Air Filters",
      price: 18.0,
      originalPrice: null,
      rating: 4.5,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/9666305/pexels-photo-9666305.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "#product-4",
    },
    {
      id: 5,
      name: "Brand Name CV10 Satin Black with Chrome",
      category: "Air Filters",
      price: 18.0,
      originalPrice: 20.0,
      rating: 5.0,
      reviews: 1,
      image:
        "https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: "10% Off",
      link: "#product-5",
    },
    {
      id: 6,
      name: "Silver with Mirror Cut Face Wheels",
      category: "Exteriors",
      price: 19.0,
      originalPrice: null,
      rating: 5.0,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/10912797/pexels-photo-10912797.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "#product-6",
    },
    {
      id: 7,
      name: "M249 GAMMA Silver with Full Chrome",
      category: "Interiors",
      price: 16.0,
      originalPrice: 18.0,
      rating: 4.5,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: "11% Off",
      link: "#product-7",
    },
    {
      id: 8,
      name: "M195 METHOS Black with Bronze Face",
      category: "Clearance",
      price: 90.0,
      originalPrice: null,
      rating: 5.0,
      reviews: 2,
      image:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "#product-8",
    },
  ];

  // Auto-play functionality for products
  useEffect(() => {
    if (!isProductAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentProductSlide((prev) => {
        const itemsPerView = 4;
        const maxSlide = Math.max(0, essentialProducts.length - itemsPerView);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isProductAutoPlaying, essentialProducts.length]);

  const nextProductSlide = () => {
    const itemsPerView = 4;
    const maxSlide = Math.max(0, essentialProducts.length - itemsPerView);
    setCurrentProductSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevProductSlide = () => {
    const itemsPerView = 4;
    const maxSlide = Math.max(0, essentialProducts.length - itemsPerView);
    setCurrentProductSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

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

  const categoriesData = [
    {
      title: "Auto Parts",
      description: "Engine Components, Filters",
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#auto-parts",
      width: 120,
      height: 80,
    },
    {
      title: "Car Care",
      description: "Polishes, Cleaners",
      image:
        "https://images.pexels.com/photos/9666305/pexels-photo-9666305.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#car-care",
      width: 120,
      height: 80,
    },
    {
      title: "Performance",
      description: "Brakes, Batteries, Turbo",
      image:
        "https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#performance",
      width: 120,
      height: 80,
    },
    {
      title: "Wheels & Tires",
      description: "Tires, TMPS Sensor",
      image:
        "https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#wheels-tires",
      width: 120,
      height: 80,
    },
    {
      title: "Exteriors",
      description: "Lighting, Body, Wipers",
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#exteriors",
      width: 120,
      height: 80,
    },
    {
      title: "Interiors",
      description: "Steering Wheels, Seats",
      image:
        "https://images.pexels.com/photos/9666305/pexels-photo-9666305.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#interiors",
      width: 120,
      height: 80,
    },
    {
      title: "Entertainment",
      description: "Audios, Videos, GPS",
      image:
        "https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#entertainment",
      width: 120,
      height: 80,
    },
    {
      title: "Exhaust System",
      description: "Headers, Mufflers",
      image:
        "https://images.pexels.com/photos/10912797/pexels-photo-10912797.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#exhaust-system",
      width: 120,
      height: 80,
    },
    {
      title: "Suspension",
      description: "Springs, Shock Absorbers",
      image:
        "https://images.pexels.com/photos/10912797/pexels-photo-10912797.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#suspension",
      width: 120,
      height: 80,
    },
    {
      title: "Air Filters",
      description: "Air intake, filters",
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#air-filters",
      width: 120,
      height: 80,
    },
    {
      title: "Starting & Charging",
      description: "Batteries, Starters",
      image:
        "https://images.pexels.com/photos/9666305/pexels-photo-9666305.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#starting-charging",
      width: 120,
      height: 80,
    },
    {
      title: "Wipers & Washers",
      description: "Wiper Blades, Cleaners",
      image:
        "https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#wipers-washers",
      width: 120,
      height: 80,
    },
    {
      title: "Fluids & Chemicals",
      description: "Oils, Lubricants",
      image:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#fluids-chemicals",
      width: 120,
      height: 80,
    },
    {
      title: "Tools & Supplies",
      description: "Repair Tools, Equipment",
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=200",
      link: "#tools-supplies",
      width: 120,
      height: 80,
    },
  ];

  const hotDealsData = [
    {
      id: 1,
      backgroundImage:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800",
      subtitle: "Keep things running smoothly",
      title: "Premium Engine Oils",
      titleClass: "helix-title",
      buttonText: "Shop Now",
      link: "#helix-oils",
    },
    {
      id: 2,
      backgroundImage:
        "https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Wheels & Tires",
      titleClass: "dunlop-title",
      badge: "Best Choice",
      badgeColor: "#fbab00",
      buttonText: "Shop Now",
      link: "#dunlop-tires",
    },
    {
      id: 3,
      backgroundImage:
        "https://images.pexels.com/photos/10912797/pexels-photo-10912797.jpeg?auto=compress&cs=tinysrgb&w=800",
      subtitle: "Big Season Sale Of The Year",
      title: "35% OFF",
      titleClass: "sale-title",
      description: "Shock Absorbers & Springs",
      buttonText: "Shop Now",
      link: "#shock-absorbers",
    },
    {
      id: 4,
      backgroundImage:
        "https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Super Saver",
      titleClass: "super-saver-title",
      subtitle: "Sale up to 70% for over 8,000 products",
      promoCode: "SUPER70",
      badgeColor: "#7faf2b",
      buttonText: "Shop Now",
      link: "#super-saver",
    },
  ];

  const categories = [
    "All Categories",
    "Auto Parts",
    "Wheels & Tires",
    "Clearance",
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
            <span className="black-friday">BLACK FRIDAY</span> | Discount up to{" "}
            <span className="discount">50%</span> use code:{" "}
            <span className="promo-code">Brator50</span>
          </span>
          <div className="language-selector">
            Language: <span className="current-lang">EN</span> ▼
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-section">
            <div className="logo">
              <div className="logo-icon">
                <div className="logo-bars">
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                </div>
              </div>
              <span className="logo-text">Brator</span>
            </div>
          </div>

          {/* Search Section */}
          <div className="search-section">
            <div className="search-container">
              <select
                className="search-category"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Auto Parts">Auto Parts</option>
                <option value="Wheels & Tires">Wheels & Tires</option>
                <option value="Accessories">Accessories</option>
              </select>
              <input
                type="text"
                placeholder="Search by Part Name, Brand, Model, Size..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            <button className="action-btn wishlist-btn">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button className="action-btn cart-btn">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6 0a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
              {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
            </button>
            <button className="action-btn sign-in-btn">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="main-navigation">
        <div className="nav-container">
          <button className="all-categories-btn">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            All Categories
          </button>
          <div className="nav-links">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Auto Parts
            </a>
            <a href="#" className="nav-link">
              Wheels & Tires
            </a>
            <a href="#" className="nav-link">
              Clearance
            </a>
            <a href="#" className="nav-link">
              Pages
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </div>
          <div className="nav-actions">
            <a href="#" className="nav-action">
              📋 Track Order
            </a>
            <a href="#" className="nav-action">
              👁️ Recently Viewed
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">#1 ONLINE MARKETPLACE</div>
              <h1 className="hero-title">Car Spares OEM & Aftermarkets</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Search Section */}
      <section className="vehicle-search-section">
        <div className="vehicle-search-container">
          <h2 className="search-title">Search by Vehicle</h2>
          <p className="search-subtitle">
            Filter your results by entering your vehicle to ensure you find the
            parts that fit.
          </p>

          <div className="vehicle-search-form">
            <div className="form-row">
              <div className="form-group">
                <select
                  className="form-select"
                  value={vehicleYear}
                  onChange={(e) => setVehicleYear(e.target.value)}
                >
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-select"
                  value={vehicleBrand}
                  onChange={(e) => setVehicleBrand(e.target.value)}
                >
                  <option value="">Brand</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Honda">Honda</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Subaru">Subaru</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-select"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                >
                  <option value="">Model</option>
                  <option value="Camry">Camry</option>
                  <option value="Corolla">Corolla</option>
                  <option value="Altima">Altima</option>
                  <option value="Civic">Civic</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-select"
                  value={vehicleEngine}
                  onChange={(e) => setVehicleEngine(e.target.value)}
                >
                  <option value="">Engine</option>
                  <option value="1.5L">1.5L</option>
                  <option value="2.0L">2.0L</option>
                  <option value="2.5L">2.5L</option>
                  <option value="3.0L">3.0L</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-select"
                  value={vehicleFuelType}
                  onChange={(e) => setVehicleFuelType(e.target.value)}
                >
                  <option value="">Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <button
                className="search-vehicle-btn"
                onClick={handleVehicleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          <div className="categories-header">
            <h2 className="categories-title">Shop by Categories</h2>
          </div>

          <div className="categories-grid">
            {categoriesData.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image-container">
                  <a href={category.link} className="category-link">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="category-image"
                      width={category.width}
                      height={category.height}
                    />
                  </a>
                </div>
                <div className="category-content">
                  <p className="category-name">
                    <a href={category.link} className="category-title-link">
                      {category.title}
                    </a>
                  </p>
                  <div className="category-description">
                    {category.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more-container">
            <button className="load-more-button">Load More</button>
          </div>
        </div>
      </section>

      {/* What's Hot Section */}
      <section className="whats-hot-section">
        <div className="whats-hot-container">
          <div className="whats-hot-header">
            <h2 className="whats-hot-title">What's Hot</h2>
          </div>

          <div className="hot-deals-grid">
            {hotDealsData.map((deal, index) => (
              <div key={deal.id} className="hot-deal-card">
                <div
                  className="deal-background"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${deal.backgroundImage})`,
                  }}
                >
                  <div className="deal-content">
                    <div className="deal-top">
                      {deal.subtitle && (
                        <p className="deal-subtitle">{deal.subtitle}</p>
                      )}
                      <h2 className={`deal-title ${deal.titleClass}`}>
                        {deal.title.split(" ").map((word, i) => (
                          <span key={i}>
                            {word}
                            {i < deal.title.split(" ").length - 1 && <br />}
                          </span>
                        ))}
                      </h2>
                      {deal.description && (
                        <h3 className="deal-description">{deal.description}</h3>
                      )}
                      {deal.badge && (
                        <div
                          className="deal-badge"
                          style={{ backgroundColor: deal.badgeColor }}
                        >
                          <span>{deal.badge}</span>
                        </div>
                      )}
                      {deal.promoCode && (
                        <div
                          className="promo-code-badge"
                          style={{ backgroundColor: deal.badgeColor }}
                        >
                          <div className="promo-content">
                            <span className="promo-text">USE Code</span>
                            <span className="promo-divider">|</span>
                            <span className="promo-code">{deal.promoCode}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="deal-bottom">
                      <a href={deal.link} className="deal-button">
                        {deal.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Nissan Models Section */}
      <section className="featured-models-section">
        <div className="featured-models-container">
          <div className="featured-models-tabs">
            <button
              className={`tab-button ${activeTab === "makes" ? "inactive" : ""}`}
              onClick={() => setActiveTab("makes")}
            >
              Featured Makes
            </button>
            <button
              className={`tab-button ${activeTab === "models" ? "active" : ""}`}
              onClick={() => setActiveTab("models")}
            >
              Featured Models
            </button>
          </div>

          {activeTab === "makes" && (
            <div className="featured-content">
              <div className="models-grid">
                {nissanMakes
                  .slice(0, showMoreMakes ? nissanMakes.length : 20)
                  .map((make, index) => (
                    <div key={index} className="model-card">
                      <a href={`#${make.toLowerCase()}`} className="model-link">
                        <span>{make}</span>
                      </a>
                    </div>
                  ))}
              </div>
              <div className="view-more-container">
                <button
                  className="view-more-button"
                  onClick={() => setShowMoreMakes(!showMoreMakes)}
                >
                  <span className="view-more-text">
                    <strong>{showMoreMakes ? "VIEW LESS" : "VIEW MORE"}</strong>
                    <i
                      className={`fas ${showMoreMakes ? "fa-chevron-up" : "fa-chevron-down"}`}
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "models" && (
            <div className="featured-content">
              <div className="models-grid">
                {nissanModels
                  .slice(0, showMoreModels ? nissanModels.length : 20)
                  .map((model, index) => (
                    <div key={index} className="model-card">
                      <a
                        href={`#${model.toLowerCase()}`}
                        className="model-link"
                      >
                        <span>{model}</span>
                      </a>
                    </div>
                  ))}
              </div>
              <div className="view-more-container">
                <button
                  className="view-more-button"
                  onClick={() => setShowMoreModels(!showMoreModels)}
                >
                  <span className="view-more-text">
                    <strong>
                      {showMoreModels ? "VIEW LESS" : "VIEW MORE"}
                    </strong>
                    <i
                      className={`fas ${showMoreModels ? "fa-chevron-up" : "fa-chevron-down"}`}
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          )}
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
              <a href="#all-products" className="see-all-link">
                <span>See All Products</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="products-carousel-wrapper">
            <button
              className="products-nav products-prev"
              onClick={prevProductSlide}
              onMouseEnter={() => setIsProductAutoPlaying(false)}
              onMouseLeave={() => setIsProductAutoPlaying(true)}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              className="products-nav products-next"
              onClick={nextProductSlide}
              onMouseEnter={() => setIsProductAutoPlaying(false)}
              onMouseLeave={() => setIsProductAutoPlaying(true)}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="products-carousel-container">
              <div
                className="products-carousel-track"
                style={{
                  transform: `translateX(-${currentProductSlide * 25}%)`,
                }}
              >
                {essentialProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-card-inner">
                      {product.discount && (
                        <div className="product-discount-badge">
                          {product.discount}
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
                              <span className="rating-text">
                                Rated{" "}
                                <strong>{product.rating.toFixed(2)}</strong> out
                                of 5
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
                                  <span className="currency">$</span>
                                  <span>
                                    {product.originalPrice.toFixed(2)}
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
                              <span className="currency">$</span>
                              <span>{product.price.toFixed(2)}</span>
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
        </div>
      </section>

      <style jsx>{`
        .homepage {
          font-family: "Source Sans Pro", sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Promo Banner */
        .promo-banner {
          background-color: #1a1a1a;
          color: white;
          padding: 8px 0;
          font-size: 14px;
        }

        .promo-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .black-friday {
          color: #ff4444;
          font-weight: bold;
        }

        .discount {
          color: #ffdd44;
          font-weight: bold;
        }

        .promo-code {
          color: #44ff44;
          font-weight: bold;
        }

        .language-selector {
          color: #ccc;
        }

        .current-lang {
          color: white;
          font-weight: bold;
        }

        /* Main Header */
        .main-header {
          background-color: white;
          border-bottom: 1px solid #eee;
          padding: 15px 0;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          width: 35px;
          height: 35px;
          position: relative;
        }

        .logo-bars {
          display: flex;
          flex-direction: column;
          gap: 3px;
          transform: rotate(45deg);
        }

        .bar {
          height: 6px;
          border-radius: 3px;
        }

        .bar-1 {
          width: 20px;
          background: linear-gradient(45deg, #ff4444, #ff6600);
        }

        .bar-2 {
          width: 25px;
          background: linear-gradient(45deg, #ff6600, #ffaa00);
        }

        .bar-3 {
          width: 15px;
          background: linear-gradient(45deg, #ffaa00, #ffdd44);
        }

        .logo-text {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          font-family: "Playfair Display", serif;
        }

        /* Search Section */
        .search-section {
          flex: 1;
          max-width: 600px;
        }

        .search-container {
          display: flex;
          border: 2px solid #ff4444;
          border-radius: 8px;
          overflow: hidden;
        }

        .search-category {
          background-color: #f8f8f8;
          border: none;
          padding: 12px 15px;
          font-size: 14px;
          color: #333;
          border-right: 1px solid #ddd;
          cursor: pointer;
          outline: none;
        }

        .search-input {
          flex: 1;
          border: none;
          padding: 12px 15px;
          font-size: 14px;
          outline: none;
        }

        .search-input::placeholder {
          color: #999;
        }

        .search-button {
          background-color: #ff4444;
          border: none;
          padding: 12px 20px;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .search-button:hover {
          background-color: #dd3333;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #333;
          padding: 8px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }

        .action-btn:hover {
          background-color: #f5f5f5;
        }

        .cart-btn {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: #ff4444;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Navigation */
        .main-navigation {
          background-color: #f8f8f8;
          border-bottom: 1px solid #ddd;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .all-categories-btn {
          background-color: #ff4444;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .all-categories-btn:hover {
          background-color: #dd3333;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          flex: 1;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          padding: 15px 0;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ff4444;
        }

        .nav-actions {
          display: flex;
          gap: 20px;
        }

        .nav-action {
          text-decoration: none;
          color: #666;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .nav-action:hover {
          color: #ff4444;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 400px;
          background:
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url("https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=1920");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          text-align: center;
          color: white;
        }

        .hero-badge {
          background-color: rgba(255, 68, 68, 0.9);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: bold;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-family: "Playfair Display", serif;
        }

        /* Vehicle Search Section */
        .vehicle-search-section {
          background-color: white;
          padding: 40px 0;
          border-top: 1px solid #eee;
        }

        .vehicle-search-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .search-title {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
          font-family: "Playfair Display", serif;
        }

        .search-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        .vehicle-search-form {
          max-width: 900px;
          margin: 0 auto;
        }

        .form-row {
          display: flex;
          gap: 15px;
          align-items: end;
        }

        .form-group {
          flex: 1;
        }

        .form-select {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          color: #333;
          background-color: white;
          cursor: pointer;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .form-select:focus {
          border-color: #ff4444;
        }

        .search-vehicle-btn {
          background-color: #ff4444;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
          min-width: 120px;
        }

        .search-vehicle-btn:hover {
          background-color: #dd3333;
        }

        /* Categories Section */
        .categories-section {
          background-color: #f2f2f7;
          padding: 75px 0;
        }

        .categories-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .categories-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 35px;
          width: 100%;
        }

        .categories-title {
          font-family: "Playfair Display", serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
          margin: 0;
          color: #333;
        }
        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          align-items: flex-start;
          justify-content: center;
        }

        .category-card {
          background-color: white;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          text-align: center;
          transition: all 0.3s ease;
          width: calc(16.6667% - 30px);
          min-width: 200px;
          max-width: calc(16.6667% - 30px);
          padding: 60px 17px 25px;
          margin-bottom: 30px;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .category-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          margin-bottom: 30px;
        }

        .category-link {
          display: grid;
          place-items: center;
          text-decoration: none;
          cursor: pointer;
        }

        .category-image {
          max-width: 114px;
          height: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-image {
          transform: scale(1.1);
        }

        .category-content {
          margin-top: auto;
          text-align: center;
        }

        .category-name {
          margin: 0 0 8px 0;
        }

        .category-title-link {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          text-align: center;
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .category-title-link:hover {
          color: #ff4444;
        }

        .category-description {
          font-size: 12px;
          color: #666;
          text-align: center;
        }

        .load-more-container {
          margin-top: 50px;
          text-align: center;
        }

        .load-more-button {
          background-color: white;
          border: 0.8px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          font-family: Arial, sans-serif;
          font-weight: 700;
          height: 52px;
          line-height: 16px;
          padding: 15px 53px;
          text-align: center;
          text-transform: capitalize;
          transition: all 0.3s ease;
          color: #333;
        }

        .load-more-button:hover {
          background-color: #ff4444;
          color: white;
          border-color: #ff4444;
        }

        /* What's Hot Section */
        .whats-hot-section {
          background-color: white;
          padding: 90px 0;
        }

        .whats-hot-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .whats-hot-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 35px;
          width: 100%;
        }

        .whats-hot-title {
          font-family: "Playfair Display", serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
          margin: 0;
          color: #333;
          position: relative;
        }

        .hot-deals-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .hot-deal-card {
          position: relative;
        }

        .deal-background {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 4px;
          height: 450px;
          padding: 40px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: white;
        }

        .deal-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .deal-subtitle {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 18px;
          line-height: 28px;
          margin-bottom: 15px;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .deal-title {
          font-family: "Playfair Display", serif;
          position: relative;
          transition: all 0.6s ease;
          margin: 0;
          line-height: 1.1;
        }

        .helix-title {
          font-size: 35px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .dunlop-title {
          font-size: 30px;
          font-weight: 700;
          line-height: 36px;
        }

        .sale-title {
          font-size: 60px;
          font-weight: 700;
          line-height: 72px;
          color: #f73312;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        .super-saver-title {
          font-size: 32px;
          font-style: italic;
          font-weight: 800;
          line-height: 38px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .deal-description {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 14px;
          line-height: 18px;
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 8px 0;
        }

        .deal-badge {
          display: inline-flex;
          border-radius: 3px;
          margin: 20px 0 8px 0;
          padding: 0 10px;
          align-items: center;
        }

        .deal-badge span {
          color: white;
          font-size: 12px;
          font-weight: 600;
          line-height: 22px;
          text-transform: uppercase;
          font-family: "Source Sans Pro", sans-serif;
          letter-spacing: 0.5px;
        }

        .promo-code-badge {
          display: inline-flex;
          border-radius: 3px;
          margin: 5px 0 8px 0;
          padding: 0 10px;
        }

        .promo-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .promo-text {
          color: white;
          font-size: 12px;
          font-weight: 300;
          line-height: 22px;
          text-transform: uppercase;
          font-family: "Source Sans Pro", sans-serif;
        }

        .promo-divider {
          color: white;
          font-size: 12px;
          font-weight: 300;
          line-height: 22px;
          opacity: 0.5;
          padding: 0 8px;
        }

        .promo-code {
          color: white;
          font-size: 12px;
          font-weight: 700;
          line-height: 22px;
          text-transform: uppercase;
          font-family: "Source Sans Pro", sans-serif;
          letter-spacing: 1px;
        }

        .deal-button {
          background-color: #f73312;
          border: 1.6px solid #f73312;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          height: 40px;
          line-height: 15px;
          padding: 10px 25px;
          text-decoration: none;
          text-transform: capitalize;
          transition: all 0.3s ease;
          font-family: "Source Sans Pro", sans-serif;
          letter-spacing: 0.5px;
        }

        .deal-button:hover {
          background-color: #d62912;
          border-color: #d62912;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(247, 51, 18, 0.3);
        }

        /* Featured Nissan Models Section */
        .featured-models-section {
          background-color: white;
          padding: 85px 0 0 0;
        }

        .featured-models-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .featured-models-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 35px;
        }

        .tab-button {
          background: none;
          border: none;
          cursor: pointer;
          font-family: "Playfair Display", serif;
          font-size: 30px;
          font-weight: 400;
          color: #999;
          margin: 0 28px;
          padding: 10px 0;
          position: relative;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .tab-button.active {
          font-weight: 700;
          color: #333;
        }

        .tab-button.inactive {
          color: #999;
        }

        .tab-button:hover {
          color: #ff4444;
        }

        .featured-content {
          width: 100%;
        }

        .models-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-right: -15px;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .model-card {
          background-color: white;
          border: 0.8px solid #d3d3d3;
          border-radius: 3px;
          padding: 10px 15px;
          width: calc(20% - 15px);
          transition: all 0.3s ease;
        }

        .model-card:hover {
          border-color: #ff4444;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 68, 68, 0.15);
        }

        .model-link {
          cursor: pointer;
          line-height: 16px;
          position: relative;
          text-decoration: none;
          color: #333;
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .model-link:hover {
          color: #ff4444;
        }

        .model-link span {
          cursor: pointer;
          display: inline;
        }

        .view-more-container {
          padding: 70px 0;
          text-align: center;
        }

        .view-more-button {
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: "Source Sans Pro", sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: normal;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .view-more-button:hover {
          color: #ff4444;
        }

        .view-more-text {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .view-more-text i {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        /* Essential Items Section */
        .essential-items-section {
          background-color: #f2f2f7;
          padding: 65px 0 5px 0;
          max-width: 1520px;
          margin: 0 auto;
        }

        .essential-items-container {
          padding: 0 12px;
          width: 100%;
        }

        .essential-items-header {
          margin-bottom: 35px;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .essential-items-title {
          font-family: "Playfair Display", serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
          margin: 0;
          color: #333;
        }

        .see-all-link {
          display: flex;
          align-items: center;
          color: #666;
          text-decoration: none;
          font-size: 14px;
          line-height: 22px;
          font-family: "Source Sans Pro", sans-serif;
          transition: color 0.3s ease;
        }

        .see-all-link:hover {
          color: #ff4444;
        }

        .see-all-link i {
          margin-left: 10px;
          font-size: 16px;
          position: relative;
          top: 2px;
        }

        .products-carousel-wrapper {
          position: relative;
        }

        .products-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .products-nav:hover {
          background-color: #ff4444;
          transform: translateY(-50%) scale(1.1);
        }

        .products-prev {
          left: -25px;
        }

        .products-next {
          right: -25px;
        }

        .products-carousel-container {
          overflow: hidden;
          position: relative;
          padding: 5px 0;
        }

        .products-carousel-track {
          display: flex;
          width: calc(100% * 2);
          transition: transform 0.5s ease-in-out;
        }

        .product-card {
          flex: 0 0 25%;
          margin-right: 20px;
          position: relative;
        }

        .product-card-inner {
          background-color: white;
          border: 0.8px solid #d4d4d4;
          border-radius: 5px;
          padding: 20px;
          position: relative;
          transition: all 0.3s ease;
          height: 100%;
        }

        .product-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-color: #ff4444;
        }

        .product-discount-badge {
          position: absolute;
          top: 2px;
          right: 10px;
          background-color: #f73312;
          color: white;
          border-radius: 3px;
          padding: 5px 6px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: "Source Sans Pro", sans-serif;
          z-index: 1;
        }

        .product-image-container {
          text-align: center;
          margin-bottom: 11px;
        }

        .product-image-link {
          display: grid;
          place-items: center;
          text-decoration: none;
        }

        .product-image {
          max-width: 100%;
          width: 225px;
          height: 225px;
          object-fit: cover;
          border-radius: 4px;
          transition: transform 0.3s ease;
        }

        .product-card-inner:hover .product-image {
          transform: scale(1.05);
        }

        .product-info {
          background-color: white;
          padding-top: 11px;
          position: relative;
          z-index: 1;
        }

        .product-category {
          margin-bottom: 3px;
        }

        .category-link {
          color: #bbbbbb;
          font-family: "Source Sans Pro", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .category-link:hover {
          color: #ff4444;
        }

        .product-name {
          margin-bottom: 5px;
        }

        .product-name h5 {
          margin: 0;
          line-height: 19px;
        }

        .product-name-link {
          color: #333;
          text-decoration: none;
          display: inline-block;
          line-height: 24px;
          font-family: "Source Sans Pro", sans-serif;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .product-name-link:hover {
          color: #ff4444;
        }

        .product-rating {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 15px;
        }

        .rating-stars {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }

        .stars {
          color: #ffba00;
          font-family: "Source Sans Pro", sans-serif;
          font-size: 13px;
          height: 16px;
          letter-spacing: 3px;
          line-height: 16px;
          position: relative;
          width: 83px;
          overflow: hidden;
        }

        .star-display {
          color: #ffba00;
          font-size: 13px;
          letter-spacing: 3px;
        }

        .rating-text {
          position: absolute;
          left: 0;
          top: 19px;
          color: transparent;
          font-size: 13px;
          letter-spacing: 3px;
          overflow: hidden;
          padding-top: 19px;
          width: 90%;
        }

        .reviews-count p {
          color: #999;
          font-size: 12px;
          line-height: 26px;
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
        }

        .product-price {
          margin-top: 15px;
          margin-bottom: 15px;
        }

        .price-container {
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
        }

        .original-price {
          color: #999;
          font-size: 14px;
          line-height: 26px;
          margin-left: 10px;
          order: 1;
          text-decoration: line-through;
        }

        .original-price span {
          color: #999;
          font-size: 14px;
          line-height: 26px;
        }

        .sale-price {
          color: #f73312;
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
        }

        .sale-price span {
          color: #f73312;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
        }

        .regular-price {
          color: #333;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
        }

        .regular-price span {
          color: #333;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
        }

        .currency {
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
        }

        .product-actions {
          height: 0;
          overflow: hidden;
          transition: height 0.3s ease;
        }

        .product-card-inner:hover .product-actions {
          height: auto;
        }

        .add-to-cart-btn {
          background-color: #f73312;
          border: 1.6px solid #f73312;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          line-height: 16px;
          padding: 13px 20px;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: capitalize;
          transition: all 0.3s ease;
          width: 100%;
          font-family: "Source Sans Pro", sans-serif;
        }

        .add-to-cart-btn:hover {
          background-color: #d62912;
          border-color: #d62912;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(247, 51, 18, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .header-container {
            flex-wrap: wrap;
            gap: 20px;
          }

          .search-section {
            order: 3;
            flex-basis: 100%;
          }

          .hero-title {
            font-size: 36px;
          }

          .form-row {
            flex-wrap: wrap;
          }

          .form-group {
            flex-basis: calc(50% - 7.5px);
          }

          .search-vehicle-btn {
            flex-basis: 100%;
            margin-top: 15px;
          }

          .categories-grid {
            gap: 20px;
          }

          .category-card {
            width: calc(25% - 15px);
            max-width: calc(25% - 15px);
            min-width: 180px;
          }

          .whats-hot-section {
            padding: 60px 0;
          }

          .hot-deals-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .deal-background {
            height: 400px;
            padding: 30px;
          }

          .sale-title {
            font-size: 50px;
            line-height: 60px;
          }

          .super-saver-title {
            font-size: 28px;
            line-height: 34px;
          }

          .featured-models-section {
            padding: 60px 0 0 0;
          }

          .featured-models-tabs {
            flex-direction: column;
            gap: 15px;
          }

          .tab-button {
            font-size: 26px;
            margin: 0 15px;
          }

          .model-card {
            width: calc(25% - 12px);
          }

          .essential-items-section {
            padding: 50px 0 5px 0;
          }

          .essential-items-title {
            font-size: 26px;
          }

          .products-nav {
            width: 45px;
            height: 45px;
            font-size: 14px;
          }

          .products-prev {
            left: -22px;
          }

          .products-next {
            right: -22px;
          }

          .product-card {
            flex: 0 0 50%;
          }

          .products-carousel-track {
            width: calc(100% * 4);
          }
        }

        @media (max-width: 768px) {
          .promo-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .nav-container {
            flex-direction: column;
            gap: 15px;
            padding: 15px 20px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          }

          .nav-actions {
            justify-content: center;
          }

          .hero-title {
            font-size: 28px;
          }

          .form-group {
            flex-basis: 100%;
          }

          .header-actions {
            gap: 10px;
          }

          .action-btn span {
            display: none;
          }

          .categories-section {
            padding: 40px 0;
          }

          .categories-title {
            font-size: 24px;
          }

          .categories-grid {
            gap: 15px;
          }

          .category-card {
            width: calc(50% - 7.5px);
            max-width: calc(50% - 7.5px);
            min-width: 150px;
            padding: 40px 15px 20px;
          }

          .whats-hot-section {
            padding: 40px 0;
          }

          .whats-hot-title {
            font-size: 24px;
          }

          .hot-deals-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .deal-background {
            height: 350px;
            padding: 25px;
          }

          .helix-title {
            font-size: 28px;
          }

          .dunlop-title {
            font-size: 24px;
            line-height: 30px;
          }

          .sale-title {
            font-size: 40px;
            line-height: 48px;
          }

          .super-saver-title {
            font-size: 24px;
            line-height: 28px;
          }

          .deal-subtitle {
            font-size: 16px;
            line-height: 24px;
          }

          .essential-items-section {
            padding: 40px 0 5px 0;
          }

          .essential-items-title {
            font-size: 22px;
          }

          .header-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .products-nav {
            width: 40px;
            height: 40px;
            font-size: 12px;
          }

          .products-prev {
            left: -20px;
          }

          .products-next {
            right: -20px;
          }

          .product-card {
            flex: 0 0 100%;
            margin-right: 0;
          }

          .products-carousel-track {
            width: calc(100% * 8);
          }

          .product-image {
            width: 180px;
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0 15px;
          }

          .logo-text {
            font-size: 24px;
          }

          .search-input::placeholder {
            font-size: 12px;
          }

          .hero-title {
            font-size: 24px;
          }

          .search-title {
            font-size: 24px;
          }

          .category-card {
            width: 100%;
            max-width: 100%;
            min-width: 200px;
          }

          .categories-container {
            padding: 0 15px;
          }

          .whats-hot-container {
            padding: 0 15px;
          }

          .deal-background {
            height: 300px;
            padding: 20px;
          }

          .helix-title {
            font-size: 24px;
          }

          .dunlop-title {
            font-size: 20px;
            line-height: 26px;
          }

          .sale-title {
            font-size: 32px;
            line-height: 38px;
          }

          .super-saver-title {
            font-size: 20px;
            line-height: 24px;
          }

          .deal-subtitle {
            font-size: 14px;
            line-height: 20px;
          }

          .essential-items-container {
            padding: 0 15px;
          }

          .essential-items-title {
            font-size: 20px;
          }

          .products-nav {
            display: none;
          }

          .product-image {
            width: 150px;
            height: 150px;
          }

          .product-card-inner {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}
