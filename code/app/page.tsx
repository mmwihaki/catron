"use client";

import { useState } from "react";

const HomePage: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

  // Featured products - EXACTLY 4 PRODUCTS
  const featuredProducts = [
    {
      id: 1,
      name: "RIDEX Oil Filter",
      category: "Oil Filter",
      model: "E12/K13/N17",
      sku: "7O0026",
      brand: "RIDEX",
      stock: 30,
      price: 1300,
      description: "up to 10k kms",
      image:
        "https://www.autodoc.co.uk/media/catalog/product/cache/3/image/1200x/17f82f742ffe127f42dca9de82fb58b1/7/o/7o0026_ridex_oil_filter.jpg",
      badge: "BEST SELLER",
    },
    {
      id: 2,
      name: "KAVO Air Filter",
      category: "Air Filter",
      model: "Teana L33 QR25de",
      sku: "NA-2650",
      brand: "KAVO",
      stock: 4,
      price: 4500,
      description: "Aftermarket OE Quality up-to 15k kms",
      image: "https://images.autodoc.co.uk/images/parts/big/13863456.jpg",
      badge: "PREMIUM",
    },
    {
      id: 3,
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
        "https://dammedia.osram.info/media/resource/hires/osram-dam-2414533/NB200_all_12V.png",
      badge: "TOP RATED",
    },
    {
      id: 4,
      name: "NGK Spark Plugs DIG-S",
      category: "Spark Plugs",
      model: "Note E12 DIG-S",
      sku: "DILKAR7E11HS",
      brand: "NGK",
      stock: 33,
      price: 4600,
      description: "High Performance",
      image:
        "https://cdn.sparkplugs.co.uk/images/products/large/ngk-spark-plug-dilkar7e11hs-97439.jpg",
      badge: "IN STOCK",
    },
  ];

  return (
    <div className="no-overflow">
      {/* Header */}
      <header
        style={{
          background: "#DC143C",
          color: "white",
          padding: "20px 0",
          width: "100%",
        }}
      >
        <div
          className="container flex-container"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8f459f15ef394aad9ce0a61c2623ab76%2Fa58133469a5d4546b773640e12edeb86?format=webp&width=800"
              alt="Catron Auto Parts - Happy car ownership"
              style={{ height: "40px", width: "auto", maxWidth: "200px" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>📞 +254 700 000 000</span>
            <button
              onClick={() => setCartVisible(true)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              🛒 Cart ({cart.length})
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <h1 style={{ marginBottom: "20px", lineHeight: "1.2" }}>
            Premium Nissan Parts
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              marginBottom: "40px",
              opacity: "0.9",
              maxWidth: "600px",
              margin: "0 auto 40px auto",
            }}
          >
            Authentic OEM and high-quality aftermarket parts for your Nissan
            vehicle in Kenya
          </p>
          <div
            className="flex-container"
            style={{
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <button
              style={{
                background: "#DC143C",
                color: "white",
                border: "none",
                padding: "18px 35px",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
            <button
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid white",
                padding: "16px 35px",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Find Compatible Parts
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          padding: "75px 0",
          width: "100%",
        }}
      >
        <div className="container">
          <h2
            style={{
              marginBottom: "35px",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Shop by Categories
          </h2>
          <div className="responsive-grid responsive-grid-4">
            {[
              {
                name: "Auto Parts",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/2021/12/categories-30.png",
              },
              {
                name: "Car Care",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/categories-29.png",
              },
              {
                name: "Performance",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/categories-28.png",
              },
              {
                name: "Wheels & Tires",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/2021/11/categories-09.png",
              },
              {
                name: "Exteriors",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/categories-27.png",
              },
              {
                name: "Interiors",
                image:
                  "https://brator-main.smartdemowp.com/wp-content/uploads/categories-26.png",
              },
            ].map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "30px 20px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: "2px solid transparent",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    width: "80px",
                    height: "60px",
                    objectFit: "contain",
                    marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
                    margin: 0,
                  }}
                >
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Items Section */}
      <section
        style={{
          background: "white",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <div className="container">
          <h2
            style={{
              marginBottom: "20px",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            Essential Items for New Nissan
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Get your new Nissan ready with these essential maintenance items
          </p>
          <div className="responsive-grid responsive-grid-3">
            {[
              {
                name: "Oil Filter Kit",
                price: 2500,
                image:
                  "https://images.autodoc.de/categorypictures/oil-filter-1.jpg",
              },
              {
                name: "Air Filter Set",
                price: 3200,
                image:
                  "https://images.autodoc.de/categorypictures/air-filter-1.jpg",
              },
              {
                name: "Brake Pads",
                price: 5500,
                image:
                  "https://images.autodoc.de/categorypictures/brake-pads-1.jpg",
              },
              {
                name: "Spark Plugs",
                price: 4000,
                image:
                  "https://images.autodoc.de/categorypictures/spark-plugs-1.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#2c3e50",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#DC143C",
                    marginBottom: "20px",
                  }}
                >
                  KES {item.price.toLocaleString()}
                </p>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
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

      {/* Best Seller Section */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <div className="container">
          <h2
            style={{
              marginBottom: "20px",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            Best Sellers
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Most popular Nissan parts chosen by our customers
          </p>
          <div className="responsive-grid responsive-grid-2">
            {[
              { name: "RIDEX Oil Filter", price: 1300, originalPrice: 1500 },
              { name: "NGK Spark Plugs", price: 4600, originalPrice: 5200 },
              { name: "OSRAM Headlights", price: 7500, originalPrice: 8500 },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  position: "relative",
                  border: "1px solid #f1f2f6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#e74c3c",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  BEST SELLER
                </div>
                <div
                  style={{
                    height: "200px",
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&crop=center)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "10px",
                      color: "#2c3e50",
                    }}
                  >
                    {item.name}
                  </h3>
                  <div
                    className="flex-container"
                    style={{
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#DC143C",
                      }}
                    >
                      KES {item.price.toLocaleString()}
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#999",
                        textDecoration: "line-through",
                      }}
                    >
                      KES {item.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      background: "#DC143C",
                      color: "white",
                      border: "none",
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
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

      {/* New Arrivals Section */}
      <section
        style={{
          background: "white",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <div className="container">
          <h2
            style={{
              marginBottom: "20px",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            New Arrivals
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Latest Nissan parts and accessories just arrived
          </p>
          <div className="responsive-grid responsive-grid-3">
            {[
              { name: "LED Headlight Kit", price: 12500 },
              { name: "Performance Air Filter", price: 5800 },
              { name: "Brake Disc Set", price: 9200 },
              { name: "Cabin Filter", price: 2800 },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "#27ae60",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  NEW
                </div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=80&h=80&fit=crop&crop=center)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    border: "3px solid #DC143C",
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#2c3e50",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#DC143C",
                    marginBottom: "20px",
                  }}
                >
                  KES {item.price.toLocaleString()}
                </p>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
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
          background: "#f8f9fa",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <div className="container">
          <h2
            style={{
              marginBottom: "20px",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            Featured Products
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Premium quality Nissan parts from trusted brands
          </p>
          <div className="responsive-grid responsive-grid-2">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  position: "relative",
                  border: "1px solid #f1f2f6",
                  width: "100%",
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
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    zIndex: 2,
                  }}
                >
                  {product.badge}
                </div>
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
                    zIndex: 2,
                  }}
                >
                  {product.stock > 10
                    ? "In Stock"
                    : product.stock > 0
                      ? `${product.stock} Left`
                      : "Out of Stock"}
                </div>
                <div
                  style={{
                    height: "200px",
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div style={{ padding: "25px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    {product.category}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "8px",
                      color: "#2c3e50",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginBottom: "5px",
                    }}
                  >
                    Model: {product.model}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      marginBottom: "15px",
                    }}
                  >
                    SKU: {product.sku} | {product.description}
                  </p>
                  <div
                    className="flex-container"
                    style={{
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#DC143C",
                      }}
                    >
                      KES {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#999",
                          textDecoration: "line-through",
                        }}
                      >
                        KES {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button
                    style={{
                      width: "100%",
                      background: "#DC143C",
                      color: "white",
                      border: "none",
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
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
          padding: "80px 0 40px 0",
          width: "100%",
        }}
      >
        <div className="container">
          <div
            className="responsive-grid responsive-grid-2"
            style={{ marginBottom: "50px" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F8f459f15ef394aad9ce0a61c2623ab76%2Fa58133469a5d4546b773640e12edeb86?format=webp&width=800"
                  alt="Catron Auto Parts - Happy car ownership"
                  style={{ height: "50px", width: "auto", maxWidth: "200px" }}
                />
              </div>
              <p
                style={{
                  opacity: "0.8",
                  lineHeight: "1.6",
                  marginBottom: "25px",
                }}
              >
                Your trusted source for premium Nissan parts in Kenya. We
                specialize in authentic OEM and high-quality aftermarket
                components specifically for Nissan vehicles.
              </p>
            </div>
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "10px",
                }}
              >
                {[
                  "Oil Filters",
                  "Air Filters",
                  "Brake Systems",
                  "Lighting Solutions",
                  "Spark Plugs",
                  "Cabin Filters",
                ].map((category) => (
                  <a
                    key={category}
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #333",
              paddingTop: "30px",
              textAlign: "center",
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
};

export default HomePage;
