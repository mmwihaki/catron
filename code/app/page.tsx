export default function Home() {
  return (
    <div>
      {/* Header */}
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
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              color: "#F73312",
              fontSize: "32px",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            Brator
          </h1>
          <nav style={{ display: "flex", gap: "30px" }}>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Shop
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              color: "#F73312",
              fontSize: "20px",
              margin: "0 0 20px 0",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            #1 Online Marketplace
          </h2>
          <h1
            style={{
              fontSize: "72px",
              margin: "0 0 30px 0",
              fontWeight: "bold",
              lineHeight: "1.1",
            }}
          >
            Car Spares OEM & Aftermarkets
          </h1>
          <p
            style={{
              fontSize: "20px",
              margin: "0 0 50px 0",
              opacity: "0.9",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Find the perfect parts for your vehicle with our extensive catalog
            of OEM and aftermarket car parts and accessories.
          </p>
          <button
            style={{
              background: "#F73312",
              color: "white",
              border: "none",
              padding: "20px 40px",
              fontSize: "20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section
        style={{
          background: "rgb(242, 242, 247)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            Shop by Categories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              { title: "Auto Parts", desc: "Mesh, Billet, CNC", icon: "🔧" },
              { title: "Car Care", desc: "Polishes, Cleaners", icon: "🧽" },
              {
                title: "Engine Parts",
                desc: "Filters, Belts, Hoses",
                icon: "⚙️",
              },
              {
                title: "Brake System",
                desc: "Pads, Rotors, Fluids",
                icon: "🛞",
              },
              { title: "Lighting", desc: "LED, Halogen, Xenon", icon: "💡" },
              {
                title: "Suspension",
                desc: "Shocks, Struts, Springs",
                icon: "🔩",
              },
            ].map((cat, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "30px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "16px",
                    margin: "0",
                  }}
                >
                  {cat.desc}
                </p>
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
          <h2
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            Featured Products
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                name: "Premium Air Filter",
                price: "$29.99",
                category: "Air Filters",
              },
              {
                name: "Brake Pad Set",
                price: "$89.99",
                category: "Brake Parts",
              },
              {
                name: "LED Headlights",
                price: "$159.99",
                category: "Lighting",
              },
              {
                name: "Engine Oil Filter",
                price: "$19.99",
                category: "Oil Filters",
              },
            ].map((product, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    background: "#f8f9fa",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                  }}
                >
                  🚗
                </div>
                <span
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.category}
                </span>
                <h3
                  style={{
                    fontSize: "20px",
                    margin: "10px 0",
                    fontWeight: "bold",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "#F73312",
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "15px 0",
                  }}
                >
                  {product.price}
                </p>
                <button
                  style={{
                    background: "#F73312",
                    color: "white",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  Add to Cart
                </button>
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
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h3
            style={{
              color: "#F73312",
              fontSize: "36px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Brator
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "40px",
              opacity: "0.9",
            }}
          >
            Your trusted partner for car parts and accessories
          </p>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "30px",
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
