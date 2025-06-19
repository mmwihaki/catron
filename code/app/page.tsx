import "./globals.css";

export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{ color: "#F73312", fontSize: "48px", marginBottom: "20px" }}
        >
          Brator - Car Parts & Accessories
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          #1 Online Marketplace for Car Spares OEM & Aftermarkets
        </p>

        <div
          style={{
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
            color: "white",
            padding: "60px",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Find the Perfect Parts for Your Vehicle
          </h2>
          <p style={{ fontSize: "16px", opacity: "0.9" }}>
            Browse our extensive catalog of OEM and aftermarket car parts and
            accessories.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {[
            { title: "Auto Parts", subtitle: "Mesh, Billet, CNC", icon: "🔧" },
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
            { title: "Lighting", subtitle: "LED, Halogen, Xenon", icon: "💡" },
            {
              title: "Suspension",
              subtitle: "Shocks, Struts, Springs",
              icon: "🔩",
            },
          ].map((category, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                border: "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                {category.icon}
              </div>
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
              <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                {category.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            style={{
              background: "#F73312",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </main>
  );
}
