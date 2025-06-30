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
  };

  // Remove from cart function
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

  // Get cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // WhatsApp checkout
  const checkoutViaWhatsApp = () => {
    const total = getCartTotal();
    let message = "Hi! I'd like to order the following items:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.sku})\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: KES ${item.price.toLocaleString()}\n`;
      message += `   Subtotal: KES ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `Total: KES ${total.toLocaleString()}\n\n`;
    message += "Please confirm availability and delivery details.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254700000000?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        fontFamily: '"DM Sans", sans-serif',
        lineHeight: "1.6",
        overflowX: "hidden",
        width: "100vw",
        maxWidth: "100%",
      }}
    >
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
              borderBottom: "1px solid #eee",
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
                color: "#666",
              }}
            >
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", margin: "40px 0" }}>
              Your cart is empty
            </p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "20px",
                    padding: "15px",
                    border: "1px solid #eee",
                    borderRadius: "8px",
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
                    <h4 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>
                      {item.name}
                    </h4>
                    <p
                      style={{
                        margin: "0 0 10px 0",
                        color: "#666",
                        fontSize: "14px",
                      }}
                    >
                      {item.sku}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: "600" }}>
                        KES {item.price.toLocaleString()}
                      </span>
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
                            background: "#f0f0f0",
                            border: "none",
                            width: "30px",
                            height: "30px",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          style={{
                            background: "#f0f0f0",
                            border: "none",
                            width: "30px",
                            height: "30px",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#DC143C",
                            cursor: "pointer",
                            marginLeft: "5px",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                style={{
                  borderTop: "2px solid #eee",
                  paddingTop: "20px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "20px",
                  }}
                >
                  <span>Total:</span>
                  <span>KES {getCartTotal().toLocaleString()}</span>
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
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Checkout via WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Header */}
      <header
        style={{
          background: "#DC143C",
          color: "white",
          padding: "20px 0",
          position: "relative",
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
            <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "bold" }}>
              Catron Kenya
            </h1>
            <span style={{ fontSize: "14px", opacity: "0.9" }}>
              Premium Nissan Parts
            </span>
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
                position: "relative",
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
            zIndex: "2",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Premium Nissan Parts
          </h1>
          <p
            style={{
              fontSize: "24px",
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
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
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
                boxShadow: "0 8px 25px rgba(247, 51, 18, 0.3)",
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

      {/* Categories section */}
      <section
        style={{
          backgroundColor: "rgb(242, 242, 247)",
          padding: "75px 0",
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
              lineHeight: "1.2",
              marginBottom: "35px",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Shop by Categories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              justifyItems: "center",
            }}
          >
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
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "30px",
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
                  <img
                    src={category.image}
                    alt={category.name}
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
                </div>
                <div style={{ marginTop: "auto", textAlign: "center" }}>
                  <h3
                    style={{
                      color: "#000000",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
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
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0",
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
              gap: "20px",
              padding: "0 20px",
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

      {/* Best Seller */}
      <section
        style={{
          background: "white",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0",
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
              gap: "20px",
              padding: "0 20px",
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
                    style={{
                      display: "flex",
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
                    {item.originalPrice && (
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#999",
                          textDecoration: "line-through",
                        }}
                      >
                        KES {item.originalPrice.toLocaleString()}
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

      {/* New Arrivals */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0",
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
              gap: "20px",
              padding: "0 20px",
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
