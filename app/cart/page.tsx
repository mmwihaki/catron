"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";

export default function CartPage() {
  const {
    state,
    updateQuantity,
    removeFromCart,
    clearCart,
    generateWhatsAppMessage,
  } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleWhatsAppCheckout = () => {
    const whatsappUrl = generateWhatsAppMessage();
    window.open(whatsappUrl, "_blank");
  };

  const calculateShipping = () => {
    return state.total >= 5000 ? 0 : 500; // Free shipping over KES 5,000
  };

  const calculateTax = () => {
    return Math.round(state.total * 0.16); // 16% VAT
  };

  const finalTotal = state.total + calculateShipping() + calculateTax();

  if (state.items.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        <Header />

        <div
          style={{
            maxWidth: "600px",
            margin: "80px auto",
            padding: "80px 40px",
            textAlign: "center",
            background: "linear-gradient(135deg, #3A3A3A 0%, #1E1E1E 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(176, 176, 176, 0.2)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              color: "#B0B0B0",
              marginBottom: "32px",
            }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "32px",
              fontWeight: "800",
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            Your Cart is Empty
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#B0B0B0",
              marginBottom: "40px",
              lineHeight: "1.6",
            }}
          >
            Start building your precision parts collection.
            <br />
            Find the perfect components for your Nissan vehicle.
          </p>
          <Link
            href="/shop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 24px rgba(229, 48, 44, 0.4)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Header />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "36px",
              fontWeight: "800",
              color: "#FFFFFF",
              marginBottom: "12px",
            }}
          >
            <span style={{ color: "#E5302C" }}>PRECISION</span> CART
          </h1>
          <p
            style={{
              color: "#B0B0B0",
              fontSize: "16px",
            }}
          >
            {state.itemCount}{" "}
            {state.itemCount === 1 ? "component" : "components"} ready for
            installation
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "40px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #3A3A3A 0%, #1E1E1E 100%)",
              borderRadius: "16px",
              padding: "32px",
              border: "1px solid rgba(176, 176, 176, 0.2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E5302C"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Cart Items
            </h2>

            {state.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr auto auto auto",
                  gap: "20px",
                  alignItems: "center",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(176, 176, 176, 0.1)",
                }}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      border: "2px solid rgba(176, 176, 176, 0.2)",
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      color: "#E5302C",
                      fontWeight: "600",
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.brand}
                  </p>
                  <p
                    style={{
                      color: "#B0B0B0",
                      fontSize: "12px",
                      marginBottom: "2px",
                    }}
                  >
                    SKU: {item.sku}
                  </p>
                  <p
                    style={{
                      color: "#B0B0B0",
                      fontSize: "12px",
                    }}
                  >
                    Fits: {item.carModel}
                  </p>
                </div>

                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Titillium Web', sans-serif",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#FFC107",
                    }}
                  >
                    KES {item.price.toLocaleString()}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#B0B0B0",
                    }}
                  >
                    per unit
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(58, 58, 58, 0.8)",
                    borderRadius: "8px",
                    border: "1px solid rgba(176, 176, 176, 0.3)",
                  }}
                >
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      padding: "8px 16px",
                      color: "#FFFFFF",
                      fontWeight: "700",
                      fontSize: "14px",
                      minWidth: "50px",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    +
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Titillium Web', sans-serif",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#E5302C",
                    }}
                  >
                    KES {(item.price * item.quantity).toLocaleString()}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#DC3545",
                      cursor: "pointer",
                      padding: "8px",
                      borderRadius: "6px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="3,6 5,6 21,6"></polyline>
                      <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              position: "sticky",
              top: "20px",
              height: "fit-content",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(176, 176, 176, 0.2)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFC107"
                  strokeWidth="2"
                >
                  <path d="M9 11H3v-1a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v1h-6m-8 0h12v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5Z" />
                </svg>
                Order Summary
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  fontSize: "16px",
                }}
              >
                <span style={{ color: "#B0B0B0" }}>
                  Subtotal ({state.itemCount} items)
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                  }}
                >
                  KES {state.total.toLocaleString()}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  fontSize: "16px",
                }}
              >
                <span style={{ color: "#B0B0B0" }}>Shipping</span>
                <span
                  style={{
                    color: calculateShipping() === 0 ? "#28A745" : "#FFFFFF",
                    fontWeight: "600",
                  }}
                >
                  {calculateShipping() === 0
                    ? "FREE"
                    : `KES ${calculateShipping().toLocaleString()}`}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              >
                <span style={{ color: "#B0B0B0" }}>VAT (16%)</span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                  }}
                >
                  KES {calculateTax().toLocaleString()}
                </span>
              </div>

              {state.total < 5000 && (
                <div
                  style={{
                    background: "rgba(255, 193, 7, 0.1)",
                    border: "1px solid rgba(255, 193, 7, 0.3)",
                    borderRadius: "8px",
                    padding: "12px",
                    marginBottom: "20px",
                    fontSize: "13px",
                    color: "#FFC107",
                    textAlign: "center",
                  }}
                >
                  🚚 Add KES {(5000 - state.total).toLocaleString()} more for
                  FREE shipping!
                </div>
              )}

              <div
                style={{
                  borderTop: "2px solid rgba(229, 48, 44, 0.3)",
                  paddingTop: "20px",
                  marginTop: "20px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  <span style={{ color: "#FFFFFF" }}>Total</span>
                  <span
                    style={{
                      color: "#E5302C",
                      fontFamily: "'Titillium Web', sans-serif",
                    }}
                  >
                    KES {finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  color: "white",
                  border: "none",
                  padding: "18px 24px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "24px",
                  boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                </svg>
                Checkout via WhatsApp
              </button>

              <div
                style={{
                  background: "rgba(58, 58, 58, 0.5)",
                  borderRadius: "8px",
                  padding: "16px",
                  marginBottom: "20px",
                  fontSize: "13px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    color: "#28A745",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Secure checkout via WhatsApp
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    color: "#007BFF",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Direct communication with experts
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#FFC107",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 3h19l-1.5 9h-15l-1.5-9zm3 0l-1 6m14-6l1 6M7 21h10" />
                  </svg>
                  Same-day delivery in Nairobi
                </div>
              </div>

              <button
                onClick={clearCart}
                style={{
                  width: "100%",
                  background: "transparent",
                  color: "#DC3545",
                  border: "2px solid #DC3545",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart-page {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .cart-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .cart-header {
          margin-bottom: 40px;
        }

        .cart-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .cart-header p {
          color: #6b7280;
          font-size: 16px;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 40px;
        }

        .cart-items {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .cart-item {
          display: grid;
          grid-template-columns: 80px 1fr auto auto auto auto;
          gap: 20px;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .item-image img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
        }

        .item-details h3 {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .item-details p {
          font-size: 14px;
          color: #6b7280;
          margin: 2px 0;
        }

        .item-brand {
          font-weight: 600;
          color: #374151;
        }

        .item-price .price {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          overflow: hidden;
        }

        .quantity-btn {
          background: #f9fafb;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          color: #374151;
          transition: background 0.3s ease;
        }

        .quantity-btn:hover {
          background: #e5e7eb;
        }

        .quantity {
          padding: 8px 16px;
          background: white;
          font-weight: 600;
          min-width: 50px;
          text-align: center;
        }

        .item-total .total {
          font-size: 18px;
          font-weight: 700;
          color: #f73312;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #dc2626;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .remove-btn:hover {
          background: #fef2f2;
        }

        .cart-summary {
          position: sticky;
          top: 20px;
          height: fit-content;
        }

        .summary-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .summary-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 16px;
        }

        .summary-line.total-line {
          border-top: 1px solid #e5e7eb;
          padding-top: 12px;
          margin-top: 20px;
          font-weight: 700;
          font-size: 18px;
        }

        .free {
          color: #10b981;
          font-weight: 600;
        }

        .whatsapp-checkout-btn {
          width: 100%;
          background: #25d366;
          color: white;
          border: none;
          padding: 16px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 24px 0;
        }

        .whatsapp-checkout-btn:hover {
          background: #22c55e;
        }

        .checkout-info {
          margin: 20px 0;
        }

        .checkout-info p {
          font-size: 14px;
          color: #6b7280;
          margin: 8px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clear-cart-btn {
          width: 100%;
          background: transparent;
          color: #dc2626;
          border: 1px solid #dc2626;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .clear-cart-btn:hover {
          background: #dc2626;
          color: white;
        }

        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cart-item {
            grid-template-columns: 60px 1fr;
            gap: 12px;
          }

          .item-price,
          .quantity-controls,
          .item-total {
            grid-column: 2;
            justify-self: start;
            margin-top: 8px;
          }

          .remove-btn {
            grid-column: 2;
            justify-self: end;
            grid-row: 1;
          }
        }
      `}</style>
    </div>
  );
}
