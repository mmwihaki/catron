"use client";

export default function HomePage() {
  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100%",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Add global styles to prevent any horizontal overflow */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        body {
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          background: "#DC143C",
          color: "white",
          padding: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8f459f15ef394aad9ce0a61c2623ab76%2Fa58133469a5d4546b773640e12edeb86?format=webp&width=800"
            alt="Catron Auto Parts"
            style={{ height: "40px", width: "auto" }}
          />
          <span>📞 +254 700 000 000</span>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1
          style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Premium Nissan Parts
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Authentic OEM and high-quality aftermarket parts for your Nissan
        </p>
        <button
          style={{
            background: "#DC143C",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* Essential Items - NO SCROLLING */}
      <section
        style={{
          padding: "80px 20px",
          background: "white",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "50px",
              color: "#333",
            }}
          >
            Essential Items for New Nissan
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              width: "100%",
            }}
          >
            {[
              { name: "Oil Filter Kit", price: "KES 2,500" },
              { name: "Air Filter Set", price: "KES 3,200" },
              { name: "Brake Pads", price: "KES 5,500" },
              { name: "Spark Plugs", price: "KES 4,000" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#f8f9fa",
                  padding: "30px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#DC143C",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                  }}
                >
                  🔧
                </div>
                <h3 style={{ marginBottom: "10px", color: "#333" }}>
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#DC143C",
                    fontWeight: "bold",
                  }}
                >
                  {item.price}
                </p>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    marginTop: "15px",
                    cursor: "pointer",
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

      {/* Best Seller - NO SCROLLING */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f8f9fa",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "50px",
              color: "#333",
            }}
          >
            Best Sellers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              width: "100%",
            }}
          >
            {[
              {
                name: "RIDEX Oil Filter",
                price: "KES 1,300",
                oldPrice: "KES 1,500",
              },
              {
                name: "NGK Spark Plugs",
                price: "KES 4,600",
                oldPrice: "KES 5,200",
              },
              {
                name: "OSRAM Headlights",
                price: "KES 7,500",
                oldPrice: "KES 8,500",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#e74c3c",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  BEST SELLER
                </div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#DC143C",
                    borderRadius: "50%",
                    margin: "20px auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                  }}
                >
                  🚗
                </div>
                <h3 style={{ marginBottom: "10px", color: "#333" }}>
                  {item.name}
                </h3>
                <div style={{ marginBottom: "20px" }}>
                  <span
                    style={{
                      fontSize: "24px",
                      color: "#DC143C",
                      fontWeight: "bold",
                    }}
                  >
                    {item.price}
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#999",
                      textDecoration: "line-through",
                      marginLeft: "10px",
                    }}
                  >
                    {item.oldPrice}
                  </span>
                </div>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "6px",
                    cursor: "pointer",
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

      {/* New Arrivals - NO SCROLLING */}
      <section
        style={{
          padding: "80px 20px",
          background: "white",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "50px",
              color: "#333",
            }}
          >
            New Arrivals
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              width: "100%",
            }}
          >
            {[
              { name: "LED Headlight Kit", price: "KES 12,500" },
              { name: "Performance Air Filter", price: "KES 5,800" },
              { name: "Brake Disc Set", price: "KES 9,200" },
              { name: "Cabin Filter", price: "KES 2,800" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#f8f9fa",
                  padding: "30px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "#27ae60",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  NEW
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#DC143C",
                    borderRadius: "50%",
                    margin: "20px auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                  }}
                >
                  ⚡
                </div>
                <h3 style={{ marginBottom: "10px", color: "#333" }}>
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#DC143C",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {item.price}
                </p>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
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

      {/* FEATURED PRODUCTS - EXACTLY 4, NO SCROLLING */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f8f9fa",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "50px",
              color: "#333",
            }}
          >
            Featured Products
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              width: "100%",
            }}
          >
            {[
              {
                name: "RIDEX Oil Filter",
                sku: "7O0026",
                price: "KES 1,300",
                badge: "BEST SELLER",
              },
              {
                name: "KAVO Air Filter",
                sku: "NA-2650",
                price: "KES 4,500",
                badge: "PREMIUM",
              },
              {
                name: "OSRAM Night Breaker 200",
                sku: "NB200H4",
                price: "KES 7,500",
                badge: "TOP RATED",
              },
              {
                name: "NGK Spark Plugs DIG-S",
                sku: "DILKAR7E11HS",
                price: "KES 4,600",
                badge: "IN STOCK",
              },
            ].map((product, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
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
                    borderRadius: "15px",
                    fontSize: "11px",
                    fontWeight: "bold",
                    zIndex: 2,
                  }}
                >
                  {product.badge}
                </div>
                <div
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    color: "white",
                  }}
                >
                  🔧
                </div>
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#333",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginBottom: "15px",
                    }}
                  >
                    SKU: {product.sku}
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#DC143C",
                      marginBottom: "20px",
                    }}
                  >
                    {product.price}
                  </p>
                  <button
                    style={{
                      width: "100%",
                      background: "#DC143C",
                      color: "white",
                      border: "none",
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "bold",
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
          background: "#1a1a1a",
          color: "white",
          padding: "60px 20px 30px",
          width: "100%",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8f459f15ef394aad9ce0a61c2623ab76%2Fa58133469a5d4546b773640e12edeb86?format=webp&width=800"
            alt="Catron Auto Parts"
            style={{ height: "50px", width: "auto", marginBottom: "20px" }}
          />
          <p style={{ marginBottom: "20px", opacity: "0.8" }}>
            Your trusted source for premium Nissan parts in Kenya
          </p>
          <div
            style={{
              borderTop: "1px solid #333",
              paddingTop: "20px",
              fontSize: "14px",
              opacity: "0.8",
            }}
          >
            © 2024 Catron Kenya. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
