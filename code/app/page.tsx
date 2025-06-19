export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header>
        {/* Top Banner */}
        <div
          style={{
            background: "rgb(30, 30, 31)",
            color: "white",
            padding: "10px 0",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          BLACK FRIDAY 50% OFF - Use Code: Brator50
        </div>

        {/* Main Header */}
        <div
          style={{
            background: "rgb(38, 38, 39)",
            color: "white",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {/* Logo */}
            <h1
              style={{
                color: "#F73312",
                fontSize: "28px",
                fontWeight: "800",
                margin: "0",
              }}
            >
              Brator
            </h1>

            {/* Search */}
            <div
              style={{
                flex: "1",
                maxWidth: "500px",
                display: "flex",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <input
                type="text"
                placeholder="Search for car parts, accessories..."
                style={{
                  flex: "1",
                  padding: "12px 15px",
                  border: "none",
                  fontSize: "14px",
                }}
              />
              <button
                style={{
                  background: "#F73312",
                  color: "white",
                  border: "none",
                  padding: "12px 15px",
                  cursor: "pointer",
                }}
              >
                🔍
              </button>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <span style={{ cursor: "pointer" }}>❤️ 0</span>
              <span style={{ cursor: "pointer" }}>🛒 0</span>
              <button
                style={{
                  background: "#F73312",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          style={{
            background: "rgb(242, 242, 247)",
            padding: "15px 0",
            borderBottom: "1px solid #ddd",
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
                background: "white",
                border: "1px solid #ddd",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ☰ Categories
            </button>

            <div style={{ display: "flex", gap: "30px" }}>
              {["Home", "Shop", "Brands", "Deals", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            <a
              href="#"
              style={{
                color: "#F73312",
                textDecoration: "none",
                fontWeight: "600",
                marginLeft: "auto",
              }}
            >
              Track Your Order
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                color: "#F73312",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              #1 Online Marketplace
            </h2>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "20px",
              }}
            >
              Car Spares OEM & Aftermarkets
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                opacity: "0.9",
              }}
            >
              Find the perfect parts for your vehicle with our extensive catalog
              of OEM and aftermarket car parts and accessories.
            </p>
          </div>

          {/* Vehicle Search Form */}
          <div
            style={{
              background: "white",
              color: "#333",
              borderRadius: "12px",
              padding: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "25px",
                textAlign: "center",
              }}
            >
              Search by Vehicle
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
              }}
            >
              {["Year", "Brand", "Model", "Engine", "Fuel Type"].map(
                (field) => (
                  <select
                    key={field}
                    style={{
                      padding: "15px",
                      border: "2px solid #e1e1e1",
                      borderRadius: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <option>{field}</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                ),
              )}
              <button
                style={{
                  gridColumn: "1 / -1",
                  background: "#F73312",
                  color: "white",
                  border: "none",
                  padding: "18px 30px",
                  fontSize: "18px",
                  fontWeight: "700",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Search Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        style={{
          background: "rgb(242, 242, 247)",
          padding: "65px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Shop by Categories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Auto Parts",
                subtitle: "Mesh, Billet, CNC",
                icon: "🔧",
                count: "2,547",
              },
              {
                title: "Car Care",
                subtitle: "Polishes, Cleaners",
                icon: "🧽",
                count: "1,234",
              },
              {
                title: "Engine Parts",
                subtitle: "Filters, Belts, Hoses",
                icon: "⚙️",
                count: "3,891",
              },
              {
                title: "Brake System",
                subtitle: "Pads, Rotors, Fluids",
                icon: "🛞",
                count: "1,567",
              },
              {
                title: "Lighting",
                subtitle: "LED, Halogen, Xenon",
                icon: "💡",
                count: "892",
              },
              {
                title: "Suspension",
                subtitle: "Shocks, Struts, Springs",
                icon: "🔩",
                count: "1,345",
              },
              {
                title: "Exhaust",
                subtitle: "Mufflers, Pipes, Catalytic",
                icon: "🚗",
                count: "678",
              },
              {
                title: "Interior",
                subtitle: "Seats, Mats, Covers",
                icon: "🪑",
                count: "2,134",
              },
            ].map((category, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  border: "2px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #F73312, #dc280f)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  {category.icon}
                </div>
                <div style={{ flex: "1" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#333",
                      marginBottom: "5px",
                    }}
                  >
                    {category.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginBottom: "8px",
                    }}
                  >
                    {category.subtitle}
                  </p>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      fontWeight: "600",
                    }}
                  >
                    {category.count} items
                  </span>
                </div>
                <div
                  style={{
                    color: "#999",
                    fontSize: "20px",
                  }}
                >
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        style={{
          background: "white",
          padding: "65px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Essential Items for New Car
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "M195 METHOS Black with Bronze Face",
                category: "Air Filters",
                price: "$89.99",
                original: "$129.99",
                rating: 4.5,
              },
              {
                title: "Premium Engine Oil Filter",
                category: "Oil Filters",
                price: "$24.99",
                rating: 4.8,
              },
              {
                title: "High Performance Brake Pads",
                category: "Brake Parts",
                price: "$159.99",
                original: "$199.99",
                rating: 4.7,
              },
              {
                title: "LED Headlight Bulbs",
                category: "Lighting",
                price: "$49.99",
                rating: 4.6,
              },
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  border: "2px solid transparent",
                }}
              >
                {product.original && (
                  <span
                    style={{
                      position: "absolute",
                      background: "#F73312",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Sale
                  </span>
                )}
                <div
                  style={{
                    height: "200px",
                    background: "rgb(247, 247, 250)",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    position: "relative",
                  }}
                >
                  🚗
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "36px",
                      height: "36px",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    ❤️
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    {product.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                      margin: "8px 0",
                      lineHeight: "1.4",
                    }}
                  >
                    {product.title}
                  </h3>
                  <div
                    style={{
                      margin: "10px 0",
                      fontSize: "14px",
                    }}
                  >
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))} (
                    {product.rating})
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#F73312",
                      }}
                    >
                      {product.price}
                    </span>
                    {product.original && (
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#999",
                          textDecoration: "line-through",
                          marginLeft: "8px",
                        }}
                      >
                        {product.original}
                      </span>
                    )}
                  </div>
                  <button
                    style={{
                      width: "100%",
                      background: "#F73312",
                      color: "white",
                      border: "none",
                      padding: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                      borderRadius: "6px",
                      cursor: "pointer",
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

      {/* Footer */}
      <footer
        style={{
          background: "rgb(38, 38, 39)",
          color: "white",
          padding: "60px 0 40px 0",
        }}
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
              color: "#F73312",
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Brator
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "30px",
              opacity: "0.9",
            }}
          >
            Your trusted partner for car parts and accessories
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div>
              <h4 style={{ marginBottom: "15px", color: "#F73312" }}>
                Quick Links
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {["Home", "Shop", "Brands", "About", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      opacity: "0.8",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: "15px", color: "#F73312" }}>
                Categories
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {[
                  "Auto Parts",
                  "Engine Parts",
                  "Brake System",
                  "Lighting",
                  "Suspension",
                ].map((category) => (
                  <a
                    key={category}
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      opacity: "0.8",
                    }}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: "15px", color: "#F73312" }}>
                Support
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {[
                  "Help Center",
                  "Track Order",
                  "Returns",
                  "Shipping Info",
                  "FAQ",
                ].map((support) => (
                  <a
                    key={support}
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      opacity: "0.8",
                    }}
                  >
                    {support}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              paddingTop: "20px",
              fontSize: "14px",
              opacity: "0.8",
            }}
          >
            © 2024 Brator. All rights reserved. | #1 Online Marketplace for Car
            Parts
          </div>
        </div>
      </footer>
    </div>
  );
}
