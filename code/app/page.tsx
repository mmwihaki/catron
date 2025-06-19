export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Top promotional banner */}
      <div
        style={{
          background: "rgb(30, 30, 31)",
          color: "white",
          padding: "10px 0",
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
          <span>BLACK FRIDAY 50% Brator50</span>
          <select
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
          >
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
        </div>
      </div>

      {/* Main header */}
      <header
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
          <div>
            <h1
              style={{
                color: "rgb(247, 51, 18)",
                fontSize: "28px",
                fontWeight: "800",
                margin: "0",
              }}
            >
              Brator
            </h1>
          </div>

          {/* Search bar */}
          <div
            style={{
              flex: "1",
              maxWidth: "500px",
              display: "flex",
              borderRadius: "6px",
              overflow: "hidden",
              background: "white",
            }}
          >
            <input
              type="text"
              placeholder="Search for car parts, accessories..."
              style={{
                flex: "1",
                padding: "12px 15px",
                border: "none",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              style={{
                background: "rgb(247, 51, 18)",
                border: "none",
                padding: "12px 15px",
                color: "white",
                cursor: "pointer",
              }}
            >
              🔍
            </button>
          </div>

          {/* User actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "20px" }}>❤️</div>
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  background: "rgb(247, 51, 18)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "10px",
                  minWidth: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                0
              </span>
            </div>

            <div
              style={{
                textAlign: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "20px" }}>🛒</div>
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  background: "rgb(247, 51, 18)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "10px",
                  minWidth: "16px",
                  height: "16px",
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
                background: "rgb(247, 51, 18)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        style={{
          background: "rgb(242, 242, 247)",
          borderBottom: "1px solid rgb(212, 212, 212)",
          padding: "15px 0",
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
              gap: "10px",
              background: "transparent",
              border: "1px solid rgb(212, 212, 212)",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ☰ Categories
          </button>

          <div
            style={{
              display: "flex",
              gap: "30px",
              flex: "1",
            }}
          >
            {["Home", "Shop", "Brands", "Deals", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "600",
                    fontSize: "16px",
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
              color: "rgb(247, 51, 18)",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Track Your Order
          </a>
        </div>
      </nav>

      {/* Hero section */}
      <section
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          color: "white",
          padding: "80px 0",
          position: "relative",
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
          {/* Hero content */}
          <div>
            <h2
              style={{
                color: "rgb(247, 51, 18)",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "1px",
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
                marginBottom: "30px",
              }}
            >
              Find the perfect parts for your vehicle with our extensive catalog
              of OEM and aftermarket car parts and accessories.
            </p>
          </div>

          {/* Vehicle search form */}
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "30px",
              color: "#333",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#333",
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
                      background: "white",
                      outline: "none",
                    }}
                  >
                    <option>{field}</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                ),
              )}
              <button
                style={{
                  gridColumn: "1 / -1",
                  background: "rgb(247, 51, 18)",
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

      {/* Categories section */}
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
              marginBottom: "50px",
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
              {
                title: "Exterior",
                subtitle: "Bumpers, Grilles, Mirrors",
                icon: "���",
                count: "1,789",
              },
              {
                title: "Electronics",
                subtitle: "Audio, GPS, Sensors",
                icon: "📱",
                count: "956",
              },
              {
                title: "Tools",
                subtitle: "Wrenches, Jacks, Scanners",
                icon: "🔨",
                count: "534",
              },
              {
                title: "Tires",
                subtitle: "All Season, Winter, Summer",
                icon: "⭕",
                count: "1,245",
              },
              {
                title: "Oils & Fluids",
                subtitle: "Motor Oil, Coolant, Brake",
                icon: "🛢️",
                count: "723",
              },
              {
                title: "Battery",
                subtitle: "Lead Acid, AGM, Lithium",
                icon: "🔋",
                count: "445",
              },
              {
                title: "Performance",
                subtitle: "Turbo, Intake, Tuning",
                icon: "🏁",
                count: "867",
              },
              {
                title: "Body Parts",
                subtitle: "Doors, Hoods, Fenders",
                icon: "🚙",
                count: "1,123",
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
                  border: "2px solid transparent",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, rgb(247, 51, 18), rgb(220, 40, 15))",
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
                      color: "rgb(102, 102, 102)",
                      marginBottom: "8px",
                    }}
                  >
                    {category.subtitle}
                  </p>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgb(153, 153, 153)",
                      fontWeight: "600",
                    }}
                  >
                    {category.count} items
                  </span>
                </div>
                <div
                  style={{
                    color: "rgb(153, 153, 153)",
                    fontSize: "20px",
                  }}
                >
                  →
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "transparent",
                color: "rgb(247, 51, 18)",
                border: "2px solid rgb(247, 51, 18)",
                padding: "15px 40px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Load More Categories
            </button>
          </div>
        </div>
      </section>

      {/* What's Hot section */}
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
            What's Hot
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                background: "linear-gradient(135deg, #ff6b6b, #ff8787)",
                text: "Keep things running smoothly",
                title: "Helix",
                description: "Premium engine oils and lubricants",
              },
              {
                background: "linear-gradient(135deg, #4ecdc4, #44a08d)",
                text: "Performance unleashed",
                title: "Turbo Kits",
                description: "Boost your engine power",
              },
              {
                background: "linear-gradient(135deg, #45b7d1, #96c93d)",
                text: "Crystal clear vision",
                title: "LED Lighting",
                description: "Brighten your drive",
              },
            ].map((promo, index) => (
              <div
                key={index}
                style={{
                  background: promo.background,
                  borderRadius: "16px",
                  padding: "40px",
                  color: "white",
                  minHeight: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    opacity: "0.9",
                  }}
                >
                  {promo.text}
                </p>
                <h3
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "15px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {promo.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "25px",
                    opacity: "0.9",
                  }}
                >
                  {promo.description}
                </p>
                <button
                  style={{
                    background: "white",
                    color: "#333",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Makes section */}
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
              background: "white",
              borderRadius: "12px",
              padding: "8px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              maxWidth: "400px",
              margin: "0 auto 40px auto",
            }}
          >
            <button
              style={{
                flex: "1",
                padding: "15px 25px",
                border: "none",
                background: "rgb(247, 51, 18)",
                color: "white",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Featured Makes
            </button>
            <button
              style={{
                flex: "1",
                padding: "15px 25px",
                border: "none",
                background: "transparent",
                color: "#666",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Featured Models
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "15px",
              marginBottom: "50px",
            }}
          >
            {[
              "Acura",
              "Audi",
              "BMW",
              "Buick",
              "Cadillac",
              "Chevrolet",
              "Chrysler",
              "Dodge",
              "Ford",
              "GMC",
              "Honda",
              "Hyundai",
              "Infiniti",
              "Jeep",
              "Kia",
              "Lexus",
              "Lincoln",
              "Mazda",
              "Mercedes-Benz",
              "Mitsubishi",
              "Nissan",
              "Pontiac",
              "Ram",
              "Subaru",
              "Toyota",
              "Volkswagen",
              "Volvo",
              "Tesla",
            ].map((make, index) => (
              <button
                key={index}
                style={{
                  background: "white",
                  border: "2px solid rgb(212, 212, 212)",
                  borderRadius: "8px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333",
                  transition: "all 0.3s ease",
                }}
              >
                <span>{make}</span>
                <span style={{ opacity: "0.5" }}>→</span>
              </button>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "transparent",
                color: "rgb(247, 51, 18)",
                border: "2px solid rgb(247, 51, 18)",
                padding: "15px 40px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              View More Makes
            </button>
          </div>
        </div>
      </section>

      {/* Essential Items section */}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "700",
                margin: "0",
              }}
            >
              Essential Items for New Car
            </h2>
            <a
              href="#"
              style={{
                color: "rgb(247, 51, 18)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              See All →
            </a>
          </div>

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
                originalPrice: "$129.99",
                rating: 4.5,
                badge: "Sale",
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
                originalPrice: "$199.99",
                rating: 4.7,
                badge: "Sale",
              },
              {
                title: "LED Headlight Bulbs",
                category: "Lighting",
                price: "$49.99",
                rating: 4.6,
                badge: "New",
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
                  position: "relative",
                }}
              >
                {product.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      background:
                        product.badge === "Sale"
                          ? "rgb(247, 51, 18)"
                          : "#2ecc71",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                      zIndex: "2",
                    }}
                  >
                    {product.badge}
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
                      fontSize: "16px",
                    }}
                  >
                    ❤️
                  </button>
                </div>

                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgb(153, 153, 153)",
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
                      color: "#f39c12",
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
                        color: "rgb(247, 51, 18)",
                      }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: "14px",
                          color: "rgb(153, 153, 153)",
                          textDecoration: "line-through",
                          marginLeft: "8px",
                        }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    style={{
                      width: "100%",
                      background: "rgb(247, 51, 18)",
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
              color: "rgb(247, 51, 18)",
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
