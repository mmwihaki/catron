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
  const [showMoreCategories, setShowMoreCategories] = useState(false);

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
      name: "RIDEX Oil Filter",
      category: "Oil Filter",
      brand: "RIDEX",
      sku: "7O0026",
      price: 1300,
      originalPrice: null,
      rating: 4.8,
      reviews: 12,
      stock: 30,
      description: "Upto 10k kms",
      carModel: "E12/K13/N17",
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.autodoc.co.uk/ridex/7989008",
    },
    {
      id: 2,
      name: "RIDEX Plus Oil Filter",
      category: "Oil Filter",
      brand: "Ridex Plus",
      sku: "7O0026P",
      price: 1800,
      originalPrice: null,
      rating: 4.9,
      reviews: 8,
      stock: 30,
      description: "Upto 15k kms",
      carModel: "E12/K13/N17",
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://en.ridex.eu/product/18743865",
    },
    {
      id: 3,
      name: "STARK Oil Filter",
      category: "Oil Filter",
      brand: "STARK",
      sku: "SKOF-0860025",
      price: 1800,
      originalPrice: null,
      rating: 4.7,
      reviews: 5,
      stock: 3,
      description: "Upto 15k kms",
      carModel: "E12/K13/N17",
      image:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.autodoc.co.uk/stark/7989008",
    },
    {
      id: 4,
      name: "KAVO Air Filter",
      category: "Air Filter",
      brand: "KAVO",
      sku: "NA-2650",
      price: 4500,
      originalPrice: null,
      rating: 4.6,
      reviews: 7,
      stock: 4,
      description: "Aftermarket OE Quality up-to 15k kms",
      carModel: "Teana L33 QR25de",
      image:
        "https://images.pexels.com/photos/18497064/pexels-photo-18497064.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.autodoc.co.uk/kavo-parts/13863456",
    },
    {
      id: 5,
      name: "KAVO Cabin Filter",
      category: "Cabin Filter",
      brand: "KAVO",
      sku: "NC-2037",
      price: 4000,
      originalPrice: null,
      rating: 4.5,
      reviews: 6,
      stock: 2,
      description: "Aftermarket OE Quality - up-to 15k kms",
      carModel: "Teana L33 QR25de",
      image:
        "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.autodoc.co.uk/kavo-parts/13863570",
    },
    {
      id: 6,
      name: "KAVO Cabin Filter Premium",
      category: "Cabin Filter",
      brand: "KAVO",
      sku: "NC-2037C",
      price: 6500,
      originalPrice: null,
      rating: 4.8,
      reviews: 4,
      stock: 1,
      description: "Aftermarket OE Quality - up-to 30k kms",
      carModel: "Teana L33 QR25de",
      image:
        "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.autodoc.co.uk/kavo-parts/13863571",
    },
    {
      id: 7,
      name: "OSRAM Night Breaker 200 H4",
      category: "Headlight bulbs",
      brand: "OSRAM",
      sku: "NB200H4",
      price: 7500,
      originalPrice: null,
      rating: 4.9,
      reviews: 15,
      stock: 10,
      description: "(pack of 2)",
      carModel: "H4 models",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.osram.com/ecat/NIGHT%20BREAKER%20200-Halogen%20headlight%20lamps-Car%20lighting-Automotive/com/en/GPS01_3495633/ZMP_4062357/",
    },
    {
      id: 8,
      name: "NGK Spark Plug DIG-S",
      category: "Spark plugs",
      brand: "NGK",
      sku: "DILKAR7E11HS (97439)",
      price: 4600,
      originalPrice: null,
      rating: 4.7,
      reviews: 20,
      stock: 33,
      description: "Premium spark plug for DIG-S engines",
      carModel: "Note E12 DIG-S",
      image:
        "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=400",
      discount: null,
      link: "https://www.sparkplugs.co.uk/ngk-spark-plug-dilkar7e11hs-97439",
    },
  ];

  const whatHotProducts = [
    {
      title: "RIDEX Oil Filters",
      subtitle: "Premium Quality Filtration",
      image:
        "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://en.ridex.eu/product/18743865",
    },
    {
      title: "NGK Spark Plugs",
      subtitle: "Performance and Reliability",
      image:
        "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://www.sparkplugs.co.uk/ngk-spark-plug-dilkar7e11hs-97439",
    },
    {
      title: "OSRAM Headlights",
      subtitle: "Bright & Long Lasting",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://www.osram.com/ecat/NIGHT%20BREAKER%20200-Halogen%20headlight%20lamps-Car%20lighting-Automotive/com/en/GPS01_3495633/ZMP_4062357/",
    },
    {
      title: "Brake Components",
      subtitle: "Safety First Priority",
      image:
        "https://images.pexels.com/photos/18497064/pexels-photo-18497064.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://www.autodoc.co.uk/lpr/15833801",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % whatHotProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, whatHotProducts.length]);

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

  const categories = [
    "Home & Garden",
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Sports & Entertainment",
    "Computer, Office & Security",
    "Consumer Electronics",
    "Jewelry & Watches",
    "Automobiles & Motorcycles",
    "Home Improvement",
    "Appliances",
    "Weddings & Events",
    "Shoes",
    "Mother & Kids",
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

          <div className="search-section">
            <div className="search-container">
              <select
                className="search-category"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              >
                <option value="All">All</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="search-input"
                placeholder="Enter your keyword here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="header-actions">
            <button className="action-btn">
              <i className="fas fa-heart"></i>
              <span>0</span>
            </button>
            <button className="action-btn">
              <i className="fas fa-balance-scale"></i>
              <span>0</span>
            </button>
            <button className="action-btn cart-btn">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <span className="cart-count">{cartItems}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="main-navigation">
        <div className="nav-container">
          <button className="all-categories-btn">
            <i className="fas fa-bars"></i>
            All Categories
          </button>
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
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
          <div className="hero-badge">NEW COLLECTION</div>
          <h1 className="hero-title">
            Find the Parts
            <br />
            Your Car Needs
          </h1>
        </div>
      </section>

      {/* Vehicle Search Section */}
      <section className="vehicle-search-section">
        <div className="vehicle-search-container">
          <h2 className="search-title">Find Parts by Your Vehicle</h2>
          <p className="search-subtitle">
            Select your vehicle details to find compatible parts
          </p>

          <form
            className="vehicle-search-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleVehicleSearch();
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="year">Year</label>
                <select
                  id="year"
                  value={vehicleYear}
                  onChange={(e) => setVehicleYear(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="brand">Brand</label>
                <select
                  id="brand"
                  value={vehicleBrand}
                  onChange={(e) => setVehicleBrand(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Brand</option>
                  <option value="nissan">Nissan</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="model">Model</label>
                <select
                  id="model"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Model</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="coupe">Coupe</option>
                  <option value="wagon">Wagon</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="engine">Engine</label>
                <select
                  id="engine"
                  value={vehicleEngine}
                  onChange={(e) => setVehicleEngine(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Engine</option>
                  <option value="1.4L">1.4L</option>
                  <option value="1.6L">1.6L</option>
                  <option value="2.0L">2.0L</option>
                  <option value="2.4L">2.4L</option>
                  <option value="3.0L">3.0L</option>
                  <option value="3.5L">3.5L</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="fuel">Fuel Type</label>
                <select
                  id="fuel"
                  value={vehicleFuelType}
                  onChange={(e) => setVehicleFuelType(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Fuel Type</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              <div className="form-group">
                <button type="submit" className="search-submit-btn">
                  <i className="fas fa-search"></i>
                  Search Parts
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* What's Hot Section */}
      <section className="whats-hot-section">
        <div className="whats-hot-container">
          <h2 className="section-title">What's Hot</h2>
          <div className="hot-products-grid">
            {whatHotProducts.map((product, index) => (
              <div key={index} className="hot-product-card">
                <a href={product.link} className="hot-product-link">
                  <div className="hot-product-image">
                    <img src={product.image} alt={product.title} />
                    <div className="hot-product-overlay">
                      <div className="hot-product-content">
                        <h3 className="hot-product-title">{product.title}</h3>
                        <p className="hot-product-subtitle">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
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
                name: "Air Filters",
                image:
                  "https://images.pexels.com/photos/9666306/pexels-photo-9666306.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "245 Products",
              },
              {
                name: "Custom Wheels",
                image:
                  "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "189 Products",
              },
              {
                name: "Fluids & Chemicals",
                image:
                  "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "156 Products",
              },
              {
                name: "Exteriors",
                image:
                  "https://images.pexels.com/photos/18497064/pexels-photo-18497064.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "298 Products",
              },
              {
                name: "Interiors",
                image:
                  "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "167 Products",
              },
              {
                name: "Clearance",
                image:
                  "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "89 Products",
              },
              {
                name: "Engine Parts",
                image:
                  "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "234 Products",
              },
              {
                name: "Brake System",
                image:
                  "https://images.pexels.com/photos/3806287/pexels-photo-3806287.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "178 Products",
              },
              {
                name: "Suspension",
                image:
                  "https://images.pexels.com/photos/6872138/pexels-photo-6872138.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "145 Products",
              },
              {
                name: "Electrical",
                image:
                  "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "267 Products",
              },
              {
                name: "Exhaust System",
                image:
                  "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "123 Products",
              },
              {
                name: "Transmission",
                image:
                  "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "156 Products",
              },
              {
                name: "Cooling System",
                image:
                  "https://images.pexels.com/photos/3806287/pexels-photo-3806287.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "134 Products",
              },
              {
                name: "Tools & Equipment",
                image:
                  "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300",
                count: "289 Products",
              },
            ]
              .slice(0, showMoreCategories ? 14 : 10)
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

      {/* Featured Models Section */}
      <section className="featured-models-section">
        <div className="featured-models-container">
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

          {activeTab === "makes" && (
            <div className="featured-content">
              <div className="makes-grid">
                {nissanMakes
                  .slice(0, showMoreMakes ? nissanMakes.length : 4)
                  .map((make, index) => (
                    <div key={index} className="make-card">
                      <a href={`#${make.toLowerCase()}`} className="make-link">
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

          <div className="products-static-grid">
            <div className="products-grid-container">
              {essentialProducts.slice(0, 4).map((product) => (
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

      {/* Best Seller Section */}
      <section className="best-seller-section">
        <div className="best-seller-container">
          <div className="best-seller-header">
            <div className="header-left">
              <div className="title-and-countdown">
                <h2 className="best-seller-title">Best Seller</h2>
                <div className="countdown-timer">
                  <div className="countdown-content">
                    <span className="expires-text">EXPIRES IN:</span>
                    <div className="countdown-display">
                      <ul className="countdown-list">
                        <li className="countdown-item">
                          <span className="countdown-number">118</span>
                          <span className="countdown-label">D :</span>
                        </li>
                        <li className="countdown-item">
                          <span className="countdown-number">14</span>
                          <span className="countdown-label">H :</span>
                        </li>
                        <li className="countdown-item">
                          <span className="countdown-number">09</span>
                          <span className="countdown-label">M :</span>
                        </li>
                        <li className="countdown-item">
                          <span className="countdown-number">46</span>
                          <span className="countdown-label">S</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <a href="#shop" className="see-all-products-link">
                <span>See All Products</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="best-seller-tabs">
            <div className="tab-navigation">
              <ul className="tab-list">
                <li className="tab-item">
                  <a href="#" className="tab-link active">
                    Top 10
                  </a>
                </li>
                <li className="tab-item">
                  <a href="#" className="tab-link">
                    Top Air Filters
                  </a>
                </li>
                <li className="tab-item">
                  <a href="#" className="tab-link">
                    Top Auto Parts
                  </a>
                </li>
                <li className="tab-item">
                  <a href="#" className="tab-link">
                    Top Exteriors
                  </a>
                </li>
                <li className="tab-item">
                  <a href="#" className="tab-link">
                    Top Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="best-seller-products">
            <div className="products-grid-container">
              <div className="products-grid">
                  {[
                    {
                      id: 1,
                      image:
                        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=300",
                      discount: "10% OFF",
                      category: "Exhaust System",
                      name: "HF-2 Gloss Black with Brushed Face",
                      rating: 4.33,
                      reviews: 3,
                      originalPrice: 20.0,
                      price: 18.0,
                      link: "#product-1",
                    },
                    {
                      id: 2,
                      image:
                        "https://images.pexels.com/photos/18497064/pexels-photo-18497064.jpeg?auto=compress&cs=tinysrgb&w=300",
                      discount: "11% OFF",
                      category: "Interiors",
                      name: "M249 GAMMA Silver with Full Chrome",
                      rating: 4.5,
                      reviews: 2,
                      originalPrice: 18.0,
                      price: 16.0,
                      link: "#product-2",
                    },
                    {
                      id: 3,
                      image:
                        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
                      discount: "10% OFF",
                      category: "Air Filters",
                      name: "Brand Name CV10 Satin Black with Chrome",
                      rating: 5.0,
                      reviews: 1,
                      originalPrice: 20.0,
                      price: 18.0,
                      link: "#product-3",
                    },
                    {
                      id: 4,
                      image:
                        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
                      discount: "33% OFF",
                      category: "Car Care",
                      name: "Simple Leather Steering Wheel",
                      rating: 5.0,
                      reviews: 2,
                      originalPrice: 3.0,
                      price: 2.0,
                      link: "#product-4",
                    },
                  ].map((product) => (
                    <div key={product.id} className="best-seller-product-card">
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
                                  <strong>{product.rating.toFixed(2)}</strong>{" "}
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
                <div className="view-more-container">
                  <a href="/shop?search_type=parts" className="view-more-btn">
                    View More Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="new-arrivals-container">
          <div className="new-arrivals-header">
            <div className="header-left">
              <h2 className="new-arrivals-title">New Arrivals</h2>
            </div>
            <div className="header-right">
              <a href="#shop" className="see-all-products-link">
                <span>See All Products</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="new-arrivals-products">
            <div className="products-grid-container">
              <div className="products-grid">
                  {[
                    {
                      id: 1,
                      image:
                        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
                      category: "Arm Bushing",
                      name: "GS-P Arm Bushing Large",
                      brand: "GS-P",
                      sku: "516473",
                      rating: 4.5,
                      reviews: 8,
                      price: 5000,
                      stock: 6,
                      description: "For Teana L33 QR25de",
                      link: "https://www.autodoc.co.uk/gsp/9865218",
                    },
                    {
                      id: 2,
                      image:
                        "https://images.pexels.com/photos/18497064/pexels-photo-18497064.jpeg?auto=compress&cs=tinysrgb&w=300",
                      category: "Arm Bushing",
                      name: "GS-P Arm Bushing Small",
                      brand: "GS-P",
                      sku: "532407",
                      rating: 4.4,
                      reviews: 6,
                      price: 3200,
                      stock: 6,
                      description: "For Teana L33 QR25de",
                      link: "https://www.autodoc.co.uk/gsp/13922081",
                    },
                    {
                      id: 3,
                      image:
                        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=300",
                      category: "Stabilizer links",
                      name: "RIDEX Stabilizer Links",
                      brand: "RIDEX",
                      sku: "3229S0117",
                      rating: 4.6,
                      reviews: 10,
                      price: 3800,
                      stock: 6,
                      description: "For Teana L33 QR25de",
                      link: "https://www.autodoc.co.uk/ridex/8000270",
                    },
                    {
                      id: 4,
                      image:
                        "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300",
                      category: "Cabin Filter",
                      name: "JPN Cabin Filter",
                      brand: "JPN",
                      sku: "40F1025-JPN",
                      rating: 4.3,
                      reviews: 7,
                      price: 2200,
                      stock: 5,
                      description: "Normal cabin filter",
                      link: "https://www.trodo.com/filter-cabin-air-jpn-40f1025-jpn",
                    },
                  ].map((product) => (
                    <div key={product.id} className="new-arrivals-product-card">
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
                                  <strong>{product.rating.toFixed(2)}</strong>{" "}
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
                              {product.priceRange ? (
                                <span className="price-range">
                                  {product.priceRange}
                                </span>
                              ) : (
                                <>
                                  {product.originalPrice && (
                                    <del className="original-price">
                                      <span>
                                        <span className="currency">$</span>
                                        <span>
                                          KES{" "}
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
                                    <span>
                                      {product.price.toLocaleString()}
                                    </span>
                                  </span>
                                </>
                              )}
                            </p>
                          </div>

                          <div className="product-actions">
                            <a href={product.link} className="add-to-cart-btn">
                              {product.priceRange
                                ? "Select options"
                                : "Add to cart"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="view-more-container">
                  <a href="/shop?search_type=parts" className="view-more-btn">
                    View More Products
                  </a>
                </div>
              </div>
            </div>
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
                <a href="/blog/right-hand-steering">
                  <img
                    src="https://images.pexels.com/photos/244824/pexels-photo-244824.jpeg?auto=compress&cs=tinysrgb&w=656&h=430"
                    alt="Right-hand steering wheel vehicles"
                  />
                </a>
              </div>
              <div className="article-content">
                <h3 className="article-title">
                  <a href="/blog/right-hand-steering">
                    Which countries use vehicles with a right-hand steering
                    wheel
                  </a>
                </h3>
                <p className="article-excerpt">
                  The braking system of a vehicle is an important safety aspect
                  that should not be overlooked. From there, the pump forces the
                  oil into the engine's lubrication system...
                </p>
                <div className="article-meta">
                  <div className="author">
                    <i className="fas fa-user"></i>
                    <span>By bratoradm</span>
                  </div>
                  <div className="date">
                    <i className="fas fa-calendar"></i>
                    <span>Jan 11, 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-list">
              <div className="small-article">
                <div className="small-article-image">
                  <a href="/blog/custom-shift-knobs">
                    <img
                      src="https://images.pexels.com/photos/159769487/pexels-photo-159769487.jpeg?auto=compress&cs=tinysrgb&w=356&h=234"
                      alt="Custom shift knobs"
                    />
                  </a>
                </div>
                <div className="small-article-content">
                  <h3 className="small-article-title">
                    <a href="/blog/custom-shift-knobs">
                      Custom shift knobs | Can you handle one in your ride?
                    </a>
                  </h3>
                  <p className="small-article-excerpt">
                    The braking system of a vehicle is an important safety
                    aspect that should not be overlooked. From the...
                  </p>
                  <div className="article-meta">
                    <div className="author">
                      <i className="fas fa-user"></i>
                      <span>By bratoradm</span>
                    </div>
                    <div className="date">
                      <i className="fas fa-calendar"></i>
                      <span>Jan 11, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-article">
                <div className="small-article-image">
                  <a href="/blog/replace-rims">
                    <img
                      src="https://images.pexels.com/photos/195635/pexels-photo-195635.jpeg?auto=compress&cs=tinysrgb&w=356&h=234"
                      alt="Replace rims yourself"
                    />
                  </a>
                </div>
                <div className="small-article-content">
                  <h3 className="small-article-title">
                    <a href="/blog/replace-rims">
                      Replace Rims by yourself, why not?
                    </a>
                  </h3>
                  <p className="small-article-excerpt">
                    The braking system of a vehicle is an important safety
                    aspect that should not be overlooked. From the...
                  </p>
                  <div className="article-meta">
                    <div className="author">
                      <i className="fas fa-user"></i>
                      <span>By bratoradm</span>
                    </div>
                    <div className="date">
                      <i className="fas fa-calendar"></i>
                      <span>Jan 11, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-article">
                <div className="small-article-image">
                  <a href="/blog/off-road-bumpers">
                    <img
                      src="https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&w=356&h=234"
                      alt="Off road bumpers shopping guide"
                    />
                  </a>
                </div>
                <div className="small-article-content">
                  <h3 className="small-article-title">
                    <a href="/blog/off-road-bumpers">
                      Shopping guide – Off Road Bumpers
                    </a>
                  </h3>
                  <p className="small-article-excerpt">
                    The braking system of a vehicle is an important safety
                    aspect that should not be overlooked. From the...
                  </p>
                  <div className="article-meta">
                    <div className="author">
                      <i className="fas fa-user"></i>
                      <span>By bratoradm</span>
                    </div>
                    <div className="date">
                      <i className="fas fa-calendar"></i>
                      <span>Jan 11, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="featured-brands-section">
        <div className="featured-brands-container">
          <h2 className="section-title">Featured Brands</h2>
          <div className="brands-grid">
            <div className="brand-item">
              <a href="/brands/bosch">
                <img
                  src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=132&h=50"
                  alt="Bosch"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/denso">
                <img
                  src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=136&h=70"
                  alt="Denso"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/acdelco">
                <img
                  src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=112&h=40"
                  alt="ACDelco"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/motorcraft">
                <img
                  src="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=128&h=46"
                  alt="Motorcraft"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/gates">
                <img
                  src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=95&h=14"
                  alt="Gates"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/monroe">
                <img
                  src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=133&h=36"
                  alt="Monroe"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/moog">
                <img
                  src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=140&h=33"
                  alt="Moog"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/kn">
                <img
                  src="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=138&h=58"
                  alt="K&N"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/dorman">
                <img
                  src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=129&h=47"
                  alt="Dorman"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/dayco">
                <img
                  src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=140&h=72"
                  alt="Dayco"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/ngk">
                <img
                  src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=85&h=67"
                  alt="NGK"
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="/brands/mobil1">
                <img
                  src="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=80&h=16"
                  alt="Mobil 1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section newsletter-with-divider">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Subscribe To Our Newsletter</h2>
            <p className="newsletter-description">
              Register now to get latest updates on promotions & coupons. Don't
              worry, we not spam!
            </p>
          </div>
          <div className="newsletter-form">
            <form className="subscription-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                  required
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="newsletter-policy">
              By subscribing, you accepted the our{" "}
              <a href="/privacy-policy" className="policy-link">
                Policy
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-about">
              <a href="/" className="footer-logo">
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
              </a>
              <h6 className="footer-tagline">
                #1 US's biggest online marketplace for car spare OEM &
                Aftermarkets.
              </h6>
              <p className="footer-description">
                All manufacturer names, symbols, and descriptions, used in our
                images and text are used solely for identification purposes
                only. It is neither inferred nor implied that any item sold by
                Brator.com is a product authorized by or in any way connected
                with any vehicle manufacturers displayed on this page.
              </p>
              <div className="social-links">
                <a href="https://twitter.com/brator" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com/brator" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://youtube.com/brator" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com/brator" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-catalog">
              <h6 className="footer-section-title">Brator's Catalog</h6>
              <ul className="footer-links">
                <li>
                  <a href="/auto-parts">Auto Parts</a>
                </li>
                <li>
                  <a href="/car-care">Car Care</a>
                </li>
                <li>
                  <a href="/fluids-chemicals">Fluids & Chemicals</a>
                </li>
                <li>
                  <a href="/tools-supplies">Tools & Supplies</a>
                </li>
                <li>
                  <a href="/wheels-tires">Wheel & Tires</a>
                </li>
                <li>
                  <a href="/clearance">Clearances</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-information">
              <h6 className="footer-section-title">Information</h6>
              <ul className="footer-links">
                <li>
                  <a href="/about">About Brator</a>
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
                  <a href="/affiliate">Affiliate Program</a>
                </li>
                <li>
                  <a href="/sell">Sell on Brator</a>
                </li>
                <li>
                  <a href="/partnership">Partnership</a>
                </li>
              </ul>
            </div>
            <div className="footer-customer-service">
              <h6 className="footer-section-title">Customer Service</h6>
              <ul className="footer-links">
                <li>
                  <a href="/help">Help Center</a>
                </li>
                <li>
                  <a href="/account">My Account</a>
                </li>
                <li>
                  <a href="/track">Track</a>
                </li>
                <li>
                  <a href="/orders">My Order</a>
                </li>
                <li>
                  <a href="/returns">Return Policy</a>
                </li>
                <li>
                  <a href="/gift-cards">Gift Cards</a>
                </li>
                <li>
                  <a href="/wholesale">Buy Wholesale</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              © 2022{" "}
              <a href="/" className="brand-link">
                Brator Inc.
              </a>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

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
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 15px;
          align-items: end;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
          font-size: 14px;
        }

        .form-select {
          padding: 12px 15px;
          border: 2px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          background-color: white;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .form-select:focus {
          outline: none;
          border-color: #ff4444;
        }

        .search-submit-btn {
          background-color: #ff4444;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          transition: background-color 0.3s ease;
          height: fit-content;
        }

        .search-submit-btn:hover {
          background-color: #dd3333;
        }

        /* What's Hot Section */
        .whats-hot-section {
          background-color: #f8f8f8;
          padding: 60px 0;
        }

        .whats-hot-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 36px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 50px;
          color: #333;
          font-family: "Playfair Display", serif;
        }

        .hot-products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .hot-product-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .hot-product-card:hover {
          transform: translateY(-5px);
        }

        .hot-product-link {
          text-decoration: none;
          display: block;
        }

        .hot-product-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .hot-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hot-product-card:hover .hot-product-image img {
          transform: scale(1.1);
        }

        .hot-product-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 30px 20px 20px;
        }

        .hot-product-title {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 8px 0;
          font-family: "Playfair Display", serif;
        }

        .hot-product-subtitle {
          font-size: 14px;
          margin: 0;
          opacity: 0.9;
        }

        /* Categories Section */
        .categories-section {
          background-color: white;
          padding: 60px 0;
        }

        .categories-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .category-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .category-link {
          text-decoration: none;
          display: block;
        }

        .category-image {
          height: 120px;
          overflow: hidden;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-image img {
          transform: scale(1.1);
        }

        .category-info {
          padding: 15px;
          text-align: center;
        }

        .category-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 5px 0;
        }

        .category-count {
          font-size: 12px;
          color: #666;
          margin: 0;
        }

        .load-more-container {
          text-align: center;
          margin-top: 30px;
        }

        .load-more-button {
          background-color: #ff4444;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }

        .load-more-button:hover {
          background-color: #dd3333;
        }

        /* Featured Models Section */
        .featured-models-section {
          background-color: #f8f8f8;
          padding: 60px 0;
        }

        .featured-models-container {
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
          background-color: #ddd;
          border-radius: 8px;
          padding: 4px;
          max-width: 400px;
          margin: 0 auto;
        }

        .tab-button {
          flex: 1;
          background-color: transparent;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          color: #666;
        }

        .tab-button.active {
          background-color: #ff4444;
          color: white;
        }

        .featured-content {
          background-color: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .makes-grid,
        .models-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }

        .make-card,
        .model-card {
          background-color: #f8f8f8;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .make-card:hover,
        .model-card:hover {
          background-color: #ff4444;
          transform: translateY(-2px);
        }

        .make-link,
        .model-link {
          display: block;
          padding: 15px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          text-align: center;
          transition: color 0.3s ease;
        }

        .make-card:hover .make-link,
        .model-card:hover .model-link {
          color: white;
        }

        .view-more-container {
          text-align: center;
        }

        .view-more-button {
          background: none;
          border: 2px solid #ff4444;
          color: #ff4444;
          padding: 12px 30px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-more-button:hover {
          background-color: #ff4444;
          color: white;
        }

        .view-more-text {
          display: flex;
          align-items: center;
          gap: 8px;
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

        .products-static-grid {
          position: relative;
        }

        .products-grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 5px 0;
        }

        .product-card {
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
          line-height: 19.2px;
          font-size: 16px;
          font-weight: 500;
        }

        .product-name-link {
          color: #333;
          text-decoration: none;
          display: inline-block;
          line-height: 24px;
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
        }

        .stars {
          color: #ffba00;
          float: right;
          font-family: "woocommerce";
          font-size: 13px;
          height: 19.5px;
          letter-spacing: 3px;
          line-height: 1;
          position: relative;
          width: 83.2px;
          overflow: hidden;
        }

        .star-display {
          color: #ffba00;
          font-family: "star";
          font-size: 13px;
          left: 0;
          letter-spacing: 3px;
          line-height: 1;
          padding-top: 19.5px;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .rating-text {
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          position: absolute;
          width: 1px;
          word-wrap: normal;
        }

        .reviews-count {
          margin-left: 10px;
        }

        .reviews-count p {
          color: #999;
          font-size: 12px;
          line-height: 26px;
          margin: 0;
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
          display: inline;
          font-size: 14px;
          line-height: 26px;
        }

        .sale-price,
        .regular-price {
          color: #f73312;
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
        }

        .regular-price {
          color: #333;
        }

        .currency {
          display: inline;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
        }

        .product-actions {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .product-card-inner:hover .product-actions {
          opacity: 1;
          max-height: 60px;
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
          line-height: 1.5;
          padding: 13px 20px;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: capitalize;
          transition: all 0.3s ease;
          width: 100%;
        }

        .add-to-cart-btn:hover {
          background-color: #d12a0e;
          border-color: #d12a0e;
        }

        /* Best Seller Section */
        .best-seller-section {
          background-color: #f2f2f7;
          padding: 65px 0;
          max-width: 1520px;
          margin: 0 auto;
        }

        .best-seller-container {
          padding: 0 12px;
          width: 100%;
        }

        .best-seller-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 35px;
          width: 100%;
        }

        .header-left {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .title-and-countdown {
          display: flex;
          align-items: center;
          flex-basis: 80%;
          flex-wrap: wrap;
        }

        .best-seller-title {
          font-family: "Playfair Display", serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
          margin-right: 35px;
          margin: 0 35px 0 0;
          position: relative;
          color: #333;
        }

        .countdown-timer {
          background-color: #f73312;
          border-radius: 3px;
        }

        .countdown-content {
          display: flex;
          align-items: center;
          padding: 0 10px;
        }

        .expires-text {
          color: white;
          font-size: 13px;
          font-weight: 700;
          line-height: 26px;
          margin-right: 10px;
          margin-top: 2px;
          text-transform: uppercase;
        }

        .countdown-display {
        }

        .countdown-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .countdown-item {
          color: white;
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          line-height: 23.4px;
          text-align: left;
          text-transform: uppercase;
        }

        .countdown-number {
          color: white;
          display: inline;
          font-size: 13px;
          font-weight: 700;
          text-align: left;
          text-transform: uppercase;
        }

        .countdown-label {
          margin-left: 2px;
        }

        .header-right {
        }

        .see-all-products-link {
          display: flex;
          align-items: center;
          color: #666;
          cursor: pointer;
          font-size: 14px;
          justify-content: flex-end;
          line-height: 21.994px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .see-all-products-link:hover {
          color: #ff4444;
        }

        .see-all-products-link i {
          margin-left: 10px;
          height: 16px;
          line-height: 25.136px;
          position: relative;
          top: 2px;
          width: 16px;
        }

        .best-seller-tabs {
          margin-bottom: 35px;
        }

        .tab-navigation {
        }

        .tab-list {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .tab-item {
          display: list-item;
          font-size: 18px;
          line-height: 32.4px;
          text-align: left;
        }

        .tab-link {
          border-radius: 3px;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          padding: 12px;
          text-align: left;
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
        }

        .tab-link.active {
          background-color: white;
          border: 1px solid #f73312;
          color: #f73312;
        }

        .tab-link:hover {
          color: #f73312;
        }

        .best-seller-products {
        }

        .products-carousel-wrapper {
          position: relative;
        }

        .products-grid-container {
          position: relative;
          padding: 5px 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }

        .view-more-container {
          text-align: center;
          margin-top: 30px;
        }

        .view-more-btn {
          display: inline-block;
          padding: 12px 30px;
          background-color: #ff4444;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid #ff4444;
        }

        .view-more-btn:hover {
          background-color: transparent;
          color: #ff4444;
        }

        .best-seller-product-card {
          flex: 0 0 auto;
          margin-right: 20px;
          position: relative;
          width: calc((100% - 100px) / 4);
        }

        /* New Arrivals Section */
        .new-arrivals-section {
          background-color: #f2f2f7;
          padding: 65px 0 100px 0;
          max-width: 1520px;
          margin: 0 auto;
        }

        .new-arrivals-container {
          padding: 0 12px;
          width: 100%;
        }

        .new-arrivals-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 35px;
          width: 100%;
        }

        .new-arrivals-title {
          font-family: "Playfair Display", serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
          margin: 0;
          position: relative;
          color: #333;
        }

        .new-arrivals-products {
          position: relative;
        }

        .new-arrivals-product-card {
          flex: 0 0 auto;
          margin-right: 20px;
          position: relative;
          width: calc((100% - 100px) / 4);
        }

        .price-range {
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          color: #333;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .form-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .search-submit-btn {
            grid-column: span 3;
          }

          .hot-products-grid,
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .makes-grid,
          .models-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .products-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .best-seller-product-card {
            width: calc((100% - 40px) / 2);
          }

          .essential-items-section {
            padding: 50px 0 5px 0;
          }

          .essential-items-container {
            padding: 0 15px;
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

          .hot-products-grid,
          .categories-grid {
            grid-template-columns: 1fr;
          }

          .makes-grid,
          .models-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .products-grid-container {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .best-seller-product-card {
            width: 100%;
          }

          .carousel-nav {
            display: none;
          }

          .essential-items-section {
            padding: 40px 0 5px 0;
          }
        }

        /* Tips & Guides Section */
        .tips-guides-section {
          padding: 95px 0 110px 0;
          background-color: white;
        }

        .tips-guides-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .view-all-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #666;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .view-all-link:hover {
          color: #ff4444;
        }

        .view-all-link i {
          font-size: 16px;
          position: relative;
          top: 2px;
        }

        .tips-guides-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .featured-article {
          display: flex;
          flex-direction: column;
          padding-right: 40px;
        }

        .article-image {
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 32px;
        }

        .article-image img {
          width: 100%;
          height: auto;
          transition: transform 0.4s ease;
        }

        .article-image:hover img {
          transform: scale(1.05);
        }

        .article-title {
          font-size: 28px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 15px;
          font-family: "Playfair Display", serif;
        }

        .article-title a {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .article-title a:hover {
          color: #ff4444;
        }

        .article-excerpt {
          color: #666;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .article-meta {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .author,
        .date {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #999;
          font-size: 13px;
        }

        .author i,
        .date i {
          font-size: 18px;
          margin-right: 14px;
        }

        .article-list {
          padding-left: 40px;
        }

        .small-article {
          display: flex;
          gap: 30px;
          border-bottom: 0.8px solid #e5e5e5;
          padding-bottom: 30px;
          margin-bottom: 30px;
        }

        .small-article:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .small-article-image {
          border-radius: 5px;
          overflow: hidden;
          flex-shrink: 0;
          width: 265px;
          max-width: 380px;
        }

        .small-article-image img {
          width: 100%;
          height: auto;
          transition: transform 0.4s ease;
        }

        .small-article-image:hover img {
          transform: scale(1.05);
        }

        .small-article-content {
          display: flex;
          flex-direction: column;
        }

        .small-article-title {
          font-size: 28px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 15px;
          font-family: "Playfair Display", serif;
        }

        .small-article-title a {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .small-article-title a:hover {
          color: #ff4444;
        }

        .small-article-excerpt {
          color: #666;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        /* Featured Brands Section */
        .featured-brands-section {
          background-color: #f2f2f7;
          padding: 90px 0;
        }

        .featured-brands-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 40px;
          align-items: center;
        }

        .brand-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .brand-item a {
          display: block;
          transition: opacity 0.3s ease;
        }

        .brand-item a:hover {
          opacity: 0.7;
        }

        .brand-item img {
          max-width: 100%;
          height: auto;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .brand-item:hover img {
          filter: grayscale(0%);
        }

        /* Newsletter Section */
        .newsletter-section {
          background-color: white;
          padding: 90px 0;
        }

        .newsletter-with-divider {
          border-top: 0.8px solid #e5e5e5;
        }

        .newsletter-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 40px;
          align-items: center;
        }

        .newsletter-title {
          font-size: 30px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 15px;
          color: #333;
          font-family: "Playfair Display", serif;
        }

        .newsletter-description {
          color: #666;
          font-size: 14px;
          line-height: 2;
        }

        .subscription-form {
          margin-bottom: 15px;
        }

        .form-group {
          display: flex;
          align-items: stretch;
          position: relative;
        }

        .email-input {
          flex: 1;
          border: 0.8px solid #ccc;
          border-radius: 4px 0 0 4px;
          padding: 12px 17px;
          font-size: 15px;
          color: #999;
          outline: none;
          background-color: white;
        }

        .email-input::placeholder {
          color: #999;
        }

        .subscribe-btn {
          background-color: #f73312;
          border: 1.6px solid #f73312;
          border-radius: 0 4px 4px 0;
          padding: 15px 20px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
          position: relative;
          left: -5px;
        }

        .subscribe-btn:hover {
          background-color: #d82c0e;
        }

        .newsletter-policy {
          color: #666;
          font-size: 14px;
          line-height: 2;
        }

        .policy-link {
          color: #333;
          text-decoration: underline;
          margin-left: 5px;
        }

        /* Footer Section */
        .main-footer {
          background-color: #f6f7fa;
          padding: 100px 0 50px 0;
          position: relative;
        }

        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 5fr 2fr 2fr 3fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .footer-about {
          padding-right: 105px;
        }

        .footer-logo .logo-text {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          font-family: "Playfair Display", serif;
        }

        .footer-tagline {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.7;
          margin: 20px 0 30px 0;
          color: #333;
        }

        .footer-description {
          color: #666;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 35px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          color: #666;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #ff4444;
        }

        .footer-section-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 35px;
          color: #333;
          font-family: "Playfair Display", serif;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #666;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #ff4444;
        }

        .footer-bottom {
          border-top: 0.8px solid #e5e5e5;
          padding-top: 30px;
          text-align: center;
        }

        .copyright {
          color: #666;
          font-size: 14px;
          margin: 0;
        }

        .brand-link {
          color: #333;
          font-weight: 600;
          text-decoration: none;
          margin: 0 4px;
        }

        .brand-link:hover {
          color: #ff4444;
        }

        @media (max-width: 1024px) {
          .tips-guides-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .featured-article {
            padding-right: 0;
          }

          .article-list {
            padding-left: 0;
          }

          .brands-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }

          .newsletter-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-about {
            padding-right: 0;
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .tips-guides-section {
            padding: 60px 0 80px 0;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .small-article {
            flex-direction: column;
            gap: 20px;
          }

          .small-article-image {
            width: 100%;
            max-width: none;
          }

          .brands-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .newsletter-section {
            padding: 60px 0;
          }

          .form-group {
            flex-direction: column;
            gap: 15px;
          }

          .email-input {
            border-radius: 4px;
          }

          .subscribe-btn {
            border-radius: 4px;
            left: 0;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-about {
            grid-column: 1;
          }
        }

        @media (max-width: 480px) {
          .promo-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .logo-text {
            font-size: 24px;
          }

          .hero-title {
            font-size: 28px;
          }

          .section-title {
            font-size: 28px;
          }

          .search-title {
            font-size: 24px;
          }

          .essential-items-container {
            padding: 0 15px;
          }

          .article-title,
          .small-article-title {
            font-size: 24px;
          }

          .brands-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .newsletter-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}