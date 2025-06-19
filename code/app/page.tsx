export default function HomePage() {
  // Real product data from your inventory
  const featuredProducts = [
    {
      name: "RIDEX Oil Filter",
      category: "Oil Filter",
      model: "E12/K13/N17",
      sku: "7O0026",
      brand: "RIDEX",
      stock: 30,
      price: 1300,
      description: "up to 10k kms",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
      badge: "BEST SELLER",
    },
    {
      name: "KAVO Air Filter",
      category: "Air Filter",
      model: "Teana L33 QR25de",
      sku: "NA-2650",
      brand: "KAVO",
      stock: 4,
      price: 4500,
      description: "Aftermarket OE Quality up-to 15k kms",
      image:
        "https://images.unsplash.com/photo-1486575008575-26d269a73fb8?w=300&h=200&fit=crop&crop=center",
      badge: "PREMIUM",
    },
    {
      name: "OSRAM Night Breaker 200",
      category: "Headlight Bulbs",
      model: "H4 models",
      sku: "NB200H4",
      brand: "OSRAM",
      stock: 10,
      price: 7500,
      originalPrice: 9500,
      description: "(pack of 2)",
      image:
        "https://images.unsplash.com/photo-1544829200-ff9c4e2b7de5?w=300&h=200&fit=crop&crop=center",
      badge: "TOP RATED",
    },
    {
      name: "NGK Spark Plugs DIG-S",
      category: "Spark Plugs",
      model: "Note E12 DIG-S",
      sku: "DILKAR7E11HS",
      brand: "NGK",
      stock: 33,
      price: 4600,
      description: "High Performance",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center",
      badge: "IN STOCK",
    },
  ];

  const categories = [
    {
      title: "Oil Filters",
      subtitle: "RIDEX, STARK, Premium Quality",
      icon: "🛢️",
      count: "63 items",
      color: "#e74c3c",
      products: ["RIDEX 7O0026", "RIDEX Plus 7O0026P", "STARK SKOF-0860025"],
    },
    {
      title: "Air Filters",
      subtitle: "KAVO, JAPKO, TOPRAN, RIDEX",
      icon: "🌬️",
      count: "29 items",
      color: "#3498db",
      products: ["KAVO NA-2650", "JAPKO 20148", "TOPRAN 701527"],
    },
    {
      title: "Brake System",
      subtitle: "LPR, JAPKO, KAVO, Brembo",
      icon: "🛞",
      count: "12 items",
      color: "#9b59b6",
      products: ["LPR 05P1686", "JAPKO 501002", "Brembo S 56 510"],
    },
    {
      title: "Lighting",
      subtitle: "OSRAM Premium Range",
      icon: "💡",
      count: "21 items",
      color: "#f39c12",
      products: ["OSRAM NB200H4", "OSRAM CBI100H4", "OSRAM W5W-CBI"],
    },
    {
      title: "Cabin Filters",
      subtitle: "KAVO, JPN, Denkermann",
      icon: "🍃",
      count: "5 items",
      color: "#2ecc71",
      products: ["KAVO NC-2037", "JPN 40F1025-JPN", "Denkermann M110850K"],
    },
    {
      title: "Spark Plugs",
      subtitle: "NGK Professional Grade",
      icon: "⚡",
      count: "39 items",
      color: "#e67e22",
      products: ["NGK DILKAR7E11HS", "NGK DILKAR6A11", "NGK DILZKAR6A11"],
    },
    {
      title: "Belts & Chains",
      subtitle: "RIDEX, DAYCO, KAMOKA",
      icon: "🔗",
      count: "10 items",
      color: "#34495e",
      products: ["RIDEX 305P0095", "DAYCO 3PK800", "KAMOKA KA07017009"],
    },
    {
      title: "Wipers",
      subtitle: "STARK, BOSCH Premium",
      icon: "🧽",
      count: "7 items",
      color: "#95a5a6",
      products: ["STARK SKWIB-0940152", "BOSCH 3397014128"],
    },
  ];

  const brandShowcase = [
    {
      name: "RIDEX",
      logo: "🔧",
      specialty: "Filters & Engine Parts",
      products: 8,
    },
    { name: "KAVO", logo: "⚙️", specialty: "Premium OE Quality", products: 4 },
    {
      name: "OSRAM",
      logo: "💡",
      specialty: "Automotive Lighting",
      products: 3,
    },
    { name: "NGK", logo: "⚡", specialty: "Ignition Systems", products: 8 },
    {
      name: "BOSCH",
      logo: "🔬",
      specialty: "Advanced Technology",
      products: 2,
    },
    { name: "Brembo", logo: "🛞", specialty: "Brake Systems", products: 1 },
    { name: "DAYCO", logo: "🔗", specialty: "Belt Systems", products: 1 },
    { name: "STARK", logo: "🔨", specialty: "Quality Parts", products: 2 },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Top promotional banner */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(30, 30, 31) 0%, rgb(247, 51, 18) 100%)",
          color: "white",
          padding: "12px 0",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>BLACK FRIDAY 50% OFF - Use Code: BRATOR50</span>
            <span>24/7 Support: +254-XXX-XXXX</span>
          </div>
          <select
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "6px 12px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            <option>Kenya</option>
            <option>Uganda</option>
            <option>Tanzania</option>
          </select>
        </div>
      </div>

      {/* Enhanced main header */}
      <header
        style={{
          background: "rgb(38, 38, 39)",
          color: "white",
          padding: "20px 0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Enhanced Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                boxShadow: "0 4px 15px rgba(247, 51, 18, 0.3)",
              }}
            >
              B
            </div>
            <div>
              <h1
                style={{
                  color: "rgb(247, 51, 18)",
                  fontSize: "32px",
                  fontWeight: "800",
                  margin: "0",
                  letterSpacing: "-1px",
                }}
              >
                Brator
              </h1>
              <p
                style={{
                  margin: "0",
                  fontSize: "12px",
                  color: "#bdc3c7",
                  fontWeight: "500",
                }}
              >
                Premium Auto Parts
              </p>
            </div>
          </div>

          {/* Enhanced search bar */}
          <div
            style={{
              flex: "1",
              maxWidth: "600px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: "25px",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                border: "2px solid transparent",
              }}
            >
              <input
                type="text"
                placeholder="Search by part number, brand, or vehicle model..."
                style={{
                  flex: "1",
                  padding: "15px 25px",
                  border: "none",
                  outline: "none",
                  fontSize: "15px",
                  fontFamily: "Arial, sans-serif",
                }}
              />
              <button
                style={{
                  background:
                    "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                  border: "none",
                  padding: "15px 25px",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Enhanced user actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                padding: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  marginBottom: "4px",
                  fontWeight: "600",
                }}
              >
                ♡
              </div>
              <span style={{ fontSize: "11px", color: "#bdc3c7" }}>
                Wishlist
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "rgb(247, 51, 18)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "10px",
                  minWidth: "18px",
                  height: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                0
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                padding: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  marginBottom: "4px",
                  fontWeight: "600",
                }}
              >
                □
              </div>
              <span style={{ fontSize: "11px", color: "#bdc3c7" }}>Cart</span>
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "rgb(247, 51, 18)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "10px",
                  minWidth: "18px",
                  height: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                0
              </span>
            </div>

            <button
              style={{
                background:
                  "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                boxShadow: "0 4px 15px rgba(247, 51, 18, 0.3)",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Premium navigation */}
      <nav
        style={{
          background: "white",
          borderBottom: "1px solid #ecf0f1",
          padding: "15px 0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgb(247, 51, 18)",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "15px",
              boxShadow: "0 4px 15px rgba(247, 51, 18, 0.2)",
            }}
          >
            All Categories
          </button>

          <div
            style={{
              display: "flex",
              gap: "35px",
              flex: "1",
            }}
          >
            {[
              "Home",
              "Shop by Vehicle",
              "Brands",
              "Deals",
              "About",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#2c3e50",
                  fontWeight: "600",
                  fontSize: "15px",
                  padding: "8px 0",
                  borderBottom:
                    item === "Home"
                      ? "2px solid rgb(247, 51, 18)"
                      : "2px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="#"
              style={{
                color: "rgb(247, 51, 18)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Track Your Order
            </a>
            <span
              style={{
                background: "#27ae60",
                color: "white",
                padding: "4px 12px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Live Support
            </span>
          </div>
        </div>
      </nav>

      {/* Enhanced hero section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)",
          color: "white",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(247, 51, 18, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(247, 51, 18, 0.05) 0%, transparent 50%)",
            opacity: "0.8",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            position: "relative",
            zIndex: "1",
          }}
        >
          {/* Enhanced hero content */}
          <div>
            <div
              style={{
                background: "rgba(247, 51, 18, 0.2)",
                color: "rgb(247, 51, 18)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "25px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "25px",
                border: "1px solid rgba(247, 51, 18, 0.3)",
              }}
            >
              #1 TRUSTED AUTO PARTS DEALER
            </div>

            <h1
              style={{
                fontSize: "64px",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "25px",
                background: "linear-gradient(45deg, #ffffff, #ecf0f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Premium Car Parts
              <span style={{ color: "rgb(247, 51, 18)" }}> & Accessories</span>
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.6",
                marginBottom: "35px",
                opacity: "0.9",
                fontWeight: "400",
              }}
            >
              Genuine OEM and premium aftermarket parts from top brands like
              <strong> RIDEX, KAVO, OSRAM, NGK</strong> and more. Quality
              guaranteed with fast shipping across UAE.
            </p>

            <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
              <button
                style={{
                  background:
                    "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                  color: "white",
                  border: "none",
                  padding: "18px 35px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(247, 51, 18, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Shop Now
              </button>
              <button
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  padding: "18px 35px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                View Catalog
              </button>
            </div>

            {/* Premium features */}
            <div style={{ display: "flex", gap: "35px" }}>
              {[
                { text: "Free Delivery", detail: "Orders >5,000 KES" },
                { text: "2 Year Warranty", detail: "All Products" },
                { text: "Easy Returns", detail: "30 Day Policy" },
              ].map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>
                      {feature.text}
                    </div>
                    <div style={{ fontSize: "12px", opacity: "0.8" }}>
                      {feature.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced vehicle search form */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              color: "#2c3e50",
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  margin: "0 auto 15px auto",
                  boxShadow: "0 8px 25px rgba(247, 51, 18, 0.3)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                S
              </div>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Find Your Parts
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#7f8c8d",
                  margin: "0",
                }}
              >
                Search by vehicle details for compatible parts
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "15px",
              }}
            >
              {[
                {
                  label: "Year",
                  options: [
                    "2024",
                    "2023",
                    "2022",
                    "2021",
                    "2020",
                    "2019",
                    "2018",
                  ],
                },
                {
                  label: "Make",
                  options: [
                    "Nissan",
                    "Toyota",
                    "Honda",
                    "Mazda",
                    "Infiniti",
                    "Lexus",
                  ],
                },
                {
                  label: "Model",
                  options: [
                    "Note E12",
                    "Teana L33",
                    "March K13",
                    "Tiida C11",
                    "X-Trail T32",
                  ],
                },
                {
                  label: "Engine",
                  options: ["DIG-S", "QR25DE", "Puredrive", "CVT", "E-Power"],
                },
              ].map((field, i) => (
                <select
                  key={i}
                  style={{
                    padding: "15px 20px",
                    border: "2px solid #ecf0f1",
                    borderRadius: "10px",
                    fontSize: "15px",
                    background: "white",
                    cursor: "pointer",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <option style={{ color: "#bdc3c7" }}>
                    Select {field.label}
                  </option>
                  {field.options.map((option, j) => (
                    <option key={j} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}

              <button
                style={{
                  background:
                    "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                  color: "white",
                  border: "none",
                  padding: "18px 25px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginTop: "15px",
                  boxShadow: "0 8px 25px rgba(247, 51, 18, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Find Compatible Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section with real data */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
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
              Browse our premium selection of authentic auto parts by category
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "30px",
                  cursor: "pointer",
                  border: "1px solid #ecf0f1",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background decoration */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: `linear-gradient(135deg, ${category.color}15, ${category.color}05)`,
                    borderRadius: "50%",
                  }}
                />

                <div style={{ position: "relative", zIndex: "1" }}>
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                      color: "white",
                      width: "70px",
                      height: "70px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      marginBottom: "20px",
                      boxShadow: `0 8px 25px ${category.color}30`,
                    }}
                  >
                    {category.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      marginBottom: "8px",
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
                      lineHeight: "1.5",
                    }}
                  >
                    {category.subtitle}
                  </p>

                  <div
                    style={{
                      background: category.color,
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      display: "inline-block",
                      marginBottom: "15px",
                    }}
                  >
                    {category.count}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#95a5a6",
                      fontWeight: "500",
                    }}
                  >
                    Featured: {category.products.slice(0, 2).join(", ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with real inventory */}
      <section
        style={{
          background: "white",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
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
                  fontSize: "42px",
                  fontWeight: "800",
                  marginBottom: "10px",
                  color: "#2c3e50",
                }}
              >
                Featured Products
              </h2>
              <p style={{ fontSize: "16px", color: "#7f8c8d" }}>
                Premium quality parts from trusted brands
              </p>
            </div>
            <a
              href="#"
              style={{
                color: "rgb(247, 51, 18)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View All Products →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  border: "1px solid #f1f2f6",
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
                          : product.badge === "PREMIUM"
                            ? "#9b59b6"
                            : "#27ae60",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    zIndex: "2",
                    textTransform: "uppercase",
                  }}
                >
                  {product.badge}
                </div>

                {/* Stock indicator */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background:
                      product.stock > 10
                        ? "#27ae60"
                        : product.stock > 0
                          ? "#f39c12"
                          : "#e74c3c",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    fontWeight: "600",
                    zIndex: "2",
                  }}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </div>

                {/* Product Image */}
                <div
                  style={{
                    height: "240px",
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  {/* Wishlist Button */}
                  <button
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      background: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "44px",
                      height: "44px",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    🤍
                  </button>
                </div>

                {/* Product Info */}
                <div style={{ padding: "25px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        color: "#7f8c8d",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        background: "#f8f9fa",
                        padding: "4px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {product.category}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#95a5a6",
                        fontWeight: "600",
                      }}
                    >
                      {product.sku}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#2c3e50",
                      marginBottom: "8px",
                      lineHeight: "1.4",
                    }}
                  >
                    {product.name}
                  </h3>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#7f8c8d",
                      marginBottom: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>🚗 {product.model}</span>
                    <span style={{ fontWeight: "600", color: "#2c3e50" }}>
                      {product.brand}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#95a5a6",
                      marginBottom: "15px",
                      lineHeight: "1.4",
                    }}
                  >
                    {product.description}
                  </p>

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
                        fontWeight: "700",
                        color: "rgb(247, 51, 18)",
                      }}
                    >
                      {product.price.toLocaleString()} AED
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#95a5a6",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.originalPrice.toLocaleString()} AED
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    style={{
                      width: "100%",
                      background:
                        product.stock > 0
                          ? "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))"
                          : "#95a5a6",
                      color: "white",
                      border: "none",
                      padding: "15px",
                      borderRadius: "10px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: product.stock > 0 ? "pointer" : "not-allowed",
                      boxShadow:
                        product.stock > 0
                          ? "0 4px 15px rgba(247, 51, 18, 0.3)"
                          : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {product.stock > 0 ? "🛒 Add to Cart" : "❌ Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand showcase */}
      <section
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          color: "white",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "15px",
              }}
            >
              Trusted Brands
            </h2>
            <p style={{ fontSize: "18px", opacity: "0.9" }}>
              We partner with industry-leading manufacturers
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {brandShowcase.map((brand, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  padding: "30px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "20px",
                  }}
                >
                  {brand.logo}
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "rgb(247, 51, 18)",
                  }}
                >
                  {brand.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    opacity: "0.8",
                    marginBottom: "15px",
                  }}
                >
                  {brand.specialty}
                </p>
                <div
                  style={{
                    background: "rgba(247, 51, 18, 0.2)",
                    color: "rgb(247, 51, 18)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  {brand.products} Products Available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
          color: "white",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "36px",
              fontWeight: "800",
              marginBottom: "15px",
            }}
          >
            Stay Updated with Brator
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "40px",
              opacity: "0.95",
            }}
          >
            Get exclusive deals, new arrivals, and automotive tips delivered to
            your inbox
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
                padding: "18px 24px",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "#2c3e50",
                color: "white",
                border: "none",
                padding: "18px 30px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Premium footer */}
      <footer
        style={{
          background: "#1a1a1a",
          color: "white",
          padding: "80px 0 40px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "50px",
              marginBottom: "50px",
            }}
          >
            {/* Company Info */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginRight: "15px",
                  }}
                >
                  🔧
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: "800",
                      margin: "0",
                      color: "rgb(247, 51, 18)",
                    }}
                  >
                    Brator
                  </h3>
                  <p
                    style={{ fontSize: "12px", margin: "0", color: "#bdc3c7" }}
                  >
                    Premium Auto Parts
                  </p>
                </div>
              </div>
              <p
                style={{
                  opacity: "0.8",
                  lineHeight: "1.6",
                  marginBottom: "25px",
                }}
              >
                Your trusted source for premium auto parts in UAE. We provide
                authentic OEM and high-quality aftermarket components from top
                brands worldwide.
              </p>
              <div
                style={{
                  background: "#2c3e50",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgb(247, 51, 18)",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  📞 24/7 Customer Support
                </div>
                <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  +971-XXX-XXXX
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "25px",
                  color: "rgb(247, 51, 18)",
                }}
              >
                Quick Links
              </h4>
              {[
                "About Brator",
                "Contact Us",
                "Shipping & Delivery",
                "Returns & Exchanges",
                "Warranty Information",
                "Privacy Policy",
                "Terms of Service",
                "Track Your Order",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    marginBottom: "12px",
                    transition: "color 0.3s",
                    fontSize: "14px",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Product Categories */}
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "25px",
                  color: "rgb(247, 51, 18)",
                }}
              >
                Popular Categories
              </h4>
              {[
                "Oil Filters",
                "Air Filters",
                "Brake Systems",
                "Lighting Solutions",
                "Spark Plugs",
                "Cabin Filters",
                "Belt Systems",
                "Suspension Parts",
              ].map((category) => (
                <a
                  key={category}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    marginBottom: "12px",
                    transition: "color 0.3s",
                    fontSize: "14px",
                  }}
                >
                  {category}
                </a>
              ))}
            </div>

            {/* Contact & Trust */}
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "25px",
                  color: "rgb(247, 51, 18)",
                }}
              >
                Get In Touch
              </h4>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>📍</span>
                  <span style={{ opacity: "0.8", fontSize: "14px" }}>
                    Dubai Auto Parts Market, UAE
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>📧</span>
                  <span style={{ opacity: "0.8", fontSize: "14px" }}>
                    info@brator.com
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>⏰</span>
                  <span style={{ opacity: "0.8", fontSize: "14px" }}>
                    Mon-Sat: 8AM-8PM
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px",
                }}
              >
                {[
                  { icon: "🔒", text: "Secure Payments" },
                  { icon: "🚚", text: "Fast Delivery" },
                  { icon: "🛡️", text: "Authentic Parts" },
                  { icon: "💯", text: "Quality Assured" },
                ].map((trust, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#2c3e50",
                      padding: "12px",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "20px", marginBottom: "5px" }}>
                      {trust.icon}
                    </div>
                    <div style={{ fontSize: "11px", fontWeight: "600" }}>
                      {trust.text}
                    </div>
                  </div>
                ))}
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
            <div style={{ opacity: "0.8", fontSize: "14px" }}>
              © 2024 Brator Premium Auto Parts. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
              <span style={{ fontSize: "14px", opacity: "0.8" }}>
                Trusted by 10,000+ customers
              </span>
              <div style={{ display: "flex", gap: "10px" }}>
                {["💳", "🏦", "📱"].map((payment, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#333",
                      padding: "8px",
                      borderRadius: "6px",
                      fontSize: "16px",
                    }}
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
