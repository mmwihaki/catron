"use client";

import { useState } from "react";

export default function HomePage() {
  // Cart state management
  const [cart, setCart] = useState<any[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

  // Real product data from your inventory with actual image URLs
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
    {
      id: 5,
      name: "KAVO Cabin Filter",
      category: "Cabin Filter",
      model: "Teana L33 QR25de",
      sku: "NC-2037",
      brand: "KAVO",
      stock: 2,
      price: 4000,
      description: "Aftermarket OE Quality - up-to 15k kms",
      image: "https://images.autodoc.co.uk/images/parts/big/13863570.jpg",
      badge: "LIMITED",
    },
    {
      id: 6,
      name: "LPR Brake Pads",
      category: "Brake Pads",
      model: "E12/K13/N17",
      sku: "05P1686",
      brand: "LPR",
      stock: 1,
      price: 7500,
      description: "Aftermarket OE Quality - 15k - 30k kms",
      image: "https://images.autodoc.co.uk/images/parts/big/15833801.jpg",
      badge: "LAST ONE",
    },
  ];

  // Add to cart function
  const addToCart = (product: any, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setCartVisible(true);
  };

  // Remove from cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  // Calculate total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // WhatsApp checkout
  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;

    let message =
      "Hello! I'd like to order the following items from Catron:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   SKU: ${item.sku}\n`;
      message += `   Model: ${item.model}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: KES ${item.price.toLocaleString()} each\n`;
      message += `   Subtotal: KES ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `Total Amount: KES ${getCartTotal().toLocaleString()}\n\n`;
    message +=
      "Please confirm availability and provide delivery details. Thank you!";

    const whatsappUrl = `https://wa.me/254XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const categories = [
    {
      title: "Oil Filters",
      subtitle: "RIDEX, STARK, Premium Quality",
      code: "OF",
      count: "63 items",
      color: "#e74c3c",
    },
    {
      title: "Air Filters",
      subtitle: "KAVO, JAPKO, TOPRAN, RIDEX",
      code: "AF",
      count: "29 items",
      color: "#3498db",
    },
    {
      title: "Brake System",
      subtitle: "LPR, JAPKO, KAVO, Brembo",
      code: "BS",
      count: "12 items",
      color: "#9b59b6",
    },
    {
      title: "Lighting",
      subtitle: "OSRAM Premium Range",
      code: "LT",
      count: "21 items",
      color: "#f39c12",
    },
    {
      title: "Cabin Filters",
      subtitle: "KAVO, JPN, Denkermann",
      code: "CF",
      count: "5 items",
      color: "#2ecc71",
    },
    {
      title: "Spark Plugs",
      subtitle: "NGK Professional Grade",
      code: "SP",
      count: "39 items",
      color: "#e67e22",
    },
  ];

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif', lineHeight: "1.6" }}>
      {/* Cart Sidebar */}
      {cartVisible && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "400px",
            height: "100vh",
            background: "white",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
            zIndex: "9999",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "2px solid #ecf0f1",
              paddingBottom: "15px",
            }}
          >
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>
              Shopping Cart
            </h3>
            <button
              onClick={() => setCartVisible(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#95a5a6",
              }}
            >
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                color: "#7f8c8d",
              }}
            >
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "20px" }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      gap: "15px",
                      padding: "15px",
                      border: "1px solid #ecf0f1",
                      borderRadius: "8px",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                    <div style={{ flex: "1" }}>
                      <h4
                        style={{
                          margin: "0 0 5px 0",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {item.name}
                      </h4>
                      <p
                        style={{
                          margin: "0 0 5px 0",
                          fontSize: "12px",
                          color: "#7f8c8d",
                        }}
                      >
                        {item.sku} | {item.model}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          style={{
                            background: "#ecf0f1",
                            border: "none",
                            width: "25px",
                            height: "25px",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          style={{
                            background: "#ecf0f1",
                            border: "none",
                            width: "25px",
                            height: "25px",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "#e74c3c",
                            color: "white",
                            border: "none",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "12px",
                            marginLeft: "auto",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                      <p
                        style={{
                          margin: "5px 0 0 0",
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#e74c3c",
                        }}
                      >
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderTop: "2px solid #ecf0f1",
                  paddingTop: "20px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "700" }}>
                    Total:
                  </span>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#e74c3c",
                    }}
                  >
                    KES {getCartTotal().toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={checkoutViaWhatsApp}
                  style={{
                    width: "100%",
                    background: "#25D366",
                    color: "white",
                    border: "none",
                    padding: "15px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "700",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  Checkout via WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Overlay */}
      {cartVisible && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: "9998",
          }}
          onClick={() => setCartVisible(false)}
        />
      )}

      {/* Top promotional banner */}
      <div
        style={{
          background: "#000000",
          color: "#FFD700",
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
          background: "#000000",
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
                background: "linear-gradient(135deg, #DC143C, #B22222)",
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                boxShadow: "0 4px 15px rgba(220, 20, 60, 0.3)",
                color: "#FFD700",
                fontWeight: "bold",
              }}
            >
              C
            </div>
            <div>
              <h1
                style={{
                  color: "#DC143C",
                  fontSize: "32px",
                  fontWeight: "800",
                  margin: "0",
                  letterSpacing: "-1px",
                }}
              >
                Catron
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  margin: "0",
                  color: "#bdc3c7",
                  fontWeight: "500",
                }}
              >
                Premium Nissan Parts Kenya
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
                  background: "linear-gradient(135deg, #DC143C, #B22222)",
                  border: "none",
                  padding: "15px 25px",
                  color: "#FFD700",
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
                  background: "#DC143C",
                  color: "#FFD700",
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
              onClick={() => setCartVisible(true)}
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
                  background: "#DC143C",
                  color: "#FFD700",
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
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <button
              style={{
                background: "linear-gradient(135deg, #DC143C, #B22222)",
                color: "#FFD700",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                boxShadow: "0 4px 15px rgba(220, 20, 60, 0.3)",
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
              background: "#DC143C",
              color: "#FFD700",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "15px",
              boxShadow: "0 4px 15px rgba(220, 20, 60, 0.2)",
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
                      ? "2px solid #DC143C"
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
                color: "#DC143C",
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
                background: "#FFD700",
                color: "#000000",
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

      {/* Hero section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
          color: "white",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
          <div>
            <div
              style={{
                background: "rgba(255, 215, 0, 0.2)",
                color: "#FFD700",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "25px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "25px",
                border: "1px solid rgba(255, 215, 0, 0.3)",
              }}
            >
              #1 TRUSTED AUTO PARTS DEALER IN KENYA
            </div>

            <h1
              style={{
                fontSize: "64px",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "25px",
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
              guaranteed with fast shipping across Kenya.
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
                }}
              >
                View Catalog
              </button>
            </div>

            <div style={{ display: "flex", gap: "35px" }}>
              {[
                { text: "Free Delivery", detail: "Orders >5,000 KES" },
                { text: "2 Year Warranty", detail: "All Products" },
                { text: "Easy Returns", detail: "30 Day Policy" },
              ].map((feature, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    {feature.text}
                  </div>
                  <div style={{ fontSize: "12px", opacity: "0.8" }}>
                    {feature.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              color: "#2c3e50",
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
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
                  options: ["2024", "2023", "2022", "2021", "2020"],
                },
                {
                  label: "Make",
                  options: ["Nissan", "Toyota", "Honda", "Mazda"],
                },
                {
                  label: "Model",
                  options: ["Note E12", "Teana L33", "March K13"],
                },
                { label: "Engine", options: ["DIG-S", "QR25DE", "Puredrive"] },
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
                }}
              >
                Find Compatible Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section
        style={{
          position: "relative",
          backgroundColor: "rgb(242, 242, 247)",
          paddingTop: "75px",
          paddingBottom: "75px",
        }}
      >
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            paddingLeft: "12px",
            paddingRight: "12px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "-12px",
              marginRight: "-12px",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                maxWidth: "100%",
                paddingLeft: "12px",
                paddingRight: "12px",
                width: "100%",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "35px",
                  width: "100%",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "42px",
                      fontWeight: "800",
                      lineHeight: "1.2",
                      marginRight: "35px",
                      position: "relative",
                      color: "#000000",
                      textAlign: "center",
                    }}
                  >
                    Shop by Categories
                  </h2>
                </div>
              </div>
            </div>

            <div
              style={{
                flexShrink: 0,
                maxWidth: "100%",
                paddingLeft: "12px",
                paddingRight: "12px",
                width: "100%",
              }}
            >
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "30px",
                  justifyContent: "center",
                }}
              >
                {/* Auto Parts */}
                <div
                  className="category-card"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "30px",
                    maxWidth: "calc(14.2857% - 30px)",
                    minWidth: "200px",
                    paddingBottom: "25px",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    paddingTop: "60px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    width: "100%",
                    cursor: "pointer",
                    border: "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "60px",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        cursor: "pointer",
                        display: "grid",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="https://brator-main.smartdemowp.com/wp-content/uploads/2021/12/categories-30.png"
                        alt="Auto Parts"
                        width="107"
                        height="71"
                        style={{
                          cursor: "pointer",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "114px",
                          textAlign: "center",
                          width: "107px",
                        }}
                      />
                    </a>
                  </div>
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href="#"
                        className="category-title"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.7",
                          textAlign: "center",
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        Auto Parts
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Mesh, Billet, CNC
                  </div>
                </div>

                {/* Car Care */}
                <div
                  className="category-card"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "30px",
                    maxWidth: "calc(14.2857% - 30px)",
                    minWidth: "200px",
                    paddingBottom: "25px",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    paddingTop: "60px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    width: "100%",
                    cursor: "pointer",
                    border: "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "60px",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        cursor: "pointer",
                        display: "grid",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="https://brator-main.smartdemowp.com/wp-content/uploads/categories-29.png"
                        alt="Car Care"
                        width="108"
                        height="71"
                        style={{
                          cursor: "pointer",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "114px",
                          textAlign: "center",
                          width: "108px",
                        }}
                      />
                    </a>
                  </div>
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.7",
                          textAlign: "center",
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        Car Care
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Polishes, Cleaners
                  </div>
                </div>

                {/* Performance */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "30px",
                    maxWidth: "calc(14.2857% - 30px)",
                    minWidth: "200px",
                    paddingBottom: "25px",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    paddingTop: "60px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    width: "100%",
                    cursor: "pointer",
                    border: "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "60px",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        cursor: "pointer",
                        display: "grid",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="https://brator-main.smartdemowp.com/wp-content/uploads/categories-28.png"
                        alt="Performance"
                        width="116"
                        height="76"
                        style={{
                          cursor: "pointer",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "114px",
                          textAlign: "center",
                          width: "116px",
                        }}
                      />
                    </a>
                  </div>
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.7",
                          textAlign: "center",
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        Performance
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Brakes, Batteries, Turbo
                  </div>
                </div>

                {/* Wheels & Tires */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "30px",
                    maxWidth: "calc(14.2857% - 30px)",
                    minWidth: "200px",
                    paddingBottom: "25px",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    paddingTop: "60px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    width: "100%",
                    cursor: "pointer",
                    border: "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "60px",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        cursor: "pointer",
                        display: "grid",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="https://brator-main.smartdemowp.com/wp-content/uploads/2021/11/categories-09.png"
                        alt="Wheels & Tires"
                        width="101"
                        height="81"
                        style={{
                          cursor: "pointer",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "114px",
                          textAlign: "center",
                          width: "101px",
                        }}
                      />
                    </a>
                  </div>
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.7",
                          textAlign: "center",
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        Wheels & Tires
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Tires, TMPS Sensor
                  </div>
                </div>

                {/* Exteriors */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "30px",
                    maxWidth: "calc(14.2857% - 30px)",
                    minWidth: "200px",
                    paddingBottom: "25px",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    paddingTop: "60px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    width: "100%",
                    cursor: "pointer",
                    border: "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "60px",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        cursor: "pointer",
                        display: "grid",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="https://brator-main.smartdemowp.com/wp-content/uploads/categories-27.png"
                        alt="Exteriors"
                        width="122"
                        height="80"
                        style={{
                          cursor: "pointer",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "114px",
                          textAlign: "center",
                          width: "122px",
                        }}
                      />
                    </a>
                  </div>
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.7",
                          textAlign: "center",
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        Exteriors
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Lighting, Body, Wipers
                  </div>
                </div>

                {/* Interiors */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "30px",
                    maxWidth: "calc(14.2857% - 30px)",
                    minWidth: "200px",
                    paddingBottom: "25px",
                    paddingLeft: "17px",
                    paddingRight: "17px",
                    paddingTop: "60px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    width: "100%",
                    cursor: "pointer",
                    border: "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "60px",
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        cursor: "pointer",
                        display: "grid",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src="https://brator-main.smartdemowp.com/wp-content/uploads/categories-26.png"
                        alt="Interiors"
                        width="128"
                        height="84"
                        style={{
                          cursor: "pointer",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "114px",
                          textAlign: "center",
                          width: "128px",
                        }}
                      />
                    </a>
                  </div>
                  <div style={{ marginTop: "auto", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.7",
                          textAlign: "center",
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        Interiors
                      </a>
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Steering Wheels, Seats
                  </div>
                </div>
              </div>

              {/* Load More Button */}
              <div
                style={{
                  marginTop: "50px",
                  textAlign: "center",
                }}
              >
                <button
                  className="load-more-btn"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #DC143C",
                    borderRadius: "4px",
                    color: "#DC143C",
                    cursor: "pointer",
                    display: "inline-block",
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: "700",
                    height: "52px",
                    lineHeight: "16px",
                    paddingBottom: "15px",
                    paddingLeft: "53px",
                    paddingRight: "53px",
                    paddingTop: "15px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    transition: "all 0.3s ease",
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Items for New Car */}
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
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
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
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#DC143C",
                    marginBottom: "15px",
                  }}
                >
                  KES {item.price.toLocaleString()}
                </p>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seller */}
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
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                name: "RIDEX Oil Filter",
                bestseller: true,
                price: 1300,
                originalPrice: 1500,
              },
              {
                name: "NGK Spark Plugs",
                bestseller: true,
                price: 4600,
                originalPrice: 5200,
              },
              {
                name: "OSRAM Headlights",
                bestseller: true,
                price: 7500,
                originalPrice: 8500,
              },
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
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    color: "#DC143C",
                  }}
                >
                  🔧
                </div>
                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#2c3e50",
                      marginBottom: "15px",
                    }}
                  >
                    {item.name}
                  </h3>
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
                        color: "#DC143C",
                      }}
                    >
                      KES {item.price.toLocaleString()}
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#95a5a6",
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
                      borderRadius: "10px",
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

      {/* New Arrivals */}
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
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              { name: "LED Headlight Kit", isNew: true, price: 12500 },
              { name: "Performance Air Filter", isNew: true, price: 5800 },
              { name: "Brake Disc Set", isNew: true, price: 9200 },
              { name: "Cabin Filter", isNew: true, price: 2800 },
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
                    background: "#DC143C",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  ⚡
                </div>
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
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#DC143C",
                    marginBottom: "15px",
                  }}
                >
                  KES {item.price.toLocaleString()}
                </p>
                <button
                  style={{
                    background: "#DC143C",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips and Guides */}
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
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            Tips and Guides
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Expert advice for maintaining your Nissan vehicle
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "Oil Change Guide",
                description:
                  "Learn how to change your Nissan engine oil properly",
                readTime: "5 min read",
              },
              {
                title: "Brake Maintenance",
                description:
                  "Essential brake system maintenance for your Nissan",
                readTime: "7 min read",
              },
              {
                title: "Filter Replacement",
                description: "When and how to replace air and oil filters",
                readTime: "4 min read",
              },
            ].map((guide, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  border: "1px solid #f1f2f6",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#DC143C",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    color: "white",
                    marginBottom: "20px",
                  }}
                >
                  📖
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: "#2c3e50",
                  }}
                >
                  {guide.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7f8c8d",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  {guide.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#95a5a6",
                    }}
                  >
                    {guide.readTime}
                  </span>
                  <button
                    style={{
                      background: "transparent",
                      color: "#DC143C",
                      border: "1px solid #DC143C",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
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
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            Featured Brands
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#7f8c8d",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Trusted brands for your Nissan vehicle
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              { name: "RIDEX", description: "Premium oil filters" },
              { name: "KAVO", description: "Air filtration systems" },
              { name: "OSRAM", description: "Lighting solutions" },
              { name: "NGK", description: "Spark plugs & ignition" },
              { name: "BOSCH", description: "Engine components" },
              { name: "MANN", description: "Filter technology" },
            ].map((brand, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#DC143C",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                    margin: "0 auto 20px",
                  }}
                >
                  {brand.name.substring(0, 2)}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#2c3e50",
                  }}
                >
                  {brand.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7f8c8d",
                  }}
                >
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with real inventory and KES pricing */}
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
                Premium quality Nissan parts from trusted brands
              </p>
            </div>
            <a
              href="#"
              style={{
                color: "rgb(247, 51, 18)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
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
                  transition: "transform 0.3s ease",
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
                            : product.badge === "LIMITED"
                              ? "#e67e22"
                              : product.badge === "LAST ONE"
                                ? "#c0392b"
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
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#f8f9fa",
                    position: "relative",
                  }}
                >
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
                    }}
                  >
                    ♡
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
                    <span>Model: {product.model}</span>
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

                  {/* Price in KES */}
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
                      KES {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#95a5a6",
                          textDecoration: "line-through",
                        }}
                      >
                        KES {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
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
                    }}
                  >
                    {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
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
            Stay Updated with Catron Kenya
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "40px",
              opacity: "0.95",
            }}
          >
            Get exclusive deals on Nissan parts, new arrivals, and Nissan tips
            delivered to your inbox
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
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  C
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
                    Catron Kenya
                  </h3>
                  <p
                    style={{ fontSize: "12px", margin: "0", color: "#bdc3c7" }}
                  >
                    Premium Nissan Parts
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
                Quick Links
              </h4>
              {[
                "About Catron",
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
                    fontSize: "14px",
                  }}
                >
                  {link}
                </a>
              ))}
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
                    fontSize: "14px",
                  }}
                >
                  {category}
                </a>
              ))}
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
                Quality Promise
              </h4>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px",
                }}
              >
                {[
                  { text: "Authentic Nissan Parts" },
                  { text: "Fast Delivery" },
                  { text: "Genuine OEM" },
                  { text: "Quality Assured" },
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
                    <div style={{ fontSize: "11px", fontWeight: "600" }}>
                      {trust.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
              © 2024 Catron Kenya. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
              <span style={{ fontSize: "14px", opacity: "0.8" }}>
                Trusted by 5,000+ customers in Kenya
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
