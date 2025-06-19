export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Top Banner */}
      <div
        style={{
          background: "#1a1a1a",
          color: "white",
          padding: "8px 0",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          🚚 FREE SHIPPING on orders over $75 | 📞 24/7 Support: 1-800-AUTOPARTS
        </div>
      </div>

      {/* Header */}
      <header
        style={{ background: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {/* Main Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  background: "#e74c3c",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "15px",
                }}
              >
                🔧
              </div>
              <div>
                <h1
                  style={{
                    margin: "0",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c3e50",
                  }}
                >
                  AutoParts Pro
                </h1>
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    color: "#7f8c8d",
                  }}
                >
                  Your Trusted Parts Partner
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div style={{ flex: "1", maxWidth: "500px", margin: "0 30px" }}>
              <div
                style={{
                  display: "flex",
                  border: "2px solid #e74c3c",
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  placeholder="Search by part number, vehicle, or keyword..."
                  style={{
                    flex: "1",
                    padding: "12px 20px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
                <button
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  🔍
                </button>
              </div>
            </div>

            {/* Header Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: "24px" }}>❤️</div>
                <div style={{ fontSize: "12px", color: "#7f8c8d" }}>
                  Wishlist
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: "24px" }}>🛒</div>
                <div style={{ fontSize: "12px", color: "#7f8c8d" }}>
                  Cart (0)
                </div>
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    background: "#e74c3c",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  0
                </span>
              </div>
              <button
                style={{
                  background: "#34495e",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav
            style={{
              borderTop: "1px solid #ecf0f1",
              padding: "15px 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <div
                style={{
                  background: "#e74c3c",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                ☰ All Categories
              </div>
              {[
                "Engine Parts",
                "Brake System",
                "Suspension",
                "Electrical",
                "Body Parts",
                "Fluids & Oils",
                "Tools",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#2c3e50",
                    fontWeight: "500",
                    fontSize: "15px",
                    transition: "color 0.3s",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)",
          color: "white",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundImage:
              "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>\")",
            opacity: "0.5",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Hero Content */}
            <div>
              <div
                style={{
                  background: "rgba(231, 76, 60, 0.2)",
                  color: "#e74c3c",
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                ⚡ MEGA SALE - UP TO 50% OFF
              </div>

              <h1
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "25px",
                  background: "linear-gradient(45deg, #ffffff, #ecf0f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Premium Auto Parts for Every Vehicle
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.6",
                  marginBottom: "35px",
                  opacity: "0.9",
                }}
              >
                Discover our extensive collection of OEM and aftermarket parts.
                From engine components to body parts - we have everything you
                need to keep your vehicle running at its best.
              </p>

              <div
                style={{ display: "flex", gap: "15px", marginBottom: "40px" }}
              >
                <button
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "18px 35px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(231, 76, 60, 0.3)",
                  }}
                >
                  Shop Now
                </button>
                <button
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "2px solid white",
                    padding: "18px 35px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  View Catalog
                </button>
              </div>

              {/* Features */}
              <div style={{ display: "flex", gap: "30px" }}>
                {[
                  { icon: "🚚", text: "Free Shipping" },
                  { icon: "🛡️", text: "Warranty" },
                  { icon: "🔄", text: "Easy Returns" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{feature.icon}</span>
                    <span style={{ fontSize: "14px", opacity: "0.9" }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Search Form */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "40px",
                color: "#2c3e50",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "25px",
                  textAlign: "center",
                  color: "#2c3e50",
                }}
              >
                🔍 Find Parts for Your Vehicle
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                {[
                  {
                    label: "Year",
                    options: ["2024", "2023", "2022", "2021", "2020"],
                  },
                  {
                    label: "Make",
                    options: ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"],
                  },
                  {
                    label: "Model",
                    options: [
                      "Camry",
                      "Civic",
                      "F-150",
                      "Silverado",
                      "3 Series",
                    ],
                  },
                  {
                    label: "Engine",
                    options: ["2.5L 4-Cyl", "3.5L V6", "5.0L V8", "2.0L Turbo"],
                  },
                ].map((field, i) => (
                  <select
                    key={i}
                    style={{
                      padding: "15px",
                      border: "2px solid #ecf0f1",
                      borderRadius: "8px",
                      fontSize: "16px",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    <option>Select {field.label}</option>
                    {field.options.map((option, j) => (
                      <option key={j} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ))}

                <button
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "20px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Search Compatible Parts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ background: "#f8f9fa", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#2c3e50",
              }}
            >
              Shop by Category
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#7f8c8d",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Browse our comprehensive selection of auto parts organized by
              category
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                title: "Engine Parts",
                desc: "Pistons, Gaskets, Filters",
                icon: "🔧",
                count: "2,847 items",
                color: "#e74c3c",
              },
              {
                title: "Brake System",
                desc: "Pads, Rotors, Calipers",
                icon: "🛞",
                count: "1,523 items",
                color: "#3498db",
              },
              {
                title: "Suspension",
                desc: "Shocks, Struts, Springs",
                icon: "🔩",
                count: "1,891 items",
                color: "#9b59b6",
              },
              {
                title: "Electrical",
                desc: "Batteries, Starters, Alternators",
                icon: "⚡",
                count: "956 items",
                color: "#f39c12",
              },
              {
                title: "Body Parts",
                desc: "Bumpers, Mirrors, Lights",
                icon: "🚗",
                count: "2,134 items",
                color: "#2ecc71",
              },
              {
                title: "Interior",
                desc: "Seats, Floor Mats, Trim",
                icon: "🪑",
                count: "743 items",
                color: "#e67e22",
              },
            ].map((category, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid #ecf0f1",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                    color: "white",
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                    margin: "0 auto 20px auto",
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#2c3e50",
                  }}
                >
                  {category.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7f8c8d",
                    marginBottom: "15px",
                  }}
                >
                  {category.desc}
                </p>
                <div
                  style={{
                    background: category.color,
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                >
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#2c3e50",
                }}
              >
                Featured Products
              </h2>
              <p style={{ fontSize: "16px", color: "#7f8c8d" }}>
                Hand-picked premium parts for optimal performance
              </p>
            </div>
            <a
              href="#"
              style={{
                color: "#e74c3c",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              View All Products →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                name: "Premium Brake Pad Set",
                price: "$89.99",
                originalPrice: "$129.99",
                category: "Brake System",
                rating: 4.8,
                reviews: 156,
                badge: "BEST SELLER",
                image: "🛞",
              },
              {
                name: "High-Performance Air Filter",
                price: "$34.99",
                originalPrice: "$49.99",
                category: "Engine Parts",
                rating: 4.9,
                reviews: 89,
                badge: "TOP RATED",
                image: "🔧",
              },
              {
                name: "LED Headlight Assembly",
                price: "$199.99",
                originalPrice: "$299.99",
                category: "Lighting",
                rating: 4.7,
                reviews: 234,
                badge: "ON SALE",
                image: "💡",
              },
              {
                name: "Suspension Strut Kit",
                price: "$159.99",
                category: "Suspension",
                rating: 4.6,
                reviews: 67,
                badge: "NEW",
                image: "🔩",
              },
            ].map((product, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background:
                      product.badge === "BEST SELLER"
                        ? "#e74c3c"
                        : product.badge === "TOP RATED"
                          ? "#f39c12"
                          : product.badge === "ON SALE"
                            ? "#e67e22"
                            : "#2ecc71",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "bold",
                    zIndex: "2",
                  }}
                >
                  {product.badge}
                </div>

                {/* Product Image */}
                <div
                  style={{
                    height: "220px",
                    background: "linear-gradient(135deg, #f8f9fa, #ecf0f1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "64px",
                    position: "relative",
                  }}
                >
                  {product.image}

                  {/* Wishlist Button */}
                  <button
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      fontSize: "18px",
                    }}
                  >
                    🤍
                  </button>
                </div>

                {/* Product Info */}
                <div style={{ padding: "25px" }}>
                  <div
                    style={{
                      color: "#7f8c8d",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    {product.category}
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#2c3e50",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "15px",
                    }}
                  >
                    <div style={{ color: "#f39c12", fontSize: "14px" }}>
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span style={{ fontSize: "14px", color: "#7f8c8d" }}>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#e74c3c",
                      }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#95a5a6",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    style={{
                      width: "100%",
                      background: "#2c3e50",
                      color: "white",
                      border: "none",
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{ background: "#2c3e50", color: "white", padding: "80px 0" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Why Choose AutoParts Pro?
            </h2>
            <p style={{ fontSize: "18px", opacity: "0.9" }}>
              Your trusted partner for quality auto parts and exceptional
              service
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                icon: "🏆",
                title: "Premium Quality",
                desc: "OEM and high-grade aftermarket parts from trusted manufacturers",
              },
              {
                icon: "🚚",
                title: "Fast Shipping",
                desc: "Same-day processing with free shipping on orders over $75",
              },
              {
                icon: "💡",
                title: "Expert Support",
                desc: "24/7 technical support from certified automotive specialists",
              },
              {
                icon: "🔄",
                title: "Easy Returns",
                desc: "Hassle-free 30-day return policy with full refund guarantee",
              },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "20px",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    opacity: "0.9",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{ background: "#e74c3c", color: "white", padding: "60px 0" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Get Exclusive Deals & Updates
          </h3>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "30px",
              opacity: "0.9",
            }}
          >
            Subscribe to our newsletter for special offers, new arrivals, and
            automotive tips
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: "1",
                padding: "15px 20px",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
            <button
              style={{
                background: "#2c3e50",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1a1a1a",
          color: "white",
          padding: "60px 0 30px 0",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {/* Company Info */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    marginRight: "12px",
                  }}
                >
                  🔧
                </div>
                <h3
                  style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}
                >
                  AutoParts Pro
                </h3>
              </div>
              <p
                style={{
                  opacity: "0.8",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Your trusted source for premium auto parts. We provide quality
                components to keep your vehicle running at peak performance.
              </p>
              <div style={{ display: "flex", gap: "15px" }}>
                {["📘", "📱", "📧", "📷"].map((social, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#333",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Quick Links
              </h4>
              {[
                "About Us",
                "Contact",
                "Shipping Info",
                "Returns",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.3s",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Categories */}
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Categories
              </h4>
              {[
                "Engine Parts",
                "Brake System",
                "Suspension",
                "Electrical",
                "Body Parts",
                "Interior",
              ].map((category) => (
                <a
                  key={category}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.3s",
                  }}
                >
                  {category}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Contact Us
              </h4>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <span>📍</span>
                  <span style={{ opacity: "0.8" }}>
                    123 Auto Street, Car City, CC 12345
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <span>📞</span>
                  <span style={{ opacity: "0.8" }}>1-800-AUTOPARTS</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span>📧</span>
                  <span style={{ opacity: "0.8" }}>
                    support@autopartspro.com
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#333",
                  padding: "15px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    opacity: "0.8",
                    marginBottom: "5px",
                  }}
                >
                  24/7 Customer Support
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#e74c3c",
                  }}
                >
                  We're Here to Help!
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div
            style={{
              borderTop: "1px solid #333",
              paddingTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div style={{ opacity: "0.8" }}>
              © 2024 AutoParts Pro. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>🔒</span>
                <span style={{ fontSize: "14px", opacity: "0.8" }}>
                  Secure Payments
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>🚚</span>
                <span style={{ fontSize: "14px", opacity: "0.8" }}>
                  Fast Shipping
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>🛡️</span>
                <span style={{ fontSize: "14px", opacity: "0.8" }}>
                  Quality Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
