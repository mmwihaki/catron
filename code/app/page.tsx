import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          padding: "80px 0",
          color: "white",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  color: "rgb(247, 51, 18)",
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
                Find the perfect parts for your vehicle with our extensive
                catalog of OEM and aftermarket car parts and accessories.
              </p>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "30px",
                color: "#333",
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
                        background: "white",
                      }}
                    >
                      <option>{field}</option>
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
        </div>
      </section>

      {/* Categories Section */}
      <section
        style={{
          backgroundColor: "rgb(242, 242, 247)",
          padding: "65px 0",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "30px",
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
              },
              { title: "Car Care", subtitle: "Polishes, Cleaners", icon: "🧽" },
              {
                title: "Engine Parts",
                subtitle: "Filters, Belts, Hoses",
                icon: "⚙️",
              },
              {
                title: "Brake System",
                subtitle: "Pads, Rotors, Fluids",
                icon: "🛞",
              },
              {
                title: "Lighting",
                subtitle: "LED, Halogen, Xenon",
                icon: "💡",
              },
              {
                title: "Suspension",
                subtitle: "Shocks, Struts, Springs",
                icon: "🔩",
              },
              {
                title: "Exhaust",
                subtitle: "Mufflers, Pipes, Catalytic",
                icon: "🚗",
              },
              {
                title: "Interior",
                subtitle: "Seats, Mats, Covers",
                icon: "🪑",
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
                      margin: "0",
                    }}
                  >
                    {category.subtitle}
                  </p>
                </div>
                <div style={{ color: "rgb(153, 153, 153)" }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: "65px 0", background: "white" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Featured Products
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
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                title: "Premium Engine Oil Filter",
                category: "Oil Filters",
                price: "$24.99",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                title: "High Performance Brake Pads",
                category: "Brake Parts",
                price: "$159.99",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                title: "LED Headlight Bulbs",
                category: "Lighting",
                price: "$49.99",
                rating: "⭐⭐⭐⭐⭐",
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
                  }}
                >
                  🚗
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
                  <div style={{ margin: "10px 0", fontSize: "14px" }}>
                    {product.rating}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "rgb(247, 51, 18)",
                      marginBottom: "15px",
                    }}
                  >
                    {product.price}
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
          backgroundColor: "rgb(38, 38, 39)",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h3 style={{ color: "rgb(247, 51, 18)", marginBottom: "20px" }}>
            Brator
          </h3>
          <p>Your trusted partner for car parts and accessories</p>
        </div>
      </footer>
    </main>
  );
}
